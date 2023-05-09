# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [CreateCustomerProfile](#createcustomerprofile) - Create a new Customer-Profile.
* [CreateCustomerProfileChannelEndpointAssignment](#createcustomerprofilechannelendpointassignment) - Create a new Assigned Item.
* [CreateCustomerProfileEntityAssignment](#createcustomerprofileentityassignment) - Create a new Assigned Item.
* [CreateCustomerProfileEvaluation](#createcustomerprofileevaluation) - Create a new Evaluation
* [CreateEndUser](#createenduser) - Create a new End User.
* [CreateSupportingDocument](#createsupportingdocument) - Create a new Supporting Document.
* [CreateTrustProduct](#createtrustproduct) - Create a new Customer-Profile.
* [CreateTrustProductChannelEndpointAssignment](#createtrustproductchannelendpointassignment) - Create a new Assigned Item.
* [CreateTrustProductEntityAssignment](#createtrustproductentityassignment) - Create a new Assigned Item.
* [CreateTrustProductEvaluation](#createtrustproductevaluation) - Create a new Evaluation
* [DeleteCustomerProfile](#deletecustomerprofile) - Delete a specific Customer-Profile.
* [DeleteCustomerProfileChannelEndpointAssignment](#deletecustomerprofilechannelendpointassignment) - Remove an Assignment Item Instance.
* [DeleteCustomerProfileEntityAssignment](#deletecustomerprofileentityassignment) - Remove an Assignment Item Instance.
* [DeleteEndUser](#deleteenduser) - Delete a specific End User.
* [DeleteSupportingDocument](#deletesupportingdocument) - Delete a specific Supporting Document.
* [DeleteTrustProduct](#deletetrustproduct) - Delete a specific Customer-Profile.
* [DeleteTrustProductChannelEndpointAssignment](#deletetrustproductchannelendpointassignment) - Remove an Assignment Item Instance.
* [DeleteTrustProductEntityAssignment](#deletetrustproductentityassignment) - Remove an Assignment Item Instance.
* [FetchCustomerProfile](#fetchcustomerprofile) - Fetch a specific Customer-Profile instance.
* [FetchCustomerProfileChannelEndpointAssignment](#fetchcustomerprofilechannelendpointassignment) - Fetch specific Assigned Item Instance.
* [FetchCustomerProfileEntityAssignment](#fetchcustomerprofileentityassignment) - Fetch specific Assigned Item Instance.
* [FetchCustomerProfileEvaluation](#fetchcustomerprofileevaluation) - Fetch specific Evaluation Instance.
* [FetchEndUser](#fetchenduser) - Fetch specific End User Instance.
* [FetchEndUserType](#fetchendusertype) - Fetch a specific End-User Type Instance.
* [FetchPolicies](#fetchpolicies) - Fetch specific Policy Instance.
* [FetchSupportingDocument](#fetchsupportingdocument) - Fetch specific Supporting Document Instance.
* [FetchSupportingDocumentType](#fetchsupportingdocumenttype) - Fetch a specific Supporting Document Type Instance.
* [FetchTrustProduct](#fetchtrustproduct) - Fetch a specific Customer-Profile instance.
* [FetchTrustProductChannelEndpointAssignment](#fetchtrustproductchannelendpointassignment) - Fetch specific Assigned Item Instance.
* [FetchTrustProductEntityAssignment](#fetchtrustproductentityassignment) - Fetch specific Assigned Item Instance.
* [FetchTrustProductEvaluation](#fetchtrustproductevaluation) - Fetch specific Evaluation Instance.
* [ListCustomerProfile](#listcustomerprofile) - Retrieve a list of all Customer-Profiles for an account.
* [ListCustomerProfileChannelEndpointAssignment](#listcustomerprofilechannelendpointassignment) - Retrieve a list of all Assigned Items for an account.
* [ListCustomerProfileEntityAssignment](#listcustomerprofileentityassignment) - Retrieve a list of all Assigned Items for an account.
* [ListCustomerProfileEvaluation](#listcustomerprofileevaluation) - Retrieve a list of Evaluations associated to the customer_profile resource.
* [ListEndUser](#listenduser) - Retrieve a list of all End User for an account.
* [ListEndUserType](#listendusertype) - Retrieve a list of all End-User Types.
* [ListPolicies](#listpolicies) - Retrieve a list of all Policys.
* [ListSupportingDocument](#listsupportingdocument) - Retrieve a list of all Supporting Document for an account.
* [ListSupportingDocumentType](#listsupportingdocumenttype) - Retrieve a list of all Supporting Document Types.
* [ListTrustProduct](#listtrustproduct) - Retrieve a list of all Customer-Profiles for an account.
* [ListTrustProductChannelEndpointAssignment](#listtrustproductchannelendpointassignment) - Retrieve a list of all Assigned Items for an account.
* [ListTrustProductEntityAssignment](#listtrustproductentityassignment) - Retrieve a list of all Assigned Items for an account.
* [ListTrustProductEvaluation](#listtrustproductevaluation) - Retrieve a list of Evaluations associated to the trust_product resource.
* [UpdateCustomerProfile](#updatecustomerprofile) - Updates a Customer-Profile in an account.
* [UpdateEndUser](#updateenduser) - Update an existing End User.
* [UpdateSupportingDocument](#updatesupportingdocument) - Update an existing Supporting Document.
* [UpdateTrustProduct](#updatetrustproduct) - Updates a Customer-Profile in an account.

## CreateCustomerProfile

Create a new Customer-Profile.

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
    res, err := s.SDK.CreateCustomerProfile(ctx, operations.CreateCustomerProfileCreateCustomerProfileRequest{
        Email: "Eli96@yahoo.com",
        FriendlyName: "tempora",
        PolicySid: "suscipit",
        StatusCallback: sdk.String("http://spotted-skyline.name"),
    }, operations.CreateCustomerProfileSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TrusthubV1CustomerProfile != nil {
        // handle response
    }
}
```

## CreateCustomerProfileChannelEndpointAssignment

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
    res, err := s.SDK.CreateCustomerProfileChannelEndpointAssignment(ctx, operations.CreateCustomerProfileChannelEndpointAssignmentRequest{
        CustomerProfileSid: "iusto",
        RequestBody: &operations.CreateCustomerProfileChannelEndpointAssignmentCreateCustomerProfileChannelEndpointAssignmentRequest{
            ChannelEndpointSid: "excepturi",
            ChannelEndpointType: "nisi",
        },
    }, operations.CreateCustomerProfileChannelEndpointAssignmentSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TrusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment != nil {
        // handle response
    }
}
```

## CreateCustomerProfileEntityAssignment

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
    res, err := s.SDK.CreateCustomerProfileEntityAssignment(ctx, operations.CreateCustomerProfileEntityAssignmentRequest{
        CustomerProfileSid: "recusandae",
        RequestBody: &operations.CreateCustomerProfileEntityAssignmentCreateCustomerProfileEntityAssignmentRequest{
            ObjectSid: "temporibus",
        },
    }, operations.CreateCustomerProfileEntityAssignmentSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TrusthubV1CustomerProfileCustomerProfileEntityAssignment != nil {
        // handle response
    }
}
```

## CreateCustomerProfileEvaluation

Create a new Evaluation

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
    res, err := s.SDK.CreateCustomerProfileEvaluation(ctx, operations.CreateCustomerProfileEvaluationRequest{
        CustomerProfileSid: "ab",
        RequestBody: &operations.CreateCustomerProfileEvaluationCreateCustomerProfileEvaluationRequest{
            PolicySid: "quis",
        },
    }, operations.CreateCustomerProfileEvaluationSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TrusthubV1CustomerProfileCustomerProfileEvaluation != nil {
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
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.CreateEndUser(ctx, operations.CreateEndUserCreateEndUserRequest{
        Attributes: sdk.String("veritatis"),
        FriendlyName: "deserunt",
        Type: "perferendis",
    }, operations.CreateEndUserSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TrusthubV1EndUser != nil {
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
        Attributes: sdk.String("ipsam"),
        FriendlyName: "repellendus",
        Type: "sapiente",
    }, operations.CreateSupportingDocumentSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TrusthubV1SupportingDocument != nil {
        // handle response
    }
}
```

## CreateTrustProduct

Create a new Customer-Profile.

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
    res, err := s.SDK.CreateTrustProduct(ctx, operations.CreateTrustProductCreateTrustProductRequest{
        Email: "Brooke_Strosin47@hotmail.com",
        FriendlyName: "quod",
        PolicySid: "quod",
        StatusCallback: sdk.String("http://meager-seabass.net"),
    }, operations.CreateTrustProductSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TrusthubV1TrustProduct != nil {
        // handle response
    }
}
```

## CreateTrustProductChannelEndpointAssignment

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
    res, err := s.SDK.CreateTrustProductChannelEndpointAssignment(ctx, operations.CreateTrustProductChannelEndpointAssignmentRequest{
        RequestBody: &operations.CreateTrustProductChannelEndpointAssignmentCreateTrustProductChannelEndpointAssignmentRequest{
            ChannelEndpointSid: "dicta",
            ChannelEndpointType: "nam",
        },
        TrustProductSid: "officia",
    }, operations.CreateTrustProductChannelEndpointAssignmentSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TrusthubV1TrustProductTrustProductChannelEndpointAssignment != nil {
        // handle response
    }
}
```

## CreateTrustProductEntityAssignment

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
    res, err := s.SDK.CreateTrustProductEntityAssignment(ctx, operations.CreateTrustProductEntityAssignmentRequest{
        RequestBody: &operations.CreateTrustProductEntityAssignmentCreateTrustProductEntityAssignmentRequest{
            ObjectSid: "occaecati",
        },
        TrustProductSid: "fugit",
    }, operations.CreateTrustProductEntityAssignmentSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TrusthubV1TrustProductTrustProductEntityAssignment != nil {
        // handle response
    }
}
```

## CreateTrustProductEvaluation

Create a new Evaluation

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
    res, err := s.SDK.CreateTrustProductEvaluation(ctx, operations.CreateTrustProductEvaluationRequest{
        RequestBody: &operations.CreateTrustProductEvaluationCreateTrustProductEvaluationRequest{
            PolicySid: "deleniti",
        },
        TrustProductSid: "hic",
    }, operations.CreateTrustProductEvaluationSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TrusthubV1TrustProductTrustProductEvaluation != nil {
        // handle response
    }
}
```

## DeleteCustomerProfile

Delete a specific Customer-Profile.

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
    res, err := s.SDK.DeleteCustomerProfile(ctx, operations.DeleteCustomerProfileRequest{
        Sid: "optio",
    }, operations.DeleteCustomerProfileSecurity{
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

## DeleteCustomerProfileChannelEndpointAssignment

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
    res, err := s.SDK.DeleteCustomerProfileChannelEndpointAssignment(ctx, operations.DeleteCustomerProfileChannelEndpointAssignmentRequest{
        CustomerProfileSid: "totam",
        Sid: "beatae",
    }, operations.DeleteCustomerProfileChannelEndpointAssignmentSecurity{
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

## DeleteCustomerProfileEntityAssignment

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
    res, err := s.SDK.DeleteCustomerProfileEntityAssignment(ctx, operations.DeleteCustomerProfileEntityAssignmentRequest{
        CustomerProfileSid: "commodi",
        Sid: "molestiae",
    }, operations.DeleteCustomerProfileEntityAssignmentSecurity{
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
        Sid: "modi",
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
        Sid: "qui",
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

## DeleteTrustProduct

Delete a specific Customer-Profile.

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
    res, err := s.SDK.DeleteTrustProduct(ctx, operations.DeleteTrustProductRequest{
        Sid: "impedit",
    }, operations.DeleteTrustProductSecurity{
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

## DeleteTrustProductChannelEndpointAssignment

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
    res, err := s.SDK.DeleteTrustProductChannelEndpointAssignment(ctx, operations.DeleteTrustProductChannelEndpointAssignmentRequest{
        Sid: "cum",
        TrustProductSid: "esse",
    }, operations.DeleteTrustProductChannelEndpointAssignmentSecurity{
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

## DeleteTrustProductEntityAssignment

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
    res, err := s.SDK.DeleteTrustProductEntityAssignment(ctx, operations.DeleteTrustProductEntityAssignmentRequest{
        Sid: "ipsum",
        TrustProductSid: "excepturi",
    }, operations.DeleteTrustProductEntityAssignmentSecurity{
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

## FetchCustomerProfile

Fetch a specific Customer-Profile instance.

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
    res, err := s.SDK.FetchCustomerProfile(ctx, operations.FetchCustomerProfileRequest{
        Sid: "aspernatur",
    }, operations.FetchCustomerProfileSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TrusthubV1CustomerProfile != nil {
        // handle response
    }
}
```

## FetchCustomerProfileChannelEndpointAssignment

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
    res, err := s.SDK.FetchCustomerProfileChannelEndpointAssignment(ctx, operations.FetchCustomerProfileChannelEndpointAssignmentRequest{
        CustomerProfileSid: "perferendis",
        Sid: "ad",
    }, operations.FetchCustomerProfileChannelEndpointAssignmentSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TrusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment != nil {
        // handle response
    }
}
```

## FetchCustomerProfileEntityAssignment

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
    res, err := s.SDK.FetchCustomerProfileEntityAssignment(ctx, operations.FetchCustomerProfileEntityAssignmentRequest{
        CustomerProfileSid: "natus",
        Sid: "sed",
    }, operations.FetchCustomerProfileEntityAssignmentSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TrusthubV1CustomerProfileCustomerProfileEntityAssignment != nil {
        // handle response
    }
}
```

## FetchCustomerProfileEvaluation

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
    res, err := s.SDK.FetchCustomerProfileEvaluation(ctx, operations.FetchCustomerProfileEvaluationRequest{
        CustomerProfileSid: "iste",
        Sid: "dolor",
    }, operations.FetchCustomerProfileEvaluationSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TrusthubV1CustomerProfileCustomerProfileEvaluation != nil {
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
        Sid: "natus",
    }, operations.FetchEndUserSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TrusthubV1EndUser != nil {
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
        Sid: "laboriosam",
    }, operations.FetchEndUserTypeSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TrusthubV1EndUserType != nil {
        // handle response
    }
}
```

## FetchPolicies

Fetch specific Policy Instance.

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
    res, err := s.SDK.FetchPolicies(ctx, operations.FetchPoliciesRequest{
        Sid: "hic",
    }, operations.FetchPoliciesSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TrusthubV1Policies != nil {
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
        Sid: "saepe",
    }, operations.FetchSupportingDocumentSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TrusthubV1SupportingDocument != nil {
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
        Sid: "fuga",
    }, operations.FetchSupportingDocumentTypeSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TrusthubV1SupportingDocumentType != nil {
        // handle response
    }
}
```

## FetchTrustProduct

Fetch a specific Customer-Profile instance.

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
    res, err := s.SDK.FetchTrustProduct(ctx, operations.FetchTrustProductRequest{
        Sid: "in",
    }, operations.FetchTrustProductSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TrusthubV1TrustProduct != nil {
        // handle response
    }
}
```

## FetchTrustProductChannelEndpointAssignment

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
    res, err := s.SDK.FetchTrustProductChannelEndpointAssignment(ctx, operations.FetchTrustProductChannelEndpointAssignmentRequest{
        Sid: "corporis",
        TrustProductSid: "iste",
    }, operations.FetchTrustProductChannelEndpointAssignmentSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TrusthubV1TrustProductTrustProductChannelEndpointAssignment != nil {
        // handle response
    }
}
```

## FetchTrustProductEntityAssignment

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
    res, err := s.SDK.FetchTrustProductEntityAssignment(ctx, operations.FetchTrustProductEntityAssignmentRequest{
        Sid: "iure",
        TrustProductSid: "saepe",
    }, operations.FetchTrustProductEntityAssignmentSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TrusthubV1TrustProductTrustProductEntityAssignment != nil {
        // handle response
    }
}
```

## FetchTrustProductEvaluation

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
    res, err := s.SDK.FetchTrustProductEvaluation(ctx, operations.FetchTrustProductEvaluationRequest{
        Sid: "quidem",
        TrustProductSid: "architecto",
    }, operations.FetchTrustProductEvaluationSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TrusthubV1TrustProductTrustProductEvaluation != nil {
        // handle response
    }
}
```

## ListCustomerProfile

Retrieve a list of all Customer-Profiles for an account.

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
    res, err := s.SDK.ListCustomerProfile(ctx, operations.ListCustomerProfileRequest{
        FriendlyName: sdk.String("ipsa"),
        Page: sdk.Int64(969810),
        PageSize: sdk.Int64(666767),
        PageToken: sdk.String("mollitia"),
        PolicySid: sdk.String("laborum"),
        Status: shared.CustomerProfileEnumStatusEnumDraft.ToPointer(),
    }, operations.ListCustomerProfileSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCustomerProfileResponse != nil {
        // handle response
    }
}
```

## ListCustomerProfileChannelEndpointAssignment

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
    res, err := s.SDK.ListCustomerProfileChannelEndpointAssignment(ctx, operations.ListCustomerProfileChannelEndpointAssignmentRequest{
        ChannelEndpointSid: sdk.String("dolorem"),
        ChannelEndpointSids: sdk.String("corporis"),
        CustomerProfileSid: "explicabo",
        Page: sdk.Int64(750686),
        PageSize: sdk.Int64(315428),
        PageToken: sdk.String("omnis"),
    }, operations.ListCustomerProfileChannelEndpointAssignmentSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCustomerProfileChannelEndpointAssignmentResponse != nil {
        // handle response
    }
}
```

## ListCustomerProfileEntityAssignment

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
    res, err := s.SDK.ListCustomerProfileEntityAssignment(ctx, operations.ListCustomerProfileEntityAssignmentRequest{
        CustomerProfileSid: "nemo",
        Page: sdk.Int64(325047),
        PageSize: sdk.Int64(570197),
        PageToken: sdk.String("accusantium"),
    }, operations.ListCustomerProfileEntityAssignmentSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCustomerProfileEntityAssignmentResponse != nil {
        // handle response
    }
}
```

## ListCustomerProfileEvaluation

Retrieve a list of Evaluations associated to the customer_profile resource.

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
    res, err := s.SDK.ListCustomerProfileEvaluation(ctx, operations.ListCustomerProfileEvaluationRequest{
        CustomerProfileSid: "iure",
        Page: sdk.Int64(634274),
        PageSize: sdk.Int64(988374),
        PageToken: sdk.String("sapiente"),
    }, operations.ListCustomerProfileEvaluationSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCustomerProfileEvaluationResponse != nil {
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
        Page: sdk.Int64(102044),
        PageSize: sdk.Int64(652790),
        PageToken: sdk.String("dolorem"),
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
        Page: sdk.Int64(635059),
        PageSize: sdk.Int64(161309),
        PageToken: sdk.String("repellat"),
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

## ListPolicies

Retrieve a list of all Policys.

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
    res, err := s.SDK.ListPolicies(ctx, operations.ListPoliciesRequest{
        Page: sdk.Int64(653108),
        PageSize: sdk.Int64(581850),
        PageToken: sdk.String("numquam"),
    }, operations.ListPoliciesSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPoliciesResponse != nil {
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
        Page: sdk.Int64(414369),
        PageSize: sdk.Int64(466311),
        PageToken: sdk.String("molestiae"),
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
        Page: sdk.Int64(244425),
        PageSize: sdk.Int64(623510),
        PageToken: sdk.String("quia"),
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

## ListTrustProduct

Retrieve a list of all Customer-Profiles for an account.

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
    res, err := s.SDK.ListTrustProduct(ctx, operations.ListTrustProductRequest{
        FriendlyName: sdk.String("quis"),
        Page: sdk.Int64(110375),
        PageSize: sdk.Int64(674752),
        PageToken: sdk.String("animi"),
        PolicySid: sdk.String("enim"),
        Status: shared.TrustProductEnumStatusEnumDraft.ToPointer(),
    }, operations.ListTrustProductSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTrustProductResponse != nil {
        // handle response
    }
}
```

## ListTrustProductChannelEndpointAssignment

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
    res, err := s.SDK.ListTrustProductChannelEndpointAssignment(ctx, operations.ListTrustProductChannelEndpointAssignmentRequest{
        ChannelEndpointSid: sdk.String("quo"),
        ChannelEndpointSids: sdk.String("sequi"),
        Page: sdk.Int64(949572),
        PageSize: sdk.Int64(368725),
        PageToken: sdk.String("id"),
        TrustProductSid: "possimus",
    }, operations.ListTrustProductChannelEndpointAssignmentSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTrustProductChannelEndpointAssignmentResponse != nil {
        // handle response
    }
}
```

## ListTrustProductEntityAssignment

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
    res, err := s.SDK.ListTrustProductEntityAssignment(ctx, operations.ListTrustProductEntityAssignmentRequest{
        Page: sdk.Int64(13571),
        PageSize: sdk.Int64(97101),
        PageToken: sdk.String("error"),
        TrustProductSid: "temporibus",
    }, operations.ListTrustProductEntityAssignmentSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTrustProductEntityAssignmentResponse != nil {
        // handle response
    }
}
```

## ListTrustProductEvaluation

Retrieve a list of Evaluations associated to the trust_product resource.

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
    res, err := s.SDK.ListTrustProductEvaluation(ctx, operations.ListTrustProductEvaluationRequest{
        Page: sdk.Int64(673660),
        PageSize: sdk.Int64(96098),
        PageToken: sdk.String("reiciendis"),
        TrustProductSid: "voluptatibus",
    }, operations.ListTrustProductEvaluationSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTrustProductEvaluationResponse != nil {
        // handle response
    }
}
```

## UpdateCustomerProfile

Updates a Customer-Profile in an account.

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
    res, err := s.SDK.UpdateCustomerProfile(ctx, operations.UpdateCustomerProfileRequest{
        RequestBody: &operations.UpdateCustomerProfileUpdateCustomerProfileRequest{
            Email: sdk.String("Jane.Langosh60@hotmail.com"),
            FriendlyName: sdk.String("voluptate"),
            Status: shared.CustomerProfileEnumStatusEnumTwilioRejected.ToPointer(),
            StatusCallback: sdk.String("http://anxious-hunt.biz"),
        },
        Sid: "maiores",
    }, operations.UpdateCustomerProfileSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TrusthubV1CustomerProfile != nil {
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
            Attributes: sdk.String("dicta"),
            FriendlyName: sdk.String("corporis"),
        },
        Sid: "dolore",
    }, operations.UpdateEndUserSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TrusthubV1EndUser != nil {
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
            Attributes: sdk.String("iusto"),
            FriendlyName: sdk.String("dicta"),
        },
        Sid: "harum",
    }, operations.UpdateSupportingDocumentSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TrusthubV1SupportingDocument != nil {
        // handle response
    }
}
```

## UpdateTrustProduct

Updates a Customer-Profile in an account.

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
    res, err := s.SDK.UpdateTrustProduct(ctx, operations.UpdateTrustProductRequest{
        RequestBody: &operations.UpdateTrustProductUpdateTrustProductRequest{
            Email: sdk.String("Shania.Jerde21@gmail.com"),
            FriendlyName: sdk.String("quidem"),
            Status: shared.TrustProductEnumStatusEnumInReview.ToPointer(),
            StatusCallback: sdk.String("https://treasured-dirt.name"),
        },
        Sid: "rem",
    }, operations.UpdateTrustProductSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TrusthubV1TrustProduct != nil {
        // handle response
    }
}
```
