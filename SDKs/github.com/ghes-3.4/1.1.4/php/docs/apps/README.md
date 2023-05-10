# apps

## Overview

Information for integrations and installations.

### Available Operations

* [appsAddRepoToInstallationForAuthenticatedUser](#appsaddrepotoinstallationforauthenticateduser) - Add a repository to an app installation
* [appsCheckToken](#appschecktoken) - Check a token
* [appsCreateFromManifest](#appscreatefrommanifest) - Create a GitHub App from a manifest
* [appsCreateInstallationAccessToken](#appscreateinstallationaccesstoken) - Create an installation access token for an app
* [appsDeleteAuthorization](#appsdeleteauthorization) - Delete an app authorization
* [appsDeleteInstallation](#appsdeleteinstallation) - Delete an installation for the authenticated app
* [appsDeleteToken](#appsdeletetoken) - Delete an app token
* [appsGetAuthenticated](#appsgetauthenticated) - Get the authenticated app
* [appsGetBySlug](#appsgetbyslug) - Get an app
* [appsGetInstallation](#appsgetinstallation) - Get an installation for the authenticated app
* [appsGetOrgInstallation](#appsgetorginstallation) - Get an organization installation for the authenticated app
* [appsGetRepoInstallation](#appsgetrepoinstallation) - Get a repository installation for the authenticated app
* [appsGetUserInstallation](#appsgetuserinstallation) - Get a user installation for the authenticated app
* [appsGetWebhookConfigForApp](#appsgetwebhookconfigforapp) - Get a webhook configuration for an app
* [appsGetWebhookDelivery](#appsgetwebhookdelivery) - Get a delivery for an app webhook
* [appsListInstallationReposForAuthenticatedUser](#appslistinstallationreposforauthenticateduser) - List repositories accessible to the user access token
* [appsListInstallations](#appslistinstallations) - List installations for the authenticated app
* [appsListInstallationsForAuthenticatedUser](#appslistinstallationsforauthenticateduser) - List app installations accessible to the user access token
* [appsListReposAccessibleToInstallation](#appslistreposaccessibletoinstallation) - List repositories accessible to the app installation
* [appsListWebhookDeliveries](#appslistwebhookdeliveries) - List deliveries for an app webhook
* [appsRedeliverWebhookDelivery](#appsredeliverwebhookdelivery) - Redeliver a delivery for an app webhook
* [appsRemoveRepoFromInstallationForAuthenticatedUser](#appsremoverepofrominstallationforauthenticateduser) - Remove a repository from an app installation
* [appsResetToken](#appsresettoken) - Reset a token
* [appsRevokeInstallationAccessToken](#appsrevokeinstallationaccesstoken) - Revoke an installation access token
* [appsScopeToken](#appsscopetoken) - Create a scoped access token
* [appsSuspendInstallation](#appssuspendinstallation) - Suspend an app installation
* [appsUnsuspendInstallation](#appsunsuspendinstallation) - Unsuspend an app installation
* [appsUpdateWebhookConfigForApp](#appsupdatewebhookconfigforapp) - Update a webhook configuration for an app

## appsAddRepoToInstallationForAuthenticatedUser

Add a single repository to an installation. The authenticated user must have admin access to the repository.

You must use a personal access token (which you can create via the [command line](https://docs.github.com/enterprise-server@3.4/github/authenticating-to-github/creating-a-personal-access-token) or [Basic Authentication](https://docs.github.com/enterprise-server@3.4/rest/overview/other-authentication-methods#basic-authentication)) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/apps#add-a-repository-to-an-app-installation>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppsAddRepoToInstallationForAuthenticatedUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppsAddRepoToInstallationForAuthenticatedUserRequest();
    $request->installationId = 186458;
    $request->repositoryId = 586784;

    $response = $sdk->apps->appsAddRepoToInstallationForAuthenticatedUser($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appsCheckToken

OAuth applications can use a special API method for checking OAuth token validity without exceeding the normal rate limits for failed login attempts. Authentication works differently with this particular endpoint. You must use [Basic Authentication](https://docs.github.com/enterprise-server@3.4/rest/overview/other-authentication-methods#basic-authentication) to use this endpoint, where the username is the OAuth application `client_id` and the password is its `client_secret`. Invalid tokens will return `404 NOT FOUND`.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/apps#check-a-token>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppsCheckTokenRequest;
use \OpenAPI\OpenAPI\Models\Operations\AppsCheckTokenRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppsCheckTokenRequest();
    $request->requestBody = new AppsCheckTokenRequestBody();
    $request->requestBody->accessToken = 'maxime';
    $request->clientId = 'pariatur';

    $response = $sdk->apps->appsCheckToken($request);

    if ($response->authorization !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appsCreateFromManifest

Use this endpoint to complete the handshake necessary when implementing the [GitHub App Manifest flow](https://docs.github.com/enterprise-server@3.4/apps/building-github-apps/creating-github-apps-from-a-manifest/). When you create a GitHub App with the manifest flow, you receive a temporary `code` used to retrieve the GitHub App's `id`, `pem` (private key), and `webhook_secret`.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/apps#create-a-github-app-from-a-manifest>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppsCreateFromManifestRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppsCreateFromManifestRequest();
    $request->code = 'soluta';

    $response = $sdk->apps->appsCreateFromManifest($request);

    if ($response->gitHubApp !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appsCreateInstallationAccessToken

Creates an installation access token that enables a GitHub App to make authenticated API requests for the app's installation on an organization or individual account. Installation tokens expire one hour from the time you create them. Using an expired token produces a status code of `401 - Unauthorized`, and requires creating a new installation token. By default the installation token has access to all repositories that the installation can access. To restrict the access to specific repositories, you can provide the `repository_ids` when creating the token. When you omit `repository_ids`, the response does not contain the `repositories` key.

You must use a [JWT](https://docs.github.com/enterprise-server@3.4/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/apps/#create-an-installation-access-token-for-an-app>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppsCreateInstallationAccessTokenRequest;
use \OpenAPI\OpenAPI\Models\Operations\AppsCreateInstallationAccessTokenRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\AppPermissions;
use \OpenAPI\OpenAPI\Models\Shared\AppPermissionsActionsEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppPermissionsAdministrationEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppPermissionsChecksEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppPermissionsContentsEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppPermissionsDeploymentsEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppPermissionsEnvironmentsEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppPermissionsIssuesEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppPermissionsMembersEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppPermissionsMetadataEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppPermissionsOrganizationAdministrationEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppPermissionsOrganizationHooksEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppPermissionsOrganizationPackagesEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppPermissionsOrganizationPlanEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppPermissionsOrganizationProjectsEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppPermissionsOrganizationSecretsEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppPermissionsOrganizationSelfHostedRunnersEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppPermissionsOrganizationUserBlockingEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppPermissionsPackagesEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppPermissionsPagesEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppPermissionsPullRequestsEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppPermissionsRepositoryHooksEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppPermissionsRepositoryProjectsEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppPermissionsSecretScanningAlertsEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppPermissionsSecretsEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppPermissionsSecurityEventsEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppPermissionsSingleFileEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppPermissionsStatusesEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppPermissionsTeamDiscussionsEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppPermissionsVulnerabilityAlertsEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppPermissionsWorkflowsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppsCreateInstallationAccessTokenRequest();
    $request->requestBody = new AppsCreateInstallationAccessTokenRequestBody();
    $request->requestBody->permissions = new AppPermissions();
    $request->requestBody->permissions->actions = AppPermissionsActionsEnum::READ;
    $request->requestBody->permissions->administration = AppPermissionsAdministrationEnum::WRITE;
    $request->requestBody->permissions->checks = AppPermissionsChecksEnum::WRITE;
    $request->requestBody->permissions->contents = AppPermissionsContentsEnum::READ;
    $request->requestBody->permissions->deployments = AppPermissionsDeploymentsEnum::READ;
    $request->requestBody->permissions->environments = AppPermissionsEnvironmentsEnum::READ;
    $request->requestBody->permissions->issues = AppPermissionsIssuesEnum::WRITE;
    $request->requestBody->permissions->members = AppPermissionsMembersEnum::WRITE;
    $request->requestBody->permissions->metadata = AppPermissionsMetadataEnum::READ;
    $request->requestBody->permissions->organizationAdministration = AppPermissionsOrganizationAdministrationEnum::READ;
    $request->requestBody->permissions->organizationHooks = AppPermissionsOrganizationHooksEnum::WRITE;
    $request->requestBody->permissions->organizationPackages = AppPermissionsOrganizationPackagesEnum::WRITE;
    $request->requestBody->permissions->organizationPlan = AppPermissionsOrganizationPlanEnum::READ;
    $request->requestBody->permissions->organizationProjects = AppPermissionsOrganizationProjectsEnum::READ;
    $request->requestBody->permissions->organizationSecrets = AppPermissionsOrganizationSecretsEnum::READ;
    $request->requestBody->permissions->organizationSelfHostedRunners = AppPermissionsOrganizationSelfHostedRunnersEnum::READ;
    $request->requestBody->permissions->organizationUserBlocking = AppPermissionsOrganizationUserBlockingEnum::READ;
    $request->requestBody->permissions->packages = AppPermissionsPackagesEnum::READ;
    $request->requestBody->permissions->pages = AppPermissionsPagesEnum::READ;
    $request->requestBody->permissions->pullRequests = AppPermissionsPullRequestsEnum::READ;
    $request->requestBody->permissions->repositoryHooks = AppPermissionsRepositoryHooksEnum::WRITE;
    $request->requestBody->permissions->repositoryProjects = AppPermissionsRepositoryProjectsEnum::ADMIN;
    $request->requestBody->permissions->secretScanningAlerts = AppPermissionsSecretScanningAlertsEnum::READ;
    $request->requestBody->permissions->secrets = AppPermissionsSecretsEnum::WRITE;
    $request->requestBody->permissions->securityEvents = AppPermissionsSecurityEventsEnum::WRITE;
    $request->requestBody->permissions->singleFile = AppPermissionsSingleFileEnum::WRITE;
    $request->requestBody->permissions->statuses = AppPermissionsStatusesEnum::READ;
    $request->requestBody->permissions->teamDiscussions = AppPermissionsTeamDiscussionsEnum::WRITE;
    $request->requestBody->permissions->vulnerabilityAlerts = AppPermissionsVulnerabilityAlertsEnum::READ;
    $request->requestBody->permissions->workflows = AppPermissionsWorkflowsEnum::WRITE;
    $request->requestBody->repositories = [
        'rails',
    ];
    $request->requestBody->repositoryIds = [
        552193,
        731694,
        584476,
    ];
    $request->installationId = 45614;

    $response = $sdk->apps->appsCreateInstallationAccessToken($request);

    if ($response->installationToken !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appsDeleteAuthorization

OAuth application owners can revoke a grant for their OAuth application and a specific user. You must use [Basic Authentication](https://docs.github.com/enterprise-server@3.4/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password. You must also provide a valid OAuth `access_token` as an input parameter and the grant for the token's owner will be deleted.
Deleting an OAuth application's grant will also delete all OAuth tokens associated with the application for the user. Once deleted, the application will have no access to the user's account and will no longer be listed on [the application authorizations settings screen within GitHub](https://github.com/settings/applications#authorized).

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/apps#delete-an-app-authorization>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppsDeleteAuthorizationRequest;
use \OpenAPI\OpenAPI\Models\Operations\AppsDeleteAuthorizationRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppsDeleteAuthorizationRequest();
    $request->requestBody = new AppsDeleteAuthorizationRequestBody();
    $request->requestBody->accessToken = 'delectus';
    $request->clientId = 'dolorem';

    $response = $sdk->apps->appsDeleteAuthorization($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appsDeleteInstallation

Uninstalls a GitHub App on a user, organization, or business account. If you prefer to temporarily suspend an app's access to your account's resources, then we recommend the "[Suspend an app installation](https://docs.github.com/enterprise-server@3.4/rest/reference/apps/#suspend-an-app-installation)" endpoint.

You must use a [JWT](https://docs.github.com/enterprise-server@3.4/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/apps#delete-an-installation-for-the-authenticated-app>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppsDeleteInstallationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppsDeleteInstallationRequest();
    $request->installationId = 292147;

    $response = $sdk->apps->appsDeleteInstallation($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appsDeleteToken

OAuth application owners can revoke a single token for an OAuth application. You must use [Basic Authentication](https://docs.github.com/enterprise-server@3.4/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/apps#delete-an-app-token>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppsDeleteTokenRequest;
use \OpenAPI\OpenAPI\Models\Operations\AppsDeleteTokenRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppsDeleteTokenRequest();
    $request->requestBody = new AppsDeleteTokenRequestBody();
    $request->requestBody->accessToken = 'labore';
    $request->clientId = 'adipisci';

    $response = $sdk->apps->appsDeleteToken($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appsGetAuthenticated

Returns the GitHub App associated with the authentication credentials used. To see how many app installations are associated with this GitHub App, see the `installations_count` in the response. For more details about your app's installations, see the "[List installations for the authenticated app](https://docs.github.com/enterprise-server@3.4/rest/reference/apps#list-installations-for-the-authenticated-app)" endpoint.

You must use a [JWT](https://docs.github.com/enterprise-server@3.4/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/apps#get-the-authenticated-app>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->apps->appsGetAuthenticated();

    if ($response->integration !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appsGetBySlug

**Note**: The `:app_slug` is just the URL-friendly name of your GitHub App. You can find this on the settings page for your GitHub App (e.g., `https://github.com/settings/apps/:app_slug`).

If the GitHub App you specify is public, you can access this endpoint without authenticating. If the GitHub App you specify is private, you must authenticate with a [personal access token](https://docs.github.com/enterprise-server@3.4/articles/creating-a-personal-access-token-for-the-command-line/) or an [installation access token](https://docs.github.com/enterprise-server@3.4/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/apps/#get-an-app>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppsGetBySlugRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppsGetBySlugRequest();
    $request->appSlug = 'dolorum';

    $response = $sdk->apps->appsGetBySlug($request);

    if ($response->integration !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appsGetInstallation

Enables an authenticated GitHub App to find an installation's information using the installation id.

You must use a [JWT](https://docs.github.com/enterprise-server@3.4/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/apps#get-an-installation-for-the-authenticated-app>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppsGetInstallationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppsGetInstallationRequest();
    $request->installationId = 100294;

    $response = $sdk->apps->appsGetInstallation($request);

    if ($response->installation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appsGetOrgInstallation

Enables an authenticated GitHub App to find the organization's installation information.

You must use a [JWT](https://docs.github.com/enterprise-server@3.4/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/apps#get-an-organization-installation-for-the-authenticated-app>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppsGetOrgInstallationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppsGetOrgInstallationRequest();
    $request->org = 'quae';

    $response = $sdk->apps->appsGetOrgInstallation($request);

    if ($response->installation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appsGetRepoInstallation

Enables an authenticated GitHub App to find the repository's installation information. The installation's account type will be either an organization or a user account, depending which account the repository belongs to.

You must use a [JWT](https://docs.github.com/enterprise-server@3.4/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/apps#get-a-repository-installation-for-the-authenticated-app>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppsGetRepoInstallationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppsGetRepoInstallationRequest();
    $request->owner = 'aut';
    $request->repo = 'quas';

    $response = $sdk->apps->appsGetRepoInstallation($request);

    if ($response->installation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appsGetUserInstallation

Enables an authenticated GitHub App to find the user’s installation information.

You must use a [JWT](https://docs.github.com/enterprise-server@3.4/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/apps#get-a-user-installation-for-the-authenticated-app>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppsGetUserInstallationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppsGetUserInstallationRequest();
    $request->username = 'Toby_Altenwerth78';

    $response = $sdk->apps->appsGetUserInstallation($request);

    if ($response->installation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appsGetWebhookConfigForApp

Returns the webhook configuration for a GitHub App. For more information about configuring a webhook for your app, see "[Creating a GitHub App](/developers/apps/creating-a-github-app)."

You must use a [JWT](https://docs.github.com/enterprise-server@3.4/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/apps#get-a-webhook-configuration-for-an-app>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->apps->appsGetWebhookConfigForApp();

    if ($response->webhookConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appsGetWebhookDelivery

Returns a delivery for the webhook configured for a GitHub App.

You must use a [JWT](https://docs.github.com/enterprise-server@3.4/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/apps#get-a-delivery-for-an-app-webhook>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppsGetWebhookDeliveryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppsGetWebhookDeliveryRequest();
    $request->deliveryId = 984330;

    $response = $sdk->apps->appsGetWebhookDelivery($request);

    if ($response->hookDelivery !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appsListInstallationReposForAuthenticatedUser

List repositories that the authenticated user has explicit permission (`:read`, `:write`, or `:admin`) to access for an installation.

The authenticated user has explicit permission to access repositories they own, repositories where they are a collaborator, and repositories that they can access through an organization membership.

You must use a [user-to-server OAuth access token](https://docs.github.com/enterprise-server@3.4/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site), created for a user who has authorized your GitHub App, to access this endpoint.

The access the user has to each repository is included in the hash under the `permissions` key.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/apps#list-repositories-accessible-to-the-user-access-token>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppsListInstallationReposForAuthenticatedUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppsListInstallationReposForAuthenticatedUserRequest();
    $request->installationId = 281730;
    $request->page = 703495;
    $request->perPage = 586410;

    $response = $sdk->apps->appsListInstallationReposForAuthenticatedUser($request);

    if ($response->appsListInstallationReposForAuthenticatedUser200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appsListInstallations

You must use a [JWT](https://docs.github.com/enterprise-server@3.4/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

The permissions the installation has are included under the `permissions` key.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/apps#list-installations-for-the-authenticated-app>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppsListInstallationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppsListInstallationsRequest();
    $request->outdated = 'qui';
    $request->page = 63955;
    $request->perPage = 512393;
    $request->since = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-03T03:16:58.870Z');

    $response = $sdk->apps->appsListInstallations($request);

    if ($response->installations !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appsListInstallationsForAuthenticatedUser

Lists installations of your GitHub App that the authenticated user has explicit permission (`:read`, `:write`, or `:admin`) to access.

You must use a [user-to-server OAuth access token](https://docs.github.com/enterprise-server@3.4/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site), created for a user who has authorized your GitHub App, to access this endpoint.

The authenticated user has explicit permission to access repositories they own, repositories where they are a collaborator, and repositories that they can access through an organization membership.

You can find the permissions for the installation under the `permissions` key.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/apps#list-app-installations-accessible-to-the-user-access-token>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppsListInstallationsForAuthenticatedUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppsListInstallationsForAuthenticatedUserRequest();
    $request->page = 977496;
    $request->perPage = 787542;

    $response = $sdk->apps->appsListInstallationsForAuthenticatedUser($request);

    if ($response->appsListInstallationsForAuthenticatedUser200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appsListReposAccessibleToInstallation

List repositories that an app installation can access.

You must use an [installation access token](https://docs.github.com/enterprise-server@3.4/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/apps#list-repositories-accessible-to-the-app-installation>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppsListReposAccessibleToInstallationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppsListReposAccessibleToInstallationRequest();
    $request->page = 876506;
    $request->perPage = 606476;

    $response = $sdk->apps->appsListReposAccessibleToInstallation($request);

    if ($response->appsListReposAccessibleToInstallation200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appsListWebhookDeliveries

Returns a list of webhook deliveries for the webhook configured for a GitHub App.

You must use a [JWT](https://docs.github.com/enterprise-server@3.4/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/apps#list-deliveries-for-an-app-webhook>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppsListWebhookDeliveriesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppsListWebhookDeliveriesRequest();
    $request->cursor = 'quis';
    $request->perPage = 218403;
    $request->redelivery = false;

    $response = $sdk->apps->appsListWebhookDeliveries($request);

    if ($response->hookDeliveryItems !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appsRedeliverWebhookDelivery

Redeliver a delivery for the webhook configured for a GitHub App.

You must use a [JWT](https://docs.github.com/enterprise-server@3.4/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/apps#redeliver-a-delivery-for-an-app-webhook>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppsRedeliverWebhookDeliveryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppsRedeliverWebhookDeliveryRequest();
    $request->deliveryId = 961571;

    $response = $sdk->apps->appsRedeliverWebhookDelivery($request);

    if ($response->appsRedeliverWebhookDelivery202ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appsRemoveRepoFromInstallationForAuthenticatedUser

Remove a single repository from an installation. The authenticated user must have admin access to the repository.

You must use a personal access token (which you can create via the [command line](https://docs.github.com/enterprise-server@3.4/github/authenticating-to-github/creating-a-personal-access-token) or [Basic Authentication](https://docs.github.com/enterprise-server@3.4/rest/overview/other-authentication-methods#basic-authentication)) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/apps#remove-a-repository-from-an-app-installation>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppsRemoveRepoFromInstallationForAuthenticatedUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppsRemoveRepoFromInstallationForAuthenticatedUserRequest();
    $request->installationId = 455169;
    $request->repositoryId = 231701;

    $response = $sdk->apps->appsRemoveRepoFromInstallationForAuthenticatedUser($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appsResetToken

OAuth applications can use this API method to reset a valid OAuth token without end-user involvement. Applications must save the "token" property in the response because changes take effect immediately. You must use [Basic Authentication](https://docs.github.com/enterprise-server@3.4/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password. Invalid tokens will return `404 NOT FOUND`.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/apps#reset-a-token>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppsResetTokenRequest;
use \OpenAPI\OpenAPI\Models\Operations\AppsResetTokenRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppsResetTokenRequest();
    $request->requestBody = new AppsResetTokenRequestBody();
    $request->requestBody->accessToken = 'vero';
    $request->clientId = 'tenetur';

    $response = $sdk->apps->appsResetToken($request);

    if ($response->authorization !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appsRevokeInstallationAccessToken

Revokes the installation token you're using to authenticate as an installation and access this endpoint.

Once an installation token is revoked, the token is invalidated and cannot be used. Other endpoints that require the revoked installation token must have a new installation token to work. You can create a new token using the "[Create an installation access token for an app](https://docs.github.com/enterprise-server@3.4/rest/reference/apps#create-an-installation-access-token-for-an-app)" endpoint.

You must use an [installation access token](https://docs.github.com/enterprise-server@3.4/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/apps#revoke-an-installation-access-token>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->apps->appsRevokeInstallationAccessToken();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appsScopeToken

Use a non-scoped user-to-server access token to create a repository scoped and/or permission scoped user-to-server access token. You can specify which repositories the token can access and which permissions are granted to the token. You must use [Basic Authentication](https://docs.github.com/enterprise-server@3.4/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the `client_id` and `client_secret` of the GitHub App as the username and password. Invalid tokens will return `404 NOT FOUND`.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/apps/apps#create-a-scoped-access-token>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppsScopeTokenRequest;
use \OpenAPI\OpenAPI\Models\Operations\AppsScopeTokenRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\AppPermissions;
use \OpenAPI\OpenAPI\Models\Shared\AppPermissionsActionsEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppPermissionsAdministrationEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppPermissionsChecksEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppPermissionsContentsEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppPermissionsDeploymentsEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppPermissionsEnvironmentsEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppPermissionsIssuesEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppPermissionsMembersEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppPermissionsMetadataEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppPermissionsOrganizationAdministrationEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppPermissionsOrganizationHooksEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppPermissionsOrganizationPackagesEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppPermissionsOrganizationPlanEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppPermissionsOrganizationProjectsEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppPermissionsOrganizationSecretsEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppPermissionsOrganizationSelfHostedRunnersEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppPermissionsOrganizationUserBlockingEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppPermissionsPackagesEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppPermissionsPagesEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppPermissionsPullRequestsEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppPermissionsRepositoryHooksEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppPermissionsRepositoryProjectsEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppPermissionsSecretScanningAlertsEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppPermissionsSecretsEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppPermissionsSecurityEventsEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppPermissionsSingleFileEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppPermissionsStatusesEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppPermissionsTeamDiscussionsEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppPermissionsVulnerabilityAlertsEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppPermissionsWorkflowsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppsScopeTokenRequest();
    $request->requestBody = new AppsScopeTokenRequestBody();
    $request->requestBody->accessToken = 'e72e16c7e42f292c6912e7710c838347ae178b4a';
    $request->requestBody->permissions = new AppPermissions();
    $request->requestBody->permissions->actions = AppPermissionsActionsEnum::READ;
    $request->requestBody->permissions->administration = AppPermissionsAdministrationEnum::WRITE;
    $request->requestBody->permissions->checks = AppPermissionsChecksEnum::WRITE;
    $request->requestBody->permissions->contents = AppPermissionsContentsEnum::WRITE;
    $request->requestBody->permissions->deployments = AppPermissionsDeploymentsEnum::READ;
    $request->requestBody->permissions->environments = AppPermissionsEnvironmentsEnum::WRITE;
    $request->requestBody->permissions->issues = AppPermissionsIssuesEnum::WRITE;
    $request->requestBody->permissions->members = AppPermissionsMembersEnum::WRITE;
    $request->requestBody->permissions->metadata = AppPermissionsMetadataEnum::READ;
    $request->requestBody->permissions->organizationAdministration = AppPermissionsOrganizationAdministrationEnum::READ;
    $request->requestBody->permissions->organizationHooks = AppPermissionsOrganizationHooksEnum::WRITE;
    $request->requestBody->permissions->organizationPackages = AppPermissionsOrganizationPackagesEnum::WRITE;
    $request->requestBody->permissions->organizationPlan = AppPermissionsOrganizationPlanEnum::READ;
    $request->requestBody->permissions->organizationProjects = AppPermissionsOrganizationProjectsEnum::READ;
    $request->requestBody->permissions->organizationSecrets = AppPermissionsOrganizationSecretsEnum::WRITE;
    $request->requestBody->permissions->organizationSelfHostedRunners = AppPermissionsOrganizationSelfHostedRunnersEnum::WRITE;
    $request->requestBody->permissions->organizationUserBlocking = AppPermissionsOrganizationUserBlockingEnum::READ;
    $request->requestBody->permissions->packages = AppPermissionsPackagesEnum::WRITE;
    $request->requestBody->permissions->pages = AppPermissionsPagesEnum::READ;
    $request->requestBody->permissions->pullRequests = AppPermissionsPullRequestsEnum::WRITE;
    $request->requestBody->permissions->repositoryHooks = AppPermissionsRepositoryHooksEnum::READ;
    $request->requestBody->permissions->repositoryProjects = AppPermissionsRepositoryProjectsEnum::ADMIN;
    $request->requestBody->permissions->secretScanningAlerts = AppPermissionsSecretScanningAlertsEnum::WRITE;
    $request->requestBody->permissions->secrets = AppPermissionsSecretsEnum::WRITE;
    $request->requestBody->permissions->securityEvents = AppPermissionsSecurityEventsEnum::READ;
    $request->requestBody->permissions->singleFile = AppPermissionsSingleFileEnum::WRITE;
    $request->requestBody->permissions->statuses = AppPermissionsStatusesEnum::READ;
    $request->requestBody->permissions->teamDiscussions = AppPermissionsTeamDiscussionsEnum::READ;
    $request->requestBody->permissions->vulnerabilityAlerts = AppPermissionsVulnerabilityAlertsEnum::WRITE;
    $request->requestBody->permissions->workflows = AppPermissionsWorkflowsEnum::WRITE;
    $request->requestBody->repositories = [
        'rails',
        'rails',
    ];
    $request->requestBody->repositoryIds = [
        410492,
        136900,
    ];
    $request->requestBody->target = 'octocat';
    $request->requestBody->targetId = 1;
    $request->clientId = 'vel';

    $response = $sdk->apps->appsScopeToken($request);

    if ($response->authorization !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appsSuspendInstallation

Suspends a GitHub App on a user, organization, or business account, which blocks the app from accessing the account's resources. When a GitHub App is suspended, the app's access to the GitHub Enterprise Server API or webhook events is blocked for that account.

You must use a [JWT](https://docs.github.com/enterprise-server@3.4/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/apps#suspend-an-app-installation>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppsSuspendInstallationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppsSuspendInstallationRequest();
    $request->installationId = 822118;

    $response = $sdk->apps->appsSuspendInstallation($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appsUnsuspendInstallation

Removes a GitHub App installation suspension.

You must use a [JWT](https://docs.github.com/enterprise-server@3.4/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/apps#unsuspend-an-app-installation>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppsUnsuspendInstallationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppsUnsuspendInstallationRequest();
    $request->installationId = 297842;

    $response = $sdk->apps->appsUnsuspendInstallation($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appsUpdateWebhookConfigForApp

Updates the webhook configuration for a GitHub App. For more information about configuring a webhook for your app, see "[Creating a GitHub App](/developers/apps/creating-a-github-app)."

You must use a [JWT](https://docs.github.com/enterprise-server@3.4/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/apps#update-a-webhook-configuration-for-an-app>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppsUpdateWebhookConfigForAppRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppsUpdateWebhookConfigForAppRequestBody();
    $request->contentType = '"json"';
    $request->insecureSsl = '"0"';
    $request->secret = '"********"';
    $request->url = 'https://example.com/webhook';

    $response = $sdk->apps->appsUpdateWebhookConfigForApp($request);

    if ($response->webhookConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
