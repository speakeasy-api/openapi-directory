# Project

### Available Operations

* [AssignCM](#assigncm) - Assign a CM to the project
* [CancelProject](#cancelproject) - Cancel your translation project
* [CreateProjectJSON](#createprojectjson) - Create a new project
* [CreateProjectMultipart](#createprojectmultipart) - Create a new project
* [DeleteProject](#deleteproject) - Delete your translation project
* [DeliverProject](#deliverproject) - Deliver project
* [Download](#download) - Download your translated project
* [DownloadHTMLInvoice](#downloadhtmlinvoice) - Download project invoice (HTML)
* [DownloadLanguage](#downloadlanguage) - Download your translated project language
* [DownloadPdfInvoice](#downloadpdfinvoice) - Download project invoice (PDF)
* [GetInvoice](#getinvoice) - View project invoice
* [GetProgress](#getprogress) - View progress of a project
* [GetProject](#getproject) - View a translation project
* [GetProjectVendors](#getprojectvendors) - Get a list of vendors.
* [GetProjects](#getprojects) - View your translation projects
* [GetQuoteIDFromInternalID](#getquoteidfrominternalid) - Get Quote Id
* [GetVendorProjects](#getvendorprojects) - List projects as a vendor
* [GetVendorProjectsByUserID](#getvendorprojectsbyuserid) - Get a list of user/vendor projects
* [LaunchProject](#launchproject) - Launch your translation project
* [Package](#package) - Package your translated project
* [PackageLanguage](#packagelanguage) - Package your translated project language
* [RecreateProject](#recreateproject) - Recreate your translation project from scratch. This is a risky action, you will lose current translations.
* [SendQuoteEmail](#sendquoteemail) - Send a quote email
* [SubmitProjectReports](#submitprojectreports) - Submit feedback report for a project
* [TrackPackage](#trackpackage) - Track translation packaging status
* [TriggerCallback](#triggercallback) - Trigger a call to your callback URL related to this project.
* [UpdateProject](#updateproject) - Update project info and settings

## AssignCM

Assign a CM to the project

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
    res, err := s.Project.AssignCM(ctx, operations.AssignCMRequest{
        Cm: &shared.Cm{
            UserID: sdk.Int64(240829),
        },
        ID: 677263,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OperationStatus != nil {
        // handle response
    }
}
```

## CancelProject

If you haven't launched your translation project yet, we will delete it. If MotaWord already started working on your project, we will cancel the project and refund the volume that we haven't worked on yet.

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
    res, err := s.Project.CancelProject(ctx, operations.CancelProjectRequest{
        CancelProjectRequest: &shared.CancelProjectRequest{
            Reason: sdk.String("architecto"),
        },
        ID: 63038,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OperationStatus != nil {
        // handle response
    }
}
```

## CreateProjectJSON

Create a new translation project. Projects are not launched (you are not charged) until you `/launch` the created project.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Project.CreateProjectJSON(ctx, shared.NewProject{
        CallbackURL: sdk.String("aut"),
        CouponCode: sdk.String("quas"),
        Custom: []string{
            "consequatur",
            "est",
            "repellendus",
            "porro",
        },
        Documents: []byte("doloribus"),
        Glossaries: []byte("ut"),
        SourceLanguage: sdk.String("facilis"),
        Styleguides: []byte("cupiditate"),
        TargetLanguages: []string{
            "quae",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Project != nil {
        // handle response
    }
}
```

## CreateProjectMultipart

Create a new translation project. Projects are not launched (you are not charged) until you `/launch` the created project.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Project.CreateProjectMultipart(ctx, shared.NewProject1{
        CallbackURL: sdk.String("laudantium"),
        CouponCode: sdk.String("odio"),
        Custom: []string{
            "voluptatibus",
            "quisquam",
            "vero",
        },
        Documents: &shared.NewProjectDocuments{
            Content: []byte("omnis"),
            Documents: "quis",
        },
        Glossaries: &shared.NewProjectGlossaries{
            Content: []byte("ipsum"),
            Glossaries: "delectus",
        },
        SourceLanguage: sdk.String("voluptate"),
        Styleguides: &shared.NewProjectStyleguides{
            Content: []byte("consectetur"),
            Styleguides: "vero",
        },
        TargetLanguages: []string{
            "dignissimos",
            "hic",
            "distinctio",
            "quod",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Project != nil {
        // handle response
    }
}
```

## DeleteProject

If you haven't launched your translation project yet, we will delete it. If MotaWord already started working on your project, we will cancel the project and refund the volume that we haven't worked on yet.

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
    res, err := s.Project.DeleteProject(ctx, operations.DeleteProjectRequest{
        ID: 486160,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OperationStatus != nil {
        // handle response
    }
}
```

## DeliverProject

Deliver project to the owner of the project. You can also download your translations in `/package` and `/download` endpoints.

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
    res, err := s.Project.DeliverProject(ctx, operations.DeliverProjectRequest{
        ID: 630448,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OperationStatus != nil {
        // handle response
    }
}
```

## Download

Download the latest translation package. You must have requested a `/package` call beforehand and wait until the packaging status is 'completed'.

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
    res, err := s.Project.Download(ctx, operations.DownloadRequest{
        ID: 708548,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Download200ApplicationOctetStreamBinaryString != nil {
        // handle response
    }
}
```

## DownloadHTMLInvoice

Download your project invoice as HTML. This is useful when you want to show your users the invoice in a webpage.

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
    res, err := s.Project.DownloadHTMLInvoice(ctx, operations.DownloadHTMLInvoiceRequest{
        ID: 874288,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DownloadHTMLInvoice200TextHTMLString != nil {
        // handle response
    }
}
```

## DownloadLanguage

Download the latest translation package for your target language. You must have requested a `/package` call beforehand and wait until the packaging status is 'completed'.

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
    res, err := s.Project.DownloadLanguage(ctx, operations.DownloadLanguageRequest{
        ID: 498140,
        Language: "dolore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DownloadLanguage200ApplicationOctetStreamBinaryString != nil {
        // handle response
    }
}
```

## DownloadPdfInvoice

Download your project invoice as PDF. Your invoice may be in "unpaid" status, in which case youn can see the payment instructions in the PDF file.

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
    res, err := s.Project.DownloadPdfInvoice(ctx, operations.DownloadPdfInvoiceRequest{
        ID: 844550,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DownloadPdfInvoice200ApplicationPdfBinaryString != nil {
        // handle response
    }
}
```

## GetInvoice

View your invoice details for your translation project.

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
    res, err := s.Project.GetInvoice(ctx, operations.GetInvoiceRequest{
        ID: 848944,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Invoice != nil {
        // handle response
    }
}
```

## GetProgress

Monitor the translation progress of an already launched project in real-time.

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
    res, err := s.Project.GetProgress(ctx, operations.GetProgressRequest{
        ID: 194342,
        Raw: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Progress != nil {
        // handle response
    }
}
```

## GetProject

View the details of a translation project in your account.

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
    res, err := s.Project.GetProject(ctx, operations.GetProjectRequest{
        ID: 617877,
        With: []GetProjectWithEnum{
            operations.GetProjectWithEnumClient,
            operations.GetProjectWithEnumScore,
            operations.GetProjectWithEnumVendor,
            operations.GetProjectWithEnumScore,
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Project != nil {
        // handle response
    }
}
```

## GetProjectVendors

Get a list of vendors.

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
    res, err := s.Project.GetProjectVendors(ctx, operations.GetProjectVendorsRequest{
        ProjectID: 148141,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserList != nil {
        // handle response
    }
}
```

## GetProjects

View the translation projects ordered in your account. If you have the related permission (configured by your account administrator), you can view the projects of your colleagues under the same company account.

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
    res, err := s.Project.GetProjects(ctx, operations.GetProjectsRequest{
        OrderBy: operations.GetProjectsOrderByEnumPrice.ToPointer(),
        OrderType: shared.ListOrderTypeEnumDesc.ToPointer(),
        Page: sdk.Int64(985033),
        PerPage: sdk.Int64(478370),
        Status: []shared.ProjectStatusEnum{
            shared.ProjectStatusEnumCompleted,
            shared.ProjectStatusEnumPending,
            shared.ProjectStatusEnumTranslated,
            shared.ProjectStatusEnumStarted,
        },
        With: []GetProjectsWithEnum{
            operations.GetProjectsWithEnumClient,
            operations.GetProjectsWithEnumClient,
        },
        WithCompleted: sdk.Bool(false),
        WithPending: sdk.Bool(false),
        WithStarted: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProjectList != nil {
        // handle response
    }
}
```

## GetQuoteIDFromInternalID

Get Quote Id

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
    res, err := s.Project.GetQuoteIDFromInternalID(ctx, operations.GetQuoteIDFromInternalIDRequest{
        ProjectID: 428224,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProjectID != nil {
        // handle response
    }
}
```

## GetVendorProjects

Get a list of projects that are available to you to work on as a vendor. This is not a list of projects that you ordered as a customer.

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
    res, err := s.Project.GetVendorProjects(ctx, operations.GetVendorProjectsRequest{
        Completed: sdk.Bool(false),
        Joined: sdk.Bool(false),
        Page: sdk.Int64(822118),
        PerPage: sdk.Int64(297842),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProjectList != nil {
        // handle response
    }
}
```

## GetVendorProjectsByUserID

Get a list of user/vendor projects

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
    res, err := s.Project.GetVendorProjectsByUserID(ctx, operations.GetVendorProjectsByUserIDRequest{
        Completed: sdk.Bool(false),
        Joined: sdk.Bool(false),
        Page: sdk.Int64(189848),
        PerPage: sdk.Int64(401132),
        UserID: 511319,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProjectList != nil {
        // handle response
    }
}
```

## LaunchProject

Launch your translation project so MotaWord can actually start working on your translation.

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
    res, err := s.Project.LaunchProject(ctx, operations.LaunchProjectRequest{
        ProjectPayment: &shared.ProjectPayment{
            Bin: sdk.String("dicta"),
            BudgetCode: sdk.String("dolor"),
            CardID: sdk.Int64(980700),
            PaymentCode: sdk.String("quasi"),
            PaymentMethod: shared.ProjectPaymentPaymentMethodEnumApp.ToPointer(),
            StripeToken: sdk.String("nulla"),
        },
        ID: 569211,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProjectLaunchResponse != nil {
        // handle response
    }
}
```

## Package

Package the translations in your project, prepare translated documents and make it ready to be downloaded. Once packaged, you can download your translated project.

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
    res, err := s.Project.Package(ctx, operations.PackageRequest{
        Async: sdk.Int64(972920),
        ID: 343605,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Package200ApplicationOctetStreamBinaryString != nil {
        // handle response
    }
}
```

## PackageLanguage

Package the translations in your project for a specific target language, prepare translated documents and make it ready to be downloaded. Once packaged, you can download your translated project in this target language.

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
    res, err := s.Project.PackageLanguage(ctx, operations.PackageLanguageRequest{
        Async: sdk.Int64(960835),
        ID: 788873,
        Language: "saepe",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Package != nil {
        // handle response
    }
}
```

## RecreateProject

Recreate your translation project from scratch. This is a risky action, you will lose current translations.

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
    res, err := s.Project.RecreateProject(ctx, operations.RecreateProjectRequest{
        ID: 411372,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OperationStatus != nil {
        // handle response
    }
}
```

## SendQuoteEmail

Send a quote email

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
    res, err := s.Project.SendQuoteEmail(ctx, operations.SendQuoteEmailRequest{
        ID: 774048,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OperationStatus != nil {
        // handle response
    }
}
```

## SubmitProjectReports

Submit feedback report for a project

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
    res, err := s.Project.SubmitProjectReports(ctx, operations.SubmitProjectReportsRequest{
        ReportContent: &shared.ReportContent{
            ActivityType: sdk.String("corporis"),
            Message: sdk.String("veniam"),
        },
        ID: 399499,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OperationStatus != nil {
        // handle response
    }
}
```

## TrackPackage

Track the packaging status of your translations, by using the `key` from packaging request. Once packaging is completed, you can download your translations via `/download` endpoints.

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
    res, err := s.Project.TrackPackage(ctx, operations.TrackPackageRequest{
        ID: 81101,
        Key: sdk.String("magnam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PackageStatus != nil {
        // handle response
    }
}
```

## TriggerCallback

Trigger a call to your callback URL related to this project.

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
    res, err := s.Project.TriggerCallback(ctx, operations.TriggerCallbackRequest{
        ActionType: operations.TriggerCallbackActionTypeEnumProofread,
        ID: 775220,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CallbackResult != nil {
        // handle response
    }
}
```

## UpdateProject

Update project info and settings

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
    res, err := s.Project.UpdateProject(ctx, operations.UpdateProjectRequest{
        ProjectUpdate: &shared.ProjectUpdate{
            CallbackURL: sdk.String("consectetur"),
            CouponCode: sdk.String("recusandae"),
            Custom: []string{
                "minima",
            },
            SourceLanguage: sdk.String("eaque"),
            TargetLanguages: []string{
                "libero",
                "aut",
                "aut",
                "deleniti",
            },
        },
        ID: 770581,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Project != nil {
        // handle response
    }
}
```
