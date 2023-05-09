# Jobs

### Available Operations

* [DeleteBatchJob](#deletebatchjob) - Delete the Batch job
* [DeleteCisJob](#deletecisjob) - Delete the CIS job
* [DeleteDpsJob](#deletedpsjob) - Delete the DPS job
* [DeletePayRunJob](#deletepayrunjob) - Delete the pay run job
* [DeleteRtiJob](#deletertijob) - Delete the RTI job
* [DeleteThirdPartyJob](#deletethirdpartyjob) - Delete the Third Party job
* [GetBatchJobInfo](#getbatchjobinfo) - Get the Batch job information
* [GetBatchJobProgress](#getbatchjobprogress) - Get the Batch job progress
* [GetBatchJobStatus](#getbatchjobstatus) - Get the Batch job status
* [GetBatchJobs](#getbatchjobs) - Get all Batch jobs
* [GetCisJobInfo](#getcisjobinfo) - Get the CIS job information
* [GetCisJobProgress](#getcisjobprogress) - Get the CIS job progress
* [GetCisJobStatus](#getcisjobstatus) - Get the CIS job status
* [GetCisJobs](#getcisjobs) - Get all CIS jobs
* [GetDpsJobInfo](#getdpsjobinfo) - Get the DPS job information
* [GetDpsJobProgress](#getdpsjobprogress) - Get the DPS job progress
* [GetDpsJobStatus](#getdpsjobstatus) - Get the DPS job status
* [GetDpsJobs](#getdpsjobs) - Get all DPS jobs
* [GetEmployerJobs](#getemployerjobs) - Gets all jobs relating to the employer.
* [GetPayRunJobInfo](#getpayrunjobinfo) - Get the pay run job information
* [GetPayRunJobProgress](#getpayrunjobprogress) - Get the pay run job progress
* [GetPayRunJobStatus](#getpayrunjobstatus) - Get the pay run job status
* [GetPayRunJobs](#getpayrunjobs) - Get all PayRun jobs
* [GetRtiJobInfo](#getrtijobinfo) - Get the RTI job information
* [GetRtiJobProgress](#getrtijobprogress) - Get the RTI job progress
* [GetRtiJobStatus](#getrtijobstatus) - Get the RTI job status
* [GetRtiJobs](#getrtijobs) - Get all RTI jobs
* [GetThirdPartyJobInfo](#getthirdpartyjobinfo) - Get the Third Party job information
* [GetThirdPartyJobProgress](#getthirdpartyjobprogress) - Get the Third Party job progress
* [GetThirdPartyJobStatus](#getthirdpartyjobstatus) - Get the Third Party job status
* [GetThirdPartyJobs](#getthirdpartyjobs) - Get all Third Party jobs
* [PostNewBatchJob](#postnewbatchjob) - Create new Batch job
* [PostNewCisJob](#postnewcisjob) - Create new CIS job
* [PostNewDpsJob](#postnewdpsjob) - Create new DPS job
* [PostNewPayRunJob](#postnewpayrunjob) - Create new PayRun job
* [PostNewRtiJob](#postnewrtijob) - Create new RTI job
* [PostNewThirdPartyJob](#postnewthirdpartyjob) - Create new Third Party job

## DeleteBatchJob

Deletes the the Batch job

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
    res, err := s.Jobs.DeleteBatchJob(ctx, operations.DeleteBatchJobRequest{
        APIVersion: "earum",
        Authorization: "officia",
        JobID: "laborum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteCisJob

Deletes the the CIS job

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
    res, err := s.Jobs.DeleteCisJob(ctx, operations.DeleteCisJobRequest{
        APIVersion: "placeat",
        Authorization: "modi",
        JobID: "voluptatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteDpsJob

Deletes the the DPS job

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
    res, err := s.Jobs.DeleteDpsJob(ctx, operations.DeleteDpsJobRequest{
        APIVersion: "molestias",
        Authorization: "officiis",
        JobID: "sapiente",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeletePayRunJob

Deletes the the payrun job

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
    res, err := s.Jobs.DeletePayRunJob(ctx, operations.DeletePayRunJobRequest{
        APIVersion: "cumque",
        Authorization: "vitae",
        JobID: "rerum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteRtiJob

Deletes the the RTI job

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
    res, err := s.Jobs.DeleteRtiJob(ctx, operations.DeleteRtiJobRequest{
        APIVersion: "tempora",
        Authorization: "quis",
        JobID: "inventore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteThirdPartyJob

Deletes the the Third Party job

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
    res, err := s.Jobs.DeleteThirdPartyJob(ctx, operations.DeleteThirdPartyJobRequest{
        APIVersion: "fugit",
        Authorization: "cumque",
        JobID: "quae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetBatchJobInfo

Return the the Batch job information

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
    res, err := s.Jobs.GetBatchJobInfo(ctx, operations.GetBatchJobInfoRequest{
        APIVersion: "perferendis",
        Authorization: "velit",
        JobID: "aspernatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.JobInfo != nil {
        // handle response
    }
}
```

## GetBatchJobProgress

Return the the Batch job progress

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
    res, err := s.Jobs.GetBatchJobProgress(ctx, operations.GetBatchJobProgressRequest{
        APIVersion: "eum",
        Authorization: "eius",
        JobID: "rem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetBatchJobStatus

Return the the Batch job status

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
    res, err := s.Jobs.GetBatchJobStatus(ctx, operations.GetBatchJobStatusRequest{
        APIVersion: "at",
        Authorization: "impedit",
        JobID: "eos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetBatchJobs

Gets all the Batch jobs

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
    res, err := s.Jobs.GetBatchJobs(ctx, operations.GetBatchJobsRequest{
        APIVersion: "sapiente",
        Authorization: "eum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## GetCisJobInfo

Return the the CIS job information

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
    res, err := s.Jobs.GetCisJobInfo(ctx, operations.GetCisJobInfoRequest{
        APIVersion: "dicta",
        Authorization: "minima",
        JobID: "beatae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.JobInfo != nil {
        // handle response
    }
}
```

## GetCisJobProgress

Return the the CIS job progress

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
    res, err := s.Jobs.GetCisJobProgress(ctx, operations.GetCisJobProgressRequest{
        APIVersion: "cupiditate",
        Authorization: "provident",
        JobID: "earum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetCisJobStatus

Return the the CIS job status

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
    res, err := s.Jobs.GetCisJobStatus(ctx, operations.GetCisJobStatusRequest{
        APIVersion: "soluta",
        Authorization: "hic",
        JobID: "illum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetCisJobs

Gets all the CIS jobs

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
    res, err := s.Jobs.GetCisJobs(ctx, operations.GetCisJobsRequest{
        APIVersion: "eaque",
        Authorization: "earum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## GetDpsJobInfo

Return the the DPS job information

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
    res, err := s.Jobs.GetDpsJobInfo(ctx, operations.GetDpsJobInfoRequest{
        APIVersion: "perspiciatis",
        Authorization: "maiores",
        JobID: "debitis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.JobInfo != nil {
        // handle response
    }
}
```

## GetDpsJobProgress

Return the the DPS job progress

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
    res, err := s.Jobs.GetDpsJobProgress(ctx, operations.GetDpsJobProgressRequest{
        APIVersion: "aliquid",
        Authorization: "porro",
        JobID: "suscipit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetDpsJobStatus

Return the the DPS job status

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
    res, err := s.Jobs.GetDpsJobStatus(ctx, operations.GetDpsJobStatusRequest{
        APIVersion: "dolorem",
        Authorization: "fugit",
        JobID: "cumque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetDpsJobs

Gets all the DPS jobs

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
    res, err := s.Jobs.GetDpsJobs(ctx, operations.GetDpsJobsRequest{
        APIVersion: "fuga",
        Authorization: "ratione",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## GetEmployerJobs

Returns all job information objects for the specified employer.

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
    res, err := s.Jobs.GetEmployerJobs(ctx, operations.GetEmployerJobsRequest{
        APIVersion: "animi",
        Authorization: "necessitatibus",
        EmployerID: "nulla",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetEmployerJobs200ApplicationJSONBinaryString != nil {
        // handle response
    }
}
```

## GetPayRunJobInfo

Return the the payrun job information

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
    res, err := s.Jobs.GetPayRunJobInfo(ctx, operations.GetPayRunJobInfoRequest{
        APIVersion: "consequatur",
        Authorization: "quasi",
        JobID: "et",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.JobInfo != nil {
        // handle response
    }
}
```

## GetPayRunJobProgress

Return the the payrun job progress

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
    res, err := s.Jobs.GetPayRunJobProgress(ctx, operations.GetPayRunJobProgressRequest{
        APIVersion: "ducimus",
        Authorization: "natus",
        JobID: "occaecati",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetPayRunJobStatus

Return the the payrun job status

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
    res, err := s.Jobs.GetPayRunJobStatus(ctx, operations.GetPayRunJobStatusRequest{
        APIVersion: "suscipit",
        Authorization: "adipisci",
        JobID: "quasi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetPayRunJobs

Gets all the pay run jobs

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
    res, err := s.Jobs.GetPayRunJobs(ctx, operations.GetPayRunJobsRequest{
        APIVersion: "magni",
        Authorization: "doloribus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## GetRtiJobInfo

Return the the RTI job information

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
    res, err := s.Jobs.GetRtiJobInfo(ctx, operations.GetRtiJobInfoRequest{
        APIVersion: "nulla",
        Authorization: "necessitatibus",
        JobID: "ipsa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.JobInfo != nil {
        // handle response
    }
}
```

## GetRtiJobProgress

Return the the RTI job progress

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
    res, err := s.Jobs.GetRtiJobProgress(ctx, operations.GetRtiJobProgressRequest{
        APIVersion: "tempora",
        Authorization: "nihil",
        JobID: "molestiae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetRtiJobStatus

Return the the RTI job status

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
    res, err := s.Jobs.GetRtiJobStatus(ctx, operations.GetRtiJobStatusRequest{
        APIVersion: "dicta",
        Authorization: "iusto",
        JobID: "esse",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetRtiJobs

Gets all the RTI jobs

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
    res, err := s.Jobs.GetRtiJobs(ctx, operations.GetRtiJobsRequest{
        APIVersion: "praesentium",
        Authorization: "maiores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## GetThirdPartyJobInfo

Return the the Third Party job information

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
    res, err := s.Jobs.GetThirdPartyJobInfo(ctx, operations.GetThirdPartyJobInfoRequest{
        APIVersion: "reiciendis",
        Authorization: "vel",
        JobID: "architecto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.JobInfo != nil {
        // handle response
    }
}
```

## GetThirdPartyJobProgress

Return the the Third Party job progress

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
    res, err := s.Jobs.GetThirdPartyJobProgress(ctx, operations.GetThirdPartyJobProgressRequest{
        APIVersion: "fugiat",
        Authorization: "doloremque",
        JobID: "dicta",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetThirdPartyJobStatus

Return the the Third Party job status

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
    res, err := s.Jobs.GetThirdPartyJobStatus(ctx, operations.GetThirdPartyJobStatusRequest{
        APIVersion: "odio",
        Authorization: "tempora",
        JobID: "esse",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetThirdPartyJobs

Gets all the Third Party jobs

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
    res, err := s.Jobs.GetThirdPartyJobs(ctx, operations.GetThirdPartyJobsRequest{
        APIVersion: "ex",
        Authorization: "consectetur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## PostNewBatchJob

Adds a new Batch job to the queue and returns the job info

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
    res, err := s.Jobs.PostNewBatchJob(ctx, operations.PostNewBatchJobRequest{
        APIVersion: "aliquid",
        Authorization: "ipsa",
        BatchJobInstruction: shared.BatchJobInstruction{
            BatchJobInstruction: &shared.BatchJobInstructionBatchJobInstruction{
                HoldingDate: types.MustTimeFromString("2022-10-02T14:14:43.935Z"),
                Instructions: &shared.BatchJobInstructionBatchJobInstructionDELETE{
                    Delete: []shared.BatchJobInstructionBatchJobInstructionDELETEDELETE{
                        shared.BatchJobInstructionBatchJobInstructionDELETEDELETE{
                            AtHref: sdk.String("fugiat"),
                        },
                        shared.BatchJobInstructionBatchJobInstructionDELETEDELETE{
                            AtHref: sdk.String("expedita"),
                        },
                    },
                },
                ValidateOnly: sdk.Bool(false),
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Link != nil {
        // handle response
    }
}
```

## PostNewCisJob

Adds a new CIS job to the queue and returns the job info

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
    res, err := s.Jobs.PostNewCisJob(ctx, operations.PostNewCisJobRequest{
        APIVersion: "aliquid",
        Authorization: "officia",
        CisJobInstructionBase: shared.CisJobInstructionBase{
            CisJobInstructionBase: &shared.CisJobInstructionBaseCisJobInstructionBase{
                Employer: &shared.CisJobInstructionBaseCisJobInstructionBaseEmployer{
                    AtHref: sdk.String("suscipit"),
                    AtRel: sdk.String("aliquid"),
                    AtTitle: sdk.String("perferendis"),
                },
                HoldingDate: types.MustTimeFromString("2022-08-17T05:09:58.137Z"),
                SubContractors: &shared.CisJobInstructionBaseCisJobInstructionBaseSubContractor{
                    SubContractor: []shared.CisJobInstructionBaseCisJobInstructionBaseSubContractorSubContractor{
                        shared.CisJobInstructionBaseCisJobInstructionBaseSubContractorSubContractor{
                            AtHref: sdk.String("id"),
                            AtRel: sdk.String("ab"),
                            AtTitle: sdk.String("error"),
                        },
                        shared.CisJobInstructionBaseCisJobInstructionBaseSubContractorSubContractor{
                            AtHref: sdk.String("possimus"),
                            AtRel: sdk.String("voluptates"),
                            AtTitle: sdk.String("mollitia"),
                        },
                        shared.CisJobInstructionBaseCisJobInstructionBaseSubContractorSubContractor{
                            AtHref: sdk.String("laborum"),
                            AtRel: sdk.String("libero"),
                            AtTitle: sdk.String("ad"),
                        },
                    },
                },
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Link != nil {
        // handle response
    }
}
```

## PostNewDpsJob

Creates the new DPS job to the queue and returns the job info

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
    res, err := s.Jobs.PostNewDpsJob(ctx, operations.PostNewDpsJobRequest{
        APIVersion: "deleniti",
        Authorization: "enim",
        DpsJobInstruction: shared.DpsJobInstruction{
            DpsJobInstruction: &shared.DpsJobInstructionDpsJobInstruction{
                Apply: sdk.Bool(false),
                Employer: &shared.DpsJobInstructionDpsJobInstructionEmployer{
                    AtHref: sdk.String("vitae"),
                    AtRel: sdk.String("repellendus"),
                    AtTitle: sdk.String("ex"),
                },
                FromDate: types.MustDateFromString("2021-10-14"),
                HoldingDate: types.MustTimeFromString("2022-09-05T19:39:47.586Z"),
                MessageTypes: &shared.DpsJobInstructionDpsJobInstructionType{
                    Type: []interface{}{
                        "voluptatem",
                        "molestias",
                        "cum",
                    },
                },
                MessagesToProcess: &shared.DpsJobInstructionDpsJobInstructionMessage{
                    Message: []shared.DpsJobInstructionDpsJobInstructionMessageMessage{
                        shared.DpsJobInstructionDpsJobInstructionMessageMessage{
                            AtHref: sdk.String("beatae"),
                            AtRel: sdk.String("voluptatum"),
                            AtTitle: sdk.String("omnis"),
                        },
                        shared.DpsJobInstructionDpsJobInstructionMessageMessage{
                            AtHref: sdk.String("veritatis"),
                            AtRel: sdk.String("rerum"),
                            AtTitle: sdk.String("est"),
                        },
                    },
                },
                Retrieve: sdk.Bool(false),
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Link != nil {
        // handle response
    }
}
```

## PostNewPayRunJob

Creates the new pay run job to the queue and returns the job info

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
    res, err := s.Jobs.PostNewPayRunJob(ctx, operations.PostNewPayRunJobRequest{
        APIVersion: "culpa",
        Authorization: "voluptatem",
        PayRunJobInstruction: shared.PayRunJobInstruction{
            PayRunJobInstruction: &shared.PayRunJobInstructionPayRunJobInstruction{
                Employees: &shared.PayRunJobInstructionPayRunJobInstructionEmployee{
                    Employee: []shared.PayRunJobInstructionPayRunJobInstructionEmployeeEmployee{
                        shared.PayRunJobInstructionPayRunJobInstructionEmployeeEmployee{
                            AtHref: sdk.String("officiis"),
                            AtRel: sdk.String("architecto"),
                            AtTitle: sdk.String("fuga"),
                        },
                        shared.PayRunJobInstructionPayRunJobInstructionEmployeeEmployee{
                            AtHref: sdk.String("pariatur"),
                            AtRel: sdk.String("debitis"),
                            AtTitle: sdk.String("voluptatem"),
                        },
                        shared.PayRunJobInstructionPayRunJobInstructionEmployeeEmployee{
                            AtHref: sdk.String("alias"),
                            AtRel: sdk.String("deleniti"),
                            AtTitle: sdk.String("earum"),
                        },
                        shared.PayRunJobInstructionPayRunJobInstructionEmployeeEmployee{
                            AtHref: sdk.String("ex"),
                            AtRel: sdk.String("sapiente"),
                            AtTitle: sdk.String("rem"),
                        },
                    },
                },
                EndDate: types.MustDateFromString("2021-11-27"),
                HoldingDate: types.MustTimeFromString("2022-06-06T07:54:04.224Z"),
                IsSupplementary: sdk.Bool(false),
                PaySchedule: &shared.PayRunJobInstructionPayRunJobInstructionPaySchedule{
                    AtHref: sdk.String("ullam"),
                    AtRel: sdk.String("perferendis"),
                    AtTitle: sdk.String("illum"),
                },
                PaymentDate: types.MustDateFromString("2021-06-17"),
                StartDate: types.MustDateFromString("2020-11-03"),
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Link != nil {
        // handle response
    }
}
```

## PostNewRtiJob

Creates the new RTI job to the queue and returns the job info

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
    res, err := s.Jobs.PostNewRtiJob(ctx, operations.PostNewRtiJobRequest{
        APIVersion: "ipsam",
        Authorization: "culpa",
        RtiJobInstruction: shared.RtiJobInstruction{
            RtiJobInstruction: &shared.RtiJobInstructionRtiJobInstruction{
                EarlierTaxYear: sdk.Int(222864),
                Employer: &shared.RtiJobInstructionRtiJobInstructionEmployer{
                    AtHref: sdk.String("aliquam"),
                    AtRel: sdk.String("inventore"),
                    AtTitle: sdk.String("deleniti"),
                },
                FinalSubmissionForYear: sdk.Bool(false),
                Generate: sdk.Bool(false),
                HoldingDate: types.MustTimeFromString("2022-09-22T18:43:20.498Z"),
                LateReason: shared.RtiJobInstructionRtiJobInstructionLateReasonEnumB.ToPointer(),
                NoPaymentForPeriodFrom: types.MustDateFromString("2022-11-25"),
                NoPaymentForPeriodTo: types.MustDateFromString("2022-09-26"),
                PaySchedule: &shared.RtiJobInstructionRtiJobInstructionPaySchedule{
                    AtHref: sdk.String("fugit"),
                    AtRel: sdk.String("ab"),
                    AtTitle: sdk.String("laudantium"),
                },
                PaymentDate: types.MustDateFromString("2022-10-11"),
                PeriodOfInactivityFrom: types.MustDateFromString("2021-11-22"),
                PeriodOfInactivityTo: types.MustDateFromString("2022-12-11"),
                RtiTransaction: &shared.RtiJobInstructionRtiJobInstructionRtiTransaction{
                    AtHref: sdk.String("quas"),
                    AtRel: sdk.String("eveniet"),
                    AtTitle: sdk.String("impedit"),
                },
                RtiType: sdk.String("officiis"),
                SchemeCeased: types.MustDateFromString("2022-02-07"),
                TaxMonth: sdk.Int(153369),
                TaxYear: sdk.Int(332191),
                Timestamp: types.MustTimeFromString("2022-04-15T18:45:38.448Z"),
                Transmit: sdk.Bool(false),
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Link != nil {
        // handle response
    }
}
```

## PostNewThirdPartyJob

Adds a new Third Party job to the queue and returns the job info

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
    res, err := s.Jobs.PostNewThirdPartyJob(ctx, operations.PostNewThirdPartyJobRequest{
        APIVersion: "eum",
        Authorization: "vel",
        ThirdPartyJobInstruction: shared.ThirdPartyJobInstruction{
            ThirdPartyJobInstruction: &shared.ThirdPartyJobInstructionThirdPartyJobInstruction{
                EmployerHref: sdk.String("voluptatum"),
                HoldingDate: types.MustTimeFromString("2022-08-26T10:54:10.191Z"),
                InstructionType: sdk.String("ab"),
                MetaData: map[string]interface{}{
                    "autem": "nobis",
                    "laboriosam": "recusandae",
                    "consequuntur": "voluptatem",
                    "exercitationem": "necessitatibus",
                },
                PayLoad: sdk.String("quasi"),
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Link != nil {
        // handle response
    }
}
```
