# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/pubsub/v1beta1a/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
    res, err := s.Subscriptions.PubsubSubscriptionsAcknowledge(ctx, operations.PubsubSubscriptionsAcknowledgeRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AcknowledgeRequest: &shared.AcknowledgeRequest{
            AckID: []string{
                "distinctio",
                "quibusdam",
                "unde",
            },
            Subscription: sdk.String("nulla"),
        },
        AccessToken: sdk.String("corrupti"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("vel"),
        Fields: sdk.String("error"),
        Key: sdk.String("deserunt"),
        OauthToken: sdk.String("suscipit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iure"),
        UploadType: sdk.String("magnam"),
        UploadProtocol: sdk.String("debitis"),
    }, operations.PubsubSubscriptionsAcknowledgeSecurity{
        Option1: &operations.PubsubSubscriptionsAcknowledgeSecurityOption1{
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Subscriptions](docs/subscriptions/README.md)

* [PubsubSubscriptionsAcknowledge](docs/subscriptions/README.md#pubsubsubscriptionsacknowledge) - Acknowledges a particular received message: the Pub/Sub system can remove the given message from the subscription. Acknowledging a message whose Ack deadline has expired may succeed, but the message could have been already redelivered. Acknowledging a message more than once will not result in an error. This is only used for messages received via pull.
* [PubsubSubscriptionsCreate](docs/subscriptions/README.md#pubsubsubscriptionscreate) - Creates a subscription on a given topic for a given subscriber. If the subscription already exists, returns ALREADY_EXISTS. If the corresponding topic doesn't exist, returns NOT_FOUND. If the name is not provided in the request, the server will assign a random name for this subscription on the same project as the topic.
* [PubsubSubscriptionsDelete](docs/subscriptions/README.md#pubsubsubscriptionsdelete) - Deletes an existing subscription. All pending messages in the subscription are immediately dropped. Calls to Pull after deletion will return NOT_FOUND.
* [PubsubSubscriptionsGet](docs/subscriptions/README.md#pubsubsubscriptionsget) - Gets the configuration details of a subscription.
* [PubsubSubscriptionsList](docs/subscriptions/README.md#pubsubsubscriptionslist) - Lists matching subscriptions.
* [PubsubSubscriptionsModifyAckDeadline](docs/subscriptions/README.md#pubsubsubscriptionsmodifyackdeadline) - Modifies the Ack deadline for a message received from a pull request.
* [PubsubSubscriptionsModifyPushConfig](docs/subscriptions/README.md#pubsubsubscriptionsmodifypushconfig) - Modifies the PushConfig for a specified subscription. This method can be used to suspend the flow of messages to an endpoint by clearing the PushConfig field in the request. Messages will be accumulated for delivery even if no push configuration is defined or while the configuration is modified.
* [PubsubSubscriptionsPull](docs/subscriptions/README.md#pubsubsubscriptionspull) - Pulls a single message from the server. If return_immediately is true, and no messages are available in the subscription, this method returns FAILED_PRECONDITION. The system is free to return an UNAVAILABLE error if no messages are available in a reasonable amount of time (to reduce system load).
* [PubsubSubscriptionsPullBatch](docs/subscriptions/README.md#pubsubsubscriptionspullbatch) - Pulls messages from the server. Returns an empty list if there are no messages available in the backlog. The system is free to return UNAVAILABLE if there are too many pull requests outstanding for the given subscription.

### [Topics](docs/topics/README.md)

* [PubsubTopicsCreate](docs/topics/README.md#pubsubtopicscreate) - Creates the given topic with the given name.
* [PubsubTopicsDelete](docs/topics/README.md#pubsubtopicsdelete) - Deletes the topic with the given name. Returns NOT_FOUND if the topic does not exist. After a topic is deleted, a new topic may be created with the same name.
* [PubsubTopicsGet](docs/topics/README.md#pubsubtopicsget) - Gets the configuration of a topic. Since the topic only has the name attribute, this method is only useful to check the existence of a topic. If other attributes are added in the future, they will be returned here.
* [PubsubTopicsList](docs/topics/README.md#pubsubtopicslist) - Lists matching topics.
* [PubsubTopicsPublish](docs/topics/README.md#pubsubtopicspublish) - Adds a message to the topic. Returns NOT_FOUND if the topic does not exist.
* [PubsubTopicsPublishBatch](docs/topics/README.md#pubsubtopicspublishbatch) - Adds one or more messages to the topic. Returns NOT_FOUND if the topic does not exist.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
