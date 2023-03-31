# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/pubsub/v1beta1a/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.PubsubSubscriptionsAcknowledgeRequest(
    dollar_xgafv="2",
    acknowledge_request=shared.AcknowledgeRequest(
        ack_id=[
            "distinctio",
            "quibusdam",
            "unde",
        ],
        subscription="nulla",
    ),
    access_token="corrupti",
    alt="proto",
    callback="vel",
    fields_="error",
    key="deserunt",
    oauth_token="suscipit",
    pretty_print=False,
    quota_user="iure",
    upload_type="magnam",
    upload_protocol="debitis",
)
    
res = s.subscriptions.pubsub_subscriptions_acknowledge(req, operations.PubsubSubscriptionsAcknowledgeSecurity(
    option1=operations.PubsubSubscriptionsAcknowledgeSecurityOption1(
        oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
        oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
))

if res.empty is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### subscriptions

* `pubsub_subscriptions_acknowledge` - Acknowledges a particular received message: the Pub/Sub system can remove the given message from the subscription. Acknowledging a message whose Ack deadline has expired may succeed, but the message could have been already redelivered. Acknowledging a message more than once will not result in an error. This is only used for messages received via pull.
* `pubsub_subscriptions_create` - Creates a subscription on a given topic for a given subscriber. If the subscription already exists, returns ALREADY_EXISTS. If the corresponding topic doesn't exist, returns NOT_FOUND. If the name is not provided in the request, the server will assign a random name for this subscription on the same project as the topic.
* `pubsub_subscriptions_delete` - Deletes an existing subscription. All pending messages in the subscription are immediately dropped. Calls to Pull after deletion will return NOT_FOUND.
* `pubsub_subscriptions_get` - Gets the configuration details of a subscription.
* `pubsub_subscriptions_list` - Lists matching subscriptions.
* `pubsub_subscriptions_modify_ack_deadline` - Modifies the Ack deadline for a message received from a pull request.
* `pubsub_subscriptions_modify_push_config` - Modifies the PushConfig for a specified subscription. This method can be used to suspend the flow of messages to an endpoint by clearing the PushConfig field in the request. Messages will be accumulated for delivery even if no push configuration is defined or while the configuration is modified.
* `pubsub_subscriptions_pull` - Pulls a single message from the server. If return_immediately is true, and no messages are available in the subscription, this method returns FAILED_PRECONDITION. The system is free to return an UNAVAILABLE error if no messages are available in a reasonable amount of time (to reduce system load).
* `pubsub_subscriptions_pull_batch` - Pulls messages from the server. Returns an empty list if there are no messages available in the backlog. The system is free to return UNAVAILABLE if there are too many pull requests outstanding for the given subscription.

### topics

* `pubsub_topics_create` - Creates the given topic with the given name.
* `pubsub_topics_delete` - Deletes the topic with the given name. Returns NOT_FOUND if the topic does not exist. After a topic is deleted, a new topic may be created with the same name.
* `pubsub_topics_get` - Gets the configuration of a topic. Since the topic only has the name attribute, this method is only useful to check the existence of a topic. If other attributes are added in the future, they will be returned here.
* `pubsub_topics_list` - Lists matching topics.
* `pubsub_topics_publish` - Adds a message to the topic. Returns NOT_FOUND if the topic does not exist.
* `pubsub_topics_publish_batch` - Adds one or more messages to the topic. Returns NOT_FOUND if the topic does not exist.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
