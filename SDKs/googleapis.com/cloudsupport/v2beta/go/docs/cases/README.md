# Cases

### Available Operations

* [CloudsupportCasesAttachmentsList](#cloudsupportcasesattachmentslist) - Retrieve all attachments associated with a support case.
* [CloudsupportCasesClose](#cloudsupportcasesclose) - Close the specified case.
* [CloudsupportCasesCommentsCreate](#cloudsupportcasescommentscreate) - Add a new comment to the specified Case. The comment object must have the following fields set: body.
* [CloudsupportCasesCommentsList](#cloudsupportcasescommentslist) - Retrieve all Comments associated with the Case object.
* [CloudsupportCasesCreate](#cloudsupportcasescreate) - Create a new case and associate it with the given Google Cloud Resource. The case object must have the following fields set: `display_name`, `description`, `classification`, and `priority`.
* [CloudsupportCasesEscalate](#cloudsupportcasesescalate) - Escalate a case. Escalating a case will initiate the Google Cloud Support escalation management process. This operation is only available to certain Customer Care tiers. Go to https://cloud.google.com/support and look for 'Technical support escalations' in the feature list to find out which tiers are able to perform escalations.
* [CloudsupportCasesGet](#cloudsupportcasesget) - Retrieve the specified case.
* [CloudsupportCasesList](#cloudsupportcaseslist) - Retrieve all cases under the specified parent. Note: Listing cases under an Organization returns only the cases directly parented by that organization. To retrieve all cases under an organization, including cases parented by projects under that organization, use `cases.search`.
* [CloudsupportCasesPatch](#cloudsupportcasespatch) - Update the specified case. Only a subset of fields can be updated.
* [CloudsupportCasesSearch](#cloudsupportcasessearch) - Search cases using the specified query.

## CloudsupportCasesAttachmentsList

Retrieve all attachments associated with a support case.

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
    res, err := s.Cases.CloudsupportCasesAttachmentsList(ctx, operations.CloudsupportCasesAttachmentsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("temporibus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quis"),
        Fields: sdk.String("veritatis"),
        Key: sdk.String("deserunt"),
        OauthToken: sdk.String("perferendis"),
        PageSize: sdk.Int64(368241),
        PageToken: sdk.String("repellendus"),
        Parent: "sapiente",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quo"),
        UploadType: sdk.String("odit"),
        UploadProtocol: sdk.String("at"),
    }, operations.CloudsupportCasesAttachmentsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAttachmentsResponse != nil {
        // handle response
    }
}
```

## CloudsupportCasesClose

Close the specified case.

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
    res, err := s.Cases.CloudsupportCasesClose(ctx, operations.CloudsupportCasesCloseRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "molestiae": "quod",
            "quod": "esse",
            "totam": "porro",
            "dolorum": "dicta",
        },
        AccessToken: sdk.String("nam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("occaecati"),
        Fields: sdk.String("fugit"),
        Key: sdk.String("deleniti"),
        Name: "Ms. Earnest Lebsack",
        OauthToken: sdk.String("modi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("qui"),
        UploadType: sdk.String("impedit"),
        UploadProtocol: sdk.String("cum"),
    }, operations.CloudsupportCasesCloseSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Case != nil {
        // handle response
    }
}
```

## CloudsupportCasesCommentsCreate

Add a new comment to the specified Case. The comment object must have the following fields set: body.

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
    res, err := s.Cases.CloudsupportCasesCommentsCreate(ctx, operations.CloudsupportCasesCommentsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        CommentInput: &shared.CommentInput{
            Body: sdk.String("ipsum"),
            Creator: &shared.ActorInput{
                DisplayName: sdk.String("excepturi"),
                Email: sdk.String("Aiden.Hane@gmail.com"),
            },
        },
        AccessToken: sdk.String("iste"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("natus"),
        Fields: sdk.String("laboriosam"),
        Key: sdk.String("hic"),
        OauthToken: sdk.String("saepe"),
        Parent: "fuga",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("in"),
        UploadType: sdk.String("corporis"),
        UploadProtocol: sdk.String("iste"),
    }, operations.CloudsupportCasesCommentsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Comment != nil {
        // handle response
    }
}
```

## CloudsupportCasesCommentsList

Retrieve all Comments associated with the Case object.

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
    res, err := s.Cases.CloudsupportCasesCommentsList(ctx, operations.CloudsupportCasesCommentsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("saepe"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("architecto"),
        Fields: sdk.String("ipsa"),
        Key: sdk.String("reiciendis"),
        OauthToken: sdk.String("est"),
        PageSize: sdk.Int64(653140),
        PageToken: sdk.String("laborum"),
        Parent: "dolores",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolorem"),
        UploadType: sdk.String("corporis"),
        UploadProtocol: sdk.String("explicabo"),
    }, operations.CloudsupportCasesCommentsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCommentsResponse != nil {
        // handle response
    }
}
```

## CloudsupportCasesCreate

Create a new case and associate it with the given Google Cloud Resource. The case object must have the following fields set: `display_name`, `description`, `classification`, and `priority`.

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
    res, err := s.Cases.CloudsupportCasesCreate(ctx, operations.CloudsupportCasesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        CaseInput: &shared.CaseInput{
            Classification: &shared.CaseClassification{
                DisplayName: sdk.String("enim"),
                ID: sdk.String("955907af-f1a3-4a2f-a946-7739251aa52c"),
            },
            ContactEmail: sdk.String("sequi"),
            Creator: &shared.ActorInput{
                DisplayName: sdk.String("tenetur"),
                Email: sdk.String("Makayla9@yahoo.com"),
            },
            Description: sdk.String("error"),
            DisplayName: sdk.String("temporibus"),
            Escalated: sdk.Bool(false),
            LanguageCode: sdk.String("laborum"),
            Name: sdk.String("Johanna Wolf"),
            Priority: shared.CasePriorityEnumP2.ToPointer(),
            Severity: shared.CaseSeverityEnumS4.ToPointer(),
            SubscriberEmailAddresses: []string{
                "omnis",
            },
            TestCase: sdk.Bool(false),
            TimeZone: sdk.String("voluptate"),
        },
        AccessToken: sdk.String("cum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("doloremque"),
        Fields: sdk.String("reprehenderit"),
        Key: sdk.String("ut"),
        OauthToken: sdk.String("maiores"),
        Parent: "dicta",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("corporis"),
        UploadType: sdk.String("dolore"),
        UploadProtocol: sdk.String("iusto"),
    }, operations.CloudsupportCasesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Case != nil {
        // handle response
    }
}
```

## CloudsupportCasesEscalate

Escalate a case. Escalating a case will initiate the Google Cloud Support escalation management process. This operation is only available to certain Customer Care tiers. Go to https://cloud.google.com/support and look for 'Technical support escalations' in the feature list to find out which tiers are able to perform escalations.

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
    res, err := s.Cases.CloudsupportCasesEscalate(ctx, operations.CloudsupportCasesEscalateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        EscalateCaseRequest: &shared.EscalateCaseRequest{
            Escalation: &shared.Escalation{
                Justification: sdk.String("harum"),
                Reason: shared.EscalationReasonEnumResolutionTime.ToPointer(),
            },
        },
        AccessToken: sdk.String("accusamus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("repudiandae"),
        Fields: sdk.String("quae"),
        Key: sdk.String("ipsum"),
        Name: "Virgil Mante",
        OauthToken: sdk.String("praesentium"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("rem"),
        UploadType: sdk.String("voluptates"),
        UploadProtocol: sdk.String("quasi"),
    }, operations.CloudsupportCasesEscalateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Case != nil {
        // handle response
    }
}
```

## CloudsupportCasesGet

Retrieve the specified case.

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
    res, err := s.Cases.CloudsupportCasesGet(ctx, operations.CloudsupportCasesGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("sint"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("itaque"),
        Fields: sdk.String("incidunt"),
        Key: sdk.String("enim"),
        Name: "Monique Spinka",
        OauthToken: sdk.String("distinctio"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quibusdam"),
        UploadType: sdk.String("labore"),
        UploadProtocol: sdk.String("modi"),
    }, operations.CloudsupportCasesGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Case != nil {
        // handle response
    }
}
```

## CloudsupportCasesList

Retrieve all cases under the specified parent. Note: Listing cases under an Organization returns only the cases directly parented by that organization. To retrieve all cases under an organization, including cases parented by projects under that organization, use `cases.search`.

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
    res, err := s.Cases.CloudsupportCasesList(ctx, operations.CloudsupportCasesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("aliquid"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quos"),
        Fields: sdk.String("perferendis"),
        Filter: sdk.String("magni"),
        Key: sdk.String("assumenda"),
        OauthToken: sdk.String("ipsam"),
        PageSize: sdk.Int64(4695),
        PageToken: sdk.String("fugit"),
        Parent: "dolorum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("excepturi"),
        UploadType: sdk.String("tempora"),
        UploadProtocol: sdk.String("facilis"),
    }, operations.CloudsupportCasesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCasesResponse != nil {
        // handle response
    }
}
```

## CloudsupportCasesPatch

Update the specified case. Only a subset of fields can be updated.

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
    res, err := s.Cases.CloudsupportCasesPatch(ctx, operations.CloudsupportCasesPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        CaseInput: &shared.CaseInput{
            Classification: &shared.CaseClassification{
                DisplayName: sdk.String("labore"),
                ID: sdk.String("f63c969e-9a3e-4fa7-bdfb-14cd66ae395e"),
            },
            ContactEmail: sdk.String("delectus"),
            Creator: &shared.ActorInput{
                DisplayName: sdk.String("quidem"),
                Email: sdk.String("Mohammad_Olson@yahoo.com"),
            },
            Description: sdk.String("sapiente"),
            DisplayName: sdk.String("amet"),
            Escalated: sdk.Bool(false),
            LanguageCode: sdk.String("deserunt"),
            Name: sdk.String("Wilma Mosciski"),
            Priority: shared.CasePriorityEnumPriorityUnspecified.ToPointer(),
            Severity: shared.CaseSeverityEnumS1.ToPointer(),
            SubscriberEmailAddresses: []string{
                "distinctio",
                "id",
            },
            TestCase: sdk.Bool(false),
            TimeZone: sdk.String("labore"),
        },
        AccessToken: sdk.String("labore"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("natus"),
        Fields: sdk.String("nobis"),
        Key: sdk.String("eum"),
        Name: "Brandon Brakus V",
        OauthToken: sdk.String("ullam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("provident"),
        UpdateMask: sdk.String("quos"),
        UploadType: sdk.String("sint"),
        UploadProtocol: sdk.String("accusantium"),
    }, operations.CloudsupportCasesPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Case != nil {
        // handle response
    }
}
```

## CloudsupportCasesSearch

Search cases using the specified query.

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
    res, err := s.Cases.CloudsupportCasesSearch(ctx, operations.CloudsupportCasesSearchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("reiciendis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ad"),
        Fields: sdk.String("eum"),
        Key: sdk.String("dolor"),
        OauthToken: sdk.String("necessitatibus"),
        PageSize: sdk.Int64(141264),
        PageToken: sdk.String("nemo"),
        PrettyPrint: sdk.Bool(false),
        Query: sdk.String("quasi"),
        QuotaUser: sdk.String("iure"),
        UploadType: sdk.String("doloribus"),
        UploadProtocol: sdk.String("debitis"),
    }, operations.CloudsupportCasesSearchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchCasesResponse != nil {
        // handle response
    }
}
```
