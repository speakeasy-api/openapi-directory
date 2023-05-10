# actions

## Overview

Endpoints to manage GitHub Actions using the REST API.

### Available Operations

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
* [actionsDownloadWorkflowRunLogs](#actionsdownloadworkflowrunlogs) - Download workflow run logs
* [actionsEnableSelectedRepositoryGithubActionsOrganization](#actionsenableselectedrepositorygithubactionsorganization) - Enable a selected repository for GitHub Actions in an organization
* [actionsEnableWorkflow](#actionsenableworkflow) - Enable a workflow
* [actionsGetAllowedActionsOrganization](#actionsgetallowedactionsorganization) - Get allowed actions for an organization
* [actionsGetAllowedActionsRepository](#actionsgetallowedactionsrepository) - Get allowed actions for a repository
* [actionsGetArtifact](#actionsgetartifact) - Get an artifact
* [actionsGetEnvironmentPublicKey](#actionsgetenvironmentpublickey) - Get an environment public key
* [actionsGetEnvironmentSecret](#actionsgetenvironmentsecret) - Get an environment secret
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
* [actionsGetWorkflowRun](#actionsgetworkflowrun) - Get a workflow run
* [actionsListArtifactsForRepo](#actionslistartifactsforrepo) - List artifacts for a repository
* [actionsListEnvironmentSecrets](#actionslistenvironmentsecrets) - List environment secrets
* [actionsListJobsForWorkflowRun](#actionslistjobsforworkflowrun) - List jobs for a workflow run
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
* [actionsReRunWorkflow](#actionsrerunworkflow) - Re-run a workflow
* [actionsRemoveRepoAccessToSelfHostedRunnerGroupInOrg](#actionsremoverepoaccesstoselfhostedrunnergroupinorg) - Remove repository access to a self-hosted runner group in an organization
* [actionsRemoveSelectedRepoFromOrgSecret](#actionsremoveselectedrepofromorgsecret) - Remove selected repository from an organization secret
* [actionsRemoveSelfHostedRunnerFromGroupForOrg](#actionsremoveselfhostedrunnerfromgroupfororg) - Remove a self-hosted runner from a group for an organization
* [actionsReviewPendingDeploymentsForRun](#actionsreviewpendingdeploymentsforrun) - Review pending deployments for a workflow run
* [actionsSetAllowedActionsOrganization](#actionssetallowedactionsorganization) - Set allowed actions for an organization
* [actionsSetAllowedActionsRepository](#actionssetallowedactionsrepository) - Set allowed actions for a repository
* [actionsSetGithubActionsPermissionsOrganization](#actionssetgithubactionspermissionsorganization) - Set GitHub Actions permissions for an organization
* [actionsSetGithubActionsPermissionsRepository](#actionssetgithubactionspermissionsrepository) - Set GitHub Actions permissions for a repository
* [actionsSetRepoAccessToSelfHostedRunnerGroupInOrg](#actionssetrepoaccesstoselfhostedrunnergroupinorg) - Set repository access for a self-hosted runner group in an organization
* [actionsSetSelectedReposForOrgSecret](#actionssetselectedreposfororgsecret) - Set selected repositories for an organization secret
* [actionsSetSelectedRepositoriesEnabledGithubActionsOrganization](#actionssetselectedrepositoriesenabledgithubactionsorganization) - Set selected repositories enabled for GitHub Actions in an organization
* [actionsSetSelfHostedRunnersInGroupForOrg](#actionssetselfhostedrunnersingroupfororg) - Set self-hosted runners in a group for an organization
* [actionsUpdateSelfHostedRunnerGroupForOrg](#actionsupdateselfhostedrunnergroupfororg) - Update a self-hosted runner group for an organization

## actionsAddRepoAccessToSelfHostedRunnerGroupInOrg

Adds a repository to the list of selected repositories that can access a self-hosted runner group. The runner group must have `visibility` set to `selected`. For more information, see "[Create a self-hosted runner group for an organization](#create-a-self-hosted-runner-group-for-an-organization)."

You must authenticate using an access token with the `admin:org`
scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/actions#add-repository-acess-to-a-self-hosted-runner-group-in-an-organization>

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
    $request->org = 'quibusdam';
    $request->repositoryId = 602763;
    $request->runnerGroupId = 857946;

    $response = $sdk->actions->actionsAddRepoAccessToSelfHostedRunnerGroupInOrg($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsAddSelectedRepoToOrgSecret

Adds a repository to an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://docs.github.com/enterprise-server@3.3/rest/reference/actions#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/actions#add-selected-repository-to-an-organization-secret>

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
    $request->org = 'corrupti';
    $request->repositoryId = 847252;
    $request->secretName = 'vel';

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
<https://docs.github.com/enterprise-server@3.3/rest/reference/actions#add-a-self-hosted-runner-to-a-group-for-an-organization>

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
    $request->org = 'error';
    $request->runnerGroupId = 645894;
    $request->runnerId = 384382;

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
<https://docs.github.com/enterprise-server@3.3/rest/reference/actions#cancel-a-workflow-run>

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
    $request->owner = 'iure';
    $request->repo = 'magnam';
    $request->runId = 891773;

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
<https://docs.github.com/enterprise-server@3.3/rest/reference/actions#create-or-update-an-environment-secret>

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
    $request->requestBody->encryptedValue = 'ipsa';
    $request->requestBody->keyId = 'delectus';
    $request->environmentName = 'tempora';
    $request->repositoryId = 383441;
    $request->secretName = 'molestiae';

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
<https://docs.github.com/enterprise-server@3.3/rest/reference/actions#create-or-update-an-organization-secret>

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
    $request->requestBody->encryptedValue = 'minus';
    $request->requestBody->keyId = 'placeat';
    $request->requestBody->selectedRepositoryIds = [
        479977,
        568045,
        392785,
    ];
    $request->requestBody->visibility = ActionsCreateOrUpdateOrgSecretRequestBodyVisibilityEnum::SELECTED;
    $request->org = 'temporibus';
    $request->secretName = 'ab';

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
<https://docs.github.com/enterprise-server@3.3/rest/reference/actions#create-or-update-a-repository-secret>

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
    $request->requestBody->encryptedValue = 'quis';
    $request->requestBody->keyId = 'veritatis';
    $request->owner = 'deserunt';
    $request->repo = 'perferendis';
    $request->secretName = 'ipsam';

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
<https://docs.github.com/enterprise-server@3.3/rest/reference/actions#create-a-registration-token-for-an-organization>

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
    $request->org = 'repellendus';

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
<https://docs.github.com/enterprise-server@3.3/rest/reference/actions#create-a-registration-token-for-a-repository>

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
    $request->owner = 'sapiente';
    $request->repo = 'quo';

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
<https://docs.github.com/enterprise-server@3.3/rest/reference/actions#create-a-remove-token-for-an-organization>

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
    $request->org = 'odit';

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
<https://docs.github.com/enterprise-server@3.3/rest/reference/actions#create-a-remove-token-for-a-repository>

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
    $request->owner = 'at';
    $request->repo = 'at';

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
<https://docs.github.com/enterprise-server@3.3/rest/reference/actions#create-a-self-hosted-runner-group-for-an-organization>

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
    $request->requestBody->name = 'Javier Schmidt';
    $request->requestBody->runners = [
        780529,
        678880,
        118274,
    ];
    $request->requestBody->selectedRepositoryIds = [
        639921,
        582020,
        143353,
    ];
    $request->requestBody->visibility = ActionsCreateSelfHostedRunnerGroupForOrgRequestBodyVisibilityEnum::ALL;
    $request->org = 'hic';

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

You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint. For more information, see "[Creating a personal access token for the command line](https://docs.github.com/enterprise-server@3.3/articles/creating-a-personal-access-token-for-the-command-line)."

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/actions#create-a-workflow-dispatch-event>

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
        'totam' => 'beatae',
        'commodi' => 'molestiae',
        'modi' => 'qui',
        'impedit' => 'cum',
    ];
    $request->requestBody->ref = 'esse';
    $request->owner = 'ipsum';
    $request->repo = 'excepturi';
    $request->workflowId = 18789;

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
<https://docs.github.com/enterprise-server@3.3/rest/reference/actions#delete-an-artifact>

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
    $request->artifactId = 324141;
    $request->owner = 'natus';
    $request->repo = 'sed';

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
<https://docs.github.com/enterprise-server@3.3/rest/reference/actions#delete-an-environment-secret>

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
    $request->environmentName = 'iste';
    $request->repositoryId = 222321;
    $request->secretName = 'natus';

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
<https://docs.github.com/enterprise-server@3.3/rest/reference/actions#delete-an-organization-secret>

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
    $request->org = 'laboriosam';
    $request->secretName = 'hic';

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
<https://docs.github.com/enterprise-server@3.3/rest/reference/actions#delete-a-repository-secret>

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
    $request->owner = 'saepe';
    $request->repo = 'fuga';
    $request->secretName = 'in';

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
<https://docs.github.com/enterprise-server@3.3/rest/reference/actions#delete-a-self-hosted-runner-from-an-organization>

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
    $request->runnerId = 613064;

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
<https://docs.github.com/enterprise-server@3.3/rest/reference/actions#delete-a-self-hosted-runner-from-a-repository>

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
    $request->owner = 'iure';
    $request->repo = 'saepe';
    $request->runnerId = 697631;

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
<https://docs.github.com/enterprise-server@3.3/rest/reference/actions#delete-a-self-hosted-runner-group-from-an-organization>

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
    $request->org = 'architecto';
    $request->runnerGroupId = 60225;

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
<https://docs.github.com/enterprise-server@3.3/rest/reference/actions#delete-a-workflow-run>

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
    $request->owner = 'reiciendis';
    $request->repo = 'est';
    $request->runId = 653140;

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
<https://docs.github.com/enterprise-server@3.3/rest/reference/actions#delete-workflow-run-logs>

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
    $request->owner = 'laborum';
    $request->repo = 'dolores';
    $request->runId = 210382;

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
<https://docs.github.com/enterprise-server@3.3/rest/reference/actions#disable-a-selected-repository-for-github-actions-in-an-organization>

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
    $request->org = 'corporis';
    $request->repositoryId = 128926;

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
<https://docs.github.com/enterprise-server@3.3/rest/reference/actions#disable-a-workflow>

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
    $request->owner = 'nobis';
    $request->repo = 'enim';
    $request->workflowId = 'nemo';

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
<https://docs.github.com/enterprise-server@3.3/rest/reference/actions#download-an-artifact>

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
    $request->archiveFormat = 'minima';
    $request->artifactId = 570197;
    $request->owner = 'accusantium';
    $request->repo = 'iure';

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
<https://docs.github.com/enterprise-server@3.3/rest/reference/actions#download-job-logs-for-a-workflow-run>

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
    $request->jobId = 634274;
    $request->owner = 'doloribus';
    $request->repo = 'sapiente';

    $response = $sdk->actions->actionsDownloadJobLogsForWorkflowRun($request);

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
<https://docs.github.com/enterprise-server@3.3/rest/reference/actions#download-workflow-run-logs>

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
    $request->owner = 'architecto';
    $request->repo = 'mollitia';
    $request->runId = 208876;

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
<https://docs.github.com/enterprise-server@3.3/rest/reference/actions#enable-a-selected-repository-for-github-actions-in-an-organization>

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
    $request->org = 'culpa';
    $request->repositoryId = 161309;

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
<https://docs.github.com/enterprise-server@3.3/rest/reference/actions#enable-a-workflow>

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
    $request->owner = 'repellat';
    $request->repo = 'mollitia';
    $request->workflowId = 'numquam';

    $response = $sdk->actions->actionsEnableWorkflow($request);

    if ($response->statusCode === 200) {
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
<https://docs.github.com/enterprise-server@3.3/rest/reference/actions#get-allowed-actions-for-an-organization>

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
    $request->org = 'commodi';

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
<https://docs.github.com/enterprise-server@3.3/rest/reference/actions#get-allowed-actions-for-a-repository>

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
    $request->owner = 'quam';
    $request->repo = 'molestiae';

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
<https://docs.github.com/enterprise-server@3.3/rest/reference/actions#get-an-artifact>

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
    $request->artifactId = 244425;
    $request->owner = 'error';
    $request->repo = 'quia';

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
<https://docs.github.com/enterprise-server@3.3/rest/reference/actions#get-an-environment-public-key>

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
    $request->environmentName = 'quis';
    $request->repositoryId = 110375;

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
<https://docs.github.com/enterprise-server@3.3/rest/reference/actions#get-an-environment-secret>

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
    $request->environmentName = 'laborum';
    $request->repositoryId = 656330;
    $request->secretName = 'enim';

    $response = $sdk->actions->actionsGetEnvironmentSecret($request);

    if ($response->actionsSecret !== null) {
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
<https://docs.github.com/enterprise-server@3.3/rest/reference/actions#get-github-actions-permissions-for-an-organization>

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
    $request->org = 'odit';

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
<https://docs.github.com/enterprise-server@3.3/rest/reference/actions#get-github-actions-permissions-for-a-repository>

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
    $request->owner = 'quo';
    $request->repo = 'sequi';

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
<https://docs.github.com/enterprise-server@3.3/rest/reference/actions#get-a-job-for-a-workflow-run>

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
    $request->jobId = 949572;
    $request->owner = 'ipsam';
    $request->repo = 'id';

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
<https://docs.github.com/enterprise-server@3.3/rest/reference/actions#get-an-organization-public-key>

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
    $request->org = 'possimus';

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
<https://docs.github.com/enterprise-server@3.3/rest/reference/actions#get-an-organization-secret>

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
    $request->org = 'aut';
    $request->secretName = 'quasi';

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
<https://docs.github.com/enterprise-server@3.3/rest/reference/actions#get-pending-deployments-for-a-workflow-run>

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
    $request->owner = 'error';
    $request->repo = 'temporibus';
    $request->runId = 673660;

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
<https://docs.github.com/enterprise-server@3.3/rest/reference/actions#get-a-repository-public-key>

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
    $request->owner = 'quasi';
    $request->repo = 'reiciendis';

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
<https://docs.github.com/enterprise-server@3.3/rest/reference/actions#get-a-repository-secret>

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
    $request->owner = 'voluptatibus';
    $request->repo = 'vero';
    $request->secretName = 'nihil';

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
<https://docs.github.com/enterprise-server@3.3/rest/reference/actions#get-the-review-history-for-a-workflow-run>

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
    $request->owner = 'praesentium';
    $request->repo = 'voluptatibus';
    $request->runId = 55714;

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
<https://docs.github.com/enterprise-server@3.3/rest/reference/actions#get-a-self-hosted-runner-for-an-organization>

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
    $request->org = 'omnis';
    $request->runnerId = 451159;

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
<https://docs.github.com/enterprise-server@3.3/rest/reference/actions#get-a-self-hosted-runner-for-a-repository>

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
    $request->owner = 'cum';
    $request->repo = 'perferendis';
    $request->runnerId = 39187;

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
<https://docs.github.com/enterprise-server@3.3/rest/reference/actions#get-a-self-hosted-runner-group-for-an-organization>

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
    $request->org = 'reprehenderit';
    $request->runnerGroupId = 282807;

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
<https://docs.github.com/enterprise-server@3.3/rest/reference/actions#get-a-workflow>

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
    $request->owner = 'maiores';
    $request->repo = 'dicta';
    $request->workflowId = 296140;

    $response = $sdk->actions->actionsGetWorkflow($request);

    if ($response->workflow !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsGetWorkflowRun

Gets a specific workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/actions#get-a-workflow-run>

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
    $request->owner = 'iusto';
    $request->repo = 'dicta';
    $request->runId = 688661;

    $response = $sdk->actions->actionsGetWorkflowRun($request);

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
<https://docs.github.com/enterprise-server@3.3/rest/reference/actions#list-artifacts-for-a-repository>

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
    $request->name = 'Sophia Jerde I';
    $request->owner = 'quidem';
    $request->page = 565189;
    $request->perPage = 566602;
    $request->repo = 'pariatur';

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
<https://docs.github.com/enterprise-server@3.3/rest/reference/actions#list-environment-secrets>

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
    $request->environmentName = 'modi';
    $request->page = 508969;
    $request->perPage = 523248;
    $request->repositoryId = 916723;

    $response = $sdk->actions->actionsListEnvironmentSecrets($request);

    if ($response->actionsListEnvironmentSecrets200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsListJobsForWorkflowRun

Lists jobs for a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://docs.github.com/enterprise-server@3.3/rest/overview/resources-in-the-rest-api#parameters).

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/actions#list-jobs-for-a-workflow-run>

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
    $request->filter = ActionsListJobsForWorkflowRunFilterEnum::LATEST;
    $request->owner = 'repudiandae';
    $request->page = 575947;
    $request->perPage = 83112;
    $request->repo = 'itaque';
    $request->runId = 277718;

    $response = $sdk->actions->actionsListJobsForWorkflowRun($request);

    if ($response->actionsListJobsForWorkflowRun200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsListOrgSecrets

Lists all secrets available in an organization without revealing their encrypted values. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/actions#list-organization-secrets>

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
    $request->org = 'enim';
    $request->page = 9356;
    $request->perPage = 667411;

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
<https://docs.github.com/enterprise-server@3.3/rest/reference/actions#list-repository-access-to-a-self-hosted-runner-group-in-an-organization>

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
    $request->org = 'quibusdam';
    $request->page = 131797;
    $request->perPage = 647174;
    $request->runnerGroupId = 716327;

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
<https://docs.github.com/enterprise-server@3.3/rest/reference/actions#list-repository-secrets>

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
    $request->owner = 'quibusdam';
    $request->page = 289406;
    $request->perPage = 264730;
    $request->repo = 'qui';

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
<https://docs.github.com/enterprise-server@3.3/rest/reference/actions#list-repository-workflows>

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
    $request->owner = 'aliquid';
    $request->page = 586513;
    $request->perPage = 552822;
    $request->repo = 'perferendis';

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
<https://docs.github.com/enterprise-server@3.3/rest/reference/actions#list-runner-applications-for-an-organization>

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
    $request->org = 'magni';

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
<https://docs.github.com/enterprise-server@3.3/rest/reference/actions#list-runner-applications-for-a-repository>

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
    $request->owner = 'assumenda';
    $request->repo = 'ipsam';

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
<https://docs.github.com/enterprise-server@3.3/rest/reference/actions#list-selected-repositories-for-an-organization-secret>

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
    $request->org = 'alias';
    $request->page = 146441;
    $request->perPage = 677817;
    $request->secretName = 'excepturi';

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
<https://docs.github.com/enterprise-server@3.3/rest/reference/actions#list-selected-repositories-enabled-for-github-actions-in-an-organization>

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
    $request->org = 'tempora';
    $request->page = 703737;
    $request->perPage = 735194;

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
<https://docs.github.com/enterprise-server@3.3/rest/reference/actions#list-self-hosted-runner-groups-for-an-organization>

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
    $request->org = 'labore';
    $request->page = 962189;
    $request->perPage = 433288;

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
<https://docs.github.com/enterprise-server@3.3/rest/reference/actions#list-self-hosted-runners-for-an-organization>

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
    $request->org = 'non';
    $request->page = 756107;
    $request->perPage = 576157;

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
<https://docs.github.com/enterprise-server@3.3/rest/reference/actions#list-self-hosted-runners-for-a-repository>

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
    $request->owner = 'aliquid';
    $request->page = 592042;
    $request->perPage = 896039;
    $request->repo = 'sint';

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
<https://docs.github.com/enterprise-server@3.3/rest/reference/actions#list-self-hosted-runners-in-a-group-for-an-organization>

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
    $request->org = 'officia';
    $request->page = 223081;
    $request->perPage = 891555;
    $request->runnerGroupId = 952749;

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
<https://docs.github.com/enterprise-server@3.3/rest/reference/actions#list-workflow-run-artifacts>

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
    $request->owner = 'dolorum';
    $request->page = 447125;
    $request->perPage = 449198;
    $request->repo = 'illum';
    $request->runId = 978571;

    $response = $sdk->actions->actionsListWorkflowRunArtifacts($request);

    if ($response->actionsListWorkflowRunArtifacts200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsListWorkflowRuns

List all workflow runs for a workflow. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://docs.github.com/enterprise-server@3.3/rest/overview/resources-in-the-rest-api#parameters).

Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/actions#list-workflow-runs>

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
    $request->actor = 'rerum';
    $request->branch = 'dicta';
    $request->created = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-27T00:52:20.281Z');
    $request->event = 'facere';
    $request->excludePullRequests = false;
    $request->owner = 'ea';
    $request->page = 396506;
    $request->perPage = 675439;
    $request->repo = 'accusamus';
    $request->status = WorkflowRunStatusEnum::FAILURE;
    $request->workflowId = 'enim';

    $response = $sdk->actions->actionsListWorkflowRuns($request);

    if ($response->actionsListWorkflowRuns200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsListWorkflowRunsForRepo

Lists all workflow runs for a repository. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://docs.github.com/enterprise-server@3.3/rest/overview/resources-in-the-rest-api#parameters).

Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/actions#list-workflow-runs-for-a-repository>

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
    $request->actor = 'accusamus';
    $request->branch = 'delectus';
    $request->created = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-10-28T10:05:29.849Z');
    $request->event = 'nam';
    $request->excludePullRequests = false;
    $request->owner = 'id';
    $request->page = 501324;
    $request->perPage = 533206;
    $request->repo = 'sapiente';
    $request->status = WorkflowRunStatusEnum::FAILURE;

    $response = $sdk->actions->actionsListWorkflowRunsForRepo($request);

    if ($response->actionsListWorkflowRunsForRepo200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsReRunWorkflow

Re-runs your workflow run using its `id`. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/actions#re-run-a-workflow>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsReRunWorkflowRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsReRunWorkflowRequest();
    $request->requestBody = [
        'nisi' => 'vel',
        'natus' => 'omnis',
        'molestiae' => 'perferendis',
    ];
    $request->owner = 'nihil';
    $request->repo = 'magnam';
    $request->runId = 716075;

    $response = $sdk->actions->actionsReRunWorkflow($request);

    if ($response->emptyObject !== null) {
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
<https://docs.github.com/enterprise-server@3.3/rest/reference/actions#remove-repository-access-to-a-self-hosted-runner-group-in-an-organization>

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
    $request->org = 'id';
    $request->repositoryId = 287991;
    $request->runnerGroupId = 290077;

    $response = $sdk->actions->actionsRemoveRepoAccessToSelfHostedRunnerGroupInOrg($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsRemoveSelectedRepoFromOrgSecret

Removes a repository from an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://docs.github.com/enterprise-server@3.3/rest/reference/actions#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/actions#remove-selected-repository-from-an-organization-secret>

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
    $request->org = 'suscipit';
    $request->repositoryId = 618016;
    $request->secretName = 'nobis';

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
<https://docs.github.com/enterprise-server@3.3/rest/reference/actions#remove-a-self-hosted-runner-from-a-group-for-an-organization>

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
    $request->org = 'eum';
    $request->runnerGroupId = 878453;
    $request->runnerId = 135474;

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
<https://docs.github.com/enterprise-server@3.3/rest/reference/actions#review-pending-deployments-for-a-workflow-run>

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
    ];
    $request->requestBody->state = ActionsReviewPendingDeploymentsForRunRequestBodyStateEnum::APPROVED;
    $request->owner = 'magnam';
    $request->repo = 'et';
    $request->runId = 569965;

    $response = $sdk->actions->actionsReviewPendingDeploymentsForRun($request);

    if ($response->deployments !== null) {
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
<https://docs.github.com/enterprise-server@3.3/rest/reference/actions#set-allowed-actions-for-an-organization>

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
    $request->org = 'ullam';
    $request->selectedActions = new SelectedActions();
    $request->selectedActions->githubOwnedAllowed = false;
    $request->selectedActions->patternsAllowed = [
        'quos',
        'sint',
        'accusantium',
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
<https://docs.github.com/enterprise-server@3.3/rest/reference/actions#set-allowed-actions-for-a-repository>

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
    $request->owner = 'mollitia';
    $request->repo = 'reiciendis';
    $request->selectedActions = new SelectedActions();
    $request->selectedActions->githubOwnedAllowed = false;
    $request->selectedActions->patternsAllowed = [
        'ad',
        'eum',
        'dolor',
    ];

    $response = $sdk->actions->actionsSetAllowedActionsRepository($request);

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
<https://docs.github.com/enterprise-server@3.3/rest/reference/actions#set-github-actions-permissions-for-an-organization>

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
    $request->requestBody->allowedActions = AllowedActionsEnum::SELECTED;
    $request->requestBody->enabledRepositories = EnabledRepositoriesEnum::ALL;
    $request->org = 'nemo';

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
<https://docs.github.com/enterprise-server@3.3/rest/reference/actions#set-github-actions-permissions-for-a-repository>

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
    $request->requestBody->allowedActions = AllowedActionsEnum::ALL;
    $request->requestBody->enabled = false;
    $request->owner = 'iure';
    $request->repo = 'doloribus';

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
<https://docs.github.com/enterprise-server@3.3/rest/reference/actions#set-repository-access-to-a-self-hosted-runner-group-in-an-organization>

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
        260341,
        806194,
        537023,
        703889,
    ];
    $request->org = 'in';
    $request->runnerGroupId = 100226;

    $response = $sdk->actions->actionsSetRepoAccessToSelfHostedRunnerGroupInOrg($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsSetSelectedReposForOrgSecret

Replaces all repositories for an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://docs.github.com/enterprise-server@3.3/rest/reference/actions#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/actions#set-selected-repositories-for-an-organization-secret>

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
        919483,
    ];
    $request->org = 'ullam';
    $request->secretName = 'expedita';

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
<https://docs.github.com/enterprise-server@3.3/rest/reference/actions#set-selected-repositories-enabled-for-github-actions-in-an-organization>

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
        998848,
        841140,
    ];
    $request->org = 'sed';

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
<https://docs.github.com/enterprise-server@3.3/rest/reference/actions#set-self-hosted-runners-in-a-group-for-an-organization>

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
        868126,
        37559,
        162493,
        508315,
    ];
    $request->org = 'natus';
    $request->runnerGroupId = 166847;

    $response = $sdk->actions->actionsSetSelfHostedRunnersInGroupForOrg($request);

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
<https://docs.github.com/enterprise-server@3.3/rest/reference/actions#update-a-self-hosted-runner-group-for-an-organization>

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
    $request->requestBody->name = 'Angelica Stanton';
    $request->requestBody->visibility = ActionsUpdateSelfHostedRunnerGroupForOrgRequestBodyVisibilityEnum::ALL;
    $request->org = 'excepturi';
    $request->runnerGroupId = 139972;

    $response = $sdk->actions->actionsUpdateSelfHostedRunnerGroupForOrg($request);

    if ($response->runnerGroupsOrg !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
