# DraftRegistrations

## Overview


A Draft Registration is a object that allows a user to edit and revise a registration before it is registered. Draft Registrations allow contributors to coordinate on a single registration, so they can upload files and change Registration metadata before the Registration is archived.

### Available Operations

* [DeleteDraftRegistrationsDraftID](#deletedraftregistrationsdraftid) - Delete a draft registration
* [DraftRegistrationContributorsCreate](#draftregistrationcontributorscreate) - Add a contributor to a Draft Registration
* [DraftRegistrationContributorsList](#draftregistrationcontributorslist) - Retreive a list Contributors from a Draft Registration
* [DraftRegistrationsCreate](#draftregistrationscreate) - Create a Draft Registration
* [DraftRegistrationsRead](#draftregistrationsread) - Retrieve a list of Draft Registrations
* [GetDraftRegistrationsDraftID](#getdraftregistrationsdraftid) - Retrieve a Draft Registration
* [GetDraftRegistrationsDraftIDContributorsUserID](#getdraftregistrationsdraftidcontributorsuserid) - Retreive a Contributor from a Draft Registration
* [GetDraftRegistrationsDraftIDInstitutions](#getdraftregistrationsdraftidinstitutions) - Retrieve Institutions afilliated with a Draft Registration
* [NodesDraftRegistrationsRead](#nodesdraftregistrationsread) - Retrieve a Draft Registration
* [NodesDraftRegistrationsSubjects](#nodesdraftregistrationssubjects) - Retrieve Subjects associated with a Draft Registration
* [PatchDraftRegistrationsDraftID](#patchdraftregistrationsdraftid) - Update a Draft Registration

## DeleteDraftRegistrationsDraftID

Permanently deletes a draft registration. A draft that has already been registered cannot be deleted.
#### Permissions
Only draft registration contributors with ADMIN permissions may delete draft registrations
#### Returns
If the request is successful, no content is returned.
If the request is unsuccessful, a JSON object with an `errors` key containing information about the failure will be returned. Refer to the [list of error codes]() to understand why this request may have failed.

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
    res, err := s.DraftRegistrations.DeleteDraftRegistrationsDraftID(ctx, operations.DeleteDraftRegistrationsDraftIDRequest{
        DraftID: "est",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DraftRegistrationContributorsCreate

Adds a contributor to a Draft Registration, contributors can view, edit, register or delete a Draft Registration depending on their permissions.
Contributors are categorized as either "bibliographic" or "non-bibliographic" contributors. From a permissions standpoint, both are the same, but bibliographic contributors are included in citations and are listed on the project overview page on the OSF, while non-bibliographic contributors are not.
#### Permissions
Only project administrators can add contributors to a Draft Registration.
#### Required
A relationship object with a `data` key, containing the `users` type and valid user ID is required.
All attributes describing the relationship between the node and the user are optional.
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
    res, err := s.DraftRegistrations.DraftRegistrationContributorsCreate(ctx, operations.DraftRegistrationContributorsCreateRequest{
        RequestBody: operations.DraftRegistrationContributorsCreateContributorInput{
            Attributes: &operations.DraftRegistrationContributorsCreateContributorAttributesInput{
                Bibliographic: sdk.Bool(false),
                Index: sdk.Int64(653140),
                Permission: operations.DraftRegistrationContributorsCreateContributorAttributesPermissionEnumAdmin.ToPointer(),
            },
            Relationships: operations.DraftRegistrationContributorsCreateContributorRelationshipsInput{
                User: "dolores",
            },
        },
        DraftID: "dolorem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DraftRegistrationContributorsList

Retrieves the details of all given Contributors for a Draft Registration.
Contributors are users who can make changes to the Draft Registration.
Contributors are categorized as either "bibliographic" or "non-bibliographic". From a permissions standpoint, both are the same, but bibliographic contributors are included in citations and are listed on the project overview page on the OSF, while non-bibliographic contributors are not.

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
    res, err := s.DraftRegistrations.DraftRegistrationContributorsList(ctx, operations.DraftRegistrationContributorsListRequest{
        DraftID: "corporis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DraftRegistrationsCreate

This creates a Draft Registration that can be used to edit and register research.
Draft Registrations contain Registration questions that will become part of the Registration. A Registration is a frozen version of the project that can never be deleted, but can be withdrawn and have it's metadata edited.
A Draft Registration created by this endpoint will not have a Project linked with it by default, but if the user includes a `branched_from` attribute in their Draft Registration creation payload with the value of the `branched_from` being guid of a Project they have permissions for the Draft Registration will be linked to the Project. If you linked your Draft Registration on a Project, your original Project remains editable and will now have the Draft Registration linked to it. 
#### Permissions
Any user can create a Draft Registration. If the `branched_from` attribute is provided, then the user must be an ADMIN contributor on the Project being registered.
#### Required
Required fields for creating a Draft Registration include:

&nbsp;&nbsp;&nbsp;&nbsp;`schema_id`
#### Returns
Returns a JSON object with a `data` key containing the representation of the created Draft Registration, if the request is successful.

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
    res, err := s.DraftRegistrations.DraftRegistrationsCreate(ctx, operations.DraftRegistrationsCreateDraftRegistrationInput{
        Attributes: operations.DraftRegistrationsCreateDraftRegistrationAttributesInput{
            Category: sdk.String("explicabo"),
            Description: sdk.String("nobis"),
            NodeLicense: &operations.DraftRegistrationsCreateDraftRegistrationAttributesNodeLicense{
                CopyrightHolders: []string{
                    "omnis",
                    "nemo",
                },
                Year: sdk.Int64(325047),
            },
            RegistrationMetadata: map[string]interface{}{
                "accusantium": "iure",
                "culpa": "doloribus",
                "sapiente": "architecto",
            },
            RegistrationResponses: map[string]interface{}{
                "dolorem": "culpa",
                "consequuntur": "repellat",
                "mollitia": "occaecati",
            },
            Tags: []string{
                "commodi",
                "quam",
            },
            Title: sdk.String("Ms."),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## DraftRegistrationsRead

Retrieve a list of all currently available Draft Registrations for that user.
#### Permissions
Only Draft Registration contributors may view draft registrations.
#### Returns
Returns a JSON object with a `data` key containing the representation of the requested draft registration, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

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
    res, err := s.DraftRegistrations.DraftRegistrationsRead(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetDraftRegistrationsDraftID

Retrieve the details of a given Draft Registration
Draft Registrations contain Registration questions that will become part of the Registration. A Registration is a frozen version of the project that can never be deleted, but can be withdrawn and have it's metadata edited.

If you based your Draft Registration on a Project, your original Project remains editable but will now have the Draft Registration linked to it.
#### Permissions
Only draft registration contributors may view draft registrations.
#### Returns
Returns a JSON object with a `data` key containing the representation of the requested draft registration, if the request is successful.

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
    res, err := s.DraftRegistrations.GetDraftRegistrationsDraftID(ctx, operations.GetDraftRegistrationsDraftIDRequest{
        DraftID: "velit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetDraftRegistrationsDraftIDContributorsUserID

Retrieves the details of a given contributor.

Contributors are users who can view or edit to the Draft Registrations.

Contributors are categorized as either "bibliographic" or "non-bibliographic". From a permissions standpoint, both are the same, but bibliographic contributors are included in citations and are listed on the project overview page on the OSF, while non-bibliographic contributors are not.

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
    res, err := s.DraftRegistrations.GetDraftRegistrationsDraftIDContributorsUserID(ctx, operations.GetDraftRegistrationsDraftIDContributorsUserIDRequest{
        DraftID: "error",
        UserID: "quia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetDraftRegistrationsDraftIDInstitutions

Once a properly authenticated user has marked their registration as affiliated with an institution, that institution and any others added will appear in this list.

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
    res, err := s.DraftRegistrations.GetDraftRegistrationsDraftIDInstitutions(ctx, operations.GetDraftRegistrationsDraftIDInstitutionsRequest{
        DraftID: "quis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## NodesDraftRegistrationsRead

Retrieve the details of a given draft registration.
Draft Registrations contain Registration questions that will become part of the Registration. A Registration is a frozen version of the project that can never be deleted, but can be withdrawn and have it's metadata edited.

Your original project remains editable but will now have the draft registration linked to it.
#### Permissions
Only project administrators may view draft registrations.
#### Returns
Returns a JSON object with a `data` key containing the representation of the requested draft registration, if the request is successful.

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
    res, err := s.DraftRegistrations.NodesDraftRegistrationsRead(ctx, operations.NodesDraftRegistrationsReadRequest{
        DraftID: "vitae",
        NodeID: "laborum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## NodesDraftRegistrationsSubjects

This retrieves a list of subjects associated with a Draft Registration. Subjects are formatted here in a flat paginated list, but are hierarchical and nested by specificity of subject matter.

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
    res, err := s.DraftRegistrations.NodesDraftRegistrationsSubjects(ctx, operations.NodesDraftRegistrationsSubjectsRequest{
        DraftID: "animi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## PatchDraftRegistrationsDraftID

Updates a Draft Registration by setting the values of the attributes specified in the request body. Any unspecified attributes will be left unchanged. Note this will not register or change the machine state of a Draft Registration, it can only edit the Draft Registration's attributes prior to its registration.
#### Permissions
Only draft registration contributors may view draft registrations and only draft registration contributors with WRITE or ADMIN permissions may update draft registrations.
#### Returns
Returns a JSON object with a `data` key containing the new representation of the updated draft registration, if the request is successful.
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
    res, err := s.DraftRegistrations.PatchDraftRegistrationsDraftID(ctx, operations.PatchDraftRegistrationsDraftIDRequest{
        RequestBody: map[string]interface{}{
            "odit": "quo",
            "sequi": "tenetur",
        },
        DraftID: "ipsam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
