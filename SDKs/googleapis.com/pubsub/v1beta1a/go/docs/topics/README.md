# Topics

### Available Operations

* [PubsubTopicsCreate](#pubsubtopicscreate) - Creates the given topic with the given name.
* [PubsubTopicsDelete](#pubsubtopicsdelete) - Deletes the topic with the given name. Returns NOT_FOUND if the topic does not exist. After a topic is deleted, a new topic may be created with the same name.
* [PubsubTopicsGet](#pubsubtopicsget) - Gets the configuration of a topic. Since the topic only has the name attribute, this method is only useful to check the existence of a topic. If other attributes are added in the future, they will be returned here.
* [PubsubTopicsList](#pubsubtopicslist) - Lists matching topics.
* [PubsubTopicsPublish](#pubsubtopicspublish) - Adds a message to the topic. Returns NOT_FOUND if the topic does not exist.
* [PubsubTopicsPublishBatch](#pubsubtopicspublishbatch) - Adds one or more messages to the topic. Returns NOT_FOUND if the topic does not exist.

## PubsubTopicsCreate

Creates the given topic with the given name.

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
    res, err := s.Topics.PubsubTopicsCreate(ctx, operations.PubsubTopicsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Topic: &shared.Topic{
            Name: sdk.String("Johanna Wolf"),
        },
        AccessToken: sdk.String("praesentium"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ipsa"),
        Fields: sdk.String("omnis"),
        Key: sdk.String("voluptate"),
        OauthToken: sdk.String("cum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("perferendis"),
        UploadType: sdk.String("doloremque"),
        UploadProtocol: sdk.String("reprehenderit"),
    }, operations.PubsubTopicsCreateSecurity{
        Option1: &operations.PubsubTopicsCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Topic != nil {
        // handle response
    }
}
```

## PubsubTopicsDelete

Deletes the topic with the given name. Returns NOT_FOUND if the topic does not exist. After a topic is deleted, a new topic may be created with the same name.

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
    res, err := s.Topics.PubsubTopicsDelete(ctx, operations.PubsubTopicsDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("maiores"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("corporis"),
        Fields: sdk.String("dolore"),
        Key: sdk.String("iusto"),
        OauthToken: sdk.String("dicta"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("harum"),
        Topic: "enim",
        UploadType: sdk.String("accusamus"),
        UploadProtocol: sdk.String("commodi"),
    }, operations.PubsubTopicsDeleteSecurity{
        Option1: &operations.PubsubTopicsDeleteSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## PubsubTopicsGet

Gets the configuration of a topic. Since the topic only has the name attribute, this method is only useful to check the existence of a topic. If other attributes are added in the future, they will be returned here.

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
    res, err := s.Topics.PubsubTopicsGet(ctx, operations.PubsubTopicsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quae"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quidem"),
        Fields: sdk.String("molestias"),
        Key: sdk.String("excepturi"),
        OauthToken: sdk.String("pariatur"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("modi"),
        Topic: "praesentium",
        UploadType: sdk.String("rem"),
        UploadProtocol: sdk.String("voluptates"),
    }, operations.PubsubTopicsGetSecurity{
        Option1: &operations.PubsubTopicsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Topic != nil {
        // handle response
    }
}
```

## PubsubTopicsList

Lists matching topics.

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
    res, err := s.Topics.PubsubTopicsList(ctx, operations.PubsubTopicsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("repudiandae"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("veritatis"),
        Fields: sdk.String("itaque"),
        Key: sdk.String("incidunt"),
        MaxResults: sdk.Int64(318569),
        OauthToken: sdk.String("consequatur"),
        PageToken: sdk.String("est"),
        PrettyPrint: sdk.Bool(false),
        Query: sdk.String("quibusdam"),
        QuotaUser: sdk.String("explicabo"),
        UploadType: sdk.String("deserunt"),
        UploadProtocol: sdk.String("distinctio"),
    }, operations.PubsubTopicsListSecurity{
        Option1: &operations.PubsubTopicsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTopicsResponse != nil {
        // handle response
    }
}
```

## PubsubTopicsPublish

Adds a message to the topic. Returns NOT_FOUND if the topic does not exist.

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
    res, err := s.Topics.PubsubTopicsPublish(ctx, operations.PubsubTopicsPublishRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        PublishRequest: &shared.PublishRequest{
            Message: &shared.PubsubMessage{
                Data: sdk.String("labore"),
                Label: []shared.Label{
                    shared.Label{
                        Key: sdk.String("qui"),
                        NumValue: sdk.String("aliquid"),
                        StrValue: sdk.String("cupiditate"),
                    },
                    shared.Label{
                        Key: sdk.String("quos"),
                        NumValue: sdk.String("perferendis"),
                        StrValue: sdk.String("magni"),
                    },
                },
                MessageID: sdk.String("assumenda"),
                PublishTime: sdk.String("ipsam"),
            },
            Topic: sdk.String("alias"),
        },
        AccessToken: sdk.String("fugit"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("excepturi"),
        Fields: sdk.String("tempora"),
        Key: sdk.String("facilis"),
        OauthToken: sdk.String("tempore"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("labore"),
        UploadType: sdk.String("delectus"),
        UploadProtocol: sdk.String("eum"),
    }, operations.PubsubTopicsPublishSecurity{
        Option1: &operations.PubsubTopicsPublishSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## PubsubTopicsPublishBatch

Adds one or more messages to the topic. Returns NOT_FOUND if the topic does not exist.

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
    res, err := s.Topics.PubsubTopicsPublishBatch(ctx, operations.PubsubTopicsPublishBatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        PublishBatchRequest: &shared.PublishBatchRequest{
            Messages: []shared.PubsubMessage{
                shared.PubsubMessage{
                    Data: sdk.String("sint"),
                    Label: []shared.Label{
                        shared.Label{
                            Key: sdk.String("provident"),
                            NumValue: sdk.String("necessitatibus"),
                            StrValue: sdk.String("sint"),
                        },
                        shared.Label{
                            Key: sdk.String("officia"),
                            NumValue: sdk.String("dolor"),
                            StrValue: sdk.String("debitis"),
                        },
                    },
                    MessageID: sdk.String("a"),
                    PublishTime: sdk.String("dolorum"),
                },
                shared.PubsubMessage{
                    Data: sdk.String("in"),
                    Label: []shared.Label{
                        shared.Label{
                            Key: sdk.String("illum"),
                            NumValue: sdk.String("maiores"),
                            StrValue: sdk.String("rerum"),
                        },
                        shared.Label{
                            Key: sdk.String("dicta"),
                            NumValue: sdk.String("magnam"),
                            StrValue: sdk.String("cumque"),
                        },
                    },
                    MessageID: sdk.String("facere"),
                    PublishTime: sdk.String("ea"),
                },
                shared.PubsubMessage{
                    Data: sdk.String("aliquid"),
                    Label: []shared.Label{
                        shared.Label{
                            Key: sdk.String("accusamus"),
                            NumValue: sdk.String("non"),
                            StrValue: sdk.String("occaecati"),
                        },
                        shared.Label{
                            Key: sdk.String("enim"),
                            NumValue: sdk.String("accusamus"),
                            StrValue: sdk.String("delectus"),
                        },
                        shared.Label{
                            Key: sdk.String("quidem"),
                            NumValue: sdk.String("provident"),
                            StrValue: sdk.String("nam"),
                        },
                    },
                    MessageID: sdk.String("id"),
                    PublishTime: sdk.String("blanditiis"),
                },
                shared.PubsubMessage{
                    Data: sdk.String("deleniti"),
                    Label: []shared.Label{
                        shared.Label{
                            Key: sdk.String("amet"),
                            NumValue: sdk.String("deserunt"),
                            StrValue: sdk.String("nisi"),
                        },
                        shared.Label{
                            Key: sdk.String("vel"),
                            NumValue: sdk.String("natus"),
                            StrValue: sdk.String("omnis"),
                        },
                        shared.Label{
                            Key: sdk.String("molestiae"),
                            NumValue: sdk.String("perferendis"),
                            StrValue: sdk.String("nihil"),
                        },
                        shared.Label{
                            Key: sdk.String("magnam"),
                            NumValue: sdk.String("distinctio"),
                            StrValue: sdk.String("id"),
                        },
                    },
                    MessageID: sdk.String("labore"),
                    PublishTime: sdk.String("labore"),
                },
            },
            Topic: sdk.String("suscipit"),
        },
        AccessToken: sdk.String("natus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("eum"),
        Fields: sdk.String("vero"),
        Key: sdk.String("aspernatur"),
        OauthToken: sdk.String("architecto"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("magnam"),
        UploadType: sdk.String("et"),
        UploadProtocol: sdk.String("excepturi"),
    }, operations.PubsubTopicsPublishBatchSecurity{
        Option1: &operations.PubsubTopicsPublishBatchSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PublishBatchResponse != nil {
        // handle response
    }
}
```
