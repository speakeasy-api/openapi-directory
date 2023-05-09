# Jobs

### Available Operations

* [DeleteJobByID](#deletejobbyid) - Delete Job by Id
* [GetJobByID](#getjobbyid) - Get Job By Id
* [GetListOfJobs](#getlistofjobs) - Get List of Jobs
* [SubmitTranscriptionJobJSON](#submittranscriptionjobjson) - Submit Transcription Job
* [SubmitTranscriptionJobMultipart](#submittranscriptionjobmultipart) - Submit Transcription Job

## DeleteJobByID

Deletes a transcription job. All data related to the job, such as input media and transcript, will be permanently deleted. A job can only be deleted once it's completed (either with success or failure).

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
            AccessToken: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Jobs.DeleteJobByID(ctx, operations.DeleteJobByIDRequest{
        ID: "5dfc2ddf-7cc7-48ca-9ba9-28fc816742cb",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetJobByID

Returns information about a transcription job

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
            AccessToken: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Jobs.GetJobByID(ctx, operations.GetJobByIDRequest{
        ID: "73920592-9396-4fea-b596-eb10faaa2352",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Job != nil {
        // handle response
    }
}
```

## GetListOfJobs

Gets a list of transcription jobs submitted within the last 30 days in reverse chronological order up to the provided `limit` number of jobs per call. **Note:** Jobs older than 30 days will not be listed. Pagination is supported via passing the last job `id` from a previous call into `starting_after`.

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
            AccessToken: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Jobs.GetListOfJobs(ctx, operations.GetListOfJobsRequest{
        Limit: sdk.Int64(750686),
        StartingAfter: sdk.String("enim"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Jobs != nil {
        // handle response
    }
}
```

## SubmitTranscriptionJobJSON

Starts an asynchronous job to transcribe speech-to-text for a media file. Media files can be specified in two ways, either by including a public url to the media in the transcription job `options` or by uploading a local file as part of a multipart/form request.

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
            AccessToken: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Jobs.SubmitTranscriptionJobJSON(ctx, shared.SubmitJobMediaURLOptions{
        CallbackURL: sdk.String("https://www.example.com/callback"),
        CustomVocabularies: []shared.SubmitJobMediaURLOptionsCustomVocabularies{
            shared.SubmitJobMediaURLOptionsCustomVocabularies{
                Phrases: []string{
                    "minima",
                    "excepturi",
                },
            },
            shared.SubmitJobMediaURLOptionsCustomVocabularies{
                Phrases: []string{
                    "iure",
                },
            },
            shared.SubmitJobMediaURLOptionsCustomVocabularies{
                Phrases: []string{
                    "doloribus",
                    "sapiente",
                    "architecto",
                },
            },
        },
        CustomVocabularyID: sdk.String("cvgnDwmB6iXevn"),
        DeleteAfterSeconds: sdk.Int64(50),
        FilterProfanity: sdk.Bool(true),
        Language: shared.SubmitJobMediaURLOptionsLanguageEnumEn.ToPointer(),
        MediaURL: "https://www.rev.ai/FTC_Sample_1.mp3",
        Metadata: sdk.String("sample metadata"),
        RemoveDisfluencies: sdk.Bool(true),
        SkipDiarization: sdk.Bool(true),
        SkipPunctuation: sdk.Bool(true),
        SpeakerChannelsCount: sdk.Int64(2),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Job != nil {
        // handle response
    }
}
```

## SubmitTranscriptionJobMultipart

Starts an asynchronous job to transcribe speech-to-text for a media file. Media files can be specified in two ways, either by including a public url to the media in the transcription job `options` or by uploading a local file as part of a multipart/form request.

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
            AccessToken: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Jobs.SubmitTranscriptionJobMultipart(ctx, operations.SubmitTranscriptionJobMultipartFormData{
        Media: &operations.SubmitTranscriptionJobMultipartFormDataMedia{
            Content: []byte("mollitia"),
            Media: "dolorem",
        },
        Options: sdk.String("culpa"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Job != nil {
        // handle response
    }
}
```
