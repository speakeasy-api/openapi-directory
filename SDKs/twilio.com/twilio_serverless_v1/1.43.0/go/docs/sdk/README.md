# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [CreateAsset](#createasset) - Create a new Asset resource.
* [CreateBuild](#createbuild) - Create a new Build resource. At least one function version or asset version is required.
* [CreateDeployment](#createdeployment) - Create a new Deployment.
* [CreateEnvironment](#createenvironment) - Create a new environment.
* [CreateFunction](#createfunction) - Create a new Function resource.
* [CreateService](#createservice) - Create a new Service resource.
* [CreateVariable](#createvariable) - Create a new Variable.
* [DeleteAsset](#deleteasset) - Delete an Asset resource.
* [DeleteBuild](#deletebuild) - Delete a Build resource.
* [DeleteEnvironment](#deleteenvironment) - Delete a specific environment.
* [DeleteFunction](#deletefunction) - Delete a Function resource.
* [DeleteService](#deleteservice) - Delete a Service resource.
* [DeleteVariable](#deletevariable) - Delete a specific Variable.
* [FetchAsset](#fetchasset) - Retrieve a specific Asset resource.
* [FetchAssetVersion](#fetchassetversion) - Retrieve a specific Asset Version.
* [FetchBuild](#fetchbuild) - Retrieve a specific Build resource.
* [FetchBuildStatus](#fetchbuildstatus) - Retrieve a specific Build resource.
* [FetchDeployment](#fetchdeployment) - Retrieve a specific Deployment.
* [FetchEnvironment](#fetchenvironment) - Retrieve a specific environment.
* [FetchFunction](#fetchfunction) - Retrieve a specific Function resource.
* [FetchFunctionVersion](#fetchfunctionversion) - Retrieve a specific Function Version resource.
* [FetchFunctionVersionContent](#fetchfunctionversioncontent) - Retrieve a the content of a specific Function Version resource.
* [FetchLog](#fetchlog) - Retrieve a specific log.
* [FetchService](#fetchservice) - Retrieve a specific Service resource.
* [FetchVariable](#fetchvariable) - Retrieve a specific Variable.
* [ListAsset](#listasset) - Retrieve a list of all Assets.
* [ListAssetVersion](#listassetversion) - Retrieve a list of all Asset Versions.
* [ListBuild](#listbuild) - Retrieve a list of all Builds.
* [ListDeployment](#listdeployment) - Retrieve a list of all Deployments.
* [ListEnvironment](#listenvironment) - Retrieve a list of all environments.
* [ListFunction](#listfunction) - Retrieve a list of all Functions.
* [ListFunctionVersion](#listfunctionversion) - Retrieve a list of all Function Version resources.
* [ListLog](#listlog) - Retrieve a list of all logs.
* [ListService](#listservice) - Retrieve a list of all Services.
* [ListVariable](#listvariable) - Retrieve a list of all Variables.
* [UpdateAsset](#updateasset) - Update a specific Asset resource.
* [UpdateFunction](#updatefunction) - Update a specific Function resource.
* [UpdateService](#updateservice) - Update a specific Service resource.
* [UpdateVariable](#updatevariable) - Update a specific Variable.

## CreateAsset

Create a new Asset resource.

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
    res, err := s.SDK.CreateAsset(ctx, operations.CreateAssetRequest{
        RequestBody: &operations.CreateAssetCreateAssetRequest{
            FriendlyName: "distinctio",
        },
        ServiceSid: "quibusdam",
    }, operations.CreateAssetSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ServerlessV1ServiceAsset != nil {
        // handle response
    }
}
```

## CreateBuild

Create a new Build resource. At least one function version or asset version is required.

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
    res, err := s.SDK.CreateBuild(ctx, operations.CreateBuildRequest{
        RequestBody: &operations.CreateBuildCreateBuildRequest{
            AssetVersions: []string{
                "nulla",
                "corrupti",
                "illum",
            },
            Dependencies: sdk.String("vel"),
            FunctionVersions: []string{
                "deserunt",
                "suscipit",
                "iure",
            },
            Runtime: sdk.String("magnam"),
        },
        ServiceSid: "debitis",
    }, operations.CreateBuildSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ServerlessV1ServiceBuild != nil {
        // handle response
    }
}
```

## CreateDeployment

Create a new Deployment.

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
    res, err := s.SDK.CreateDeployment(ctx, operations.CreateDeploymentRequest{
        EnvironmentSid: "ipsa",
        RequestBody: &operations.CreateDeploymentCreateDeploymentRequest{
            BuildSid: sdk.String("delectus"),
        },
        ServiceSid: "tempora",
    }, operations.CreateDeploymentSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ServerlessV1ServiceEnvironmentDeployment != nil {
        // handle response
    }
}
```

## CreateEnvironment

Create a new environment.

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
    res, err := s.SDK.CreateEnvironment(ctx, operations.CreateEnvironmentRequest{
        RequestBody: &operations.CreateEnvironmentCreateEnvironmentRequest{
            DomainSuffix: sdk.String("suscipit"),
            UniqueName: "molestiae",
        },
        ServiceSid: "minus",
    }, operations.CreateEnvironmentSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ServerlessV1ServiceEnvironment != nil {
        // handle response
    }
}
```

## CreateFunction

Create a new Function resource.

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
    res, err := s.SDK.CreateFunction(ctx, operations.CreateFunctionRequest{
        RequestBody: &operations.CreateFunctionCreateFunctionRequest{
            FriendlyName: "placeat",
        },
        ServiceSid: "voluptatum",
    }, operations.CreateFunctionSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ServerlessV1ServiceFunction != nil {
        // handle response
    }
}
```

## CreateService

Create a new Service resource.

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
    res, err := s.SDK.CreateService(ctx, operations.CreateServiceCreateServiceRequest{
        FriendlyName: "iusto",
        IncludeCredentials: sdk.Bool(false),
        UIEditable: sdk.Bool(false),
        UniqueName: "excepturi",
    }, operations.CreateServiceSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ServerlessV1Service != nil {
        // handle response
    }
}
```

## CreateVariable

Create a new Variable.

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
    res, err := s.SDK.CreateVariable(ctx, operations.CreateVariableRequest{
        EnvironmentSid: "nisi",
        RequestBody: &operations.CreateVariableCreateVariableRequest{
            Key: "recusandae",
            Value: "temporibus",
        },
        ServiceSid: "ab",
    }, operations.CreateVariableSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ServerlessV1ServiceEnvironmentVariable != nil {
        // handle response
    }
}
```

## DeleteAsset

Delete an Asset resource.

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
    res, err := s.SDK.DeleteAsset(ctx, operations.DeleteAssetRequest{
        ServiceSid: "quis",
        Sid: "veritatis",
    }, operations.DeleteAssetSecurity{
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

## DeleteBuild

Delete a Build resource.

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
    res, err := s.SDK.DeleteBuild(ctx, operations.DeleteBuildRequest{
        ServiceSid: "deserunt",
        Sid: "perferendis",
    }, operations.DeleteBuildSecurity{
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

## DeleteEnvironment

Delete a specific environment.

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
    res, err := s.SDK.DeleteEnvironment(ctx, operations.DeleteEnvironmentRequest{
        ServiceSid: "ipsam",
        Sid: "repellendus",
    }, operations.DeleteEnvironmentSecurity{
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

## DeleteFunction

Delete a Function resource.

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
    res, err := s.SDK.DeleteFunction(ctx, operations.DeleteFunctionRequest{
        ServiceSid: "sapiente",
        Sid: "quo",
    }, operations.DeleteFunctionSecurity{
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

## DeleteService

Delete a Service resource.

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
    res, err := s.SDK.DeleteService(ctx, operations.DeleteServiceRequest{
        Sid: "odit",
    }, operations.DeleteServiceSecurity{
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

## DeleteVariable

Delete a specific Variable.

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
    res, err := s.SDK.DeleteVariable(ctx, operations.DeleteVariableRequest{
        EnvironmentSid: "at",
        ServiceSid: "at",
        Sid: "maiores",
    }, operations.DeleteVariableSecurity{
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

## FetchAsset

Retrieve a specific Asset resource.

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
    res, err := s.SDK.FetchAsset(ctx, operations.FetchAssetRequest{
        ServiceSid: "molestiae",
        Sid: "quod",
    }, operations.FetchAssetSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ServerlessV1ServiceAsset != nil {
        // handle response
    }
}
```

## FetchAssetVersion

Retrieve a specific Asset Version.

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
    res, err := s.SDK.FetchAssetVersion(ctx, operations.FetchAssetVersionRequest{
        AssetSid: "quod",
        ServiceSid: "esse",
        Sid: "totam",
    }, operations.FetchAssetVersionSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ServerlessV1ServiceAssetAssetVersion != nil {
        // handle response
    }
}
```

## FetchBuild

Retrieve a specific Build resource.

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
    res, err := s.SDK.FetchBuild(ctx, operations.FetchBuildRequest{
        ServiceSid: "porro",
        Sid: "dolorum",
    }, operations.FetchBuildSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ServerlessV1ServiceBuild != nil {
        // handle response
    }
}
```

## FetchBuildStatus

Retrieve a specific Build resource.

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
    res, err := s.SDK.FetchBuildStatus(ctx, operations.FetchBuildStatusRequest{
        ServiceSid: "dicta",
        Sid: "nam",
    }, operations.FetchBuildStatusSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ServerlessV1ServiceBuildBuildStatus != nil {
        // handle response
    }
}
```

## FetchDeployment

Retrieve a specific Deployment.

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
    res, err := s.SDK.FetchDeployment(ctx, operations.FetchDeploymentRequest{
        EnvironmentSid: "officia",
        ServiceSid: "occaecati",
        Sid: "fugit",
    }, operations.FetchDeploymentSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ServerlessV1ServiceEnvironmentDeployment != nil {
        // handle response
    }
}
```

## FetchEnvironment

Retrieve a specific environment.

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
    res, err := s.SDK.FetchEnvironment(ctx, operations.FetchEnvironmentRequest{
        ServiceSid: "deleniti",
        Sid: "hic",
    }, operations.FetchEnvironmentSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ServerlessV1ServiceEnvironment != nil {
        // handle response
    }
}
```

## FetchFunction

Retrieve a specific Function resource.

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
    res, err := s.SDK.FetchFunction(ctx, operations.FetchFunctionRequest{
        ServiceSid: "optio",
        Sid: "totam",
    }, operations.FetchFunctionSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ServerlessV1ServiceFunction != nil {
        // handle response
    }
}
```

## FetchFunctionVersion

Retrieve a specific Function Version resource.

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
    res, err := s.SDK.FetchFunctionVersion(ctx, operations.FetchFunctionVersionRequest{
        FunctionSid: "beatae",
        ServiceSid: "commodi",
        Sid: "molestiae",
    }, operations.FetchFunctionVersionSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ServerlessV1ServiceFunctionFunctionVersion != nil {
        // handle response
    }
}
```

## FetchFunctionVersionContent

Retrieve a the content of a specific Function Version resource.

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
    res, err := s.SDK.FetchFunctionVersionContent(ctx, operations.FetchFunctionVersionContentRequest{
        FunctionSid: "modi",
        ServiceSid: "qui",
        Sid: "impedit",
    }, operations.FetchFunctionVersionContentSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ServerlessV1ServiceFunctionFunctionVersionFunctionVersionContent != nil {
        // handle response
    }
}
```

## FetchLog

Retrieve a specific log.

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
    res, err := s.SDK.FetchLog(ctx, operations.FetchLogRequest{
        EnvironmentSid: "cum",
        ServiceSid: "esse",
        Sid: "ipsum",
    }, operations.FetchLogSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ServerlessV1ServiceEnvironmentLog != nil {
        // handle response
    }
}
```

## FetchService

Retrieve a specific Service resource.

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
    res, err := s.SDK.FetchService(ctx, operations.FetchServiceRequest{
        Sid: "excepturi",
    }, operations.FetchServiceSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ServerlessV1Service != nil {
        // handle response
    }
}
```

## FetchVariable

Retrieve a specific Variable.

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
    res, err := s.SDK.FetchVariable(ctx, operations.FetchVariableRequest{
        EnvironmentSid: "aspernatur",
        ServiceSid: "perferendis",
        Sid: "ad",
    }, operations.FetchVariableSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ServerlessV1ServiceEnvironmentVariable != nil {
        // handle response
    }
}
```

## ListAsset

Retrieve a list of all Assets.

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
    res, err := s.SDK.ListAsset(ctx, operations.ListAssetRequest{
        Page: sdk.Int64(617636),
        PageSize: sdk.Int64(149675),
        PageToken: sdk.String("iste"),
        ServiceSid: "dolor",
    }, operations.ListAssetSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAssetResponse != nil {
        // handle response
    }
}
```

## ListAssetVersion

Retrieve a list of all Asset Versions.

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
    res, err := s.SDK.ListAssetVersion(ctx, operations.ListAssetVersionRequest{
        AssetSid: "natus",
        Page: sdk.Int64(386489),
        PageSize: sdk.Int64(943749),
        PageToken: sdk.String("saepe"),
        ServiceSid: "fuga",
    }, operations.ListAssetVersionSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAssetVersionResponse != nil {
        // handle response
    }
}
```

## ListBuild

Retrieve a list of all Builds.

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
    res, err := s.SDK.ListBuild(ctx, operations.ListBuildRequest{
        Page: sdk.Int64(449950),
        PageSize: sdk.Int64(359508),
        PageToken: sdk.String("iste"),
        ServiceSid: "iure",
    }, operations.ListBuildSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListBuildResponse != nil {
        // handle response
    }
}
```

## ListDeployment

Retrieve a list of all Deployments.

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
    res, err := s.SDK.ListDeployment(ctx, operations.ListDeploymentRequest{
        EnvironmentSid: "saepe",
        Page: sdk.Int64(697631),
        PageSize: sdk.Int64(99280),
        PageToken: sdk.String("ipsa"),
        ServiceSid: "reiciendis",
    }, operations.ListDeploymentSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDeploymentResponse != nil {
        // handle response
    }
}
```

## ListEnvironment

Retrieve a list of all environments.

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
    res, err := s.SDK.ListEnvironment(ctx, operations.ListEnvironmentRequest{
        Page: sdk.Int64(666767),
        PageSize: sdk.Int64(653140),
        PageToken: sdk.String("laborum"),
        ServiceSid: "dolores",
    }, operations.ListEnvironmentSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListEnvironmentResponse != nil {
        // handle response
    }
}
```

## ListFunction

Retrieve a list of all Functions.

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
    res, err := s.SDK.ListFunction(ctx, operations.ListFunctionRequest{
        Page: sdk.Int64(210382),
        PageSize: sdk.Int64(358152),
        PageToken: sdk.String("explicabo"),
        ServiceSid: "nobis",
    }, operations.ListFunctionSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListFunctionResponse != nil {
        // handle response
    }
}
```

## ListFunctionVersion

Retrieve a list of all Function Version resources.

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
    res, err := s.SDK.ListFunctionVersion(ctx, operations.ListFunctionVersionRequest{
        FunctionSid: "enim",
        Page: sdk.Int64(607831),
        PageSize: sdk.Int64(363711),
        PageToken: sdk.String("minima"),
        ServiceSid: "excepturi",
    }, operations.ListFunctionVersionSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListFunctionVersionResponse != nil {
        // handle response
    }
}
```

## ListLog

Retrieve a list of all logs.

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
    res, err := s.SDK.ListLog(ctx, operations.ListLogRequest{
        EndDate: types.MustTimeFromString("2022-07-24T21:51:02.112Z"),
        EnvironmentSid: "culpa",
        FunctionSid: sdk.String("doloribus"),
        Page: sdk.Int64(958950),
        PageSize: sdk.Int64(102044),
        PageToken: sdk.String("mollitia"),
        ServiceSid: "dolorem",
        StartDate: types.MustTimeFromString("2022-09-05T05:51:25.673Z"),
    }, operations.ListLogSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLogResponse != nil {
        // handle response
    }
}
```

## ListService

Retrieve a list of all Services.

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
    res, err := s.SDK.ListService(ctx, operations.ListServiceRequest{
        Page: sdk.Int64(995300),
        PageSize: sdk.Int64(653108),
        PageToken: sdk.String("occaecati"),
    }, operations.ListServiceSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListServiceResponse != nil {
        // handle response
    }
}
```

## ListVariable

Retrieve a list of all Variables.

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
    res, err := s.SDK.ListVariable(ctx, operations.ListVariableRequest{
        EnvironmentSid: "numquam",
        Page: sdk.Int64(414369),
        PageSize: sdk.Int64(466311),
        PageToken: sdk.String("molestiae"),
        ServiceSid: "velit",
    }, operations.ListVariableSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListVariableResponse != nil {
        // handle response
    }
}
```

## UpdateAsset

Update a specific Asset resource.

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
    res, err := s.SDK.UpdateAsset(ctx, operations.UpdateAssetRequest{
        RequestBody: &operations.UpdateAssetUpdateAssetRequest{
            FriendlyName: "error",
        },
        ServiceSid: "quia",
        Sid: "quis",
    }, operations.UpdateAssetSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ServerlessV1ServiceAsset != nil {
        // handle response
    }
}
```

## UpdateFunction

Update a specific Function resource.

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
    res, err := s.SDK.UpdateFunction(ctx, operations.UpdateFunctionRequest{
        RequestBody: &operations.UpdateFunctionUpdateFunctionRequest{
            FriendlyName: "vitae",
        },
        ServiceSid: "laborum",
        Sid: "animi",
    }, operations.UpdateFunctionSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ServerlessV1ServiceFunction != nil {
        // handle response
    }
}
```

## UpdateService

Update a specific Service resource.

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
    res, err := s.SDK.UpdateService(ctx, operations.UpdateServiceRequest{
        RequestBody: &operations.UpdateServiceUpdateServiceRequest{
            FriendlyName: sdk.String("enim"),
            IncludeCredentials: sdk.Bool(false),
            UIEditable: sdk.Bool(false),
        },
        Sid: "odit",
    }, operations.UpdateServiceSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ServerlessV1Service != nil {
        // handle response
    }
}
```

## UpdateVariable

Update a specific Variable.

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
    res, err := s.SDK.UpdateVariable(ctx, operations.UpdateVariableRequest{
        EnvironmentSid: "quo",
        RequestBody: &operations.UpdateVariableUpdateVariableRequest{
            Key: sdk.String("sequi"),
            Value: sdk.String("tenetur"),
        },
        ServiceSid: "ipsam",
        Sid: "id",
    }, operations.UpdateVariableSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ServerlessV1ServiceEnvironmentVariable != nil {
        // handle response
    }
}
```
