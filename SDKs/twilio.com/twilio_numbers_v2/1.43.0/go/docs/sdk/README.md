# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [CreateBundle](#createbundle) - Create a new Bundle.
* [CreateBundleCopy](#createbundlecopy) - Creates a new copy of a Bundle. It will internally create copies of all the bundle items (identities and documents) of the original bundle
* [CreateEndUser](#createenduser) - Create a new End User.
* [CreateEvaluation](#createevaluation) - Creates an evaluation for a bundle
* [CreateItemAssignment](#createitemassignment) - Create a new Assigned Item.
* [CreateReplaceItems](#createreplaceitems) - Replaces all bundle items in the target bundle (specified in the path) with all the bundle items of the source bundle (specified by the from_bundle_sid body param)
* [CreateSupportingDocument](#createsupportingdocument) - Create a new Supporting Document.
* [DeleteBundle](#deletebundle) - Delete a specific Bundle.
* [DeleteEndUser](#deleteenduser) - Delete a specific End User.
* [DeleteItemAssignment](#deleteitemassignment) - Remove an Assignment Item Instance.
* [DeleteSupportingDocument](#deletesupportingdocument) - Delete a specific Supporting Document.
* [FetchBundle](#fetchbundle) - Fetch a specific Bundle instance.
* [FetchEndUser](#fetchenduser) - Fetch specific End User Instance.
* [FetchEndUserType](#fetchendusertype) - Fetch a specific End-User Type Instance.
* [FetchEvaluation](#fetchevaluation) - Fetch specific Evaluation Instance.
* [FetchItemAssignment](#fetchitemassignment) - Fetch specific Assigned Item Instance.
* [FetchRegulation](#fetchregulation) - Fetch specific Regulation Instance.
* [FetchSupportingDocument](#fetchsupportingdocument) - Fetch specific Supporting Document Instance.
* [FetchSupportingDocumentType](#fetchsupportingdocumenttype) - Fetch a specific Supporting Document Type Instance.
* [ListBundle](#listbundle) - Retrieve a list of all Bundles for an account.
* [ListBundleCopy](#listbundlecopy) - Retrieve a list of all Bundles Copies for a Bundle.
* [ListEndUser](#listenduser) - Retrieve a list of all End User for an account.
* [ListEndUserType](#listendusertype) - Retrieve a list of all End-User Types.
* [ListEvaluation](#listevaluation) - Retrieve a list of Evaluations associated to the Bundle resource.
* [ListItemAssignment](#listitemassignment) - Retrieve a list of all Assigned Items for an account.
* [ListRegulation](#listregulation) - Retrieve a list of all Regulations.
* [ListSupportingDocument](#listsupportingdocument) - Retrieve a list of all Supporting Document for an account.
* [ListSupportingDocumentType](#listsupportingdocumenttype) - Retrieve a list of all Supporting Document Types.
* [UpdateBundle](#updatebundle) - Updates a Bundle in an account.
* [UpdateEndUser](#updateenduser) - Update an existing End User.
* [UpdateSupportingDocument](#updatesupportingdocument) - Update an existing Supporting Document.

## CreateBundle

Create a new Bundle.

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
    res, err := s.SDK.CreateBundle(ctx, operations.CreateBundleCreateBundleRequest{
        Email: "Vincenzo.Goldner@gmail.com",
        EndUserType: shared.BundleEnumEndUserTypeEnumBusiness.ToPointer(),
        FriendlyName: "placeat",
        IsoCountry: sdk.String("voluptatum"),
        NumberType: sdk.String("iusto"),
        RegulationSid: sdk.String("excepturi"),
        StatusCallback: sdk.String("http://velvety-spiderling.com"),
    }, operations.CreateBundleSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NumbersV2RegulatoryComplianceBundle != nil {
        // handle response
    }
}
```

## CreateBundleCopy

Creates a new copy of a Bundle. It will internally create copies of all the bundle items (identities and documents) of the original bundle

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
    res, err := s.SDK.CreateBundleCopy(ctx, operations.CreateBundleCopyRequest{
        BundleSid: "quis",
        RequestBody: &operations.CreateBundleCopyCreateBundleCopyRequest{
            FriendlyName: sdk.String("veritatis"),
        },
    }, operations.CreateBundleCopySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NumbersV2RegulatoryComplianceBundleBundleCopy != nil {
        // handle response
    }
}
```

## CreateEndUser

Create a new End User.

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
    res, err := s.SDK.CreateEndUser(ctx, operations.CreateEndUserCreateEndUserRequest{
        Attributes: sdk.String("deserunt"),
        FriendlyName: "perferendis",
        Type: shared.EndUserEnumTypeEnumIndividual,
    }, operations.CreateEndUserSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NumbersV2RegulatoryComplianceEndUser != nil {
        // handle response
    }
}
```

## CreateEvaluation

Creates an evaluation for a bundle

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
    res, err := s.SDK.CreateEvaluation(ctx, operations.CreateEvaluationRequest{
        BundleSid: "repellendus",
    }, operations.CreateEvaluationSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NumbersV2RegulatoryComplianceBundleEvaluation != nil {
        // handle response
    }
}
```

## CreateItemAssignment

Create a new Assigned Item.

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
    res, err := s.SDK.CreateItemAssignment(ctx, operations.CreateItemAssignmentRequest{
        BundleSid: "sapiente",
        RequestBody: &operations.CreateItemAssignmentCreateItemAssignmentRequest{
            ObjectSid: "quo",
        },
    }, operations.CreateItemAssignmentSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NumbersV2RegulatoryComplianceBundleItemAssignment != nil {
        // handle response
    }
}
```

## CreateReplaceItems

Replaces all bundle items in the target bundle (specified in the path) with all the bundle items of the source bundle (specified by the from_bundle_sid body param)

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
    res, err := s.SDK.CreateReplaceItems(ctx, operations.CreateReplaceItemsRequest{
        BundleSid: "odit",
        RequestBody: &operations.CreateReplaceItemsCreateReplaceItemsRequest{
            FromBundleSid: "at",
        },
    }, operations.CreateReplaceItemsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NumbersV2RegulatoryComplianceBundleReplaceItems != nil {
        // handle response
    }
}
```

## CreateSupportingDocument

Create a new Supporting Document.

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
    res, err := s.SDK.CreateSupportingDocument(ctx, operations.CreateSupportingDocumentCreateSupportingDocumentRequest{
        Attributes: sdk.String("at"),
        FriendlyName: "maiores",
        Type: "molestiae",
    }, operations.CreateSupportingDocumentSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NumbersV2RegulatoryComplianceSupportingDocument != nil {
        // handle response
    }
}
```

## DeleteBundle

Delete a specific Bundle.

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
    res, err := s.SDK.DeleteBundle(ctx, operations.DeleteBundleRequest{
        Sid: "quod",
    }, operations.DeleteBundleSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteEndUser

Delete a specific End User.

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
    res, err := s.SDK.DeleteEndUser(ctx, operations.DeleteEndUserRequest{
        Sid: "quod",
    }, operations.DeleteEndUserSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteItemAssignment

Remove an Assignment Item Instance.

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
    res, err := s.SDK.DeleteItemAssignment(ctx, operations.DeleteItemAssignmentRequest{
        BundleSid: "esse",
        Sid: "totam",
    }, operations.DeleteItemAssignmentSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteSupportingDocument

Delete a specific Supporting Document.

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
    res, err := s.SDK.DeleteSupportingDocument(ctx, operations.DeleteSupportingDocumentRequest{
        Sid: "porro",
    }, operations.DeleteSupportingDocumentSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## FetchBundle

Fetch a specific Bundle instance.

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
    res, err := s.SDK.FetchBundle(ctx, operations.FetchBundleRequest{
        Sid: "dolorum",
    }, operations.FetchBundleSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NumbersV2RegulatoryComplianceBundle != nil {
        // handle response
    }
}
```

## FetchEndUser

Fetch specific End User Instance.

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
    res, err := s.SDK.FetchEndUser(ctx, operations.FetchEndUserRequest{
        Sid: "dicta",
    }, operations.FetchEndUserSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NumbersV2RegulatoryComplianceEndUser != nil {
        // handle response
    }
}
```

## FetchEndUserType

Fetch a specific End-User Type Instance.

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
    res, err := s.SDK.FetchEndUserType(ctx, operations.FetchEndUserTypeRequest{
        Sid: "nam",
    }, operations.FetchEndUserTypeSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NumbersV2RegulatoryComplianceEndUserType != nil {
        // handle response
    }
}
```

## FetchEvaluation

Fetch specific Evaluation Instance.

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
    res, err := s.SDK.FetchEvaluation(ctx, operations.FetchEvaluationRequest{
        BundleSid: "officia",
        Sid: "occaecati",
    }, operations.FetchEvaluationSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NumbersV2RegulatoryComplianceBundleEvaluation != nil {
        // handle response
    }
}
```

## FetchItemAssignment

Fetch specific Assigned Item Instance.

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
    res, err := s.SDK.FetchItemAssignment(ctx, operations.FetchItemAssignmentRequest{
        BundleSid: "fugit",
        Sid: "deleniti",
    }, operations.FetchItemAssignmentSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NumbersV2RegulatoryComplianceBundleItemAssignment != nil {
        // handle response
    }
}
```

## FetchRegulation

Fetch specific Regulation Instance.

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
    res, err := s.SDK.FetchRegulation(ctx, operations.FetchRegulationRequest{
        Sid: "hic",
    }, operations.FetchRegulationSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NumbersV2RegulatoryComplianceRegulation != nil {
        // handle response
    }
}
```

## FetchSupportingDocument

Fetch specific Supporting Document Instance.

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
    res, err := s.SDK.FetchSupportingDocument(ctx, operations.FetchSupportingDocumentRequest{
        Sid: "optio",
    }, operations.FetchSupportingDocumentSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NumbersV2RegulatoryComplianceSupportingDocument != nil {
        // handle response
    }
}
```

## FetchSupportingDocumentType

Fetch a specific Supporting Document Type Instance.

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
    res, err := s.SDK.FetchSupportingDocumentType(ctx, operations.FetchSupportingDocumentTypeRequest{
        Sid: "totam",
    }, operations.FetchSupportingDocumentTypeSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NumbersV2RegulatoryComplianceSupportingDocumentType != nil {
        // handle response
    }
}
```

## ListBundle

Retrieve a list of all Bundles for an account.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.ListBundle(ctx, operations.ListBundleRequest{
        FriendlyName: sdk.String("beatae"),
        HasValidUntilDate: sdk.Bool(false),
        IsoCountry: sdk.String("commodi"),
        NumberType: sdk.String("molestiae"),
        Page: sdk.Int64(264555),
        PageSize: sdk.Int64(186332),
        PageToken: sdk.String("impedit"),
        RegulationSid: sdk.String("cum"),
        SortBy: shared.BundleEnumSortByEnumValidUntil.ToPointer(),
        SortDirection: shared.BundleEnumSortDirectionEnumAsc.ToPointer(),
        Status: shared.BundleEnumStatusEnumTwilioRejected.ToPointer(),
        ValidUntilDate: types.MustTimeFromString("2022-12-25T03:24:03.949Z"),
        ValidUntilDateLessThan: types.MustTimeFromString("2022-05-20T13:30:46.463Z"),
        ValidUntilDateGreaterThan: types.MustTimeFromString("2022-05-22T14:02:28.908Z"),
    }, operations.ListBundleSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListBundleResponse != nil {
        // handle response
    }
}
```

## ListBundleCopy

Retrieve a list of all Bundles Copies for a Bundle.

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
    res, err := s.SDK.ListBundleCopy(ctx, operations.ListBundleCopyRequest{
        BundleSid: "dolor",
        Page: sdk.Int64(616934),
        PageSize: sdk.Int64(386489),
        PageToken: sdk.String("hic"),
    }, operations.ListBundleCopySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListBundleCopyResponse != nil {
        // handle response
    }
}
```

## ListEndUser

Retrieve a list of all End User for an account.

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
    res, err := s.SDK.ListEndUser(ctx, operations.ListEndUserRequest{
        Page: sdk.Int64(902599),
        PageSize: sdk.Int64(681820),
        PageToken: sdk.String("in"),
    }, operations.ListEndUserSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListEndUserResponse != nil {
        // handle response
    }
}
```

## ListEndUserType

Retrieve a list of all End-User Types.

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
    res, err := s.SDK.ListEndUserType(ctx, operations.ListEndUserTypeRequest{
        Page: sdk.Int64(359508),
        PageSize: sdk.Int64(613064),
        PageToken: sdk.String("iure"),
    }, operations.ListEndUserTypeSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListEndUserTypeResponse != nil {
        // handle response
    }
}
```

## ListEvaluation

Retrieve a list of Evaluations associated to the Bundle resource.

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
    res, err := s.SDK.ListEvaluation(ctx, operations.ListEvaluationRequest{
        BundleSid: "saepe",
        Page: sdk.Int64(697631),
        PageSize: sdk.Int64(99280),
        PageToken: sdk.String("ipsa"),
    }, operations.ListEvaluationSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListEvaluationResponse != nil {
        // handle response
    }
}
```

## ListItemAssignment

Retrieve a list of all Assigned Items for an account.

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
    res, err := s.SDK.ListItemAssignment(ctx, operations.ListItemAssignmentRequest{
        BundleSid: "reiciendis",
        Page: sdk.Int64(666767),
        PageSize: sdk.Int64(653140),
        PageToken: sdk.String("laborum"),
    }, operations.ListItemAssignmentSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListItemAssignmentResponse != nil {
        // handle response
    }
}
```

## ListRegulation

Retrieve a list of all Regulations.

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
    res, err := s.SDK.ListRegulation(ctx, operations.ListRegulationRequest{
        EndUserType: shared.RegulationEnumEndUserTypeEnumIndividual.ToPointer(),
        IsoCountry: sdk.String("dolorem"),
        NumberType: sdk.String("corporis"),
        Page: sdk.Int64(128926),
        PageSize: sdk.Int64(750686),
        PageToken: sdk.String("enim"),
    }, operations.ListRegulationSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListRegulationResponse != nil {
        // handle response
    }
}
```

## ListSupportingDocument

Retrieve a list of all Supporting Document for an account.

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
    res, err := s.SDK.ListSupportingDocument(ctx, operations.ListSupportingDocumentRequest{
        Page: sdk.Int64(607831),
        PageSize: sdk.Int64(363711),
        PageToken: sdk.String("minima"),
    }, operations.ListSupportingDocumentSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSupportingDocumentResponse != nil {
        // handle response
    }
}
```

## ListSupportingDocumentType

Retrieve a list of all Supporting Document Types.

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
    res, err := s.SDK.ListSupportingDocumentType(ctx, operations.ListSupportingDocumentTypeRequest{
        Page: sdk.Int64(570197),
        PageSize: sdk.Int64(38425),
        PageToken: sdk.String("iure"),
    }, operations.ListSupportingDocumentTypeSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSupportingDocumentTypeResponse != nil {
        // handle response
    }
}
```

## UpdateBundle

Updates a Bundle in an account.

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
    res, err := s.SDK.UpdateBundle(ctx, operations.UpdateBundleRequest{
        RequestBody: &operations.UpdateBundleUpdateBundleRequest{
            Email: sdk.String("Yasmeen65@yahoo.com"),
            FriendlyName: sdk.String("dolorem"),
            Status: shared.BundleEnumStatusEnumTwilioRejected.ToPointer(),
            StatusCallback: sdk.String("http://young-pew.name"),
        },
        Sid: "numquam",
    }, operations.UpdateBundleSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NumbersV2RegulatoryComplianceBundle != nil {
        // handle response
    }
}
```

## UpdateEndUser

Update an existing End User.

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
    res, err := s.SDK.UpdateEndUser(ctx, operations.UpdateEndUserRequest{
        RequestBody: &operations.UpdateEndUserUpdateEndUserRequest{
            Attributes: sdk.String("commodi"),
            FriendlyName: sdk.String("quam"),
        },
        Sid: "molestiae",
    }, operations.UpdateEndUserSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NumbersV2RegulatoryComplianceEndUser != nil {
        // handle response
    }
}
```

## UpdateSupportingDocument

Update an existing Supporting Document.

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
    res, err := s.SDK.UpdateSupportingDocument(ctx, operations.UpdateSupportingDocumentRequest{
        RequestBody: &operations.UpdateSupportingDocumentUpdateSupportingDocumentRequest{
            Attributes: sdk.String("velit"),
            FriendlyName: sdk.String("error"),
        },
        Sid: "quia",
    }, operations.UpdateSupportingDocumentSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NumbersV2RegulatoryComplianceSupportingDocument != nil {
        // handle response
    }
}
```
