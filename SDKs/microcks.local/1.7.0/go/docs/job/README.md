# Job

## Overview

Operations related to Jobs for discovering mocks and tests

### Available Operations

* [ActivateImportJob](#activateimportjob) - Activate an ImportJob
* [CreateImportJob](#createimportjob) - Create ImportJob
* [DeleteImportJob](#deleteimportjob) - Delete ImportJob
* [GetImportJobCounter](#getimportjobcounter) - Get the ImportJobs counter
* [GetImportJobs](#getimportjobs) - Get ImportJobs
* [StartImportJob](#startimportjob) - Start an ImportJob
* [StopImportJob](#stopimportjob) - Stop an ImportJob
* [GetJobsID](#getjobsid) - Get ImportJob
* [PostJobsID](#postjobsid) - Update ImportJob
* [UploadArtifact](#uploadartifact) - Upload an artifact

## ActivateImportJob

Make an ImportJob active, so that it is executed

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
    res, err := s.Job.ActivateImportJob(ctx, operations.ActivateImportJobRequest{
        ID: "f15471b5-e6e1-43b9-9d48-8e1e91e450ad",
    }, operations.ActivateImportJobSecurity{
        JwtBearer: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImportJob != nil {
        // handle response
    }
}
```

## CreateImportJob

Create a new ImportJob

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Job.CreateImportJob(ctx, shared.ImportJob{
        Active: sdk.Bool(false),
        CreatedDate: types.MustTimeFromString("2022-05-09T18:45:16.013Z"),
        Etag: sdk.String("distinctio"),
        Frequency: sdk.String("quibusdam"),
        ID: sdk.String("44269802-d502-4a94-bb4f-63c969e9a3ef"),
        LastImportDate: types.MustTimeFromString("2022-02-08T14:21:47.573Z"),
        LastImportError: sdk.String("in"),
        MainArtifact: sdk.Bool(false),
        Metadata: &shared.Metadata{
            Annotations: map[string]string{
                "maiores": "rerum",
                "dicta": "magnam",
                "cumque": "facere",
                "ea": "aliquid",
            },
            CreatedOn: 675439,
            Labels: map[string]string{
                "non": "occaecati",
                "enim": "accusamus",
                "delectus": "quidem",
                "provident": "nam",
            },
            LastUpdate: 659669,
        },
        Name: "Jaime Will",
        RepositoryDisableSSLValidation: sdk.Bool(false),
        RepositoryURL: "nisi",
        SecretRef: &shared.SecretRef{
            Name: "Ada Moen IV",
            SecretID: "magnam",
        },
        ServiceRefs: []shared.ServiceRef{
            shared.ServiceRef{
                Name: "Leroy Greenfelder",
                ServiceID: "nobis",
                Version: "eum",
            },
            shared.ServiceRef{
                Name: "Brandon Brakus V",
                ServiceID: "ullam",
                Version: "provident",
            },
            shared.ServiceRef{
                Name: "Kirk Bartoletti",
                ServiceID: "mollitia",
                Version: "ad",
            },
        },
    }, operations.CreateImportJobSecurity{
        JwtBearer: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImportJob != nil {
        // handle response
    }
}
```

## DeleteImportJob

Delete an ImportJob

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
    res, err := s.Job.DeleteImportJob(ctx, operations.DeleteImportJobRequest{
        ID: "63e2516f-e4c8-4b71-9e5b-7fd2ed028921",
    }, operations.DeleteImportJobSecurity{
        JwtBearer: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetImportJobCounter

Get the ImportJobs counter

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
    res, err := s.Job.GetImportJobCounter(ctx, operations.GetImportJobCounterSecurity{
        JwtBearer: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Counter != nil {
        // handle response
    }
}
```

## GetImportJobs

Retrieve a list of ImportJobs

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
    res, err := s.Job.GetImportJobs(ctx, operations.GetImportJobsRequest{
        Name: sdk.String("Gilberto Streich"),
        Page: sdk.Int64(569101),
        Size: sdk.Int64(139972),
    }, operations.GetImportJobsSecurity{
        JwtBearer: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImportJobs != nil {
        // handle response
    }
}
```

## StartImportJob

Starting an ImportJob forces it to immediatly import mock definitions

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
    res, err := s.Job.StartImportJob(ctx, operations.StartImportJobRequest{
        ID: "601fb576-b0d5-4f0d-b0c5-fbb258705320",
    }, operations.StartImportJobSecurity{
        JwtBearer: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImportJob != nil {
        // handle response
    }
}
```

## StopImportJob

Stopping an ImportJob desactivate it, so that it won't execute at next schedule

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
    res, err := s.Job.StopImportJob(ctx, operations.StopImportJobRequest{
        ID: "2c73d5fe-9b90-4c28-909b-3fe49a8d9cbf",
    }, operations.StopImportJobSecurity{
        JwtBearer: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImportJob != nil {
        // handle response
    }
}
```

## GetJobsID

Retrieve an ImportJob using its identifier

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
    res, err := s.Job.GetJobsID(ctx, operations.GetJobsIDRequest{
        ID: "48633323-f9b7-47f3-a410-0674ebf69280",
    }, operations.GetJobsIDSecurity{
        JwtBearer: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImportJob != nil {
        // handle response
    }
}
```

## PostJobsID

Update an ImportJob

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
            JwtBearer: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Job.PostJobsID(ctx, operations.PostJobsIDRequest{
        ImportJob: shared.ImportJob{
            Active: sdk.Bool(false),
            CreatedDate: types.MustTimeFromString("2022-10-19T08:40:45.996Z"),
            Etag: sdk.String("soluta"),
            Frequency: sdk.String("dolorum"),
            ID: sdk.String("77a89ebf-737a-4e42-83ce-5e6a95d8a0d4"),
            LastImportDate: types.MustTimeFromString("2022-07-29T17:02:39.743Z"),
            LastImportError: sdk.String("quod"),
            MainArtifact: sdk.Bool(false),
            Metadata: &shared.Metadata{
                Annotations: map[string]string{
                    "qui": "dolorum",
                    "a": "esse",
                    "harum": "iusto",
                    "ipsum": "quisquam",
                },
                CreatedOn: 947371,
                Labels: map[string]string{
                    "tempore": "accusamus",
                },
                LastUpdate: 253941,
            },
            Name: "Florence Will",
            RepositoryDisableSSLValidation: sdk.Bool(false),
            RepositoryURL: "sit",
            SecretRef: &shared.SecretRef{
                Name: "Luis Cremin",
                SecretID: "voluptas",
            },
            ServiceRefs: []shared.ServiceRef{
                shared.ServiceRef{
                    Name: "Tracy Gottlieb",
                    ServiceID: "maxime",
                    Version: "pariatur",
                },
                shared.ServiceRef{
                    Name: "Keith Padberg",
                    ServiceID: "aspernatur",
                    Version: "dolores",
                },
                shared.ServiceRef{
                    Name: "Cesar Hyatt",
                    ServiceID: "temporibus",
                    Version: "qui",
                },
            },
        },
        ID: "322715bf-0cbb-41e3-9b8b-90f3443a1108",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImportJob != nil {
        // handle response
    }
}
```

## UploadArtifact

Uploads an artifact to be imported by Microcks.

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
    res, err := s.Job.UploadArtifact(ctx, operations.UploadArtifactRequest{
        ArtifactUpload: shared.ArtifactUpload{
            File: shared.ArtifactUploadFile{
                Content: []byte("itaque"),
                File: "consequatur",
            },
        },
        MainArtifact: false,
    }, operations.UploadArtifactSecurity{
        JwtBearer: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UploadArtifact201TextPlainString != nil {
        // handle response
    }
}
```
