# ContinuousProject

### Available Operations

* [AddDocument](#adddocument) - Add a new document to your continuous project
* [CollectAnalytics](#collectanalytics) - Save/collect analytics data from Active widget
* [Complete](#complete) - Complete continuous project
* [CompleteContinuousDocument](#completecontinuousdocument) - Complete a continuous project document
* [CompleteLanguage](#completelanguage) - Complete continuous project language
* [CreateActiveWidget](#createactivewidget) - Create a new Active widget
* [CreateContinuousProject](#createcontinuousproject) - Create a continuous project
* [CreateSubscription](#createsubscription) - Create subscription for continuous project
* [DeleteActiveWidget](#deleteactivewidget) - Delete a single widget for this Active project
* [DeleteContinuousProject](#deletecontinuousproject) - Delete a continuous project
* [DeleteSubscription](#deletesubscription) - Delete subscription for continuous project
* [GetActiveWidget](#getactivewidget) - View an Active widget
* [GetActiveWidgets](#getactivewidgets) - View Active widgets
* [GetAnalyticsToken](#getanalyticstoken) - Get JWT token to be used in analytics dashboards
* [GetContinuousProject](#getcontinuousproject) - View a continuous project
* [GetContinuousProjectDocument](#getcontinuousprojectdocument) - View a continuous document
* [GetContinuousProjectDocumentProgress](#getcontinuousprojectdocumentprogress) - Monitor progress of a continuous document
* [GetContinuousProjectDocuments](#getcontinuousprojectdocuments) - View continuous documents
* [GetContinuousProjectInvoices](#getcontinuousprojectinvoices) - Invoices of a continuous project
* [GetContinuousProjectProgress](#getcontinuousprojectprogress) - Monitor progress and status of a continous project
* [GetContinuousProjects](#getcontinuousprojects) - View continuous projects
* [GetQuoteForDocument](#getquotefordocument) - Get a quote for a continuous project document
* [GetQuoteForDocuments](#getquotefordocuments) - Get quote for documents
* [GetQuoteForLanguage](#getquoteforlanguage) - Get quote for language
* [GetQuoteForLanguages](#getquoteforlanguages) - Get quote for languages
* [GetSubscription](#getsubscription) - Get subscription for continuous project
* [PostContinuousProjectDocumentProgress](#postcontinuousprojectdocumentprogress) - Get continuous project document progress for multiple IDs
* [ResetActiveWidgetToken](#resetactivewidgettoken) - Reset Active widget token
* [Translate](#translate) - Instantly translate your content
* [UpdateActiveWidget](#updateactivewidget) - Update Active widget settings.
* [UpdateContinuousProject](#updatecontinuousproject) - Update a continuous project
* [UpdateDocument](#updatedocument) - Update the document
* [UpdateSubscription](#updatesubscription) - Update subscription for continuous project
* [UpdateSubscriptionPaymentMethod](#updatesubscriptionpaymentmethod) - Update subscription payment method for continuous project

## AddDocument

Add a new document to your continuous project. If the name already exists, it will update the existing document. In most scenarios, this operation will also trigger auto-translation of your document, via MT and/or TM.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ContinuousProject.AddDocument(ctx, operations.AddDocumentRequest{
        AddOrUpdateDocumentRequest: &shared.AddOrUpdateDocumentRequest{
            Document: &shared.FileAsData{
                Data: sdk.String("cum"),
                Name: sdk.String("Edna Mante II"),
            },
        },
        ProjectID: 617636,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ContinuousProjectDocument != nil {
        // handle response
    }
}
```

## CollectAnalytics

Save/collect analytics data from Active widget

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ContinuousProject.CollectAnalytics(ctx, operations.CollectAnalyticsRequest{
        AnalyticsCollection: &shared.AnalyticsCollection{
            AnonymousID: sdk.String("sed"),
            Properties: map[string]string{
                "dolor": "natus",
                "laboriosam": "hic",
                "saepe": "fuga",
            },
            SessionID: sdk.String("in"),
            Type: sdk.String("corporis"),
            UserID: sdk.String("iste"),
        },
        ID: 437032,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OperationStatus != nil {
        // handle response
    }
}
```

## Complete

Complete continuous project

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ContinuousProject.Complete(ctx, operations.CompleteRequest{
        ID: 902349,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OperationStatus != nil {
        // handle response
    }
}
```

## CompleteContinuousDocument

Complete a continuous project document. Per your project settings, a continuous project document can be target language-specific or project-wide for all target languages of the project.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ContinuousProject.CompleteContinuousDocument(ctx, operations.CompleteContinuousDocumentRequest{
        DocumentID: 697631,
        ID: 99280,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OperationStatus != nil {
        // handle response
    }
}
```

## CompleteLanguage

Complete continuous project language

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ContinuousProject.CompleteLanguage(ctx, operations.CompleteLanguageRequest{
        ID: 60225,
        TargetLanguage: "reiciendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OperationStatus != nil {
        // handle response
    }
}
```

## CreateActiveWidget

Create a new widget for your Active project to be used in your website. Most website-specific configuration is provided via widgets. This does not create a new Active project, just a separate widget.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ContinuousProject.CreateActiveWidget(ctx, operations.CreateActiveWidgetRequest{
        ActiveWidget: &shared.ActiveWidget{
            AdminMode: sdk.Bool(false),
            AllowHashInURL: sdk.Bool(false),
            AllowQueryInURL: sdk.Bool(false),
            AutoDetectSourceLanguage: sdk.Bool(false),
            CreatedAt: types.MustTimeFromString("2021-09-11T04:59:11.542Z"),
            DebugMode: sdk.Bool(false),
            Elements: sdk.String("laborum"),
            FollowUser: sdk.Bool(false),
            ForceCacheRefreshInterval: sdk.Bool(false),
            HitBackendForExisting: sdk.Bool(false),
            ID: sdk.Int64(170909),
            LanguageMappings: sdk.String("dolorem"),
            Live: sdk.Bool(false),
            ModifyLinks: sdk.Bool(false),
            Name: sdk.String("Rose Rolfson"),
            OptimizePerPage: sdk.Bool(false),
            Pages: sdk.String("nemo"),
            PathRegex: sdk.String("minima"),
            Position: sdk.String("excepturi"),
            QueryName: sdk.String("accusantium"),
            RebootOnURLChange: sdk.Bool(false),
            RestrictedDomains: sdk.String("iure"),
            Sections: sdk.String("culpa"),
            TestMode: sdk.Bool(false),
            Theme: sdk.String("doloribus"),
            Token: sdk.String("sapiente"),
            URLChangeMode: sdk.String("architecto"),
            URLMode: sdk.String("mollitia"),
            UseCache: sdk.Bool(false),
            UseDummyTranslations: sdk.Bool(false),
            Variables: sdk.String("dolorem"),
        },
        ProjectID: 635059,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActiveWidget != nil {
        // handle response
    }
}
```

## CreateContinuousProject

Create a new continuous project for your software, website, CI/CD translation needs.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ContinuousProject.CreateContinuousProject(ctx, shared.ContinuousProject{
        AnalyticsEnabled: sdk.Bool(false),
        AutoStartPostedit: sdk.Bool(false),
        CreatedAt: types.MustTimeFromString("2022-01-02T17:10:32.894Z"),
        ID: sdk.Int64(653108),
        IsEnabled: sdk.Bool(false),
        LastActivityAt: types.MustTimeFromString("2022-06-30T02:19:51.375Z"),
        Links: &shared.ContinuousProjectLinks{
            Editors: map[string]shared.Href{
                "quam": shared.Href{
                    Href: sdk.String("molestiae"),
                },
                "velit": shared.Href{
                    Href: sdk.String("error"),
                },
            },
            Self: &shared.Href{
                Href: sdk.String("quia"),
            },
        },
        MtEnabled: sdk.Bool(false),
        MtEngine: sdk.String("quis"),
        Name: sdk.String("Kayla O'Kon"),
        PosteditEnabled: sdk.Bool(false),
        SourceLanguage: sdk.String("quo"),
        Status: sdk.String("sequi"),
        Subscription: &shared.Subscription{
            Downgrade: []string{
                "ipsam",
                "id",
                "possimus",
                "aut",
            },
            PaymentMethod: sdk.Int64(97101),
            PeriodEnd: types.MustTimeFromString("2021-04-29T07:12:18.684Z"),
            PlanID: sdk.String("laborum"),
            PlanName: sdk.String("quasi"),
            Price: sdk.String("reiciendis"),
            Products: []interface{}{
                "vero",
                "nihil",
                "praesentium",
                "voluptatibus",
            },
            ScheduleName: sdk.String("ipsa"),
            ScheduleStart: types.MustTimeFromString("2022-02-05T15:41:25.512Z"),
            SubscriptionID: sdk.String("cum"),
            Upgrade: []string{
                "doloremque",
            },
            WithTrial: sdk.String("reprehenderit"),
        },
        TargetLanguages: []string{
            "maiores",
            "dicta",
        },
        Type: sdk.String("corporis"),
        WordCount: sdk.Int64(296140),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ContinuousProject != nil {
        // handle response
    }
}
```

## CreateSubscription

Create subscription for continuous project

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ContinuousProject.CreateSubscription(ctx, operations.CreateSubscriptionRequest{
        Subscription: shared.Subscription{
            Downgrade: []string{
                "dicta",
                "harum",
            },
            PaymentMethod: sdk.Int64(317983),
            PeriodEnd: types.MustTimeFromString("2021-10-04T09:10:06.610Z"),
            PlanID: sdk.String("repudiandae"),
            PlanName: sdk.String("quae"),
            Price: sdk.String("ipsum"),
            Products: []interface{}{
                "molestias",
                "excepturi",
                "pariatur",
            },
            ScheduleName: sdk.String("modi"),
            ScheduleStart: types.MustTimeFromString("2021-12-15T00:41:38.329Z"),
            SubscriptionID: sdk.String("voluptates"),
            Upgrade: []string{
                "repudiandae",
            },
            WithTrial: sdk.String("sint"),
        },
        ID: 83112,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Subscription != nil {
        // handle response
    }
}
```

## DeleteActiveWidget

Delete a single widget for this Active project

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ContinuousProject.DeleteActiveWidget(ctx, operations.DeleteActiveWidgetRequest{
        ProjectID: 929297,
        WidgetID: 277718,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OperationStatus != nil {
        // handle response
    }
}
```

## DeleteContinuousProject

Delete an existing continuous project. Your project will be cancelled, and you will still be charged for the amount of translations we have done for you so far.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ContinuousProject.DeleteContinuousProject(ctx, operations.DeleteContinuousProjectRequest{
        ID: 318569,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OperationStatus != nil {
        // handle response
    }
}
```

## DeleteSubscription

Delete subscription for continuous project

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ContinuousProject.DeleteSubscription(ctx, operations.DeleteSubscriptionRequest{
        ID: 9356,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Subscription != nil {
        // handle response
    }
}
```

## GetActiveWidget

View the details of an Active widget to be used in your website. Most website-specific configuration is provided via widgets.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ContinuousProject.GetActiveWidget(ctx, operations.GetActiveWidgetRequest{
        ProjectID: 667411,
        WidgetID: 842342,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActiveWidget != nil {
        // handle response
    }
}
```

## GetActiveWidgets

View a list of widgets in your Active project to be used in your website. Most website-specific configuration is provided via widgets.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ContinuousProject.GetActiveWidgets(ctx, operations.GetActiveWidgetsRequest{
        ProjectID: 131797,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActiveWidgetList != nil {
        // handle response
    }
}
```

## GetAnalyticsToken

Get JWT token to be used in analytics dashboards

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ContinuousProject.GetAnalyticsToken(ctx, operations.GetAnalyticsTokenRequest{
        ID: 647174,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AnalyticsToken != nil {
        // handle response
    }
}
```

## GetContinuousProject

View the details of a continuous project.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ContinuousProject.GetContinuousProject(ctx, operations.GetContinuousProjectRequest{
        ID: 716327,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ContinuousProject != nil {
        // handle response
    }
}
```

## GetContinuousProjectDocument

View the details of a source document in continuous translation project.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ContinuousProject.GetContinuousProjectDocument(ctx, operations.GetContinuousProjectDocumentRequest{
        DocumentID: 841386,
        ProjectID: 289406,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ContinuousProjectDocument != nil {
        // handle response
    }
}
```

## GetContinuousProjectDocumentProgress

Monitor the translation progress of a document in a continuous project in real-time.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ContinuousProject.GetContinuousProjectDocumentProgress(ctx, operations.GetContinuousProjectDocumentProgressRequest{
        DocumentID: 264730,
        FilterByLanguage: sdk.String("qui"),
        ProjectID: 397821,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Progress != nil {
        // handle response
    }
}
```

## GetContinuousProjectDocuments

View the documents under this continuous project

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ContinuousProject.GetContinuousProjectDocuments(ctx, operations.GetContinuousProjectDocumentsRequest{
        FilterByLanguage: sdk.String("cupiditate"),
        ProjectID: 552822,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ContinuousProjectDocumentList != nil {
        // handle response
    }
}
```

## GetContinuousProjectInvoices

Get real-time access to a continuous project's invoices.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ContinuousProject.GetContinuousProjectInvoices(ctx, operations.GetContinuousProjectInvoicesRequest{
        ProjectID: 20107,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ContinuousProjectInvoices != nil {
        // handle response
    }
}
```

## GetContinuousProjectProgress

Monitor the translation progress of an ongoing continuous project in real-time.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ContinuousProject.GetContinuousProjectProgress(ctx, operations.GetContinuousProjectProgressRequest{
        FilterByLanguage: sdk.String("magni"),
        ProjectID: 828940,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ContinuousProjectProgress != nil {
        // handle response
    }
}
```

## GetContinuousProjects

View a list of continuous projects under your account. Continuous projects are those that are constantly updated, such as a CI/CD project, software project, website translation and such.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ContinuousProject.GetContinuousProjects(ctx, operations.GetContinuousProjectsRequest{
        Type: operations.GetContinuousProjectsTypeEnumActive.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ContinuousProjectsList != nil {
        // handle response
    }
}
```

## GetQuoteForDocument

Get a new quote for provided document in continuous project. Per your project settings, a continuous project document can be target language-specific or project-wide for all target languages of the project.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ContinuousProject.GetQuoteForDocument(ctx, operations.GetQuoteForDocumentRequest{
        DocumentID: 369808,
        ID: 4695,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProjectList != nil {
        // handle response
    }
}
```

## GetQuoteForDocuments

Get a new quote for provided documents in continuous project

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ContinuousProject.GetQuoteForDocuments(ctx, operations.GetQuoteForDocumentsRequest{
        GetQuotesForDocumentsBody: &shared.GetQuotesForDocumentsBody{
            Files: []int64{
                677817,
            },
        },
        ID: 569618,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProjectList != nil {
        // handle response
    }
}
```

## GetQuoteForLanguage

Get a new quote for provided target language in continuous project

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ContinuousProject.GetQuoteForLanguage(ctx, operations.GetQuoteForLanguageRequest{
        ID: 270008,
        TargetLanguage: "facilis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProjectList != nil {
        // handle response
    }
}
```

## GetQuoteForLanguages

Get a new quote for provided target languages in continuous project

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ContinuousProject.GetQuoteForLanguages(ctx, operations.GetQuoteForLanguagesRequest{
        GetQuotesForLanguagesBody: &shared.GetQuotesForLanguagesBody{
            Languages: []string{
                "labore",
                "delectus",
                "eum",
            },
        },
        ID: 248753,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProjectList != nil {
        // handle response
    }
}
```

## GetSubscription

Get subscription for continuous project

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ContinuousProject.GetSubscription(ctx, operations.GetSubscriptionRequest{
        ID: 756107,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Subscription != nil {
        // handle response
    }
}
```

## PostContinuousProjectDocumentProgress

Get continuous project document progress for multiple IDs

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ContinuousProject.PostContinuousProjectDocumentProgress(ctx, operations.PostContinuousProjectDocumentProgressRequest{
        ContinuousProjectDocumentProgressBody: &shared.ContinuousProjectDocumentProgressBody{
            DocumentName: sdk.String("sint"),
            FilterByLanguage: sdk.String("aliquid"),
        },
        ProjectID: 592042,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Progress != nil {
        // handle response
    }
}
```

## ResetActiveWidgetToken

Reset the public token used with your Active widget. This token is used when communicating from your environment to MotaWord systems for translation, analytics and meta.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ContinuousProject.ResetActiveWidgetToken(ctx, operations.ResetActiveWidgetTokenRequest{
        ProjectID: 896039,
        WidgetID: 572252,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActiveWidget != nil {
        // handle response
    }
}
```

## Translate

Instantly translate your content with your existing TM and MT resources. This is the primary endpoint to translate your files and content on the fly, especially in CI/CD environments. This is a complex endpoint that is configured in your Active or Continuous Project dashboards. For instance, you can configure whether to use your TM, or translate missing strings via MT and then post-edit those new translations. There are various scenarios you can establish via a set of configurations.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ContinuousProject.Translate(ctx, operations.TranslateRequest{
        InstantTranslationRequest: &shared.InstantTranslationRequest{
            Contents: []string{
                "dolor",
                "debitis",
                "a",
            },
            Documents: []shared.FileAsData{
                shared.FileAsData{
                    Data: sdk.String("in"),
                    Name: sdk.String("Angel Wolff II"),
                },
                shared.FileAsData{
                    Data: sdk.String("cumque"),
                    Name: sdk.String("Nathaniel Hyatt"),
                },
                shared.FileAsData{
                    Data: sdk.String("non"),
                    Name: sdk.String("Jon Tillman"),
                },
            },
            Filters: &shared.InstantTranslationFilter{
                SkipMt: []string{
                    "nam",
                    "id",
                    "blanditiis",
                },
                SkipPostEdit: []string{
                    "sapiente",
                    "amet",
                    "deserunt",
                },
            },
            Meta: map[string]interface{}{
                "vel": "natus",
                "omnis": "molestiae",
            },
        },
        ID: 19193,
        TargetLanguage: "nihil",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InstantTranslationResult != nil {
        // handle response
    }
}
```

## UpdateActiveWidget

Update Active widget settings.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ContinuousProject.UpdateActiveWidget(ctx, operations.UpdateActiveWidgetRequest{
        ActiveWidget: &shared.ActiveWidget{
            AdminMode: sdk.Bool(false),
            AllowHashInURL: sdk.Bool(false),
            AllowQueryInURL: sdk.Bool(false),
            AutoDetectSourceLanguage: sdk.Bool(false),
            CreatedAt: types.MustTimeFromString("2022-04-14T15:11:13.227Z"),
            DebugMode: sdk.Bool(false),
            Elements: sdk.String("id"),
            FollowUser: sdk.Bool(false),
            ForceCacheRefreshInterval: sdk.Bool(false),
            HitBackendForExisting: sdk.Bool(false),
            ID: sdk.Int64(287991),
            LanguageMappings: sdk.String("labore"),
            Live: sdk.Bool(false),
            ModifyLinks: sdk.Bool(false),
            Name: sdk.String("Ada Rohan"),
            OptimizePerPage: sdk.Bool(false),
            Pages: sdk.String("aspernatur"),
            PathRegex: sdk.String("architecto"),
            Position: sdk.String("magnam"),
            QueryName: sdk.String("et"),
            RebootOnURLChange: sdk.Bool(false),
            RestrictedDomains: sdk.String("excepturi"),
            Sections: sdk.String("ullam"),
            TestMode: sdk.Bool(false),
            Theme: sdk.String("provident"),
            Token: sdk.String("quos"),
            URLChangeMode: sdk.String("sint"),
            URLMode: sdk.String("accusantium"),
            UseCache: sdk.Bool(false),
            UseDummyTranslations: sdk.Bool(false),
            Variables: sdk.String("mollitia"),
        },
        ProjectID: 968962,
        WidgetID: 652103,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActiveWidget != nil {
        // handle response
    }
}
```

## UpdateContinuousProject

Update the details and settings of continuous project.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ContinuousProject.UpdateContinuousProject(ctx, operations.UpdateContinuousProjectRequest{
        ContinuousProjectUpdateContent: &shared.ContinuousProjectUpdateContent{
            AnalyticsEnabled: sdk.Bool(false),
            AutoStartPostedit: sdk.Bool(false),
            IsEnabled: sdk.Bool(false),
            Languages: []shared.ContinuousProjectLanguage{
                shared.ContinuousProjectLanguage{
                    Code: sdk.String("eum"),
                    IsEnabled: sdk.Bool(false),
                },
                shared.ContinuousProjectLanguage{
                    Code: sdk.String("dolor"),
                    IsEnabled: sdk.Bool(false),
                },
            },
            MtEnabled: sdk.Bool(false),
            Name: sdk.String("Ms. Fred Hilll"),
            PosteditEnabled: sdk.Bool(false),
        },
        ID: 891924,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ContinuousProject != nil {
        // handle response
    }
}
```

## UpdateDocument

Update source document in your continuous project. In most scenarios, this operation will also trigger auto-translation of your document, via MT and/or TM.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ContinuousProject.UpdateDocument(ctx, operations.UpdateDocumentRequest{
        AddOrUpdateDocumentRequest: &shared.AddOrUpdateDocumentRequest{
            Document: &shared.FileAsData{
                Data: sdk.String("eius"),
                Name: sdk.String("Alfredo Prosacco Sr."),
            },
        },
        DocumentID: 919483,
        ProjectID: 352312,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ContinuousProjectDocument != nil {
        // handle response
    }
}
```

## UpdateSubscription

Update subscription for continuous project

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ContinuousProject.UpdateSubscription(ctx, operations.UpdateSubscriptionRequest{
        Subscription: shared.Subscription{
            Downgrade: []string{
                "nihil",
                "repellat",
                "quibusdam",
            },
            PaymentMethod: sdk.Int64(149448),
            PeriodEnd: types.MustTimeFromString("2020-05-25T09:38:49.528Z"),
            PlanID: sdk.String("accusantium"),
            PlanName: sdk.String("consequuntur"),
            Price: sdk.String("praesentium"),
            Products: []interface{}{
                "magni",
                "sunt",
                "quo",
            },
            ScheduleName: sdk.String("illum"),
            ScheduleStart: types.MustTimeFromString("2020-07-30T23:39:27.609Z"),
            SubscriptionID: sdk.String("ea"),
            Upgrade: []string{
                "odit",
                "ea",
                "accusantium",
            },
            WithTrial: sdk.String("ab"),
        },
        ID: 982575,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Subscription != nil {
        // handle response
    }
}
```

## UpdateSubscriptionPaymentMethod

Update subscription payment method for continuous project

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ContinuousProject.UpdateSubscriptionPaymentMethod(ctx, operations.UpdateSubscriptionPaymentMethodRequest{
        Subscription: shared.Subscription{
            Downgrade: []string{
                "ipsam",
                "voluptate",
                "autem",
            },
            PaymentMethod: sdk.Int64(722056),
            PeriodEnd: types.MustTimeFromString("2022-02-18T18:29:26.833Z"),
            PlanID: sdk.String("nemo"),
            PlanName: sdk.String("voluptatibus"),
            Price: sdk.String("perferendis"),
            Products: []interface{}{
                "amet",
                "aut",
                "cumque",
                "corporis",
            },
            ScheduleName: sdk.String("hic"),
            ScheduleStart: types.MustTimeFromString("2021-07-02T12:00:47.197Z"),
            SubscriptionID: sdk.String("dolores"),
            Upgrade: []string{
                "totam",
                "dignissimos",
            },
            WithTrial: sdk.String("eaque"),
        },
        ID: 338985,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Subscription != nil {
        // handle response
    }
}
```
