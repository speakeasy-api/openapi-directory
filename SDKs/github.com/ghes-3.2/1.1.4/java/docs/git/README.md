# git

## Overview

Raw Git functionality.

### Available Operations

* [gitCreateBlob](#gitcreateblob) - Create a blob
* [gitCreateCommit](#gitcreatecommit) - Create a commit
* [gitCreateRef](#gitcreateref) - Create a reference
* [gitCreateTag](#gitcreatetag) - Create a tag object
* [gitCreateTree](#gitcreatetree) - Create a tree
* [gitDeleteRef](#gitdeleteref) - Delete a reference
* [gitGetBlob](#gitgetblob) - Get a blob
* [gitGetCommit](#gitgetcommit) - Get a commit
* [gitGetRef](#gitgetref) - Get a reference
* [gitGetTag](#gitgettag) - Get a tag
* [gitGetTree](#gitgettree) - Get a tree
* [gitListMatchingRefs](#gitlistmatchingrefs) - List matching references
* [gitUpdateRef](#gitupdateref) - Update a reference

## gitCreateBlob

Create a blob

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/git#create-a-blob>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GitCreateBlobRequest;
import org.openapis.openapi.models.operations.GitCreateBlobRequestBody;
import org.openapis.openapi.models.operations.GitCreateBlobResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GitCreateBlobRequest req = new GitCreateBlobRequest(                new GitCreateBlobRequestBody("totam") {{
                                encoding = "hic";
                            }};, "exercitationem", "nobis");            

            GitCreateBlobResponse res = sdk.git.gitCreateBlob(req);

            if (res.shortBlob != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gitCreateCommit

Creates a new Git [commit object](https://git-scm.com/book/en/v1/Git-Internals-Git-Objects#Commit-Objects).

**Signature verification object**

The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:

| Name | Type | Description |
| ---- | ---- | ----------- |
| `verified` | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified. |
| `reason` | `string` | The reason for verified value. Possible values and their meanings are enumerated in the table below. |
| `signature` | `string` | The signature that was extracted from the commit. |
| `payload` | `string` | The value that was signed. |

These are the possible values for `reason` in the `verification` object:

| Value | Description |
| ----- | ----------- |
| `expired_key` | The key that made the signature is expired. |
| `not_signing_key` | The "signing" flag is not among the usage flags in the GPG key that made the signature. |
| `gpgverify_error` | There was an error communicating with the signature verification service. |
| `gpgverify_unavailable` | The signature verification service is currently unavailable. |
| `unsigned` | The object does not include a signature. |
| `unknown_signature_type` | A non-PGP signature was found in the commit. |
| `no_user` | No user was associated with the `committer` email address in the commit. |
| `unverified_email` | The `committer` email address in the commit was associated with a user, but the email address is not verified on her/his account. |
| `bad_email` | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature. |
| `unknown_key` | The key that made the signature has not been registered with any user's account. |
| `malformed_signature` | There was an error parsing the signature. |
| `invalid` | The signature could not be cryptographically verified using the key whose key-id was found in the signature. |
| `valid` | None of the above errors applied, so the signature is considered to be verified. |

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/git#create-a-commit>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GitCreateCommitRequest;
import org.openapis.openapi.models.operations.GitCreateCommitRequestBody;
import org.openapis.openapi.models.operations.GitCreateCommitRequestBodyAuthor;
import org.openapis.openapi.models.operations.GitCreateCommitRequestBodyCommitter;
import org.openapis.openapi.models.operations.GitCreateCommitResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GitCreateCommitRequest req = new GitCreateCommitRequest(                new GitCreateCommitRequestBody("sit", "rerum") {{
                                author = new GitCreateCommitRequestBodyAuthor("sed", "reiciendis") {{
                                    date = OffsetDateTime.parse("2022-01-03T01:02:56.740Z");
                                }};;
                                committer = new GitCreateCommitRequestBodyCommitter() {{
                                    date = OffsetDateTime.parse("2022-02-05T04:05:02.351Z");
                                    email = "Antone67@hotmail.com";
                                    name = "Pearl Johnson";
                                }};;
                                parents = new String[]{{
                                    add("unde"),
                                    add("architecto"),
                                }};
                                signature = "suscipit";
                            }};, "sapiente", "debitis");            

            GitCreateCommitResponse res = sdk.git.gitCreateCommit(req);

            if (res.gitCommit != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gitCreateRef

Creates a reference for your repository. You are unable to create new references for empty repositories, even if the commit SHA-1 hash used exists. Empty repositories are repositories without branches.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/git#create-a-reference>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GitCreateRefRequest;
import org.openapis.openapi.models.operations.GitCreateRefRequestBody;
import org.openapis.openapi.models.operations.GitCreateRefResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GitCreateRefRequest req = new GitCreateRefRequest(                new GitCreateRefRequestBody("illo", "reiciendis") {{
                                key = ""refs/heads/newbranch"";
                            }};, "perferendis", "corrupti");            

            GitCreateRefResponse res = sdk.git.gitCreateRef(req);

            if (res.gitRef != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gitCreateTag

Note that creating a tag object does not create the reference that makes a tag in Git. If you want to create an annotated tag in Git, you have to do this call to create the tag object, and then [create](https://docs.github.com/enterprise-server@3.2/rest/reference/git#create-a-reference) the `refs/tags/[tag]` reference. If you want to create a lightweight tag, you only have to [create](https://docs.github.com/enterprise-server@3.2/rest/reference/git#create-a-reference) the tag reference - this call would be unnecessary.

**Signature verification object**

The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:

| Name | Type | Description |
| ---- | ---- | ----------- |
| `verified` | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified. |
| `reason` | `string` | The reason for verified value. Possible values and their meanings are enumerated in table below. |
| `signature` | `string` | The signature that was extracted from the commit. |
| `payload` | `string` | The value that was signed. |

These are the possible values for `reason` in the `verification` object:

| Value | Description |
| ----- | ----------- |
| `expired_key` | The key that made the signature is expired. |
| `not_signing_key` | The "signing" flag is not among the usage flags in the GPG key that made the signature. |
| `gpgverify_error` | There was an error communicating with the signature verification service. |
| `gpgverify_unavailable` | The signature verification service is currently unavailable. |
| `unsigned` | The object does not include a signature. |
| `unknown_signature_type` | A non-PGP signature was found in the commit. |
| `no_user` | No user was associated with the `committer` email address in the commit. |
| `unverified_email` | The `committer` email address in the commit was associated with a user, but the email address is not verified on her/his account. |
| `bad_email` | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature. |
| `unknown_key` | The key that made the signature has not been registered with any user's account. |
| `malformed_signature` | There was an error parsing the signature. |
| `invalid` | The signature could not be cryptographically verified using the key whose key-id was found in the signature. |
| `valid` | None of the above errors applied, so the signature is considered to be verified. |

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/git#create-a-tag-object>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GitCreateTagRequest;
import org.openapis.openapi.models.operations.GitCreateTagRequestBody;
import org.openapis.openapi.models.operations.GitCreateTagRequestBodyTagger;
import org.openapis.openapi.models.operations.GitCreateTagRequestBodyTypeEnum;
import org.openapis.openapi.models.operations.GitCreateTagResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GitCreateTagRequest req = new GitCreateTagRequest(                new GitCreateTagRequestBody("maiores", "incidunt", "sed", GitCreateTagRequestBodyTypeEnum.TREE) {{
                                tagger = new GitCreateTagRequestBodyTagger("eius", "necessitatibus") {{
                                    date = OffsetDateTime.parse("2022-08-05T13:00:56.741Z");
                                }};;
                            }};, "occaecati", "quos");            

            GitCreateTagResponse res = sdk.git.gitCreateTag(req);

            if (res.gitTag != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gitCreateTree

The tree creation API accepts nested entries. If you specify both a tree and a nested path modifying that tree, this endpoint will overwrite the contents of the tree with the new path contents, and create a new tree structure.

If you use this endpoint to add, delete, or modify the file contents in a tree, you will need to commit the tree and then update a branch to point to the commit. For more information see "[Create a commit](https://docs.github.com/enterprise-server@3.2/rest/reference/git#create-a-commit)" and "[Update a reference](https://docs.github.com/enterprise-server@3.2/rest/reference/git#update-a-reference)."

Returns an error if you try to delete a file that does not exist.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/git#create-a-tree>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GitCreateTreeRequest;
import org.openapis.openapi.models.operations.GitCreateTreeRequestBody;
import org.openapis.openapi.models.operations.GitCreateTreeRequestBodyTree;
import org.openapis.openapi.models.operations.GitCreateTreeRequestBodyTreeModeEnum;
import org.openapis.openapi.models.operations.GitCreateTreeRequestBodyTreeTypeEnum;
import org.openapis.openapi.models.operations.GitCreateTreeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GitCreateTreeRequest req = new GitCreateTreeRequest(                new GitCreateTreeRequestBody(                new org.openapis.openapi.models.operations.GitCreateTreeRequestBodyTree[]{{
                                                add(new GitCreateTreeRequestBodyTree() {{
                                                    content = "tempora";
                                                    mode = GitCreateTreeRequestBodyTreeModeEnum.ONE_HUNDRED_THOUSAND_SEVEN_HUNDRED_AND_FIFTY_FIVE;
                                                    path = "voluptate";
                                                    sha = "reiciendis";
                                                    type = GitCreateTreeRequestBodyTreeTypeEnum.TREE;
                                                }}),
                                                add(new GitCreateTreeRequestBodyTree() {{
                                                    content = "sit";
                                                    mode = GitCreateTreeRequestBodyTreeModeEnum.ONE_HUNDRED_THOUSAND_SEVEN_HUNDRED_AND_FIFTY_FIVE;
                                                    path = "officiis";
                                                    sha = "praesentium";
                                                    type = GitCreateTreeRequestBodyTreeTypeEnum.COMMIT;
                                                }}),
                                                add(new GitCreateTreeRequestBodyTree() {{
                                                    content = "quaerat";
                                                    mode = GitCreateTreeRequestBodyTreeModeEnum.ONE_HUNDRED_THOUSAND_SEVEN_HUNDRED_AND_FIFTY_FIVE;
                                                    path = "ipsam";
                                                    sha = "debitis";
                                                    type = GitCreateTreeRequestBodyTreeTypeEnum.TREE;
                                                }}),
                                                add(new GitCreateTreeRequestBodyTree() {{
                                                    content = "sit";
                                                    mode = GitCreateTreeRequestBodyTreeModeEnum.ONE_HUNDRED_AND_SIXTY_THOUSAND;
                                                    path = "error";
                                                    sha = "veniam";
                                                    type = GitCreateTreeRequestBodyTreeTypeEnum.BLOB;
                                                }}),
                                            }}) {{
                                baseTree = "recusandae";
                            }};, "reiciendis", "nulla");            

            GitCreateTreeResponse res = sdk.git.gitCreateTree(req);

            if (res.gitTree != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gitDeleteRef

Delete a reference

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/git#delete-a-reference>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GitDeleteRefRequest;
import org.openapis.openapi.models.operations.GitDeleteRefResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GitDeleteRefRequest req = new GitDeleteRefRequest("magni", "aperiam", "saepe");            

            GitDeleteRefResponse res = sdk.git.gitDeleteRef(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gitGetBlob

The `content` in the response will always be Base64 encoded.

_Note_: This API supports blobs up to 100 megabytes in size.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/git#get-a-blob>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GitGetBlobRequest;
import org.openapis.openapi.models.operations.GitGetBlobResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GitGetBlobRequest req = new GitGetBlobRequest("numquam", "veniam", "in");            

            GitGetBlobResponse res = sdk.git.gitGetBlob(req);

            if (res.blob != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gitGetCommit

Gets a Git [commit object](https://git-scm.com/book/en/v1/Git-Internals-Git-Objects#Commit-Objects).

**Signature verification object**

The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:

| Name | Type | Description |
| ---- | ---- | ----------- |
| `verified` | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified. |
| `reason` | `string` | The reason for verified value. Possible values and their meanings are enumerated in the table below. |
| `signature` | `string` | The signature that was extracted from the commit. |
| `payload` | `string` | The value that was signed. |

These are the possible values for `reason` in the `verification` object:

| Value | Description |
| ----- | ----------- |
| `expired_key` | The key that made the signature is expired. |
| `not_signing_key` | The "signing" flag is not among the usage flags in the GPG key that made the signature. |
| `gpgverify_error` | There was an error communicating with the signature verification service. |
| `gpgverify_unavailable` | The signature verification service is currently unavailable. |
| `unsigned` | The object does not include a signature. |
| `unknown_signature_type` | A non-PGP signature was found in the commit. |
| `no_user` | No user was associated with the `committer` email address in the commit. |
| `unverified_email` | The `committer` email address in the commit was associated with a user, but the email address is not verified on her/his account. |
| `bad_email` | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature. |
| `unknown_key` | The key that made the signature has not been registered with any user's account. |
| `malformed_signature` | There was an error parsing the signature. |
| `invalid` | The signature could not be cryptographically verified using the key whose key-id was found in the signature. |
| `valid` | None of the above errors applied, so the signature is considered to be verified. |

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/git#get-a-commit>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GitGetCommitRequest;
import org.openapis.openapi.models.operations.GitGetCommitResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GitGetCommitRequest req = new GitGetCommitRequest("officiis", "beatae", "laudantium");            

            GitGetCommitResponse res = sdk.git.gitGetCommit(req);

            if (res.gitCommit != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gitGetRef

Returns a single reference from your Git database. The `:ref` in the URL must be formatted as `heads/<branch name>` for branches and `tags/<tag name>` for tags. If the `:ref` doesn't match an existing ref, a `404` is returned.

**Note:** You need to explicitly [request a pull request](https://docs.github.com/enterprise-server@3.2/rest/reference/pulls#get-a-pull-request) to trigger a test merge commit, which checks the mergeability of pull requests. For more information, see "[Checking mergeability of pull requests](https://docs.github.com/enterprise-server@3.2/rest/guides/getting-started-with-the-git-database-api#checking-mergeability-of-pull-requests)".

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/git#get-a-reference>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GitGetRefRequest;
import org.openapis.openapi.models.operations.GitGetRefResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GitGetRefRequest req = new GitGetRefRequest("exercitationem", "praesentium", "cum");            

            GitGetRefResponse res = sdk.git.gitGetRef(req);

            if (res.gitRef != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gitGetTag

**Signature verification object**

The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:

| Name | Type | Description |
| ---- | ---- | ----------- |
| `verified` | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified. |
| `reason` | `string` | The reason for verified value. Possible values and their meanings are enumerated in table below. |
| `signature` | `string` | The signature that was extracted from the commit. |
| `payload` | `string` | The value that was signed. |

These are the possible values for `reason` in the `verification` object:

| Value | Description |
| ----- | ----------- |
| `expired_key` | The key that made the signature is expired. |
| `not_signing_key` | The "signing" flag is not among the usage flags in the GPG key that made the signature. |
| `gpgverify_error` | There was an error communicating with the signature verification service. |
| `gpgverify_unavailable` | The signature verification service is currently unavailable. |
| `unsigned` | The object does not include a signature. |
| `unknown_signature_type` | A non-PGP signature was found in the commit. |
| `no_user` | No user was associated with the `committer` email address in the commit. |
| `unverified_email` | The `committer` email address in the commit was associated with a user, but the email address is not verified on her/his account. |
| `bad_email` | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature. |
| `unknown_key` | The key that made the signature has not been registered with any user's account. |
| `malformed_signature` | There was an error parsing the signature. |
| `invalid` | The signature could not be cryptographically verified using the key whose key-id was found in the signature. |
| `valid` | None of the above errors applied, so the signature is considered to be verified. |

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/git#get-a-tag>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GitGetTagRequest;
import org.openapis.openapi.models.operations.GitGetTagResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GitGetTagRequest req = new GitGetTagRequest("laboriosam", "dolorum", "voluptatum");            

            GitGetTagResponse res = sdk.git.gitGetTag(req);

            if (res.gitTag != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gitGetTree

Returns a single tree using the SHA1 value for that tree.

If `truncated` is `true` in the response then the number of items in the `tree` array exceeded our maximum limit. If you need to fetch more items, use the non-recursive method of fetching trees, and fetch one sub-tree at a time.


**Note**: The limit for the `tree` array is 100,000 entries with a maximum size of 7 MB when using the `recursive` parameter.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/git#get-a-tree>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GitGetTreeRequest;
import org.openapis.openapi.models.operations.GitGetTreeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GitGetTreeRequest req = new GitGetTreeRequest("error", "hic", "expedita") {{
                recursive = "debitis";
            }};            

            GitGetTreeResponse res = sdk.git.gitGetTree(req);

            if (res.gitTree != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gitListMatchingRefs

Returns an array of references from your Git database that match the supplied name. The `:ref` in the URL must be formatted as `heads/<branch name>` for branches and `tags/<tag name>` for tags. If the `:ref` doesn't exist in the repository, but existing refs start with `:ref`, they will be returned as an array.

When you use this endpoint without providing a `:ref`, it will return an array of all the references from your Git database, including notes and stashes if they exist on the server. Anything in the namespace is returned, not just `heads` and `tags`.

**Note:** You need to explicitly [request a pull request](https://docs.github.com/enterprise-server@3.2/rest/reference/pulls#get-a-pull-request) to trigger a test merge commit, which checks the mergeability of pull requests. For more information, see "[Checking mergeability of pull requests](https://docs.github.com/enterprise-server@3.2/rest/guides/getting-started-with-the-git-database-api#checking-mergeability-of-pull-requests)".

If you request matching references for a branch named `feature` but the branch `feature` doesn't exist, the response can still include other matching head refs that start with the word `feature`, such as `featureA` and `featureB`.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/git#list-matching-references>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GitListMatchingRefsRequest;
import org.openapis.openapi.models.operations.GitListMatchingRefsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GitListMatchingRefsRequest req = new GitListMatchingRefsRequest("neque", "dolorum", "nostrum");            

            GitListMatchingRefsResponse res = sdk.git.gitListMatchingRefs(req);

            if (res.gitRefs != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gitUpdateRef

Update a reference

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/git#update-a-reference>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GitUpdateRefRequest;
import org.openapis.openapi.models.operations.GitUpdateRefRequestBody;
import org.openapis.openapi.models.operations.GitUpdateRefResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GitUpdateRefRequest req = new GitUpdateRefRequest(                new GitUpdateRefRequestBody("officia") {{
                                force = false;
                            }};, "dolorum", "corrupti", "accusamus");            

            GitUpdateRefResponse res = sdk.git.gitUpdateRef(req);

            if (res.gitRef != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
