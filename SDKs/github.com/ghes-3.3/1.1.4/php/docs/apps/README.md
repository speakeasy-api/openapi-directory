# apps

## Overview

Information for integrations and installations.

### Available Operations

* [appsAddRepoToInstallationForAuthenticatedUser](#appsaddrepotoinstallationforauthenticateduser) - Add a repository to an app installation
* [~~appsCheckAuthorization~~](#appscheckauthorization) - Check an authorization :warning: **Deprecated**
* [appsCheckToken](#appschecktoken) - Check a token
* [appsCreateContentAttachment](#appscreatecontentattachment) - Create a content attachment
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
* [~~appsResetAuthorization~~](#appsresetauthorization) - Reset an authorization :warning: **Deprecated**
* [appsResetToken](#appsresettoken) - Reset a token
* [~~appsRevokeAuthorizationForApplication~~](#appsrevokeauthorizationforapplication) - Revoke an authorization for an application :warning: **Deprecated**
* [~~appsRevokeGrantForApplication~~](#appsrevokegrantforapplication) - Revoke a grant for an application :warning: **Deprecated**
* [appsRevokeInstallationAccessToken](#appsrevokeinstallationaccesstoken) - Revoke an installation access token
* [appsScopeToken](#appsscopetoken) - Create a scoped access token
* [appsSuspendInstallation](#appssuspendinstallation) - Suspend an app installation
* [appsUnsuspendInstallation](#appsunsuspendinstallation) - Unsuspend an app installation
* [appsUpdateWebhookConfigForApp](#appsupdatewebhookconfigforapp) - Update a webhook configuration for an app

## appsAddRepoToInstallationForAuthenticatedUser

Add a single repository to an installation. The authenticated user must have admin access to the repository.

You must use a personal access token (which you can create via the [command line](https://docs.github.com/enterprise-server@3.3/github/authenticating-to-github/creating-a-personal-access-token) or [Basic Authentication](https://docs.github.com/enterprise-server@3.3/rest/overview/other-authentication-methods#basic-authentication)) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/apps#add-a-repository-to-an-app-installation>

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
    $request->installationId = 263322;
    $request->repositoryId = 137220;

    $response = $sdk->apps->appsAddRepoToInstallationForAuthenticatedUser($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~appsCheckAuthorization~~

**Deprecation Notice:** GitHub Enterprise Server will discontinue OAuth endpoints that contain `access_token` in the path parameter. We have introduced new endpoints that allow you to securely manage tokens for OAuth Apps by moving `access_token` to the request body. For more information, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-app-endpoint/).

OAuth applications can use a special API method for checking OAuth token validity without exceeding the normal rate limits for failed login attempts. Authentication works differently with this particular endpoint. You must use [Basic Authentication](https://docs.github.com/enterprise-server@3.3/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password. Invalid tokens will return `404 NOT FOUND`.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/apps#check-an-authorization>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppsCheckAuthorizationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppsCheckAuthorizationRequest();
    $request->accessToken = 'perferendis';
    $request->clientId = 'amet';

    $response = $sdk->apps->appsCheckAuthorization($request);

    if ($response->nullableAuthorization !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appsCheckToken

OAuth applications can use a special API method for checking OAuth token validity without exceeding the normal rate limits for failed login attempts. Authentication works differently with this particular endpoint. You must use [Basic Authentication](https://docs.github.com/enterprise-server@3.3/rest/overview/other-authentication-methods#basic-authentication) to use this endpoint, where the username is the OAuth application `client_id` and the password is its `client_secret`. Invalid tokens will return `404 NOT FOUND`.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/apps#check-a-token>

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
    $request->requestBody->accessToken = 'optio';
    $request->clientId = 'accusamus';

    $response = $sdk->apps->appsCheckToken($request);

    if ($response->authorization !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appsCreateContentAttachment

Creates an attachment under a content reference URL in the body or comment of an issue or pull request. Use the `id` and `repository` `full_name` of the content reference from the [`content_reference` event](https://docs.github.com/enterprise-server@3.3/webhooks/event-payloads/#content_reference) to create an attachment.

The app must create a content attachment within six hours of the content reference URL being posted. See "[Using content attachments](https://docs.github.com/enterprise-server@3.3/apps/using-content-attachments/)" for details about content attachments.

You must use an [installation access token](https://docs.github.com/enterprise-server@3.3/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/apps#create-a-content-attachment>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppsCreateContentAttachmentRequest;
use \OpenAPI\OpenAPI\Models\Operations\AppsCreateContentAttachmentRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppsCreateContentAttachmentRequest();
    $request->requestBody = new AppsCreateContentAttachmentRequestBody();
    $request->requestBody->body = 'Body of the attachment';
    $request->requestBody->title = 'Title of the attachment';
    $request->contentReferenceId = 320017;
    $request->owner = 'saepe';
    $request->repo = 'suscipit';

    $response = $sdk->apps->appsCreateContentAttachment($request);

    if ($response->contentReferenceAttachment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appsCreateFromManifest

Use this endpoint to complete the handshake necessary when implementing the [GitHub App Manifest flow](https://docs.github.com/enterprise-server@3.3/apps/building-github-apps/creating-github-apps-from-a-manifest/). When you create a GitHub App with the manifest flow, you receive a temporary `code` used to retrieve the GitHub App's `id`, `pem` (private key), and `webhook_secret`.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/apps#create-a-github-app-from-a-manifest>

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
    $request->code = 'deserunt';

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

You must use a [JWT](https://docs.github.com/enterprise-server@3.3/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/apps/#create-an-installation-access-token-for-an-app>

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
use \OpenAPI\OpenAPI\Models\Shared\AppPermissionsContentReferencesEnum;
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
    $request->requestBody->permissions->actions = AppPermissionsActionsEnum::WRITE;
    $request->requestBody->permissions->administration = AppPermissionsAdministrationEnum::READ;
    $request->requestBody->permissions->checks = AppPermissionsChecksEnum::WRITE;
    $request->requestBody->permissions->contentReferences = AppPermissionsContentReferencesEnum::WRITE;
    $request->requestBody->permissions->contents = AppPermissionsContentsEnum::WRITE;
    $request->requestBody->permissions->deployments = AppPermissionsDeploymentsEnum::READ;
    $request->requestBody->permissions->environments = AppPermissionsEnvironmentsEnum::WRITE;
    $request->requestBody->permissions->issues = AppPermissionsIssuesEnum::READ;
    $request->requestBody->permissions->members = AppPermissionsMembersEnum::READ;
    $request->requestBody->permissions->metadata = AppPermissionsMetadataEnum::READ;
    $request->requestBody->permissions->organizationAdministration = AppPermissionsOrganizationAdministrationEnum::WRITE;
    $request->requestBody->permissions->organizationHooks = AppPermissionsOrganizationHooksEnum::WRITE;
    $request->requestBody->permissions->organizationPackages = AppPermissionsOrganizationPackagesEnum::READ;
    $request->requestBody->permissions->organizationPlan = AppPermissionsOrganizationPlanEnum::READ;
    $request->requestBody->permissions->organizationProjects = AppPermissionsOrganizationProjectsEnum::ADMIN;
    $request->requestBody->permissions->organizationSecrets = AppPermissionsOrganizationSecretsEnum::WRITE;
    $request->requestBody->permissions->organizationSelfHostedRunners = AppPermissionsOrganizationSelfHostedRunnersEnum::READ;
    $request->requestBody->permissions->organizationUserBlocking = AppPermissionsOrganizationUserBlockingEnum::WRITE;
    $request->requestBody->permissions->packages = AppPermissionsPackagesEnum::READ;
    $request->requestBody->permissions->pages = AppPermissionsPagesEnum::READ;
    $request->requestBody->permissions->pullRequests = AppPermissionsPullRequestsEnum::WRITE;
    $request->requestBody->permissions->repositoryHooks = AppPermissionsRepositoryHooksEnum::WRITE;
    $request->requestBody->permissions->repositoryProjects = AppPermissionsRepositoryProjectsEnum::READ;
    $request->requestBody->permissions->secretScanningAlerts = AppPermissionsSecretScanningAlertsEnum::WRITE;
    $request->requestBody->permissions->secrets = AppPermissionsSecretsEnum::WRITE;
    $request->requestBody->permissions->securityEvents = AppPermissionsSecurityEventsEnum::READ;
    $request->requestBody->permissions->singleFile = AppPermissionsSingleFileEnum::READ;
    $request->requestBody->permissions->statuses = AppPermissionsStatusesEnum::READ;
    $request->requestBody->permissions->teamDiscussions = AppPermissionsTeamDiscussionsEnum::WRITE;
    $request->requestBody->permissions->vulnerabilityAlerts = AppPermissionsVulnerabilityAlertsEnum::WRITE;
    $request->requestBody->permissions->workflows = AppPermissionsWorkflowsEnum::WRITE;
    $request->requestBody->repositories = [
        'rails',
        'rails',
    ];
    $request->requestBody->repositoryIds = [
        711584,
    ];
    $request->installationId = 207470;

    $response = $sdk->apps->appsCreateInstallationAccessToken($request);

    if ($response->installationToken !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appsDeleteAuthorization

OAuth application owners can revoke a grant for their OAuth application and a specific user. You must use [Basic Authentication](https://docs.github.com/enterprise-server@3.3/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password. You must also provide a valid OAuth `access_token` as an input parameter and the grant for the token's owner will be deleted.
Deleting an OAuth application's grant will also delete all OAuth tokens associated with the application for the user. Once deleted, the application will have no access to the user's account and will no longer be listed on [the application authorizations settings screen within GitHub](https://github.com/settings/applications#authorized).

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/apps#delete-an-app-authorization>

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
    $request->requestBody->accessToken = 'sed';
    $request->clientId = 'vel';

    $response = $sdk->apps->appsDeleteAuthorization($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appsDeleteInstallation

Uninstalls a GitHub App on a user, organization, or business account. If you prefer to temporarily suspend an app's access to your account's resources, then we recommend the "[Suspend an app installation](https://docs.github.com/enterprise-server@3.3/rest/reference/apps/#suspend-an-app-installation)" endpoint.

You must use a [JWT](https://docs.github.com/enterprise-server@3.3/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/apps#delete-an-installation-for-the-authenticated-app>

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
    $request->installationId = 730442;

    $response = $sdk->apps->appsDeleteInstallation($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appsDeleteToken

OAuth application owners can revoke a single token for an OAuth application. You must use [Basic Authentication](https://docs.github.com/enterprise-server@3.3/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/apps#delete-an-app-token>

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
    $request->requestBody->accessToken = 'voluptas';
    $request->clientId = 'deserunt';

    $response = $sdk->apps->appsDeleteToken($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appsGetAuthenticated

Returns the GitHub App associated with the authentication credentials used. To see how many app installations are associated with this GitHub App, see the `installations_count` in the response. For more details about your app's installations, see the "[List installations for the authenticated app](https://docs.github.com/enterprise-server@3.3/rest/reference/apps#list-installations-for-the-authenticated-app)" endpoint.

You must use a [JWT](https://docs.github.com/enterprise-server@3.3/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/apps#get-the-authenticated-app>

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

If the GitHub App you specify is public, you can access this endpoint without authenticating. If the GitHub App you specify is private, you must authenticate with a [personal access token](https://docs.github.com/enterprise-server@3.3/articles/creating-a-personal-access-token-for-the-command-line/) or an [installation access token](https://docs.github.com/enterprise-server@3.3/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/apps/#get-an-app>

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
    $request->appSlug = 'quam';

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

You must use a [JWT](https://docs.github.com/enterprise-server@3.3/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/apps#get-an-installation-for-the-authenticated-app>

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
    $request->installationId = 214880;

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

You must use a [JWT](https://docs.github.com/enterprise-server@3.3/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/apps#get-an-organization-installation-for-the-authenticated-app>

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
    $request->org = 'incidunt';

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

You must use a [JWT](https://docs.github.com/enterprise-server@3.3/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/apps#get-a-repository-installation-for-the-authenticated-app>

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
    $request->owner = 'qui';
    $request->repo = 'cupiditate';

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

You must use a [JWT](https://docs.github.com/enterprise-server@3.3/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/apps#get-a-user-installation-for-the-authenticated-app>

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
    $request->username = 'Rafael.Stracke67';

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

You must use a [JWT](https://docs.github.com/enterprise-server@3.3/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/apps#get-a-webhook-configuration-for-an-app>

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

You must use a [JWT](https://docs.github.com/enterprise-server@3.3/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/apps#get-a-delivery-for-an-app-webhook>

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
    $request->deliveryId = 517379;

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

You must use a [user-to-server OAuth access token](https://docs.github.com/enterprise-server@3.3/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site), created for a user who has authorized your GitHub App, to access this endpoint.

The access the user has to each repository is included in the hash under the `permissions` key.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/apps#list-repositories-accessible-to-the-user-access-token>

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
    $request->installationId = 276894;
    $request->page = 132068;
    $request->perPage = 174909;

    $response = $sdk->apps->appsListInstallationReposForAuthenticatedUser($request);

    if ($response->appsListInstallationReposForAuthenticatedUser200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appsListInstallations

You must use a [JWT](https://docs.github.com/enterprise-server@3.3/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

The permissions the installation has are included under the `permissions` key.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/apps#list-installations-for-the-authenticated-app>

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
    $request->outdated = 'distinctio';
    $request->page = 704474;
    $request->perPage = 396060;
    $request->since = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-08T14:54:33.206Z');

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

You must use a [user-to-server OAuth access token](https://docs.github.com/enterprise-server@3.3/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site), created for a user who has authorized your GitHub App, to access this endpoint.

The authenticated user has explicit permission to access repositories they own, repositories where they are a collaborator, and repositories that they can access through an organization membership.

You can find the permissions for the installation under the `permissions` key.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/apps#list-app-installations-accessible-to-the-user-access-token>

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
    $request->page = 840429;
    $request->perPage = 183280;

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

You must use an [installation access token](https://docs.github.com/enterprise-server@3.3/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/apps#list-repositories-accessible-to-the-app-installation>

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
    $request->page = 204865;
    $request->perPage = 144847;

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

You must use a [JWT](https://docs.github.com/enterprise-server@3.3/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/apps#list-deliveries-for-an-app-webhook>

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
    $request->cursor = 'magni';
    $request->perPage = 488056;
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

You must use a [JWT](https://docs.github.com/enterprise-server@3.3/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/apps#redeliver-a-delivery-for-an-app-webhook>

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
    $request->deliveryId = 124833;

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

You must use a personal access token (which you can create via the [command line](https://docs.github.com/enterprise-server@3.3/github/authenticating-to-github/creating-a-personal-access-token) or [Basic Authentication](https://docs.github.com/enterprise-server@3.3/rest/overview/other-authentication-methods#basic-authentication)) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/apps#remove-a-repository-from-an-app-installation>

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
    $request->installationId = 355613;
    $request->repositoryId = 722081;

    $response = $sdk->apps->appsRemoveRepoFromInstallationForAuthenticatedUser($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~appsResetAuthorization~~

**Deprecation Notice:** GitHub Enterprise Server will discontinue OAuth endpoints that contain `access_token` in the path parameter. We have introduced new endpoints that allow you to securely manage tokens for OAuth Apps by moving `access_token` to the request body. For more information, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-app-endpoint/).

OAuth applications can use this API method to reset a valid OAuth token without end-user involvement. Applications must save the "token" property in the response because changes take effect immediately. You must use [Basic Authentication](https://docs.github.com/enterprise-server@3.3/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password. Invalid tokens will return `404 NOT FOUND`.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/apps#reset-an-authorization>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppsResetAuthorizationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppsResetAuthorizationRequest();
    $request->accessToken = 'hic';
    $request->clientId = 'voluptatem';

    $response = $sdk->apps->appsResetAuthorization($request);

    if ($response->authorization !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appsResetToken

OAuth applications can use this API method to reset a valid OAuth token without end-user involvement. Applications must save the "token" property in the response because changes take effect immediately. You must use [Basic Authentication](https://docs.github.com/enterprise-server@3.3/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password. Invalid tokens will return `404 NOT FOUND`.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/apps#reset-a-token>

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
    $request->requestBody->accessToken = 'cumque';
    $request->clientId = 'soluta';

    $response = $sdk->apps->appsResetToken($request);

    if ($response->authorization !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~appsRevokeAuthorizationForApplication~~

**Deprecation Notice:** GitHub Enterprise Server will discontinue OAuth endpoints that contain `access_token` in the path parameter. We have introduced new endpoints that allow you to securely manage tokens for OAuth Apps by moving `access_token` to the request body. For more information, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-app-endpoint/).

OAuth application owners can revoke a single token for an OAuth application. You must use [Basic Authentication](https://docs.github.com/enterprise-server@3.3/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/apps#revoke-an-authorization-for-an-application>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppsRevokeAuthorizationForApplicationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppsRevokeAuthorizationForApplicationRequest();
    $request->accessToken = 'nobis';
    $request->clientId = 'et';

    $response = $sdk->apps->appsRevokeAuthorizationForApplication($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~appsRevokeGrantForApplication~~

**Deprecation Notice:** GitHub Enterprise Server will discontinue OAuth endpoints that contain `access_token` in the path parameter. We have introduced new endpoints that allow you to securely manage tokens for OAuth Apps by moving `access_token` to the request body. For more information, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-app-endpoint/).

OAuth application owners can revoke a grant for their OAuth application and a specific user. You must use [Basic Authentication](https://docs.github.com/enterprise-server@3.3/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password. You must also provide a valid token as `:access_token` and the grant for the token's owner will be deleted.

Deleting an OAuth application's grant will also delete all OAuth tokens associated with the application for the user. Once deleted, the application will have no access to the user's account and will no longer be listed on [the Applications settings page under "Authorized OAuth Apps" on GitHub Enterprise Server](https://github.com/settings/applications#authorized).

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/apps#revoke-a-grant-for-an-application>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppsRevokeGrantForApplicationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppsRevokeGrantForApplicationRequest();
    $request->accessToken = 'saepe';
    $request->clientId = 'ipsum';

    $response = $sdk->apps->appsRevokeGrantForApplication($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appsRevokeInstallationAccessToken

Revokes the installation token you're using to authenticate as an installation and access this endpoint.

Once an installation token is revoked, the token is invalidated and cannot be used. Other endpoints that require the revoked installation token must have a new installation token to work. You can create a new token using the "[Create an installation access token for an app](https://docs.github.com/enterprise-server@3.3/rest/reference/apps#create-an-installation-access-token-for-an-app)" endpoint.

You must use an [installation access token](https://docs.github.com/enterprise-server@3.3/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/apps#revoke-an-installation-access-token>

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

Use a non-scoped user-to-server access token to create a repository scoped and/or permission scoped user-to-server access token. You can specify which repositories the token can access and which permissions are granted to the token. You must use [Basic Authentication](https://docs.github.com/enterprise-server@3.3/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the `client_id` and `client_secret` of the GitHub App as the username and password. Invalid tokens will return `404 NOT FOUND`.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/apps/apps#create-a-scoped-access-token>

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
use \OpenAPI\OpenAPI\Models\Shared\AppPermissionsContentReferencesEnum;
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
    $request->requestBody->permissions->contentReferences = AppPermissionsContentReferencesEnum::WRITE;
    $request->requestBody->permissions->contents = AppPermissionsContentsEnum::WRITE;
    $request->requestBody->permissions->deployments = AppPermissionsDeploymentsEnum::READ;
    $request->requestBody->permissions->environments = AppPermissionsEnvironmentsEnum::WRITE;
    $request->requestBody->permissions->issues = AppPermissionsIssuesEnum::READ;
    $request->requestBody->permissions->members = AppPermissionsMembersEnum::READ;
    $request->requestBody->permissions->metadata = AppPermissionsMetadataEnum::READ;
    $request->requestBody->permissions->organizationAdministration = AppPermissionsOrganizationAdministrationEnum::READ;
    $request->requestBody->permissions->organizationHooks = AppPermissionsOrganizationHooksEnum::WRITE;
    $request->requestBody->permissions->organizationPackages = AppPermissionsOrganizationPackagesEnum::READ;
    $request->requestBody->permissions->organizationPlan = AppPermissionsOrganizationPlanEnum::READ;
    $request->requestBody->permissions->organizationProjects = AppPermissionsOrganizationProjectsEnum::READ;
    $request->requestBody->permissions->organizationSecrets = AppPermissionsOrganizationSecretsEnum::READ;
    $request->requestBody->permissions->organizationSelfHostedRunners = AppPermissionsOrganizationSelfHostedRunnersEnum::WRITE;
    $request->requestBody->permissions->organizationUserBlocking = AppPermissionsOrganizationUserBlockingEnum::WRITE;
    $request->requestBody->permissions->packages = AppPermissionsPackagesEnum::READ;
    $request->requestBody->permissions->pages = AppPermissionsPagesEnum::WRITE;
    $request->requestBody->permissions->pullRequests = AppPermissionsPullRequestsEnum::WRITE;
    $request->requestBody->permissions->repositoryHooks = AppPermissionsRepositoryHooksEnum::WRITE;
    $request->requestBody->permissions->repositoryProjects = AppPermissionsRepositoryProjectsEnum::ADMIN;
    $request->requestBody->permissions->secretScanningAlerts = AppPermissionsSecretScanningAlertsEnum::READ;
    $request->requestBody->permissions->secrets = AppPermissionsSecretsEnum::WRITE;
    $request->requestBody->permissions->securityEvents = AppPermissionsSecurityEventsEnum::WRITE;
    $request->requestBody->permissions->singleFile = AppPermissionsSingleFileEnum::READ;
    $request->requestBody->permissions->statuses = AppPermissionsStatusesEnum::READ;
    $request->requestBody->permissions->teamDiscussions = AppPermissionsTeamDiscussionsEnum::WRITE;
    $request->requestBody->permissions->vulnerabilityAlerts = AppPermissionsVulnerabilityAlertsEnum::READ;
    $request->requestBody->permissions->workflows = AppPermissionsWorkflowsEnum::WRITE;
    $request->requestBody->repositories = [
        'rails',
        'rails',
        'rails',
    ];
    $request->requestBody->repositoryIds = [
        787542,
        876506,
        606476,
        338159,
    ];
    $request->requestBody->target = 'octocat';
    $request->requestBody->targetId = 1;
    $request->clientId = 'ipsum';

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

You must use a [JWT](https://docs.github.com/enterprise-server@3.3/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/apps#suspend-an-app-installation>

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
    $request->installationId = 961571;

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

You must use a [JWT](https://docs.github.com/enterprise-server@3.3/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/apps#unsuspend-an-app-installation>

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
    $request->installationId = 455169;

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

You must use a [JWT](https://docs.github.com/enterprise-server@3.3/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/apps#update-a-webhook-configuration-for-an-app>

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
