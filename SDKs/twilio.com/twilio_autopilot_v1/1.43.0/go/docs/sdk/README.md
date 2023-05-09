# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [CreateAssistant](#createassistant)
* [CreateField](#createfield)
* [CreateFieldType](#createfieldtype)
* [CreateFieldValue](#createfieldvalue)
* [CreateModelBuild](#createmodelbuild)
* [CreateQuery](#createquery)
* [CreateSample](#createsample)
* [CreateTask](#createtask)
* [CreateWebhook](#createwebhook)
* [DeleteAssistant](#deleteassistant)
* [DeleteField](#deletefield)
* [DeleteFieldType](#deletefieldtype)
* [DeleteFieldValue](#deletefieldvalue)
* [DeleteModelBuild](#deletemodelbuild)
* [DeleteQuery](#deletequery)
* [DeleteSample](#deletesample)
* [DeleteTask](#deletetask)
* [DeleteWebhook](#deletewebhook)
* [FetchAssistant](#fetchassistant)
* [FetchDefaults](#fetchdefaults)
* [FetchDialogue](#fetchdialogue)
* [FetchField](#fetchfield)
* [FetchFieldType](#fetchfieldtype)
* [FetchFieldValue](#fetchfieldvalue)
* [FetchModelBuild](#fetchmodelbuild)
* [FetchQuery](#fetchquery)
* [FetchSample](#fetchsample)
* [FetchStyleSheet](#fetchstylesheet) - Returns Style sheet JSON object for the Assistant
* [FetchTask](#fetchtask)
* [FetchTaskActions](#fetchtaskactions) - Returns JSON actions for the Task.
* [FetchTaskStatistics](#fetchtaskstatistics)
* [FetchWebhook](#fetchwebhook)
* [ListAssistant](#listassistant)
* [ListField](#listfield)
* [ListFieldType](#listfieldtype)
* [ListFieldValue](#listfieldvalue)
* [ListModelBuild](#listmodelbuild)
* [ListQuery](#listquery)
* [ListSample](#listsample)
* [ListTask](#listtask)
* [ListWebhook](#listwebhook)
* [UpdateAssistant](#updateassistant)
* [UpdateDefaults](#updatedefaults)
* [UpdateFieldType](#updatefieldtype)
* [UpdateModelBuild](#updatemodelbuild)
* [UpdateQuery](#updatequery)
* [UpdateRestoreAssistant](#updaterestoreassistant)
* [UpdateSample](#updatesample)
* [UpdateStyleSheet](#updatestylesheet) - Updates the style sheet for an Assistant identified by `assistant_sid`.
* [UpdateTask](#updatetask)
* [UpdateTaskActions](#updatetaskactions) - Updates the actions of an Task identified by {TaskSid} or {TaskUniqueName}.
* [UpdateWebhook](#updatewebhook)

## CreateAssistant

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
    res, err := s.SDK.CreateAssistant(ctx, operations.CreateAssistantCreateAssistantRequest{
        CallbackEvents: sdk.String("error"),
        CallbackURL: sdk.String("https://high-hound.biz"),
        Defaults: sdk.String("debitis"),
        FriendlyName: sdk.String("ipsa"),
        LogQueries: sdk.Bool(false),
        StyleSheet: sdk.String("delectus"),
        UniqueName: sdk.String("tempora"),
    }, operations.CreateAssistantSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AutopilotV1Assistant != nil {
        // handle response
    }
}
```

## CreateField

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
    res, err := s.SDK.CreateField(ctx, operations.CreateFieldRequest{
        AssistantSid: "suscipit",
        RequestBody: &operations.CreateFieldCreateFieldRequest{
            FieldType: "molestiae",
            UniqueName: "minus",
        },
        TaskSid: "placeat",
    }, operations.CreateFieldSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AutopilotV1AssistantTaskField != nil {
        // handle response
    }
}
```

## CreateFieldType

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
    res, err := s.SDK.CreateFieldType(ctx, operations.CreateFieldTypeRequest{
        AssistantSid: "voluptatum",
        RequestBody: &operations.CreateFieldTypeCreateFieldTypeRequest{
            FriendlyName: sdk.String("iusto"),
            UniqueName: "excepturi",
        },
    }, operations.CreateFieldTypeSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AutopilotV1AssistantFieldType != nil {
        // handle response
    }
}
```

## CreateFieldValue

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
    res, err := s.SDK.CreateFieldValue(ctx, operations.CreateFieldValueRequest{
        AssistantSid: "nisi",
        FieldTypeSid: "recusandae",
        RequestBody: &operations.CreateFieldValueCreateFieldValueRequest{
            Language: "temporibus",
            SynonymOf: sdk.String("ab"),
            Value: "quis",
        },
    }, operations.CreateFieldValueSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AutopilotV1AssistantFieldTypeFieldValue != nil {
        // handle response
    }
}
```

## CreateModelBuild

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
    res, err := s.SDK.CreateModelBuild(ctx, operations.CreateModelBuildRequest{
        AssistantSid: "veritatis",
        RequestBody: &operations.CreateModelBuildCreateModelBuildRequest{
            StatusCallback: sdk.String("https://agitated-friendship.net"),
            UniqueName: sdk.String("sapiente"),
        },
    }, operations.CreateModelBuildSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AutopilotV1AssistantModelBuild != nil {
        // handle response
    }
}
```

## CreateQuery

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
    res, err := s.SDK.CreateQuery(ctx, operations.CreateQueryRequest{
        AssistantSid: "quo",
        RequestBody: &operations.CreateQueryCreateQueryRequest{
            Language: "odit",
            ModelBuild: sdk.String("at"),
            Query: "at",
            Tasks: sdk.String("maiores"),
        },
    }, operations.CreateQuerySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AutopilotV1AssistantQuery != nil {
        // handle response
    }
}
```

## CreateSample

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
    res, err := s.SDK.CreateSample(ctx, operations.CreateSampleRequest{
        AssistantSid: "molestiae",
        RequestBody: &operations.CreateSampleCreateSampleRequest{
            Language: "quod",
            SourceChannel: sdk.String("quod"),
            TaggedText: "esse",
        },
        TaskSid: "totam",
    }, operations.CreateSampleSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AutopilotV1AssistantTaskSample != nil {
        // handle response
    }
}
```

## CreateTask

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
    res, err := s.SDK.CreateTask(ctx, operations.CreateTaskRequest{
        AssistantSid: "porro",
        RequestBody: &operations.CreateTaskCreateTaskRequest{
            Actions: sdk.String("dolorum"),
            ActionsURL: sdk.String("http://scaly-pathway.name"),
            FriendlyName: sdk.String("fugit"),
            UniqueName: "deleniti",
        },
    }, operations.CreateTaskSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AutopilotV1AssistantTask != nil {
        // handle response
    }
}
```

## CreateWebhook

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
    res, err := s.SDK.CreateWebhook(ctx, operations.CreateWebhookRequest{
        AssistantSid: "hic",
        RequestBody: &operations.CreateWebhookCreateWebhookRequest{
            Events: "optio",
            UniqueName: "totam",
            WebhookMethod: sdk.String("beatae"),
            WebhookURL: "http://kosher-dipstick.biz",
        },
    }, operations.CreateWebhookSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AutopilotV1AssistantWebhook != nil {
        // handle response
    }
}
```

## DeleteAssistant

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
    res, err := s.SDK.DeleteAssistant(ctx, operations.DeleteAssistantRequest{
        Sid: "impedit",
    }, operations.DeleteAssistantSecurity{
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

## DeleteField

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
    res, err := s.SDK.DeleteField(ctx, operations.DeleteFieldRequest{
        AssistantSid: "cum",
        Sid: "esse",
        TaskSid: "ipsum",
    }, operations.DeleteFieldSecurity{
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

## DeleteFieldType

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
    res, err := s.SDK.DeleteFieldType(ctx, operations.DeleteFieldTypeRequest{
        AssistantSid: "excepturi",
        Sid: "aspernatur",
    }, operations.DeleteFieldTypeSecurity{
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

## DeleteFieldValue

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
    res, err := s.SDK.DeleteFieldValue(ctx, operations.DeleteFieldValueRequest{
        AssistantSid: "perferendis",
        FieldTypeSid: "ad",
        Sid: "natus",
    }, operations.DeleteFieldValueSecurity{
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

## DeleteModelBuild

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
    res, err := s.SDK.DeleteModelBuild(ctx, operations.DeleteModelBuildRequest{
        AssistantSid: "sed",
        Sid: "iste",
    }, operations.DeleteModelBuildSecurity{
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

## DeleteQuery

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
    res, err := s.SDK.DeleteQuery(ctx, operations.DeleteQueryRequest{
        AssistantSid: "dolor",
        Sid: "natus",
    }, operations.DeleteQuerySecurity{
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

## DeleteSample

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
    res, err := s.SDK.DeleteSample(ctx, operations.DeleteSampleRequest{
        AssistantSid: "laboriosam",
        Sid: "hic",
        TaskSid: "saepe",
    }, operations.DeleteSampleSecurity{
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

## DeleteTask

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
    res, err := s.SDK.DeleteTask(ctx, operations.DeleteTaskRequest{
        AssistantSid: "fuga",
        Sid: "in",
    }, operations.DeleteTaskSecurity{
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

## DeleteWebhook

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
    res, err := s.SDK.DeleteWebhook(ctx, operations.DeleteWebhookRequest{
        AssistantSid: "corporis",
        Sid: "iste",
    }, operations.DeleteWebhookSecurity{
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

## FetchAssistant

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
    res, err := s.SDK.FetchAssistant(ctx, operations.FetchAssistantRequest{
        Sid: "iure",
    }, operations.FetchAssistantSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AutopilotV1Assistant != nil {
        // handle response
    }
}
```

## FetchDefaults

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
    res, err := s.SDK.FetchDefaults(ctx, operations.FetchDefaultsRequest{
        AssistantSid: "saepe",
    }, operations.FetchDefaultsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AutopilotV1AssistantDefaults != nil {
        // handle response
    }
}
```

## FetchDialogue

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
    res, err := s.SDK.FetchDialogue(ctx, operations.FetchDialogueRequest{
        AssistantSid: "quidem",
        Sid: "architecto",
    }, operations.FetchDialogueSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AutopilotV1AssistantDialogue != nil {
        // handle response
    }
}
```

## FetchField

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
    res, err := s.SDK.FetchField(ctx, operations.FetchFieldRequest{
        AssistantSid: "ipsa",
        Sid: "reiciendis",
        TaskSid: "est",
    }, operations.FetchFieldSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AutopilotV1AssistantTaskField != nil {
        // handle response
    }
}
```

## FetchFieldType

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
    res, err := s.SDK.FetchFieldType(ctx, operations.FetchFieldTypeRequest{
        AssistantSid: "mollitia",
        Sid: "laborum",
    }, operations.FetchFieldTypeSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AutopilotV1AssistantFieldType != nil {
        // handle response
    }
}
```

## FetchFieldValue

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
    res, err := s.SDK.FetchFieldValue(ctx, operations.FetchFieldValueRequest{
        AssistantSid: "dolores",
        FieldTypeSid: "dolorem",
        Sid: "corporis",
    }, operations.FetchFieldValueSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AutopilotV1AssistantFieldTypeFieldValue != nil {
        // handle response
    }
}
```

## FetchModelBuild

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
    res, err := s.SDK.FetchModelBuild(ctx, operations.FetchModelBuildRequest{
        AssistantSid: "explicabo",
        Sid: "nobis",
    }, operations.FetchModelBuildSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AutopilotV1AssistantModelBuild != nil {
        // handle response
    }
}
```

## FetchQuery

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
    res, err := s.SDK.FetchQuery(ctx, operations.FetchQueryRequest{
        AssistantSid: "enim",
        Sid: "omnis",
    }, operations.FetchQuerySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AutopilotV1AssistantQuery != nil {
        // handle response
    }
}
```

## FetchSample

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
    res, err := s.SDK.FetchSample(ctx, operations.FetchSampleRequest{
        AssistantSid: "nemo",
        Sid: "minima",
        TaskSid: "excepturi",
    }, operations.FetchSampleSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AutopilotV1AssistantTaskSample != nil {
        // handle response
    }
}
```

## FetchStyleSheet

Returns Style sheet JSON object for the Assistant

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
    res, err := s.SDK.FetchStyleSheet(ctx, operations.FetchStyleSheetRequest{
        AssistantSid: "accusantium",
    }, operations.FetchStyleSheetSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AutopilotV1AssistantStyleSheet != nil {
        // handle response
    }
}
```

## FetchTask

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
    res, err := s.SDK.FetchTask(ctx, operations.FetchTaskRequest{
        AssistantSid: "iure",
        Sid: "culpa",
    }, operations.FetchTaskSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AutopilotV1AssistantTask != nil {
        // handle response
    }
}
```

## FetchTaskActions

Returns JSON actions for the Task.

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
    res, err := s.SDK.FetchTaskActions(ctx, operations.FetchTaskActionsRequest{
        AssistantSid: "doloribus",
        TaskSid: "sapiente",
    }, operations.FetchTaskActionsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AutopilotV1AssistantTaskTaskActions != nil {
        // handle response
    }
}
```

## FetchTaskStatistics

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
    res, err := s.SDK.FetchTaskStatistics(ctx, operations.FetchTaskStatisticsRequest{
        AssistantSid: "architecto",
        TaskSid: "mollitia",
    }, operations.FetchTaskStatisticsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AutopilotV1AssistantTaskTaskStatistics != nil {
        // handle response
    }
}
```

## FetchWebhook

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
    res, err := s.SDK.FetchWebhook(ctx, operations.FetchWebhookRequest{
        AssistantSid: "dolorem",
        Sid: "culpa",
    }, operations.FetchWebhookSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AutopilotV1AssistantWebhook != nil {
        // handle response
    }
}
```

## ListAssistant

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
    res, err := s.SDK.ListAssistant(ctx, operations.ListAssistantRequest{
        Page: sdk.Int64(161309),
        PageSize: sdk.Int64(995300),
        PageToken: sdk.String("mollitia"),
    }, operations.ListAssistantSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAssistantResponse != nil {
        // handle response
    }
}
```

## ListField

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
    res, err := s.SDK.ListField(ctx, operations.ListFieldRequest{
        AssistantSid: "occaecati",
        Page: sdk.Int64(253291),
        PageSize: sdk.Int64(414369),
        PageToken: sdk.String("quam"),
        TaskSid: "molestiae",
    }, operations.ListFieldSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListFieldResponse != nil {
        // handle response
    }
}
```

## ListFieldType

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
    res, err := s.SDK.ListFieldType(ctx, operations.ListFieldTypeRequest{
        AssistantSid: "velit",
        Page: sdk.Int64(623510),
        PageSize: sdk.Int64(158969),
        PageToken: sdk.String("quis"),
    }, operations.ListFieldTypeSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListFieldTypeResponse != nil {
        // handle response
    }
}
```

## ListFieldValue

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
    res, err := s.SDK.ListFieldValue(ctx, operations.ListFieldValueRequest{
        AssistantSid: "vitae",
        FieldTypeSid: "laborum",
        Language: sdk.String("animi"),
        Page: sdk.Int64(317202),
        PageSize: sdk.Int64(138183),
        PageToken: sdk.String("quo"),
    }, operations.ListFieldValueSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListFieldValueResponse != nil {
        // handle response
    }
}
```

## ListModelBuild

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
    res, err := s.SDK.ListModelBuild(ctx, operations.ListModelBuildRequest{
        AssistantSid: "sequi",
        Page: sdk.Int64(949572),
        PageSize: sdk.Int64(368725),
        PageToken: sdk.String("id"),
    }, operations.ListModelBuildSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListModelBuildResponse != nil {
        // handle response
    }
}
```

## ListQuery

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
    res, err := s.SDK.ListQuery(ctx, operations.ListQueryRequest{
        AssistantSid: "possimus",
        DialogueSid: sdk.String("aut"),
        Language: sdk.String("quasi"),
        ModelBuild: sdk.String("error"),
        Page: sdk.Int64(837945),
        PageSize: sdk.Int64(673660),
        PageToken: sdk.String("quasi"),
        Status: sdk.String("reiciendis"),
    }, operations.ListQuerySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListQueryResponse != nil {
        // handle response
    }
}
```

## ListSample

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
    res, err := s.SDK.ListSample(ctx, operations.ListSampleRequest{
        AssistantSid: "voluptatibus",
        Language: sdk.String("vero"),
        Page: sdk.Int64(468651),
        PageSize: sdk.Int64(509624),
        PageToken: sdk.String("voluptatibus"),
        TaskSid: "ipsa",
    }, operations.ListSampleSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSampleResponse != nil {
        // handle response
    }
}
```

## ListTask

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
    res, err := s.SDK.ListTask(ctx, operations.ListTaskRequest{
        AssistantSid: "omnis",
        Page: sdk.Int64(451159),
        PageSize: sdk.Int64(739264),
        PageToken: sdk.String("perferendis"),
    }, operations.ListTaskSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTaskResponse != nil {
        // handle response
    }
}
```

## ListWebhook

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
    res, err := s.SDK.ListWebhook(ctx, operations.ListWebhookRequest{
        AssistantSid: "doloremque",
        Page: sdk.Int64(441711),
        PageSize: sdk.Int64(282807),
        PageToken: sdk.String("maiores"),
    }, operations.ListWebhookSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListWebhookResponse != nil {
        // handle response
    }
}
```

## UpdateAssistant

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
    res, err := s.SDK.UpdateAssistant(ctx, operations.UpdateAssistantRequest{
        RequestBody: &operations.UpdateAssistantUpdateAssistantRequest{
            CallbackEvents: sdk.String("dicta"),
            CallbackURL: sdk.String("http://flustered-joey.com"),
            Defaults: sdk.String("harum"),
            DevelopmentStage: sdk.String("enim"),
            FriendlyName: sdk.String("accusamus"),
            LogQueries: sdk.Bool(false),
            StyleSheet: sdk.String("commodi"),
            UniqueName: sdk.String("repudiandae"),
        },
        Sid: "quae",
    }, operations.UpdateAssistantSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AutopilotV1Assistant != nil {
        // handle response
    }
}
```

## UpdateDefaults

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
    res, err := s.SDK.UpdateDefaults(ctx, operations.UpdateDefaultsRequest{
        AssistantSid: "ipsum",
        RequestBody: &operations.UpdateDefaultsUpdateDefaultsRequest{
            Defaults: sdk.String("quidem"),
        },
    }, operations.UpdateDefaultsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AutopilotV1AssistantDefaults != nil {
        // handle response
    }
}
```

## UpdateFieldType

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
    res, err := s.SDK.UpdateFieldType(ctx, operations.UpdateFieldTypeRequest{
        AssistantSid: "molestias",
        RequestBody: &operations.UpdateFieldTypeUpdateFieldTypeRequest{
            FriendlyName: sdk.String("excepturi"),
            UniqueName: sdk.String("pariatur"),
        },
        Sid: "modi",
    }, operations.UpdateFieldTypeSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AutopilotV1AssistantFieldType != nil {
        // handle response
    }
}
```

## UpdateModelBuild

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
    res, err := s.SDK.UpdateModelBuild(ctx, operations.UpdateModelBuildRequest{
        AssistantSid: "praesentium",
        RequestBody: &operations.UpdateModelBuildUpdateModelBuildRequest{
            UniqueName: sdk.String("rem"),
        },
        Sid: "voluptates",
    }, operations.UpdateModelBuildSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AutopilotV1AssistantModelBuild != nil {
        // handle response
    }
}
```

## UpdateQuery

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
    res, err := s.SDK.UpdateQuery(ctx, operations.UpdateQueryRequest{
        AssistantSid: "quasi",
        RequestBody: &operations.UpdateQueryUpdateQueryRequest{
            SampleSid: sdk.String("repudiandae"),
            Status: sdk.String("sint"),
        },
        Sid: "veritatis",
    }, operations.UpdateQuerySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AutopilotV1AssistantQuery != nil {
        // handle response
    }
}
```

## UpdateRestoreAssistant

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
    res, err := s.SDK.UpdateRestoreAssistant(ctx, operations.UpdateRestoreAssistantUpdateRestoreAssistantRequest{
        Assistant: "itaque",
    }, operations.UpdateRestoreAssistantSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AutopilotV1RestoreAssistant != nil {
        // handle response
    }
}
```

## UpdateSample

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
    res, err := s.SDK.UpdateSample(ctx, operations.UpdateSampleRequest{
        AssistantSid: "incidunt",
        RequestBody: &operations.UpdateSampleUpdateSampleRequest{
            Language: sdk.String("enim"),
            SourceChannel: sdk.String("consequatur"),
            TaggedText: sdk.String("est"),
        },
        Sid: "quibusdam",
        TaskSid: "explicabo",
    }, operations.UpdateSampleSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AutopilotV1AssistantTaskSample != nil {
        // handle response
    }
}
```

## UpdateStyleSheet

Updates the style sheet for an Assistant identified by `assistant_sid`.

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
    res, err := s.SDK.UpdateStyleSheet(ctx, operations.UpdateStyleSheetRequest{
        AssistantSid: "deserunt",
        RequestBody: &operations.UpdateStyleSheetUpdateStyleSheetRequest{
            StyleSheet: sdk.String("distinctio"),
        },
    }, operations.UpdateStyleSheetSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AutopilotV1AssistantStyleSheet != nil {
        // handle response
    }
}
```

## UpdateTask

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
    res, err := s.SDK.UpdateTask(ctx, operations.UpdateTaskRequest{
        AssistantSid: "quibusdam",
        RequestBody: &operations.UpdateTaskUpdateTaskRequest{
            Actions: sdk.String("labore"),
            ActionsURL: sdk.String("http://delightful-graph.name"),
            FriendlyName: sdk.String("quos"),
            UniqueName: sdk.String("perferendis"),
        },
        Sid: "magni",
    }, operations.UpdateTaskSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AutopilotV1AssistantTask != nil {
        // handle response
    }
}
```

## UpdateTaskActions

Updates the actions of an Task identified by {TaskSid} or {TaskUniqueName}.

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
    res, err := s.SDK.UpdateTaskActions(ctx, operations.UpdateTaskActionsRequest{
        AssistantSid: "assumenda",
        RequestBody: &operations.UpdateTaskActionsUpdateTaskActionsRequest{
            Actions: sdk.String("ipsam"),
        },
        TaskSid: "alias",
    }, operations.UpdateTaskActionsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AutopilotV1AssistantTaskTaskActions != nil {
        // handle response
    }
}
```

## UpdateWebhook

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
    res, err := s.SDK.UpdateWebhook(ctx, operations.UpdateWebhookRequest{
        AssistantSid: "fugit",
        RequestBody: &operations.UpdateWebhookUpdateWebhookRequest{
            Events: sdk.String("dolorum"),
            UniqueName: sdk.String("excepturi"),
            WebhookMethod: sdk.String("tempora"),
            WebhookURL: sdk.String("https://serious-dump.org"),
        },
        Sid: "eum",
    }, operations.UpdateWebhookSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AutopilotV1AssistantWebhook != nil {
        // handle response
    }
}
```
