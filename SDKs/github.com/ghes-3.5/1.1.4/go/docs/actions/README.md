# Actions

## Overview

Endpoints to manage GitHub Actions using the REST API.

### Available Operations

* [ActionsAddCustomLabelsToSelfHostedRunnerForOrg](#actionsaddcustomlabelstoselfhostedrunnerfororg) - Add custom labels to a self-hosted runner for an organization
* [ActionsAddCustomLabelsToSelfHostedRunnerForRepo](#actionsaddcustomlabelstoselfhostedrunnerforrepo) - Add custom labels to a self-hosted runner for a repository
* [ActionsAddRepoAccessToSelfHostedRunnerGroupInOrg](#actionsaddrepoaccesstoselfhostedrunnergroupinorg) - Add repository access to a self-hosted runner group in an organization
* [ActionsAddSelectedRepoToOrgSecret](#actionsaddselectedrepotoorgsecret) - Add selected repository to an organization secret
* [ActionsAddSelfHostedRunnerToGroupForOrg](#actionsaddselfhostedrunnertogroupfororg) - Add a self-hosted runner to a group for an organization
* [ActionsCancelWorkflowRun](#actionscancelworkflowrun) - Cancel a workflow run
* [ActionsCreateOrUpdateEnvironmentSecret](#actionscreateorupdateenvironmentsecret) - Create or update an environment secret
* [ActionsCreateOrUpdateOrgSecret](#actionscreateorupdateorgsecret) - Create or update an organization secret
* [ActionsCreateOrUpdateRepoSecret](#actionscreateorupdatereposecret) - Create or update a repository secret
* [ActionsCreateRegistrationTokenForOrg](#actionscreateregistrationtokenfororg) - Create a registration token for an organization
* [ActionsCreateRegistrationTokenForRepo](#actionscreateregistrationtokenforrepo) - Create a registration token for a repository
* [ActionsCreateRemoveTokenForOrg](#actionscreateremovetokenfororg) - Create a remove token for an organization
* [ActionsCreateRemoveTokenForRepo](#actionscreateremovetokenforrepo) - Create a remove token for a repository
* [ActionsCreateSelfHostedRunnerGroupForOrg](#actionscreateselfhostedrunnergroupfororg) - Create a self-hosted runner group for an organization
* [ActionsCreateWorkflowDispatch](#actionscreateworkflowdispatch) - Create a workflow dispatch event
* [ActionsDeleteArtifact](#actionsdeleteartifact) - Delete an artifact
* [ActionsDeleteEnvironmentSecret](#actionsdeleteenvironmentsecret) - Delete an environment secret
* [ActionsDeleteOrgSecret](#actionsdeleteorgsecret) - Delete an organization secret
* [ActionsDeleteRepoSecret](#actionsdeletereposecret) - Delete a repository secret
* [ActionsDeleteSelfHostedRunnerFromOrg](#actionsdeleteselfhostedrunnerfromorg) - Delete a self-hosted runner from an organization
* [ActionsDeleteSelfHostedRunnerFromRepo](#actionsdeleteselfhostedrunnerfromrepo) - Delete a self-hosted runner from a repository
* [ActionsDeleteSelfHostedRunnerGroupFromOrg](#actionsdeleteselfhostedrunnergroupfromorg) - Delete a self-hosted runner group from an organization
* [ActionsDeleteWorkflowRun](#actionsdeleteworkflowrun) - Delete a workflow run
* [ActionsDeleteWorkflowRunLogs](#actionsdeleteworkflowrunlogs) - Delete workflow run logs
* [ActionsDisableSelectedRepositoryGithubActionsOrganization](#actionsdisableselectedrepositorygithubactionsorganization) - Disable a selected repository for GitHub Actions in an organization
* [ActionsDisableWorkflow](#actionsdisableworkflow) - Disable a workflow
* [ActionsDownloadArtifact](#actionsdownloadartifact) - Download an artifact
* [ActionsDownloadJobLogsForWorkflowRun](#actionsdownloadjoblogsforworkflowrun) - Download job logs for a workflow run
* [ActionsDownloadWorkflowRunAttemptLogs](#actionsdownloadworkflowrunattemptlogs) - Download workflow run attempt logs
* [ActionsDownloadWorkflowRunLogs](#actionsdownloadworkflowrunlogs) - Download workflow run logs
* [ActionsEnableSelectedRepositoryGithubActionsOrganization](#actionsenableselectedrepositorygithubactionsorganization) - Enable a selected repository for GitHub Actions in an organization
* [ActionsEnableWorkflow](#actionsenableworkflow) - Enable a workflow
* [ActionsGetActionsCacheUsage](#actionsgetactionscacheusage) - Get GitHub Actions cache usage for a repository
* [ActionsGetActionsCacheUsageByRepoForOrg](#actionsgetactionscacheusagebyrepofororg) - List repositories with GitHub Actions cache usage for an organization
* [ActionsGetActionsCacheUsageForEnterprise](#actionsgetactionscacheusageforenterprise) - Get GitHub Actions cache usage for an enterprise
* [ActionsGetActionsCacheUsageForOrg](#actionsgetactionscacheusagefororg) - Get GitHub Actions cache usage for an organization
* [ActionsGetActionsCacheUsagePolicy](#actionsgetactionscacheusagepolicy) - Get GitHub Actions cache usage policy for a repository
* [ActionsGetActionsCacheUsagePolicyForEnterprise](#actionsgetactionscacheusagepolicyforenterprise) - Get GitHub Actions cache usage policy for an enterprise
* [ActionsGetAllowedActionsOrganization](#actionsgetallowedactionsorganization) - Get allowed actions for an organization
* [ActionsGetAllowedActionsRepository](#actionsgetallowedactionsrepository) - Get allowed actions for a repository
* [ActionsGetArtifact](#actionsgetartifact) - Get an artifact
* [ActionsGetEnvironmentPublicKey](#actionsgetenvironmentpublickey) - Get an environment public key
* [ActionsGetEnvironmentSecret](#actionsgetenvironmentsecret) - Get an environment secret
* [ActionsGetGithubActionsDefaultWorkflowPermissionsOrganization](#actionsgetgithubactionsdefaultworkflowpermissionsorganization) - Get default workflow permissions for an organization
* [ActionsGetGithubActionsPermissionsOrganization](#actionsgetgithubactionspermissionsorganization) - Get GitHub Actions permissions for an organization
* [ActionsGetGithubActionsPermissionsRepository](#actionsgetgithubactionspermissionsrepository) - Get GitHub Actions permissions for a repository
* [ActionsGetJobForWorkflowRun](#actionsgetjobforworkflowrun) - Get a job for a workflow run
* [ActionsGetOrgPublicKey](#actionsgetorgpublickey) - Get an organization public key
* [ActionsGetOrgSecret](#actionsgetorgsecret) - Get an organization secret
* [ActionsGetPendingDeploymentsForRun](#actionsgetpendingdeploymentsforrun) - Get pending deployments for a workflow run
* [ActionsGetRepoPublicKey](#actionsgetrepopublickey) - Get a repository public key
* [ActionsGetRepoSecret](#actionsgetreposecret) - Get a repository secret
* [ActionsGetReviewsForRun](#actionsgetreviewsforrun) - Get the review history for a workflow run
* [ActionsGetSelfHostedRunnerForOrg](#actionsgetselfhostedrunnerfororg) - Get a self-hosted runner for an organization
* [ActionsGetSelfHostedRunnerForRepo](#actionsgetselfhostedrunnerforrepo) - Get a self-hosted runner for a repository
* [ActionsGetSelfHostedRunnerGroupForOrg](#actionsgetselfhostedrunnergroupfororg) - Get a self-hosted runner group for an organization
* [ActionsGetWorkflow](#actionsgetworkflow) - Get a workflow
* [ActionsGetWorkflowAccessToRepository](#actionsgetworkflowaccesstorepository) - Get the level of access for workflows outside of the repository
* [ActionsGetWorkflowRun](#actionsgetworkflowrun) - Get a workflow run
* [ActionsGetWorkflowRunAttempt](#actionsgetworkflowrunattempt) - Get a workflow run attempt
* [ActionsListArtifactsForRepo](#actionslistartifactsforrepo) - List artifacts for a repository
* [ActionsListEnvironmentSecrets](#actionslistenvironmentsecrets) - List environment secrets
* [ActionsListJobsForWorkflowRun](#actionslistjobsforworkflowrun) - List jobs for a workflow run
* [ActionsListJobsForWorkflowRunAttempt](#actionslistjobsforworkflowrunattempt) - List jobs for a workflow run attempt
* [ActionsListLabelsForSelfHostedRunnerForOrg](#actionslistlabelsforselfhostedrunnerfororg) - List labels for a self-hosted runner for an organization
* [ActionsListLabelsForSelfHostedRunnerForRepo](#actionslistlabelsforselfhostedrunnerforrepo) - List labels for a self-hosted runner for a repository
* [ActionsListOrgSecrets](#actionslistorgsecrets) - List organization secrets
* [ActionsListRepoAccessToSelfHostedRunnerGroupInOrg](#actionslistrepoaccesstoselfhostedrunnergroupinorg) - List repository access to a self-hosted runner group in an organization
* [ActionsListRepoSecrets](#actionslistreposecrets) - List repository secrets
* [ActionsListRepoWorkflows](#actionslistrepoworkflows) - List repository workflows
* [ActionsListRunnerApplicationsForOrg](#actionslistrunnerapplicationsfororg) - List runner applications for an organization
* [ActionsListRunnerApplicationsForRepo](#actionslistrunnerapplicationsforrepo) - List runner applications for a repository
* [ActionsListSelectedReposForOrgSecret](#actionslistselectedreposfororgsecret) - List selected repositories for an organization secret
* [ActionsListSelectedRepositoriesEnabledGithubActionsOrganization](#actionslistselectedrepositoriesenabledgithubactionsorganization) - List selected repositories enabled for GitHub Actions in an organization
* [ActionsListSelfHostedRunnerGroupsForOrg](#actionslistselfhostedrunnergroupsfororg) - List self-hosted runner groups for an organization
* [ActionsListSelfHostedRunnersForOrg](#actionslistselfhostedrunnersfororg) - List self-hosted runners for an organization
* [ActionsListSelfHostedRunnersForRepo](#actionslistselfhostedrunnersforrepo) - List self-hosted runners for a repository
* [ActionsListSelfHostedRunnersInGroupForOrg](#actionslistselfhostedrunnersingroupfororg) - List self-hosted runners in a group for an organization
* [ActionsListWorkflowRunArtifacts](#actionslistworkflowrunartifacts) - List workflow run artifacts
* [ActionsListWorkflowRuns](#actionslistworkflowruns) - List workflow runs for a workflow
* [ActionsListWorkflowRunsForRepo](#actionslistworkflowrunsforrepo) - List workflow runs for a repository
* [ActionsReRunJobForWorkflowRun](#actionsrerunjobforworkflowrun) - Re-run a job from a workflow run
* [ActionsReRunWorkflow](#actionsrerunworkflow) - Re-run a workflow
* [ActionsReRunWorkflowFailedJobs](#actionsrerunworkflowfailedjobs) - Re-run failed jobs from a workflow run
* [ActionsRemoveAllCustomLabelsFromSelfHostedRunnerForOrg](#actionsremoveallcustomlabelsfromselfhostedrunnerfororg) - Remove all custom labels from a self-hosted runner for an organization
* [ActionsRemoveAllCustomLabelsFromSelfHostedRunnerForRepo](#actionsremoveallcustomlabelsfromselfhostedrunnerforrepo) - Remove all custom labels from a self-hosted runner for a repository
* [ActionsRemoveCustomLabelFromSelfHostedRunnerForOrg](#actionsremovecustomlabelfromselfhostedrunnerfororg) - Remove a custom label from a self-hosted runner for an organization
* [ActionsRemoveCustomLabelFromSelfHostedRunnerForRepo](#actionsremovecustomlabelfromselfhostedrunnerforrepo) - Remove a custom label from a self-hosted runner for a repository
* [ActionsRemoveRepoAccessToSelfHostedRunnerGroupInOrg](#actionsremoverepoaccesstoselfhostedrunnergroupinorg) - Remove repository access to a self-hosted runner group in an organization
* [ActionsRemoveSelectedRepoFromOrgSecret](#actionsremoveselectedrepofromorgsecret) - Remove selected repository from an organization secret
* [ActionsRemoveSelfHostedRunnerFromGroupForOrg](#actionsremoveselfhostedrunnerfromgroupfororg) - Remove a self-hosted runner from a group for an organization
* [ActionsReviewPendingDeploymentsForRun](#actionsreviewpendingdeploymentsforrun) - Review pending deployments for a workflow run
* [ActionsSetActionsCacheUsagePolicy](#actionssetactionscacheusagepolicy) - Set GitHub Actions cache usage policy for a repository
* [ActionsSetActionsCacheUsagePolicyForEnterprise](#actionssetactionscacheusagepolicyforenterprise) - Set GitHub Actions cache usage policy for an enterprise
* [ActionsSetAllowedActionsOrganization](#actionssetallowedactionsorganization) - Set allowed actions for an organization
* [ActionsSetAllowedActionsRepository](#actionssetallowedactionsrepository) - Set allowed actions for a repository
* [ActionsSetCustomLabelsForSelfHostedRunnerForOrg](#actionssetcustomlabelsforselfhostedrunnerfororg) - Set custom labels for a self-hosted runner for an organization
* [ActionsSetCustomLabelsForSelfHostedRunnerForRepo](#actionssetcustomlabelsforselfhostedrunnerforrepo) - Set custom labels for a self-hosted runner for a repository
* [ActionsSetGithubActionsDefaultWorkflowPermissionsOrganization](#actionssetgithubactionsdefaultworkflowpermissionsorganization) - Set default workflow permissions for an organization
* [ActionsSetGithubActionsPermissionsOrganization](#actionssetgithubactionspermissionsorganization) - Set GitHub Actions permissions for an organization
* [ActionsSetGithubActionsPermissionsRepository](#actionssetgithubactionspermissionsrepository) - Set GitHub Actions permissions for a repository
* [ActionsSetRepoAccessToSelfHostedRunnerGroupInOrg](#actionssetrepoaccesstoselfhostedrunnergroupinorg) - Set repository access for a self-hosted runner group in an organization
* [ActionsSetSelectedReposForOrgSecret](#actionssetselectedreposfororgsecret) - Set selected repositories for an organization secret
* [ActionsSetSelectedRepositoriesEnabledGithubActionsOrganization](#actionssetselectedrepositoriesenabledgithubactionsorganization) - Set selected repositories enabled for GitHub Actions in an organization
* [ActionsSetSelfHostedRunnersInGroupForOrg](#actionssetselfhostedrunnersingroupfororg) - Set self-hosted runners in a group for an organization
* [ActionsSetWorkflowAccessToRepository](#actionssetworkflowaccesstorepository) - Set the level of access for workflows outside of the repository
* [ActionsUpdateSelfHostedRunnerGroupForOrg](#actionsupdateselfhostedrunnergroupfororg) - Update a self-hosted runner group for an organization

## ActionsAddCustomLabelsToSelfHostedRunnerForOrg

Add custom labels to a self-hosted runner configured in an organization.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#add-custom-labels-to-a-self-hosted-runner-for-an-organization>

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
    res, err := s.Actions.ActionsAddCustomLabelsToSelfHostedRunnerForOrg(ctx, operations.ActionsAddCustomLabelsToSelfHostedRunnerForOrgRequest{
        RequestBody: operations.ActionsAddCustomLabelsToSelfHostedRunnerForOrgRequestBody{
            Labels: []string{
                "illum",
                "vel",
                "error",
            },
        },
        Org: "deserunt",
        RunnerID: 384382,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsAddCustomLabelsToSelfHostedRunnerForOrg200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ActionsAddCustomLabelsToSelfHostedRunnerForRepo

Add custom labels to a self-hosted runner configured in a repository.

You must authenticate using an access token with the `repo` scope to use this
endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#add-custom-labels-to-a-self-hosted-runner-for-a-repository>

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
    res, err := s.Actions.ActionsAddCustomLabelsToSelfHostedRunnerForRepo(ctx, operations.ActionsAddCustomLabelsToSelfHostedRunnerForRepoRequest{
        RequestBody: operations.ActionsAddCustomLabelsToSelfHostedRunnerForRepoRequestBody{
            Labels: []string{
                "magnam",
                "debitis",
            },
        },
        Owner: "ipsa",
        Repo: "delectus",
        RunnerID: 272656,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsAddCustomLabelsToSelfHostedRunnerForRepo200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ActionsAddRepoAccessToSelfHostedRunnerGroupInOrg

Adds a repository to the list of selected repositories that can access a self-hosted runner group. The runner group must have `visibility` set to `selected`. For more information, see "[Create a self-hosted runner group for an organization](#create-a-self-hosted-runner-group-for-an-organization)."

You must authenticate using an access token with the `admin:org`
scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#add-repository-acess-to-a-self-hosted-runner-group-in-an-organization>

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
    res, err := s.Actions.ActionsAddRepoAccessToSelfHostedRunnerGroupInOrg(ctx, operations.ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgRequest{
        Org: "suscipit",
        RepositoryID: 477665,
        RunnerGroupID: 791725,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ActionsAddSelectedRepoToOrgSecret

Adds a repository to an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://docs.github.com/enterprise-server@3.5/rest/reference/actions#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#add-selected-repository-to-an-organization-secret>

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
    res, err := s.Actions.ActionsAddSelectedRepoToOrgSecret(ctx, operations.ActionsAddSelectedRepoToOrgSecretRequest{
        Org: "placeat",
        RepositoryID: 528895,
        SecretName: "iusto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ActionsAddSelfHostedRunnerToGroupForOrg

Adds a self-hosted runner to a runner group configured in an organization.

You must authenticate using an access token with the `admin:org`
scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#add-a-self-hosted-runner-to-a-group-for-an-organization>

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
    res, err := s.Actions.ActionsAddSelfHostedRunnerToGroupForOrg(ctx, operations.ActionsAddSelfHostedRunnerToGroupForOrgRequest{
        Org: "excepturi",
        RunnerGroupID: 392785,
        RunnerID: 925597,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ActionsCancelWorkflowRun

Cancels a workflow run using its `id`. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#cancel-a-workflow-run>

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
    res, err := s.Actions.ActionsCancelWorkflowRun(ctx, operations.ActionsCancelWorkflowRunRequest{
        Owner: "temporibus",
        Repo: "ab",
        RunID: 337396,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EmptyObject != nil {
        // handle response
    }
}
```

## ActionsCreateOrUpdateEnvironmentSecret

Creates or updates an environment secret with an encrypted value. Encrypt your secret using
[LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages). You must authenticate using an access
token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use
this endpoint.

#### Example encrypting a secret using Node.js

Encrypt your secret using the [libsodium-wrappers](https://www.npmjs.com/package/libsodium-wrappers) library.

```
const sodium = require('libsodium-wrappers')
const secret = 'plain-text-secret' // replace with the secret you want to encrypt
const key = 'base64-encoded-public-key' // replace with the Base64 encoded public key

//Check if libsodium is ready and then proceed.
sodium.ready.then(() => {
  // Convert Secret & Base64 key to Uint8Array.
  let binkey = sodium.from_base64(key, sodium.base64_variants.ORIGINAL)
  let binsec = sodium.from_string(secret)

  //Encrypt the secret using LibSodium
  let encBytes = sodium.crypto_box_seal(binsec, binkey)

  // Convert encrypted Uint8Array to Base64
  let output = sodium.to_base64(encBytes, sodium.base64_variants.ORIGINAL)

  console.log(output)
});
```

#### Example encrypting a secret using Python

Encrypt your secret using [pynacl](https://pynacl.readthedocs.io/en/latest/public/#nacl-public-sealedbox) with Python 3.

```
from base64 import b64encode
from nacl import encoding, public

def encrypt(public_key: str, secret_value: str) -> str:
  """Encrypt a Unicode string using the public key."""
  public_key = public.PublicKey(public_key.encode("utf-8"), encoding.Base64Encoder())
  sealed_box = public.SealedBox(public_key)
  encrypted = sealed_box.encrypt(secret_value.encode("utf-8"))
  return b64encode(encrypted).decode("utf-8")
```

#### Example encrypting a secret using C#

Encrypt your secret using the [Sodium.Core](https://www.nuget.org/packages/Sodium.Core/) package.

```
var secretValue = System.Text.Encoding.UTF8.GetBytes("mySecret");
var publicKey = Convert.FromBase64String("2Sg8iYjAxxmI2LvUXpJjkYrMxURPc8r+dB7TJyvvcCU=");

var sealedPublicKeyBox = Sodium.SealedPublicKeyBox.Create(secretValue, publicKey);

Console.WriteLine(Convert.ToBase64String(sealedPublicKeyBox));
```

#### Example encrypting a secret using Ruby

Encrypt your secret using the [rbnacl](https://github.com/RubyCrypto/rbnacl) gem.

```ruby
require "rbnacl"
require "base64"

key = Base64.decode64("+ZYvJDZMHUfBkJdyq5Zm9SKqeuBQ4sj+6sfjlH4CgG0=")
public_key = RbNaCl::PublicKey.new(key)

box = RbNaCl::Boxes::Sealed.from_public_key(public_key)
encrypted_secret = box.encrypt("my_secret")

# Print the base64 encoded secret
puts Base64.strict_encode64(encrypted_secret)
```

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#create-or-update-an-environment-secret>

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
    res, err := s.Actions.ActionsCreateOrUpdateEnvironmentSecret(ctx, operations.ActionsCreateOrUpdateEnvironmentSecretRequest{
        RequestBody: operations.ActionsCreateOrUpdateEnvironmentSecretRequestBody{
            EncryptedValue: "veritatis",
            KeyID: "deserunt",
        },
        EnvironmentName: "perferendis",
        RepositoryID: 368241,
        SecretName: "repellendus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EmptyObject != nil {
        // handle response
    }
}
```

## ActionsCreateOrUpdateOrgSecret

Creates or updates an organization secret with an encrypted value. Encrypt your secret using
[LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages). You must authenticate using an access
token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to
use this endpoint.

#### Example encrypting a secret using Node.js

Encrypt your secret using the [libsodium-wrappers](https://www.npmjs.com/package/libsodium-wrappers) library.

```
const sodium = require('libsodium-wrappers')
const secret = 'plain-text-secret' // replace with the secret you want to encrypt
const key = 'base64-encoded-public-key' // replace with the Base64 encoded public key

//Check if libsodium is ready and then proceed.
sodium.ready.then(() => {
  // Convert Secret & Base64 key to Uint8Array.
  let binkey = sodium.from_base64(key, sodium.base64_variants.ORIGINAL)
  let binsec = sodium.from_string(secret)

  //Encrypt the secret using LibSodium
  let encBytes = sodium.crypto_box_seal(binsec, binkey)

  // Convert encrypted Uint8Array to Base64
  let output = sodium.to_base64(encBytes, sodium.base64_variants.ORIGINAL)

  console.log(output)
});
```

#### Example encrypting a secret using Python

Encrypt your secret using [pynacl](https://pynacl.readthedocs.io/en/latest/public/#nacl-public-sealedbox) with Python 3.

```
from base64 import b64encode
from nacl import encoding, public

def encrypt(public_key: str, secret_value: str) -> str:
  """Encrypt a Unicode string using the public key."""
  public_key = public.PublicKey(public_key.encode("utf-8"), encoding.Base64Encoder())
  sealed_box = public.SealedBox(public_key)
  encrypted = sealed_box.encrypt(secret_value.encode("utf-8"))
  return b64encode(encrypted).decode("utf-8")
```

#### Example encrypting a secret using C#

Encrypt your secret using the [Sodium.Core](https://www.nuget.org/packages/Sodium.Core/) package.

```
var secretValue = System.Text.Encoding.UTF8.GetBytes("mySecret");
var publicKey = Convert.FromBase64String("2Sg8iYjAxxmI2LvUXpJjkYrMxURPc8r+dB7TJyvvcCU=");

var sealedPublicKeyBox = Sodium.SealedPublicKeyBox.Create(secretValue, publicKey);

Console.WriteLine(Convert.ToBase64String(sealedPublicKeyBox));
```

#### Example encrypting a secret using Ruby

Encrypt your secret using the [rbnacl](https://github.com/RubyCrypto/rbnacl) gem.

```ruby
require "rbnacl"
require "base64"

key = Base64.decode64("+ZYvJDZMHUfBkJdyq5Zm9SKqeuBQ4sj+6sfjlH4CgG0=")
public_key = RbNaCl::PublicKey.new(key)

box = RbNaCl::Boxes::Sealed.from_public_key(public_key)
encrypted_secret = box.encrypt("my_secret")

# Print the base64 encoded secret
puts Base64.strict_encode64(encrypted_secret)
```

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#create-or-update-an-organization-secret>

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
    res, err := s.Actions.ActionsCreateOrUpdateOrgSecret(ctx, operations.ActionsCreateOrUpdateOrgSecretRequest{
        RequestBody: operations.ActionsCreateOrUpdateOrgSecretRequestBody{
            EncryptedValue: sdk.String("sapiente"),
            KeyID: sdk.String("quo"),
            SelectedRepositoryIds: []int64{
                870013,
            },
            Visibility: operations.ActionsCreateOrUpdateOrgSecretRequestBodyVisibilityEnumSelected,
        },
        Org: "maiores",
        SecretName: "molestiae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EmptyObject != nil {
        // handle response
    }
}
```

## ActionsCreateOrUpdateRepoSecret

Creates or updates a repository secret with an encrypted value. Encrypt your secret using
[LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages). You must authenticate using an access
token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use
this endpoint.

#### Example encrypting a secret using Node.js

Encrypt your secret using the [libsodium-wrappers](https://www.npmjs.com/package/libsodium-wrappers) library.

```
const sodium = require('libsodium-wrappers')
const secret = 'plain-text-secret' // replace with the secret you want to encrypt
const key = 'base64-encoded-public-key' // replace with the Base64 encoded public key

//Check if libsodium is ready and then proceed.
sodium.ready.then(() => {
  // Convert Secret & Base64 key to Uint8Array.
  let binkey = sodium.from_base64(key, sodium.base64_variants.ORIGINAL)
  let binsec = sodium.from_string(secret)

  //Encrypt the secret using LibSodium
  let encBytes = sodium.crypto_box_seal(binsec, binkey)

  // Convert encrypted Uint8Array to Base64
  let output = sodium.to_base64(encBytes, sodium.base64_variants.ORIGINAL)

  console.log(output)
});
```

#### Example encrypting a secret using Python

Encrypt your secret using [pynacl](https://pynacl.readthedocs.io/en/latest/public/#nacl-public-sealedbox) with Python 3.

```
from base64 import b64encode
from nacl import encoding, public

def encrypt(public_key: str, secret_value: str) -> str:
  """Encrypt a Unicode string using the public key."""
  public_key = public.PublicKey(public_key.encode("utf-8"), encoding.Base64Encoder())
  sealed_box = public.SealedBox(public_key)
  encrypted = sealed_box.encrypt(secret_value.encode("utf-8"))
  return b64encode(encrypted).decode("utf-8")
```

#### Example encrypting a secret using C#

Encrypt your secret using the [Sodium.Core](https://www.nuget.org/packages/Sodium.Core/) package.

```
var secretValue = System.Text.Encoding.UTF8.GetBytes("mySecret");
var publicKey = Convert.FromBase64String("2Sg8iYjAxxmI2LvUXpJjkYrMxURPc8r+dB7TJyvvcCU=");

var sealedPublicKeyBox = Sodium.SealedPublicKeyBox.Create(secretValue, publicKey);

Console.WriteLine(Convert.ToBase64String(sealedPublicKeyBox));
```

#### Example encrypting a secret using Ruby

Encrypt your secret using the [rbnacl](https://github.com/RubyCrypto/rbnacl) gem.

```ruby
require "rbnacl"
require "base64"

key = Base64.decode64("+ZYvJDZMHUfBkJdyq5Zm9SKqeuBQ4sj+6sfjlH4CgG0=")
public_key = RbNaCl::PublicKey.new(key)

box = RbNaCl::Boxes::Sealed.from_public_key(public_key)
encrypted_secret = box.encrypt("my_secret")

# Print the base64 encoded secret
puts Base64.strict_encode64(encrypted_secret)
```

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#create-or-update-a-repository-secret>

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
    res, err := s.Actions.ActionsCreateOrUpdateRepoSecret(ctx, operations.ActionsCreateOrUpdateRepoSecretRequest{
        RequestBody: operations.ActionsCreateOrUpdateRepoSecretRequestBody{
            EncryptedValue: sdk.String("quod"),
            KeyID: sdk.String("quod"),
        },
        Owner: "esse",
        Repo: "totam",
        SecretName: "porro",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EmptyObject != nil {
        // handle response
    }
}
```

## ActionsCreateRegistrationTokenForOrg

Returns a token that you can pass to the `config` script. The token expires after one hour.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

#### Example using registration token

Configure your self-hosted runner, replacing `TOKEN` with the registration token provided by this endpoint.

```
./config.sh --url https://github.com/octo-org --token TOKEN
```

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#create-a-registration-token-for-an-organization>

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
    res, err := s.Actions.ActionsCreateRegistrationTokenForOrg(ctx, operations.ActionsCreateRegistrationTokenForOrgRequest{
        Org: "dolorum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AuthenticationToken != nil {
        // handle response
    }
}
```

## ActionsCreateRegistrationTokenForRepo

Returns a token that you can pass to the `config` script. The token expires after one hour. You must authenticate
using an access token with the `repo` scope to use this endpoint.

#### Example using registration token
 
Configure your self-hosted runner, replacing `TOKEN` with the registration token provided by this endpoint.

```
./config.sh --url https://github.com/octo-org/octo-repo-artifacts --token TOKEN
```

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#create-a-registration-token-for-a-repository>

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
    res, err := s.Actions.ActionsCreateRegistrationTokenForRepo(ctx, operations.ActionsCreateRegistrationTokenForRepoRequest{
        Owner: "dicta",
        Repo: "nam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AuthenticationToken != nil {
        // handle response
    }
}
```

## ActionsCreateRemoveTokenForOrg

Returns a token that you can pass to the `config` script to remove a self-hosted runner from an organization. The token expires after one hour.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

#### Example using remove token

To remove your self-hosted runner from an organization, replace `TOKEN` with the remove token provided by this
endpoint.

```
./config.sh remove --token TOKEN
```

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#create-a-remove-token-for-an-organization>

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
    res, err := s.Actions.ActionsCreateRemoveTokenForOrg(ctx, operations.ActionsCreateRemoveTokenForOrgRequest{
        Org: "officia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AuthenticationToken != nil {
        // handle response
    }
}
```

## ActionsCreateRemoveTokenForRepo

Returns a token that you can pass to remove a self-hosted runner from a repository. The token expires after one hour.
You must authenticate using an access token with the `repo` scope to use this endpoint.

#### Example using remove token
 
To remove your self-hosted runner from a repository, replace TOKEN with the remove token provided by this endpoint.

```
./config.sh remove --token TOKEN
```

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#create-a-remove-token-for-a-repository>

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
    res, err := s.Actions.ActionsCreateRemoveTokenForRepo(ctx, operations.ActionsCreateRemoveTokenForRepoRequest{
        Owner: "occaecati",
        Repo: "fugit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AuthenticationToken != nil {
        // handle response
    }
}
```

## ActionsCreateSelfHostedRunnerGroupForOrg

Creates a new self-hosted runner group for an organization.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#create-a-self-hosted-runner-group-for-an-organization>

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
    res, err := s.Actions.ActionsCreateSelfHostedRunnerGroupForOrg(ctx, operations.ActionsCreateSelfHostedRunnerGroupForOrgRequest{
        RequestBody: operations.ActionsCreateSelfHostedRunnerGroupForOrgRequestBody{
            AllowsPublicRepositories: sdk.Bool(false),
            Name: "Irvin Rosenbaum III",
            RestrictedToWorkflows: sdk.Bool(false),
            Runners: []int64{
                264555,
                186332,
            },
            SelectedRepositoryIds: []int64{
                736918,
                456150,
                216550,
                568434,
            },
            SelectedWorkflows: []string{
                "octo-org/octo-repo/.github/workflows/deploy.yaml@main",
            },
            Visibility: operations.ActionsCreateSelfHostedRunnerGroupForOrgRequestBodyVisibilityEnumSelected.ToPointer(),
        },
        Org: "ad",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RunnerGroupsOrg != nil {
        // handle response
    }
}
```

## ActionsCreateWorkflowDispatch

You can use this endpoint to manually trigger a GitHub Actions workflow run. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`.

You must configure your GitHub Actions workflow to run when the [`workflow_dispatch` webhook](/developers/webhooks-and-events/webhook-events-and-payloads#workflow_dispatch) event occurs. The `inputs` are configured in the workflow file. For more information about how to configure the `workflow_dispatch` event in the workflow file, see "[Events that trigger workflows](/actions/reference/events-that-trigger-workflows#workflow_dispatch)."

You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint. For more information, see "[Creating a personal access token for the command line](https://docs.github.com/enterprise-server@3.5/articles/creating-a-personal-access-token-for-the-command-line)."

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#create-a-workflow-dispatch-event>

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
    res, err := s.Actions.ActionsCreateWorkflowDispatch(ctx, operations.ActionsCreateWorkflowDispatchRequest{
        RequestBody: operations.ActionsCreateWorkflowDispatchRequestBody{
            Inputs: map[string]string{
                "sed": "iste",
                "dolor": "natus",
                "laboriosam": "hic",
            },
            Ref: "saepe",
        },
        Owner: "fuga",
        Repo: "in",
        WorkflowID: shared.WorkflowID{},
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ActionsDeleteArtifact

Deletes an artifact for a workflow run. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#delete-an-artifact>

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
    res, err := s.Actions.ActionsDeleteArtifact(ctx, operations.ActionsDeleteArtifactRequest{
        ArtifactID: 359508,
        Owner: "iste",
        Repo: "iure",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ActionsDeleteEnvironmentSecret

Deletes a secret in an environment using the secret name. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#delete-an-environment-secret>

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
    res, err := s.Actions.ActionsDeleteEnvironmentSecret(ctx, operations.ActionsDeleteEnvironmentSecretRequest{
        EnvironmentName: "saepe",
        RepositoryID: 697631,
        SecretName: "architecto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ActionsDeleteOrgSecret

Deletes a secret in an organization using the secret name. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#delete-an-organization-secret>

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
    res, err := s.Actions.ActionsDeleteOrgSecret(ctx, operations.ActionsDeleteOrgSecretRequest{
        Org: "ipsa",
        SecretName: "reiciendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ActionsDeleteRepoSecret

Deletes a secret in a repository using the secret name. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#delete-a-repository-secret>

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
    res, err := s.Actions.ActionsDeleteRepoSecret(ctx, operations.ActionsDeleteRepoSecretRequest{
        Owner: "est",
        Repo: "mollitia",
        SecretName: "laborum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ActionsDeleteSelfHostedRunnerFromOrg

Forces the removal of a self-hosted runner from an organization. You can use this endpoint to completely remove the runner when the machine you were using no longer exists.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#delete-a-self-hosted-runner-from-an-organization>

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
    res, err := s.Actions.ActionsDeleteSelfHostedRunnerFromOrg(ctx, operations.ActionsDeleteSelfHostedRunnerFromOrgRequest{
        Org: "dolores",
        RunnerID: 210382,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ActionsDeleteSelfHostedRunnerFromRepo

Forces the removal of a self-hosted runner from a repository. You can use this endpoint to completely remove the runner when the machine you were using no longer exists.

You must authenticate using an access token with the `repo`
scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#delete-a-self-hosted-runner-from-a-repository>

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
    res, err := s.Actions.ActionsDeleteSelfHostedRunnerFromRepo(ctx, operations.ActionsDeleteSelfHostedRunnerFromRepoRequest{
        Owner: "corporis",
        Repo: "explicabo",
        RunnerID: 750686,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ActionsDeleteSelfHostedRunnerGroupFromOrg

Deletes a self-hosted runner group for an organization.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#delete-a-self-hosted-runner-group-from-an-organization>

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
    res, err := s.Actions.ActionsDeleteSelfHostedRunnerGroupFromOrg(ctx, operations.ActionsDeleteSelfHostedRunnerGroupFromOrgRequest{
        Org: "enim",
        RunnerGroupID: 607831,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ActionsDeleteWorkflowRun

Delete a specific workflow run. Anyone with write access to the repository can use this endpoint. If the repository is
private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:write` permission to use
this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#delete-a-workflow-run>

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
    res, err := s.Actions.ActionsDeleteWorkflowRun(ctx, operations.ActionsDeleteWorkflowRunRequest{
        Owner: "nemo",
        Repo: "minima",
        RunID: 570197,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ActionsDeleteWorkflowRunLogs

Deletes all logs for a workflow run. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#delete-workflow-run-logs>

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
    res, err := s.Actions.ActionsDeleteWorkflowRunLogs(ctx, operations.ActionsDeleteWorkflowRunLogsRequest{
        Owner: "accusantium",
        Repo: "iure",
        RunID: 634274,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ActionsDisableSelectedRepositoryGithubActionsOrganization

Removes a repository from the list of selected repositories that are enabled for GitHub Actions in an organization. To use this endpoint, the organization permission policy for `enabled_repositories` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an organization](#set-github-actions-permissions-for-an-organization)."

You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#disable-a-selected-repository-for-github-actions-in-an-organization>

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
    res, err := s.Actions.ActionsDisableSelectedRepositoryGithubActionsOrganization(ctx, operations.ActionsDisableSelectedRepositoryGithubActionsOrganizationRequest{
        Org: "doloribus",
        RepositoryID: 958950,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ActionsDisableWorkflow

Disables a workflow and sets the `state` of the workflow to `disabled_manually`. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`.

You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#disable-a-workflow>

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
    res, err := s.Actions.ActionsDisableWorkflow(ctx, operations.ActionsDisableWorkflowRequest{
        Owner: "architecto",
        Repo: "mollitia",
        WorkflowID: shared.WorkflowID{},
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ActionsDownloadArtifact

Gets a redirect URL to download an archive for a repository. This URL expires after 1 minute. Look for `Location:` in
the response header to find the URL for the download. The `:archive_format` must be `zip`. Anyone with read access to
the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope.
GitHub Apps must have the `actions:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#download-an-artifact>

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
    res, err := s.Actions.ActionsDownloadArtifact(ctx, operations.ActionsDownloadArtifactRequest{
        ArchiveFormat: "dolorem",
        ArtifactID: 635059,
        Owner: "consequuntur",
        Repo: "repellat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ActionsDownloadJobLogsForWorkflowRun

Gets a redirect URL to download a plain text file of logs for a workflow job. This link expires after 1 minute. Look
for `Location:` in the response header to find the URL for the download. Anyone with read access to the repository can
use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must
have the `actions:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#download-job-logs-for-a-workflow-run>

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
    res, err := s.Actions.ActionsDownloadJobLogsForWorkflowRun(ctx, operations.ActionsDownloadJobLogsForWorkflowRunRequest{
        JobID: 653108,
        Owner: "occaecati",
        Repo: "numquam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ActionsDownloadWorkflowRunAttemptLogs

Gets a redirect URL to download an archive of log files for a specific workflow run attempt. This link expires after
1 minute. Look for `Location:` in the response header to find the URL for the download. Anyone with read access to
the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope.
GitHub Apps must have the `actions:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#download-workflow-run-attempt-logs>

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
    res, err := s.Actions.ActionsDownloadWorkflowRunAttemptLogs(ctx, operations.ActionsDownloadWorkflowRunAttemptLogsRequest{
        AttemptNumber: 414369,
        Owner: "quam",
        Repo: "molestiae",
        RunID: 244425,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ActionsDownloadWorkflowRunLogs

Gets a redirect URL to download an archive of log files for a workflow run. This link expires after 1 minute. Look for
`Location:` in the response header to find the URL for the download. Anyone with read access to the repository can use
this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have
the `actions:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#download-workflow-run-logs>

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
    res, err := s.Actions.ActionsDownloadWorkflowRunLogs(ctx, operations.ActionsDownloadWorkflowRunLogsRequest{
        Owner: "error",
        Repo: "quia",
        RunID: 338007,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ActionsEnableSelectedRepositoryGithubActionsOrganization

Adds a repository to the list of selected repositories that are enabled for GitHub Actions in an organization. To use this endpoint, the organization permission policy for `enabled_repositories` must be must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an organization](#set-github-actions-permissions-for-an-organization)."

You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#enable-a-selected-repository-for-github-actions-in-an-organization>

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
    res, err := s.Actions.ActionsEnableSelectedRepositoryGithubActionsOrganization(ctx, operations.ActionsEnableSelectedRepositoryGithubActionsOrganizationRequest{
        Org: "vitae",
        RepositoryID: 674752,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ActionsEnableWorkflow

Enables a workflow and sets the `state` of the workflow to `active`. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`.

You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#enable-a-workflow>

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
    res, err := s.Actions.ActionsEnableWorkflow(ctx, operations.ActionsEnableWorkflowRequest{
        Owner: "animi",
        Repo: "enim",
        WorkflowID: shared.WorkflowID{},
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ActionsGetActionsCacheUsage

Gets GitHub Actions cache usage for a repository.
The data fetched using this API is refreshed approximately every 5 minutes, so values returned from this endpoint may take at least 5 minutes to get updated.
Anyone with read access to the repository can use this endpoint. If the repository is private, you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#get-github-actions-cache-usage-for-a-repository>

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
    res, err := s.Actions.ActionsGetActionsCacheUsage(ctx, operations.ActionsGetActionsCacheUsageRequest{
        Owner: "odit",
        Repo: "quo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsCacheUsageByRepository != nil {
        // handle response
    }
}
```

## ActionsGetActionsCacheUsageByRepoForOrg

Lists repositories and their GitHub Actions cache usage for an organization.
The data fetched using this API is refreshed approximately every 5 minutes, so values returned from this endpoint may take at least 5 minutes to get updated.
You must authenticate using an access token with the `read:org` scope to use this endpoint. GitHub Apps must have the `organization_admistration:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#list-repositories-with-github-actions-cache-usage-for-an-organization>

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
    res, err := s.Actions.ActionsGetActionsCacheUsageByRepoForOrg(ctx, operations.ActionsGetActionsCacheUsageByRepoForOrgRequest{
        Org: "sequi",
        Page: sdk.Int64(949572),
        PerPage: sdk.Int64(368725),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsGetActionsCacheUsageByRepoForOrg200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ActionsGetActionsCacheUsageForEnterprise

Gets the total GitHub Actions cache usage for an enterprise.
The data fetched using this API is refreshed approximately every 5 minutes, so values returned from this endpoint may take at least 5 minutes to get updated.
You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#get-github-actions-cache-usage-for-an-enterprise>

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
    res, err := s.Actions.ActionsGetActionsCacheUsageForEnterprise(ctx, operations.ActionsGetActionsCacheUsageForEnterpriseRequest{
        Enterprise: "id",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsCacheUsageOrgEnterprise != nil {
        // handle response
    }
}
```

## ActionsGetActionsCacheUsageForOrg

Gets the total GitHub Actions cache usage for an organization.
The data fetched using this API is refreshed approximately every 5 minutes, so values returned from this endpoint may take at least 5 minutes to get updated.
You must authenticate using an access token with the `read:org` scope to use this endpoint. GitHub Apps must have the `organization_admistration:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#get-github-actions-cache-usage-for-an-organization>

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
    res, err := s.Actions.ActionsGetActionsCacheUsageForOrg(ctx, operations.ActionsGetActionsCacheUsageForOrgRequest{
        Org: "possimus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsCacheUsageOrgEnterprise != nil {
        // handle response
    }
}
```

## ActionsGetActionsCacheUsagePolicy

Gets GitHub Actions cache usage policy for a repository.
You must authenticate using an access token with the `repo` scope to use this endpoint.
GitHub Apps must have the `actions:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#get-github-actions-cache-usage-policy-for-a-repository>

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
    res, err := s.Actions.ActionsGetActionsCacheUsagePolicy(ctx, operations.ActionsGetActionsCacheUsagePolicyRequest{
        Owner: "aut",
        Repo: "quasi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsCacheUsagePolicyForRepository != nil {
        // handle response
    }
}
```

## ActionsGetActionsCacheUsagePolicyForEnterprise

Gets the GitHub Actions cache usage policy for an enterprise.
You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
GitHub Apps must have the `enterprise_administration:write` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#get-github-actions-cache-usage-policy-for-an-enterprise>

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
    res, err := s.Actions.ActionsGetActionsCacheUsagePolicyForEnterprise(ctx, operations.ActionsGetActionsCacheUsagePolicyForEnterpriseRequest{
        Enterprise: "error",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsCacheUsagePolicyEnterprise != nil {
        // handle response
    }
}
```

## ActionsGetAllowedActionsOrganization

Gets the selected actions that are allowed in an organization. To use this endpoint, the organization permission policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an organization](#set-github-actions-permissions-for-an-organization).""

You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#get-allowed-actions-for-an-organization>

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
    res, err := s.Actions.ActionsGetAllowedActionsOrganization(ctx, operations.ActionsGetAllowedActionsOrganizationRequest{
        Org: "temporibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SelectedActions != nil {
        // handle response
    }
}
```

## ActionsGetAllowedActionsRepository

Gets the settings for selected actions that are allowed in a repository. To use this endpoint, the repository policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for a repository](#set-github-actions-permissions-for-a-repository)."

You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `administration` repository permission to use this API.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#get-allowed-actions-for-a-repository>

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
    res, err := s.Actions.ActionsGetAllowedActionsRepository(ctx, operations.ActionsGetAllowedActionsRepositoryRequest{
        Owner: "laborum",
        Repo: "quasi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SelectedActions != nil {
        // handle response
    }
}
```

## ActionsGetArtifact

Gets a specific artifact for a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#get-an-artifact>

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
    res, err := s.Actions.ActionsGetArtifact(ctx, operations.ActionsGetArtifactRequest{
        ArtifactID: 971945,
        Owner: "voluptatibus",
        Repo: "vero",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Artifact != nil {
        // handle response
    }
}
```

## ActionsGetEnvironmentPublicKey

Get the public key for an environment, which you need to encrypt environment secrets. You need to encrypt a secret before you can create or update secrets. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `secrets` repository permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#get-an-environment-public-key>

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
    res, err := s.Actions.ActionsGetEnvironmentPublicKey(ctx, operations.ActionsGetEnvironmentPublicKeyRequest{
        EnvironmentName: "nihil",
        RepositoryID: 509624,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsPublicKey != nil {
        // handle response
    }
}
```

## ActionsGetEnvironmentSecret

Gets a single environment secret without revealing its encrypted value. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#get-an-environment-secret>

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
    res, err := s.Actions.ActionsGetEnvironmentSecret(ctx, operations.ActionsGetEnvironmentSecretRequest{
        EnvironmentName: "voluptatibus",
        RepositoryID: 55714,
        SecretName: "omnis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsSecret != nil {
        // handle response
    }
}
```

## ActionsGetGithubActionsDefaultWorkflowPermissionsOrganization

Gets the default workflow permissions granted to the `GITHUB_TOKEN` when running workflows in an organization,
as well as whether GitHub Actions can submit approving pull request reviews. For more information, see
"[Setting the permissions of the GITHUB_TOKEN for your organization](https://docs.github.com/enterprise-server@3.5/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#setting-the-permissions-of-the-github_token-for-your-organization)."

You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#get-default-workflow-permissions>

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
    res, err := s.Actions.ActionsGetGithubActionsDefaultWorkflowPermissionsOrganization(ctx, operations.ActionsGetGithubActionsDefaultWorkflowPermissionsOrganizationRequest{
        Org: "voluptate",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsGetDefaultWorkflowPermissions != nil {
        // handle response
    }
}
```

## ActionsGetGithubActionsPermissionsOrganization

Gets the GitHub Actions permissions policy for repositories and allowed actions in an organization.

You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#get-github-actions-permissions-for-an-organization>

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
    res, err := s.Actions.ActionsGetGithubActionsPermissionsOrganization(ctx, operations.ActionsGetGithubActionsPermissionsOrganizationRequest{
        Org: "cum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsOrganizationPermissions != nil {
        // handle response
    }
}
```

## ActionsGetGithubActionsPermissionsRepository

Gets the GitHub Actions permissions policy for a repository, including whether GitHub Actions is enabled and the actions allowed to run in the repository.

You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `administration` repository permission to use this API.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#get-github-actions-permissions-for-a-repository>

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
    res, err := s.Actions.ActionsGetGithubActionsPermissionsRepository(ctx, operations.ActionsGetGithubActionsPermissionsRepositoryRequest{
        Owner: "perferendis",
        Repo: "doloremque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsRepositoryPermissions != nil {
        // handle response
    }
}
```

## ActionsGetJobForWorkflowRun

Gets a specific job in a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#get-a-job-for-a-workflow-run>

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
    res, err := s.Actions.ActionsGetJobForWorkflowRun(ctx, operations.ActionsGetJobForWorkflowRunRequest{
        JobID: 441711,
        Owner: "ut",
        Repo: "maiores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Job != nil {
        // handle response
    }
}
```

## ActionsGetOrgPublicKey

Gets your public key, which you need to encrypt secrets. You need to encrypt a secret before you can create or update secrets. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#get-an-organization-public-key>

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
    res, err := s.Actions.ActionsGetOrgPublicKey(ctx, operations.ActionsGetOrgPublicKeyRequest{
        Org: "dicta",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsPublicKey != nil {
        // handle response
    }
}
```

## ActionsGetOrgSecret

Gets a single organization secret without revealing its encrypted value. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#get-an-organization-secret>

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
    res, err := s.Actions.ActionsGetOrgSecret(ctx, operations.ActionsGetOrgSecretRequest{
        Org: "corporis",
        SecretName: "dolore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrganizationActionsSecret != nil {
        // handle response
    }
}
```

## ActionsGetPendingDeploymentsForRun

Get all deployment environments for a workflow run that are waiting for protection rules to pass.

Anyone with read access to the repository can use this endpoint. If the repository is private, you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#get-pending-deployments-for-a-workflow-run>

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
    res, err := s.Actions.ActionsGetPendingDeploymentsForRun(ctx, operations.ActionsGetPendingDeploymentsForRunRequest{
        Owner: "iusto",
        Repo: "dicta",
        RunID: 688661,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PendingDeployments != nil {
        // handle response
    }
}
```

## ActionsGetRepoPublicKey

Gets your public key, which you need to encrypt secrets. You need to encrypt a secret before you can create or update secrets. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `secrets` repository permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#get-a-repository-public-key>

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
    res, err := s.Actions.ActionsGetRepoPublicKey(ctx, operations.ActionsGetRepoPublicKeyRequest{
        Owner: "enim",
        Repo: "accusamus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsPublicKey != nil {
        // handle response
    }
}
```

## ActionsGetRepoSecret

Gets a single repository secret without revealing its encrypted value. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#get-a-repository-secret>

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
    res, err := s.Actions.ActionsGetRepoSecret(ctx, operations.ActionsGetRepoSecretRequest{
        Owner: "commodi",
        Repo: "repudiandae",
        SecretName: "quae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsSecret != nil {
        // handle response
    }
}
```

## ActionsGetReviewsForRun

Anyone with read access to the repository can use this endpoint. If the repository is private, you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#get-the-review-history-for-a-workflow-run>

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
    res, err := s.Actions.ActionsGetReviewsForRun(ctx, operations.ActionsGetReviewsForRunRequest{
        Owner: "ipsum",
        Repo: "quidem",
        RunID: 565189,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EnvironmentApprovals != nil {
        // handle response
    }
}
```

## ActionsGetSelfHostedRunnerForOrg

Gets a specific self-hosted runner configured in an organization.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#get-a-self-hosted-runner-for-an-organization>

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
    res, err := s.Actions.ActionsGetSelfHostedRunnerForOrg(ctx, operations.ActionsGetSelfHostedRunnerForOrgRequest{
        Org: "excepturi",
        RunnerID: 865103,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Runner != nil {
        // handle response
    }
}
```

## ActionsGetSelfHostedRunnerForRepo

Gets a specific self-hosted runner configured in a repository.

You must authenticate using an access token with the `repo` scope to use this
endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#get-a-self-hosted-runner-for-a-repository>

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
    res, err := s.Actions.ActionsGetSelfHostedRunnerForRepo(ctx, operations.ActionsGetSelfHostedRunnerForRepoRequest{
        Owner: "modi",
        Repo: "praesentium",
        RunnerID: 523248,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Runner != nil {
        // handle response
    }
}
```

## ActionsGetSelfHostedRunnerGroupForOrg

Gets a specific self-hosted runner group for an organization.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#get-a-self-hosted-runner-group-for-an-organization>

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
    res, err := s.Actions.ActionsGetSelfHostedRunnerGroupForOrg(ctx, operations.ActionsGetSelfHostedRunnerGroupForOrgRequest{
        Org: "voluptates",
        RunnerGroupID: 93940,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RunnerGroupsOrg != nil {
        // handle response
    }
}
```

## ActionsGetWorkflow

Gets a specific workflow. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#get-a-workflow>

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
    res, err := s.Actions.ActionsGetWorkflow(ctx, operations.ActionsGetWorkflowRequest{
        Owner: "repudiandae",
        Repo: "sint",
        WorkflowID: shared.WorkflowID{},
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Workflow != nil {
        // handle response
    }
}
```

## ActionsGetWorkflowAccessToRepository

Gets the level of access that workflows outside of the repository have to actions and reusable workflows in the repository.
This endpoint only applies to internal repositories.
For more information, see "[Managing GitHub Actions settings for a repository](https://docs.github.com/enterprise-server@3.5/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#allowing-access-to-components-in-an-internal-repository)."

You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the
repository `administration` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#get-workflow-access-level-to-a-repository>

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
    res, err := s.Actions.ActionsGetWorkflowAccessToRepository(ctx, operations.ActionsGetWorkflowAccessToRepositoryRequest{
        Owner: "veritatis",
        Repo: "itaque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsWorkflowAccessToRepository != nil {
        // handle response
    }
}
```

## ActionsGetWorkflowRun

Gets a specific workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#get-a-workflow-run>

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
    res, err := s.Actions.ActionsGetWorkflowRun(ctx, operations.ActionsGetWorkflowRunRequest{
        ExcludePullRequests: sdk.Bool(false),
        Owner: "incidunt",
        Repo: "enim",
        RunID: 9356,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WorkflowRun != nil {
        // handle response
    }
}
```

## ActionsGetWorkflowRunAttempt

Gets a specific workflow run attempt. Anyone with read access to the repository
can use this endpoint. If the repository is private you must use an access token
with the `repo` scope. GitHub Apps must have the `actions:read` permission to
use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#get-a-workflow-run-attempt>

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
    res, err := s.Actions.ActionsGetWorkflowRunAttempt(ctx, operations.ActionsGetWorkflowRunAttemptRequest{
        AttemptNumber: 667411,
        ExcludePullRequests: sdk.Bool(false),
        Owner: "quibusdam",
        Repo: "explicabo",
        RunID: 647174,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WorkflowRun != nil {
        // handle response
    }
}
```

## ActionsListArtifactsForRepo

Lists all artifacts for a repository. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#list-artifacts-for-a-repository>

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
    res, err := s.Actions.ActionsListArtifactsForRepo(ctx, operations.ActionsListArtifactsForRepoRequest{
        Name: sdk.String("Marty Green"),
        Owner: "aliquid",
        Page: sdk.Int64(586513),
        PerPage: sdk.Int64(552822),
        Repo: "perferendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsListArtifactsForRepo200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ActionsListEnvironmentSecrets

Lists all secrets available in an environment without revealing their encrypted values. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#list-environment-secrets>

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
    res, err := s.Actions.ActionsListEnvironmentSecrets(ctx, operations.ActionsListEnvironmentSecretsRequest{
        EnvironmentName: "magni",
        Page: sdk.Int64(828940),
        PerPage: sdk.Int64(369808),
        RepositoryID: 4695,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsListEnvironmentSecrets200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ActionsListJobsForWorkflowRun

Lists jobs for a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://docs.github.com/enterprise-server@3.5/rest/overview/resources-in-the-rest-api#parameters).

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#list-jobs-for-a-workflow-run>

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
    res, err := s.Actions.ActionsListJobsForWorkflowRun(ctx, operations.ActionsListJobsForWorkflowRunRequest{
        Filter: operations.ActionsListJobsForWorkflowRunFilterEnumLatest.ToPointer(),
        Owner: "dolorum",
        Page: sdk.Int64(569618),
        PerPage: sdk.Int64(270008),
        Repo: "facilis",
        RunID: 735194,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsListJobsForWorkflowRun200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ActionsListJobsForWorkflowRunAttempt

Lists jobs for a specific workflow run attempt. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://docs.github.com/enterprise-server@3.5/rest/overview/resources-in-the-rest-api#parameters).

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#list-jobs-for-a-workflow-run-attempt>

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
    res, err := s.Actions.ActionsListJobsForWorkflowRunAttempt(ctx, operations.ActionsListJobsForWorkflowRunAttemptRequest{
        AttemptNumber: 288476,
        Owner: "delectus",
        Page: sdk.Int64(433288),
        PerPage: sdk.Int64(248753),
        Repo: "eligendi",
        RunID: 576157,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsListJobsForWorkflowRunAttempt200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ActionsListLabelsForSelfHostedRunnerForOrg

Lists all labels for a self-hosted runner configured in an organization.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#list-labels-for-a-self-hosted-runner-for-an-organization>

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
    res, err := s.Actions.ActionsListLabelsForSelfHostedRunnerForOrg(ctx, operations.ActionsListLabelsForSelfHostedRunnerForOrgRequest{
        Org: "aliquid",
        RunnerID: 592042,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsListLabelsForSelfHostedRunnerForOrg200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ActionsListLabelsForSelfHostedRunnerForRepo

Lists all labels for a self-hosted runner configured in a repository.

You must authenticate using an access token with the `repo` scope to use this
endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#list-labels-for-a-self-hosted-runner-for-a-repository>

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
    res, err := s.Actions.ActionsListLabelsForSelfHostedRunnerForRepo(ctx, operations.ActionsListLabelsForSelfHostedRunnerForRepoRequest{
        Owner: "necessitatibus",
        Repo: "sint",
        RunnerID: 638921,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsListLabelsForSelfHostedRunnerForRepo200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ActionsListOrgSecrets

Lists all secrets available in an organization without revealing their encrypted values. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#list-organization-secrets>

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
    res, err := s.Actions.ActionsListOrgSecrets(ctx, operations.ActionsListOrgSecretsRequest{
        Org: "dolor",
        Page: sdk.Int64(891555),
        PerPage: sdk.Int64(952749),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsListOrgSecrets200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ActionsListRepoAccessToSelfHostedRunnerGroupInOrg

Lists the repositories with access to a self-hosted runner group configured in an organization.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#list-repository-access-to-a-self-hosted-runner-group-in-an-organization>

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
    res, err := s.Actions.ActionsListRepoAccessToSelfHostedRunnerGroupInOrg(ctx, operations.ActionsListRepoAccessToSelfHostedRunnerGroupInOrgRequest{
        Org: "dolorum",
        Page: sdk.Int64(447125),
        PerPage: sdk.Int64(449198),
        RunnerGroupID: 846409,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsListRepoAccessToSelfHostedRunnerGroupInOrg200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ActionsListRepoSecrets

Lists all secrets available in a repository without revealing their encrypted values. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#list-repository-secrets>

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
    res, err := s.Actions.ActionsListRepoSecrets(ctx, operations.ActionsListRepoSecretsRequest{
        Owner: "maiores",
        Page: sdk.Int64(699479),
        PerPage: sdk.Int64(116202),
        Repo: "magnam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsListRepoSecrets200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ActionsListRepoWorkflows

Lists the workflows in a repository. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#list-repository-workflows>

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
    res, err := s.Actions.ActionsListRepoWorkflows(ctx, operations.ActionsListRepoWorkflowsRequest{
        Owner: "cumque",
        Page: sdk.Int64(813798),
        PerPage: sdk.Int64(411820),
        Repo: "aliquid",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsListRepoWorkflows200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ActionsListRunnerApplicationsForOrg

Lists binaries for the runner application that you can download and run.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#list-runner-applications-for-an-organization>

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
    res, err := s.Actions.ActionsListRunnerApplicationsForOrg(ctx, operations.ActionsListRunnerApplicationsForOrgRequest{
        Org: "laborum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RunnerApplications != nil {
        // handle response
    }
}
```

## ActionsListRunnerApplicationsForRepo

Lists binaries for the runner application that you can download and run.

You must authenticate using an access token with the `repo` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#list-runner-applications-for-a-repository>

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
    res, err := s.Actions.ActionsListRunnerApplicationsForRepo(ctx, operations.ActionsListRunnerApplicationsForRepoRequest{
        Owner: "accusamus",
        Repo: "non",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RunnerApplications != nil {
        // handle response
    }
}
```

## ActionsListSelectedReposForOrgSecret

Lists all repositories that have been selected when the `visibility` for repository access to a secret is set to `selected`. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#list-selected-repositories-for-an-organization-secret>

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
    res, err := s.Actions.ActionsListSelectedReposForOrgSecret(ctx, operations.ActionsListSelectedReposForOrgSecretRequest{
        Org: "occaecati",
        Page: sdk.Int64(313218),
        PerPage: sdk.Int64(881736),
        SecretName: "delectus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsListSelectedReposForOrgSecret200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ActionsListSelectedRepositoriesEnabledGithubActionsOrganization

Lists the selected repositories that are enabled for GitHub Actions in an organization. To use this endpoint, the organization permission policy for `enabled_repositories` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an organization](#set-github-actions-permissions-for-an-organization)."

You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#list-selected-repositories-enabled-for-github-actions-in-an-organization>

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
    res, err := s.Actions.ActionsListSelectedRepositoriesEnabledGithubActionsOrganization(ctx, operations.ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationRequest{
        Org: "quidem",
        Page: sdk.Int64(588465),
        PerPage: sdk.Int64(725255),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsListSelectedRepositoriesEnabledGithubActionsOrganization200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ActionsListSelfHostedRunnerGroupsForOrg

Lists all self-hosted runner groups configured in an organization and inherited from an enterprise.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#list-self-hosted-runner-groups-for-an-organization>

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
    res, err := s.Actions.ActionsListSelfHostedRunnerGroupsForOrg(ctx, operations.ActionsListSelfHostedRunnerGroupsForOrgRequest{
        Org: "id",
        Page: sdk.Int64(501324),
        PerPage: sdk.Int64(533206),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsListSelfHostedRunnerGroupsForOrg200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ActionsListSelfHostedRunnersForOrg

Lists all self-hosted runners configured in an organization.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#list-self-hosted-runners-for-an-organization>

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
    res, err := s.Actions.ActionsListSelfHostedRunnersForOrg(ctx, operations.ActionsListSelfHostedRunnersForOrgRequest{
        Org: "sapiente",
        Page: sdk.Int64(230533),
        PerPage: sdk.Int64(643990),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsListSelfHostedRunnersForOrg200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ActionsListSelfHostedRunnersForRepo

Lists all self-hosted runners configured in a repository. You must authenticate using an access token with the `repo` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#list-self-hosted-runners-for-a-repository>

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
    res, err := s.Actions.ActionsListSelfHostedRunnersForRepo(ctx, operations.ActionsListSelfHostedRunnersForRepoRequest{
        Owner: "nisi",
        Page: sdk.Int64(423855),
        PerPage: sdk.Int64(618809),
        Repo: "omnis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsListSelfHostedRunnersForRepo200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ActionsListSelfHostedRunnersInGroupForOrg

Lists self-hosted runners that are in a specific organization group.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#list-self-hosted-runners-in-a-group-for-an-organization>

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
    res, err := s.Actions.ActionsListSelfHostedRunnersInGroupForOrg(ctx, operations.ActionsListSelfHostedRunnersInGroupForOrgRequest{
        Org: "molestiae",
        Page: sdk.Int64(19193),
        PerPage: sdk.Int64(470132),
        RunnerGroupID: 301575,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsListSelfHostedRunnersInGroupForOrg200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ActionsListWorkflowRunArtifacts

Lists artifacts for a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#list-workflow-run-artifacts>

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
    res, err := s.Actions.ActionsListWorkflowRunArtifacts(ctx, operations.ActionsListWorkflowRunArtifactsRequest{
        Owner: "distinctio",
        Page: sdk.Int64(660174),
        PerPage: sdk.Int64(287991),
        Repo: "labore",
        RunID: 383462,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsListWorkflowRunArtifacts200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ActionsListWorkflowRuns

List all workflow runs for a workflow. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://docs.github.com/enterprise-server@3.5/rest/overview/resources-in-the-rest-api#parameters).

Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#list-workflow-runs>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsListWorkflowRuns(ctx, operations.ActionsListWorkflowRunsRequest{
        Actor: sdk.String("natus"),
        Branch: sdk.String("nobis"),
        CheckSuiteID: sdk.Int64(428769),
        Created: types.MustTimeFromString("2022-08-05T15:44:28.456Z"),
        Event: sdk.String("architecto"),
        ExcludePullRequests: sdk.Bool(false),
        Owner: "magnam",
        Page: sdk.Int64(92373),
        PerPage: sdk.Int64(569965),
        Repo: "ullam",
        Status: shared.WorkflowRunStatusEnumTimedOut.ToPointer(),
        WorkflowID: shared.WorkflowID{},
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsListWorkflowRuns200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ActionsListWorkflowRunsForRepo

Lists all workflow runs for a repository. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://docs.github.com/enterprise-server@3.5/rest/overview/resources-in-the-rest-api#parameters).

Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#list-workflow-runs-for-a-repository>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsListWorkflowRunsForRepo(ctx, operations.ActionsListWorkflowRunsForRepoRequest{
        Actor: sdk.String("quos"),
        Branch: sdk.String("sint"),
        CheckSuiteID: sdk.Int64(33625),
        Created: types.MustTimeFromString("2021-01-23T15:47:23.464Z"),
        Event: sdk.String("mollitia"),
        ExcludePullRequests: sdk.Bool(false),
        Owner: "ad",
        Page: sdk.Int64(431418),
        PerPage: sdk.Int64(221262),
        Repo: "necessitatibus",
        Status: shared.WorkflowRunStatusEnumActionRequired.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsListWorkflowRunsForRepo200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ActionsReRunJobForWorkflowRun

Re-run a job and its dependent jobs in a workflow run. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#re-run-job-for-workflow-run>

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
    res, err := s.Actions.ActionsReRunJobForWorkflowRun(ctx, operations.ActionsReRunJobForWorkflowRunRequest{
        RequestBody: map[string]interface{}{
            "quasi": "iure",
            "doloribus": "debitis",
        },
        JobID: 260341,
        Owner: "maxime",
        Repo: "deleniti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EmptyObject != nil {
        // handle response
    }
}
```

## ActionsReRunWorkflow

Re-runs your workflow run using its `id`. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#re-run-a-workflow>

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
    res, err := s.Actions.ActionsReRunWorkflow(ctx, operations.ActionsReRunWorkflowRequest{
        RequestBody: map[string]interface{}{
            "in": "architecto",
            "architecto": "repudiandae",
            "ullam": "expedita",
        },
        Owner: "nihil",
        Repo: "repellat",
        RunID: 841140,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EmptyObject != nil {
        // handle response
    }
}
```

## ActionsReRunWorkflowFailedJobs

Re-run all of the failed jobs and their dependent jobs in a workflow run using the `id` of the workflow run. You must authenticate using an access token with the `repo` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#re-run-workflow-failed-jobs>

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
    res, err := s.Actions.ActionsReRunWorkflowFailedJobs(ctx, operations.ActionsReRunWorkflowFailedJobsRequest{
        RequestBody: map[string]interface{}{
            "saepe": "pariatur",
        },
        Owner: "accusantium",
        Repo: "consequuntur",
        RunID: 508315,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EmptyObject != nil {
        // handle response
    }
}
```

## ActionsRemoveAllCustomLabelsFromSelfHostedRunnerForOrg

Remove all custom labels from a self-hosted runner configured in an
organization. Returns the remaining read-only labels from the runner.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#remove-all-custom-labels-from-a-self-hosted-runner-for-an-organization>

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
    res, err := s.Actions.ActionsRemoveAllCustomLabelsFromSelfHostedRunnerForOrg(ctx, operations.ActionsRemoveAllCustomLabelsFromSelfHostedRunnerForOrgRequest{
        Org: "natus",
        RunnerID: 166847,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsRemoveAllCustomLabelsFromSelfHostedRunnerForOrg200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ActionsRemoveAllCustomLabelsFromSelfHostedRunnerForRepo

Remove all custom labels from a self-hosted runner configured in a
repository. Returns the remaining read-only labels from the runner.

You must authenticate using an access token with the `repo` scope to use this
endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#remove-all-custom-labels-from-a-self-hosted-runner-for-a-repository>

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
    res, err := s.Actions.ActionsRemoveAllCustomLabelsFromSelfHostedRunnerForRepo(ctx, operations.ActionsRemoveAllCustomLabelsFromSelfHostedRunnerForRepoRequest{
        Owner: "sunt",
        Repo: "quo",
        RunnerID: 848009,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsRemoveAllCustomLabelsFromSelfHostedRunnerForRepo200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ActionsRemoveCustomLabelFromSelfHostedRunnerForOrg

Remove a custom label from a self-hosted runner configured
in an organization. Returns the remaining labels from the runner.

This endpoint returns a `404 Not Found` status if the custom label is not
present on the runner.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#remove-a-custom-label-from-a-self-hosted-runner-for-an-organization>

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
    res, err := s.Actions.ActionsRemoveCustomLabelFromSelfHostedRunnerForOrg(ctx, operations.ActionsRemoveCustomLabelFromSelfHostedRunnerForOrgRequest{
        Name: "Simon Jenkins",
        Org: "ea",
        RunnerID: 33222,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsRemoveCustomLabelFromSelfHostedRunnerForOrg200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ActionsRemoveCustomLabelFromSelfHostedRunnerForRepo

Remove a custom label from a self-hosted runner configured
in a repository. Returns the remaining labels from the runner.

This endpoint returns a `404 Not Found` status if the custom label is not
present on the runner.

You must authenticate using an access token with the `repo` scope to use this
endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#remove-a-custom-label-from-a-self-hosted-runner-for-a-repository>

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
    res, err := s.Actions.ActionsRemoveCustomLabelFromSelfHostedRunnerForRepo(ctx, operations.ActionsRemoveCustomLabelFromSelfHostedRunnerForRepoRequest{
        Name: "Ebony Predovic",
        Owner: "autem",
        Repo: "nam",
        RunnerID: 50588,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsRemoveCustomLabelFromSelfHostedRunnerForRepo200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ActionsRemoveRepoAccessToSelfHostedRunnerGroupInOrg

Removes a repository from the list of selected repositories that can access a self-hosted runner group. The runner group must have `visibility` set to `selected`. For more information, see "[Create a self-hosted runner group for an organization](#create-a-self-hosted-runner-group-for-an-organization)."

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#remove-repository-access-to-a-self-hosted-runner-group-in-an-organization>

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
    res, err := s.Actions.ActionsRemoveRepoAccessToSelfHostedRunnerGroupInOrg(ctx, operations.ActionsRemoveRepoAccessToSelfHostedRunnerGroupInOrgRequest{
        Org: "pariatur",
        RepositoryID: 365496,
        RunnerGroupID: 975522,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ActionsRemoveSelectedRepoFromOrgSecret

Removes a repository from an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://docs.github.com/enterprise-server@3.5/rest/reference/actions#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#remove-selected-repository-from-an-organization-secret>

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
    res, err := s.Actions.ActionsRemoveSelectedRepoFromOrgSecret(ctx, operations.ActionsRemoveSelectedRepoFromOrgSecretRequest{
        Org: "perferendis",
        RepositoryID: 855804,
        SecretName: "amet",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ActionsRemoveSelfHostedRunnerFromGroupForOrg

Removes a self-hosted runner from a group configured in an organization. The runner is then returned to the default group.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#remove-a-self-hosted-runner-from-a-group-for-an-organization>

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
    res, err := s.Actions.ActionsRemoveSelfHostedRunnerFromGroupForOrg(ctx, operations.ActionsRemoveSelfHostedRunnerFromGroupForOrgRequest{
        Org: "aut",
        RunnerGroupID: 764912,
        RunnerID: 359978,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ActionsReviewPendingDeploymentsForRun

Approve or reject pending deployments that are waiting on approval by a required reviewer.

Required reviewers with read access to the repository contents and deployments can use this endpoint. Required reviewers must authenticate using an access token with the `repo` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#review-pending-deployments-for-a-workflow-run>

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
    res, err := s.Actions.ActionsReviewPendingDeploymentsForRun(ctx, operations.ActionsReviewPendingDeploymentsForRunRequest{
        RequestBody: operations.ActionsReviewPendingDeploymentsForRunRequestBody{
            Comment: "Ship it!",
            EnvironmentIds: []int64{
                161171787,
                161171787,
                161171787,
                161171787,
            },
            State: operations.ActionsReviewPendingDeploymentsForRunRequestBodyStateEnumApproved,
        },
        Owner: "libero",
        Repo: "nobis",
        RunID: 171629,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Deployments != nil {
        // handle response
    }
}
```

## ActionsSetActionsCacheUsagePolicy

Sets GitHub Actions cache usage policy for a repository.
You must authenticate using an access token with the `repo` scope to use this endpoint.
GitHub Apps must have the `actions:write` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#set-github-actions-cache-usage-policy-for-a-repository>

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
    res, err := s.Actions.ActionsSetActionsCacheUsagePolicy(ctx, operations.ActionsSetActionsCacheUsagePolicyRequest{
        ActionsCacheUsagePolicyForRepository: shared.ActionsCacheUsagePolicyForRepository{
            RepoCacheSizeLimitInGb: 14,
        },
        Owner: "quis",
        Repo: "totam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ActionsSetActionsCacheUsagePolicyForEnterprise

Sets the GitHub Actions cache usage policy for an enterprise.
You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
GitHub Apps must have the `enterprise_administration:write` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#set-github-actions-cache-usage-policy-for-an-enterprise>

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
    res, err := s.Actions.ActionsSetActionsCacheUsagePolicyForEnterprise(ctx, operations.ActionsSetActionsCacheUsagePolicyForEnterpriseRequest{
        ActionsCacheUsagePolicyEnterprise: shared.ActionsCacheUsagePolicyEnterprise{
            MaxRepoCacheSizeLimitInGb: sdk.Int64(15),
            RepoCacheSizeLimitInGb: sdk.Int64(10),
        },
        Enterprise: "dignissimos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ActionsSetAllowedActionsOrganization

Sets the actions that are allowed in an organization. To use this endpoint, the organization permission policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an organization](#set-github-actions-permissions-for-an-organization)."

If the organization belongs to an enterprise that has `selected` actions set at the enterprise level, then you cannot override any of the enterprise's allowed actions settings.

To use the `patterns_allowed` setting for private repositories, the organization must belong to an enterprise. If the organization does not belong to an enterprise, then the `patterns_allowed` setting only applies to public repositories in the organization.

You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#set-allowed-actions-for-an-organization>

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
    res, err := s.Actions.ActionsSetAllowedActionsOrganization(ctx, operations.ActionsSetAllowedActionsOrganizationRequest{
        Org: "eaque",
        SelectedActions: &shared.SelectedActions{
            GithubOwnedAllowed: false,
            PatternsAllowed: []string{
                "nesciunt",
                "eos",
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

## ActionsSetAllowedActionsRepository

Sets the actions that are allowed in a repository. To use this endpoint, the repository permission policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for a repository](#set-github-actions-permissions-for-a-repository)."

If the repository belongs to an organization or enterprise that has `selected` actions set at the organization or enterprise levels, then you cannot override any of the allowed actions settings.

To use the `patterns_allowed` setting for private repositories, the repository must belong to an enterprise. If the repository does not belong to an enterprise, then the `patterns_allowed` setting only applies to public repositories.

You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `administration` repository permission to use this API.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#set-allowed-actions-for-a-repository>

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
    res, err := s.Actions.ActionsSetAllowedActionsRepository(ctx, operations.ActionsSetAllowedActionsRepositoryRequest{
        Owner: "perferendis",
        Repo: "dolores",
        SelectedActions: &shared.SelectedActions{
            GithubOwnedAllowed: false,
            PatternsAllowed: []string{
                "quam",
                "dolor",
                "vero",
                "nostrum",
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

## ActionsSetCustomLabelsForSelfHostedRunnerForOrg

Remove all previous custom labels and set the new custom labels for a specific
self-hosted runner configured in an organization.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#set-custom-labels-for-a-self-hosted-runner-for-an-organization>

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
    res, err := s.Actions.ActionsSetCustomLabelsForSelfHostedRunnerForOrg(ctx, operations.ActionsSetCustomLabelsForSelfHostedRunnerForOrgRequest{
        RequestBody: operations.ActionsSetCustomLabelsForSelfHostedRunnerForOrgRequestBody{
            Labels: []string{
                "recusandae",
                "omnis",
                "facilis",
                "perspiciatis",
            },
        },
        Org: "voluptatem",
        RunnerID: 783645,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsSetCustomLabelsForSelfHostedRunnerForOrg200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ActionsSetCustomLabelsForSelfHostedRunnerForRepo

Remove all previous custom labels and set the new custom labels for a specific
self-hosted runner configured in a repository.

You must authenticate using an access token with the `repo` scope to use this
endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#set-custom-labels-for-a-self-hosted-runner-for-a-repository>

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
    res, err := s.Actions.ActionsSetCustomLabelsForSelfHostedRunnerForRepo(ctx, operations.ActionsSetCustomLabelsForSelfHostedRunnerForRepoRequest{
        RequestBody: operations.ActionsSetCustomLabelsForSelfHostedRunnerForRepoRequestBody{
            Labels: []string{
                "blanditiis",
            },
        },
        Owner: "error",
        Repo: "eaque",
        RunnerID: 577229,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsSetCustomLabelsForSelfHostedRunnerForRepo200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ActionsSetGithubActionsDefaultWorkflowPermissionsOrganization

Sets the default workflow permissions granted to the `GITHUB_TOKEN` when running workflows in an organization, and sets if GitHub Actions
can submit approving pull request reviews. For more information, see
"[Setting the permissions of the GITHUB_TOKEN for your organization](https://docs.github.com/enterprise-server@3.5/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#setting-the-permissions-of-the-github_token-for-your-organization)."

You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#set-default-workflow-permissions>

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
    res, err := s.Actions.ActionsSetGithubActionsDefaultWorkflowPermissionsOrganization(ctx, operations.ActionsSetGithubActionsDefaultWorkflowPermissionsOrganizationRequest{
        ActionsSetDefaultWorkflowPermissions: &shared.ActionsSetDefaultWorkflowPermissions{
            CanApprovePullRequestReviews: sdk.Bool(false),
            DefaultWorkflowPermissions: shared.ActionsDefaultWorkflowPermissionsEnumWrite.ToPointer(),
        },
        Org: "adipisci",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ActionsSetGithubActionsPermissionsOrganization

Sets the GitHub Actions permissions policy for repositories and allowed actions in an organization.

If the organization belongs to an enterprise that has set restrictive permissions at the enterprise level, such as `allowed_actions` to `selected` actions, then you cannot override them for the organization.

You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#set-github-actions-permissions-for-an-organization>

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
    res, err := s.Actions.ActionsSetGithubActionsPermissionsOrganization(ctx, operations.ActionsSetGithubActionsPermissionsOrganizationRequest{
        RequestBody: operations.ActionsSetGithubActionsPermissionsOrganizationRequestBody{
            AllowedActions: shared.AllowedActionsEnumSelected.ToPointer(),
            EnabledRepositories: shared.EnabledRepositoriesEnumSelected,
        },
        Org: "modi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ActionsSetGithubActionsPermissionsRepository

Sets the GitHub Actions permissions policy for enabling GitHub Actions and allowed actions in the repository.

If the repository belongs to an organization or enterprise that has set restrictive permissions at the organization or enterprise levels, such as `allowed_actions` to `selected` actions, then you cannot override them for the repository.

You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `administration` repository permission to use this API.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#set-github-actions-permissions-for-a-repository>

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
    res, err := s.Actions.ActionsSetGithubActionsPermissionsRepository(ctx, operations.ActionsSetGithubActionsPermissionsRepositoryRequest{
        RequestBody: operations.ActionsSetGithubActionsPermissionsRepositoryRequestBody{
            AllowedActions: shared.AllowedActionsEnumLocalOnly.ToPointer(),
            Enabled: false,
        },
        Owner: "dolorum",
        Repo: "deleniti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ActionsSetRepoAccessToSelfHostedRunnerGroupInOrg

Replaces the list of repositories that have access to a self-hosted runner group configured in an organization.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#set-repository-access-to-a-self-hosted-runner-group-in-an-organization>

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
    res, err := s.Actions.ActionsSetRepoAccessToSelfHostedRunnerGroupInOrg(ctx, operations.ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgRequest{
        RequestBody: operations.ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgRequestBody{
            SelectedRepositoryIds: []int64{
                589910,
                750844,
                730122,
                964490,
            },
        },
        Org: "quaerat",
        RunnerGroupID: 554242,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ActionsSetSelectedReposForOrgSecret

Replaces all repositories for an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://docs.github.com/enterprise-server@3.5/rest/reference/actions#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#set-selected-repositories-for-an-organization-secret>

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
    res, err := s.Actions.ActionsSetSelectedReposForOrgSecret(ctx, operations.ActionsSetSelectedReposForOrgSecretRequest{
        RequestBody: operations.ActionsSetSelectedReposForOrgSecretRequestBody{
            SelectedRepositoryIds: []int64{
                212390,
                209843,
            },
        },
        Org: "dolor",
        SecretName: "qui",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ActionsSetSelectedRepositoriesEnabledGithubActionsOrganization

Replaces the list of selected repositories that are enabled for GitHub Actions in an organization. To use this endpoint, the organization permission policy for `enabled_repositories` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an organization](#set-github-actions-permissions-for-an-organization)."

You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#set-selected-repositories-enabled-for-github-actions-in-an-organization>

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
    res, err := s.Actions.ActionsSetSelectedRepositoriesEnabledGithubActionsOrganization(ctx, operations.ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationRequest{
        RequestBody: operations.ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationRequestBody{
            SelectedRepositoryIds: []int64{
                944373,
            },
        },
        Org: "excepturi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ActionsSetSelfHostedRunnersInGroupForOrg

Replaces the list of self-hosted runners that are part of an organization runner group.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#set-self-hosted-runners-in-a-group-for-an-organization>

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
    res, err := s.Actions.ActionsSetSelfHostedRunnersInGroupForOrg(ctx, operations.ActionsSetSelfHostedRunnersInGroupForOrgRequest{
        RequestBody: operations.ActionsSetSelfHostedRunnersInGroupForOrgRequestBody{
            Runners: []int64{
                452109,
                490459,
                970237,
            },
        },
        Org: "amet",
        RunnerGroupID: 680545,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ActionsSetWorkflowAccessToRepository

Sets the level of access that workflows outside of the repository have to actions and reusable workflows in the repository.
This endpoint only applies to internal repositories.
For more information, see "[Managing GitHub Actions settings for a repository](https://docs.github.com/enterprise-server@3.5/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#allowing-access-to-components-in-an-internal-repository)."

You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the
repository `administration` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#set-workflow-access-to-a-repository>

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
    res, err := s.Actions.ActionsSetWorkflowAccessToRepository(ctx, operations.ActionsSetWorkflowAccessToRepositoryRequest{
        ActionsWorkflowAccessToRepository: shared.ActionsWorkflowAccessToRepository{
            AccessLevel: shared.ActionsWorkflowAccessToRepositoryAccessLevelEnumNone,
        },
        Owner: "veritatis",
        Repo: "ipsa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ActionsUpdateSelfHostedRunnerGroupForOrg

Updates the `name` and `visibility` of a self-hosted runner group in an organization.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/actions#update-a-self-hosted-runner-group-for-an-organization>

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
    res, err := s.Actions.ActionsUpdateSelfHostedRunnerGroupForOrg(ctx, operations.ActionsUpdateSelfHostedRunnerGroupForOrgRequest{
        RequestBody: operations.ActionsUpdateSelfHostedRunnerGroupForOrgRequestBody{
            AllowsPublicRepositories: sdk.Bool(false),
            Name: "Vera Kuhlman",
            RestrictedToWorkflows: sdk.Bool(false),
            SelectedWorkflows: []string{
                "octo-org/octo-repo/.github/workflows/deploy.yaml@main",
                "octo-org/octo-repo/.github/workflows/deploy.yaml@main",
                "octo-org/octo-repo/.github/workflows/deploy.yaml@main",
            },
            Visibility: operations.ActionsUpdateSelfHostedRunnerGroupForOrgRequestBodyVisibilityEnumPrivate.ToPointer(),
        },
        Org: "voluptas",
        RunnerGroupID: 617658,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RunnerGroupsOrg != nil {
        // handle response
    }
}
```
