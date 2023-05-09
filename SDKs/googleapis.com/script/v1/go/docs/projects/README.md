# Projects

### Available Operations

* [ScriptProjectsCreate](#scriptprojectscreate) - Creates a new, empty script project with no script files and a base manifest file.
* [ScriptProjectsDeploymentsCreate](#scriptprojectsdeploymentscreate) - Creates a deployment of an Apps Script project.
* [ScriptProjectsDeploymentsDelete](#scriptprojectsdeploymentsdelete) - Deletes a deployment of an Apps Script project.
* [ScriptProjectsDeploymentsGet](#scriptprojectsdeploymentsget) - Gets a deployment of an Apps Script project.
* [ScriptProjectsDeploymentsList](#scriptprojectsdeploymentslist) - Lists the deployments of an Apps Script project.
* [ScriptProjectsDeploymentsUpdate](#scriptprojectsdeploymentsupdate) - Updates a deployment of an Apps Script project.
* [ScriptProjectsGet](#scriptprojectsget) - Gets a script project's metadata.
* [ScriptProjectsGetContent](#scriptprojectsgetcontent) - Gets the content of the script project, including the code source and metadata for each script file.
* [ScriptProjectsGetMetrics](#scriptprojectsgetmetrics) - Get metrics data for scripts, such as number of executions and active users.
* [ScriptProjectsUpdateContent](#scriptprojectsupdatecontent) - Updates the content of the specified script project. This content is stored as the HEAD version, and is used when the script is executed as a trigger, in the script editor, in add-on preview mode, or as a web app or Apps Script API in development mode. This clears all the existing files in the project.
* [ScriptProjectsVersionsCreate](#scriptprojectsversionscreate) - Creates a new immutable version using the current code, with a unique version number.
* [ScriptProjectsVersionsGet](#scriptprojectsversionsget) - Gets a version of a script project.
* [ScriptProjectsVersionsList](#scriptprojectsversionslist) - List the versions of a script project.

## ScriptProjectsCreate

Creates a new, empty script project with no script files and a base manifest file.

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
    res, err := s.Projects.ScriptProjectsCreate(ctx, operations.ScriptProjectsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        CreateProjectRequest: &shared.CreateProjectRequest{
            ParentID: sdk.String("est"),
            Title: sdk.String("Miss"),
        },
        AccessToken: sdk.String("laborum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("dolorem"),
        Fields: sdk.String("corporis"),
        Key: sdk.String("explicabo"),
        OauthToken: sdk.String("nobis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("enim"),
        UploadType: sdk.String("omnis"),
        UploadProtocol: sdk.String("nemo"),
    }, operations.ScriptProjectsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Project != nil {
        // handle response
    }
}
```

## ScriptProjectsDeploymentsCreate

Creates a deployment of an Apps Script project.

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
    res, err := s.Projects.ScriptProjectsDeploymentsCreate(ctx, operations.ScriptProjectsDeploymentsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        DeploymentConfig: &shared.DeploymentConfig{
            Description: sdk.String("excepturi"),
            ManifestFileName: sdk.String("accusantium"),
            ScriptID: sdk.String("iure"),
            VersionNumber: sdk.Int(634274),
        },
        AccessToken: sdk.String("doloribus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("architecto"),
        Fields: sdk.String("mollitia"),
        Key: sdk.String("dolorem"),
        OauthToken: sdk.String("culpa"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("consequuntur"),
        ScriptID: "repellat",
        UploadType: sdk.String("mollitia"),
        UploadProtocol: sdk.String("occaecati"),
    }, operations.ScriptProjectsDeploymentsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Deployment != nil {
        // handle response
    }
}
```

## ScriptProjectsDeploymentsDelete

Deletes a deployment of an Apps Script project.

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
    res, err := s.Projects.ScriptProjectsDeploymentsDelete(ctx, operations.ScriptProjectsDeploymentsDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("commodi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("molestiae"),
        DeploymentID: "velit",
        Fields: sdk.String("error"),
        Key: sdk.String("quia"),
        OauthToken: sdk.String("quis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vitae"),
        ScriptID: "laborum",
        UploadType: sdk.String("animi"),
        UploadProtocol: sdk.String("enim"),
    }, operations.ScriptProjectsDeploymentsDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## ScriptProjectsDeploymentsGet

Gets a deployment of an Apps Script project.

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
    res, err := s.Projects.ScriptProjectsDeploymentsGet(ctx, operations.ScriptProjectsDeploymentsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("quo"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("tenetur"),
        DeploymentID: "ipsam",
        Fields: sdk.String("id"),
        Key: sdk.String("possimus"),
        OauthToken: sdk.String("aut"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quasi"),
        ScriptID: "error",
        UploadType: sdk.String("temporibus"),
        UploadProtocol: sdk.String("laborum"),
    }, operations.ScriptProjectsDeploymentsGetSecurity{
        Option1: &operations.ScriptProjectsDeploymentsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Deployment != nil {
        // handle response
    }
}
```

## ScriptProjectsDeploymentsList

Lists the deployments of an Apps Script project.

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
    res, err := s.Projects.ScriptProjectsDeploymentsList(ctx, operations.ScriptProjectsDeploymentsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("reiciendis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("vero"),
        Fields: sdk.String("nihil"),
        Key: sdk.String("praesentium"),
        OauthToken: sdk.String("voluptatibus"),
        PageSize: sdk.Int64(55714),
        PageToken: sdk.String("omnis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptate"),
        ScriptID: "cum",
        UploadType: sdk.String("perferendis"),
        UploadProtocol: sdk.String("doloremque"),
    }, operations.ScriptProjectsDeploymentsListSecurity{
        Option1: &operations.ScriptProjectsDeploymentsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDeploymentsResponse != nil {
        // handle response
    }
}
```

## ScriptProjectsDeploymentsUpdate

Updates a deployment of an Apps Script project.

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
    res, err := s.Projects.ScriptProjectsDeploymentsUpdate(ctx, operations.ScriptProjectsDeploymentsUpdateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        UpdateDeploymentRequest: &shared.UpdateDeploymentRequest{
            DeploymentConfig: &shared.DeploymentConfig{
                Description: sdk.String("ut"),
                ManifestFileName: sdk.String("maiores"),
                ScriptID: sdk.String("dicta"),
                VersionNumber: sdk.Int(359444),
            },
        },
        AccessToken: sdk.String("dolore"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dicta"),
        DeploymentID: "harum",
        Fields: sdk.String("enim"),
        Key: sdk.String("accusamus"),
        OauthToken: sdk.String("commodi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("repudiandae"),
        ScriptID: "quae",
        UploadType: sdk.String("ipsum"),
        UploadProtocol: sdk.String("quidem"),
    }, operations.ScriptProjectsDeploymentsUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Deployment != nil {
        // handle response
    }
}
```

## ScriptProjectsGet

Gets a script project's metadata.

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
    res, err := s.Projects.ScriptProjectsGet(ctx, operations.ScriptProjectsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("excepturi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("modi"),
        Fields: sdk.String("praesentium"),
        Key: sdk.String("rem"),
        OauthToken: sdk.String("voluptates"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quasi"),
        ScriptID: "repudiandae",
        UploadType: sdk.String("sint"),
        UploadProtocol: sdk.String("veritatis"),
    }, operations.ScriptProjectsGetSecurity{
        Option1: &operations.ScriptProjectsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
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

## ScriptProjectsGetContent

Gets the content of the script project, including the code source and metadata for each script file.

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
    res, err := s.Projects.ScriptProjectsGetContent(ctx, operations.ScriptProjectsGetContentRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("incidunt"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("consequatur"),
        Fields: sdk.String("est"),
        Key: sdk.String("quibusdam"),
        OauthToken: sdk.String("explicabo"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deserunt"),
        ScriptID: "distinctio",
        UploadType: sdk.String("quibusdam"),
        UploadProtocol: sdk.String("labore"),
        VersionNumber: sdk.Int64(264730),
    }, operations.ScriptProjectsGetContentSecurity{
        Option1: &operations.ScriptProjectsGetContentSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Content != nil {
        // handle response
    }
}
```

## ScriptProjectsGetMetrics

Get metrics data for scripts, such as number of executions and active users.

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
    res, err := s.Projects.ScriptProjectsGetMetrics(ctx, operations.ScriptProjectsGetMetricsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("aliquid"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quos"),
        Fields: sdk.String("perferendis"),
        Key: sdk.String("magni"),
        MetricsFilterDeploymentID: sdk.String("assumenda"),
        MetricsGranularity: operations.ScriptProjectsGetMetricsMetricsGranularityEnumWeekly.ToPointer(),
        OauthToken: sdk.String("alias"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fugit"),
        ScriptID: "dolorum",
        UploadType: sdk.String("excepturi"),
        UploadProtocol: sdk.String("tempora"),
    }, operations.ScriptProjectsGetMetricsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Metrics != nil {
        // handle response
    }
}
```

## ScriptProjectsUpdateContent

Updates the content of the specified script project. This content is stored as the HEAD version, and is used when the script is executed as a trigger, in the script editor, in add-on preview mode, or as a web app or Apps Script API in development mode. This clears all the existing files in the project.

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
    res, err := s.Projects.ScriptProjectsUpdateContent(ctx, operations.ScriptProjectsUpdateContentRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Content: &shared.Content{
            Files: []shared.File{
                shared.File{
                    CreateTime: sdk.String("labore"),
                    FunctionSet: &shared.GoogleAppsScriptTypeFunctionSet{
                        Values: []shared.GoogleAppsScriptTypeFunction{
                            shared.GoogleAppsScriptTypeFunction{
                                Name: sdk.String("Ethel Roob"),
                                Parameters: []string{
                                    "necessitatibus",
                                    "sint",
                                    "officia",
                                },
                            },
                            shared.GoogleAppsScriptTypeFunction{
                                Name: sdk.String("Raquel Wilderman"),
                                Parameters: []string{
                                    "illum",
                                    "maiores",
                                },
                            },
                            shared.GoogleAppsScriptTypeFunction{
                                Name: sdk.String("Keith Gulgowski"),
                                Parameters: []string{
                                    "aliquid",
                                    "laborum",
                                },
                            },
                            shared.GoogleAppsScriptTypeFunction{
                                Name: sdk.String("Alfred McClure"),
                                Parameters: []string{
                                    "quidem",
                                    "provident",
                                    "nam",
                                    "id",
                                },
                            },
                        },
                    },
                    LastModifyUser: &shared.GoogleAppsScriptTypeUser{
                        Domain: sdk.String("blanditiis"),
                        Email: sdk.String("Verlie.Feeney@yahoo.com"),
                        Name: sdk.String("Ada Moen IV"),
                        PhotoURL: sdk.String("magnam"),
                    },
                    Name: sdk.String("Alfonso Green"),
                    Source: sdk.String("natus"),
                    Type: shared.FileTypeEnumHTML.ToPointer(),
                    UpdateTime: sdk.String("eum"),
                },
                shared.File{
                    CreateTime: sdk.String("vero"),
                    FunctionSet: &shared.GoogleAppsScriptTypeFunctionSet{
                        Values: []shared.GoogleAppsScriptTypeFunction{
                            shared.GoogleAppsScriptTypeFunction{
                                Name: sdk.String("Danielle Bosco"),
                                Parameters: []string{
                                    "quos",
                                    "sint",
                                    "accusantium",
                                },
                            },
                        },
                    },
                    LastModifyUser: &shared.GoogleAppsScriptTypeUser{
                        Domain: sdk.String("mollitia"),
                        Email: sdk.String("Mack.Hammes@hotmail.com"),
                        Name: sdk.String("Ms. Fred Hilll"),
                        PhotoURL: sdk.String("debitis"),
                    },
                    Name: sdk.String("Jasmine Lind"),
                    Source: sdk.String("architecto"),
                    Type: shared.FileTypeEnumEnumTypeUnspecified.ToPointer(),
                    UpdateTime: sdk.String("repudiandae"),
                },
                shared.File{
                    CreateTime: sdk.String("ullam"),
                    FunctionSet: &shared.GoogleAppsScriptTypeFunctionSet{
                        Values: []shared.GoogleAppsScriptTypeFunction{
                            shared.GoogleAppsScriptTypeFunction{
                                Name: sdk.String("Kristie Spencer"),
                                Parameters: []string{
                                    "accusantium",
                                    "consequuntur",
                                    "praesentium",
                                    "natus",
                                },
                            },
                            shared.GoogleAppsScriptTypeFunction{
                                Name: sdk.String("Joan Satterfield"),
                                Parameters: []string{
                                    "ea",
                                    "excepturi",
                                    "odit",
                                    "ea",
                                },
                            },
                            shared.GoogleAppsScriptTypeFunction{
                                Name: sdk.String("Virginia Wunsch"),
                                Parameters: []string{
                                    "autem",
                                    "nam",
                                },
                            },
                        },
                    },
                    LastModifyUser: &shared.GoogleAppsScriptTypeUser{
                        Domain: sdk.String("eaque"),
                        Email: sdk.String("Freddie85@hotmail.com"),
                        Name: sdk.String("Jennifer Runolfsdottir"),
                        PhotoURL: sdk.String("libero"),
                    },
                    Name: sdk.String("Ernest Hayes"),
                    Source: sdk.String("eaque"),
                    Type: shared.FileTypeEnumServerJs.ToPointer(),
                    UpdateTime: sdk.String("nesciunt"),
                },
            },
            ScriptID: sdk.String("eos"),
        },
        AccessToken: sdk.String("perferendis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("minus"),
        Fields: sdk.String("quam"),
        Key: sdk.String("dolor"),
        OauthToken: sdk.String("vero"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nostrum"),
        ScriptID: "hic",
        UploadType: sdk.String("recusandae"),
        UploadProtocol: sdk.String("omnis"),
    }, operations.ScriptProjectsUpdateContentSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Content != nil {
        // handle response
    }
}
```

## ScriptProjectsVersionsCreate

Creates a new immutable version using the current code, with a unique version number.

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
    res, err := s.Projects.ScriptProjectsVersionsCreate(ctx, operations.ScriptProjectsVersionsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Version: &shared.Version{
            CreateTime: sdk.String("perspiciatis"),
            Description: sdk.String("voluptatem"),
            ScriptID: sdk.String("porro"),
            VersionNumber: sdk.Int(164694),
        },
        AccessToken: sdk.String("blanditiis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("eaque"),
        Fields: sdk.String("occaecati"),
        Key: sdk.String("rerum"),
        OauthToken: sdk.String("adipisci"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("asperiores"),
        ScriptID: "earum",
        UploadType: sdk.String("modi"),
        UploadProtocol: sdk.String("iste"),
    }, operations.ScriptProjectsVersionsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Version != nil {
        // handle response
    }
}
```

## ScriptProjectsVersionsGet

Gets a version of a script project.

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
    res, err := s.Projects.ScriptProjectsVersionsGet(ctx, operations.ScriptProjectsVersionsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("deleniti"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("provident"),
        Fields: sdk.String("nobis"),
        Key: sdk.String("libero"),
        OauthToken: sdk.String("delectus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quaerat"),
        ScriptID: "quos",
        UploadType: sdk.String("aliquid"),
        UploadProtocol: sdk.String("dolorem"),
        VersionNumber: 209843,
    }, operations.ScriptProjectsVersionsGetSecurity{
        Option1: &operations.ScriptProjectsVersionsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Version != nil {
        // handle response
    }
}
```

## ScriptProjectsVersionsList

List the versions of a script project.

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
    res, err := s.Projects.ScriptProjectsVersionsList(ctx, operations.ScriptProjectsVersionsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("qui"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("hic"),
        Fields: sdk.String("excepturi"),
        Key: sdk.String("cum"),
        OauthToken: sdk.String("voluptate"),
        PageSize: sdk.Int64(490459),
        PageToken: sdk.String("reiciendis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("amet"),
        ScriptID: "dolorum",
        UploadType: sdk.String("numquam"),
        UploadProtocol: sdk.String("veritatis"),
    }, operations.ScriptProjectsVersionsListSecurity{
        Option1: &operations.ScriptProjectsVersionsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListVersionsResponse != nil {
        // handle response
    }
}
```
