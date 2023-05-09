# Git

## Overview

Raw Git functionality.

### Available Operations

* [GitCreateBlob](#gitcreateblob) - Create a blob
* [GitCreateCommit](#gitcreatecommit) - Create a commit
* [GitCreateRef](#gitcreateref) - Create a reference
* [GitCreateTag](#gitcreatetag) - Create a tag object
* [GitCreateTree](#gitcreatetree) - Create a tree
* [GitDeleteRef](#gitdeleteref) - Delete a reference
* [GitGetBlob](#gitgetblob) - Get a blob
* [GitGetCommit](#gitgetcommit) - Get a commit
* [GitGetRef](#gitgetref) - Get a reference
* [GitGetTag](#gitgettag) - Get a tag
* [GitGetTree](#gitgettree) - Get a tree
* [GitListMatchingRefs](#gitlistmatchingrefs) - List matching references
* [GitUpdateRef](#gitupdateref) - Update a reference

## GitCreateBlob

Create a blob

API method documentation
<https://docs.github.com/enterprise-server@3.1/rest/reference/git#create-a-blob>

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
    res, err := s.Git.GitCreateBlob(ctx, operations.GitCreateBlobRequest{
        RequestBody: operations.GitCreateBlobRequestBody{
            Content: "iste",
            Encoding: sdk.String("dolore"),
        },
        Owner: "laborum",
        Repo: "sed",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ShortBlob != nil {
        // handle response
    }
}
```

## GitCreateCommit

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
<https://docs.github.com/enterprise-server@3.1/rest/reference/git#create-a-commit>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Git.GitCreateCommit(ctx, operations.GitCreateCommitRequest{
        RequestBody: operations.GitCreateCommitRequestBody{
            Author: &operations.GitCreateCommitRequestBodyAuthor{
                Date: types.MustTimeFromString("2022-08-01T14:49:09.199Z"),
                Email: "Brendan.Hodkiewicz@hotmail.com",
                Name: "Dr. Dixie Tremblay V",
            },
            Committer: &operations.GitCreateCommitRequestBodyCommitter{
                Date: types.MustTimeFromString("2022-03-06T01:38:10.905Z"),
                Email: sdk.String("Laron.Gerlach40@gmail.com"),
                Name: sdk.String("Isaac Wolf"),
            },
            Message: "voluptate",
            Parents: []string{
                "ex",
                "sit",
                "non",
                "officiis",
            },
            Signature: sdk.String("praesentium"),
            Tree: "facilis",
        },
        Owner: "quaerat",
        Repo: "incidunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GitCommit != nil {
        // handle response
    }
}
```

## GitCreateRef

Creates a reference for your repository. You are unable to create new references for empty repositories, even if the commit SHA-1 hash used exists. Empty repositories are repositories without branches.

API method documentation
<https://docs.github.com/enterprise-server@3.1/rest/reference/git#create-a-reference>

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
    res, err := s.Git.GitCreateRef(ctx, operations.GitCreateRefRequest{
        RequestBody: operations.GitCreateRefRequestBody{
            Key: sdk.String(""refs/heads/newbranch""),
            Ref: "ipsam",
            Sha: "debitis",
        },
        Owner: "rem",
        Repo: "sit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GitRef != nil {
        // handle response
    }
}
```

## GitCreateTag

Note that creating a tag object does not create the reference that makes a tag in Git. If you want to create an annotated tag in Git, you have to do this call to create the tag object, and then [create](https://docs.github.com/enterprise-server@3.1/rest/reference/git#create-a-reference) the `refs/tags/[tag]` reference. If you want to create a lightweight tag, you only have to [create](https://docs.github.com/enterprise-server@3.1/rest/reference/git#create-a-reference) the tag reference - this call would be unnecessary.

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
<https://docs.github.com/enterprise-server@3.1/rest/reference/git#create-a-tag-object>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Git.GitCreateTag(ctx, operations.GitCreateTagRequest{
        RequestBody: operations.GitCreateTagRequestBody{
            Message: "nobis",
            Object: "error",
            Tag: "veniam",
            Tagger: &operations.GitCreateTagRequestBodyTagger{
                Date: types.MustTimeFromString("2022-01-28T16:22:09.125Z"),
                Email: "Saige90@hotmail.com",
                Name: "Lorraine King IV",
            },
            Type: operations.GitCreateTagRequestBodyTypeEnumTree,
        },
        Owner: "praesentium",
        Repo: "cum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GitTag != nil {
        // handle response
    }
}
```

## GitCreateTree

The tree creation API accepts nested entries. If you specify both a tree and a nested path modifying that tree, this endpoint will overwrite the contents of the tree with the new path contents, and create a new tree structure.

If you use this endpoint to add, delete, or modify the file contents in a tree, you will need to commit the tree and then update a branch to point to the commit. For more information see "[Create a commit](https://docs.github.com/enterprise-server@3.1/rest/reference/git#create-a-commit)" and "[Update a reference](https://docs.github.com/enterprise-server@3.1/rest/reference/git#update-a-reference)."

API method documentation
<https://docs.github.com/enterprise-server@3.1/rest/reference/git#create-a-tree>

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
    res, err := s.Git.GitCreateTree(ctx, operations.GitCreateTreeRequest{
        RequestBody: operations.GitCreateTreeRequestBody{
            BaseTree: sdk.String("laboriosam"),
            Tree: []GitCreateTreeRequestBodyTree{
                operations.GitCreateTreeRequestBodyTree{
                    Content: sdk.String("voluptatum"),
                    Mode: operations.GitCreateTreeRequestBodyTreeModeEnumOneHundredAndSixtyThousand.ToPointer(),
                    Path: sdk.String("hic"),
                    Sha: sdk.String("expedita"),
                    Type: operations.GitCreateTreeRequestBodyTreeTypeEnumCommit.ToPointer(),
                },
                operations.GitCreateTreeRequestBodyTree{
                    Content: sdk.String("neque"),
                    Mode: operations.GitCreateTreeRequestBodyTreeModeEnumOneHundredAndSixtyThousand.ToPointer(),
                    Path: sdk.String("nostrum"),
                    Sha: sdk.String("officia"),
                    Type: operations.GitCreateTreeRequestBodyTreeTypeEnumCommit.ToPointer(),
                },
                operations.GitCreateTreeRequestBodyTree{
                    Content: sdk.String("corrupti"),
                    Mode: operations.GitCreateTreeRequestBodyTreeModeEnumOneHundredAndTwentyThousand.ToPointer(),
                    Path: sdk.String("tempora"),
                    Sha: sdk.String("atque"),
                    Type: operations.GitCreateTreeRequestBodyTreeTypeEnumBlob.ToPointer(),
                },
            },
        },
        Owner: "ut",
        Repo: "fugiat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GitTree != nil {
        // handle response
    }
}
```

## GitDeleteRef

Delete a reference

API method documentation
<https://docs.github.com/enterprise-server@3.1/rest/reference/git#delete-a-reference>

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
    res, err := s.Git.GitDeleteRef(ctx, operations.GitDeleteRefRequest{
        Owner: "voluptatem",
        Ref: "culpa",
        Repo: "expedita",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GitGetBlob

The `content` in the response will always be Base64 encoded.

_Note_: This API supports blobs up to 100 megabytes in size.

API method documentation
<https://docs.github.com/enterprise-server@3.1/rest/reference/git#get-a-blob>

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
    res, err := s.Git.GitGetBlob(ctx, operations.GitGetBlobRequest{
        FileSha: "magnam",
        Owner: "consequatur",
        Repo: "esse",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Blob != nil {
        // handle response
    }
}
```

## GitGetCommit

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
<https://docs.github.com/enterprise-server@3.1/rest/reference/git#get-a-commit>

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
    res, err := s.Git.GitGetCommit(ctx, operations.GitGetCommitRequest{
        CommitSha: "ipsam",
        Owner: "sit",
        Repo: "voluptatum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GitCommit != nil {
        // handle response
    }
}
```

## GitGetRef

Returns a single reference from your Git database. The `:ref` in the URL must be formatted as `heads/<branch name>` for branches and `tags/<tag name>` for tags. If the `:ref` doesn't match an existing ref, a `404` is returned.

**Note:** You need to explicitly [request a pull request](https://docs.github.com/enterprise-server@3.1/rest/reference/pulls#get-a-pull-request) to trigger a test merge commit, which checks the mergeability of pull requests. For more information, see "[Checking mergeability of pull requests](https://docs.github.com/enterprise-server@3.1/rest/guides/getting-started-with-the-git-database-api#checking-mergeability-of-pull-requests)".

API method documentation
<https://docs.github.com/enterprise-server@3.1/rest/reference/git#get-a-reference>

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
    res, err := s.Git.GitGetRef(ctx, operations.GitGetRefRequest{
        Owner: "quas",
        Ref: "repudiandae",
        Repo: "corporis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GitRef != nil {
        // handle response
    }
}
```

## GitGetTag

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
<https://docs.github.com/enterprise-server@3.1/rest/reference/git#get-a-tag>

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
    res, err := s.Git.GitGetTag(ctx, operations.GitGetTagRequest{
        Owner: "et",
        Repo: "blanditiis",
        TagSha: "ex",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GitTag != nil {
        // handle response
    }
}
```

## GitGetTree

Returns a single tree using the SHA1 value for that tree.

If `truncated` is `true` in the response then the number of items in the `tree` array exceeded our maximum limit. If you need to fetch more items, use the non-recursive method of fetching trees, and fetch one sub-tree at a time.

API method documentation
<https://docs.github.com/enterprise-server@3.1/rest/reference/git#get-a-tree>

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
    res, err := s.Git.GitGetTree(ctx, operations.GitGetTreeRequest{
        Owner: "sed",
        Recursive: sdk.String("sit"),
        Repo: "vel",
        TreeSha: "nostrum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GitTree != nil {
        // handle response
    }
}
```

## GitListMatchingRefs

Returns an array of references from your Git database that match the supplied name. The `:ref` in the URL must be formatted as `heads/<branch name>` for branches and `tags/<tag name>` for tags. If the `:ref` doesn't exist in the repository, but existing refs start with `:ref`, they will be returned as an array.

When you use this endpoint without providing a `:ref`, it will return an array of all the references from your Git database, including notes and stashes if they exist on the server. Anything in the namespace is returned, not just `heads` and `tags`.

**Note:** You need to explicitly [request a pull request](https://docs.github.com/enterprise-server@3.1/rest/reference/pulls#get-a-pull-request) to trigger a test merge commit, which checks the mergeability of pull requests. For more information, see "[Checking mergeability of pull requests](https://docs.github.com/enterprise-server@3.1/rest/guides/getting-started-with-the-git-database-api#checking-mergeability-of-pull-requests)".

If you request matching references for a branch named `feature` but the branch `feature` doesn't exist, the response can still include other matching head refs that start with the word `feature`, such as `featureA` and `featureB`.

API method documentation
<https://docs.github.com/enterprise-server@3.1/rest/reference/git#list-matching-references>

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
    res, err := s.Git.GitListMatchingRefs(ctx, operations.GitListMatchingRefsRequest{
        Owner: "saepe",
        Page: sdk.Int64(622231),
        PerPage: sdk.Int64(8511),
        Ref: "incidunt",
        Repo: "reiciendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GitRefs != nil {
        // handle response
    }
}
```

## GitUpdateRef

Update a reference

API method documentation
<https://docs.github.com/enterprise-server@3.1/rest/reference/git#update-a-reference>

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
    res, err := s.Git.GitUpdateRef(ctx, operations.GitUpdateRefRequest{
        RequestBody: operations.GitUpdateRefRequestBody{
            Force: sdk.Bool(false),
            Sha: "dolorem",
        },
        Owner: "harum",
        Ref: "dicta",
        Repo: "architecto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GitRef != nil {
        // handle response
    }
}
```
