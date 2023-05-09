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
You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/actions#add-repository-acess-to-a-self-hosted-runner-group-in-an-organization>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgRequest;
import org.openapis.openapi.models.operations.ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgRequest req = new ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgRequest("quibusdam", 602763L, 857946L);            

            ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgResponse res = sdk.actions.actionsAddRepoAccessToSelfHostedRunnerGroupInOrg(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## actionsAddSelectedRepoToOrgSecret

Adds a repository to an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://docs.github.com/enterprise-server@3.2/rest/reference/actions#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/actions#add-selected-repository-to-an-organization-secret>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActionsAddSelectedRepoToOrgSecretRequest;
import org.openapis.openapi.models.operations.ActionsAddSelectedRepoToOrgSecretResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActionsAddSelectedRepoToOrgSecretRequest req = new ActionsAddSelectedRepoToOrgSecretRequest("corrupti", 847252L, "vel");            

            ActionsAddSelectedRepoToOrgSecretResponse res = sdk.actions.actionsAddSelectedRepoToOrgSecret(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## actionsAddSelfHostedRunnerToGroupForOrg

Adds a self-hosted runner to a runner group configured in an organization.
You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/actions#add-a-self-hosted-runner-to-a-group-for-an-organization>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActionsAddSelfHostedRunnerToGroupForOrgRequest;
import org.openapis.openapi.models.operations.ActionsAddSelfHostedRunnerToGroupForOrgResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActionsAddSelfHostedRunnerToGroupForOrgRequest req = new ActionsAddSelfHostedRunnerToGroupForOrgRequest("error", 645894L, 384382L);            

            ActionsAddSelfHostedRunnerToGroupForOrgResponse res = sdk.actions.actionsAddSelfHostedRunnerToGroupForOrg(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## actionsCancelWorkflowRun

Cancels a workflow run using its `id`. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/actions#cancel-a-workflow-run>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActionsCancelWorkflowRunRequest;
import org.openapis.openapi.models.operations.ActionsCancelWorkflowRunResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActionsCancelWorkflowRunRequest req = new ActionsCancelWorkflowRunRequest("iure", "magnam", 891773L);            

            ActionsCancelWorkflowRunResponse res = sdk.actions.actionsCancelWorkflowRun(req);

            if (res.emptyObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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
<https://docs.github.com/enterprise-server@3.2/rest/reference/actions#create-or-update-an-environment-secret>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActionsCreateOrUpdateEnvironmentSecretRequest;
import org.openapis.openapi.models.operations.ActionsCreateOrUpdateEnvironmentSecretRequestBody;
import org.openapis.openapi.models.operations.ActionsCreateOrUpdateEnvironmentSecretResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActionsCreateOrUpdateEnvironmentSecretRequest req = new ActionsCreateOrUpdateEnvironmentSecretRequest(                new ActionsCreateOrUpdateEnvironmentSecretRequestBody("ipsa", "delectus");, "tempora", 383441L, "molestiae");            

            ActionsCreateOrUpdateEnvironmentSecretResponse res = sdk.actions.actionsCreateOrUpdateEnvironmentSecret(req);

            if (res.emptyObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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
<https://docs.github.com/enterprise-server@3.2/rest/reference/actions#create-or-update-an-organization-secret>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActionsCreateOrUpdateOrgSecretRequest;
import org.openapis.openapi.models.operations.ActionsCreateOrUpdateOrgSecretRequestBody;
import org.openapis.openapi.models.operations.ActionsCreateOrUpdateOrgSecretRequestBodyVisibilityEnum;
import org.openapis.openapi.models.operations.ActionsCreateOrUpdateOrgSecretResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActionsCreateOrUpdateOrgSecretRequest req = new ActionsCreateOrUpdateOrgSecretRequest(                new ActionsCreateOrUpdateOrgSecretRequestBody(ActionsCreateOrUpdateOrgSecretRequestBodyVisibilityEnum.SELECTED) {{
                                encryptedValue = "placeat";
                                keyId = "voluptatum";
                                selectedRepositoryIds = new Long[]{{
                                    add(568045L),
                                    add(392785L),
                                }};
                            }};, "recusandae", "temporibus");            

            ActionsCreateOrUpdateOrgSecretResponse res = sdk.actions.actionsCreateOrUpdateOrgSecret(req);

            if (res.emptyObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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
<https://docs.github.com/enterprise-server@3.2/rest/reference/actions#create-or-update-a-repository-secret>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActionsCreateOrUpdateRepoSecretRequest;
import org.openapis.openapi.models.operations.ActionsCreateOrUpdateRepoSecretRequestBody;
import org.openapis.openapi.models.operations.ActionsCreateOrUpdateRepoSecretResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActionsCreateOrUpdateRepoSecretRequest req = new ActionsCreateOrUpdateRepoSecretRequest(                new ActionsCreateOrUpdateRepoSecretRequestBody() {{
                                encryptedValue = "ab";
                                keyId = "quis";
                            }};, "veritatis", "deserunt", "perferendis");            

            ActionsCreateOrUpdateRepoSecretResponse res = sdk.actions.actionsCreateOrUpdateRepoSecret(req);

            if (res.emptyObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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
<https://docs.github.com/enterprise-server@3.2/rest/reference/actions#create-a-registration-token-for-an-organization>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActionsCreateRegistrationTokenForOrgRequest;
import org.openapis.openapi.models.operations.ActionsCreateRegistrationTokenForOrgResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActionsCreateRegistrationTokenForOrgRequest req = new ActionsCreateRegistrationTokenForOrgRequest("ipsam");            

            ActionsCreateRegistrationTokenForOrgResponse res = sdk.actions.actionsCreateRegistrationTokenForOrg(req);

            if (res.authenticationToken != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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
<https://docs.github.com/enterprise-server@3.2/rest/reference/actions#create-a-registration-token-for-a-repository>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActionsCreateRegistrationTokenForRepoRequest;
import org.openapis.openapi.models.operations.ActionsCreateRegistrationTokenForRepoResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActionsCreateRegistrationTokenForRepoRequest req = new ActionsCreateRegistrationTokenForRepoRequest("repellendus", "sapiente");            

            ActionsCreateRegistrationTokenForRepoResponse res = sdk.actions.actionsCreateRegistrationTokenForRepo(req);

            if (res.authenticationToken != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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
<https://docs.github.com/enterprise-server@3.2/rest/reference/actions#create-a-remove-token-for-an-organization>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActionsCreateRemoveTokenForOrgRequest;
import org.openapis.openapi.models.operations.ActionsCreateRemoveTokenForOrgResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActionsCreateRemoveTokenForOrgRequest req = new ActionsCreateRemoveTokenForOrgRequest("quo");            

            ActionsCreateRemoveTokenForOrgResponse res = sdk.actions.actionsCreateRemoveTokenForOrg(req);

            if (res.authenticationToken != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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
<https://docs.github.com/enterprise-server@3.2/rest/reference/actions#create-a-remove-token-for-a-repository>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActionsCreateRemoveTokenForRepoRequest;
import org.openapis.openapi.models.operations.ActionsCreateRemoveTokenForRepoResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActionsCreateRemoveTokenForRepoRequest req = new ActionsCreateRemoveTokenForRepoRequest("odit", "at");            

            ActionsCreateRemoveTokenForRepoResponse res = sdk.actions.actionsCreateRemoveTokenForRepo(req);

            if (res.authenticationToken != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## actionsCreateSelfHostedRunnerGroupForOrg

The self-hosted runner groups REST API is available with GitHub Enterprise Cloud and GitHub Enterprise Server. For more information, see "[GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products)."

Creates a new self-hosted runner group for an organization.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/actions#create-a-self-hosted-runner-group-for-an-organization>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActionsCreateSelfHostedRunnerGroupForOrgRequest;
import org.openapis.openapi.models.operations.ActionsCreateSelfHostedRunnerGroupForOrgRequestBody;
import org.openapis.openapi.models.operations.ActionsCreateSelfHostedRunnerGroupForOrgRequestBodyVisibilityEnum;
import org.openapis.openapi.models.operations.ActionsCreateSelfHostedRunnerGroupForOrgResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActionsCreateSelfHostedRunnerGroupForOrgRequest req = new ActionsCreateSelfHostedRunnerGroupForOrgRequest(                new ActionsCreateSelfHostedRunnerGroupForOrgRequestBody("at") {{
                                allowsPublicRepositories = false;
                                runners = new Long[]{{
                                    add(473608L),
                                    add(799159L),
                                    add(800911L),
                                    add(461479L),
                                }};
                                selectedRepositoryIds = new Long[]{{
                                    add(780529L),
                                    add(678880L),
                                    add(118274L),
                                }};
                                visibility = ActionsCreateSelfHostedRunnerGroupForOrgRequestBodyVisibilityEnum.PRIVATE_;
                            }};, "officia");            

            ActionsCreateSelfHostedRunnerGroupForOrgResponse res = sdk.actions.actionsCreateSelfHostedRunnerGroupForOrg(req);

            if (res.runnerGroupsOrg != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## actionsCreateWorkflowDispatch

You can use this endpoint to manually trigger a GitHub Actions workflow run. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`.

You must configure your GitHub Actions workflow to run when the [`workflow_dispatch` webhook](/developers/webhooks-and-events/webhook-events-and-payloads#workflow_dispatch) event occurs. The `inputs` are configured in the workflow file. For more information about how to configure the `workflow_dispatch` event in the workflow file, see "[Events that trigger workflows](/actions/reference/events-that-trigger-workflows#workflow_dispatch)."

You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint. For more information, see "[Creating a personal access token for the command line](https://docs.github.com/articles/creating-a-personal-access-token-for-the-command-line)."

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/actions#create-a-workflow-dispatch-event>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActionsCreateWorkflowDispatchRequest;
import org.openapis.openapi.models.operations.ActionsCreateWorkflowDispatchRequestBody;
import org.openapis.openapi.models.operations.ActionsCreateWorkflowDispatchResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActionsCreateWorkflowDispatchRequest req = new ActionsCreateWorkflowDispatchRequest(                new ActionsCreateWorkflowDispatchRequestBody("occaecati") {{
                                inputs = new java.util.HashMap<String, String>() {{
                                    put("deleniti", "hic");
                                }};
                            }};, "optio", "totam", 414662L);            

            ActionsCreateWorkflowDispatchResponse res = sdk.actions.actionsCreateWorkflowDispatch(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## actionsDeleteArtifact

Deletes an artifact for a workflow run. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/actions#delete-an-artifact>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActionsDeleteArtifactRequest;
import org.openapis.openapi.models.operations.ActionsDeleteArtifactResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActionsDeleteArtifactRequest req = new ActionsDeleteArtifactRequest(473600L, "modi", "qui");            

            ActionsDeleteArtifactResponse res = sdk.actions.actionsDeleteArtifact(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## actionsDeleteEnvironmentSecret

Deletes a secret in an environment using the secret name. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/actions#delete-an-environment-secret>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActionsDeleteEnvironmentSecretRequest;
import org.openapis.openapi.models.operations.ActionsDeleteEnvironmentSecretResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActionsDeleteEnvironmentSecretRequest req = new ActionsDeleteEnvironmentSecretRequest("impedit", 736918L, "esse");            

            ActionsDeleteEnvironmentSecretResponse res = sdk.actions.actionsDeleteEnvironmentSecret(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## actionsDeleteOrgSecret

Deletes a secret in an organization using the secret name. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/actions#delete-an-organization-secret>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActionsDeleteOrgSecretRequest;
import org.openapis.openapi.models.operations.ActionsDeleteOrgSecretResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActionsDeleteOrgSecretRequest req = new ActionsDeleteOrgSecretRequest("ipsum", "excepturi");            

            ActionsDeleteOrgSecretResponse res = sdk.actions.actionsDeleteOrgSecret(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## actionsDeleteRepoSecret

Deletes a secret in a repository using the secret name. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/actions#delete-a-repository-secret>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActionsDeleteRepoSecretRequest;
import org.openapis.openapi.models.operations.ActionsDeleteRepoSecretResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActionsDeleteRepoSecretRequest req = new ActionsDeleteRepoSecretRequest("aspernatur", "perferendis", "ad");            

            ActionsDeleteRepoSecretResponse res = sdk.actions.actionsDeleteRepoSecret(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## actionsDeleteSelfHostedRunnerFromOrg

Forces the removal of a self-hosted runner from an organization. You can use this endpoint to completely remove the runner when the machine you were using no longer exists.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/actions#delete-a-self-hosted-runner-from-an-organization>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActionsDeleteSelfHostedRunnerFromOrgRequest;
import org.openapis.openapi.models.operations.ActionsDeleteSelfHostedRunnerFromOrgResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActionsDeleteSelfHostedRunnerFromOrgRequest req = new ActionsDeleteSelfHostedRunnerFromOrgRequest("natus", 149675L);            

            ActionsDeleteSelfHostedRunnerFromOrgResponse res = sdk.actions.actionsDeleteSelfHostedRunnerFromOrg(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## actionsDeleteSelfHostedRunnerFromRepo

Forces the removal of a self-hosted runner from a repository. You can use this endpoint to completely remove the runner when the machine you were using no longer exists.

You must authenticate using an access token with the `repo`
scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/actions#delete-a-self-hosted-runner-from-a-repository>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActionsDeleteSelfHostedRunnerFromRepoRequest;
import org.openapis.openapi.models.operations.ActionsDeleteSelfHostedRunnerFromRepoResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActionsDeleteSelfHostedRunnerFromRepoRequest req = new ActionsDeleteSelfHostedRunnerFromRepoRequest("iste", "dolor", 616934L);            

            ActionsDeleteSelfHostedRunnerFromRepoResponse res = sdk.actions.actionsDeleteSelfHostedRunnerFromRepo(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## actionsDeleteSelfHostedRunnerGroupFromOrg

Deletes a self-hosted runner group for an organization.
You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/actions#delete-a-self-hosted-runner-group-from-an-organization>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActionsDeleteSelfHostedRunnerGroupFromOrgRequest;
import org.openapis.openapi.models.operations.ActionsDeleteSelfHostedRunnerGroupFromOrgResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActionsDeleteSelfHostedRunnerGroupFromOrgRequest req = new ActionsDeleteSelfHostedRunnerGroupFromOrgRequest("laboriosam", 943749L);            

            ActionsDeleteSelfHostedRunnerGroupFromOrgResponse res = sdk.actions.actionsDeleteSelfHostedRunnerGroupFromOrg(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## actionsDeleteWorkflowRun

Delete a specific workflow run. Anyone with write access to the repository can use this endpoint. If the repository is
private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:write` permission to use
this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/actions#delete-a-workflow-run>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActionsDeleteWorkflowRunRequest;
import org.openapis.openapi.models.operations.ActionsDeleteWorkflowRunResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActionsDeleteWorkflowRunRequest req = new ActionsDeleteWorkflowRunRequest("saepe", "fuga", 449950L);            

            ActionsDeleteWorkflowRunResponse res = sdk.actions.actionsDeleteWorkflowRun(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## actionsDeleteWorkflowRunLogs

Deletes all logs for a workflow run. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/actions#delete-workflow-run-logs>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActionsDeleteWorkflowRunLogsRequest;
import org.openapis.openapi.models.operations.ActionsDeleteWorkflowRunLogsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActionsDeleteWorkflowRunLogsRequest req = new ActionsDeleteWorkflowRunLogsRequest("corporis", "iste", 437032L);            

            ActionsDeleteWorkflowRunLogsResponse res = sdk.actions.actionsDeleteWorkflowRunLogs(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## actionsDisableSelectedRepositoryGithubActionsOrganization

Removes a repository from the list of selected repositories that are enabled for GitHub Actions in an organization. To use this endpoint, the organization permission policy for `enabled_repositories` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an organization](#set-github-actions-permissions-for-an-organization)."

You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/actions#disable-a-selected-repository-for-github-actions-in-an-organization>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActionsDisableSelectedRepositoryGithubActionsOrganizationRequest;
import org.openapis.openapi.models.operations.ActionsDisableSelectedRepositoryGithubActionsOrganizationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActionsDisableSelectedRepositoryGithubActionsOrganizationRequest req = new ActionsDisableSelectedRepositoryGithubActionsOrganizationRequest("saepe", 697631L);            

            ActionsDisableSelectedRepositoryGithubActionsOrganizationResponse res = sdk.actions.actionsDisableSelectedRepositoryGithubActionsOrganization(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## actionsDisableWorkflow

Disables a workflow and sets the `state` of the workflow to `disabled_manually`. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`.

You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/actions#disable-a-workflow>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActionsDisableWorkflowRequest;
import org.openapis.openapi.models.operations.ActionsDisableWorkflowResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActionsDisableWorkflowRequest req = new ActionsDisableWorkflowRequest("architecto", "ipsa", "est");            

            ActionsDisableWorkflowResponse res = sdk.actions.actionsDisableWorkflow(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## actionsDownloadArtifact

Gets a redirect URL to download an archive for a repository. This URL expires after 1 minute. Look for `Location:` in
the response header to find the URL for the download. The `:archive_format` must be `zip`. Anyone with read access to
the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope.
GitHub Apps must have the `actions:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/actions#download-an-artifact>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActionsDownloadArtifactRequest;
import org.openapis.openapi.models.operations.ActionsDownloadArtifactResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActionsDownloadArtifactRequest req = new ActionsDownloadArtifactRequest("mollitia", 670638L, "dolores", "dolorem");            

            ActionsDownloadArtifactResponse res = sdk.actions.actionsDownloadArtifact(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## actionsDownloadJobLogsForWorkflowRun

Gets a redirect URL to download a plain text file of logs for a workflow job. This link expires after 1 minute. Look
for `Location:` in the response header to find the URL for the download. Anyone with read access to the repository can
use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must
have the `actions:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/actions#download-job-logs-for-a-workflow-run>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActionsDownloadJobLogsForWorkflowRunRequest;
import org.openapis.openapi.models.operations.ActionsDownloadJobLogsForWorkflowRunResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActionsDownloadJobLogsForWorkflowRunRequest req = new ActionsDownloadJobLogsForWorkflowRunRequest(358152L, "explicabo", "nobis");            

            ActionsDownloadJobLogsForWorkflowRunResponse res = sdk.actions.actionsDownloadJobLogsForWorkflowRun(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## actionsDownloadWorkflowRunLogs

Gets a redirect URL to download an archive of log files for a workflow run. This link expires after 1 minute. Look for
`Location:` in the response header to find the URL for the download. Anyone with read access to the repository can use
this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have
the `actions:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/actions#download-workflow-run-logs>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActionsDownloadWorkflowRunLogsRequest;
import org.openapis.openapi.models.operations.ActionsDownloadWorkflowRunLogsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActionsDownloadWorkflowRunLogsRequest req = new ActionsDownloadWorkflowRunLogsRequest("enim", "omnis", 363711L);            

            ActionsDownloadWorkflowRunLogsResponse res = sdk.actions.actionsDownloadWorkflowRunLogs(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## actionsEnableSelectedRepositoryGithubActionsOrganization

Adds a repository to the list of selected repositories that are enabled for GitHub Actions in an organization. To use this endpoint, the organization permission policy for `enabled_repositories` must be must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an organization](#set-github-actions-permissions-for-an-organization)."

You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/actions#enable-a-selected-repository-for-github-actions-in-an-organization>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActionsEnableSelectedRepositoryGithubActionsOrganizationRequest;
import org.openapis.openapi.models.operations.ActionsEnableSelectedRepositoryGithubActionsOrganizationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActionsEnableSelectedRepositoryGithubActionsOrganizationRequest req = new ActionsEnableSelectedRepositoryGithubActionsOrganizationRequest("minima", 570197L);            

            ActionsEnableSelectedRepositoryGithubActionsOrganizationResponse res = sdk.actions.actionsEnableSelectedRepositoryGithubActionsOrganization(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## actionsEnableWorkflow

Enables a workflow and sets the `state` of the workflow to `active`. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`.

You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/actions#enable-a-workflow>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActionsEnableWorkflowRequest;
import org.openapis.openapi.models.operations.ActionsEnableWorkflowResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActionsEnableWorkflowRequest req = new ActionsEnableWorkflowRequest("accusantium", "iure", "doloribus");            

            ActionsEnableWorkflowResponse res = sdk.actions.actionsEnableWorkflow(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## actionsGetAllowedActionsOrganization

Gets the selected actions that are allowed in an organization. To use this endpoint, the organization permission policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an organization](#set-github-actions-permissions-for-an-organization).""

You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/actions#get-allowed-actions-for-an-organization>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActionsGetAllowedActionsOrganizationRequest;
import org.openapis.openapi.models.operations.ActionsGetAllowedActionsOrganizationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActionsGetAllowedActionsOrganizationRequest req = new ActionsGetAllowedActionsOrganizationRequest("sapiente");            

            ActionsGetAllowedActionsOrganizationResponse res = sdk.actions.actionsGetAllowedActionsOrganization(req);

            if (res.selectedActions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## actionsGetAllowedActionsRepository

Gets the settings for selected actions that are allowed in a repository. To use this endpoint, the repository policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for a repository](#set-github-actions-permissions-for-a-repository)."

You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `administration` repository permission to use this API.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/actions#get-allowed-actions-for-a-repository>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActionsGetAllowedActionsRepositoryRequest;
import org.openapis.openapi.models.operations.ActionsGetAllowedActionsRepositoryResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActionsGetAllowedActionsRepositoryRequest req = new ActionsGetAllowedActionsRepositoryRequest("architecto", "mollitia");            

            ActionsGetAllowedActionsRepositoryResponse res = sdk.actions.actionsGetAllowedActionsRepository(req);

            if (res.selectedActions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## actionsGetArtifact

Gets a specific artifact for a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/actions#get-an-artifact>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActionsGetArtifactRequest;
import org.openapis.openapi.models.operations.ActionsGetArtifactResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActionsGetArtifactRequest req = new ActionsGetArtifactRequest(208876L, "culpa", "consequuntur");            

            ActionsGetArtifactResponse res = sdk.actions.actionsGetArtifact(req);

            if (res.artifact != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## actionsGetEnvironmentPublicKey

Get the public key for an environment, which you need to encrypt environment secrets. You need to encrypt a secret before you can create or update secrets. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `secrets` repository permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/actions#get-an-environment-public-key>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActionsGetEnvironmentPublicKeyRequest;
import org.openapis.openapi.models.operations.ActionsGetEnvironmentPublicKeyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActionsGetEnvironmentPublicKeyRequest req = new ActionsGetEnvironmentPublicKeyRequest("repellat", 653108L);            

            ActionsGetEnvironmentPublicKeyResponse res = sdk.actions.actionsGetEnvironmentPublicKey(req);

            if (res.actionsPublicKey != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## actionsGetEnvironmentSecret

Gets a single environment secret without revealing its encrypted value. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/actions#get-an-environment-secret>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActionsGetEnvironmentSecretRequest;
import org.openapis.openapi.models.operations.ActionsGetEnvironmentSecretResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActionsGetEnvironmentSecretRequest req = new ActionsGetEnvironmentSecretRequest("occaecati", 253291L, "commodi");            

            ActionsGetEnvironmentSecretResponse res = sdk.actions.actionsGetEnvironmentSecret(req);

            if (res.actionsSecret != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## actionsGetGithubActionsPermissionsOrganization

Gets the GitHub Actions permissions policy for repositories and allowed actions in an organization.

You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/actions#get-github-actions-permissions-for-an-organization>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActionsGetGithubActionsPermissionsOrganizationRequest;
import org.openapis.openapi.models.operations.ActionsGetGithubActionsPermissionsOrganizationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActionsGetGithubActionsPermissionsOrganizationRequest req = new ActionsGetGithubActionsPermissionsOrganizationRequest("quam");            

            ActionsGetGithubActionsPermissionsOrganizationResponse res = sdk.actions.actionsGetGithubActionsPermissionsOrganization(req);

            if (res.actionsOrganizationPermissions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## actionsGetGithubActionsPermissionsRepository

Gets the GitHub Actions permissions policy for a repository, including whether GitHub Actions is enabled and the actions allowed to run in the repository.

You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `administration` repository permission to use this API.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/actions#get-github-actions-permissions-for-a-repository>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActionsGetGithubActionsPermissionsRepositoryRequest;
import org.openapis.openapi.models.operations.ActionsGetGithubActionsPermissionsRepositoryResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActionsGetGithubActionsPermissionsRepositoryRequest req = new ActionsGetGithubActionsPermissionsRepositoryRequest("molestiae", "velit");            

            ActionsGetGithubActionsPermissionsRepositoryResponse res = sdk.actions.actionsGetGithubActionsPermissionsRepository(req);

            if (res.actionsRepositoryPermissions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## actionsGetJobForWorkflowRun

Gets a specific job in a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/actions#get-a-job-for-a-workflow-run>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActionsGetJobForWorkflowRunRequest;
import org.openapis.openapi.models.operations.ActionsGetJobForWorkflowRunResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActionsGetJobForWorkflowRunRequest req = new ActionsGetJobForWorkflowRunRequest(623510L, "quia", "quis");            

            ActionsGetJobForWorkflowRunResponse res = sdk.actions.actionsGetJobForWorkflowRun(req);

            if (res.job != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## actionsGetOrgPublicKey

Gets your public key, which you need to encrypt secrets. You need to encrypt a secret before you can create or update secrets. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/actions#get-an-organization-public-key>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActionsGetOrgPublicKeyRequest;
import org.openapis.openapi.models.operations.ActionsGetOrgPublicKeyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActionsGetOrgPublicKeyRequest req = new ActionsGetOrgPublicKeyRequest("vitae");            

            ActionsGetOrgPublicKeyResponse res = sdk.actions.actionsGetOrgPublicKey(req);

            if (res.actionsPublicKey != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## actionsGetOrgSecret

Gets a single organization secret without revealing its encrypted value. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/actions#get-an-organization-secret>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActionsGetOrgSecretRequest;
import org.openapis.openapi.models.operations.ActionsGetOrgSecretResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActionsGetOrgSecretRequest req = new ActionsGetOrgSecretRequest("laborum", "animi");            

            ActionsGetOrgSecretResponse res = sdk.actions.actionsGetOrgSecret(req);

            if (res.organizationActionsSecret != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## actionsGetPendingDeploymentsForRun

Get all deployment environments for a workflow run that are waiting for protection rules to pass.

Anyone with read access to the repository can use this endpoint. If the repository is private, you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/actions#get-pending-deployments-for-a-workflow-run>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActionsGetPendingDeploymentsForRunRequest;
import org.openapis.openapi.models.operations.ActionsGetPendingDeploymentsForRunResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActionsGetPendingDeploymentsForRunRequest req = new ActionsGetPendingDeploymentsForRunRequest("enim", "odit", 778346L);            

            ActionsGetPendingDeploymentsForRunResponse res = sdk.actions.actionsGetPendingDeploymentsForRun(req);

            if (res.pendingDeployments != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## actionsGetRepoPublicKey

Gets your public key, which you need to encrypt secrets. You need to encrypt a secret before you can create or update secrets. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `secrets` repository permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/actions#get-a-repository-public-key>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActionsGetRepoPublicKeyRequest;
import org.openapis.openapi.models.operations.ActionsGetRepoPublicKeyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActionsGetRepoPublicKeyRequest req = new ActionsGetRepoPublicKeyRequest("sequi", "tenetur");            

            ActionsGetRepoPublicKeyResponse res = sdk.actions.actionsGetRepoPublicKey(req);

            if (res.actionsPublicKey != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## actionsGetRepoSecret

Gets a single repository secret without revealing its encrypted value. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/actions#get-a-repository-secret>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActionsGetRepoSecretRequest;
import org.openapis.openapi.models.operations.ActionsGetRepoSecretResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActionsGetRepoSecretRequest req = new ActionsGetRepoSecretRequest("ipsam", "id", "possimus");            

            ActionsGetRepoSecretResponse res = sdk.actions.actionsGetRepoSecret(req);

            if (res.actionsSecret != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## actionsGetReviewsForRun

Anyone with read access to the repository can use this endpoint. If the repository is private, you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/actions#get-the-review-history-for-a-workflow-run>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActionsGetReviewsForRunRequest;
import org.openapis.openapi.models.operations.ActionsGetReviewsForRunResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActionsGetReviewsForRunRequest req = new ActionsGetReviewsForRunRequest("aut", "quasi", 622846L);            

            ActionsGetReviewsForRunResponse res = sdk.actions.actionsGetReviewsForRun(req);

            if (res.environmentApprovals != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## actionsGetSelfHostedRunnerForOrg

Gets a specific self-hosted runner configured in an organization.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/actions#get-a-self-hosted-runner-for-an-organization>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActionsGetSelfHostedRunnerForOrgRequest;
import org.openapis.openapi.models.operations.ActionsGetSelfHostedRunnerForOrgResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActionsGetSelfHostedRunnerForOrgRequest req = new ActionsGetSelfHostedRunnerForOrgRequest("temporibus", 673660L);            

            ActionsGetSelfHostedRunnerForOrgResponse res = sdk.actions.actionsGetSelfHostedRunnerForOrg(req);

            if (res.runner != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## actionsGetSelfHostedRunnerForRepo

Gets a specific self-hosted runner configured in a repository.

You must authenticate using an access token with the `repo` scope to use this
endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/actions#get-a-self-hosted-runner-for-a-repository>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActionsGetSelfHostedRunnerForRepoRequest;
import org.openapis.openapi.models.operations.ActionsGetSelfHostedRunnerForRepoResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActionsGetSelfHostedRunnerForRepoRequest req = new ActionsGetSelfHostedRunnerForRepoRequest("quasi", "reiciendis", 976460L);            

            ActionsGetSelfHostedRunnerForRepoResponse res = sdk.actions.actionsGetSelfHostedRunnerForRepo(req);

            if (res.runner != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## actionsGetSelfHostedRunnerGroupForOrg

Gets a specific self-hosted runner group for an organization.
You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/actions#get-a-self-hosted-runner-group-for-an-organization>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActionsGetSelfHostedRunnerGroupForOrgRequest;
import org.openapis.openapi.models.operations.ActionsGetSelfHostedRunnerGroupForOrgResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActionsGetSelfHostedRunnerGroupForOrgRequest req = new ActionsGetSelfHostedRunnerGroupForOrgRequest("vero", 468651L);            

            ActionsGetSelfHostedRunnerGroupForOrgResponse res = sdk.actions.actionsGetSelfHostedRunnerGroupForOrg(req);

            if (res.runnerGroupsOrg != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## actionsGetWorkflow

Gets a specific workflow. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/actions#get-a-workflow>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActionsGetWorkflowRequest;
import org.openapis.openapi.models.operations.ActionsGetWorkflowResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActionsGetWorkflowRequest req = new ActionsGetWorkflowRequest("praesentium", "voluptatibus", 604846L);            

            ActionsGetWorkflowResponse res = sdk.actions.actionsGetWorkflow(req);

            if (res.workflow != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## actionsGetWorkflowRun

Gets a specific workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/actions#get-a-workflow-run>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActionsGetWorkflowRunRequest;
import org.openapis.openapi.models.operations.ActionsGetWorkflowRunResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActionsGetWorkflowRunRequest req = new ActionsGetWorkflowRunRequest("voluptate", "cum", 19987L) {{
                excludePullRequests = false;
            }};            

            ActionsGetWorkflowRunResponse res = sdk.actions.actionsGetWorkflowRun(req);

            if (res.workflowRun != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## actionsListArtifactsForRepo

Lists all artifacts for a repository. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/actions#list-artifacts-for-a-repository>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActionsListArtifactsForRepoRequest;
import org.openapis.openapi.models.operations.ActionsListArtifactsForRepoResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActionsListArtifactsForRepoRequest req = new ActionsListArtifactsForRepoRequest("doloremque", "reprehenderit") {{
                name = "Shawna Carter";
                page = 480894L;
                perPage = 118727L;
            }};            

            ActionsListArtifactsForRepoResponse res = sdk.actions.actionsListArtifactsForRepo(req);

            if (res.actionsListArtifactsForRepo200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## actionsListEnvironmentSecrets

Lists all secrets available in an environment without revealing their encrypted values. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/actions#list-environment-secrets>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActionsListEnvironmentSecretsRequest;
import org.openapis.openapi.models.operations.ActionsListEnvironmentSecretsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActionsListEnvironmentSecretsRequest req = new ActionsListEnvironmentSecretsRequest("harum", 317983L) {{
                page = 880476L;
                perPage = 414263L;
            }};            

            ActionsListEnvironmentSecretsResponse res = sdk.actions.actionsListEnvironmentSecrets(req);

            if (res.actionsListEnvironmentSecrets200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## actionsListJobsForWorkflowRun

Lists jobs for a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://docs.github.com/enterprise-server@3.2/rest/overview/resources-in-the-rest-api#parameters).

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/actions#list-jobs-for-a-workflow-run>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActionsListJobsForWorkflowRunFilterEnum;
import org.openapis.openapi.models.operations.ActionsListJobsForWorkflowRunRequest;
import org.openapis.openapi.models.operations.ActionsListJobsForWorkflowRunResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActionsListJobsForWorkflowRunRequest req = new ActionsListJobsForWorkflowRunRequest("repudiandae", "quae", 216822L) {{
                filter = ActionsListJobsForWorkflowRunFilterEnum.ALL;
                page = 565189L;
                perPage = 566602L;
            }};            

            ActionsListJobsForWorkflowRunResponse res = sdk.actions.actionsListJobsForWorkflowRun(req);

            if (res.actionsListJobsForWorkflowRun200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## actionsListOrgSecrets

Lists all secrets available in an organization without revealing their encrypted values. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/actions#list-organization-secrets>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActionsListOrgSecretsRequest;
import org.openapis.openapi.models.operations.ActionsListOrgSecretsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActionsListOrgSecretsRequest req = new ActionsListOrgSecretsRequest("pariatur") {{
                page = 265389L;
                perPage = 508969L;
            }};            

            ActionsListOrgSecretsResponse res = sdk.actions.actionsListOrgSecrets(req);

            if (res.actionsListOrgSecrets200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## actionsListRepoAccessToSelfHostedRunnerGroupInOrg

The self-hosted runner groups REST API is available with GitHub Enterprise Cloud and GitHub Enterprise Server. For more information, see "[GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products)."

Lists the repositories with access to a self-hosted runner group configured in an organization.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/actions#list-repository-access-to-a-self-hosted-runner-group-in-an-organization>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActionsListRepoAccessToSelfHostedRunnerGroupInOrgRequest;
import org.openapis.openapi.models.operations.ActionsListRepoAccessToSelfHostedRunnerGroupInOrgResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActionsListRepoAccessToSelfHostedRunnerGroupInOrgRequest req = new ActionsListRepoAccessToSelfHostedRunnerGroupInOrgRequest("rem", 916723L) {{
                page = 93940L;
                perPage = 921158L;
            }};            

            ActionsListRepoAccessToSelfHostedRunnerGroupInOrgResponse res = sdk.actions.actionsListRepoAccessToSelfHostedRunnerGroupInOrg(req);

            if (res.actionsListRepoAccessToSelfHostedRunnerGroupInOrg200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## actionsListRepoSecrets

Lists all secrets available in a repository without revealing their encrypted values. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/actions#list-repository-secrets>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActionsListRepoSecretsRequest;
import org.openapis.openapi.models.operations.ActionsListRepoSecretsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActionsListRepoSecretsRequest req = new ActionsListRepoSecretsRequest("sint", "veritatis") {{
                page = 929297L;
                perPage = 277718L;
            }};            

            ActionsListRepoSecretsResponse res = sdk.actions.actionsListRepoSecrets(req);

            if (res.actionsListRepoSecrets200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## actionsListRepoWorkflows

Lists the workflows in a repository. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/actions#list-repository-workflows>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActionsListRepoWorkflowsRequest;
import org.openapis.openapi.models.operations.ActionsListRepoWorkflowsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActionsListRepoWorkflowsRequest req = new ActionsListRepoWorkflowsRequest("enim", "consequatur") {{
                page = 667411L;
                perPage = 842342L;
            }};            

            ActionsListRepoWorkflowsResponse res = sdk.actions.actionsListRepoWorkflows(req);

            if (res.actionsListRepoWorkflows200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## actionsListRunnerApplicationsForOrg

Lists binaries for the runner application that you can download and run.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/actions#list-runner-applications-for-an-organization>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActionsListRunnerApplicationsForOrgRequest;
import org.openapis.openapi.models.operations.ActionsListRunnerApplicationsForOrgResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActionsListRunnerApplicationsForOrgRequest req = new ActionsListRunnerApplicationsForOrgRequest("explicabo");            

            ActionsListRunnerApplicationsForOrgResponse res = sdk.actions.actionsListRunnerApplicationsForOrg(req);

            if (res.runnerApplications != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## actionsListRunnerApplicationsForRepo

Lists binaries for the runner application that you can download and run.

You must authenticate using an access token with the `repo` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/actions#list-runner-applications-for-a-repository>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActionsListRunnerApplicationsForRepoRequest;
import org.openapis.openapi.models.operations.ActionsListRunnerApplicationsForRepoResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActionsListRunnerApplicationsForRepoRequest req = new ActionsListRunnerApplicationsForRepoRequest("deserunt", "distinctio");            

            ActionsListRunnerApplicationsForRepoResponse res = sdk.actions.actionsListRunnerApplicationsForRepo(req);

            if (res.runnerApplications != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## actionsListSelectedReposForOrgSecret

Lists all repositories that have been selected when the `visibility` for repository access to a secret is set to `selected`. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/actions#list-selected-repositories-for-an-organization-secret>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActionsListSelectedReposForOrgSecretRequest;
import org.openapis.openapi.models.operations.ActionsListSelectedReposForOrgSecretResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActionsListSelectedReposForOrgSecretRequest req = new ActionsListSelectedReposForOrgSecretRequest("quibusdam", "labore") {{
                page = 264730L;
                perPage = 183191L;
            }};            

            ActionsListSelectedReposForOrgSecretResponse res = sdk.actions.actionsListSelectedReposForOrgSecret(req);

            if (res.actionsListSelectedReposForOrgSecret200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## actionsListSelectedRepositoriesEnabledGithubActionsOrganization

Lists the selected repositories that are enabled for GitHub Actions in an organization. To use this endpoint, the organization permission policy for `enabled_repositories` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an organization](#set-github-actions-permissions-for-an-organization)."

You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/actions#list-selected-repositories-enabled-for-github-actions-in-an-organization>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationRequest;
import org.openapis.openapi.models.operations.ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationRequest req = new ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationRequest("aliquid") {{
                page = 586513L;
                perPage = 552822L;
            }};            

            ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationResponse res = sdk.actions.actionsListSelectedRepositoriesEnabledGithubActionsOrganization(req);

            if (res.actionsListSelectedRepositoriesEnabledGithubActionsOrganization200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## actionsListSelfHostedRunnerGroupsForOrg

Lists all self-hosted runner groups configured in an organization and inherited from an enterprise.
You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/actions#list-self-hosted-runner-groups-for-an-organization>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActionsListSelfHostedRunnerGroupsForOrgRequest;
import org.openapis.openapi.models.operations.ActionsListSelfHostedRunnerGroupsForOrgResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActionsListSelfHostedRunnerGroupsForOrgRequest req = new ActionsListSelfHostedRunnerGroupsForOrgRequest("perferendis") {{
                page = 164940L;
                perPage = 828940L;
            }};            

            ActionsListSelfHostedRunnerGroupsForOrgResponse res = sdk.actions.actionsListSelfHostedRunnerGroupsForOrg(req);

            if (res.actionsListSelfHostedRunnerGroupsForOrg200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## actionsListSelfHostedRunnersForOrg

Lists all self-hosted runners configured in an organization.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/actions#list-self-hosted-runners-for-an-organization>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActionsListSelfHostedRunnersForOrgRequest;
import org.openapis.openapi.models.operations.ActionsListSelfHostedRunnersForOrgResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActionsListSelfHostedRunnersForOrgRequest req = new ActionsListSelfHostedRunnersForOrgRequest("ipsam") {{
                page = 4695L;
                perPage = 146441L;
            }};            

            ActionsListSelfHostedRunnersForOrgResponse res = sdk.actions.actionsListSelfHostedRunnersForOrg(req);

            if (res.actionsListSelfHostedRunnersForOrg200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## actionsListSelfHostedRunnersForRepo

Lists all self-hosted runners configured in a repository. You must authenticate using an access token with the `repo` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/actions#list-self-hosted-runners-for-a-repository>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActionsListSelfHostedRunnersForRepoRequest;
import org.openapis.openapi.models.operations.ActionsListSelfHostedRunnersForRepoResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActionsListSelfHostedRunnersForRepoRequest req = new ActionsListSelfHostedRunnersForRepoRequest("dolorum", "excepturi") {{
                page = 270008L;
                perPage = 703737L;
            }};            

            ActionsListSelfHostedRunnersForRepoResponse res = sdk.actions.actionsListSelfHostedRunnersForRepo(req);

            if (res.actionsListSelfHostedRunnersForRepo200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## actionsListSelfHostedRunnersInGroupForOrg

Lists self-hosted runners that are in a specific organization group.
You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/actions#list-self-hosted-runners-in-a-group-for-an-organization>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActionsListSelfHostedRunnersInGroupForOrgRequest;
import org.openapis.openapi.models.operations.ActionsListSelfHostedRunnersInGroupForOrgResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActionsListSelfHostedRunnersInGroupForOrgRequest req = new ActionsListSelfHostedRunnersInGroupForOrgRequest("tempore", 288476L) {{
                page = 962189L;
                perPage = 433288L;
            }};            

            ActionsListSelfHostedRunnersInGroupForOrgResponse res = sdk.actions.actionsListSelfHostedRunnersInGroupForOrg(req);

            if (res.actionsListSelfHostedRunnersInGroupForOrg200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## actionsListWorkflowRunArtifacts

Lists artifacts for a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/actions#list-workflow-run-artifacts>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActionsListWorkflowRunArtifactsRequest;
import org.openapis.openapi.models.operations.ActionsListWorkflowRunArtifactsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActionsListWorkflowRunArtifactsRequest req = new ActionsListWorkflowRunArtifactsRequest("non", "eligendi", 576157L) {{
                page = 396098L;
                perPage = 592042L;
            }};            

            ActionsListWorkflowRunArtifactsResponse res = sdk.actions.actionsListWorkflowRunArtifacts(req);

            if (res.actionsListWorkflowRunArtifacts200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## actionsListWorkflowRuns

List all workflow runs for a workflow. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://docs.github.com/enterprise-server@3.2/rest/overview/resources-in-the-rest-api#parameters).

Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/actions#list-workflow-runs>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActionsListWorkflowRunsRequest;
import org.openapis.openapi.models.operations.ActionsListWorkflowRunsResponse;
import org.openapis.openapi.models.shared.WorkflowRunStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActionsListWorkflowRunsRequest req = new ActionsListWorkflowRunsRequest("necessitatibus", "sint", "dolor") {{
                actor = "debitis";
                branch = "a";
                created = OffsetDateTime.parse("2022-02-08T14:21:47.573Z");
                event = "in";
                excludePullRequests = false;
                page = 846409L;
                perPage = 978571L;
                status = WorkflowRunStatusEnum.IN_PROGRESS;
            }};            

            ActionsListWorkflowRunsResponse res = sdk.actions.actionsListWorkflowRuns(req);

            if (res.actionsListWorkflowRuns200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## actionsListWorkflowRunsForRepo

Lists all workflow runs for a repository. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://docs.github.com/enterprise-server@3.2/rest/overview/resources-in-the-rest-api#parameters).

Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/actions#list-workflow-runs-for-a-repository>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActionsListWorkflowRunsForRepoRequest;
import org.openapis.openapi.models.operations.ActionsListWorkflowRunsForRepoResponse;
import org.openapis.openapi.models.shared.WorkflowRunStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActionsListWorkflowRunsForRepoRequest req = new ActionsListWorkflowRunsForRepoRequest("dicta", "magnam") {{
                actor = "cumque";
                branch = "facere";
                created = OffsetDateTime.parse("2022-08-09T06:36:34.417Z");
                event = "laborum";
                excludePullRequests = false;
                page = 881104L;
                perPage = 249796L;
                status = WorkflowRunStatusEnum.SUCCESS;
            }};            

            ActionsListWorkflowRunsForRepoResponse res = sdk.actions.actionsListWorkflowRunsForRepo(req);

            if (res.actionsListWorkflowRunsForRepo200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## actionsReRunWorkflow

Re-runs your workflow run using its `id`. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/actions#re-run-a-workflow>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActionsReRunWorkflowRequest;
import org.openapis.openapi.models.operations.ActionsReRunWorkflowResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActionsReRunWorkflowRequest req = new ActionsReRunWorkflowRequest("enim", "accusamus", 965417L) {{
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("provident", "nam");
                    put("id", "blanditiis");
                    put("deleniti", "sapiente");
                }};
            }};            

            ActionsReRunWorkflowResponse res = sdk.actions.actionsReRunWorkflow(req);

            if (res.emptyObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## actionsRemoveRepoAccessToSelfHostedRunnerGroupInOrg

Removes a repository from the list of selected repositories that can access a self-hosted runner group. The runner group must have `visibility` set to `selected`. For more information, see "[Create a self-hosted runner group for an organization](#create-a-self-hosted-runner-group-for-an-organization)."
You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/actions#remove-repository-access-to-a-self-hosted-runner-group-in-an-organization>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActionsRemoveRepoAccessToSelfHostedRunnerGroupInOrgRequest;
import org.openapis.openapi.models.operations.ActionsRemoveRepoAccessToSelfHostedRunnerGroupInOrgResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActionsRemoveRepoAccessToSelfHostedRunnerGroupInOrgRequest req = new ActionsRemoveRepoAccessToSelfHostedRunnerGroupInOrgRequest("amet", 643990L, 394869L);            

            ActionsRemoveRepoAccessToSelfHostedRunnerGroupInOrgResponse res = sdk.actions.actionsRemoveRepoAccessToSelfHostedRunnerGroupInOrg(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## actionsRemoveSelectedRepoFromOrgSecret

Removes a repository from an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://docs.github.com/enterprise-server@3.2/rest/reference/actions#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/actions#remove-selected-repository-from-an-organization-secret>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActionsRemoveSelectedRepoFromOrgSecretRequest;
import org.openapis.openapi.models.operations.ActionsRemoveSelectedRepoFromOrgSecretResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActionsRemoveSelectedRepoFromOrgSecretRequest req = new ActionsRemoveSelectedRepoFromOrgSecretRequest("vel", 618809L, "omnis");            

            ActionsRemoveSelectedRepoFromOrgSecretResponse res = sdk.actions.actionsRemoveSelectedRepoFromOrgSecret(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## actionsRemoveSelfHostedRunnerFromGroupForOrg

Removes a self-hosted runner from a group configured in an organization. The runner is then returned to the default group.
You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/actions#remove-a-self-hosted-runner-from-a-group-for-an-organization>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActionsRemoveSelfHostedRunnerFromGroupForOrgRequest;
import org.openapis.openapi.models.operations.ActionsRemoveSelfHostedRunnerFromGroupForOrgResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActionsRemoveSelfHostedRunnerFromGroupForOrgRequest req = new ActionsRemoveSelfHostedRunnerFromGroupForOrgRequest("molestiae", 19193L, 470132L);            

            ActionsRemoveSelfHostedRunnerFromGroupForOrgResponse res = sdk.actions.actionsRemoveSelfHostedRunnerFromGroupForOrg(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## actionsReviewPendingDeploymentsForRun

Approve or reject pending deployments that are waiting on approval by a required reviewer.

Required reviewers with read access to the repository contents and deployments can use this endpoint. Required reviewers must authenticate using an access token with the `repo` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/actions#review-pending-deployments-for-a-workflow-run>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActionsReviewPendingDeploymentsForRunRequest;
import org.openapis.openapi.models.operations.ActionsReviewPendingDeploymentsForRunRequestBody;
import org.openapis.openapi.models.operations.ActionsReviewPendingDeploymentsForRunRequestBodyStateEnum;
import org.openapis.openapi.models.operations.ActionsReviewPendingDeploymentsForRunResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActionsReviewPendingDeploymentsForRunRequest req = new ActionsReviewPendingDeploymentsForRunRequest(                new ActionsReviewPendingDeploymentsForRunRequestBody("Ship it!",                 new Long[]{{
                                                add(161171787L),
                                                add(161171787L),
                                            }}, ActionsReviewPendingDeploymentsForRunRequestBodyStateEnum.APPROVED);, "distinctio", "id", 287991L);            

            ActionsReviewPendingDeploymentsForRunResponse res = sdk.actions.actionsReviewPendingDeploymentsForRun(req);

            if (res.deployments != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## actionsSetAllowedActionsOrganization

Sets the actions that are allowed in an organization. To use this endpoint, the organization permission policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an organization](#set-github-actions-permissions-for-an-organization)."

If the organization belongs to an enterprise that has `selected` actions set at the enterprise level, then you cannot override any of the enterprise's allowed actions settings.

To use the `patterns_allowed` setting for private repositories, the organization must belong to an enterprise. If the organization does not belong to an enterprise, then the `patterns_allowed` setting only applies to public repositories in the organization.

You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/actions#set-allowed-actions-for-an-organization>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActionsSetAllowedActionsOrganizationRequest;
import org.openapis.openapi.models.operations.ActionsSetAllowedActionsOrganizationResponse;
import org.openapis.openapi.models.shared.SelectedActions;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActionsSetAllowedActionsOrganizationRequest req = new ActionsSetAllowedActionsOrganizationRequest("labore") {{
                selectedActions = new SelectedActions(false,                 new String[]{{
                                    add("natus"),
                                    add("nobis"),
                                }});;
            }};            

            ActionsSetAllowedActionsOrganizationResponse res = sdk.actions.actionsSetAllowedActionsOrganization(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## actionsSetAllowedActionsRepository

Sets the actions that are allowed in a repository. To use this endpoint, the repository permission policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for a repository](#set-github-actions-permissions-for-a-repository)."

If the repository belongs to an organization or enterprise that has `selected` actions set at the organization or enterprise levels, then you cannot override any of the allowed actions settings.

To use the `patterns_allowed` setting for private repositories, the repository must belong to an enterprise. If the repository does not belong to an enterprise, then the `patterns_allowed` setting only applies to public repositories.

You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `administration` repository permission to use this API.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/actions#set-allowed-actions-for-a-repository>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActionsSetAllowedActionsRepositoryRequest;
import org.openapis.openapi.models.operations.ActionsSetAllowedActionsRepositoryResponse;
import org.openapis.openapi.models.shared.SelectedActions;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActionsSetAllowedActionsRepositoryRequest req = new ActionsSetAllowedActionsRepositoryRequest("eum", "vero") {{
                selectedActions = new SelectedActions(false,                 new String[]{{
                                    add("architecto"),
                                }});;
            }};            

            ActionsSetAllowedActionsRepositoryResponse res = sdk.actions.actionsSetAllowedActionsRepository(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## actionsSetGithubActionsPermissionsOrganization

Sets the GitHub Actions permissions policy for repositories and allowed actions in an organization.

If the organization belongs to an enterprise that has set restrictive permissions at the enterprise level, such as `allowed_actions` to `selected` actions, then you cannot override them for the organization.

You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/actions#set-github-actions-permissions-for-an-organization>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActionsSetGithubActionsPermissionsOrganizationRequest;
import org.openapis.openapi.models.operations.ActionsSetGithubActionsPermissionsOrganizationRequestBody;
import org.openapis.openapi.models.operations.ActionsSetGithubActionsPermissionsOrganizationResponse;
import org.openapis.openapi.models.shared.AllowedActionsEnum;
import org.openapis.openapi.models.shared.EnabledRepositoriesEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActionsSetGithubActionsPermissionsOrganizationRequest req = new ActionsSetGithubActionsPermissionsOrganizationRequest(                new ActionsSetGithubActionsPermissionsOrganizationRequestBody(EnabledRepositoriesEnum.ALL) {{
                                allowedActions = AllowedActionsEnum.ALL;
                            }};, "excepturi");            

            ActionsSetGithubActionsPermissionsOrganizationResponse res = sdk.actions.actionsSetGithubActionsPermissionsOrganization(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## actionsSetGithubActionsPermissionsRepository

Sets the GitHub Actions permissions policy for enabling GitHub Actions and allowed actions in the repository.

If the repository belongs to an organization or enterprise that has set restrictive permissions at the organization or enterprise levels, such as `allowed_actions` to `selected` actions, then you cannot override them for the repository.

You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `administration` repository permission to use this API.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/actions#set-github-actions-permissions-for-a-repository>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActionsSetGithubActionsPermissionsRepositoryRequest;
import org.openapis.openapi.models.operations.ActionsSetGithubActionsPermissionsRepositoryRequestBody;
import org.openapis.openapi.models.operations.ActionsSetGithubActionsPermissionsRepositoryResponse;
import org.openapis.openapi.models.shared.AllowedActionsEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActionsSetGithubActionsPermissionsRepositoryRequest req = new ActionsSetGithubActionsPermissionsRepositoryRequest(                new ActionsSetGithubActionsPermissionsRepositoryRequestBody(false) {{
                                allowedActions = AllowedActionsEnum.LOCAL_ONLY;
                            }};, "provident", "quos");            

            ActionsSetGithubActionsPermissionsRepositoryResponse res = sdk.actions.actionsSetGithubActionsPermissionsRepository(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## actionsSetRepoAccessToSelfHostedRunnerGroupInOrg

Replaces the list of repositories that have access to a self-hosted runner group configured in an organization.
You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/actions#set-repository-access-to-a-self-hosted-runner-group-in-an-organization>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgRequest;
import org.openapis.openapi.models.operations.ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgRequestBody;
import org.openapis.openapi.models.operations.ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgRequest req = new ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgRequest(                new ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgRequestBody(                new Long[]{{
                                                add(33625L),
                                                add(653201L),
                                                add(968962L),
                                            }});, "mollitia", 320997L);            

            ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgResponse res = sdk.actions.actionsSetRepoAccessToSelfHostedRunnerGroupInOrg(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## actionsSetSelectedReposForOrgSecret

Replaces all repositories for an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://docs.github.com/enterprise-server@3.2/rest/reference/actions#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/actions#set-selected-repositories-for-an-organization-secret>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActionsSetSelectedReposForOrgSecretRequest;
import org.openapis.openapi.models.operations.ActionsSetSelectedReposForOrgSecretRequestBody;
import org.openapis.openapi.models.operations.ActionsSetSelectedReposForOrgSecretResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActionsSetSelectedReposForOrgSecretRequest req = new ActionsSetSelectedReposForOrgSecretRequest(                new ActionsSetSelectedReposForOrgSecretRequestBody(                new Long[]{{
                                                add(221262L),
                                                add(896547L),
                                            }});, "odit", "nemo");            

            ActionsSetSelectedReposForOrgSecretResponse res = sdk.actions.actionsSetSelectedReposForOrgSecret(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## actionsSetSelectedRepositoriesEnabledGithubActionsOrganization

Replaces the list of selected repositories that are enabled for GitHub Actions in an organization. To use this endpoint, the organization permission policy for `enabled_repositories` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an organization](#set-github-actions-permissions-for-an-organization)."

You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/actions#set-selected-repositories-enabled-for-github-actions-in-an-organization>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationRequest;
import org.openapis.openapi.models.operations.ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationRequestBody;
import org.openapis.openapi.models.operations.ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationRequest req = new ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationRequest(                new ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationRequestBody(                new Long[]{{
                                                add(435865L),
                                            }});, "doloribus");            

            ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationResponse res = sdk.actions.actionsSetSelectedRepositoriesEnabledGithubActionsOrganization(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## actionsSetSelfHostedRunnersInGroupForOrg

Replaces the list of self-hosted runners that are part of an organization runner group.
You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/actions#set-self-hosted-runners-in-a-group-for-an-organization>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActionsSetSelfHostedRunnersInGroupForOrgRequest;
import org.openapis.openapi.models.operations.ActionsSetSelfHostedRunnersInGroupForOrgRequestBody;
import org.openapis.openapi.models.operations.ActionsSetSelfHostedRunnersInGroupForOrgResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActionsSetSelfHostedRunnersInGroupForOrgRequest req = new ActionsSetSelfHostedRunnersInGroupForOrgRequest(                new ActionsSetSelfHostedRunnersInGroupForOrgRequestBody(                new Long[]{{
                                                add(260341L),
                                                add(806194L),
                                                add(537023L),
                                                add(703889L),
                                            }});, "in", 100226L);            

            ActionsSetSelfHostedRunnersInGroupForOrgResponse res = sdk.actions.actionsSetSelfHostedRunnersInGroupForOrg(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## actionsUpdateSelfHostedRunnerGroupForOrg

Updates the `name` and `visibility` of a self-hosted runner group in an organization.
You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/actions#update-a-self-hosted-runner-group-for-an-organization>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActionsUpdateSelfHostedRunnerGroupForOrgRequest;
import org.openapis.openapi.models.operations.ActionsUpdateSelfHostedRunnerGroupForOrgRequestBody;
import org.openapis.openapi.models.operations.ActionsUpdateSelfHostedRunnerGroupForOrgRequestBodyVisibilityEnum;
import org.openapis.openapi.models.operations.ActionsUpdateSelfHostedRunnerGroupForOrgResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActionsUpdateSelfHostedRunnerGroupForOrgRequest req = new ActionsUpdateSelfHostedRunnerGroupForOrgRequest(                new ActionsUpdateSelfHostedRunnerGroupForOrgRequestBody("architecto") {{
                                allowsPublicRepositories = false;
                                visibility = ActionsUpdateSelfHostedRunnerGroupForOrgRequestBodyVisibilityEnum.PRIVATE_;
                            }};, "ullam", 714242L);            

            ActionsUpdateSelfHostedRunnerGroupForOrgResponse res = sdk.actions.actionsUpdateSelfHostedRunnerGroupForOrg(req);

            if (res.runnerGroupsOrg != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
