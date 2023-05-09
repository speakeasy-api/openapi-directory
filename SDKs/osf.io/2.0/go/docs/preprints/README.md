# Preprints

### Available Operations

* [PreprintsBibliographicContributorsList](#preprintsbibliographiccontributorslist) - List all Bibliographic Contributors
* [PreprintsCitationList](#preprintscitationlist) - Retrieve citation details
* [PreprintsCitationRead](#preprintscitationread) - Retrieve a styled citation
* [PreprintsContributorRead](#preprintscontributorread) - Retrieve a contributor
* [PreprintsContributorsCreate](#preprintscontributorscreate) - Create a Contributor
* [PreprintsContributorsList](#preprintscontributorslist) - List all Contributors for a Preprint
* [PreprintsCreate](#preprintscreate) - Create a preprint
* [PreprintsList](#preprintslist) - List all preprints
* [PreprintsPartialUpdate](#preprintspartialupdate) - Update a preprint
* [PreprintsRead](#preprintsread) - Retrieve a preprint

## PreprintsBibliographicContributorsList

A paginated list of the Preprint's Bibliographic Contributors, sorted by their index.
Contributors are users who can make changes to the Preprint. Contributors with WRITE permissions may edit preprint details, and ADMIN Contributors may add or remove other Contributors.

Contributors are categorized as either "bibliographic" or "non-bibliographic". From a permissions standpoint, both are the same, but bibliographic contributors are included in citations and are listed on the project overview page on the OSF, while non-bibliographic contributors are not.

Note that if an anonymous view_only key is being used to view the list of contributors, the user relationship will not be exposed and the contributor ID will be an empty string.

#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of 10 contributors. Each resource in the array contains the full representation of the contributor, meaning additional requests to a contributor's detail view are not necessary. Additionally, the full representation of the user this contributor represents is automatically embedded within the `data` key of the response.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
#### Filtering
You can optionally request that the response only include contributors that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/preprints/y9jdt/contributors/?filter[bibliographic]=true.

Contributors may be filtered by their `bibliographic` and `permission` attributes.

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
    res, err := s.Preprints.PreprintsBibliographicContributorsList(ctx, operations.PreprintsBibliographicContributorsListRequest{
        PreprintID: "nihil",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## PreprintsCitationList

The citation details for a preprint, in CSL format.
#### Returns
Returns a JSON object with a `data` key that contains the representation of the details necessary for the preprint citation.

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
    res, err := s.Preprints.PreprintsCitationList(ctx, operations.PreprintsCitationListRequest{
        PreprintID: "repellat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## PreprintsCitationRead

The citation for a preprint in a specific style.
#### Returns
Returns a JSON object with a `data` key that contains the representation of the preprint citation, in the requested style.

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
    res, err := s.Preprints.PreprintsCitationRead(ctx, operations.PreprintsCitationReadRequest{
        PreprintID: "quibusdam",
        StyleID: "sed",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## PreprintsContributorRead

Retrieves the details of a contributor on this Preprint.
Contributors are categorized as either "bibliographic" or "non-bibliographic". From a permissions standpoint, both are the same, but bibliographic contributors are included in citations and are listed on the project overview page on the OSF, while non-bibliographic contributors are not.

Note that if an anonymous view_only key is being used to view the list of contributors, the user relationship will not be exposed and the contributor ID will be an empty string.
#### Returns
Returns a JSON object with a `data` key containing the representation of the requested contributor, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

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
    res, err := s.Preprints.PreprintsContributorRead(ctx, operations.PreprintsContributorReadRequest{
        PreprintID: "saepe",
        UserID: "pariatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PreprintsContributorsCreate

Adds a contributor to a Preprint, effectively creating a relationship between the Preprint and a user.

Contributors are users who can make changes to the Preprint. Contributors with WRITE permissions may edit preprint details, and ADMIN Contributors may add or remove other Contributors.

Contributors are categorized as either "bibliographic" or "non-bibliographic" contributors. From a permissions standpoint, both are the same, but bibliographic contributors are included in citations and are listed on the project overview page on the OSF, while non-bibliographic contributors are not.
#### Permissions
Only project administrators can add contributors to a Preprint.
#### Required
A relationship object with a `data` key, containing the `users` type and valid user ID is required.

All attributes describing the relationship between the Preprint and the user are optional.
#### Returns
Returns a JSON object with a `data` key containing the representation of the new contributor, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

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
    res, err := s.Preprints.PreprintsContributorsCreate(ctx, operations.PreprintsContributorsCreateRequest{
        RequestBody: operations.PreprintsContributorsCreateContributorInput{
            Attributes: &operations.PreprintsContributorsCreateContributorAttributesInput{
                Bibliographic: sdk.Bool(false),
                Index: sdk.Int64(37559),
                Permission: operations.PreprintsContributorsCreateContributorAttributesPermissionEnumRead.ToPointer(),
            },
        },
        PreprintID: "praesentium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PreprintsContributorsList

A paginated list of the Preprint's Contributors, sorted by their index.

Contributors are users who can make changes to the Preprint. Contributors with WRITE permissions may edit preprint details, and ADMIN Contributors may add or remove other Contributors.

Contributors are categorized as either "bibliographic" or "non-bibliographic". From a permissions standpoint, both are the same, but bibliographic contributors are included in citations and are listed on the project overview page on the OSF, while non-bibliographic contributors are not.

Note that if an anonymous view_only key is being used to view the list of Contributors, the user relationship will not be exposed and the Contributor ID will be an empty string.

#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of 10 contributors. Each resource in the array contains the full representation of the contributor, meaning additional requests to a contributor's detail view are not necessary. Additionally, the full representation of the user this contributor represents is automatically embedded within the `data` key of the response.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
#### Filtering
You can optionally request that the response only include contributors that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/preprints/y9jdt/contributors/?filter[bibliographic]=true.

Contributors may be filtered by their `bibliographic` and `permission` attributes.

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
    res, err := s.Preprints.PreprintsContributorsList(ctx, operations.PreprintsContributorsListRequest{
        PreprintID: "natus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## PreprintsCreate

Creates a new preprint.
#### Returns
Returns a JSON object with a `data` key containing the representation of the created preprint, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes]() to understand why this request may have failed.

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
    res, err := s.Preprints.PreprintsCreate(ctx, operations.PreprintsCreatePreprintInput{
        Attributes: &operations.PreprintsCreatePreprintAttributesInput{
            Doi: sdk.String("magni"),
            LicenseRecord: sdk.String("sunt"),
            Subjects: []string{
                "illum",
                "pariatur",
                "maxime",
                "ea",
            },
        },
        Relationships: operations.PreprintsCreatePreprintRelationshipsInput{
            BibliographicContributors: sdk.String("excepturi"),
            License: sdk.String("odit"),
            Node: "ea",
            PrimaryFile: "accusantium",
            Provider: "ab",
        },
        Type: "maiores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PreprintsList


A paginated list of preprints from all preprint providers. The returned preprints are sorted by their creation date, with the most recent preprints appearing first.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of 10 preprints. Each resource in the array is a separate preprint object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

This request should never return an error.
#### Filtering
You can optionally request that the response only include preprints that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/preprints/?filter[provider]=socarxiv.

Preprints may be filtered by their `id`, `is_published`, `date_created`, `date_modified`, and `provider`.

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
    res, err := s.Preprints.PreprintsList(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## PreprintsPartialUpdate

Updates the specified preprint by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
#### Returns
Returns a JSON object with a `data` key containing the new representation of the updated preprint, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes]() to understand why this request may have failed.

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
    res, err := s.Preprints.PreprintsPartialUpdate(ctx, operations.PreprintsPartialUpdateRequest{
        RequestBody: map[string]interface{}{
            "ipsam": "voluptate",
            "autem": "nam",
            "eaque": "pariatur",
        },
        PreprintID: "nemo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PreprintsRead

Retrieves the details of a preprint.
#### Returns
Returns a JSON object with a `data` key containing the representation of the requested preprint, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

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
    res, err := s.Preprints.PreprintsRead(ctx, operations.PreprintsReadRequest{
        PreprintID: "voluptatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
