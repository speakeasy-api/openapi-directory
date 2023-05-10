# enterpriseAdmin

## Overview

Enterprise Administration

### Available Operations

* [enterpriseAdminAddAuthorizedSshKey](#enterpriseadminaddauthorizedsshkey) - Add an authorized SSH key
* [enterpriseAdminAddCustomLabelsToSelfHostedRunnerForEnterprise](#enterpriseadminaddcustomlabelstoselfhostedrunnerforenterprise) - Add custom labels to a self-hosted runner for an enterprise
* [enterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterprise](#enterpriseadminaddorgaccesstoselfhostedrunnergroupinenterprise) - Add organization access to a self-hosted runner group in an enterprise
* [enterpriseAdminAddSelfHostedRunnerToGroupForEnterprise](#enterpriseadminaddselfhostedrunnertogroupforenterprise) - Add a self-hosted runner to a group for an enterprise
* [enterpriseAdminCreateEnterpriseServerLicense](#enterpriseadmincreateenterpriseserverlicense) - Create a GitHub license
* [enterpriseAdminCreateGlobalWebhook](#enterpriseadmincreateglobalwebhook) - Create a global webhook
* [enterpriseAdminCreateImpersonationOAuthToken](#enterpriseadmincreateimpersonationoauthtoken) - Create an impersonation OAuth token
* [enterpriseAdminCreateOrg](#enterpriseadmincreateorg) - Create an organization
* [enterpriseAdminCreatePreReceiveEnvironment](#enterpriseadmincreateprereceiveenvironment) - Create a pre-receive environment
* [enterpriseAdminCreatePreReceiveHook](#enterpriseadmincreateprereceivehook) - Create a pre-receive hook
* [enterpriseAdminCreateRegistrationTokenForEnterprise](#enterpriseadmincreateregistrationtokenforenterprise) - Create a registration token for an enterprise
* [enterpriseAdminCreateRemoveTokenForEnterprise](#enterpriseadmincreateremovetokenforenterprise) - Create a remove token for an enterprise
* [enterpriseAdminCreateSelfHostedRunnerGroupForEnterprise](#enterpriseadmincreateselfhostedrunnergroupforenterprise) - Create a self-hosted runner group for an enterprise
* [enterpriseAdminCreateUser](#enterpriseadmincreateuser) - Create a user
* [enterpriseAdminDeleteGlobalWebhook](#enterpriseadmindeleteglobalwebhook) - Delete a global webhook
* [enterpriseAdminDeleteImpersonationOAuthToken](#enterpriseadmindeleteimpersonationoauthtoken) - Delete an impersonation OAuth token
* [enterpriseAdminDeletePersonalAccessToken](#enterpriseadmindeletepersonalaccesstoken) - Delete a personal access token
* [enterpriseAdminDeletePreReceiveEnvironment](#enterpriseadmindeleteprereceiveenvironment) - Delete a pre-receive environment
* [enterpriseAdminDeletePreReceiveHook](#enterpriseadmindeleteprereceivehook) - Delete a pre-receive hook
* [enterpriseAdminDeletePublicKey](#enterpriseadmindeletepublickey) - Delete a public key
* [enterpriseAdminDeleteSelfHostedRunnerFromEnterprise](#enterpriseadmindeleteselfhostedrunnerfromenterprise) - Delete a self-hosted runner from an enterprise
* [enterpriseAdminDeleteSelfHostedRunnerGroupFromEnterprise](#enterpriseadmindeleteselfhostedrunnergroupfromenterprise) - Delete a self-hosted runner group from an enterprise
* [enterpriseAdminDeleteUser](#enterpriseadmindeleteuser) - Delete a user
* [enterpriseAdminDemoteSiteAdministrator](#enterpriseadmindemotesiteadministrator) - Demote a site administrator
* [enterpriseAdminDisableSelectedOrganizationGithubActionsEnterprise](#enterpriseadmindisableselectedorganizationgithubactionsenterprise) - Disable a selected organization for GitHub Actions in an enterprise
* [enterpriseAdminEnableOrDisableMaintenanceMode](#enterpriseadminenableordisablemaintenancemode) - Enable or disable maintenance mode
* [enterpriseAdminEnableSelectedOrganizationGithubActionsEnterprise](#enterpriseadminenableselectedorganizationgithubactionsenterprise) - Enable a selected organization for GitHub Actions in an enterprise
* [enterpriseAdminGetAllAuthorizedSshKeys](#enterpriseadmingetallauthorizedsshkeys) - Get all authorized SSH keys
* [enterpriseAdminGetAllStats](#enterpriseadmingetallstats) - Get all statistics
* [enterpriseAdminGetAllowedActionsEnterprise](#enterpriseadmingetallowedactionsenterprise) - Get allowed actions for an enterprise
* [enterpriseAdminGetAnnouncement](#enterpriseadmingetannouncement) - Get the global announcement banner
* [enterpriseAdminGetAuditLog](#enterpriseadmingetauditlog) - Get the audit log for an enterprise
* [enterpriseAdminGetCommentStats](#enterpriseadmingetcommentstats) - Get comment statistics
* [enterpriseAdminGetConfigurationStatus](#enterpriseadmingetconfigurationstatus) - Get the configuration status
* [enterpriseAdminGetDownloadStatusForPreReceiveEnvironment](#enterpriseadmingetdownloadstatusforprereceiveenvironment) - Get the download status for a pre-receive environment
* [enterpriseAdminGetGistStats](#enterpriseadmingetgiststats) - Get gist statistics
* [enterpriseAdminGetGithubActionsPermissionsEnterprise](#enterpriseadmingetgithubactionspermissionsenterprise) - Get GitHub Actions permissions for an enterprise
* [enterpriseAdminGetGlobalWebhook](#enterpriseadmingetglobalwebhook) - Get a global webhook
* [enterpriseAdminGetHooksStats](#enterpriseadmingethooksstats) - Get hooks statistics
* [enterpriseAdminGetIssueStats](#enterpriseadmingetissuestats) - Get issue statistics
* [enterpriseAdminGetLicenseInformation](#enterpriseadmingetlicenseinformation) - Get license information
* [enterpriseAdminGetMaintenanceStatus](#enterpriseadmingetmaintenancestatus) - Get the maintenance status
* [enterpriseAdminGetMilestoneStats](#enterpriseadmingetmilestonestats) - Get milestone statistics
* [enterpriseAdminGetOrgStats](#enterpriseadmingetorgstats) - Get organization statistics
* [enterpriseAdminGetPagesStats](#enterpriseadmingetpagesstats) - Get pages statistics
* [enterpriseAdminGetPreReceiveEnvironment](#enterpriseadmingetprereceiveenvironment) - Get a pre-receive environment
* [enterpriseAdminGetPreReceiveHook](#enterpriseadmingetprereceivehook) - Get a pre-receive hook
* [enterpriseAdminGetPreReceiveHookForOrg](#enterpriseadmingetprereceivehookfororg) - Get a pre-receive hook for an organization
* [enterpriseAdminGetPreReceiveHookForRepo](#enterpriseadmingetprereceivehookforrepo) - Get a pre-receive hook for a repository
* [enterpriseAdminGetPullRequestStats](#enterpriseadmingetpullrequeststats) - Get pull request statistics
* [enterpriseAdminGetRepoStats](#enterpriseadmingetrepostats) - Get repository statistics
* [enterpriseAdminGetSelfHostedRunnerForEnterprise](#enterpriseadmingetselfhostedrunnerforenterprise) - Get a self-hosted runner for an enterprise
* [enterpriseAdminGetSelfHostedRunnerGroupForEnterprise](#enterpriseadmingetselfhostedrunnergroupforenterprise) - Get a self-hosted runner group for an enterprise
* [enterpriseAdminGetSettings](#enterpriseadmingetsettings) - Get settings
* [enterpriseAdminGetUserStats](#enterpriseadmingetuserstats) - Get users statistics
* [enterpriseAdminListGlobalWebhooks](#enterpriseadminlistglobalwebhooks) - List global webhooks
* [enterpriseAdminListLabelsForSelfHostedRunnerForEnterprise](#enterpriseadminlistlabelsforselfhostedrunnerforenterprise) - List labels for a self-hosted runner for an enterprise
* [enterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprise](#enterpriseadminlistorgaccesstoselfhostedrunnergroupinenterprise) - List organization access to a self-hosted runner group in an enterprise
* [enterpriseAdminListPersonalAccessTokens](#enterpriseadminlistpersonalaccesstokens) - List personal access tokens
* [enterpriseAdminListPreReceiveEnvironments](#enterpriseadminlistprereceiveenvironments) - List pre-receive environments
* [enterpriseAdminListPreReceiveHooks](#enterpriseadminlistprereceivehooks) - List pre-receive hooks
* [enterpriseAdminListPreReceiveHooksForOrg](#enterpriseadminlistprereceivehooksfororg) - List pre-receive hooks for an organization
* [enterpriseAdminListPreReceiveHooksForRepo](#enterpriseadminlistprereceivehooksforrepo) - List pre-receive hooks for a repository
* [enterpriseAdminListPublicKeys](#enterpriseadminlistpublickeys) - List public keys
* [enterpriseAdminListRunnerApplicationsForEnterprise](#enterpriseadminlistrunnerapplicationsforenterprise) - List runner applications for an enterprise
* [enterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprise](#enterpriseadminlistselectedorganizationsenabledgithubactionsenterprise) - List selected organizations enabled for GitHub Actions in an enterprise
* [enterpriseAdminListSelfHostedRunnerGroupsForEnterprise](#enterpriseadminlistselfhostedrunnergroupsforenterprise) - List self-hosted runner groups for an enterprise
* [enterpriseAdminListSelfHostedRunnersForEnterprise](#enterpriseadminlistselfhostedrunnersforenterprise) - List self-hosted runners for an enterprise
* [enterpriseAdminListSelfHostedRunnersInGroupForEnterprise](#enterpriseadminlistselfhostedrunnersingroupforenterprise) - List self-hosted runners in a group for an enterprise
* [enterpriseAdminPingGlobalWebhook](#enterpriseadminpingglobalwebhook) - Ping a global webhook
* [enterpriseAdminPromoteUserToBeSiteAdministrator](#enterpriseadminpromoteusertobesiteadministrator) - Promote a user to be a site administrator
* [enterpriseAdminRemoveAllCustomLabelsFromSelfHostedRunnerForEnterprise](#enterpriseadminremoveallcustomlabelsfromselfhostedrunnerforenterprise) - Remove all custom labels from a self-hosted runner for an enterprise
* [enterpriseAdminRemoveAnnouncement](#enterpriseadminremoveannouncement) - Remove the global announcement banner
* [enterpriseAdminRemoveAuthorizedSshKey](#enterpriseadminremoveauthorizedsshkey) - Remove an authorized SSH key
* [enterpriseAdminRemoveCustomLabelFromSelfHostedRunnerForEnterprise](#enterpriseadminremovecustomlabelfromselfhostedrunnerforenterprise) - Remove a custom label from a self-hosted runner for an enterprise
* [enterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterprise](#enterpriseadminremoveorgaccesstoselfhostedrunnergroupinenterprise) - Remove organization access to a self-hosted runner group in an enterprise
* [enterpriseAdminRemovePreReceiveHookEnforcementForOrg](#enterpriseadminremoveprereceivehookenforcementfororg) - Remove pre-receive hook enforcement for an organization
* [enterpriseAdminRemovePreReceiveHookEnforcementForRepo](#enterpriseadminremoveprereceivehookenforcementforrepo) - Remove pre-receive hook enforcement for a repository
* [enterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterprise](#enterpriseadminremoveselfhostedrunnerfromgroupforenterprise) - Remove a self-hosted runner from a group for an enterprise
* [enterpriseAdminSetAllowedActionsEnterprise](#enterpriseadminsetallowedactionsenterprise) - Set allowed actions for an enterprise
* [enterpriseAdminSetAnnouncement](#enterpriseadminsetannouncement) - Set the global announcement banner
* [enterpriseAdminSetCustomLabelsForSelfHostedRunnerForEnterprise](#enterpriseadminsetcustomlabelsforselfhostedrunnerforenterprise) - Set custom labels for a self-hosted runner for an enterprise
* [enterpriseAdminSetGithubActionsPermissionsEnterprise](#enterpriseadminsetgithubactionspermissionsenterprise) - Set GitHub Actions permissions for an enterprise
* [enterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterprise](#enterpriseadminsetorgaccesstoselfhostedrunnergroupinenterprise) - Set organization access for a self-hosted runner group in an enterprise
* [enterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterprise](#enterpriseadminsetselectedorganizationsenabledgithubactionsenterprise) - Set selected organizations enabled for GitHub Actions in an enterprise
* [enterpriseAdminSetSelfHostedRunnersInGroupForEnterprise](#enterpriseadminsetselfhostedrunnersingroupforenterprise) - Set self-hosted runners in a group for an enterprise
* [enterpriseAdminSetSettings](#enterpriseadminsetsettings) - Set settings
* [enterpriseAdminStartConfigurationProcess](#enterpriseadminstartconfigurationprocess) - Start a configuration process
* [enterpriseAdminStartPreReceiveEnvironmentDownload](#enterpriseadminstartprereceiveenvironmentdownload) - Start a pre-receive environment download
* [enterpriseAdminSuspendUser](#enterpriseadminsuspenduser) - Suspend a user
* [enterpriseAdminSyncLdapMappingForTeam](#enterpriseadminsyncldapmappingforteam) - Sync LDAP mapping for a team
* [enterpriseAdminSyncLdapMappingForUser](#enterpriseadminsyncldapmappingforuser) - Sync LDAP mapping for a user
* [enterpriseAdminUnsuspendUser](#enterpriseadminunsuspenduser) - Unsuspend a user
* [enterpriseAdminUpdateGlobalWebhook](#enterpriseadminupdateglobalwebhook) - Update a global webhook
* [enterpriseAdminUpdateLdapMappingForTeam](#enterpriseadminupdateldapmappingforteam) - Update LDAP mapping for a team
* [enterpriseAdminUpdateLdapMappingForUser](#enterpriseadminupdateldapmappingforuser) - Update LDAP mapping for a user
* [enterpriseAdminUpdateOrgName](#enterpriseadminupdateorgname) - Update an organization name
* [enterpriseAdminUpdatePreReceiveEnvironment](#enterpriseadminupdateprereceiveenvironment) - Update a pre-receive environment
* [enterpriseAdminUpdatePreReceiveHook](#enterpriseadminupdateprereceivehook) - Update a pre-receive hook
* [enterpriseAdminUpdatePreReceiveHookEnforcementForOrg](#enterpriseadminupdateprereceivehookenforcementfororg) - Update pre-receive hook enforcement for an organization
* [enterpriseAdminUpdatePreReceiveHookEnforcementForRepo](#enterpriseadminupdateprereceivehookenforcementforrepo) - Update pre-receive hook enforcement for a repository
* [enterpriseAdminUpdateSelfHostedRunnerGroupForEnterprise](#enterpriseadminupdateselfhostedrunnergroupforenterprise) - Update a self-hosted runner group for an enterprise
* [enterpriseAdminUpdateUsernameForUser](#enterpriseadminupdateusernameforuser) - Update the username for a user
* [enterpriseAdminUpgradeLicense](#enterpriseadminupgradelicense) - Upgrade a license

## enterpriseAdminAddAuthorizedSshKey

**Note:** The request body for this operation must be submitted as `application/x-www-form-urlencoded` data. You can submit a parameter value as a string, or you can use a tool such as `curl` to submit a parameter value as the contents of a text file. For more information, see the [`curl` documentation](https://curl.se/docs/manpage.html#--data-urlencode).

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/enterprise-admin#add-an-authorized-ssh-key>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminAddAuthorizedSshKeyRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminAddAuthorizedSshKeyRequestBody();
    $request->authorizedKey = 'adipisci';

    $response = $sdk->enterpriseAdmin->enterpriseAdminAddAuthorizedSshKey($request);

    if ($response->sshKeys !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminAddCustomLabelsToSelfHostedRunnerForEnterprise

Add custom labels to a self-hosted runner configured in an enterprise.

You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#add-custom-labels-to-a-self-hosted-runner-for-an-enterprise>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminAddCustomLabelsToSelfHostedRunnerForEnterpriseRequest;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminAddCustomLabelsToSelfHostedRunnerForEnterpriseRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminAddCustomLabelsToSelfHostedRunnerForEnterpriseRequest();
    $request->requestBody = new EnterpriseAdminAddCustomLabelsToSelfHostedRunnerForEnterpriseRequestBody();
    $request->requestBody->labels = [
        'temporibus',
        'accusantium',
        'rem',
    ];
    $request->enterprise = 'aut';
    $request->runnerId = 513075;

    $response = $sdk->enterpriseAdmin->enterpriseAdminAddCustomLabelsToSelfHostedRunnerForEnterprise($request);

    if ($response->enterpriseAdminAddCustomLabelsToSelfHostedRunnerForEnterprise200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterprise

Adds an organization to the list of selected organizations that can access a self-hosted runner group. The runner group must have `visibility` set to `selected`. For more information, see "[Create a self-hosted runner group for an enterprise](#create-a-self-hosted-runner-group-for-an-enterprise)."

You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#add-organization-access-to-a-self-hosted-runner-group-in-an-enterprise>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest();
    $request->enterprise = 'eum';
    $request->orgId = 649832;
    $request->runnerGroupId = 68074;

    $response = $sdk->enterpriseAdmin->enterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterprise($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminAddSelfHostedRunnerToGroupForEnterprise

Adds a self-hosted runner to a runner group configured in an enterprise.

You must authenticate using an access token with the `manage_runners:enterprise`
scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#add-a-self-hosted-runner-to-a-group-for-an-enterprise>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminAddSelfHostedRunnerToGroupForEnterpriseRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminAddSelfHostedRunnerToGroupForEnterpriseRequest();
    $request->enterprise = 'corrupti';
    $request->runnerGroupId = 251941;
    $request->runnerId = 32465;

    $response = $sdk->enterpriseAdmin->enterpriseAdminAddSelfHostedRunnerToGroupForEnterprise($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminCreateEnterpriseServerLicense

When you boot a GitHub instance for the first time, you can use the following endpoint to upload a license.

Note that you need to `POST` to [`/setup/api/configure`](https://docs.github.com/enterprise-server@3.5/rest/reference/enterprise-admin#start-a-configuration-process) to start the actual configuration process.

When using this endpoint, your GitHub instance must have a password set. This can be accomplished two ways:

1.  If you're working directly with the API before accessing the web interface, you must pass in the password parameter to set your password.
2.  If you set up your instance via the web interface before accessing the API, your calls to this endpoint do not need the password parameter.

**Note:** The request body for this operation must be submitted as `multipart/form-data` data. You can can reference the license file by prefixing the filename with the `@` symbol using `curl`. For more information, see the [`curl` documentation](https://curl.se/docs/manpage.html#-F).

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/enterprise-admin#create-a-github-enterprise-server-license>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminCreateEnterpriseServerLicenseRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminCreateEnterpriseServerLicenseRequestBody();
    $request->license = 'dolor';
    $request->password = 'occaecati';
    $request->settings = 'numquam';

    $response = $sdk->enterpriseAdmin->enterpriseAdminCreateEnterpriseServerLicense($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminCreateGlobalWebhook

Create a global webhook

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/enterprise-admin#create-a-global-webhook>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminCreateGlobalWebhookRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminCreateGlobalWebhookRequestBodyConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminCreateGlobalWebhookRequestBody();
    $request->active = false;
    $request->config = new EnterpriseAdminCreateGlobalWebhookRequestBodyConfig();
    $request->config->contentType = 'impedit';
    $request->config->insecureSsl = 'explicabo';
    $request->config->secret = 'voluptas';
    $request->config->url = 'aut';
    $request->events = [
        'dicta',
        'maiores',
    ];
    $request->name = 'Lee Wiza';

    $response = $sdk->enterpriseAdmin->enterpriseAdminCreateGlobalWebhook($request);

    if ($response->globalHook !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminCreateImpersonationOAuthToken

Create an impersonation OAuth token

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/enterprise-admin#create-an-impersonation-oauth-token>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminCreateImpersonationOAuthTokenRequest;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminCreateImpersonationOAuthTokenRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminCreateImpersonationOAuthTokenRequest();
    $request->requestBody = new EnterpriseAdminCreateImpersonationOAuthTokenRequestBody();
    $request->requestBody->scopes = [
        'ea',
    ];
    $request->username = 'Elsie_Cruickshank80';

    $response = $sdk->enterpriseAdmin->enterpriseAdminCreateImpersonationOAuthToken($request);

    if ($response->authorization !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminCreateOrg

Create an organization

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/enterprise-admin#create-an-organization>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminCreateOrgRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminCreateOrgRequestBody();
    $request->admin = 'dignissimos';
    $request->login = 'officia';
    $request->profileName = 'asperiores';

    $response = $sdk->enterpriseAdmin->enterpriseAdminCreateOrg($request);

    if ($response->organizationSimple !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminCreatePreReceiveEnvironment

Create a pre-receive environment

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/enterprise-admin#create-a-pre-receive-environment>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminCreatePreReceiveEnvironmentRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminCreatePreReceiveEnvironmentRequestBody();
    $request->imageUrl = 'nemo';
    $request->name = 'Darlene Sawayn';

    $response = $sdk->enterpriseAdmin->enterpriseAdminCreatePreReceiveEnvironment($request);

    if ($response->preReceiveEnvironment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminCreatePreReceiveHook

Create a pre-receive hook

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/enterprise-admin#create-a-pre-receive-hook>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminCreatePreReceiveHookRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminCreatePreReceiveHookRequestBody();
    $request->allowDownstreamConfiguration = false;
    $request->enforcement = 'ab';
    $request->environment = [
        'fuga' => 'id',
    ];
    $request->name = 'Sheila Nader';
    $request->script = 'totam';
    $request->scriptRepository = [
        'vel' => 'ducimus',
        'quos' => 'vel',
        'labore' => 'possimus',
        'facilis' => 'cum',
    ];

    $response = $sdk->enterpriseAdmin->enterpriseAdminCreatePreReceiveHook($request);

    if ($response->preReceiveHook !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminCreateRegistrationTokenForEnterprise

Returns a token that you can pass to the `config` script. The token expires after one hour.

You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.

#### Example using registration token

Configure your self-hosted runner, replacing `TOKEN` with the registration token provided by this endpoint.

```
./config.sh --url https://github.com/enterprises/octo-enterprise --token TOKEN
```

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#create-a-registration-token-for-an-enterprise>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminCreateRegistrationTokenForEnterpriseRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminCreateRegistrationTokenForEnterpriseRequest();
    $request->enterprise = 'commodi';

    $response = $sdk->enterpriseAdmin->enterpriseAdminCreateRegistrationTokenForEnterprise($request);

    if ($response->authenticationToken !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminCreateRemoveTokenForEnterprise

Returns a token that you can pass to the `config` script to remove a self-hosted runner from an enterprise. The token expires after one hour.

You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.

#### Example using remove token

To remove your self-hosted runner from an enterprise, replace `TOKEN` with the remove token provided by this
endpoint.

```
./config.sh remove --token TOKEN
```

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#create-a-remove-token-for-an-enterprise>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminCreateRemoveTokenForEnterpriseRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminCreateRemoveTokenForEnterpriseRequest();
    $request->enterprise = 'in';

    $response = $sdk->enterpriseAdmin->enterpriseAdminCreateRemoveTokenForEnterprise($request);

    if ($response->authenticationToken !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminCreateSelfHostedRunnerGroupForEnterprise

Creates a new self-hosted runner group for an enterprise.

You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#create-self-hosted-runner-group-for-an-enterprise>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequest;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequestBodyVisibilityEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequest();
    $request->requestBody = new EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequestBody();
    $request->requestBody->allowsPublicRepositories = false;
    $request->requestBody->name = 'Lela Shields';
    $request->requestBody->restrictedToWorkflows = false;
    $request->requestBody->runners = [
        46007,
        738683,
    ];
    $request->requestBody->selectedOrganizationIds = [
        449083,
    ];
    $request->requestBody->selectedWorkflows = [
        'octo-org/octo-repo/.github/workflows/deploy.yaml@main',
        'octo-org/octo-repo/.github/workflows/deploy.yaml@main',
    ];
    $request->requestBody->visibility = EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequestBodyVisibilityEnum::ALL;
    $request->enterprise = 'facere';

    $response = $sdk->enterpriseAdmin->enterpriseAdminCreateSelfHostedRunnerGroupForEnterprise($request);

    if ($response->runnerGroupsEnterprise !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminCreateUser

If an external authentication mechanism is used, the login name should match the login name in the external system. If you are using LDAP authentication, you should also [update the LDAP mapping](https://docs.github.com/enterprise-server@3.5/rest/reference/enterprise-admin#update-ldap-mapping-for-a-user) for the user.

The login name will be normalized to only contain alphanumeric characters or single hyphens. For example, if you send `"octo_cat"` as the login, a user named `"octo-cat"` will be created.

If the login name or email address is already associated with an account, the server will return a `422` response.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/enterprise-admin#create-a-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminCreateUserRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminCreateUserRequestBody();
    $request->email = 'Winona_Homenick90@gmail.com';
    $request->login = 'necessitatibus';

    $response = $sdk->enterpriseAdmin->enterpriseAdminCreateUser($request);

    if ($response->simpleUser !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminDeleteGlobalWebhook

Delete a global webhook

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/enterprise-admin#delete-a-global-webhook>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminDeleteGlobalWebhookRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminDeleteGlobalWebhookRequest();
    $request->hookId = 296556;

    $response = $sdk->enterpriseAdmin->enterpriseAdminDeleteGlobalWebhook($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminDeleteImpersonationOAuthToken

Delete an impersonation OAuth token

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/enterprise-admin#delete-an-impersonation-oauth-token>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminDeleteImpersonationOAuthTokenRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminDeleteImpersonationOAuthTokenRequest();
    $request->username = 'Bo24';

    $response = $sdk->enterpriseAdmin->enterpriseAdminDeleteImpersonationOAuthToken($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminDeletePersonalAccessToken

Deletes a personal access token. Returns a `403 - Forbidden` status when a personal access token is in use. For example, if you access this endpoint with the same personal access token that you are trying to delete, you will receive this error.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/enterprise-admin#delete-a-personal-access-token>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminDeletePersonalAccessTokenRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminDeletePersonalAccessTokenRequest();
    $request->tokenId = 228263;

    $response = $sdk->enterpriseAdmin->enterpriseAdminDeletePersonalAccessToken($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminDeletePreReceiveEnvironment

If you attempt to delete an environment that cannot be deleted, you will receive a `422 Unprocessable Entity` response.

The possible error messages are:

*   _Cannot modify or delete the default environment_
*   _Cannot delete environment that has hooks_
*   _Cannot delete environment when download is in progress_

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/enterprise-admin#delete-a-pre-receive-environment>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminDeletePreReceiveEnvironmentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminDeletePreReceiveEnvironmentRequest();
    $request->preReceiveEnvironmentId = 105906;

    $response = $sdk->enterpriseAdmin->enterpriseAdminDeletePreReceiveEnvironment($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminDeletePreReceiveHook

Delete a pre-receive hook

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/enterprise-admin#delete-a-pre-receive-hook>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminDeletePreReceiveHookRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminDeletePreReceiveHookRequest();
    $request->preReceiveHookId = 489509;

    $response = $sdk->enterpriseAdmin->enterpriseAdminDeletePreReceiveHook($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminDeletePublicKey

Delete a public key

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/enterprise-admin#delete-a-public-key>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminDeletePublicKeyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminDeletePublicKeyRequest();
    $request->keyIds = 'a';

    $response = $sdk->enterpriseAdmin->enterpriseAdminDeletePublicKey($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminDeleteSelfHostedRunnerFromEnterprise

Forces the removal of a self-hosted runner from an enterprise. You can use this endpoint to completely remove the runner when the machine you were using no longer exists.

You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#delete-self-hosted-runner-from-an-enterprise>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminDeleteSelfHostedRunnerFromEnterpriseRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminDeleteSelfHostedRunnerFromEnterpriseRequest();
    $request->enterprise = 'debitis';
    $request->runnerId = 233420;

    $response = $sdk->enterpriseAdmin->enterpriseAdminDeleteSelfHostedRunnerFromEnterprise($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminDeleteSelfHostedRunnerGroupFromEnterprise

Deletes a self-hosted runner group for an enterprise.

You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#delete-a-self-hosted-runner-group-from-an-enterprise>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminDeleteSelfHostedRunnerGroupFromEnterpriseRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminDeleteSelfHostedRunnerGroupFromEnterpriseRequest();
    $request->enterprise = 'corporis';
    $request->runnerGroupId = 689768;

    $response = $sdk->enterpriseAdmin->enterpriseAdminDeleteSelfHostedRunnerGroupFromEnterprise($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminDeleteUser

Deleting a user will delete all their repositories, gists, applications, and personal settings. [Suspending a user](https://docs.github.com/enterprise-server@3.5/rest/reference/enterprise-admin#suspend-a-user) is often a better option.

You can delete any user account except your own.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/enterprise-admin#delete-a-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminDeleteUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminDeleteUserRequest();
    $request->username = 'Germaine_Beer11';

    $response = $sdk->enterpriseAdmin->enterpriseAdminDeleteUser($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminDemoteSiteAdministrator

You can demote any user account except your own.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/enterprise-admin#demote-a-site-administrator>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminDemoteSiteAdministratorRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminDemoteSiteAdministratorRequest();
    $request->username = 'Shannon13';

    $response = $sdk->enterpriseAdmin->enterpriseAdminDemoteSiteAdministrator($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminDisableSelectedOrganizationGithubActionsEnterprise

Removes an organization from the list of selected organizations that are enabled for GitHub Actions in an enterprise. To use this endpoint, the enterprise permission policy for `enabled_organizations` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)."

You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#disable-a-selected-organization-for-github-actions-in-an-enterprise>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminDisableSelectedOrganizationGithubActionsEnterpriseRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminDisableSelectedOrganizationGithubActionsEnterpriseRequest();
    $request->enterprise = 'voluptas';
    $request->orgId = 374244;

    $response = $sdk->enterpriseAdmin->enterpriseAdminDisableSelectedOrganizationGithubActionsEnterprise($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminEnableOrDisableMaintenanceMode

**Note:** The request body for this operation must be submitted as `application/x-www-form-urlencoded` data. You can submit a parameter value as a string, or you can use a tool such as `curl` to submit a parameter value as the contents of a text file. For more information, see the [`curl` documentation](https://curl.se/docs/manpage.html#--data-urlencode).

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/enterprise-admin#enable-or-disable-maintenance-mode>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminEnableOrDisableMaintenanceModeRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminEnableOrDisableMaintenanceModeRequestBody();
    $request->maintenance = 'voluptas';

    $response = $sdk->enterpriseAdmin->enterpriseAdminEnableOrDisableMaintenanceMode($request);

    if ($response->maintenanceStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminEnableSelectedOrganizationGithubActionsEnterprise

Adds an organization to the list of selected organizations that are enabled for GitHub Actions in an enterprise. To use this endpoint, the enterprise permission policy for `enabled_organizations` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)."

You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#enable-a-selected-organization-for-github-actions-in-an-enterprise>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminEnableSelectedOrganizationGithubActionsEnterpriseRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminEnableSelectedOrganizationGithubActionsEnterpriseRequest();
    $request->enterprise = 'minima';
    $request->orgId = 748789;

    $response = $sdk->enterpriseAdmin->enterpriseAdminEnableSelectedOrganizationGithubActionsEnterprise($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminGetAllAuthorizedSshKeys

Get all authorized SSH keys

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/enterprise-admin#get-all-authorized-ssh-keys>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->enterpriseAdmin->enterpriseAdminGetAllAuthorizedSshKeys();

    if ($response->sshKeys !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminGetAllStats

Get all statistics

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/enterprise-admin#get-statistics>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->enterpriseAdmin->enterpriseAdminGetAllStats();

    if ($response->enterpriseOverview !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminGetAllowedActionsEnterprise

Gets the selected actions that are allowed in an enterprise. To use this endpoint, the enterprise permission policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)."

You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#get-allowed-actions-for-an-enterprise>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminGetAllowedActionsEnterpriseRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminGetAllowedActionsEnterpriseRequest();
    $request->enterprise = 'dolorum';

    $response = $sdk->enterpriseAdmin->enterpriseAdminGetAllowedActionsEnterprise($request);

    if ($response->selectedActions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminGetAnnouncement

Gets the current message and expiration date of the global announcement banner in your enterprise.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/enterprise-admin/announcement#get-the-global-announcement-banner>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->enterpriseAdmin->enterpriseAdminGetAnnouncement();

    if ($response->announcement !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminGetAuditLog

Gets the audit log for an enterprise. To use this endpoint, you must be an enterprise admin, and you must use an access token with the `admin:enterprise` scope.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/enterprise-admin#get-the-audit-log-for-an-enterprise>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminGetAuditLogRequest;
use \OpenAPI\OpenAPI\Models\Shared\AuditLogIncludeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AuditLogOrderEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminGetAuditLogRequest();
    $request->after = 'adipisci';
    $request->before = 'minus';
    $request->enterprise = 'dolores';
    $request->include = AuditLogIncludeEnum::GIT;
    $request->order = AuditLogOrderEnum::DESC;
    $request->page = 296242;
    $request->perPage = 304468;
    $request->phrase = 'officiis';

    $response = $sdk->enterpriseAdmin->enterpriseAdminGetAuditLog($request);

    if ($response->auditLogEvents !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminGetCommentStats

Get comment statistics

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/enterprise-admin#get-comment-statistics>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->enterpriseAdmin->enterpriseAdminGetCommentStats();

    if ($response->enterpriseCommentOverview !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminGetConfigurationStatus

This endpoint allows you to check the status of the most recent configuration process:

Note that you may need to wait several seconds after you start a process before you can check its status.

The different statuses are:

| Status        | Description                       |
| ------------- | --------------------------------- |
| `PENDING`     | The job has not started yet       |
| `CONFIGURING` | The job is running                |
| `DONE`        | The job has finished correctly    |
| `FAILED`      | The job has finished unexpectedly |

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/enterprise-admin#get-the-configuration-status>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->enterpriseAdmin->enterpriseAdminGetConfigurationStatus();

    if ($response->configurationStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminGetDownloadStatusForPreReceiveEnvironment

In addition to seeing the download status at the "[Get a pre-receive environment](#get-a-pre-receive-environment)" endpoint, there is also this separate endpoint for just the download status.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/enterprise-admin#get-the-download-status-for-a-pre-receive-environment>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminGetDownloadStatusForPreReceiveEnvironmentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminGetDownloadStatusForPreReceiveEnvironmentRequest();
    $request->preReceiveEnvironmentId = 839189;

    $response = $sdk->enterpriseAdmin->enterpriseAdminGetDownloadStatusForPreReceiveEnvironment($request);

    if ($response->preReceiveEnvironmentDownloadStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminGetGistStats

Get gist statistics

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/enterprise-admin#get-gist-statistics>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->enterpriseAdmin->enterpriseAdminGetGistStats();

    if ($response->enterpriseGistOverview !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminGetGithubActionsPermissionsEnterprise

Gets the GitHub Actions permissions policy for organizations and allowed actions in an enterprise.

You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#get-github-actions-permissions-for-an-enterprise>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminGetGithubActionsPermissionsEnterpriseRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminGetGithubActionsPermissionsEnterpriseRequest();
    $request->enterprise = 'ullam';

    $response = $sdk->enterpriseAdmin->enterpriseAdminGetGithubActionsPermissionsEnterprise($request);

    if ($response->actionsEnterprisePermissions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminGetGlobalWebhook

Get a global webhook

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/enterprise-admin#get-a-global-webhook>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminGetGlobalWebhookRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminGetGlobalWebhookRequest();
    $request->hookId = 237742;

    $response = $sdk->enterpriseAdmin->enterpriseAdminGetGlobalWebhook($request);

    if ($response->globalHook !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminGetHooksStats

Get hooks statistics

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/enterprise-admin#get-hooks-statistics>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->enterpriseAdmin->enterpriseAdminGetHooksStats();

    if ($response->enterpriseHookOverview !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminGetIssueStats

Get issue statistics

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/enterprise-admin#get-issues-statistics>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->enterpriseAdmin->enterpriseAdminGetIssueStats();

    if ($response->enterpriseIssueOverview !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminGetLicenseInformation

Get license information

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/enterprise-admin#get-license-information>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->enterpriseAdmin->enterpriseAdminGetLicenseInformation();

    if ($response->licenseInfo !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminGetMaintenanceStatus

Check your installation's maintenance status:

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/enterprise-admin#get-the-maintenance-status>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->enterpriseAdmin->enterpriseAdminGetMaintenanceStatus();

    if ($response->maintenanceStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminGetMilestoneStats

Get milestone statistics

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/enterprise-admin#get-milestone-statistics>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->enterpriseAdmin->enterpriseAdminGetMilestoneStats();

    if ($response->enterpriseMilestoneOverview !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminGetOrgStats

Get organization statistics

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/enterprise-admin#get-organization-statistics>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->enterpriseAdmin->enterpriseAdminGetOrgStats();

    if ($response->enterpriseOrganizationOverview !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminGetPagesStats

Get pages statistics

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/enterprise-admin#get-pages-statistics>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->enterpriseAdmin->enterpriseAdminGetPagesStats();

    if ($response->enterprisePageOverview !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminGetPreReceiveEnvironment

Get a pre-receive environment

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/enterprise-admin#get-a-pre-receive-environment>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminGetPreReceiveEnvironmentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminGetPreReceiveEnvironmentRequest();
    $request->preReceiveEnvironmentId = 738391;

    $response = $sdk->enterpriseAdmin->enterpriseAdminGetPreReceiveEnvironment($request);

    if ($response->preReceiveEnvironment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminGetPreReceiveHook

Get a pre-receive hook

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/enterprise-admin#get-a-pre-receive-hook>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminGetPreReceiveHookRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminGetPreReceiveHookRequest();
    $request->preReceiveHookId = 502389;

    $response = $sdk->enterpriseAdmin->enterpriseAdminGetPreReceiveHook($request);

    if ($response->preReceiveHook !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminGetPreReceiveHookForOrg

Get a pre-receive hook for an organization

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/enterprise-admin#get-a-pre-receive-hook-for-an-organization>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminGetPreReceiveHookForOrgRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminGetPreReceiveHookForOrgRequest();
    $request->org = 'quas';
    $request->preReceiveHookId = 942584;

    $response = $sdk->enterpriseAdmin->enterpriseAdminGetPreReceiveHookForOrg($request);

    if ($response->orgPreReceiveHook !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminGetPreReceiveHookForRepo

Get a pre-receive hook for a repository

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/enterprise-admin#get-a-pre-receive-hook-for-a-repository>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminGetPreReceiveHookForRepoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminGetPreReceiveHookForRepoRequest();
    $request->owner = 'nesciunt';
    $request->preReceiveHookId = 633998;
    $request->repo = 'corrupti';

    $response = $sdk->enterpriseAdmin->enterpriseAdminGetPreReceiveHookForRepo($request);

    if ($response->repositoryPreReceiveHook !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminGetPullRequestStats

Get pull request statistics

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/enterprise-admin#get-pull-requests-statistics>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->enterpriseAdmin->enterpriseAdminGetPullRequestStats();

    if ($response->enterprisePullRequestOverview !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminGetRepoStats

Get repository statistics

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/enterprise-admin#get-repository-statistics>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->enterpriseAdmin->enterpriseAdminGetRepoStats();

    if ($response->enterpriseRepositoryOverview !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminGetSelfHostedRunnerForEnterprise

Gets a specific self-hosted runner configured in an enterprise.

You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#get-a-self-hosted-runner-for-an-enterprise>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminGetSelfHostedRunnerForEnterpriseRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminGetSelfHostedRunnerForEnterpriseRequest();
    $request->enterprise = 'pariatur';
    $request->runnerId = 519643;

    $response = $sdk->enterpriseAdmin->enterpriseAdminGetSelfHostedRunnerForEnterprise($request);

    if ($response->runner !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminGetSelfHostedRunnerGroupForEnterprise

Gets a specific self-hosted runner group for an enterprise.

You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#get-a-self-hosted-runner-group-for-an-enterprise>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminGetSelfHostedRunnerGroupForEnterpriseRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminGetSelfHostedRunnerGroupForEnterpriseRequest();
    $request->enterprise = 'hic';
    $request->runnerGroupId = 348783;

    $response = $sdk->enterpriseAdmin->enterpriseAdminGetSelfHostedRunnerGroupForEnterprise($request);

    if ($response->runnerGroupsEnterprise !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminGetSettings

Gets the settings for your instance. To change settings, see the [Set settings endpoint](https://docs.github.com/enterprise-server@3.5/rest/reference/enterprise-admin#set-settings).

**Note:** You cannot retrieve the management console password with the Enterprise administration API.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/enterprise-admin#get-settings>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->enterpriseAdmin->enterpriseAdminGetSettings();

    if ($response->enterpriseSettings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminGetUserStats

Get users statistics

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/enterprise-admin#get-users-statistics>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->enterpriseAdmin->enterpriseAdminGetUserStats();

    if ($response->enterpriseUserOverview !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminListGlobalWebhooks

List global webhooks

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/enterprise-admin#list-global-webhooks>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminListGlobalWebhooksRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminListGlobalWebhooksRequest();
    $request->page = 750765;
    $request->perPage = 24619;

    $response = $sdk->enterpriseAdmin->enterpriseAdminListGlobalWebhooks($request);

    if ($response->globalHooks !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminListLabelsForSelfHostedRunnerForEnterprise

Lists all labels for a self-hosted runner configured in an enterprise.

You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#list-labels-for-a-self-hosted-runner-for-an-enterprise>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminListLabelsForSelfHostedRunnerForEnterpriseRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminListLabelsForSelfHostedRunnerForEnterpriseRequest();
    $request->enterprise = 'rerum';
    $request->runnerId = 148829;

    $response = $sdk->enterpriseAdmin->enterpriseAdminListLabelsForSelfHostedRunnerForEnterprise($request);

    if ($response->enterpriseAdminListLabelsForSelfHostedRunnerForEnterprise200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprise

Lists the organizations with access to a self-hosted runner group.

You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#list-organization-access-to-a-self-hosted-runner-group-in-a-enterprise>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest();
    $request->enterprise = 'reiciendis';
    $request->page = 131852;
    $request->perPage = 994401;
    $request->runnerGroupId = 707918;

    $response = $sdk->enterpriseAdmin->enterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprise($request);

    if ($response->enterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprise200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminListPersonalAccessTokens

Lists personal access tokens for all users, including admin users.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/enterprise-admin#list-personal-access-tokens>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminListPersonalAccessTokensRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminListPersonalAccessTokensRequest();
    $request->page = 451822;
    $request->perPage = 709072;

    $response = $sdk->enterpriseAdmin->enterpriseAdminListPersonalAccessTokens($request);

    if ($response->authorizations !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminListPreReceiveEnvironments

List pre-receive environments

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/enterprise-admin#list-pre-receive-environments>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminListPreReceiveEnvironmentsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DirectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminListPreReceiveEnvironmentsSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminListPreReceiveEnvironmentsRequest();
    $request->direction = DirectionEnum::ASC;
    $request->page = 611749;
    $request->perPage = 292794;
    $request->sort = EnterpriseAdminListPreReceiveEnvironmentsSortEnum::NAME;

    $response = $sdk->enterpriseAdmin->enterpriseAdminListPreReceiveEnvironments($request);

    if ($response->preReceiveEnvironments !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminListPreReceiveHooks

List pre-receive hooks

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/enterprise-admin#list-pre-receive-hooks>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminListPreReceiveHooksRequest;
use \OpenAPI\OpenAPI\Models\Shared\DirectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminListPreReceiveHooksSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminListPreReceiveHooksRequest();
    $request->direction = DirectionEnum::ASC;
    $request->page = 447516;
    $request->perPage = 417486;
    $request->sort = EnterpriseAdminListPreReceiveHooksSortEnum::NAME;

    $response = $sdk->enterpriseAdmin->enterpriseAdminListPreReceiveHooks($request);

    if ($response->preReceiveHooks !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminListPreReceiveHooksForOrg

List all pre-receive hooks that are enabled or testing for this organization as well as any disabled hooks that can be configured at the organization level. Globally disabled pre-receive hooks that do not allow downstream configuration are not listed.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/enterprise-admin#list-pre-receive-hooks-for-an-organization>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminListPreReceiveHooksForOrgRequest;
use \OpenAPI\OpenAPI\Models\Shared\DirectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminListPreReceiveHooksForOrgSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminListPreReceiveHooksForOrgRequest();
    $request->direction = DirectionEnum::ASC;
    $request->org = 'voluptas';
    $request->page = 604118;
    $request->perPage = 100032;
    $request->sort = EnterpriseAdminListPreReceiveHooksForOrgSortEnum::UPDATED;

    $response = $sdk->enterpriseAdmin->enterpriseAdminListPreReceiveHooksForOrg($request);

    if ($response->orgPreReceiveHooks !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminListPreReceiveHooksForRepo

List all pre-receive hooks that are enabled or testing for this repository as well as any disabled hooks that are allowed to be enabled at the repository level. Pre-receive hooks that are disabled at a higher level and are not configurable will not be listed.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/enterprise-admin#list-pre-receive-hooks-for-a-repository>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminListPreReceiveHooksForRepoRequest;
use \OpenAPI\OpenAPI\Models\Shared\DirectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminListPreReceiveHooksForRepoSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminListPreReceiveHooksForRepoRequest();
    $request->direction = DirectionEnum::DESC;
    $request->owner = 'debitis';
    $request->page = 72434;
    $request->perPage = 967795;
    $request->repo = 'perferendis';
    $request->sort = EnterpriseAdminListPreReceiveHooksForRepoSortEnum::UPDATED;

    $response = $sdk->enterpriseAdmin->enterpriseAdminListPreReceiveHooksForRepo($request);

    if ($response->repositoryPreReceiveHooks !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminListPublicKeys

List public keys

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/enterprise-admin#list-public-keys>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminListPublicKeysRequest;
use \OpenAPI\OpenAPI\Models\Shared\DirectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminListPublicKeysSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminListPublicKeysRequest();
    $request->direction = DirectionEnum::DESC;
    $request->page = 274823;
    $request->perPage = 148478;
    $request->since = 'provident';
    $request->sort = EnterpriseAdminListPublicKeysSortEnum::CREATED;

    $response = $sdk->enterpriseAdmin->enterpriseAdminListPublicKeys($request);

    if ($response->publicKeyFulls !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminListRunnerApplicationsForEnterprise

Lists binaries for the runner application that you can download and run.

You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#list-runner-applications-for-an-enterprise>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminListRunnerApplicationsForEnterpriseRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminListRunnerApplicationsForEnterpriseRequest();
    $request->enterprise = 'necessitatibus';

    $response = $sdk->enterpriseAdmin->enterpriseAdminListRunnerApplicationsForEnterprise($request);

    if ($response->runnerApplications !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprise

Lists the organizations that are selected to have GitHub Actions enabled in an enterprise. To use this endpoint, the enterprise permission policy for `enabled_organizations` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)."

You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#list-selected-organizations-enabled-for-github-actions-in-an-enterprise>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseRequest();
    $request->enterprise = 'ipsum';
    $request->page = 406733;
    $request->perPage = 579912;

    $response = $sdk->enterpriseAdmin->enterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprise($request);

    if ($response->enterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprise200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminListSelfHostedRunnerGroupsForEnterprise

Lists all self-hosted runner groups for an enterprise.

You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#list-self-hosted-runner-groups-for-an-enterprise>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseRequest();
    $request->enterprise = 'quos';
    $request->page = 975752;
    $request->perPage = 271653;

    $response = $sdk->enterpriseAdmin->enterpriseAdminListSelfHostedRunnerGroupsForEnterprise($request);

    if ($response->enterpriseAdminListSelfHostedRunnerGroupsForEnterprise200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminListSelfHostedRunnersForEnterprise

Lists all self-hosted runners configured for an enterprise.

You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#list-self-hosted-runners-for-an-enterprise>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminListSelfHostedRunnersForEnterpriseRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminListSelfHostedRunnersForEnterpriseRequest();
    $request->enterprise = 'tempora';
    $request->page = 455444;
    $request->perPage = 970076;

    $response = $sdk->enterpriseAdmin->enterpriseAdminListSelfHostedRunnersForEnterprise($request);

    if ($response->enterpriseAdminListSelfHostedRunnersForEnterprise200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminListSelfHostedRunnersInGroupForEnterprise

Lists the self-hosted runners that are in a specific enterprise group.

You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#list-self-hosted-runners-in-a-group-for-an-enterprise>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseRequest();
    $request->enterprise = 'ex';
    $request->page = 25497;
    $request->perPage = 248413;
    $request->runnerGroupId = 888044;

    $response = $sdk->enterpriseAdmin->enterpriseAdminListSelfHostedRunnersInGroupForEnterprise($request);

    if ($response->enterpriseAdminListSelfHostedRunnersInGroupForEnterprise200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminPingGlobalWebhook

This will trigger a [ping event](https://docs.github.com/enterprise-server@3.5/webhooks/#ping-event) to be sent to the webhook.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/enterprise-admin#ping-a-global-webhook>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminPingGlobalWebhookRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminPingGlobalWebhookRequest();
    $request->hookId = 505866;

    $response = $sdk->enterpriseAdmin->enterpriseAdminPingGlobalWebhook($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminPromoteUserToBeSiteAdministrator

Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@3.5/rest/overview/resources-in-the-rest-api#http-verbs)."

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/enterprise-admin#promote-a-user-to-be-a-site-administrator>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminPromoteUserToBeSiteAdministratorRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminPromoteUserToBeSiteAdministratorRequest();
    $request->username = 'Melody37';

    $response = $sdk->enterpriseAdmin->enterpriseAdminPromoteUserToBeSiteAdministrator($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminRemoveAllCustomLabelsFromSelfHostedRunnerForEnterprise

Remove all custom labels from a self-hosted runner configured in an
enterprise. Returns the remaining read-only labels from the runner.

You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#remove-all-custom-labels-from-a-self-hosted-runner-for-an-enterprise>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminRemoveAllCustomLabelsFromSelfHostedRunnerForEnterpriseRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminRemoveAllCustomLabelsFromSelfHostedRunnerForEnterpriseRequest();
    $request->enterprise = 'debitis';
    $request->runnerId = 524970;

    $response = $sdk->enterpriseAdmin->enterpriseAdminRemoveAllCustomLabelsFromSelfHostedRunnerForEnterprise($request);

    if ($response->enterpriseAdminRemoveAllCustomLabelsFromSelfHostedRunnerForEnterprise200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminRemoveAnnouncement

Removes the global announcement banner in your enterprise.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/enterprise-admin/announcement#remove-the-global-announcement-banner>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->enterpriseAdmin->enterpriseAdminRemoveAnnouncement();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminRemoveAuthorizedSshKey

**Note:** The request body for this operation must be submitted as `application/x-www-form-urlencoded` data. You can submit a parameter value as a string, or you can use a tool such as `curl` to submit a parameter value as the contents of a text file. For more information, see the [`curl` documentation](https://curl.se/docs/manpage.html#--data-urlencode).

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/enterprise-admin#remove-an-authorized-ssh-key>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminRemoveAuthorizedSshKeyRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminRemoveAuthorizedSshKeyRequestBody();
    $request->authorizedKey = 'sit';

    $response = $sdk->enterpriseAdmin->enterpriseAdminRemoveAuthorizedSshKey($request);

    if ($response->sshKeys !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminRemoveCustomLabelFromSelfHostedRunnerForEnterprise

Remove a custom label from a self-hosted runner configured
in an enterprise. Returns the remaining labels from the runner.

This endpoint returns a `404 Not Found` status if the custom label is not
present on the runner.

You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#remove-a-custom-label-from-a-self-hosted-runner-for-an-enterprise>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminRemoveCustomLabelFromSelfHostedRunnerForEnterpriseRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminRemoveCustomLabelFromSelfHostedRunnerForEnterpriseRequest();
    $request->enterprise = 'nobis';
    $request->name = 'Floyd Harber';
    $request->runnerId = 862319;

    $response = $sdk->enterpriseAdmin->enterpriseAdminRemoveCustomLabelFromSelfHostedRunnerForEnterprise($request);

    if ($response->enterpriseAdminRemoveCustomLabelFromSelfHostedRunnerForEnterprise200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterprise

Removes an organization from the list of selected organizations that can access a self-hosted runner group. The runner group must have `visibility` set to `selected`. For more information, see "[Create a self-hosted runner group for an enterprise](#create-a-self-hosted-runner-group-for-an-enterprise)."

You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#remove-organization-access-to-a-self-hosted-runner-group-in-an-enterprise>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest();
    $request->enterprise = 'magni';
    $request->orgId = 48690;
    $request->runnerGroupId = 901483;

    $response = $sdk->enterpriseAdmin->enterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterprise($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminRemovePreReceiveHookEnforcementForOrg

Removes any overrides for this hook at the org level for this org.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/enterprise-admin#remove-pre-receive-hook-enforcement-for-an-organization>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminRemovePreReceiveHookEnforcementForOrgRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminRemovePreReceiveHookEnforcementForOrgRequest();
    $request->org = 'numquam';
    $request->preReceiveHookId = 329935;

    $response = $sdk->enterpriseAdmin->enterpriseAdminRemovePreReceiveHookEnforcementForOrg($request);

    if ($response->orgPreReceiveHook !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminRemovePreReceiveHookEnforcementForRepo

Deletes any overridden enforcement on this repository for the specified hook.

Responds with effective values inherited from owner and/or global level.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/enterprise-admin#remove-pre-receive-hook-enforcement-for-a-repository>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminRemovePreReceiveHookEnforcementForRepoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminRemovePreReceiveHookEnforcementForRepoRequest();
    $request->owner = 'in';
    $request->preReceiveHookId = 889234;
    $request->repo = 'beatae';

    $response = $sdk->enterpriseAdmin->enterpriseAdminRemovePreReceiveHookEnforcementForRepo($request);

    if ($response->repositoryPreReceiveHook !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterprise

Removes a self-hosted runner from a group configured in an enterprise. The runner is then returned to the default group.

You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#remove-a-self-hosted-runner-from-a-group-for-an-enterprise>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterpriseRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterpriseRequest();
    $request->enterprise = 'laudantium';
    $request->runnerGroupId = 348476;
    $request->runnerId = 510629;

    $response = $sdk->enterpriseAdmin->enterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterprise($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminSetAllowedActionsEnterprise

Sets the actions that are allowed in an enterprise. To use this endpoint, the enterprise permission policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)."

You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#set-allowed-actions-for-an-enterprise>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminSetAllowedActionsEnterpriseRequest;
use \OpenAPI\OpenAPI\Models\Shared\SelectedActions;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminSetAllowedActionsEnterpriseRequest();
    $request->enterprise = 'cum';
    $request->selectedActions = new SelectedActions();
    $request->selectedActions->githubOwnedAllowed = false;
    $request->selectedActions->patternsAllowed = [
        'dolorum',
        'voluptatum',
    ];

    $response = $sdk->enterpriseAdmin->enterpriseAdminSetAllowedActionsEnterprise($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminSetAnnouncement

Sets the message and expiration time for the global announcement banner in your enterprise.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/enterprise-admin/announcement#set-the-global-announcement-banner>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Announcement;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Announcement();
    $request->announcement = 'Very **important** announcement about _something_.';
    $request->expiresAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '"2021-01-01T00:00:00.000-07:00"');

    $response = $sdk->enterpriseAdmin->enterpriseAdminSetAnnouncement($request);

    if ($response->announcement !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminSetCustomLabelsForSelfHostedRunnerForEnterprise

Remove all previous custom labels and set the new custom labels for a specific
self-hosted runner configured in an enterprise.

You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#set-custom-labels-for-a-self-hosted-runner-for-an-enterprise>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminSetCustomLabelsForSelfHostedRunnerForEnterpriseRequest;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminSetCustomLabelsForSelfHostedRunnerForEnterpriseRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminSetCustomLabelsForSelfHostedRunnerForEnterpriseRequest();
    $request->requestBody = new EnterpriseAdminSetCustomLabelsForSelfHostedRunnerForEnterpriseRequestBody();
    $request->requestBody->labels = [
        'hic',
        'expedita',
        'debitis',
    ];
    $request->enterprise = 'neque';
    $request->runnerId = 677115;

    $response = $sdk->enterpriseAdmin->enterpriseAdminSetCustomLabelsForSelfHostedRunnerForEnterprise($request);

    if ($response->enterpriseAdminSetCustomLabelsForSelfHostedRunnerForEnterprise200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminSetGithubActionsPermissionsEnterprise

Sets the GitHub Actions permissions policy for organizations and allowed actions in an enterprise.

You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#set-github-actions-permissions-for-an-enterprise>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminSetGithubActionsPermissionsEnterpriseRequest;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminSetGithubActionsPermissionsEnterpriseRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\AllowedActionsEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnabledOrganizationsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminSetGithubActionsPermissionsEnterpriseRequest();
    $request->requestBody = new EnterpriseAdminSetGithubActionsPermissionsEnterpriseRequestBody();
    $request->requestBody->allowedActions = AllowedActionsEnum::LOCAL_ONLY;
    $request->requestBody->enabledOrganizations = EnabledOrganizationsEnum::NONE;
    $request->enterprise = 'dolorum';

    $response = $sdk->enterpriseAdmin->enterpriseAdminSetGithubActionsPermissionsEnterprise($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterprise

Replaces the list of organizations that have access to a self-hosted runner configured in an enterprise.

You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#set-organization-access-to-a-self-hosted-runner-group-in-an-enterprise>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest();
    $request->requestBody = new EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseRequestBody();
    $request->requestBody->selectedOrganizationIds = [
        879235,
        272683,
        543678,
    ];
    $request->enterprise = 'fugit';
    $request->runnerGroupId = 282699;

    $response = $sdk->enterpriseAdmin->enterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterprise($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterprise

Replaces the list of selected organizations that are enabled for GitHub Actions in an enterprise. To use this endpoint, the enterprise permission policy for `enabled_organizations` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)."

You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#set-selected-organizations-enabled-for-github-actions-in-an-enterprise>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterpriseRequest;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterpriseRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterpriseRequest();
    $request->requestBody = new EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterpriseRequestBody();
    $request->requestBody->selectedOrganizationIds = [
        30235,
        635057,
        710337,
        299643,
    ];
    $request->enterprise = 'consequatur';

    $response = $sdk->enterpriseAdmin->enterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterprise($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminSetSelfHostedRunnersInGroupForEnterprise

Replaces the list of self-hosted runners that are part of an enterprise runner group.

You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#set-self-hosted-runners-in-a-group-for-an-enterprise>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseRequest;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseRequest();
    $request->requestBody = new EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseRequestBody();
    $request->requestBody->runners = [
        372679,
        24527,
    ];
    $request->enterprise = 'voluptatum';
    $request->runnerGroupId = 558065;

    $response = $sdk->enterpriseAdmin->enterpriseAdminSetSelfHostedRunnersInGroupForEnterprise($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminSetSettings

Applies settings on your instance. For a list of the available settings, see the [Get settings endpoint](https://docs.github.com/enterprise-server@3.5/rest/reference/enterprise-admin#get-settings).

**Notes:**

- The request body for this operation must be submitted as `application/x-www-form-urlencoded` data. You can submit a parameter value as a string, or you can use a tool such as `curl` to submit a parameter value as the contents of a text file. For more information, see the [`curl` documentation](https://curl.se/docs/manpage.html#--data-urlencode).
- You cannot set the management console password with the Enterprise administration API. Use the `ghe-set-password` utility to change the management console password. For more information, see "[Command-line utilities](https://docs.github.com/enterprise-server@3.5/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-set-password)."

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/enterprise-admin#set-settings>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminSetSettingsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminSetSettingsRequestBody();
    $request->settings = 'repudiandae';

    $response = $sdk->enterpriseAdmin->enterpriseAdminSetSettings($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminStartConfigurationProcess

This endpoint allows you to start a configuration process at any time for your updated settings to take effect:

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/enterprise-admin#start-a-configuration-process>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->enterpriseAdmin->enterpriseAdminStartConfigurationProcess();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminStartPreReceiveEnvironmentDownload

Triggers a new download of the environment tarball from the environment's `image_url`. When the download is finished, the newly downloaded tarball will overwrite the existing environment.

If a download cannot be triggered, you will receive a `422 Unprocessable Entity` response.

The possible error messages are:

* _Cannot modify or delete the default environment_
* _Can not start a new download when a download is in progress_

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/enterprise-admin#start-a-pre-receive-environment-download>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminStartPreReceiveEnvironmentDownloadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminStartPreReceiveEnvironmentDownloadRequest();
    $request->preReceiveEnvironmentId = 361151;

    $response = $sdk->enterpriseAdmin->enterpriseAdminStartPreReceiveEnvironmentDownload($request);

    if ($response->preReceiveEnvironmentDownloadStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminSuspendUser

If your GitHub instance uses [LDAP Sync with Active Directory LDAP servers](https://docs.github.com/enterprise-server@3.5/admin/identity-and-access-management/using-ldap-for-enterprise-iam/using-ldap), Active Directory LDAP-authenticated users cannot be suspended through this API. If you attempt to suspend an Active Directory LDAP-authenticated user through this API, it will return a `403` response.

You can suspend any user account except your own.

Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@3.5/rest/overview/resources-in-the-rest-api#http-verbs)."

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/enterprise-admin#suspend-a-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminSuspendUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminSuspendUserRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminSuspendUserRequest();
    $request->requestBody = new EnterpriseAdminSuspendUserRequestBody();
    $request->requestBody->reason = 'et';
    $request->username = 'Jo2';

    $response = $sdk->enterpriseAdmin->enterpriseAdminSuspendUser($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminSyncLdapMappingForTeam

Note that this API call does not automatically initiate an LDAP sync. Rather, if a `201` is returned, the sync job is queued successfully, and is performed when the instance is ready.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/enterprise-admin#sync-ldap-mapping-for-a-team>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminSyncLdapMappingForTeamRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminSyncLdapMappingForTeamRequest();
    $request->teamId = 425508;

    $response = $sdk->enterpriseAdmin->enterpriseAdminSyncLdapMappingForTeam($request);

    if ($response->enterpriseAdminSyncLdapMappingForTeam201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminSyncLdapMappingForUser

Note that this API call does not automatically initiate an LDAP sync. Rather, if a `201` is returned, the sync job is queued successfully, and is performed when the instance is ready.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/enterprise-admin#sync-ldap-mapping-for-a-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminSyncLdapMappingForUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminSyncLdapMappingForUserRequest();
    $request->username = 'Eveline.Ullrich';

    $response = $sdk->enterpriseAdmin->enterpriseAdminSyncLdapMappingForUser($request);

    if ($response->enterpriseAdminSyncLdapMappingForUser201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminUnsuspendUser

If your GitHub instance uses [LDAP Sync with Active Directory LDAP servers](https://docs.github.com/enterprise-server@3.5/admin/identity-and-access-management/using-ldap-for-enterprise-iam/using-ldap), this API is disabled and will return a `403` response. Active Directory LDAP-authenticated users cannot be unsuspended using the API.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/enterprise-admin#unsuspend-a-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminUnsuspendUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminUnsuspendUserRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminUnsuspendUserRequest();
    $request->requestBody = new EnterpriseAdminUnsuspendUserRequestBody();
    $request->requestBody->reason = 'incidunt';
    $request->username = 'Vivienne.Ebert9';

    $response = $sdk->enterpriseAdmin->enterpriseAdminUnsuspendUser($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminUpdateGlobalWebhook

Parameters that are not provided will be overwritten with the default value or removed if no default exists.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/enterprise-admin#update-a-global-webhook>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminUpdateGlobalWebhookRequest;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminUpdateGlobalWebhookRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminUpdateGlobalWebhookRequestBodyConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminUpdateGlobalWebhookRequest();
    $request->requestBody = new EnterpriseAdminUpdateGlobalWebhookRequestBody();
    $request->requestBody->active = false;
    $request->requestBody->config = new EnterpriseAdminUpdateGlobalWebhookRequestBodyConfig();
    $request->requestBody->config->contentType = 'occaecati';
    $request->requestBody->config->insecureSsl = 'labore';
    $request->requestBody->config->secret = 'quidem';
    $request->requestBody->config->url = 'atque';
    $request->requestBody->events = [
        'nam',
        'tenetur',
        'laboriosam',
    ];
    $request->hookId = 2703;

    $response = $sdk->enterpriseAdmin->enterpriseAdminUpdateGlobalWebhook($request);

    if ($response->globalHook2 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminUpdateLdapMappingForTeam

Updates the [distinguished name](https://www.ldap.com/ldap-dns-and-rdns) (DN) of the LDAP entry to map to a team. [LDAP synchronization](https://docs.github.com/enterprise-server@3.5/admin/identity-and-access-management/using-ldap-for-enterprise-iam/using-ldap#enabling-ldap-sync) must be enabled to map LDAP entries to a team. Use the [Create a team](https://docs.github.com/enterprise-server@3.5/rest/reference/teams/#create-a-team) endpoint to create a team with LDAP mapping.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/enterprise-admin#update-ldap-mapping-for-a-team>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminUpdateLdapMappingForTeamRequest;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminUpdateLdapMappingForTeamRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminUpdateLdapMappingForTeamRequest();
    $request->requestBody = new EnterpriseAdminUpdateLdapMappingForTeamRequestBody();
    $request->requestBody->ldapDn = 'amet';
    $request->teamId = 647197;

    $response = $sdk->enterpriseAdmin->enterpriseAdminUpdateLdapMappingForTeam($request);

    if ($response->ldapMappingTeam !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminUpdateLdapMappingForUser

Update LDAP mapping for a user

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/enterprise-admin#update-ldap-mapping-for-a-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminUpdateLdapMappingForUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminUpdateLdapMappingForUserRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminUpdateLdapMappingForUserRequest();
    $request->requestBody = new EnterpriseAdminUpdateLdapMappingForUserRequestBody();
    $request->requestBody->ldapDn = 'voluptate';
    $request->username = 'Layne_Witting';

    $response = $sdk->enterpriseAdmin->enterpriseAdminUpdateLdapMappingForUser($request);

    if ($response->ldapMappingUser !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminUpdateOrgName

Update an organization name

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/enterprise-admin#update-an-organization-name>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminUpdateOrgNameRequest;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminUpdateOrgNameRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminUpdateOrgNameRequest();
    $request->requestBody = new EnterpriseAdminUpdateOrgNameRequestBody();
    $request->requestBody->login = 'delectus';
    $request->org = 'voluptates';

    $response = $sdk->enterpriseAdmin->enterpriseAdminUpdateOrgName($request);

    if ($response->enterpriseAdminUpdateOrgName202ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminUpdatePreReceiveEnvironment

You cannot modify the default environment. If you attempt to modify the default environment, you will receive a `422 Unprocessable Entity` response.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/enterprise-admin#update-a-pre-receive-environment>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminUpdatePreReceiveEnvironmentRequest;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminUpdatePreReceiveEnvironmentRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminUpdatePreReceiveEnvironmentRequest();
    $request->requestBody = new EnterpriseAdminUpdatePreReceiveEnvironmentRequestBody();
    $request->requestBody->imageUrl = 'perferendis';
    $request->requestBody->name = 'Rickey Kiehn';
    $request->preReceiveEnvironmentId = 509807;

    $response = $sdk->enterpriseAdmin->enterpriseAdminUpdatePreReceiveEnvironment($request);

    if ($response->preReceiveEnvironment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminUpdatePreReceiveHook

Update a pre-receive hook

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/enterprise-admin#update-a-pre-receive-hook>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminUpdatePreReceiveHookRequest;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminUpdatePreReceiveHookRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminUpdatePreReceiveHookRequest();
    $request->requestBody = new EnterpriseAdminUpdatePreReceiveHookRequestBody();
    $request->requestBody->allowDownstreamConfiguration = false;
    $request->requestBody->enforcement = 'mollitia';
    $request->requestBody->environment = [
        'voluptatem' => 'quisquam',
        'repudiandae' => 'quasi',
    ];
    $request->requestBody->name = 'Mitchell Zboncak';
    $request->requestBody->script = 'quidem';
    $request->requestBody->scriptRepository = [
        'et' => 'esse',
        'amet' => 'assumenda',
        'ea' => 'atque',
        'error' => 'officiis',
    ];
    $request->preReceiveHookId = 886961;

    $response = $sdk->enterpriseAdmin->enterpriseAdminUpdatePreReceiveHook($request);

    if ($response->preReceiveHook !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminUpdatePreReceiveHookEnforcementForOrg

For pre-receive hooks which are allowed to be configured at the org level, you can set `enforcement` and `allow_downstream_configuration`

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/enterprise-admin#update-pre-receive-hook-enforcement-for-an-organization>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgRequest;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgRequest();
    $request->requestBody = new EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgRequestBody();
    $request->requestBody->allowDownstreamConfiguration = false;
    $request->requestBody->enforcement = 'accusamus';
    $request->org = 'natus';
    $request->preReceiveHookId = 328303;

    $response = $sdk->enterpriseAdmin->enterpriseAdminUpdatePreReceiveHookEnforcementForOrg($request);

    if ($response->orgPreReceiveHook !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminUpdatePreReceiveHookEnforcementForRepo

For pre-receive hooks which are allowed to be configured at the repo level, you can set `enforcement`

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/enterprise-admin#update-pre-receive-hook-enforcement-for-a-repository>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoRequest;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoRequestBodyEnforcementEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoRequest();
    $request->requestBody = new EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoRequestBody();
    $request->requestBody->enforcement = EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoRequestBodyEnforcementEnum::ENABLED;
    $request->owner = 'ex';
    $request->preReceiveHookId = 980581;
    $request->repo = 'corrupti';

    $response = $sdk->enterpriseAdmin->enterpriseAdminUpdatePreReceiveHookEnforcementForRepo($request);

    if ($response->repositoryPreReceiveHook !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminUpdateSelfHostedRunnerGroupForEnterprise

Updates the `name` and `visibility` of a self-hosted runner group in an enterprise.

You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#update-a-self-hosted-runner-group-for-an-enterprise>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseRequest;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseRequestBodyVisibilityEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseRequest();
    $request->requestBody = new EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseRequestBody();
    $request->requestBody->allowsPublicRepositories = false;
    $request->requestBody->name = 'Jeremiah Kuvalis';
    $request->requestBody->restrictedToWorkflows = false;
    $request->requestBody->selectedWorkflows = [
        'octo-org/octo-repo/.github/workflows/deploy.yaml@main',
        'octo-org/octo-repo/.github/workflows/deploy.yaml@main',
        'octo-org/octo-repo/.github/workflows/deploy.yaml@main',
    ];
    $request->requestBody->visibility = EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseRequestBodyVisibilityEnum::ALL;
    $request->enterprise = 'sunt';
    $request->runnerGroupId = 923306;

    $response = $sdk->enterpriseAdmin->enterpriseAdminUpdateSelfHostedRunnerGroupForEnterprise($request);

    if ($response->runnerGroupsEnterprise !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminUpdateUsernameForUser

Update the username for a user

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/enterprise-admin#update-the-username-for-a-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminUpdateUsernameForUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminUpdateUsernameForUserRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminUpdateUsernameForUserRequest();
    $request->requestBody = new EnterpriseAdminUpdateUsernameForUserRequestBody();
    $request->requestBody->login = 'dolorum';
    $request->username = 'Richie.Grant91';

    $response = $sdk->enterpriseAdmin->enterpriseAdminUpdateUsernameForUser($request);

    if ($response->enterpriseAdminUpdateUsernameForUser202ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enterpriseAdminUpgradeLicense

This API upgrades your license and also triggers the configuration process.

**Note:** The request body for this operation must be submitted as `multipart/form-data` data. You can can reference the license file by prefixing the filename with the `@` symbol using `curl`. For more information, see the [`curl` documentation](https://curl.se/docs/manpage.html#-F).

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/enterprise-admin#upgrade-a-license>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminUpgradeLicenseRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnterpriseAdminUpgradeLicenseRequestBody();
    $request->license = 'dicta';

    $response = $sdk->enterpriseAdmin->enterpriseAdminUpgradeLicense($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
