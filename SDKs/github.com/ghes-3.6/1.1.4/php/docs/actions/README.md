# actions

## Overview

Endpoints to manage GitHub Actions using the REST API.

### Available Operations

* [actionsAddCustomLabelsToSelfHostedRunnerForOrg](#actionsaddcustomlabelstoselfhostedrunnerfororg) - Add custom labels to a self-hosted runner for an organization
* [actionsAddCustomLabelsToSelfHostedRunnerForRepo](#actionsaddcustomlabelstoselfhostedrunnerforrepo) - Add custom labels to a self-hosted runner for a repository
* [actionsAddRepoAccessToSelfHostedRunnerGroupInOrg](#actionsaddrepoaccesstoselfhostedrunnergroupinorg) - Add repository access to a self-hosted runner group in an organization
* [actionsAddSelectedRepoToOrgSecret](#actionsaddselectedrepotoorgsecret) - Add selected repository to an organization secret
* [actionsAddSelfHostedRunnerToGroupForOrg](#actionsaddselfhostedrunnertogroupfororg) - Add a self-hosted runner to a group for an organization
* [actionsCancelWorkflowRun](#actionscancelworkflowrun) - Cancel a workflow run
* [actionsCreateOrUpdateEnvironmentSecret](#actionscreateorupdateenvironmentsecret) - Create or update an environment secret
* [actionsCreateOrUpdateOrgSecret](#actionscreateorupdateorgsecret) - Create or update an organization secret
* [actionsCreateOrUpdateRepoSecret](#actionscreateorupdatereposecret) - Create or update a repository secret
* [actionsCreateRegistrationTokenForOrg](#actionscreateregistrationtokenfororg) - Create a registration token for an organization
* [actionsCreateRegistrationTokenForRepo](#actionscreateregistrationtokenforrepo) - Create a registration token for a repository
* [actionsCreateRemoveTokenForOrg](#actionscreateremovetokenfororg) - Create a remove token for an organization
* [actionsCreateRemoveTokenForRepo](#actionscreateremovetokenforrepo) - Create a remove token for a repository
* [actionsCreateSelfHostedRunnerGroupForOrg](#actionscreateselfhostedrunnergroupfororg) - Create a self-hosted runner group for an organization
* [actionsCreateWorkflowDispatch](#actionscreateworkflowdispatch) - Create a workflow dispatch event
* [actionsDeleteArtifact](#actionsdeleteartifact) - Delete an artifact
* [actionsDeleteEnvironmentSecret](#actionsdeleteenvironmentsecret) - Delete an environment secret
* [actionsDeleteOrgSecret](#actionsdeleteorgsecret) - Delete an organization secret
* [actionsDeleteRepoSecret](#actionsdeletereposecret) - Delete a repository secret
* [actionsDeleteSelfHostedRunnerFromOrg](#actionsdeleteselfhostedrunnerfromorg) - Delete a self-hosted runner from an organization
* [actionsDeleteSelfHostedRunnerFromRepo](#actionsdeleteselfhostedrunnerfromrepo) - Delete a self-hosted runner from a repository
* [actionsDeleteSelfHostedRunnerGroupFromOrg](#actionsdeleteselfhostedrunnergroupfromorg) - Delete a self-hosted runner group from an organization
* [actionsDeleteWorkflowRun](#actionsdeleteworkflowrun) - Delete a workflow run
* [actionsDeleteWorkflowRunLogs](#actionsdeleteworkflowrunlogs) - Delete workflow run logs
* [actionsDisableSelectedRepositoryGithubActionsOrganization](#actionsdisableselectedrepositorygithubactionsorganization) - Disable a selected repository for GitHub Actions in an organization
* [actionsDisableWorkflow](#actionsdisableworkflow) - Disable a workflow
* [actionsDownloadArtifact](#actionsdownloadartifact) - Download an artifact
* [actionsDownloadJobLogsForWorkflowRun](#actionsdownloadjoblogsforworkflowrun) - Download job logs for a workflow run
* [actionsDownloadWorkflowRunAttemptLogs](#actionsdownloadworkflowrunattemptlogs) - Download workflow run attempt logs
* [actionsDownloadWorkflowRunLogs](#actionsdownloadworkflowrunlogs) - Download workflow run logs
* [actionsEnableSelectedRepositoryGithubActionsOrganization](#actionsenableselectedrepositorygithubactionsorganization) - Enable a selected repository for GitHub Actions in an organization
* [actionsEnableWorkflow](#actionsenableworkflow) - Enable a workflow
* [actionsGetActionsCacheUsage](#actionsgetactionscacheusage) - Get GitHub Actions cache usage for a repository
* [actionsGetActionsCacheUsageByRepoForOrg](#actionsgetactionscacheusagebyrepofororg) - List repositories with GitHub Actions cache usage for an organization
* [actionsGetActionsCacheUsageForEnterprise](#actionsgetactionscacheusageforenterprise) - Get GitHub Actions cache usage for an enterprise
* [actionsGetActionsCacheUsageForOrg](#actionsgetactionscacheusagefororg) - Get GitHub Actions cache usage for an organization
* [actionsGetActionsCacheUsagePolicy](#actionsgetactionscacheusagepolicy) - Get GitHub Actions cache usage policy for a repository
* [actionsGetActionsCacheUsagePolicyForEnterprise](#actionsgetactionscacheusagepolicyforenterprise) - Get GitHub Actions cache usage policy for an enterprise
* [actionsGetAllowedActionsOrganization](#actionsgetallowedactionsorganization) - Get allowed actions for an organization
* [actionsGetAllowedActionsRepository](#actionsgetallowedactionsrepository) - Get allowed actions for a repository
* [actionsGetArtifact](#actionsgetartifact) - Get an artifact
* [actionsGetEnvironmentPublicKey](#actionsgetenvironmentpublickey) - Get an environment public key
* [actionsGetEnvironmentSecret](#actionsgetenvironmentsecret) - Get an environment secret
* [actionsGetGithubActionsDefaultWorkflowPermissionsEnterprise](#actionsgetgithubactionsdefaultworkflowpermissionsenterprise) - Get default workflow permissions for an enterprise
* [actionsGetGithubActionsDefaultWorkflowPermissionsOrganization](#actionsgetgithubactionsdefaultworkflowpermissionsorganization) - Get default workflow permissions for an organization
* [actionsGetGithubActionsDefaultWorkflowPermissionsRepository](#actionsgetgithubactionsdefaultworkflowpermissionsrepository) - Get default workflow permissions for a repository
* [actionsGetGithubActionsPermissionsOrganization](#actionsgetgithubactionspermissionsorganization) - Get GitHub Actions permissions for an organization
* [actionsGetGithubActionsPermissionsRepository](#actionsgetgithubactionspermissionsrepository) - Get GitHub Actions permissions for a repository
* [actionsGetJobForWorkflowRun](#actionsgetjobforworkflowrun) - Get a job for a workflow run
* [actionsGetOrgPublicKey](#actionsgetorgpublickey) - Get an organization public key
* [actionsGetOrgSecret](#actionsgetorgsecret) - Get an organization secret
* [actionsGetPendingDeploymentsForRun](#actionsgetpendingdeploymentsforrun) - Get pending deployments for a workflow run
* [actionsGetRepoPublicKey](#actionsgetrepopublickey) - Get a repository public key
* [actionsGetRepoSecret](#actionsgetreposecret) - Get a repository secret
* [actionsGetReviewsForRun](#actionsgetreviewsforrun) - Get the review history for a workflow run
* [actionsGetSelfHostedRunnerForOrg](#actionsgetselfhostedrunnerfororg) - Get a self-hosted runner for an organization
* [actionsGetSelfHostedRunnerForRepo](#actionsgetselfhostedrunnerforrepo) - Get a self-hosted runner for a repository
* [actionsGetSelfHostedRunnerGroupForOrg](#actionsgetselfhostedrunnergroupfororg) - Get a self-hosted runner group for an organization
* [actionsGetWorkflow](#actionsgetworkflow) - Get a workflow
* [actionsGetWorkflowAccessToRepository](#actionsgetworkflowaccesstorepository) - Get the level of access for workflows outside of the repository
* [actionsGetWorkflowRun](#actionsgetworkflowrun) - Get a workflow run
* [actionsGetWorkflowRunAttempt](#actionsgetworkflowrunattempt) - Get a workflow run attempt
* [actionsListArtifactsForRepo](#actionslistartifactsforrepo) - List artifacts for a repository
* [actionsListEnvironmentSecrets](#actionslistenvironmentsecrets) - List environment secrets
* [actionsListJobsForWorkflowRun](#actionslistjobsforworkflowrun) - List jobs for a workflow run
* [actionsListJobsForWorkflowRunAttempt](#actionslistjobsforworkflowrunattempt) - List jobs for a workflow run attempt
* [actionsListLabelsForSelfHostedRunnerForOrg](#actionslistlabelsforselfhostedrunnerfororg) - List labels for a self-hosted runner for an organization
* [actionsListLabelsForSelfHostedRunnerForRepo](#actionslistlabelsforselfhostedrunnerforrepo) - List labels for a self-hosted runner for a repository
* [actionsListOrgSecrets](#actionslistorgsecrets) - List organization secrets
* [actionsListRepoAccessToSelfHostedRunnerGroupInOrg](#actionslistrepoaccesstoselfhostedrunnergroupinorg) - List repository access to a self-hosted runner group in an organization
* [actionsListRepoSecrets](#actionslistreposecrets) - List repository secrets
* [actionsListRepoWorkflows](#actionslistrepoworkflows) - List repository workflows
* [actionsListRunnerApplicationsForOrg](#actionslistrunnerapplicationsfororg) - List runner applications for an organization
* [actionsListRunnerApplicationsForRepo](#actionslistrunnerapplicationsforrepo) - List runner applications for a repository
* [actionsListSelectedReposForOrgSecret](#actionslistselectedreposfororgsecret) - List selected repositories for an organization secret
* [actionsListSelectedRepositoriesEnabledGithubActionsOrganization](#actionslistselectedrepositoriesenabledgithubactionsorganization) - List selected repositories enabled for GitHub Actions in an organization
* [actionsListSelfHostedRunnerGroupsForOrg](#actionslistselfhostedrunnergroupsfororg) - List self-hosted runner groups for an organization
* [actionsListSelfHostedRunnersForOrg](#actionslistselfhostedrunnersfororg) - List self-hosted runners for an organization
* [actionsListSelfHostedRunnersForRepo](#actionslistselfhostedrunnersforrepo) - List self-hosted runners for a repository
* [actionsListSelfHostedRunnersInGroupForOrg](#actionslistselfhostedrunnersingroupfororg) - List self-hosted runners in a group for an organization
* [actionsListWorkflowRunArtifacts](#actionslistworkflowrunartifacts) - List workflow run artifacts
* [actionsListWorkflowRuns](#actionslistworkflowruns) - List workflow runs for a workflow
* [actionsListWorkflowRunsForRepo](#actionslistworkflowrunsforrepo) - List workflow runs for a repository
* [actionsReRunJobForWorkflowRun](#actionsrerunjobforworkflowrun) - Re-run a job from a workflow run
* [actionsReRunWorkflow](#actionsrerunworkflow) - Re-run a workflow
* [actionsReRunWorkflowFailedJobs](#actionsrerunworkflowfailedjobs) - Re-run failed jobs from a workflow run
* [actionsRemoveAllCustomLabelsFromSelfHostedRunnerForOrg](#actionsremoveallcustomlabelsfromselfhostedrunnerfororg) - Remove all custom labels from a self-hosted runner for an organization
* [actionsRemoveAllCustomLabelsFromSelfHostedRunnerForRepo](#actionsremoveallcustomlabelsfromselfhostedrunnerforrepo) - Remove all custom labels from a self-hosted runner for a repository
* [actionsRemoveCustomLabelFromSelfHostedRunnerForOrg](#actionsremovecustomlabelfromselfhostedrunnerfororg) - Remove a custom label from a self-hosted runner for an organization
* [actionsRemoveCustomLabelFromSelfHostedRunnerForRepo](#actionsremovecustomlabelfromselfhostedrunnerforrepo) - Remove a custom label from a self-hosted runner for a repository
* [actionsRemoveRepoAccessToSelfHostedRunnerGroupInOrg](#actionsremoverepoaccesstoselfhostedrunnergroupinorg) - Remove repository access to a self-hosted runner group in an organization
* [actionsRemoveSelectedRepoFromOrgSecret](#actionsremoveselectedrepofromorgsecret) - Remove selected repository from an organization secret
* [actionsRemoveSelfHostedRunnerFromGroupForOrg](#actionsremoveselfhostedrunnerfromgroupfororg) - Remove a self-hosted runner from a group for an organization
* [actionsReviewPendingDeploymentsForRun](#actionsreviewpendingdeploymentsforrun) - Review pending deployments for a workflow run
* [actionsSetActionsCacheUsagePolicy](#actionssetactionscacheusagepolicy) - Set GitHub Actions cache usage policy for a repository
* [actionsSetActionsCacheUsagePolicyForEnterprise](#actionssetactionscacheusagepolicyforenterprise) - Set GitHub Actions cache usage policy for an enterprise
* [actionsSetAllowedActionsOrganization](#actionssetallowedactionsorganization) - Set allowed actions for an organization
* [actionsSetAllowedActionsRepository](#actionssetallowedactionsrepository) - Set allowed actions for a repository
* [actionsSetCustomLabelsForSelfHostedRunnerForOrg](#actionssetcustomlabelsforselfhostedrunnerfororg) - Set custom labels for a self-hosted runner for an organization
* [actionsSetCustomLabelsForSelfHostedRunnerForRepo](#actionssetcustomlabelsforselfhostedrunnerforrepo) - Set custom labels for a self-hosted runner for a repository
* [actionsSetGithubActionsDefaultWorkflowPermissionsEnterprise](#actionssetgithubactionsdefaultworkflowpermissionsenterprise) - Set default workflow permissions for an enterprise
* [actionsSetGithubActionsDefaultWorkflowPermissionsOrganization](#actionssetgithubactionsdefaultworkflowpermissionsorganization) - Set default workflow permissions for an organization
* [actionsSetGithubActionsDefaultWorkflowPermissionsRepository](#actionssetgithubactionsdefaultworkflowpermissionsrepository) - Set default workflow permissions for a repository
* [actionsSetGithubActionsPermissionsOrganization](#actionssetgithubactionspermissionsorganization) - Set GitHub Actions permissions for an organization
* [actionsSetGithubActionsPermissionsRepository](#actionssetgithubactionspermissionsrepository) - Set GitHub Actions permissions for a repository
* [actionsSetRepoAccessToSelfHostedRunnerGroupInOrg](#actionssetrepoaccesstoselfhostedrunnergroupinorg) - Set repository access for a self-hosted runner group in an organization
* [actionsSetSelectedReposForOrgSecret](#actionssetselectedreposfororgsecret) - Set selected repositories for an organization secret
* [actionsSetSelectedRepositoriesEnabledGithubActionsOrganization](#actionssetselectedrepositoriesenabledgithubactionsorganization) - Set selected repositories enabled for GitHub Actions in an organization
* [actionsSetSelfHostedRunnersInGroupForOrg](#actionssetselfhostedrunnersingroupfororg) - Set self-hosted runners in a group for an organization
* [actionsSetWorkflowAccessToRepository](#actionssetworkflowaccesstorepository) - Set the level of access for workflows outside of the repository
* [actionsUpdateSelfHostedRunnerGroupForOrg](#actionsupdateselfhostedrunnergroupfororg) - Update a self-hosted runner group for an organization

## actionsAddCustomLabelsToSelfHostedRunnerForOrg

Add custom labels to a self-hosted runner configured in an organization.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#add-custom-labels-to-a-self-hosted-runner-for-an-organization>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsAddCustomLabelsToSelfHostedRunnerForOrgRequest;
use \OpenAPI\OpenAPI\Models\Operations\ActionsAddCustomLabelsToSelfHostedRunnerForOrgRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsAddCustomLabelsToSelfHostedRunnerForOrgRequest();
    $request->requestBody = new ActionsAddCustomLabelsToSelfHostedRunnerForOrgRequestBody();
    $request->requestBody->labels = [
        'illum',
        'vel',
        'error',
    ];
    $request->org = 'deserunt';
    $request->runnerId = 384382;

    $response = $sdk->actions->actionsAddCustomLabelsToSelfHostedRunnerForOrg($request);

    if ($response->actionsAddCustomLabelsToSelfHostedRunnerForOrg200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsAddCustomLabelsToSelfHostedRunnerForRepo

Add custom labels to a self-hosted runner configured in a repository.

You must authenticate using an access token with the `repo` scope to use this
endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#add-custom-labels-to-a-self-hosted-runner-for-a-repository>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsAddCustomLabelsToSelfHostedRunnerForRepoRequest;
use \OpenAPI\OpenAPI\Models\Operations\ActionsAddCustomLabelsToSelfHostedRunnerForRepoRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsAddCustomLabelsToSelfHostedRunnerForRepoRequest();
    $request->requestBody = new ActionsAddCustomLabelsToSelfHostedRunnerForRepoRequestBody();
    $request->requestBody->labels = [
        'magnam',
        'debitis',
    ];
    $request->owner = 'ipsa';
    $request->repo = 'delectus';
    $request->runnerId = 272656;

    $response = $sdk->actions->actionsAddCustomLabelsToSelfHostedRunnerForRepo($request);

    if ($response->actionsAddCustomLabelsToSelfHostedRunnerForRepo200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsAddRepoAccessToSelfHostedRunnerGroupInOrg

Adds a repository to the list of selected repositories that can access a self-hosted runner group. The runner group must have `visibility` set to `selected`. For more information, see "[Create a self-hosted runner group for an organization](#create-a-self-hosted-runner-group-for-an-organization)."

You must authenticate using an access token with the `admin:org`
scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#add-repository-acess-to-a-self-hosted-runner-group-in-an-organization>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgRequest();
    $request->org = 'suscipit';
    $request->repositoryId = 477665;
    $request->runnerGroupId = 791725;

    $response = $sdk->actions->actionsAddRepoAccessToSelfHostedRunnerGroupInOrg($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsAddSelectedRepoToOrgSecret

Adds a repository to an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://docs.github.com/enterprise-server@3.6/rest/reference/actions#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#add-selected-repository-to-an-organization-secret>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsAddSelectedRepoToOrgSecretRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsAddSelectedRepoToOrgSecretRequest();
    $request->org = 'placeat';
    $request->repositoryId = 528895;
    $request->secretName = 'iusto';

    $response = $sdk->actions->actionsAddSelectedRepoToOrgSecret($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsAddSelfHostedRunnerToGroupForOrg

Adds a self-hosted runner to a runner group configured in an organization.

You must authenticate using an access token with the `admin:org`
scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#add-a-self-hosted-runner-to-a-group-for-an-organization>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsAddSelfHostedRunnerToGroupForOrgRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsAddSelfHostedRunnerToGroupForOrgRequest();
    $request->org = 'excepturi';
    $request->runnerGroupId = 392785;
    $request->runnerId = 925597;

    $response = $sdk->actions->actionsAddSelfHostedRunnerToGroupForOrg($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsCancelWorkflowRun

Cancels a workflow run using its `id`. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#cancel-a-workflow-run>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsCancelWorkflowRunRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsCancelWorkflowRunRequest();
    $request->owner = 'temporibus';
    $request->repo = 'ab';
    $request->runId = 337396;

    $response = $sdk->actions->actionsCancelWorkflowRun($request);

    if ($response->emptyObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsCreateOrUpdateEnvironmentSecret

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
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#create-or-update-an-environment-secret>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsCreateOrUpdateEnvironmentSecretRequest;
use \OpenAPI\OpenAPI\Models\Operations\ActionsCreateOrUpdateEnvironmentSecretRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsCreateOrUpdateEnvironmentSecretRequest();
    $request->requestBody = new ActionsCreateOrUpdateEnvironmentSecretRequestBody();
    $request->requestBody->encryptedValue = 'veritatis';
    $request->requestBody->keyId = 'deserunt';
    $request->environmentName = 'perferendis';
    $request->repositoryId = 368241;
    $request->secretName = 'repellendus';

    $response = $sdk->actions->actionsCreateOrUpdateEnvironmentSecret($request);

    if ($response->emptyObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsCreateOrUpdateOrgSecret

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
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#create-or-update-an-organization-secret>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsCreateOrUpdateOrgSecretRequest;
use \OpenAPI\OpenAPI\Models\Operations\ActionsCreateOrUpdateOrgSecretRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ActionsCreateOrUpdateOrgSecretRequestBodyVisibilityEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsCreateOrUpdateOrgSecretRequest();
    $request->requestBody = new ActionsCreateOrUpdateOrgSecretRequestBody();
    $request->requestBody->encryptedValue = 'sapiente';
    $request->requestBody->keyId = 'quo';
    $request->requestBody->selectedRepositoryIds = [
        870013,
    ];
    $request->requestBody->visibility = ActionsCreateOrUpdateOrgSecretRequestBodyVisibilityEnum::SELECTED;
    $request->org = 'maiores';
    $request->secretName = 'molestiae';

    $response = $sdk->actions->actionsCreateOrUpdateOrgSecret($request);

    if ($response->emptyObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsCreateOrUpdateRepoSecret

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
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#create-or-update-a-repository-secret>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsCreateOrUpdateRepoSecretRequest;
use \OpenAPI\OpenAPI\Models\Operations\ActionsCreateOrUpdateRepoSecretRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsCreateOrUpdateRepoSecretRequest();
    $request->requestBody = new ActionsCreateOrUpdateRepoSecretRequestBody();
    $request->requestBody->encryptedValue = 'quod';
    $request->requestBody->keyId = 'quod';
    $request->owner = 'esse';
    $request->repo = 'totam';
    $request->secretName = 'porro';

    $response = $sdk->actions->actionsCreateOrUpdateRepoSecret($request);

    if ($response->emptyObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsCreateRegistrationTokenForOrg

Returns a token that you can pass to the `config` script. The token expires after one hour.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

#### Example using registration token

Configure your self-hosted runner, replacing `TOKEN` with the registration token provided by this endpoint.

```
./config.sh --url https://github.com/octo-org --token TOKEN
```

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#create-a-registration-token-for-an-organization>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsCreateRegistrationTokenForOrgRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsCreateRegistrationTokenForOrgRequest();
    $request->org = 'dolorum';

    $response = $sdk->actions->actionsCreateRegistrationTokenForOrg($request);

    if ($response->authenticationToken !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsCreateRegistrationTokenForRepo

Returns a token that you can pass to the `config` script. The token expires after one hour. You must authenticate
using an access token with the `repo` scope to use this endpoint.

#### Example using registration token
 
Configure your self-hosted runner, replacing `TOKEN` with the registration token provided by this endpoint.

```
./config.sh --url https://github.com/octo-org/octo-repo-artifacts --token TOKEN
```

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#create-a-registration-token-for-a-repository>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsCreateRegistrationTokenForRepoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsCreateRegistrationTokenForRepoRequest();
    $request->owner = 'dicta';
    $request->repo = 'nam';

    $response = $sdk->actions->actionsCreateRegistrationTokenForRepo($request);

    if ($response->authenticationToken !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsCreateRemoveTokenForOrg

Returns a token that you can pass to the `config` script to remove a self-hosted runner from an organization. The token expires after one hour.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

#### Example using remove token

To remove your self-hosted runner from an organization, replace `TOKEN` with the remove token provided by this
endpoint.

```
./config.sh remove --token TOKEN
```

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#create-a-remove-token-for-an-organization>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsCreateRemoveTokenForOrgRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsCreateRemoveTokenForOrgRequest();
    $request->org = 'officia';

    $response = $sdk->actions->actionsCreateRemoveTokenForOrg($request);

    if ($response->authenticationToken !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsCreateRemoveTokenForRepo

Returns a token that you can pass to remove a self-hosted runner from a repository. The token expires after one hour.
You must authenticate using an access token with the `repo` scope to use this endpoint.

#### Example using remove token
 
To remove your self-hosted runner from a repository, replace TOKEN with the remove token provided by this endpoint.

```
./config.sh remove --token TOKEN
```

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#create-a-remove-token-for-a-repository>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsCreateRemoveTokenForRepoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsCreateRemoveTokenForRepoRequest();
    $request->owner = 'occaecati';
    $request->repo = 'fugit';

    $response = $sdk->actions->actionsCreateRemoveTokenForRepo($request);

    if ($response->authenticationToken !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsCreateSelfHostedRunnerGroupForOrg

Creates a new self-hosted runner group for an organization.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#create-a-self-hosted-runner-group-for-an-organization>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsCreateSelfHostedRunnerGroupForOrgRequest;
use \OpenAPI\OpenAPI\Models\Operations\ActionsCreateSelfHostedRunnerGroupForOrgRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ActionsCreateSelfHostedRunnerGroupForOrgRequestBodyVisibilityEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsCreateSelfHostedRunnerGroupForOrgRequest();
    $request->requestBody = new ActionsCreateSelfHostedRunnerGroupForOrgRequestBody();
    $request->requestBody->allowsPublicRepositories = false;
    $request->requestBody->name = 'Irvin Rosenbaum III';
    $request->requestBody->restrictedToWorkflows = false;
    $request->requestBody->runners = [
        264555,
        186332,
    ];
    $request->requestBody->selectedRepositoryIds = [
        736918,
        456150,
        216550,
        568434,
    ];
    $request->requestBody->selectedWorkflows = [
        'octo-org/octo-repo/.github/workflows/deploy.yaml@main',
    ];
    $request->requestBody->visibility = ActionsCreateSelfHostedRunnerGroupForOrgRequestBodyVisibilityEnum::SELECTED;
    $request->org = 'ad';

    $response = $sdk->actions->actionsCreateSelfHostedRunnerGroupForOrg($request);

    if ($response->runnerGroupsOrg !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsCreateWorkflowDispatch

You can use this endpoint to manually trigger a GitHub Actions workflow run. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`.

You must configure your GitHub Actions workflow to run when the [`workflow_dispatch` webhook](/developers/webhooks-and-events/webhook-events-and-payloads#workflow_dispatch) event occurs. The `inputs` are configured in the workflow file. For more information about how to configure the `workflow_dispatch` event in the workflow file, see "[Events that trigger workflows](/actions/reference/events-that-trigger-workflows#workflow_dispatch)."

You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint. For more information, see "[Creating a personal access token for the command line](https://docs.github.com/enterprise-server@3.6/articles/creating-a-personal-access-token-for-the-command-line)."

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#create-a-workflow-dispatch-event>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsCreateWorkflowDispatchRequest;
use \OpenAPI\OpenAPI\Models\Operations\ActionsCreateWorkflowDispatchRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsCreateWorkflowDispatchRequest();
    $request->requestBody = new ActionsCreateWorkflowDispatchRequestBody();
    $request->requestBody->inputs = [
        'sed' => 'iste',
        'dolor' => 'natus',
        'laboriosam' => 'hic',
    ];
    $request->requestBody->ref = 'saepe';
    $request->owner = 'fuga';
    $request->repo = 'in';
    $request->workflowId = 613064;

    $response = $sdk->actions->actionsCreateWorkflowDispatch($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsDeleteArtifact

Deletes an artifact for a workflow run. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#delete-an-artifact>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsDeleteArtifactRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsDeleteArtifactRequest();
    $request->artifactId = 437032;
    $request->owner = 'saepe';
    $request->repo = 'quidem';

    $response = $sdk->actions->actionsDeleteArtifact($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsDeleteEnvironmentSecret

Deletes a secret in an environment using the secret name. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#delete-an-environment-secret>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsDeleteEnvironmentSecretRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsDeleteEnvironmentSecretRequest();
    $request->environmentName = 'architecto';
    $request->repositoryId = 60225;
    $request->secretName = 'reiciendis';

    $response = $sdk->actions->actionsDeleteEnvironmentSecret($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsDeleteOrgSecret

Deletes a secret in an organization using the secret name. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#delete-an-organization-secret>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsDeleteOrgSecretRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsDeleteOrgSecretRequest();
    $request->org = 'est';
    $request->secretName = 'mollitia';

    $response = $sdk->actions->actionsDeleteOrgSecret($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsDeleteRepoSecret

Deletes a secret in a repository using the secret name. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#delete-a-repository-secret>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsDeleteRepoSecretRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsDeleteRepoSecretRequest();
    $request->owner = 'laborum';
    $request->repo = 'dolores';
    $request->secretName = 'dolorem';

    $response = $sdk->actions->actionsDeleteRepoSecret($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsDeleteSelfHostedRunnerFromOrg

Forces the removal of a self-hosted runner from an organization. You can use this endpoint to completely remove the runner when the machine you were using no longer exists.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#delete-a-self-hosted-runner-from-an-organization>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsDeleteSelfHostedRunnerFromOrgRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsDeleteSelfHostedRunnerFromOrgRequest();
    $request->org = 'corporis';
    $request->runnerId = 128926;

    $response = $sdk->actions->actionsDeleteSelfHostedRunnerFromOrg($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsDeleteSelfHostedRunnerFromRepo

Forces the removal of a self-hosted runner from a repository. You can use this endpoint to completely remove the runner when the machine you were using no longer exists.

You must authenticate using an access token with the `repo`
scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#delete-a-self-hosted-runner-from-a-repository>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsDeleteSelfHostedRunnerFromRepoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsDeleteSelfHostedRunnerFromRepoRequest();
    $request->owner = 'nobis';
    $request->repo = 'enim';
    $request->runnerId = 607831;

    $response = $sdk->actions->actionsDeleteSelfHostedRunnerFromRepo($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsDeleteSelfHostedRunnerGroupFromOrg

Deletes a self-hosted runner group for an organization.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#delete-a-self-hosted-runner-group-from-an-organization>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsDeleteSelfHostedRunnerGroupFromOrgRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsDeleteSelfHostedRunnerGroupFromOrgRequest();
    $request->org = 'nemo';
    $request->runnerGroupId = 325047;

    $response = $sdk->actions->actionsDeleteSelfHostedRunnerGroupFromOrg($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsDeleteWorkflowRun

Delete a specific workflow run. Anyone with write access to the repository can use this endpoint. If the repository is
private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:write` permission to use
this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#delete-a-workflow-run>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsDeleteWorkflowRunRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsDeleteWorkflowRunRequest();
    $request->owner = 'excepturi';
    $request->repo = 'accusantium';
    $request->runId = 438601;

    $response = $sdk->actions->actionsDeleteWorkflowRun($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsDeleteWorkflowRunLogs

Deletes all logs for a workflow run. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#delete-workflow-run-logs>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsDeleteWorkflowRunLogsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsDeleteWorkflowRunLogsRequest();
    $request->owner = 'culpa';
    $request->repo = 'doloribus';
    $request->runId = 958950;

    $response = $sdk->actions->actionsDeleteWorkflowRunLogs($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsDisableSelectedRepositoryGithubActionsOrganization

Removes a repository from the list of selected repositories that are enabled for GitHub Actions in an organization. To use this endpoint, the organization permission policy for `enabled_repositories` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an organization](#set-github-actions-permissions-for-an-organization)."

You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#disable-a-selected-repository-for-github-actions-in-an-organization>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsDisableSelectedRepositoryGithubActionsOrganizationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsDisableSelectedRepositoryGithubActionsOrganizationRequest();
    $request->org = 'architecto';
    $request->repositoryId = 652790;

    $response = $sdk->actions->actionsDisableSelectedRepositoryGithubActionsOrganization($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsDisableWorkflow

Disables a workflow and sets the `state` of the workflow to `disabled_manually`. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`.

You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#disable-a-workflow>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsDisableWorkflowRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsDisableWorkflowRequest();
    $request->owner = 'dolorem';
    $request->repo = 'culpa';
    $request->workflowId = 995300;

    $response = $sdk->actions->actionsDisableWorkflow($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsDownloadArtifact

Gets a redirect URL to download an archive for a repository. This URL expires after 1 minute. Look for `Location:` in
the response header to find the URL for the download. The `:archive_format` must be `zip`. Anyone with read access to
the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope.
GitHub Apps must have the `actions:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#download-an-artifact>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsDownloadArtifactRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsDownloadArtifactRequest();
    $request->archiveFormat = 'mollitia';
    $request->artifactId = 581850;
    $request->owner = 'numquam';
    $request->repo = 'commodi';

    $response = $sdk->actions->actionsDownloadArtifact($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsDownloadJobLogsForWorkflowRun

Gets a redirect URL to download a plain text file of logs for a workflow job. This link expires after 1 minute. Look
for `Location:` in the response header to find the URL for the download. Anyone with read access to the repository can
use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must
have the `actions:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#download-job-logs-for-a-workflow-run>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsDownloadJobLogsForWorkflowRunRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsDownloadJobLogsForWorkflowRunRequest();
    $request->jobId = 466311;
    $request->owner = 'molestiae';
    $request->repo = 'velit';

    $response = $sdk->actions->actionsDownloadJobLogsForWorkflowRun($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsDownloadWorkflowRunAttemptLogs

Gets a redirect URL to download an archive of log files for a specific workflow run attempt. This link expires after
1 minute. Look for `Location:` in the response header to find the URL for the download. Anyone with read access to
the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope.
GitHub Apps must have the `actions:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#download-workflow-run-attempt-logs>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsDownloadWorkflowRunAttemptLogsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsDownloadWorkflowRunAttemptLogsRequest();
    $request->attemptNumber = 623510;
    $request->owner = 'quia';
    $request->repo = 'quis';
    $request->runId = 110375;

    $response = $sdk->actions->actionsDownloadWorkflowRunAttemptLogs($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsDownloadWorkflowRunLogs

Gets a redirect URL to download an archive of log files for a workflow run. This link expires after 1 minute. Look for
`Location:` in the response header to find the URL for the download. Anyone with read access to the repository can use
this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have
the `actions:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#download-workflow-run-logs>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsDownloadWorkflowRunLogsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsDownloadWorkflowRunLogsRequest();
    $request->owner = 'laborum';
    $request->repo = 'animi';
    $request->runId = 317202;

    $response = $sdk->actions->actionsDownloadWorkflowRunLogs($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsEnableSelectedRepositoryGithubActionsOrganization

Adds a repository to the list of selected repositories that are enabled for GitHub Actions in an organization. To use this endpoint, the organization permission policy for `enabled_repositories` must be must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an organization](#set-github-actions-permissions-for-an-organization)."

You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#enable-a-selected-repository-for-github-actions-in-an-organization>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsEnableSelectedRepositoryGithubActionsOrganizationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsEnableSelectedRepositoryGithubActionsOrganizationRequest();
    $request->org = 'odit';
    $request->repositoryId = 778346;

    $response = $sdk->actions->actionsEnableSelectedRepositoryGithubActionsOrganization($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsEnableWorkflow

Enables a workflow and sets the `state` of the workflow to `active`. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`.

You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#enable-a-workflow>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsEnableWorkflowRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsEnableWorkflowRequest();
    $request->owner = 'sequi';
    $request->repo = 'tenetur';
    $request->workflowId = 662527;

    $response = $sdk->actions->actionsEnableWorkflow($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsGetActionsCacheUsage

Gets GitHub Actions cache usage for a repository.
The data fetched using this API is refreshed approximately every 5 minutes, so values returned from this endpoint may take at least 5 minutes to get updated.
Anyone with read access to the repository can use this endpoint. If the repository is private, you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#get-github-actions-cache-usage-for-a-repository>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsGetActionsCacheUsageRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsGetActionsCacheUsageRequest();
    $request->owner = 'possimus';
    $request->repo = 'aut';

    $response = $sdk->actions->actionsGetActionsCacheUsage($request);

    if ($response->actionsCacheUsageByRepository !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsGetActionsCacheUsageByRepoForOrg

Lists repositories and their GitHub Actions cache usage for an organization.
The data fetched using this API is refreshed approximately every 5 minutes, so values returned from this endpoint may take at least 5 minutes to get updated.
You must authenticate using an access token with the `read:org` scope to use this endpoint. GitHub Apps must have the `organization_admistration:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#list-repositories-with-github-actions-cache-usage-for-an-organization>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsGetActionsCacheUsageByRepoForOrgRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsGetActionsCacheUsageByRepoForOrgRequest();
    $request->org = 'quasi';
    $request->page = 622846;
    $request->perPage = 837945;

    $response = $sdk->actions->actionsGetActionsCacheUsageByRepoForOrg($request);

    if ($response->actionsGetActionsCacheUsageByRepoForOrg200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsGetActionsCacheUsageForEnterprise

Gets the total GitHub Actions cache usage for an enterprise.
The data fetched using this API is refreshed approximately every 5 minutes, so values returned from this endpoint may take at least 5 minutes to get updated.
You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#get-github-actions-cache-usage-for-an-enterprise>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsGetActionsCacheUsageForEnterpriseRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsGetActionsCacheUsageForEnterpriseRequest();
    $request->enterprise = 'laborum';

    $response = $sdk->actions->actionsGetActionsCacheUsageForEnterprise($request);

    if ($response->actionsCacheUsageOrgEnterprise !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsGetActionsCacheUsageForOrg

Gets the total GitHub Actions cache usage for an organization.
The data fetched using this API is refreshed approximately every 5 minutes, so values returned from this endpoint may take at least 5 minutes to get updated.
You must authenticate using an access token with the `read:org` scope to use this endpoint. GitHub Apps must have the `organization_admistration:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#get-github-actions-cache-usage-for-an-organization>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsGetActionsCacheUsageForOrgRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsGetActionsCacheUsageForOrgRequest();
    $request->org = 'quasi';

    $response = $sdk->actions->actionsGetActionsCacheUsageForOrg($request);

    if ($response->actionsCacheUsageOrgEnterprise !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsGetActionsCacheUsagePolicy

Gets GitHub Actions cache usage policy for a repository.
You must authenticate using an access token with the `repo` scope to use this endpoint.
GitHub Apps must have the `actions:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#get-github-actions-cache-usage-policy-for-a-repository>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsGetActionsCacheUsagePolicyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsGetActionsCacheUsagePolicyRequest();
    $request->owner = 'reiciendis';
    $request->repo = 'voluptatibus';

    $response = $sdk->actions->actionsGetActionsCacheUsagePolicy($request);

    if ($response->actionsCacheUsagePolicyForRepository !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsGetActionsCacheUsagePolicyForEnterprise

Gets the GitHub Actions cache usage policy for an enterprise.
You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
GitHub Apps must have the `enterprise_administration:write` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#get-github-actions-cache-usage-policy-for-an-enterprise>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsGetActionsCacheUsagePolicyForEnterpriseRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsGetActionsCacheUsagePolicyForEnterpriseRequest();
    $request->enterprise = 'vero';

    $response = $sdk->actions->actionsGetActionsCacheUsagePolicyForEnterprise($request);

    if ($response->actionsCacheUsagePolicyEnterprise !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsGetAllowedActionsOrganization

Gets the selected actions that are allowed in an organization. To use this endpoint, the organization permission policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an organization](#set-github-actions-permissions-for-an-organization).""

You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#get-allowed-actions-for-an-organization>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsGetAllowedActionsOrganizationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsGetAllowedActionsOrganizationRequest();
    $request->org = 'nihil';

    $response = $sdk->actions->actionsGetAllowedActionsOrganization($request);

    if ($response->selectedActions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsGetAllowedActionsRepository

Gets the settings for selected actions that are allowed in a repository. To use this endpoint, the repository policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for a repository](#set-github-actions-permissions-for-a-repository)."

You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `administration` repository permission to use this API.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#get-allowed-actions-for-a-repository>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsGetAllowedActionsRepositoryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsGetAllowedActionsRepositoryRequest();
    $request->owner = 'praesentium';
    $request->repo = 'voluptatibus';

    $response = $sdk->actions->actionsGetAllowedActionsRepository($request);

    if ($response->selectedActions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsGetArtifact

Gets a specific artifact for a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#get-an-artifact>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsGetArtifactRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsGetArtifactRequest();
    $request->artifactId = 55714;
    $request->owner = 'omnis';
    $request->repo = 'voluptate';

    $response = $sdk->actions->actionsGetArtifact($request);

    if ($response->artifact !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsGetEnvironmentPublicKey

Get the public key for an environment, which you need to encrypt environment secrets. You need to encrypt a secret before you can create or update secrets. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `secrets` repository permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#get-an-environment-public-key>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsGetEnvironmentPublicKeyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsGetEnvironmentPublicKeyRequest();
    $request->environmentName = 'cum';
    $request->repositoryId = 19987;

    $response = $sdk->actions->actionsGetEnvironmentPublicKey($request);

    if ($response->actionsPublicKey !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsGetEnvironmentSecret

Gets a single environment secret without revealing its encrypted value. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#get-an-environment-secret>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsGetEnvironmentSecretRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsGetEnvironmentSecretRequest();
    $request->environmentName = 'doloremque';
    $request->repositoryId = 441711;
    $request->secretName = 'ut';

    $response = $sdk->actions->actionsGetEnvironmentSecret($request);

    if ($response->actionsSecret !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsGetGithubActionsDefaultWorkflowPermissionsEnterprise

Gets the default workflow permissions granted to the `GITHUB_TOKEN` when running workflows in an enterprise,
as well as whether GitHub Actions can submit approving pull request reviews. For more information, see
"[Enforcing a policy for workflow permissions in your enterprise](https://docs.github.com/enterprise-server@3.6/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-workflow-permissions-in-your-enterprise)."

You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
GitHub Apps must have the `enterprise_administration:write` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#get-default-workflow-permissions-for-an-enterprise>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsGetGithubActionsDefaultWorkflowPermissionsEnterpriseRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsGetGithubActionsDefaultWorkflowPermissionsEnterpriseRequest();
    $request->enterprise = 'maiores';

    $response = $sdk->actions->actionsGetGithubActionsDefaultWorkflowPermissionsEnterprise($request);

    if ($response->actionsGetDefaultWorkflowPermissions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsGetGithubActionsDefaultWorkflowPermissionsOrganization

Gets the default workflow permissions granted to the `GITHUB_TOKEN` when running workflows in an organization,
as well as whether GitHub Actions can submit approving pull request reviews. For more information, see
"[Setting the permissions of the GITHUB_TOKEN for your organization](https://docs.github.com/enterprise-server@3.6/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#setting-the-permissions-of-the-github_token-for-your-organization)."

You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#get-default-workflow-permissions>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsGetGithubActionsDefaultWorkflowPermissionsOrganizationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsGetGithubActionsDefaultWorkflowPermissionsOrganizationRequest();
    $request->org = 'dicta';

    $response = $sdk->actions->actionsGetGithubActionsDefaultWorkflowPermissionsOrganization($request);

    if ($response->actionsGetDefaultWorkflowPermissions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsGetGithubActionsDefaultWorkflowPermissionsRepository

Gets the default workflow permissions granted to the `GITHUB_TOKEN` when running workflows in a repository,
as well as if GitHub Actions can submit approving pull request reviews.
For more information, see "[Setting the permissions of the GITHUB_TOKEN for your repository](https://docs.github.com/enterprise-server@3.6/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#setting-the-permissions-of-the-github_token-for-your-repository)."

You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the repository `administration` permission to use this API.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#get-default-workflow-permissions-for-a-repository>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsGetGithubActionsDefaultWorkflowPermissionsRepositoryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsGetGithubActionsDefaultWorkflowPermissionsRepositoryRequest();
    $request->owner = 'corporis';
    $request->repo = 'dolore';

    $response = $sdk->actions->actionsGetGithubActionsDefaultWorkflowPermissionsRepository($request);

    if ($response->actionsGetDefaultWorkflowPermissions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsGetGithubActionsPermissionsOrganization

Gets the GitHub Actions permissions policy for repositories and allowed actions in an organization.

You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#get-github-actions-permissions-for-an-organization>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsGetGithubActionsPermissionsOrganizationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsGetGithubActionsPermissionsOrganizationRequest();
    $request->org = 'iusto';

    $response = $sdk->actions->actionsGetGithubActionsPermissionsOrganization($request);

    if ($response->actionsOrganizationPermissions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsGetGithubActionsPermissionsRepository

Gets the GitHub Actions permissions policy for a repository, including whether GitHub Actions is enabled and the actions allowed to run in the repository.

You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `administration` repository permission to use this API.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#get-github-actions-permissions-for-a-repository>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsGetGithubActionsPermissionsRepositoryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsGetGithubActionsPermissionsRepositoryRequest();
    $request->owner = 'dicta';
    $request->repo = 'harum';

    $response = $sdk->actions->actionsGetGithubActionsPermissionsRepository($request);

    if ($response->actionsRepositoryPermissions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsGetJobForWorkflowRun

Gets a specific job in a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#get-a-job-for-a-workflow-run>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsGetJobForWorkflowRunRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsGetJobForWorkflowRunRequest();
    $request->jobId = 317983;
    $request->owner = 'accusamus';
    $request->repo = 'commodi';

    $response = $sdk->actions->actionsGetJobForWorkflowRun($request);

    if ($response->job !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsGetOrgPublicKey

Gets your public key, which you need to encrypt secrets. You need to encrypt a secret before you can create or update secrets. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#get-an-organization-public-key>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsGetOrgPublicKeyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsGetOrgPublicKeyRequest();
    $request->org = 'repudiandae';

    $response = $sdk->actions->actionsGetOrgPublicKey($request);

    if ($response->actionsPublicKey !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsGetOrgSecret

Gets a single organization secret without revealing its encrypted value. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#get-an-organization-secret>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsGetOrgSecretRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsGetOrgSecretRequest();
    $request->org = 'quae';
    $request->secretName = 'ipsum';

    $response = $sdk->actions->actionsGetOrgSecret($request);

    if ($response->organizationActionsSecret !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsGetPendingDeploymentsForRun

Get all deployment environments for a workflow run that are waiting for protection rules to pass.

Anyone with read access to the repository can use this endpoint. If the repository is private, you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#get-pending-deployments-for-a-workflow-run>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsGetPendingDeploymentsForRunRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsGetPendingDeploymentsForRunRequest();
    $request->owner = 'quidem';
    $request->repo = 'molestias';
    $request->runId = 566602;

    $response = $sdk->actions->actionsGetPendingDeploymentsForRun($request);

    if ($response->pendingDeployments !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsGetRepoPublicKey

Gets your public key, which you need to encrypt secrets. You need to encrypt a secret before you can create or update secrets. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `secrets` repository permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#get-a-repository-public-key>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsGetRepoPublicKeyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsGetRepoPublicKeyRequest();
    $request->owner = 'pariatur';
    $request->repo = 'modi';

    $response = $sdk->actions->actionsGetRepoPublicKey($request);

    if ($response->actionsPublicKey !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsGetRepoSecret

Gets a single repository secret without revealing its encrypted value. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#get-a-repository-secret>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsGetRepoSecretRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsGetRepoSecretRequest();
    $request->owner = 'praesentium';
    $request->repo = 'rem';
    $request->secretName = 'voluptates';

    $response = $sdk->actions->actionsGetRepoSecret($request);

    if ($response->actionsSecret !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsGetReviewsForRun

Anyone with read access to the repository can use this endpoint. If the repository is private, you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#get-the-review-history-for-a-workflow-run>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsGetReviewsForRunRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsGetReviewsForRunRequest();
    $request->owner = 'quasi';
    $request->repo = 'repudiandae';
    $request->runId = 575947;

    $response = $sdk->actions->actionsGetReviewsForRun($request);

    if ($response->environmentApprovals !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsGetSelfHostedRunnerForOrg

Gets a specific self-hosted runner configured in an organization.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#get-a-self-hosted-runner-for-an-organization>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsGetSelfHostedRunnerForOrgRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsGetSelfHostedRunnerForOrgRequest();
    $request->org = 'veritatis';
    $request->runnerId = 929297;

    $response = $sdk->actions->actionsGetSelfHostedRunnerForOrg($request);

    if ($response->runner !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsGetSelfHostedRunnerForRepo

Gets a specific self-hosted runner configured in a repository.

You must authenticate using an access token with the `repo` scope to use this
endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#get-a-self-hosted-runner-for-a-repository>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsGetSelfHostedRunnerForRepoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsGetSelfHostedRunnerForRepoRequest();
    $request->owner = 'incidunt';
    $request->repo = 'enim';
    $request->runnerId = 9356;

    $response = $sdk->actions->actionsGetSelfHostedRunnerForRepo($request);

    if ($response->runner !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsGetSelfHostedRunnerGroupForOrg

Gets a specific self-hosted runner group for an organization.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#get-a-self-hosted-runner-group-for-an-organization>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsGetSelfHostedRunnerGroupForOrgRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsGetSelfHostedRunnerGroupForOrgRequest();
    $request->org = 'est';
    $request->runnerGroupId = 842342;

    $response = $sdk->actions->actionsGetSelfHostedRunnerGroupForOrg($request);

    if ($response->runnerGroupsOrg !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsGetWorkflow

Gets a specific workflow. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#get-a-workflow>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsGetWorkflowRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsGetWorkflowRequest();
    $request->owner = 'explicabo';
    $request->repo = 'deserunt';
    $request->workflowId = 'quibusdam';

    $response = $sdk->actions->actionsGetWorkflow($request);

    if ($response->workflow !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsGetWorkflowAccessToRepository

Gets the level of access that workflows outside of the repository have to actions and reusable workflows in the repository.
This endpoint only applies to internal repositories.
For more information, see "[Managing GitHub Actions settings for a repository](https://docs.github.com/enterprise-server@3.6/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#allowing-access-to-components-in-an-internal-repository)."

You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the
repository `administration` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#get-workflow-access-level-to-a-repository>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsGetWorkflowAccessToRepositoryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsGetWorkflowAccessToRepositoryRequest();
    $request->owner = 'labore';
    $request->repo = 'modi';

    $response = $sdk->actions->actionsGetWorkflowAccessToRepository($request);

    if ($response->actionsWorkflowAccessToRepository !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsGetWorkflowRun

Gets a specific workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#get-a-workflow-run>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsGetWorkflowRunRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsGetWorkflowRunRequest();
    $request->excludePullRequests = false;
    $request->owner = 'qui';
    $request->repo = 'aliquid';
    $request->runId = 586513;

    $response = $sdk->actions->actionsGetWorkflowRun($request);

    if ($response->workflowRun !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsGetWorkflowRunAttempt

Gets a specific workflow run attempt. Anyone with read access to the repository
can use this endpoint. If the repository is private you must use an access token
with the `repo` scope. GitHub Apps must have the `actions:read` permission to
use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#get-a-workflow-run-attempt>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsGetWorkflowRunAttemptRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsGetWorkflowRunAttemptRequest();
    $request->attemptNumber = 552822;
    $request->excludePullRequests = false;
    $request->owner = 'perferendis';
    $request->repo = 'magni';
    $request->runId = 828940;

    $response = $sdk->actions->actionsGetWorkflowRunAttempt($request);

    if ($response->workflowRun !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsListArtifactsForRepo

Lists all artifacts for a repository. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#list-artifacts-for-a-repository>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsListArtifactsForRepoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsListArtifactsForRepoRequest();
    $request->name = 'Linda Corkery';
    $request->owner = 'tempora';
    $request->page = 703737;
    $request->perPage = 735194;
    $request->repo = 'labore';

    $response = $sdk->actions->actionsListArtifactsForRepo($request);

    if ($response->actionsListArtifactsForRepo200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsListEnvironmentSecrets

Lists all secrets available in an environment without revealing their encrypted values. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#list-environment-secrets>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsListEnvironmentSecretsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsListEnvironmentSecretsRequest();
    $request->environmentName = 'delectus';
    $request->page = 433288;
    $request->perPage = 248753;
    $request->repositoryId = 756107;

    $response = $sdk->actions->actionsListEnvironmentSecrets($request);

    if ($response->actionsListEnvironmentSecrets200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsListJobsForWorkflowRun

Lists jobs for a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://docs.github.com/enterprise-server@3.6/rest/overview/resources-in-the-rest-api#parameters).

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#list-jobs-for-a-workflow-run>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsListJobsForWorkflowRunRequest;
use \OpenAPI\OpenAPI\Models\Operations\ActionsListJobsForWorkflowRunFilterEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsListJobsForWorkflowRunRequest();
    $request->filter = ActionsListJobsForWorkflowRunFilterEnum::ALL;
    $request->owner = 'aliquid';
    $request->page = 592042;
    $request->perPage = 896039;
    $request->repo = 'sint';
    $request->runId = 638921;

    $response = $sdk->actions->actionsListJobsForWorkflowRun($request);

    if ($response->actionsListJobsForWorkflowRun200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsListJobsForWorkflowRunAttempt

Lists jobs for a specific workflow run attempt. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://docs.github.com/enterprise-server@3.6/rest/overview/resources-in-the-rest-api#parameters).

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#list-jobs-for-a-workflow-run-attempt>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsListJobsForWorkflowRunAttemptRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsListJobsForWorkflowRunAttemptRequest();
    $request->attemptNumber = 223081;
    $request->owner = 'debitis';
    $request->page = 952749;
    $request->perPage = 680056;
    $request->repo = 'in';
    $request->runId = 449198;

    $response = $sdk->actions->actionsListJobsForWorkflowRunAttempt($request);

    if ($response->actionsListJobsForWorkflowRunAttempt200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsListLabelsForSelfHostedRunnerForOrg

Lists all labels for a self-hosted runner configured in an organization.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#list-labels-for-a-self-hosted-runner-for-an-organization>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsListLabelsForSelfHostedRunnerForOrgRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsListLabelsForSelfHostedRunnerForOrgRequest();
    $request->org = 'illum';
    $request->runnerId = 978571;

    $response = $sdk->actions->actionsListLabelsForSelfHostedRunnerForOrg($request);

    if ($response->actionsListLabelsForSelfHostedRunnerForOrg200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsListLabelsForSelfHostedRunnerForRepo

Lists all labels for a self-hosted runner configured in a repository.

You must authenticate using an access token with the `repo` scope to use this
endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#list-labels-for-a-self-hosted-runner-for-a-repository>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsListLabelsForSelfHostedRunnerForRepoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsListLabelsForSelfHostedRunnerForRepoRequest();
    $request->owner = 'rerum';
    $request->repo = 'dicta';
    $request->runnerId = 297437;

    $response = $sdk->actions->actionsListLabelsForSelfHostedRunnerForRepo($request);

    if ($response->actionsListLabelsForSelfHostedRunnerForRepo200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsListOrgSecrets

Lists all secrets available in an organization without revealing their encrypted values. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#list-organization-secrets>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsListOrgSecretsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsListOrgSecretsRequest();
    $request->org = 'cumque';
    $request->page = 813798;
    $request->perPage = 411820;

    $response = $sdk->actions->actionsListOrgSecrets($request);

    if ($response->actionsListOrgSecrets200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsListRepoAccessToSelfHostedRunnerGroupInOrg

Lists the repositories with access to a self-hosted runner group configured in an organization.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#list-repository-access-to-a-self-hosted-runner-group-in-an-organization>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsListRepoAccessToSelfHostedRunnerGroupInOrgRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsListRepoAccessToSelfHostedRunnerGroupInOrgRequest();
    $request->org = 'aliquid';
    $request->page = 675439;
    $request->perPage = 881104;
    $request->runnerGroupId = 249796;

    $response = $sdk->actions->actionsListRepoAccessToSelfHostedRunnerGroupInOrg($request);

    if ($response->actionsListRepoAccessToSelfHostedRunnerGroupInOrg200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsListRepoSecrets

Lists all secrets available in a repository without revealing their encrypted values. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#list-repository-secrets>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsListRepoSecretsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsListRepoSecretsRequest();
    $request->owner = 'occaecati';
    $request->page = 313218;
    $request->perPage = 881736;
    $request->repo = 'delectus';

    $response = $sdk->actions->actionsListRepoSecrets($request);

    if ($response->actionsListRepoSecrets200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsListRepoWorkflows

Lists the workflows in a repository. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#list-repository-workflows>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsListRepoWorkflowsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsListRepoWorkflowsRequest();
    $request->owner = 'quidem';
    $request->page = 588465;
    $request->perPage = 725255;
    $request->repo = 'id';

    $response = $sdk->actions->actionsListRepoWorkflows($request);

    if ($response->actionsListRepoWorkflows200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsListRunnerApplicationsForOrg

Lists binaries for the runner application that you can download and run.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#list-runner-applications-for-an-organization>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsListRunnerApplicationsForOrgRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsListRunnerApplicationsForOrgRequest();
    $request->org = 'blanditiis';

    $response = $sdk->actions->actionsListRunnerApplicationsForOrg($request);

    if ($response->runnerApplications !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsListRunnerApplicationsForRepo

Lists binaries for the runner application that you can download and run.

You must authenticate using an access token with the `repo` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#list-runner-applications-for-a-repository>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsListRunnerApplicationsForRepoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsListRunnerApplicationsForRepoRequest();
    $request->owner = 'deleniti';
    $request->repo = 'sapiente';

    $response = $sdk->actions->actionsListRunnerApplicationsForRepo($request);

    if ($response->runnerApplications !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsListSelectedReposForOrgSecret

Lists all repositories that have been selected when the `visibility` for repository access to a secret is set to `selected`. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#list-selected-repositories-for-an-organization-secret>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsListSelectedReposForOrgSecretRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsListSelectedReposForOrgSecretRequest();
    $request->org = 'amet';
    $request->page = 643990;
    $request->perPage = 394869;
    $request->secretName = 'vel';

    $response = $sdk->actions->actionsListSelectedReposForOrgSecret($request);

    if ($response->actionsListSelectedReposForOrgSecret200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsListSelectedRepositoriesEnabledGithubActionsOrganization

Lists the selected repositories that are enabled for GitHub Actions in an organization. To use this endpoint, the organization permission policy for `enabled_repositories` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an organization](#set-github-actions-permissions-for-an-organization)."

You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#list-selected-repositories-enabled-for-github-actions-in-an-organization>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationRequest();
    $request->org = 'natus';
    $request->page = 606393;
    $request->perPage = 474867;

    $response = $sdk->actions->actionsListSelectedRepositoriesEnabledGithubActionsOrganization($request);

    if ($response->actionsListSelectedRepositoriesEnabledGithubActionsOrganization200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsListSelfHostedRunnerGroupsForOrg

Lists all self-hosted runner groups configured in an organization and inherited from an enterprise.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#list-self-hosted-runner-groups-for-an-organization>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsListSelfHostedRunnerGroupsForOrgRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsListSelfHostedRunnerGroupsForOrgRequest();
    $request->org = 'perferendis';
    $request->page = 470132;
    $request->perPage = 301575;
    $request->visibleToRepository = 'distinctio';

    $response = $sdk->actions->actionsListSelfHostedRunnerGroupsForOrg($request);

    if ($response->actionsListSelfHostedRunnerGroupsForOrg200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsListSelfHostedRunnersForOrg

Lists all self-hosted runners configured in an organization.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#list-self-hosted-runners-for-an-organization>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsListSelfHostedRunnersForOrgRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsListSelfHostedRunnersForOrgRequest();
    $request->org = 'id';
    $request->page = 287991;
    $request->perPage = 290077;

    $response = $sdk->actions->actionsListSelfHostedRunnersForOrg($request);

    if ($response->actionsListSelfHostedRunnersForOrg200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsListSelfHostedRunnersForRepo

Lists all self-hosted runners configured in a repository. You must authenticate using an access token with the `repo` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#list-self-hosted-runners-for-a-repository>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsListSelfHostedRunnersForRepoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsListSelfHostedRunnersForRepoRequest();
    $request->owner = 'suscipit';
    $request->page = 618016;
    $request->perPage = 749170;
    $request->repo = 'eum';

    $response = $sdk->actions->actionsListSelfHostedRunnersForRepo($request);

    if ($response->actionsListSelfHostedRunnersForRepo200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsListSelfHostedRunnersInGroupForOrg

Lists self-hosted runners that are in a specific organization group.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#list-self-hosted-runners-in-a-group-for-an-organization>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsListSelfHostedRunnersInGroupForOrgRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsListSelfHostedRunnersInGroupForOrgRequest();
    $request->org = 'vero';
    $request->page = 135474;
    $request->perPage = 102863;
    $request->runnerGroupId = 298282;

    $response = $sdk->actions->actionsListSelfHostedRunnersInGroupForOrg($request);

    if ($response->actionsListSelfHostedRunnersInGroupForOrg200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsListWorkflowRunArtifacts

Lists artifacts for a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#list-workflow-run-artifacts>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsListWorkflowRunArtifactsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsListWorkflowRunArtifactsRequest();
    $request->owner = 'et';
    $request->page = 569965;
    $request->perPage = 354047;
    $request->repo = 'provident';
    $request->runId = 551816;

    $response = $sdk->actions->actionsListWorkflowRunArtifacts($request);

    if ($response->actionsListWorkflowRunArtifacts200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsListWorkflowRuns

List all workflow runs for a workflow. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://docs.github.com/enterprise-server@3.6/rest/overview/resources-in-the-rest-api#parameters).

Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#list-workflow-runs>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsListWorkflowRunsRequest;
use \OpenAPI\OpenAPI\Models\Shared\WorkflowRunStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsListWorkflowRunsRequest();
    $request->actor = 'sint';
    $request->branch = 'accusantium';
    $request->checkSuiteId = 653201;
    $request->created = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-01-16T22:43:33.071Z');
    $request->event = 'ad';
    $request->excludePullRequests = false;
    $request->owner = 'eum';
    $request->page = 221262;
    $request->perPage = 896547;
    $request->repo = 'odit';
    $request->status = WorkflowRunStatusEnum::SKIPPED;
    $request->workflowId = 435865;

    $response = $sdk->actions->actionsListWorkflowRuns($request);

    if ($response->actionsListWorkflowRuns200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsListWorkflowRunsForRepo

Lists all workflow runs for a repository. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://docs.github.com/enterprise-server@3.6/rest/overview/resources-in-the-rest-api#parameters).

Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#list-workflow-runs-for-a-repository>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsListWorkflowRunsForRepoRequest;
use \OpenAPI\OpenAPI\Models\Shared\WorkflowRunStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsListWorkflowRunsForRepoRequest();
    $request->actor = 'doloribus';
    $request->branch = 'debitis';
    $request->checkSuiteId = 260341;
    $request->created = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-05-22T23:02:53.221Z');
    $request->event = 'facilis';
    $request->excludePullRequests = false;
    $request->owner = 'in';
    $request->page = 100226;
    $request->perPage = 99569;
    $request->repo = 'repudiandae';
    $request->status = WorkflowRunStatusEnum::NEUTRAL;

    $response = $sdk->actions->actionsListWorkflowRunsForRepo($request);

    if ($response->actionsListWorkflowRunsForRepo200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsReRunJobForWorkflowRun

Re-run a job and its dependent jobs in a workflow run. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#re-run-job-for-workflow-run>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsReRunJobForWorkflowRunRequest;
use \OpenAPI\OpenAPI\Models\Operations\ActionsReRunJobForWorkflowRunRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsReRunJobForWorkflowRunRequest();
    $request->requestBody = new ActionsReRunJobForWorkflowRunRequestBody();
    $request->requestBody->enableDebugLogging = false;
    $request->jobId = 714242;
    $request->owner = 'nihil';
    $request->repo = 'repellat';

    $response = $sdk->actions->actionsReRunJobForWorkflowRun($request);

    if ($response->emptyObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsReRunWorkflow

Re-runs your workflow run using its `id`. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#re-run-a-workflow>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsReRunWorkflowRequest;
use \OpenAPI\OpenAPI\Models\Operations\ActionsReRunWorkflowRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsReRunWorkflowRequest();
    $request->requestBody = new ActionsReRunWorkflowRequestBody();
    $request->requestBody->enableDebugLogging = false;
    $request->owner = 'quibusdam';
    $request->repo = 'sed';
    $request->runId = 904648;

    $response = $sdk->actions->actionsReRunWorkflow($request);

    if ($response->emptyObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsReRunWorkflowFailedJobs

Re-run all of the failed jobs and their dependent jobs in a workflow run using the `id` of the workflow run. You must authenticate using an access token with the `repo` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#re-run-workflow-failed-jobs>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsReRunWorkflowFailedJobsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ActionsReRunWorkflowFailedJobsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsReRunWorkflowFailedJobsRequest();
    $request->requestBody = new ActionsReRunWorkflowFailedJobsRequestBody();
    $request->requestBody->enableDebugLogging = false;
    $request->owner = 'pariatur';
    $request->repo = 'accusantium';
    $request->runId = 162493;

    $response = $sdk->actions->actionsReRunWorkflowFailedJobs($request);

    if ($response->emptyObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsRemoveAllCustomLabelsFromSelfHostedRunnerForOrg

Remove all custom labels from a self-hosted runner configured in an
organization. Returns the remaining read-only labels from the runner.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#remove-all-custom-labels-from-a-self-hosted-runner-for-an-organization>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsRemoveAllCustomLabelsFromSelfHostedRunnerForOrgRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsRemoveAllCustomLabelsFromSelfHostedRunnerForOrgRequest();
    $request->org = 'praesentium';
    $request->runnerId = 615560;

    $response = $sdk->actions->actionsRemoveAllCustomLabelsFromSelfHostedRunnerForOrg($request);

    if ($response->actionsRemoveAllCustomLabelsFromSelfHostedRunnerForOrg200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsRemoveAllCustomLabelsFromSelfHostedRunnerForRepo

Remove all custom labels from a self-hosted runner configured in a
repository. Returns the remaining read-only labels from the runner.

You must authenticate using an access token with the `repo` scope to use this
endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#remove-all-custom-labels-from-a-self-hosted-runner-for-a-repository>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsRemoveAllCustomLabelsFromSelfHostedRunnerForRepoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsRemoveAllCustomLabelsFromSelfHostedRunnerForRepoRequest();
    $request->owner = 'magni';
    $request->repo = 'sunt';
    $request->runnerId = 779051;

    $response = $sdk->actions->actionsRemoveAllCustomLabelsFromSelfHostedRunnerForRepo($request);

    if ($response->actionsRemoveAllCustomLabelsFromSelfHostedRunnerForRepo200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsRemoveCustomLabelFromSelfHostedRunnerForOrg

Remove a custom label from a self-hosted runner configured
in an organization. Returns the remaining labels from the runner.

This endpoint returns a `404 Not Found` status if the custom label is not
present on the runner.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#remove-a-custom-label-from-a-self-hosted-runner-for-an-organization>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsRemoveCustomLabelFromSelfHostedRunnerForOrgRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsRemoveCustomLabelFromSelfHostedRunnerForOrgRequest();
    $request->name = 'Ervin Schoen';
    $request->org = 'odit';
    $request->runnerId = 407183;

    $response = $sdk->actions->actionsRemoveCustomLabelFromSelfHostedRunnerForOrg($request);

    if ($response->actionsRemoveCustomLabelFromSelfHostedRunnerForOrg200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsRemoveCustomLabelFromSelfHostedRunnerForRepo

Remove a custom label from a self-hosted runner configured
in a repository. Returns the remaining labels from the runner.

This endpoint returns a `404 Not Found` status if the custom label is not
present on the runner.

You must authenticate using an access token with the `repo` scope to use this
endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#remove-a-custom-label-from-a-self-hosted-runner-for-a-repository>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsRemoveCustomLabelFromSelfHostedRunnerForRepoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsRemoveCustomLabelFromSelfHostedRunnerForRepoRequest();
    $request->name = 'Virginia Wunsch';
    $request->owner = 'voluptate';
    $request->repo = 'autem';
    $request->runnerId = 722056;

    $response = $sdk->actions->actionsRemoveCustomLabelFromSelfHostedRunnerForRepo($request);

    if ($response->actionsRemoveCustomLabelFromSelfHostedRunnerForRepo200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsRemoveRepoAccessToSelfHostedRunnerGroupInOrg

Removes a repository from the list of selected repositories that can access a self-hosted runner group. The runner group must have `visibility` set to `selected`. For more information, see "[Create a self-hosted runner group for an organization](#create-a-self-hosted-runner-group-for-an-organization)."

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#remove-repository-access-to-a-self-hosted-runner-group-in-an-organization>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsRemoveRepoAccessToSelfHostedRunnerGroupInOrgRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsRemoveRepoAccessToSelfHostedRunnerGroupInOrgRequest();
    $request->org = 'eaque';
    $request->repositoryId = 866383;
    $request->runnerGroupId = 365496;

    $response = $sdk->actions->actionsRemoveRepoAccessToSelfHostedRunnerGroupInOrg($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsRemoveSelectedRepoFromOrgSecret

Removes a repository from an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://docs.github.com/enterprise-server@3.6/rest/reference/actions#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#remove-selected-repository-from-an-organization-secret>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsRemoveSelectedRepoFromOrgSecretRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsRemoveSelectedRepoFromOrgSecretRequest();
    $request->org = 'voluptatibus';
    $request->repositoryId = 16627;
    $request->secretName = 'fugiat';

    $response = $sdk->actions->actionsRemoveSelectedRepoFromOrgSecret($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsRemoveSelfHostedRunnerFromGroupForOrg

Removes a self-hosted runner from a group configured in an organization. The runner is then returned to the default group.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#remove-a-self-hosted-runner-from-a-group-for-an-organization>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsRemoveSelfHostedRunnerFromGroupForOrgRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsRemoveSelfHostedRunnerFromGroupForOrgRequest();
    $request->org = 'amet';
    $request->runnerGroupId = 11714;
    $request->runnerId = 764912;

    $response = $sdk->actions->actionsRemoveSelfHostedRunnerFromGroupForOrg($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsReviewPendingDeploymentsForRun

Approve or reject pending deployments that are waiting on approval by a required reviewer.

Required reviewers with read access to the repository contents and deployments can use this endpoint. Required reviewers must authenticate using an access token with the `repo` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#review-pending-deployments-for-a-workflow-run>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsReviewPendingDeploymentsForRunRequest;
use \OpenAPI\OpenAPI\Models\Operations\ActionsReviewPendingDeploymentsForRunRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ActionsReviewPendingDeploymentsForRunRequestBodyStateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsReviewPendingDeploymentsForRunRequest();
    $request->requestBody = new ActionsReviewPendingDeploymentsForRunRequestBody();
    $request->requestBody->comment = 'Ship it!';
    $request->requestBody->environmentIds = [
        161171787,
        161171787,
    ];
    $request->requestBody->state = ActionsReviewPendingDeploymentsForRunRequestBodyStateEnum::APPROVED;
    $request->owner = 'hic';
    $request->repo = 'libero';
    $request->runId = 749999;

    $response = $sdk->actions->actionsReviewPendingDeploymentsForRun($request);

    if ($response->deployments !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsSetActionsCacheUsagePolicy

Sets GitHub Actions cache usage policy for a repository.
You must authenticate using an access token with the `repo` scope to use this endpoint.
GitHub Apps must have the `actions:write` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#set-github-actions-cache-usage-policy-for-a-repository>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsSetActionsCacheUsagePolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\ActionsCacheUsagePolicyForRepository;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsSetActionsCacheUsagePolicyRequest();
    $request->actionsCacheUsagePolicyForRepository = new ActionsCacheUsagePolicyForRepository();
    $request->actionsCacheUsagePolicyForRepository->repoCacheSizeLimitInGb = 14;
    $request->owner = 'dolores';
    $request->repo = 'quis';

    $response = $sdk->actions->actionsSetActionsCacheUsagePolicy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsSetActionsCacheUsagePolicyForEnterprise

Sets the GitHub Actions cache usage policy for an enterprise.
You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
GitHub Apps must have the `enterprise_administration:write` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#set-github-actions-cache-usage-policy-for-an-enterprise>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsSetActionsCacheUsagePolicyForEnterpriseRequest;
use \OpenAPI\OpenAPI\Models\Shared\ActionsCacheUsagePolicyEnterprise;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsSetActionsCacheUsagePolicyForEnterpriseRequest();
    $request->actionsCacheUsagePolicyEnterprise = new ActionsCacheUsagePolicyEnterprise();
    $request->actionsCacheUsagePolicyEnterprise->maxRepoCacheSizeLimitInGb = 15;
    $request->actionsCacheUsagePolicyEnterprise->repoCacheSizeLimitInGb = 10;
    $request->enterprise = 'totam';

    $response = $sdk->actions->actionsSetActionsCacheUsagePolicyForEnterprise($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsSetAllowedActionsOrganization

Sets the actions that are allowed in an organization. To use this endpoint, the organization permission policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an organization](#set-github-actions-permissions-for-an-organization)."

If the organization belongs to an enterprise that has `selected` actions set at the enterprise level, then you cannot override any of the enterprise's allowed actions settings.

To use the `patterns_allowed` setting for private repositories, the organization must belong to an enterprise. If the organization does not belong to an enterprise, then the `patterns_allowed` setting only applies to public repositories in the organization.

You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#set-allowed-actions-for-an-organization>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsSetAllowedActionsOrganizationRequest;
use \OpenAPI\OpenAPI\Models\Shared\SelectedActions;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsSetAllowedActionsOrganizationRequest();
    $request->org = 'dignissimos';
    $request->selectedActions = new SelectedActions();
    $request->selectedActions->githubOwnedAllowed = false;
    $request->selectedActions->patternsAllowed = [
        'quis',
    ];

    $response = $sdk->actions->actionsSetAllowedActionsOrganization($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsSetAllowedActionsRepository

Sets the actions that are allowed in a repository. To use this endpoint, the repository permission policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for a repository](#set-github-actions-permissions-for-a-repository)."

If the repository belongs to an organization or enterprise that has `selected` actions set at the organization or enterprise levels, then you cannot override any of the allowed actions settings.

To use the `patterns_allowed` setting for private repositories, the repository must belong to an enterprise. If the repository does not belong to an enterprise, then the `patterns_allowed` setting only applies to public repositories.

You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `administration` repository permission to use this API.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#set-allowed-actions-for-a-repository>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsSetAllowedActionsRepositoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\SelectedActions;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsSetAllowedActionsRepositoryRequest();
    $request->owner = 'nesciunt';
    $request->repo = 'eos';
    $request->selectedActions = new SelectedActions();
    $request->selectedActions->githubOwnedAllowed = false;
    $request->selectedActions->patternsAllowed = [
        'dolores',
    ];

    $response = $sdk->actions->actionsSetAllowedActionsRepository($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsSetCustomLabelsForSelfHostedRunnerForOrg

Remove all previous custom labels and set the new custom labels for a specific
self-hosted runner configured in an organization.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#set-custom-labels-for-a-self-hosted-runner-for-an-organization>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsSetCustomLabelsForSelfHostedRunnerForOrgRequest;
use \OpenAPI\OpenAPI\Models\Operations\ActionsSetCustomLabelsForSelfHostedRunnerForOrgRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsSetCustomLabelsForSelfHostedRunnerForOrgRequest();
    $request->requestBody = new ActionsSetCustomLabelsForSelfHostedRunnerForOrgRequestBody();
    $request->requestBody->labels = [
        'quam',
        'dolor',
        'vero',
        'nostrum',
    ];
    $request->org = 'hic';
    $request->runnerId = 928082;

    $response = $sdk->actions->actionsSetCustomLabelsForSelfHostedRunnerForOrg($request);

    if ($response->actionsSetCustomLabelsForSelfHostedRunnerForOrg200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsSetCustomLabelsForSelfHostedRunnerForRepo

Remove all previous custom labels and set the new custom labels for a specific
self-hosted runner configured in a repository.

You must authenticate using an access token with the `repo` scope to use this
endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#set-custom-labels-for-a-self-hosted-runner-for-a-repository>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsSetCustomLabelsForSelfHostedRunnerForRepoRequest;
use \OpenAPI\OpenAPI\Models\Operations\ActionsSetCustomLabelsForSelfHostedRunnerForRepoRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsSetCustomLabelsForSelfHostedRunnerForRepoRequest();
    $request->requestBody = new ActionsSetCustomLabelsForSelfHostedRunnerForRepoRequestBody();
    $request->requestBody->labels = [
        'facilis',
        'perspiciatis',
        'voluptatem',
    ];
    $request->owner = 'porro';
    $request->repo = 'consequuntur';
    $request->runnerId = 500026;

    $response = $sdk->actions->actionsSetCustomLabelsForSelfHostedRunnerForRepo($request);

    if ($response->actionsSetCustomLabelsForSelfHostedRunnerForRepo200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsSetGithubActionsDefaultWorkflowPermissionsEnterprise

Sets the default workflow permissions granted to the `GITHUB_TOKEN` when running workflows in an enterprise, and sets
whether GitHub Actions can submit approving pull request reviews. For more information, see
"[Enforcing a policy for workflow permissions in your enterprise](https://docs.github.com/enterprise-server@3.6/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-workflow-permissions-in-your-enterprise)."

You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
GitHub Apps must have the `enterprise_administration:write` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#set-default-workflow-permissions-for-an-enterprise>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsSetGithubActionsDefaultWorkflowPermissionsEnterpriseRequest;
use \OpenAPI\OpenAPI\Models\Shared\ActionsSetDefaultWorkflowPermissions;
use \OpenAPI\OpenAPI\Models\Shared\ActionsDefaultWorkflowPermissionsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsSetGithubActionsDefaultWorkflowPermissionsEnterpriseRequest();
    $request->actionsSetDefaultWorkflowPermissions = new ActionsSetDefaultWorkflowPermissions();
    $request->actionsSetDefaultWorkflowPermissions->canApprovePullRequestReviews = false;
    $request->actionsSetDefaultWorkflowPermissions->defaultWorkflowPermissions = ActionsDefaultWorkflowPermissionsEnum::WRITE;
    $request->enterprise = 'eaque';

    $response = $sdk->actions->actionsSetGithubActionsDefaultWorkflowPermissionsEnterprise($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsSetGithubActionsDefaultWorkflowPermissionsOrganization

Sets the default workflow permissions granted to the `GITHUB_TOKEN` when running workflows in an organization, and sets if GitHub Actions
can submit approving pull request reviews. For more information, see
"[Setting the permissions of the GITHUB_TOKEN for your organization](https://docs.github.com/enterprise-server@3.6/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#setting-the-permissions-of-the-github_token-for-your-organization)."

You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#set-default-workflow-permissions>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsSetGithubActionsDefaultWorkflowPermissionsOrganizationRequest;
use \OpenAPI\OpenAPI\Models\Shared\ActionsSetDefaultWorkflowPermissions;
use \OpenAPI\OpenAPI\Models\Shared\ActionsDefaultWorkflowPermissionsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsSetGithubActionsDefaultWorkflowPermissionsOrganizationRequest();
    $request->actionsSetDefaultWorkflowPermissions = new ActionsSetDefaultWorkflowPermissions();
    $request->actionsSetDefaultWorkflowPermissions->canApprovePullRequestReviews = false;
    $request->actionsSetDefaultWorkflowPermissions->defaultWorkflowPermissions = ActionsDefaultWorkflowPermissionsEnum::WRITE;
    $request->org = 'rerum';

    $response = $sdk->actions->actionsSetGithubActionsDefaultWorkflowPermissionsOrganization($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsSetGithubActionsDefaultWorkflowPermissionsRepository

Sets the default workflow permissions granted to the `GITHUB_TOKEN` when running workflows in a repository, and sets if GitHub Actions
can submit approving pull request reviews.
For more information, see "[Setting the permissions of the GITHUB_TOKEN for your repository](https://docs.github.com/enterprise-server@3.6/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#setting-the-permissions-of-the-github_token-for-your-repository)."

You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the repository `administration` permission to use this API.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#set-default-workflow-permissions-for-a-repository>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsSetGithubActionsDefaultWorkflowPermissionsRepositoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\ActionsSetDefaultWorkflowPermissions;
use \OpenAPI\OpenAPI\Models\Shared\ActionsDefaultWorkflowPermissionsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsSetGithubActionsDefaultWorkflowPermissionsRepositoryRequest();
    $request->actionsSetDefaultWorkflowPermissions = new ActionsSetDefaultWorkflowPermissions();
    $request->actionsSetDefaultWorkflowPermissions->canApprovePullRequestReviews = false;
    $request->actionsSetDefaultWorkflowPermissions->defaultWorkflowPermissions = ActionsDefaultWorkflowPermissionsEnum::READ;
    $request->owner = 'asperiores';
    $request->repo = 'earum';

    $response = $sdk->actions->actionsSetGithubActionsDefaultWorkflowPermissionsRepository($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsSetGithubActionsPermissionsOrganization

Sets the GitHub Actions permissions policy for repositories and allowed actions in an organization.

If the organization belongs to an enterprise that has set restrictive permissions at the enterprise level, such as `allowed_actions` to `selected` actions, then you cannot override them for the organization.

You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#set-github-actions-permissions-for-an-organization>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsSetGithubActionsPermissionsOrganizationRequest;
use \OpenAPI\OpenAPI\Models\Operations\ActionsSetGithubActionsPermissionsOrganizationRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\AllowedActionsEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnabledRepositoriesEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsSetGithubActionsPermissionsOrganizationRequest();
    $request->requestBody = new ActionsSetGithubActionsPermissionsOrganizationRequestBody();
    $request->requestBody->allowedActions = AllowedActionsEnum::ALL;
    $request->requestBody->enabledRepositories = EnabledRepositoriesEnum::NONE;
    $request->org = 'dolorum';

    $response = $sdk->actions->actionsSetGithubActionsPermissionsOrganization($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsSetGithubActionsPermissionsRepository

Sets the GitHub Actions permissions policy for enabling GitHub Actions and allowed actions in the repository.

If the repository belongs to an organization or enterprise that has set restrictive permissions at the organization or enterprise levels, such as `allowed_actions` to `selected` actions, then you cannot override them for the repository.

You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `administration` repository permission to use this API.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#set-github-actions-permissions-for-a-repository>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsSetGithubActionsPermissionsRepositoryRequest;
use \OpenAPI\OpenAPI\Models\Operations\ActionsSetGithubActionsPermissionsRepositoryRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\AllowedActionsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsSetGithubActionsPermissionsRepositoryRequest();
    $request->requestBody = new ActionsSetGithubActionsPermissionsRepositoryRequestBody();
    $request->requestBody->allowedActions = AllowedActionsEnum::LOCAL_ONLY;
    $request->requestBody->enabled = false;
    $request->owner = 'pariatur';
    $request->repo = 'provident';

    $response = $sdk->actions->actionsSetGithubActionsPermissionsRepository($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsSetRepoAccessToSelfHostedRunnerGroupInOrg

Replaces the list of repositories that have access to a self-hosted runner group configured in an organization.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#set-repository-access-to-a-self-hosted-runner-group-in-an-organization>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgRequest;
use \OpenAPI\OpenAPI\Models\Operations\ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgRequest();
    $request->requestBody = new ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgRequestBody();
    $request->requestBody->selectedRepositoryIds = [
        730122,
        964490,
        311945,
        554242,
    ];
    $request->org = 'aliquid';
    $request->runnerGroupId = 212390;

    $response = $sdk->actions->actionsSetRepoAccessToSelfHostedRunnerGroupInOrg($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsSetSelectedReposForOrgSecret

Replaces all repositories for an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://docs.github.com/enterprise-server@3.6/rest/reference/actions#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#set-selected-repositories-for-an-organization-secret>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsSetSelectedReposForOrgSecretRequest;
use \OpenAPI\OpenAPI\Models\Operations\ActionsSetSelectedReposForOrgSecretRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsSetSelectedReposForOrgSecretRequest();
    $request->requestBody = new ActionsSetSelectedReposForOrgSecretRequestBody();
    $request->requestBody->selectedRepositoryIds = [
        222443,
    ];
    $request->org = 'qui';
    $request->secretName = 'ipsum';

    $response = $sdk->actions->actionsSetSelectedReposForOrgSecret($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsSetSelectedRepositoriesEnabledGithubActionsOrganization

Replaces the list of selected repositories that are enabled for GitHub Actions in an organization. To use this endpoint, the organization permission policy for `enabled_repositories` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an organization](#set-github-actions-permissions-for-an-organization)."

You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#set-selected-repositories-enabled-for-github-actions-in-an-organization>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationRequest;
use \OpenAPI\OpenAPI\Models\Operations\ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationRequest();
    $request->requestBody = new ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationRequestBody();
    $request->requestBody->selectedRepositoryIds = [
        569574,
        739551,
        452109,
        490459,
    ];
    $request->org = 'reiciendis';

    $response = $sdk->actions->actionsSetSelectedRepositoriesEnabledGithubActionsOrganization($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsSetSelfHostedRunnersInGroupForOrg

Replaces the list of self-hosted runners that are part of an organization runner group.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#set-self-hosted-runners-in-a-group-for-an-organization>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsSetSelfHostedRunnersInGroupForOrgRequest;
use \OpenAPI\OpenAPI\Models\Operations\ActionsSetSelfHostedRunnersInGroupForOrgRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsSetSelfHostedRunnersInGroupForOrgRequest();
    $request->requestBody = new ActionsSetSelfHostedRunnersInGroupForOrgRequestBody();
    $request->requestBody->runners = [
        680545,
    ];
    $request->org = 'numquam';
    $request->runnerGroupId = 85295;

    $response = $sdk->actions->actionsSetSelfHostedRunnersInGroupForOrg($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsSetWorkflowAccessToRepository

Sets the level of access that workflows outside of the repository have to actions and reusable workflows in the repository.
This endpoint only applies to internal repositories.
For more information, see "[Managing GitHub Actions settings for a repository](https://docs.github.com/enterprise-server@3.6/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#allowing-access-to-components-in-an-internal-repository)."

You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the
repository `administration` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#set-workflow-access-to-a-repository>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsSetWorkflowAccessToRepositoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\ActionsWorkflowAccessToRepository;
use \OpenAPI\OpenAPI\Models\Shared\ActionsWorkflowAccessToRepositoryAccessLevelEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsSetWorkflowAccessToRepositoryRequest();
    $request->actionsWorkflowAccessToRepository = new ActionsWorkflowAccessToRepository();
    $request->actionsWorkflowAccessToRepository->accessLevel = ActionsWorkflowAccessToRepositoryAccessLevelEnum::NONE;
    $request->owner = 'ipsa';
    $request->repo = 'iure';

    $response = $sdk->actions->actionsSetWorkflowAccessToRepository($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsUpdateSelfHostedRunnerGroupForOrg

Updates the `name` and `visibility` of a self-hosted runner group in an organization.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/actions#update-a-self-hosted-runner-group-for-an-organization>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsUpdateSelfHostedRunnerGroupForOrgRequest;
use \OpenAPI\OpenAPI\Models\Operations\ActionsUpdateSelfHostedRunnerGroupForOrgRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ActionsUpdateSelfHostedRunnerGroupForOrgRequestBodyVisibilityEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsUpdateSelfHostedRunnerGroupForOrgRequest();
    $request->requestBody = new ActionsUpdateSelfHostedRunnerGroupForOrgRequestBody();
    $request->requestBody->allowsPublicRepositories = false;
    $request->requestBody->name = 'Bertha Thompson';
    $request->requestBody->restrictedToWorkflows = false;
    $request->requestBody->selectedWorkflows = [
        'octo-org/octo-repo/.github/workflows/deploy.yaml@main',
        'octo-org/octo-repo/.github/workflows/deploy.yaml@main',
    ];
    $request->requestBody->visibility = ActionsUpdateSelfHostedRunnerGroupForOrgRequestBodyVisibilityEnum::ALL;
    $request->org = 'eos';
    $request->runnerGroupId = 542499;

    $response = $sdk->actions->actionsUpdateSelfHostedRunnerGroupForOrg($request);

    if ($response->runnerGroupsOrg !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
