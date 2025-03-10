# EnterpriseAdmin

## Overview

Enterprise Administration

### Available Operations

* [EnterpriseAdminAddAuthorizedSSHKey](#enterpriseadminaddauthorizedsshkey) - Add an authorized SSH key
* [EnterpriseAdminAddCustomLabelsToSelfHostedRunnerForEnterprise](#enterpriseadminaddcustomlabelstoselfhostedrunnerforenterprise) - Add custom labels to a self-hosted runner for an enterprise
* [EnterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterprise](#enterpriseadminaddorgaccesstoselfhostedrunnergroupinenterprise) - Add organization access to a self-hosted runner group in an enterprise
* [EnterpriseAdminAddSelfHostedRunnerToGroupForEnterprise](#enterpriseadminaddselfhostedrunnertogroupforenterprise) - Add a self-hosted runner to a group for an enterprise
* [EnterpriseAdminCreateEnterpriseServerLicense](#enterpriseadmincreateenterpriseserverlicense) - Create a GitHub license
* [EnterpriseAdminCreateGlobalWebhook](#enterpriseadmincreateglobalwebhook) - Create a global webhook
* [EnterpriseAdminCreateImpersonationOAuthToken](#enterpriseadmincreateimpersonationoauthtoken) - Create an impersonation OAuth token
* [EnterpriseAdminCreateOrg](#enterpriseadmincreateorg) - Create an organization
* [EnterpriseAdminCreatePreReceiveEnvironment](#enterpriseadmincreateprereceiveenvironment) - Create a pre-receive environment
* [EnterpriseAdminCreatePreReceiveHook](#enterpriseadmincreateprereceivehook) - Create a pre-receive hook
* [EnterpriseAdminCreateRegistrationTokenForEnterprise](#enterpriseadmincreateregistrationtokenforenterprise) - Create a registration token for an enterprise
* [EnterpriseAdminCreateRemoveTokenForEnterprise](#enterpriseadmincreateremovetokenforenterprise) - Create a remove token for an enterprise
* [EnterpriseAdminCreateSelfHostedRunnerGroupForEnterprise](#enterpriseadmincreateselfhostedrunnergroupforenterprise) - Create a self-hosted runner group for an enterprise
* [EnterpriseAdminCreateUser](#enterpriseadmincreateuser) - Create a user
* [EnterpriseAdminDeleteGlobalWebhook](#enterpriseadmindeleteglobalwebhook) - Delete a global webhook
* [EnterpriseAdminDeleteImpersonationOAuthToken](#enterpriseadmindeleteimpersonationoauthtoken) - Delete an impersonation OAuth token
* [EnterpriseAdminDeletePersonalAccessToken](#enterpriseadmindeletepersonalaccesstoken) - Delete a personal access token
* [EnterpriseAdminDeletePreReceiveEnvironment](#enterpriseadmindeleteprereceiveenvironment) - Delete a pre-receive environment
* [EnterpriseAdminDeletePreReceiveHook](#enterpriseadmindeleteprereceivehook) - Delete a pre-receive hook
* [EnterpriseAdminDeletePublicKey](#enterpriseadmindeletepublickey) - Delete a public key
* [EnterpriseAdminDeleteScimGroupFromEnterprise](#enterpriseadmindeletescimgroupfromenterprise) - Delete a SCIM group from an enterprise
* [EnterpriseAdminDeleteSelfHostedRunnerFromEnterprise](#enterpriseadmindeleteselfhostedrunnerfromenterprise) - Delete a self-hosted runner from an enterprise
* [EnterpriseAdminDeleteSelfHostedRunnerGroupFromEnterprise](#enterpriseadmindeleteselfhostedrunnergroupfromenterprise) - Delete a self-hosted runner group from an enterprise
* [EnterpriseAdminDeleteUser](#enterpriseadmindeleteuser) - Delete a user
* [EnterpriseAdminDeleteUserFromEnterprise](#enterpriseadmindeleteuserfromenterprise) - Delete a SCIM user from an enterprise
* [EnterpriseAdminDemoteSiteAdministrator](#enterpriseadmindemotesiteadministrator) - Demote a site administrator
* [EnterpriseAdminDisableSelectedOrganizationGithubActionsEnterprise](#enterpriseadmindisableselectedorganizationgithubactionsenterprise) - Disable a selected organization for GitHub Actions in an enterprise
* [EnterpriseAdminEnableOrDisableMaintenanceMode](#enterpriseadminenableordisablemaintenancemode) - Enable or disable maintenance mode
* [EnterpriseAdminEnableSelectedOrganizationGithubActionsEnterprise](#enterpriseadminenableselectedorganizationgithubactionsenterprise) - Enable a selected organization for GitHub Actions in an enterprise
* [EnterpriseAdminGetAllAuthorizedSSHKeys](#enterpriseadmingetallauthorizedsshkeys) - Get all authorized SSH keys
* [EnterpriseAdminGetAllStats](#enterpriseadmingetallstats) - Get all statistics
* [EnterpriseAdminGetAllowedActionsEnterprise](#enterpriseadmingetallowedactionsenterprise) - Get allowed actions for an enterprise
* [EnterpriseAdminGetAnnouncement](#enterpriseadmingetannouncement) - Get the global announcement banner
* [EnterpriseAdminGetAuditLog](#enterpriseadmingetauditlog) - Get the audit log for an enterprise
* [EnterpriseAdminGetCommentStats](#enterpriseadmingetcommentstats) - Get comment statistics
* [EnterpriseAdminGetConfigurationStatus](#enterpriseadmingetconfigurationstatus) - Get the configuration status
* [EnterpriseAdminGetDownloadStatusForPreReceiveEnvironment](#enterpriseadmingetdownloadstatusforprereceiveenvironment) - Get the download status for a pre-receive environment
* [EnterpriseAdminGetGistStats](#enterpriseadmingetgiststats) - Get gist statistics
* [EnterpriseAdminGetGithubActionsPermissionsEnterprise](#enterpriseadmingetgithubactionspermissionsenterprise) - Get GitHub Actions permissions for an enterprise
* [EnterpriseAdminGetGlobalWebhook](#enterpriseadmingetglobalwebhook) - Get a global webhook
* [EnterpriseAdminGetHooksStats](#enterpriseadmingethooksstats) - Get hooks statistics
* [EnterpriseAdminGetIssueStats](#enterpriseadmingetissuestats) - Get issue statistics
* [EnterpriseAdminGetLicenseInformation](#enterpriseadmingetlicenseinformation) - Get license information
* [EnterpriseAdminGetMaintenanceStatus](#enterpriseadmingetmaintenancestatus) - Get the maintenance status
* [EnterpriseAdminGetMilestoneStats](#enterpriseadmingetmilestonestats) - Get milestone statistics
* [EnterpriseAdminGetOrgStats](#enterpriseadmingetorgstats) - Get organization statistics
* [EnterpriseAdminGetPagesStats](#enterpriseadmingetpagesstats) - Get pages statistics
* [EnterpriseAdminGetPreReceiveEnvironment](#enterpriseadmingetprereceiveenvironment) - Get a pre-receive environment
* [EnterpriseAdminGetPreReceiveHook](#enterpriseadmingetprereceivehook) - Get a pre-receive hook
* [EnterpriseAdminGetPreReceiveHookForOrg](#enterpriseadmingetprereceivehookfororg) - Get a pre-receive hook for an organization
* [EnterpriseAdminGetPreReceiveHookForRepo](#enterpriseadmingetprereceivehookforrepo) - Get a pre-receive hook for a repository
* [EnterpriseAdminGetProvisioningInformationForEnterpriseGroup](#enterpriseadmingetprovisioninginformationforenterprisegroup) - Get SCIM provisioning information for an enterprise group
* [EnterpriseAdminGetProvisioningInformationForEnterpriseUser](#enterpriseadmingetprovisioninginformationforenterpriseuser) - Get SCIM provisioning information for an enterprise user
* [EnterpriseAdminGetPullRequestStats](#enterpriseadmingetpullrequeststats) - Get pull request statistics
* [EnterpriseAdminGetRepoStats](#enterpriseadmingetrepostats) - Get repository statistics
* [EnterpriseAdminGetSelfHostedRunnerForEnterprise](#enterpriseadmingetselfhostedrunnerforenterprise) - Get a self-hosted runner for an enterprise
* [EnterpriseAdminGetSelfHostedRunnerGroupForEnterprise](#enterpriseadmingetselfhostedrunnergroupforenterprise) - Get a self-hosted runner group for an enterprise
* [EnterpriseAdminGetSettings](#enterpriseadmingetsettings) - Get settings
* [EnterpriseAdminGetUserStats](#enterpriseadmingetuserstats) - Get users statistics
* [EnterpriseAdminListGlobalWebhooks](#enterpriseadminlistglobalwebhooks) - List global webhooks
* [EnterpriseAdminListLabelsForSelfHostedRunnerForEnterprise](#enterpriseadminlistlabelsforselfhostedrunnerforenterprise) - List labels for a self-hosted runner for an enterprise
* [EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprise](#enterpriseadminlistorgaccesstoselfhostedrunnergroupinenterprise) - List organization access to a self-hosted runner group in an enterprise
* [EnterpriseAdminListPersonalAccessTokens](#enterpriseadminlistpersonalaccesstokens) - List personal access tokens
* [EnterpriseAdminListPreReceiveEnvironments](#enterpriseadminlistprereceiveenvironments) - List pre-receive environments
* [EnterpriseAdminListPreReceiveHooks](#enterpriseadminlistprereceivehooks) - List pre-receive hooks
* [EnterpriseAdminListPreReceiveHooksForOrg](#enterpriseadminlistprereceivehooksfororg) - List pre-receive hooks for an organization
* [EnterpriseAdminListPreReceiveHooksForRepo](#enterpriseadminlistprereceivehooksforrepo) - List pre-receive hooks for a repository
* [EnterpriseAdminListProvisionedGroupsEnterprise](#enterpriseadminlistprovisionedgroupsenterprise) - List provisioned SCIM groups for an enterprise
* [EnterpriseAdminListProvisionedIdentitiesEnterprise](#enterpriseadminlistprovisionedidentitiesenterprise) - List SCIM provisioned identities for an enterprise
* [EnterpriseAdminListPublicKeys](#enterpriseadminlistpublickeys) - List public keys
* [EnterpriseAdminListRunnerApplicationsForEnterprise](#enterpriseadminlistrunnerapplicationsforenterprise) - List runner applications for an enterprise
* [EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprise](#enterpriseadminlistselectedorganizationsenabledgithubactionsenterprise) - List selected organizations enabled for GitHub Actions in an enterprise
* [EnterpriseAdminListSelfHostedRunnerGroupsForEnterprise](#enterpriseadminlistselfhostedrunnergroupsforenterprise) - List self-hosted runner groups for an enterprise
* [EnterpriseAdminListSelfHostedRunnersForEnterprise](#enterpriseadminlistselfhostedrunnersforenterprise) - List self-hosted runners for an enterprise
* [EnterpriseAdminListSelfHostedRunnersInGroupForEnterprise](#enterpriseadminlistselfhostedrunnersingroupforenterprise) - List self-hosted runners in a group for an enterprise
* [EnterpriseAdminPingGlobalWebhook](#enterpriseadminpingglobalwebhook) - Ping a global webhook
* [EnterpriseAdminPromoteUserToBeSiteAdministrator](#enterpriseadminpromoteusertobesiteadministrator) - Promote a user to be a site administrator
* [EnterpriseAdminProvisionEnterpriseGroup](#enterpriseadminprovisionenterprisegroup) - Provision a SCIM enterprise group
* [EnterpriseAdminProvisionEnterpriseUser](#enterpriseadminprovisionenterpriseuser) - Provision a SCIM enterprise user
* [EnterpriseAdminRemoveAllCustomLabelsFromSelfHostedRunnerForEnterprise](#enterpriseadminremoveallcustomlabelsfromselfhostedrunnerforenterprise) - Remove all custom labels from a self-hosted runner for an enterprise
* [EnterpriseAdminRemoveAnnouncement](#enterpriseadminremoveannouncement) - Remove the global announcement banner
* [EnterpriseAdminRemoveAuthorizedSSHKey](#enterpriseadminremoveauthorizedsshkey) - Remove an authorized SSH key
* [EnterpriseAdminRemoveCustomLabelFromSelfHostedRunnerForEnterprise](#enterpriseadminremovecustomlabelfromselfhostedrunnerforenterprise) - Remove a custom label from a self-hosted runner for an enterprise
* [EnterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterprise](#enterpriseadminremoveorgaccesstoselfhostedrunnergroupinenterprise) - Remove organization access to a self-hosted runner group in an enterprise
* [EnterpriseAdminRemovePreReceiveHookEnforcementForOrg](#enterpriseadminremoveprereceivehookenforcementfororg) - Remove pre-receive hook enforcement for an organization
* [EnterpriseAdminRemovePreReceiveHookEnforcementForRepo](#enterpriseadminremoveprereceivehookenforcementforrepo) - Remove pre-receive hook enforcement for a repository
* [EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterprise](#enterpriseadminremoveselfhostedrunnerfromgroupforenterprise) - Remove a self-hosted runner from a group for an enterprise
* [EnterpriseAdminSetAllowedActionsEnterprise](#enterpriseadminsetallowedactionsenterprise) - Set allowed actions for an enterprise
* [EnterpriseAdminSetAnnouncement](#enterpriseadminsetannouncement) - Set the global announcement banner
* [EnterpriseAdminSetCustomLabelsForSelfHostedRunnerForEnterprise](#enterpriseadminsetcustomlabelsforselfhostedrunnerforenterprise) - Set custom labels for a self-hosted runner for an enterprise
* [EnterpriseAdminSetGithubActionsPermissionsEnterprise](#enterpriseadminsetgithubactionspermissionsenterprise) - Set GitHub Actions permissions for an enterprise
* [EnterpriseAdminSetInformationForProvisionedEnterpriseGroup](#enterpriseadminsetinformationforprovisionedenterprisegroup) - Set SCIM information for a provisioned enterprise group
* [EnterpriseAdminSetInformationForProvisionedEnterpriseUser](#enterpriseadminsetinformationforprovisionedenterpriseuser) - Set SCIM information for a provisioned enterprise user
* [EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterprise](#enterpriseadminsetorgaccesstoselfhostedrunnergroupinenterprise) - Set organization access for a self-hosted runner group in an enterprise
* [EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterprise](#enterpriseadminsetselectedorganizationsenabledgithubactionsenterprise) - Set selected organizations enabled for GitHub Actions in an enterprise
* [EnterpriseAdminSetSelfHostedRunnersInGroupForEnterprise](#enterpriseadminsetselfhostedrunnersingroupforenterprise) - Set self-hosted runners in a group for an enterprise
* [EnterpriseAdminSetSettings](#enterpriseadminsetsettings) - Set settings
* [EnterpriseAdminStartConfigurationProcess](#enterpriseadminstartconfigurationprocess) - Start a configuration process
* [EnterpriseAdminStartPreReceiveEnvironmentDownload](#enterpriseadminstartprereceiveenvironmentdownload) - Start a pre-receive environment download
* [EnterpriseAdminSuspendUser](#enterpriseadminsuspenduser) - Suspend a user
* [EnterpriseAdminSyncLdapMappingForTeam](#enterpriseadminsyncldapmappingforteam) - Sync LDAP mapping for a team
* [EnterpriseAdminSyncLdapMappingForUser](#enterpriseadminsyncldapmappingforuser) - Sync LDAP mapping for a user
* [EnterpriseAdminUnsuspendUser](#enterpriseadminunsuspenduser) - Unsuspend a user
* [EnterpriseAdminUpdateAttributeForEnterpriseGroup](#enterpriseadminupdateattributeforenterprisegroup) - Update an attribute for a SCIM enterprise group
* [EnterpriseAdminUpdateAttributeForEnterpriseUser](#enterpriseadminupdateattributeforenterpriseuser) - Update an attribute for a SCIM enterprise user
* [EnterpriseAdminUpdateGlobalWebhook](#enterpriseadminupdateglobalwebhook) - Update a global webhook
* [EnterpriseAdminUpdateLdapMappingForTeam](#enterpriseadminupdateldapmappingforteam) - Update LDAP mapping for a team
* [EnterpriseAdminUpdateLdapMappingForUser](#enterpriseadminupdateldapmappingforuser) - Update LDAP mapping for a user
* [EnterpriseAdminUpdateOrgName](#enterpriseadminupdateorgname) - Update an organization name
* [EnterpriseAdminUpdatePreReceiveEnvironment](#enterpriseadminupdateprereceiveenvironment) - Update a pre-receive environment
* [EnterpriseAdminUpdatePreReceiveHook](#enterpriseadminupdateprereceivehook) - Update a pre-receive hook
* [EnterpriseAdminUpdatePreReceiveHookEnforcementForOrg](#enterpriseadminupdateprereceivehookenforcementfororg) - Update pre-receive hook enforcement for an organization
* [EnterpriseAdminUpdatePreReceiveHookEnforcementForRepo](#enterpriseadminupdateprereceivehookenforcementforrepo) - Update pre-receive hook enforcement for a repository
* [EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterprise](#enterpriseadminupdateselfhostedrunnergroupforenterprise) - Update a self-hosted runner group for an enterprise
* [EnterpriseAdminUpdateUsernameForUser](#enterpriseadminupdateusernameforuser) - Update the username for a user
* [EnterpriseAdminUpgradeLicense](#enterpriseadminupgradelicense) - Upgrade a license

## EnterpriseAdminAddAuthorizedSSHKey

**Note:** The request body for this operation must be submitted as `application/x-www-form-urlencoded` data. You can submit a parameter value as a string, or you can use a tool such as `curl` to submit a parameter value as the contents of a text file. For more information, see the [`curl` documentation](https://curl.se/docs/manpage.html#--data-urlencode).

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#add-an-authorized-ssh-key>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminAddAuthorizedSSHKey(ctx, operations.EnterpriseAdminAddAuthorizedSSHKeyRequestBody{
        AuthorizedKey: "officiis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SSHKeys != nil {
        // handle response
    }
}
```

## EnterpriseAdminAddCustomLabelsToSelfHostedRunnerForEnterprise

Add custom labels to a self-hosted runner configured in an enterprise.

You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/actions#add-custom-labels-to-a-self-hosted-runner-for-an-enterprise>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminAddCustomLabelsToSelfHostedRunnerForEnterprise(ctx, operations.EnterpriseAdminAddCustomLabelsToSelfHostedRunnerForEnterpriseRequest{
        RequestBody: operations.EnterpriseAdminAddCustomLabelsToSelfHostedRunnerForEnterpriseRequestBody{
            Labels: []string{
                "facilis",
                "quaerat",
                "incidunt",
            },
        },
        Enterprise: "ipsam",
        RunnerID: 894864,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EnterpriseAdminAddCustomLabelsToSelfHostedRunnerForEnterprise200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## EnterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterprise

Adds an organization to the list of selected organizations that can access a self-hosted runner group. The runner group must have `visibility` set to `selected`. For more information, see "[Create a self-hosted runner group for an enterprise](#create-a-self-hosted-runner-group-for-an-enterprise)."

You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/actions#add-organization-access-to-a-self-hosted-runner-group-in-an-enterprise>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterprise(ctx, operations.EnterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest{
        Enterprise: "rem",
        OrgID: 26522,
        RunnerGroupID: 750595,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## EnterpriseAdminAddSelfHostedRunnerToGroupForEnterprise

Adds a self-hosted runner to a runner group configured in an enterprise.

You must authenticate using an access token with the `manage_runners:enterprise`
scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/actions#add-a-self-hosted-runner-to-a-group-for-an-enterprise>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminAddSelfHostedRunnerToGroupForEnterprise(ctx, operations.EnterpriseAdminAddSelfHostedRunnerToGroupForEnterpriseRequest{
        Enterprise: "error",
        RunnerGroupID: 333507,
        RunnerID: 329543,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## EnterpriseAdminCreateEnterpriseServerLicense

When you boot a GitHub instance for the first time, you can use the following endpoint to upload a license.

Note that you need to `POST` to [`/setup/api/configure`](https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#start-a-configuration-process) to start the actual configuration process.

When using this endpoint, your GitHub instance must have a password set. This can be accomplished two ways:

1.  If you're working directly with the API before accessing the web interface, you must pass in the password parameter to set your password.
2.  If you set up your instance via the web interface before accessing the API, your calls to this endpoint do not need the password parameter.

**Note:** The request body for this operation must be submitted as `multipart/form-data` data. You can can reference the license file by prefixing the filename with the `@` symbol using `curl`. For more information, see the [`curl` documentation](https://curl.se/docs/manpage.html#-F).

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#create-a-github-enterprise-server-license>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminCreateEnterpriseServerLicense(ctx, operations.EnterpriseAdminCreateEnterpriseServerLicenseRequestBody{
        License: "recusandae",
        Password: sdk.String("reiciendis"),
        Settings: sdk.String("nulla"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## EnterpriseAdminCreateGlobalWebhook

Create a global webhook

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#create-a-global-webhook>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminCreateGlobalWebhook(ctx, operations.EnterpriseAdminCreateGlobalWebhookRequestBody{
        Active: sdk.Bool(false),
        Config: operations.EnterpriseAdminCreateGlobalWebhookRequestBodyConfig{
            ContentType: sdk.String("magni"),
            InsecureSsl: sdk.String("aperiam"),
            Secret: sdk.String("saepe"),
            URL: "numquam",
        },
        Events: []string{
            "in",
            "officiis",
        },
        Name: "Marsha Heidenreich",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GlobalHook != nil {
        // handle response
    }
}
```

## EnterpriseAdminCreateImpersonationOAuthToken

Create an impersonation OAuth token

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#create-an-impersonation-oauth-token>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminCreateImpersonationOAuthToken(ctx, operations.EnterpriseAdminCreateImpersonationOAuthTokenRequest{
        RequestBody: operations.EnterpriseAdminCreateImpersonationOAuthTokenRequestBody{
            Scopes: []string{
                "dolorum",
                "voluptatum",
            },
        },
        Username: "Lilyan_Welch20",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Authorization != nil {
        // handle response
    }
}
```

## EnterpriseAdminCreateOrg

Create an organization

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#create-an-organization>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminCreateOrg(ctx, operations.EnterpriseAdminCreateOrgRequestBody{
        Admin: "dolorum",
        Login: "nostrum",
        ProfileName: sdk.String("officia"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrganizationSimple != nil {
        // handle response
    }
}
```

## EnterpriseAdminCreatePreReceiveEnvironment

Create a pre-receive environment

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#create-a-pre-receive-environment>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminCreatePreReceiveEnvironment(ctx, operations.EnterpriseAdminCreatePreReceiveEnvironmentRequestBody{
        ImageURL: "dolorum",
        Name: "Caleb Goldner",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreReceiveEnvironment != nil {
        // handle response
    }
}
```

## EnterpriseAdminCreatePreReceiveHook

Create a pre-receive hook

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#create-a-pre-receive-hook>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminCreatePreReceiveHook(ctx, operations.EnterpriseAdminCreatePreReceiveHookRequestBody{
        AllowDownstreamConfiguration: sdk.Bool(false),
        Enforcement: sdk.String("ut"),
        Environment: map[string]interface{}{
            "voluptatem": "culpa",
            "expedita": "magnam",
            "consequatur": "esse",
            "ipsam": "sit",
        },
        Name: "Willard Walker IV",
        Script: "ex",
        ScriptRepository: map[string]interface{}{
            "sit": "vel",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreReceiveHook != nil {
        // handle response
    }
}
```

## EnterpriseAdminCreateRegistrationTokenForEnterprise

Returns a token that you can pass to the `config` script. The token expires after one hour.

You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.

#### Example using registration token

Configure your self-hosted runner, replacing `TOKEN` with the registration token provided by this endpoint.

```
./config.sh --url https://github.com/enterprises/octo-enterprise --token TOKEN
```

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/actions#create-a-registration-token-for-an-enterprise>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminCreateRegistrationTokenForEnterprise(ctx, operations.EnterpriseAdminCreateRegistrationTokenForEnterpriseRequest{
        Enterprise: "nostrum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AuthenticationToken != nil {
        // handle response
    }
}
```

## EnterpriseAdminCreateRemoveTokenForEnterprise

Returns a token that you can pass to the `config` script to remove a self-hosted runner from an enterprise. The token expires after one hour.

You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.

#### Example using remove token

To remove your self-hosted runner from an enterprise, replace `TOKEN` with the remove token provided by this
endpoint.

```
./config.sh remove --token TOKEN
```

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/actions#create-a-remove-token-for-an-enterprise>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminCreateRemoveTokenForEnterprise(ctx, operations.EnterpriseAdminCreateRemoveTokenForEnterpriseRequest{
        Enterprise: "saepe",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AuthenticationToken != nil {
        // handle response
    }
}
```

## EnterpriseAdminCreateSelfHostedRunnerGroupForEnterprise

Creates a new self-hosted runner group for an enterprise.

You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/actions#create-self-hosted-runner-group-for-an-enterprise>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminCreateSelfHostedRunnerGroupForEnterprise(ctx, operations.EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequest{
        RequestBody: operations.EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequestBody{
            AllowsPublicRepositories: sdk.Bool(false),
            Name: "William Gottlieb",
            RestrictedToWorkflows: sdk.Bool(false),
            Runners: []int64{
                115703,
                99416,
                577140,
            },
            SelectedOrganizationIds: []int64{
                695270,
                539074,
            },
            SelectedWorkflows: []string{
                "octo-org/octo-repo/.github/workflows/deploy.yaml@main",
                "octo-org/octo-repo/.github/workflows/deploy.yaml@main",
                "octo-org/octo-repo/.github/workflows/deploy.yaml@main",
            },
            Visibility: operations.EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequestBodyVisibilityEnumAll.ToPointer(),
        },
        Enterprise: "tenetur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RunnerGroupsEnterprise != nil {
        // handle response
    }
}
```

## EnterpriseAdminCreateUser

If an external authentication mechanism is used, the login name should match the login name in the external system. If you are using LDAP authentication, you should also [update the LDAP mapping](https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#update-ldap-mapping-for-a-user) for the user.

The login name will be normalized to only contain alphanumeric characters or single hyphens. For example, if you send `"octo_cat"` as the login, a user named `"octo-cat"` will be created.

If the login name or email address is already associated with an account, the server will return a `422` response.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#create-a-user>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminCreateUser(ctx, operations.EnterpriseAdminCreateUserRequestBody{
        Email: sdk.String("Abdul.Farrell@yahoo.com"),
        Login: "unde",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SimpleUser != nil {
        // handle response
    }
}
```

## EnterpriseAdminDeleteGlobalWebhook

Delete a global webhook

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#delete-a-global-webhook>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminDeleteGlobalWebhook(ctx, operations.EnterpriseAdminDeleteGlobalWebhookRequest{
        HookID: 972083,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## EnterpriseAdminDeleteImpersonationOAuthToken

Delete an impersonation OAuth token

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#delete-an-impersonation-oauth-token>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminDeleteImpersonationOAuthToken(ctx, operations.EnterpriseAdminDeleteImpersonationOAuthTokenRequest{
        Username: "Laila_Skiles1",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## EnterpriseAdminDeletePersonalAccessToken

Deletes a personal access token. Returns a `403 - Forbidden` status when a personal access token is in use. For example, if you access this endpoint with the same personal access token that you are trying to delete, you will receive this error.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#delete-a-personal-access-token>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminDeletePersonalAccessToken(ctx, operations.EnterpriseAdminDeletePersonalAccessTokenRequest{
        TokenID: 667285,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## EnterpriseAdminDeletePreReceiveEnvironment

If you attempt to delete an environment that cannot be deleted, you will receive a `422 Unprocessable Entity` response.

The possible error messages are:

*   _Cannot modify or delete the default environment_
*   _Cannot delete environment that has hooks_
*   _Cannot delete environment when download is in progress_

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#delete-a-pre-receive-environment>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminDeletePreReceiveEnvironment(ctx, operations.EnterpriseAdminDeletePreReceiveEnvironmentRequest{
        PreReceiveEnvironmentID: 696483,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## EnterpriseAdminDeletePreReceiveHook

Delete a pre-receive hook

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#delete-a-pre-receive-hook>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminDeletePreReceiveHook(ctx, operations.EnterpriseAdminDeletePreReceiveHookRequest{
        PreReceiveHookID: 440666,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## EnterpriseAdminDeletePublicKey

Delete a public key

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#delete-a-public-key>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminDeletePublicKey(ctx, operations.EnterpriseAdminDeletePublicKeyRequest{
        KeyIds: "facere",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## EnterpriseAdminDeleteScimGroupFromEnterprise

**Note:** The SCIM API endpoints for enterprise accounts are currently in *private* beta and are subject to change.

 Deletes a SCIM group from an enterprise.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#delete-a-scim-group-from-an-enterprise>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminDeleteScimGroupFromEnterprise(ctx, operations.EnterpriseAdminDeleteScimGroupFromEnterpriseRequest{
        ScimGroupID: "7fce0092-d52e-4f76-b727-3955bd72c939",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## EnterpriseAdminDeleteSelfHostedRunnerFromEnterprise

Forces the removal of a self-hosted runner from an enterprise. You can use this endpoint to completely remove the runner when the machine you were using no longer exists.

You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/actions#delete-self-hosted-runner-from-an-enterprise>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminDeleteSelfHostedRunnerFromEnterprise(ctx, operations.EnterpriseAdminDeleteSelfHostedRunnerFromEnterpriseRequest{
        Enterprise: "fuga",
        RunnerID: 509807,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## EnterpriseAdminDeleteSelfHostedRunnerGroupFromEnterprise

Deletes a self-hosted runner group for an enterprise.

You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/actions#delete-a-self-hosted-runner-group-from-an-enterprise>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminDeleteSelfHostedRunnerGroupFromEnterprise(ctx, operations.EnterpriseAdminDeleteSelfHostedRunnerGroupFromEnterpriseRequest{
        Enterprise: "mollitia",
        RunnerGroupID: 333965,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## EnterpriseAdminDeleteUser

Deleting a user will delete all their repositories, gists, applications, and personal settings. [Suspending a user](https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#suspend-a-user) is often a better option.

You can delete any user account except your own.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#delete-a-user>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminDeleteUser(ctx, operations.EnterpriseAdminDeleteUserRequest{
        Username: "Alessia.Schiller54",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## EnterpriseAdminDeleteUserFromEnterprise

**Note:** The SCIM API endpoints for enterprise accounts are currently in *private* beta and are subject to change.

Permanently suspends a SCIM user from an enterprise, removes all data for the user, obfuscates the login, email, and display name of the user, removes all external-identity SCIM attributes, and deletes the emails, avatar, PATs, SSH keys, OAuth authorizations credentials, GPG keys, and SAML mappings for the user. You will not be able to undo this action.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#delete-a-scim-user-from-an-enterprise>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminDeleteUserFromEnterprise(ctx, operations.EnterpriseAdminDeleteUserFromEnterpriseRequest{
        ScimUserID: "reprehenderit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## EnterpriseAdminDemoteSiteAdministrator

You can demote any user account except your own.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#demote-a-site-administrator>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminDemoteSiteAdministrator(ctx, operations.EnterpriseAdminDemoteSiteAdministratorRequest{
        Username: "Yvette_Leannon",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## EnterpriseAdminDisableSelectedOrganizationGithubActionsEnterprise

Removes an organization from the list of selected organizations that are enabled for GitHub Actions in an enterprise. To use this endpoint, the enterprise permission policy for `enabled_organizations` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)."

You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/actions#disable-a-selected-organization-for-github-actions-in-an-enterprise>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminDisableSelectedOrganizationGithubActionsEnterprise(ctx, operations.EnterpriseAdminDisableSelectedOrganizationGithubActionsEnterpriseRequest{
        Enterprise: "maxime",
        OrgID: 90885,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## EnterpriseAdminEnableOrDisableMaintenanceMode

**Note:** The request body for this operation must be submitted as `application/x-www-form-urlencoded` data. You can submit a parameter value as a string, or you can use a tool such as `curl` to submit a parameter value as the contents of a text file. For more information, see the [`curl` documentation](https://curl.se/docs/manpage.html#--data-urlencode).

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#enable-or-disable-maintenance-mode>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminEnableOrDisableMaintenanceMode(ctx, operations.EnterpriseAdminEnableOrDisableMaintenanceModeRequestBody{
        Maintenance: "esse",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MaintenanceStatus != nil {
        // handle response
    }
}
```

## EnterpriseAdminEnableSelectedOrganizationGithubActionsEnterprise

Adds an organization to the list of selected organizations that are enabled for GitHub Actions in an enterprise. To use this endpoint, the enterprise permission policy for `enabled_organizations` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)."

You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/actions#enable-a-selected-organization-for-github-actions-in-an-enterprise>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminEnableSelectedOrganizationGithubActionsEnterprise(ctx, operations.EnterpriseAdminEnableSelectedOrganizationGithubActionsEnterpriseRequest{
        Enterprise: "amet",
        OrgID: 826825,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## EnterpriseAdminGetAllAuthorizedSSHKeys

Get all authorized SSH keys

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#get-all-authorized-ssh-keys>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminGetAllAuthorizedSSHKeys(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.SSHKeys != nil {
        // handle response
    }
}
```

## EnterpriseAdminGetAllStats

Get all statistics

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#get-statistics>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminGetAllStats(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.EnterpriseOverview != nil {
        // handle response
    }
}
```

## EnterpriseAdminGetAllowedActionsEnterprise

Gets the selected actions that are allowed in an enterprise. To use this endpoint, the enterprise permission policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)."

You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/actions#get-allowed-actions-for-an-enterprise>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminGetAllowedActionsEnterprise(ctx, operations.EnterpriseAdminGetAllowedActionsEnterpriseRequest{
        Enterprise: "ea",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SelectedActions != nil {
        // handle response
    }
}
```

## EnterpriseAdminGetAnnouncement

Gets the current message and expiration date of the global announcement banner in your enterprise.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/enterprise-admin/announcement#get-the-global-announcement-banner>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminGetAnnouncement(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Announcement != nil {
        // handle response
    }
}
```

## EnterpriseAdminGetAuditLog

Gets the audit log for an enterprise. To use this endpoint, you must be an enterprise admin, and you must use an access token with the `admin:enterprise` scope.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#get-the-audit-log-for-an-enterprise>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminGetAuditLog(ctx, operations.EnterpriseAdminGetAuditLogRequest{
        After: sdk.String("atque"),
        Before: sdk.String("error"),
        Enterprise: "officiis",
        Include: shared.AuditLogIncludeEnumAll.ToPointer(),
        Order: shared.AuditLogOrderEnumAsc.ToPointer(),
        Page: sdk.Int64(618826),
        PerPage: sdk.Int64(328303),
        Phrase: sdk.String("aspernatur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AuditLogEvents != nil {
        // handle response
    }
}
```

## EnterpriseAdminGetCommentStats

Get comment statistics

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#get-comment-statistics>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminGetCommentStats(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.EnterpriseCommentOverview != nil {
        // handle response
    }
}
```

## EnterpriseAdminGetConfigurationStatus

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
<https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#get-the-configuration-status>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminGetConfigurationStatus(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.ConfigurationStatus != nil {
        // handle response
    }
}
```

## EnterpriseAdminGetDownloadStatusForPreReceiveEnvironment

In addition to seeing the download status at the "[Get a pre-receive environment](#get-a-pre-receive-environment)" endpoint, there is also this separate endpoint for just the download status.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#get-the-download-status-for-a-pre-receive-environment>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminGetDownloadStatusForPreReceiveEnvironment(ctx, operations.EnterpriseAdminGetDownloadStatusForPreReceiveEnvironmentRequest{
        PreReceiveEnvironmentID: 404425,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreReceiveEnvironmentDownloadStatus != nil {
        // handle response
    }
}
```

## EnterpriseAdminGetGistStats

Get gist statistics

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#get-gist-statistics>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminGetGistStats(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.EnterpriseGistOverview != nil {
        // handle response
    }
}
```

## EnterpriseAdminGetGithubActionsPermissionsEnterprise

Gets the GitHub Actions permissions policy for organizations and allowed actions in an enterprise.

You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/actions#get-github-actions-permissions-for-an-enterprise>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminGetGithubActionsPermissionsEnterprise(ctx, operations.EnterpriseAdminGetGithubActionsPermissionsEnterpriseRequest{
        Enterprise: "maiores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsEnterprisePermissions != nil {
        // handle response
    }
}
```

## EnterpriseAdminGetGlobalWebhook

Get a global webhook

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#get-a-global-webhook>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminGetGlobalWebhook(ctx, operations.EnterpriseAdminGetGlobalWebhookRequest{
        HookID: 544647,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GlobalHook != nil {
        // handle response
    }
}
```

## EnterpriseAdminGetHooksStats

Get hooks statistics

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#get-hooks-statistics>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminGetHooksStats(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.EnterpriseHookOverview != nil {
        // handle response
    }
}
```

## EnterpriseAdminGetIssueStats

Get issue statistics

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#get-issues-statistics>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminGetIssueStats(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.EnterpriseIssueOverview != nil {
        // handle response
    }
}
```

## EnterpriseAdminGetLicenseInformation

Get license information

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#get-license-information>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminGetLicenseInformation(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.LicenseInfo != nil {
        // handle response
    }
}
```

## EnterpriseAdminGetMaintenanceStatus

Check your installation's maintenance status:

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#get-the-maintenance-status>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminGetMaintenanceStatus(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.MaintenanceStatus != nil {
        // handle response
    }
}
```

## EnterpriseAdminGetMilestoneStats

Get milestone statistics

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#get-milestone-statistics>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminGetMilestoneStats(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.EnterpriseMilestoneOverview != nil {
        // handle response
    }
}
```

## EnterpriseAdminGetOrgStats

Get organization statistics

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#get-organization-statistics>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminGetOrgStats(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.EnterpriseOrganizationOverview != nil {
        // handle response
    }
}
```

## EnterpriseAdminGetPagesStats

Get pages statistics

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#get-pages-statistics>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminGetPagesStats(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.EnterprisePageOverview != nil {
        // handle response
    }
}
```

## EnterpriseAdminGetPreReceiveEnvironment

Get a pre-receive environment

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#get-a-pre-receive-environment>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminGetPreReceiveEnvironment(ctx, operations.EnterpriseAdminGetPreReceiveEnvironmentRequest{
        PreReceiveEnvironmentID: 871786,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreReceiveEnvironment != nil {
        // handle response
    }
}
```

## EnterpriseAdminGetPreReceiveHook

Get a pre-receive hook

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#get-a-pre-receive-hook>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminGetPreReceiveHook(ctx, operations.EnterpriseAdminGetPreReceiveHookRequest{
        PreReceiveHookID: 621693,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreReceiveHook != nil {
        // handle response
    }
}
```

## EnterpriseAdminGetPreReceiveHookForOrg

Get a pre-receive hook for an organization

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#get-a-pre-receive-hook-for-an-organization>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminGetPreReceiveHookForOrg(ctx, operations.EnterpriseAdminGetPreReceiveHookForOrgRequest{
        Org: "blanditiis",
        PreReceiveHookID: 379356,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrgPreReceiveHook != nil {
        // handle response
    }
}
```

## EnterpriseAdminGetPreReceiveHookForRepo

Get a pre-receive hook for a repository

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#get-a-pre-receive-hook-for-a-repository>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminGetPreReceiveHookForRepo(ctx, operations.EnterpriseAdminGetPreReceiveHookForRepoRequest{
        Owner: "repudiandae",
        PreReceiveHookID: 542129,
        Repo: "atque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RepositoryPreReceiveHook != nil {
        // handle response
    }
}
```

## EnterpriseAdminGetProvisioningInformationForEnterpriseGroup

**Note:** The SCIM API endpoints for enterprise accounts are currently in *private* beta and are subject to change.

Gets information about a SCIM group.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#get-scim-provisioning-information-for-an-enterprise-group>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminGetProvisioningInformationForEnterpriseGroup(ctx, operations.EnterpriseAdminGetProvisioningInformationForEnterpriseGroupRequest{
        ExcludedAttributes: sdk.String("members"),
        ScimGroupID: "7fce0092-d52e-4f76-b727-3955bd72c939",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ScimEnterpriseGroupResponse != nil {
        // handle response
    }
}
```

## EnterpriseAdminGetProvisioningInformationForEnterpriseUser

**Note:** The SCIM API endpoints for enterprise accounts are currently in *private* beta and are subject to change.

Gets information about a SCIM user.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#get-scim-provisioning-information-for-an-enterprise-user>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminGetProvisioningInformationForEnterpriseUser(ctx, operations.EnterpriseAdminGetProvisioningInformationForEnterpriseUserRequest{
        ScimUserID: "sunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ScimEnterpriseUserResponse != nil {
        // handle response
    }
}
```

## EnterpriseAdminGetPullRequestStats

Get pull request statistics

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#get-pull-requests-statistics>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminGetPullRequestStats(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.EnterprisePullRequestOverview != nil {
        // handle response
    }
}
```

## EnterpriseAdminGetRepoStats

Get repository statistics

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#get-repository-statistics>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminGetRepoStats(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.EnterpriseRepositoryOverview != nil {
        // handle response
    }
}
```

## EnterpriseAdminGetSelfHostedRunnerForEnterprise

Gets a specific self-hosted runner configured in an enterprise.

You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/actions#get-a-self-hosted-runner-for-an-enterprise>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminGetSelfHostedRunnerForEnterprise(ctx, operations.EnterpriseAdminGetSelfHostedRunnerForEnterpriseRequest{
        Enterprise: "recusandae",
        RunnerID: 680697,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Runner != nil {
        // handle response
    }
}
```

## EnterpriseAdminGetSelfHostedRunnerGroupForEnterprise

Gets a specific self-hosted runner group for an enterprise.

You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/actions#get-a-self-hosted-runner-group-for-an-enterprise>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminGetSelfHostedRunnerGroupForEnterprise(ctx, operations.EnterpriseAdminGetSelfHostedRunnerGroupForEnterpriseRequest{
        Enterprise: "repellendus",
        RunnerGroupID: 287119,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RunnerGroupsEnterprise != nil {
        // handle response
    }
}
```

## EnterpriseAdminGetSettings

Gets the settings for your instance. To change settings, see the [Set settings endpoint](https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#set-settings).

**Note:** You cannot retrieve the management console password with the Enterprise administration API.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#get-settings>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminGetSettings(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.EnterpriseSettings != nil {
        // handle response
    }
}
```

## EnterpriseAdminGetUserStats

Get users statistics

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#get-users-statistics>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminGetUserStats(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.EnterpriseUserOverview != nil {
        // handle response
    }
}
```

## EnterpriseAdminListGlobalWebhooks

List global webhooks

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#list-global-webhooks>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminListGlobalWebhooks(ctx, operations.EnterpriseAdminListGlobalWebhooksRequest{
        Page: sdk.Int64(968287),
        PerPage: sdk.Int64(42976),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GlobalHooks != nil {
        // handle response
    }
}
```

## EnterpriseAdminListLabelsForSelfHostedRunnerForEnterprise

Lists all labels for a self-hosted runner configured in an enterprise.

You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/actions#list-labels-for-a-self-hosted-runner-for-an-enterprise>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminListLabelsForSelfHostedRunnerForEnterprise(ctx, operations.EnterpriseAdminListLabelsForSelfHostedRunnerForEnterpriseRequest{
        Enterprise: "repudiandae",
        RunnerID: 116098,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EnterpriseAdminListLabelsForSelfHostedRunnerForEnterprise200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprise

Lists the organizations with access to a self-hosted runner group.

You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/actions#list-organization-access-to-a-self-hosted-runner-group-in-a-enterprise>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprise(ctx, operations.EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest{
        Enterprise: "accusantium",
        Page: sdk.Int64(106429),
        PerPage: sdk.Int64(174772),
        RunnerGroupID: 316488,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprise200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## EnterpriseAdminListPersonalAccessTokens

Lists personal access tokens for all users, including admin users.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#list-personal-access-tokens>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminListPersonalAccessTokens(ctx, operations.EnterpriseAdminListPersonalAccessTokensRequest{
        Page: sdk.Int64(389135),
        PerPage: sdk.Int64(246535),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Authorizations != nil {
        // handle response
    }
}
```

## EnterpriseAdminListPreReceiveEnvironments

List pre-receive environments

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#list-pre-receive-environments>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminListPreReceiveEnvironments(ctx, operations.EnterpriseAdminListPreReceiveEnvironmentsRequest{
        Direction: shared.DirectionEnumDesc.ToPointer(),
        Page: sdk.Int64(562783),
        PerPage: sdk.Int64(300029),
        Sort: operations.EnterpriseAdminListPreReceiveEnvironmentsSortEnumName.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreReceiveEnvironments != nil {
        // handle response
    }
}
```

## EnterpriseAdminListPreReceiveHooks

List pre-receive hooks

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#list-pre-receive-hooks>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminListPreReceiveHooks(ctx, operations.EnterpriseAdminListPreReceiveHooksRequest{
        Direction: shared.DirectionEnumAsc.ToPointer(),
        Page: sdk.Int64(580107),
        PerPage: sdk.Int64(886305),
        Sort: operations.EnterpriseAdminListPreReceiveHooksSortEnumUpdated.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreReceiveHooks != nil {
        // handle response
    }
}
```

## EnterpriseAdminListPreReceiveHooksForOrg

List all pre-receive hooks that are enabled or testing for this organization as well as any disabled hooks that can be configured at the organization level. Globally disabled pre-receive hooks that do not allow downstream configuration are not listed.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#list-pre-receive-hooks-for-an-organization>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminListPreReceiveHooksForOrg(ctx, operations.EnterpriseAdminListPreReceiveHooksForOrgRequest{
        Direction: shared.DirectionEnumAsc.ToPointer(),
        Org: "adipisci",
        Page: sdk.Int64(907876),
        PerPage: sdk.Int64(580887),
        Sort: operations.EnterpriseAdminListPreReceiveHooksForOrgSortEnumCreated.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrgPreReceiveHooks != nil {
        // handle response
    }
}
```

## EnterpriseAdminListPreReceiveHooksForRepo

List all pre-receive hooks that are enabled or testing for this repository as well as any disabled hooks that are allowed to be enabled at the repository level. Pre-receive hooks that are disabled at a higher level and are not configurable will not be listed.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#list-pre-receive-hooks-for-a-repository>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminListPreReceiveHooksForRepo(ctx, operations.EnterpriseAdminListPreReceiveHooksForRepoRequest{
        Direction: shared.DirectionEnumAsc.ToPointer(),
        Owner: "id",
        Page: sdk.Int64(335631),
        PerPage: sdk.Int64(440264),
        Repo: "error",
        Sort: operations.EnterpriseAdminListPreReceiveHooksForRepoSortEnumCreated.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RepositoryPreReceiveHooks != nil {
        // handle response
    }
}
```

## EnterpriseAdminListProvisionedGroupsEnterprise

**Note:** The SCIM API endpoints for enterprise accounts are currently in *private* beta and are subject to change.

Lists provisioned SCIM groups in an enterprise.

You can improve query search time by using the `excludedAttributes` query parameter with a value of `members` to exclude members from the response.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#list-provisioned-scim-groups-for-an-enterprise>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminListProvisionedGroupsEnterprise(ctx, operations.EnterpriseAdminListProvisionedGroupsEnterpriseRequest{
        Count: sdk.Int(1),
        ExcludedAttributes: sdk.String("members"),
        Filter: sdk.String("corporis"),
        StartIndex: sdk.Int(1),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ScimEnterpriseGroupList != nil {
        // handle response
    }
}
```

## EnterpriseAdminListProvisionedIdentitiesEnterprise

**Note:** The SCIM API endpoints for enterprise accounts are currently in *private* beta and are subject to change.

Lists provisioned SCIM enterprise members.

When a user with a SCIM-provisioned external identity is removed from an enterprise through a `patch` with `active` flag set to `false`, the account's metadata is preserved to allow the user to re-join the enterprise in the future. However, the user's account will be suspended and the user will not be able to sign-in. In order to permanently suspend the users account with no ability to re-join the enterprise in the future, use the `delete` request. Users that were not permanently deleted will be visible in the returned results.

You can improve query search time by using the `excludedAttributes` query parameter with a value of `groups` to exclude groups from the response.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#list-scim-provisioned-identities-for-an-enterprise>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminListProvisionedIdentitiesEnterprise(ctx, operations.EnterpriseAdminListProvisionedIdentitiesEnterpriseRequest{
        Count: sdk.Int(1),
        ExcludedAttributes: sdk.String("members"),
        Filter: sdk.String("quidem"),
        StartIndex: sdk.Int(1),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ScimEnterpriseUserList != nil {
        // handle response
    }
}
```

## EnterpriseAdminListPublicKeys

List public keys

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#list-public-keys>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminListPublicKeys(ctx, operations.EnterpriseAdminListPublicKeysRequest{
        Direction: shared.DirectionEnumDesc.ToPointer(),
        Page: sdk.Int64(247399),
        PerPage: sdk.Int64(878493),
        Since: sdk.String("doloremque"),
        Sort: operations.EnterpriseAdminListPublicKeysSortEnumUpdated.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PublicKeyFulls != nil {
        // handle response
    }
}
```

## EnterpriseAdminListRunnerApplicationsForEnterprise

Lists binaries for the runner application that you can download and run.

You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/actions#list-runner-applications-for-an-enterprise>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminListRunnerApplicationsForEnterprise(ctx, operations.EnterpriseAdminListRunnerApplicationsForEnterpriseRequest{
        Enterprise: "ipsa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RunnerApplications != nil {
        // handle response
    }
}
```

## EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprise

Lists the organizations that are selected to have GitHub Actions enabled in an enterprise. To use this endpoint, the enterprise permission policy for `enabled_organizations` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)."

You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/actions#list-selected-organizations-enabled-for-github-actions-in-an-enterprise>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprise(ctx, operations.EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseRequest{
        Enterprise: "totam",
        Page: sdk.Int64(61078),
        PerPage: sdk.Int64(474668),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprise200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## EnterpriseAdminListSelfHostedRunnerGroupsForEnterprise

Lists all self-hosted runner groups for an enterprise.

You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/actions#list-self-hosted-runner-groups-for-an-enterprise>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminListSelfHostedRunnerGroupsForEnterprise(ctx, operations.EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseRequest{
        Enterprise: "eveniet",
        Page: sdk.Int64(184362),
        PerPage: sdk.Int64(739884),
        VisibleToOrganization: sdk.String("iure"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EnterpriseAdminListSelfHostedRunnerGroupsForEnterprise200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## EnterpriseAdminListSelfHostedRunnersForEnterprise

Lists all self-hosted runners configured for an enterprise.

You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/actions#list-self-hosted-runners-for-an-enterprise>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminListSelfHostedRunnersForEnterprise(ctx, operations.EnterpriseAdminListSelfHostedRunnersForEnterpriseRequest{
        Enterprise: "necessitatibus",
        Page: sdk.Int64(187552),
        PerPage: sdk.Int64(672582),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EnterpriseAdminListSelfHostedRunnersForEnterprise200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## EnterpriseAdminListSelfHostedRunnersInGroupForEnterprise

Lists the self-hosted runners that are in a specific enterprise group.

You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/actions#list-self-hosted-runners-in-a-group-for-an-enterprise>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminListSelfHostedRunnersInGroupForEnterprise(ctx, operations.EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseRequest{
        Enterprise: "distinctio",
        Page: sdk.Int64(528940),
        PerPage: sdk.Int64(523006),
        RunnerGroupID: 304446,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EnterpriseAdminListSelfHostedRunnersInGroupForEnterprise200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## EnterpriseAdminPingGlobalWebhook

This will trigger a [ping event](https://docs.github.com/enterprise-server@3.7/webhooks/#ping-event) to be sent to the webhook.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#ping-a-global-webhook>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminPingGlobalWebhook(ctx, operations.EnterpriseAdminPingGlobalWebhookRequest{
        HookID: 320565,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## EnterpriseAdminPromoteUserToBeSiteAdministrator

Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@3.7/rest/overview/resources-in-the-rest-api#http-verbs)."

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#promote-a-user-to-be-a-site-administrator>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminPromoteUserToBeSiteAdministrator(ctx, operations.EnterpriseAdminPromoteUserToBeSiteAdministratorRequest{
        Username: "Zoe_Abernathy",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## EnterpriseAdminProvisionEnterpriseGroup

**Note:** The SCIM API endpoints for enterprise accounts are currently in *private* beta and are subject to change.

Creates a SCIM group for an enterprise.

If members are included as part of the group provisioning payload, they will be created as external group members. It is up to a provider to store a mapping between the `externalId` and `id` of each user.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#provision-a-scim-enterprise-group>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminProvisionEnterpriseGroup(ctx, shared.Group{
        DisplayName: "Engineering",
        ExternalID: "8aa1a0c0-c4c3-4bc0-b4a5-2ef676900159",
        Members: []shared.GroupMembers{
            shared.GroupMembers{
                DisplayName: "Monalisa Octocat",
                Value: "23a35c27-23d3-4c03-b4c5-6443c09e7173",
            },
            shared.GroupMembers{
                DisplayName: "Monalisa Octocat",
                Value: "23a35c27-23d3-4c03-b4c5-6443c09e7173",
            },
        },
        Schemas: []shared.GroupSchemasEnum{
            shared.GroupSchemasEnumUrnIetfParamsScimSchemasCore20Group,
            shared.GroupSchemasEnumUrnIetfParamsScimSchemasCore20Group,
            shared.GroupSchemasEnumUrnIetfParamsScimSchemasCore20Group,
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ScimEnterpriseGroupResponse != nil {
        // handle response
    }
}
```

## EnterpriseAdminProvisionEnterpriseUser

**Note:** The SCIM API endpoints for enterprise accounts are currently in *private* beta and are subject to change.

Creates an external identity for a new SCIM enterprise user.

SCIM does not authenticate users, it only provisions them. The authentication of users is done by SAML. However, when SCIM is enabled, all users need to be provisioned through SCIM before a user can sign in through SAML. The matching of a user to a SCIM provisioned user is done when the SAML assertion is consumed. The user will be matched on SAML response `NameID` to SCIM `userName`.

When converting existing enterprise to use SCIM, the user handle (`userName`) from the SCIM payload will be used to match the provisioned user to an already existing user in the enterprise. Since the new identity record is created for newly provisioned users the matching for those records is done using a user's handle. Currently the matching will be performed to all of the users no matter if they were SAML JIT provisioned or created as local users.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#provision-a-scim-enterprise-user>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminProvisionEnterpriseUser(ctx, shared.User{
        Active: true,
        DisplayName: "Mona Lisa",
        Emails: []shared.UserEmails{
            shared.UserEmails{
                Primary: true,
                Type: "work",
                Value: "mlisa@example.com",
            },
            shared.UserEmails{
                Primary: true,
                Type: "work",
                Value: "mlisa@example.com",
            },
        },
        ExternalID: "E012345",
        Name: &shared.UserName{
            FamilyName: "Octocat",
            Formatted: sdk.String("Ms. Mona Lisa Octocat"),
            GivenName: "Mona",
            MiddleName: sdk.String("Lisa"),
        },
        Roles: []shared.UserRole{
            shared.UserRole{
                Display: sdk.String("maiores"),
                Primary: sdk.Bool(false),
                Type: sdk.String("reiciendis"),
                Value: shared.UserRoleValueEnumUserLower,
            },
        },
        Schemas: []shared.UserSchemasEnum{
            shared.UserSchemasEnumUrnIetfParamsScimSchemasCore20User,
        },
        UserName: "E012345",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ScimEnterpriseUserResponse != nil {
        // handle response
    }
}
```

## EnterpriseAdminRemoveAllCustomLabelsFromSelfHostedRunnerForEnterprise

Remove all custom labels from a self-hosted runner configured in an
enterprise. Returns the remaining read-only labels from the runner.

You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/actions#remove-all-custom-labels-from-a-self-hosted-runner-for-an-enterprise>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminRemoveAllCustomLabelsFromSelfHostedRunnerForEnterprise(ctx, operations.EnterpriseAdminRemoveAllCustomLabelsFromSelfHostedRunnerForEnterpriseRequest{
        Enterprise: "id",
        RunnerID: 327988,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EnterpriseAdminRemoveAllCustomLabelsFromSelfHostedRunnerForEnterprise200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## EnterpriseAdminRemoveAnnouncement

Removes the global announcement banner in your enterprise.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/enterprise-admin/announcement#remove-the-global-announcement-banner>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminRemoveAnnouncement(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## EnterpriseAdminRemoveAuthorizedSSHKey

**Note:** The request body for this operation must be submitted as `application/x-www-form-urlencoded` data. You can submit a parameter value as a string, or you can use a tool such as `curl` to submit a parameter value as the contents of a text file. For more information, see the [`curl` documentation](https://curl.se/docs/manpage.html#--data-urlencode).

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#remove-an-authorized-ssh-key>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminRemoveAuthorizedSSHKey(ctx, operations.EnterpriseAdminRemoveAuthorizedSSHKeyRequestBody{
        AuthorizedKey: "dolore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SSHKeys != nil {
        // handle response
    }
}
```

## EnterpriseAdminRemoveCustomLabelFromSelfHostedRunnerForEnterprise

Remove a custom label from a self-hosted runner configured
in an enterprise. Returns the remaining labels from the runner.

This endpoint returns a `404 Not Found` status if the custom label is not
present on the runner.

You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/actions#remove-a-custom-label-from-a-self-hosted-runner-for-an-enterprise>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminRemoveCustomLabelFromSelfHostedRunnerForEnterprise(ctx, operations.EnterpriseAdminRemoveCustomLabelFromSelfHostedRunnerForEnterpriseRequest{
        Enterprise: "dolorum",
        Name: "Amy Walsh",
        RunnerID: 477646,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EnterpriseAdminRemoveCustomLabelFromSelfHostedRunnerForEnterprise200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## EnterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterprise

Removes an organization from the list of selected organizations that can access a self-hosted runner group. The runner group must have `visibility` set to `selected`. For more information, see "[Create a self-hosted runner group for an enterprise](#create-a-self-hosted-runner-group-for-an-enterprise)."

You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/actions#remove-organization-access-to-a-self-hosted-runner-group-in-an-enterprise>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterprise(ctx, operations.EnterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest{
        Enterprise: "ex",
        OrgID: 284000,
        RunnerGroupID: 633062,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## EnterpriseAdminRemovePreReceiveHookEnforcementForOrg

Removes any overrides for this hook at the org level for this org.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#remove-pre-receive-hook-enforcement-for-an-organization>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminRemovePreReceiveHookEnforcementForOrg(ctx, operations.EnterpriseAdminRemovePreReceiveHookEnforcementForOrgRequest{
        Org: "adipisci",
        PreReceiveHookID: 890653,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrgPreReceiveHook != nil {
        // handle response
    }
}
```

## EnterpriseAdminRemovePreReceiveHookEnforcementForRepo

Deletes any overridden enforcement on this repository for the specified hook.

Responds with effective values inherited from owner and/or global level.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#remove-pre-receive-hook-enforcement-for-a-repository>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminRemovePreReceiveHookEnforcementForRepo(ctx, operations.EnterpriseAdminRemovePreReceiveHookEnforcementForRepoRequest{
        Owner: "laudantium",
        PreReceiveHookID: 432606,
        Repo: "nemo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RepositoryPreReceiveHook != nil {
        // handle response
    }
}
```

## EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterprise

Removes a self-hosted runner from a group configured in an enterprise. The runner is then returned to the default group.

You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/actions#remove-a-self-hosted-runner-from-a-group-for-an-enterprise>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterprise(ctx, operations.EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterpriseRequest{
        Enterprise: "recusandae",
        RunnerGroupID: 456520,
        RunnerID: 592081,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## EnterpriseAdminSetAllowedActionsEnterprise

Sets the actions that are allowed in an enterprise. To use this endpoint, the enterprise permission policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)."

You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/actions#set-allowed-actions-for-an-enterprise>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminSetAllowedActionsEnterprise(ctx, operations.EnterpriseAdminSetAllowedActionsEnterpriseRequest{
        Enterprise: "quis",
        SelectedActions: shared.SelectedActions{
            GithubOwnedAllowed: false,
            PatternsAllowed: []string{
                "reiciendis",
                "provident",
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## EnterpriseAdminSetAnnouncement

Sets the message and expiration time for the global announcement banner in your enterprise.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/enterprise-admin/announcement#set-the-global-announcement-banner>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminSetAnnouncement(ctx, shared.Announcement{
        Announcement: "Very **important** announcement about _something_.",
        ExpiresAt: types.MustTimeFromString(""2021-01-01T00:00:00.000-07:00""),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Announcement != nil {
        // handle response
    }
}
```

## EnterpriseAdminSetCustomLabelsForSelfHostedRunnerForEnterprise

Remove all previous custom labels and set the new custom labels for a specific
self-hosted runner configured in an enterprise.

You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/actions#set-custom-labels-for-a-self-hosted-runner-for-an-enterprise>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminSetCustomLabelsForSelfHostedRunnerForEnterprise(ctx, operations.EnterpriseAdminSetCustomLabelsForSelfHostedRunnerForEnterpriseRequest{
        RequestBody: operations.EnterpriseAdminSetCustomLabelsForSelfHostedRunnerForEnterpriseRequestBody{
            Labels: []string{
                "ullam",
            },
        },
        Enterprise: "quasi",
        RunnerID: 657020,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EnterpriseAdminSetCustomLabelsForSelfHostedRunnerForEnterprise200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## EnterpriseAdminSetGithubActionsPermissionsEnterprise

Sets the GitHub Actions permissions policy for organizations and allowed actions in an enterprise.

You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/actions#set-github-actions-permissions-for-an-enterprise>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminSetGithubActionsPermissionsEnterprise(ctx, operations.EnterpriseAdminSetGithubActionsPermissionsEnterpriseRequest{
        RequestBody: operations.EnterpriseAdminSetGithubActionsPermissionsEnterpriseRequestBody{
            AllowedActions: shared.AllowedActionsEnumLocalOnly.ToPointer(),
            EnabledOrganizations: shared.EnabledOrganizationsEnumNone,
        },
        Enterprise: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## EnterpriseAdminSetInformationForProvisionedEnterpriseGroup

**Note:** The SCIM API endpoints for enterprise accounts are currently in *private* beta and are subject to change.

Replaces an existing provisioned group’s information.

You must provide all the information required for the group as if you were provisioning it for the first time. Any existing group information that you don't provide will be removed, including group membership. If you want to only update a specific attribute, use the [Update an attribute for a SCIM enterprise group](#update-an-attribute-for-a-scim-enterprise-group) endpoint instead.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#set-scim-information-for-a-provisioned-enterprise-group>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminSetInformationForProvisionedEnterpriseGroup(ctx, operations.EnterpriseAdminSetInformationForProvisionedEnterpriseGroupRequest{
        Group: shared.Group{
            DisplayName: "Engineering",
            ExternalID: "8aa1a0c0-c4c3-4bc0-b4a5-2ef676900159",
            Members: []shared.GroupMembers{
                shared.GroupMembers{
                    DisplayName: "Monalisa Octocat",
                    Value: "23a35c27-23d3-4c03-b4c5-6443c09e7173",
                },
                shared.GroupMembers{
                    DisplayName: "Monalisa Octocat",
                    Value: "23a35c27-23d3-4c03-b4c5-6443c09e7173",
                },
                shared.GroupMembers{
                    DisplayName: "Monalisa Octocat",
                    Value: "23a35c27-23d3-4c03-b4c5-6443c09e7173",
                },
                shared.GroupMembers{
                    DisplayName: "Monalisa Octocat",
                    Value: "23a35c27-23d3-4c03-b4c5-6443c09e7173",
                },
            },
            Schemas: []shared.GroupSchemasEnum{
                shared.GroupSchemasEnumUrnIetfParamsScimSchemasCore20Group,
                shared.GroupSchemasEnumUrnIetfParamsScimSchemasCore20Group,
                shared.GroupSchemasEnumUrnIetfParamsScimSchemasCore20Group,
            },
        },
        ScimGroupID: "7fce0092-d52e-4f76-b727-3955bd72c939",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ScimEnterpriseGroupResponse != nil {
        // handle response
    }
}
```

## EnterpriseAdminSetInformationForProvisionedEnterpriseUser

**Note:** The SCIM API endpoints for enterprise accounts are currently in *private* beta and are subject to change.

Replaces an existing provisioned user's information.

You must provide all the information required for the user as if you were provisioning them for the first time. Any existing user information that you don't provide will be removed. If you want to only update a specific attribute, use the [Update an attribute for a SCIM user](#update-an-attribute-for-a-scim-enterprise-user) endpoint instead.

**Warning:** Setting `active: false` will suspend a user and obfuscate the user handle and user email. Since the implementation is a generic SCIM implementation and does not differentiate yet between different IdP providers, for Okta, the user GDPR data will not be purged and the credentials will not be removed.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#set-scim-information-for-a-provisioned-enterprise-user>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminSetInformationForProvisionedEnterpriseUser(ctx, operations.EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequest{
        ScimUserID: "ex",
        User: shared.User{
            Active: true,
            DisplayName: "Mona Lisa",
            Emails: []shared.UserEmails{
                shared.UserEmails{
                    Primary: true,
                    Type: "work",
                    Value: "mlisa@example.com",
                },
                shared.UserEmails{
                    Primary: true,
                    Type: "work",
                    Value: "mlisa@example.com",
                },
            },
            ExternalID: "E012345",
            Name: &shared.UserName{
                FamilyName: "Octocat",
                Formatted: sdk.String("Ms. Mona Lisa Octocat"),
                GivenName: "Mona",
                MiddleName: sdk.String("Lisa"),
            },
            Roles: []shared.UserRole{
                shared.UserRole{
                    Display: sdk.String("repellat"),
                    Primary: sdk.Bool(false),
                    Type: sdk.String("doloribus"),
                    Value: shared.UserRoleValueEnumUserLower,
                },
            },
            Schemas: []shared.UserSchemasEnum{
                shared.UserSchemasEnumUrnIetfParamsScimSchemasCore20User,
                shared.UserSchemasEnumUrnIetfParamsScimSchemasCore20User,
            },
            UserName: "E012345",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ScimEnterpriseUserResponse != nil {
        // handle response
    }
}
```

## EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterprise

Replaces the list of organizations that have access to a self-hosted runner configured in an enterprise.

You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/actions#set-organization-access-to-a-self-hosted-runner-group-in-an-enterprise>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterprise(ctx, operations.EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest{
        RequestBody: operations.EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseRequestBody{
            SelectedOrganizationIds: []int64{
                721407,
                937636,
            },
        },
        Enterprise: "officia",
        RunnerGroupID: 672041,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterprise

Replaces the list of selected organizations that are enabled for GitHub Actions in an enterprise. To use this endpoint, the enterprise permission policy for `enabled_organizations` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)."

You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/actions#set-selected-organizations-enabled-for-github-actions-in-an-enterprise>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterprise(ctx, operations.EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterpriseRequest{
        RequestBody: operations.EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterpriseRequestBody{
            SelectedOrganizationIds: []int64{
                266697,
                976226,
                564064,
                889794,
            },
        },
        Enterprise: "sapiente",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## EnterpriseAdminSetSelfHostedRunnersInGroupForEnterprise

Replaces the list of self-hosted runners that are part of an enterprise runner group.

You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/actions#set-self-hosted-runners-in-a-group-for-an-enterprise>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminSetSelfHostedRunnersInGroupForEnterprise(ctx, operations.EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseRequest{
        RequestBody: operations.EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseRequestBody{
            Runners: []int64{
                113486,
                698249,
                272229,
                335498,
            },
        },
        Enterprise: "inventore",
        RunnerGroupID: 147685,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## EnterpriseAdminSetSettings

Applies settings on your instance. For a list of the available settings, see the [Get settings endpoint](https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#get-settings).

**Notes:**

- The request body for this operation must be submitted as `application/x-www-form-urlencoded` data. You can submit a parameter value as a string, or you can use a tool such as `curl` to submit a parameter value as the contents of a text file. For more information, see the [`curl` documentation](https://curl.se/docs/manpage.html#--data-urlencode).
- You cannot set the management console password with the Enterprise administration API. Use the `ghe-set-password` utility to change the management console password. For more information, see "[Command-line utilities](https://docs.github.com/enterprise-server@3.7/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-set-password)."

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#set-settings>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminSetSettings(ctx, operations.EnterpriseAdminSetSettingsRequestBody{
        Settings: "cumque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## EnterpriseAdminStartConfigurationProcess

This endpoint allows you to start a configuration process at any time for your updated settings to take effect:

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#start-a-configuration-process>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminStartConfigurationProcess(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## EnterpriseAdminStartPreReceiveEnvironmentDownload

Triggers a new download of the environment tarball from the environment's `image_url`. When the download is finished, the newly downloaded tarball will overwrite the existing environment.

If a download cannot be triggered, you will receive a `422 Unprocessable Entity` response.

The possible error messages are:

* _Cannot modify or delete the default environment_
* _Can not start a new download when a download is in progress_

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#start-a-pre-receive-environment-download>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminStartPreReceiveEnvironmentDownload(ctx, operations.EnterpriseAdminStartPreReceiveEnvironmentDownloadRequest{
        PreReceiveEnvironmentID: 62636,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreReceiveEnvironmentDownloadStatus != nil {
        // handle response
    }
}
```

## EnterpriseAdminSuspendUser

If your GitHub instance uses [LDAP Sync with Active Directory LDAP servers](https://docs.github.com/enterprise-server@3.7/admin/identity-and-access-management/using-ldap-for-enterprise-iam/using-ldap), Active Directory LDAP-authenticated users cannot be suspended through this API. If you attempt to suspend an Active Directory LDAP-authenticated user through this API, it will return a `403` response.

You can suspend any user account except your own.

Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@3.7/rest/overview/resources-in-the-rest-api#http-verbs)."

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#suspend-a-user>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminSuspendUser(ctx, operations.EnterpriseAdminSuspendUserRequest{
        RequestBody: &operations.EnterpriseAdminSuspendUserRequestBody{
            Reason: sdk.String("perferendis"),
        },
        Username: "Dean.Collins",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## EnterpriseAdminSyncLdapMappingForTeam

Note that this API call does not automatically initiate an LDAP sync. Rather, if a `201` is returned, the sync job is queued successfully, and is performed when the instance is ready.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#sync-ldap-mapping-for-a-team>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminSyncLdapMappingForTeam(ctx, operations.EnterpriseAdminSyncLdapMappingForTeamRequest{
        TeamID: 521996,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EnterpriseAdminSyncLdapMappingForTeam201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## EnterpriseAdminSyncLdapMappingForUser

Note that this API call does not automatically initiate an LDAP sync. Rather, if a `201` is returned, the sync job is queued successfully, and is performed when the instance is ready.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#sync-ldap-mapping-for-a-user>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminSyncLdapMappingForUser(ctx, operations.EnterpriseAdminSyncLdapMappingForUserRequest{
        Username: "Sasha95",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EnterpriseAdminSyncLdapMappingForUser201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## EnterpriseAdminUnsuspendUser

If your GitHub instance uses [LDAP Sync with Active Directory LDAP servers](https://docs.github.com/enterprise-server@3.7/admin/identity-and-access-management/using-ldap-for-enterprise-iam/using-ldap), this API is disabled and will return a `403` response. Active Directory LDAP-authenticated users cannot be unsuspended using the API.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#unsuspend-a-user>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminUnsuspendUser(ctx, operations.EnterpriseAdminUnsuspendUserRequest{
        RequestBody: &operations.EnterpriseAdminUnsuspendUserRequestBody{
            Reason: sdk.String("eum"),
        },
        Username: "Bianka58",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## EnterpriseAdminUpdateAttributeForEnterpriseGroup

**Note:** The SCIM API endpoints for enterprise accounts are currently in *private* beta and are subject to change.

Update a provisioned group’s individual attributes.

To change a group’s values, you must provide a specific Operations JSON format that contains at least one of the add, remove, or replace operations. For examples and more information on the SCIM operations format, see the [SCIM specification](https://tools.ietf.org/html/rfc7644#section-3.5.2).  Update can also be used to add group memberships.

Group memberships can be sent one at a time or in batches for faster performance. **Note**: The memberships are referenced through a local user `id`, and the user will need to be created before they are referenced here.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#update-an-attribute-for-a-scim-enterprise-group>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminUpdateAttributeForEnterpriseGroup(ctx, operations.EnterpriseAdminUpdateAttributeForEnterpriseGroupRequest{
        PatchSchema: shared.PatchSchema{
            Operations: []shared.PatchSchemaOperations{
                shared.PatchSchemaOperations{
                    Op: shared.PatchSchemaOperationsOpEnumRemove,
                    Path: sdk.String("soluta"),
                    Value: sdk.String("hic"),
                },
                shared.PatchSchemaOperations{
                    Op: shared.PatchSchemaOperationsOpEnumRemove,
                    Path: sdk.String("eaque"),
                    Value: sdk.String("earum"),
                },
                shared.PatchSchemaOperations{
                    Op: shared.PatchSchemaOperationsOpEnumReplace,
                    Path: sdk.String("maiores"),
                    Value: sdk.String("debitis"),
                },
            },
            Schemas: []shared.PatchSchemaSchemasEnum{
                shared.PatchSchemaSchemasEnumUrnIetfParamsScimAPIMessages20PatchOp,
                shared.PatchSchemaSchemasEnumUrnIetfParamsScimAPIMessages20PatchOp,
            },
        },
        ScimGroupID: "7fce0092-d52e-4f76-b727-3955bd72c939",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ScimEnterpriseGroupResponse != nil {
        // handle response
    }
}
```

## EnterpriseAdminUpdateAttributeForEnterpriseUser

**Note:** The SCIM API endpoints for enterprise accounts are currently in *private* beta and are subject to change.

Update a provisioned user's individual attributes.

To change a user's values, you must provide a specific `Operations` JSON format that contains at least one of the `add`, `remove`, or `replace` operations. For examples and more information on the SCIM operations format, see the [SCIM specification](https://tools.ietf.org/html/rfc7644#section-3.5.2).

**Note:** Complicated SCIM `path` selectors that include filters are not supported. For example, a `path` selector defined as `"path": "emails[type eq \"work\"]"` will not work.

**Warning:** Setting `active: false` will suspend a user and obfuscate the user handle and user email. Since the implementation is a generic SCIM implementation and does not differentiate yet between different IdP providers, for Okta, the user GDPR data will not be purged and the credentials will not be removed.
```
{
  "Operations":[{
    "op":"replace",
    "value":{
      "active":false
    }
  }]
}
```

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#update-an-attribute-for-a-scim-enterprise-user>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminUpdateAttributeForEnterpriseUser(ctx, operations.EnterpriseAdminUpdateAttributeForEnterpriseUserRequest{
        PatchSchema: shared.PatchSchema{
            Operations: []shared.PatchSchemaOperations{
                shared.PatchSchemaOperations{
                    Op: shared.PatchSchemaOperationsOpEnumReplace,
                    Path: sdk.String("dolorem"),
                    Value: sdk.String("fugit"),
                },
                shared.PatchSchemaOperations{
                    Op: shared.PatchSchemaOperationsOpEnumRemove,
                    Path: sdk.String("fuga"),
                    Value: sdk.String("ratione"),
                },
                shared.PatchSchemaOperations{
                    Op: shared.PatchSchemaOperationsOpEnumReplace,
                    Path: sdk.String("necessitatibus"),
                    Value: sdk.String("nulla"),
                },
                shared.PatchSchemaOperations{
                    Op: shared.PatchSchemaOperationsOpEnumAdd,
                    Path: sdk.String("quasi"),
                    Value: sdk.String("et"),
                },
            },
            Schemas: []shared.PatchSchemaSchemasEnum{
                shared.PatchSchemaSchemasEnumUrnIetfParamsScimAPIMessages20PatchOp,
                shared.PatchSchemaSchemasEnumUrnIetfParamsScimAPIMessages20PatchOp,
            },
        },
        ScimUserID: "natus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ScimEnterpriseUserResponse != nil {
        // handle response
    }
}
```

## EnterpriseAdminUpdateGlobalWebhook

Parameters that are not provided will be overwritten with the default value or removed if no default exists.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#update-a-global-webhook>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminUpdateGlobalWebhook(ctx, operations.EnterpriseAdminUpdateGlobalWebhookRequest{
        RequestBody: operations.EnterpriseAdminUpdateGlobalWebhookRequestBody{
            Active: sdk.Bool(false),
            Config: &operations.EnterpriseAdminUpdateGlobalWebhookRequestBodyConfig{
                ContentType: sdk.String("occaecati"),
                InsecureSsl: sdk.String("suscipit"),
                Secret: sdk.String("adipisci"),
                URL: "quasi",
            },
            Events: []string{
                "doloribus",
            },
        },
        HookID: 859581,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GlobalHook2 != nil {
        // handle response
    }
}
```

## EnterpriseAdminUpdateLdapMappingForTeam

Updates the [distinguished name](https://www.ldap.com/ldap-dns-and-rdns) (DN) of the LDAP entry to map to a team. [LDAP synchronization](https://docs.github.com/enterprise-server@3.7/admin/identity-and-access-management/using-ldap-for-enterprise-iam/using-ldap#enabling-ldap-sync) must be enabled to map LDAP entries to a team. Use the [Create a team](https://docs.github.com/enterprise-server@3.7/rest/reference/teams/#create-a-team) endpoint to create a team with LDAP mapping.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#update-ldap-mapping-for-a-team>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminUpdateLdapMappingForTeam(ctx, operations.EnterpriseAdminUpdateLdapMappingForTeamRequest{
        RequestBody: operations.EnterpriseAdminUpdateLdapMappingForTeamRequestBody{
            LdapDn: "necessitatibus",
        },
        TeamID: 58534,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LdapMappingTeam != nil {
        // handle response
    }
}
```

## EnterpriseAdminUpdateLdapMappingForUser

Update LDAP mapping for a user

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#update-ldap-mapping-for-a-user>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminUpdateLdapMappingForUser(ctx, operations.EnterpriseAdminUpdateLdapMappingForUserRequest{
        RequestBody: operations.EnterpriseAdminUpdateLdapMappingForUserRequestBody{
            LdapDn: "tempora",
        },
        Username: "Janie47",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LdapMappingUser != nil {
        // handle response
    }
}
```

## EnterpriseAdminUpdateOrgName

Update an organization name

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#update-an-organization-name>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminUpdateOrgName(ctx, operations.EnterpriseAdminUpdateOrgNameRequest{
        RequestBody: operations.EnterpriseAdminUpdateOrgNameRequestBody{
            Login: "esse",
        },
        Org: "praesentium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EnterpriseAdminUpdateOrgName202ApplicationJSONObject != nil {
        // handle response
    }
}
```

## EnterpriseAdminUpdatePreReceiveEnvironment

You cannot modify the default environment. If you attempt to modify the default environment, you will receive a `422 Unprocessable Entity` response.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#update-a-pre-receive-environment>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminUpdatePreReceiveEnvironment(ctx, operations.EnterpriseAdminUpdatePreReceiveEnvironmentRequest{
        RequestBody: &operations.EnterpriseAdminUpdatePreReceiveEnvironmentRequestBody{
            ImageURL: sdk.String("maiores"),
            Name: sdk.String("Ben Bradtke Sr."),
        },
        PreReceiveEnvironmentID: 483706,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreReceiveEnvironment != nil {
        // handle response
    }
}
```

## EnterpriseAdminUpdatePreReceiveHook

Update a pre-receive hook

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#update-a-pre-receive-hook>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminUpdatePreReceiveHook(ctx, operations.EnterpriseAdminUpdatePreReceiveHookRequest{
        RequestBody: &operations.EnterpriseAdminUpdatePreReceiveHookRequestBody{
            AllowDownstreamConfiguration: sdk.Bool(false),
            Enforcement: sdk.String("tempora"),
            Environment: map[string]interface{}{
                "ex": "consectetur",
                "aliquid": "ipsa",
            },
            Name: sdk.String("Ralph Hegmann"),
            Script: sdk.String("aliquid"),
            ScriptRepository: map[string]interface{}{
                "suscipit": "aliquid",
                "perferendis": "eum",
                "voluptas": "iste",
            },
        },
        PreReceiveHookID: 661607,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreReceiveHook != nil {
        // handle response
    }
}
```

## EnterpriseAdminUpdatePreReceiveHookEnforcementForOrg

For pre-receive hooks which are allowed to be configured at the org level, you can set `enforcement` and `allow_downstream_configuration`

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#update-pre-receive-hook-enforcement-for-an-organization>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminUpdatePreReceiveHookEnforcementForOrg(ctx, operations.EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgRequest{
        RequestBody: &operations.EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgRequestBody{
            AllowDownstreamConfiguration: sdk.Bool(false),
            Enforcement: sdk.String("ab"),
        },
        Org: "error",
        PreReceiveHookID: 822407,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrgPreReceiveHook != nil {
        // handle response
    }
}
```

## EnterpriseAdminUpdatePreReceiveHookEnforcementForRepo

For pre-receive hooks which are allowed to be configured at the repo level, you can set `enforcement`

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#update-pre-receive-hook-enforcement-for-a-repository>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminUpdatePreReceiveHookEnforcementForRepo(ctx, operations.EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoRequest{
        RequestBody: &operations.EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoRequestBody{
            Enforcement: operations.EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoRequestBodyEnforcementEnumTesting.ToPointer(),
        },
        Owner: "mollitia",
        PreReceiveHookID: 671794,
        Repo: "libero",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RepositoryPreReceiveHook != nil {
        // handle response
    }
}
```

## EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterprise

Updates the `name` and `visibility` of a self-hosted runner group in an enterprise.

You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/actions#update-a-self-hosted-runner-group-for-an-enterprise>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterprise(ctx, operations.EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseRequest{
        RequestBody: &operations.EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseRequestBody{
            AllowsPublicRepositories: sdk.Bool(false),
            Name: sdk.String("Dr. Cassandra Halvorson"),
            RestrictedToWorkflows: sdk.Bool(false),
            SelectedWorkflows: []string{
                "octo-org/octo-repo/.github/workflows/deploy.yaml@main",
                "octo-org/octo-repo/.github/workflows/deploy.yaml@main",
                "octo-org/octo-repo/.github/workflows/deploy.yaml@main",
                "octo-org/octo-repo/.github/workflows/deploy.yaml@main",
            },
            Visibility: operations.EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseRequestBodyVisibilityEnumSelected.ToPointer(),
        },
        Enterprise: "ut",
        RunnerGroupID: 321043,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RunnerGroupsEnterprise != nil {
        // handle response
    }
}
```

## EnterpriseAdminUpdateUsernameForUser

Update the username for a user

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#update-the-username-for-a-user>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminUpdateUsernameForUser(ctx, operations.EnterpriseAdminUpdateUsernameForUserRequest{
        RequestBody: operations.EnterpriseAdminUpdateUsernameForUserRequestBody{
            Login: "expedita",
        },
        Username: "Alexa.MacGyver10",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EnterpriseAdminUpdateUsernameForUser202ApplicationJSONObject != nil {
        // handle response
    }
}
```

## EnterpriseAdminUpgradeLicense

This API upgrades your license and also triggers the configuration process.

**Note:** The request body for this operation must be submitted as `multipart/form-data` data. You can can reference the license file by prefixing the filename with the `@` symbol using `curl`. For more information, see the [`curl` documentation](https://curl.se/docs/manpage.html#-F).

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/enterprise-admin#upgrade-a-license>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnterpriseAdmin.EnterpriseAdminUpgradeLicense(ctx, operations.EnterpriseAdminUpgradeLicenseRequestBody{
        License: sdk.String("voluptatum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
