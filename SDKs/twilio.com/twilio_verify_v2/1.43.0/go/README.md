# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/twilio.com/twilio_verify_v2/1.43.0/go
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
    res, err := s.CreateAccessToken(ctx, operations.CreateAccessTokenRequest{
        RequestBody: &operations.CreateAccessTokenCreateAccessTokenRequest{
            FactorFriendlyName: sdk.String("corrupti"),
            FactorType: shared.AccessTokenEnumFactorTypesEnumPush,
            Identity: "provident",
            TTL: sdk.Int64(715190),
        },
        ServiceSid: "quibusdam",
    }, operations.CreateAccessTokenSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VerifyV2ServiceAccessToken != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [CreateAccessToken](docs/sdk/README.md#createaccesstoken) - Create a new enrollment Access Token for the Entity
* [CreateBucket](docs/sdk/README.md#createbucket) - Create a new Bucket for a Rate Limit
* [CreateChallenge](docs/sdk/README.md#createchallenge) - Create a new Challenge for the Factor
* [CreateEntity](docs/sdk/README.md#createentity) - Create a new Entity for the Service
* [CreateMessagingConfiguration](docs/sdk/README.md#createmessagingconfiguration) - Create a new MessagingConfiguration for a service.
* [CreateNewFactor](docs/sdk/README.md#createnewfactor) - Create a new Factor for the Entity
* [CreateNotification](docs/sdk/README.md#createnotification) - Create a new Notification for the corresponding Challenge
* [CreateRateLimit](docs/sdk/README.md#createratelimit) - Create a new Rate Limit for a Service
* [CreateSafelist](docs/sdk/README.md#createsafelist) - Add a new phone number to SafeList.
* [CreateService](docs/sdk/README.md#createservice) - Create a new Verification Service.
* [CreateVerification](docs/sdk/README.md#createverification) - Create a new Verification using a Service
* [CreateVerificationCheck](docs/sdk/README.md#createverificationcheck) - challenge a specific Verification Check.
* [CreateWebhook](docs/sdk/README.md#createwebhook) - Create a new Webhook for the Service
* [DeleteBucket](docs/sdk/README.md#deletebucket) - Delete a specific Bucket.
* [DeleteEntity](docs/sdk/README.md#deleteentity) - Delete a specific Entity.
* [DeleteFactor](docs/sdk/README.md#deletefactor) - Delete a specific Factor.
* [DeleteMessagingConfiguration](docs/sdk/README.md#deletemessagingconfiguration) - Delete a specific MessagingConfiguration.
* [DeleteRateLimit](docs/sdk/README.md#deleteratelimit) - Delete a specific Rate Limit.
* [DeleteSafelist](docs/sdk/README.md#deletesafelist) - Remove a phone number from SafeList.
* [DeleteService](docs/sdk/README.md#deleteservice) - Delete a specific Verification Service Instance.
* [DeleteWebhook](docs/sdk/README.md#deletewebhook) - Delete a specific Webhook.
* [FetchAccessToken](docs/sdk/README.md#fetchaccesstoken) - Fetch an Access Token for the Entity
* [FetchBucket](docs/sdk/README.md#fetchbucket) - Fetch a specific Bucket.
* [FetchChallenge](docs/sdk/README.md#fetchchallenge) - Fetch a specific Challenge.
* [FetchEntity](docs/sdk/README.md#fetchentity) - Fetch a specific Entity.
* [FetchFactor](docs/sdk/README.md#fetchfactor) - Fetch a specific Factor.
* [FetchForm](docs/sdk/README.md#fetchform) - Fetch the forms for a specific Form Type.
* [FetchMessagingConfiguration](docs/sdk/README.md#fetchmessagingconfiguration) - Fetch a specific MessagingConfiguration.
* [FetchRateLimit](docs/sdk/README.md#fetchratelimit) - Fetch a specific Rate Limit.
* [FetchSafelist](docs/sdk/README.md#fetchsafelist) - Check if a phone number exists in SafeList.
* [FetchService](docs/sdk/README.md#fetchservice) - Fetch specific Verification Service Instance.
* [FetchVerification](docs/sdk/README.md#fetchverification) - Fetch a specific Verification
* [FetchVerificationAttempt](docs/sdk/README.md#fetchverificationattempt) - Fetch a specific verification attempt.
* [FetchVerificationAttemptsSummary](docs/sdk/README.md#fetchverificationattemptssummary) - Get a summary of how many attempts were made and how many were converted.
* [FetchWebhook](docs/sdk/README.md#fetchwebhook) - Fetch a specific Webhook.
* [ListBucket](docs/sdk/README.md#listbucket) - Retrieve a list of all Buckets for a Rate Limit.
* [ListChallenge](docs/sdk/README.md#listchallenge) - Retrieve a list of all Challenges for a Factor.
* [ListEntity](docs/sdk/README.md#listentity) - Retrieve a list of all Entities for a Service.
* [ListFactor](docs/sdk/README.md#listfactor) - Retrieve a list of all Factors for an Entity.
* [ListMessagingConfiguration](docs/sdk/README.md#listmessagingconfiguration) - Retrieve a list of all Messaging Configurations for a Service.
* [ListRateLimit](docs/sdk/README.md#listratelimit) - Retrieve a list of all Rate Limits for a service.
* [ListService](docs/sdk/README.md#listservice) - Retrieve a list of all Verification Services for an account.
* [ListVerificationAttempt](docs/sdk/README.md#listverificationattempt) - List all the verification attempts for a given Account.
* [ListVerificationTemplate](docs/sdk/README.md#listverificationtemplate) - List all the available templates for a given Account.
* [ListWebhook](docs/sdk/README.md#listwebhook) - Retrieve a list of all Webhooks for a Service.
* [UpdateBucket](docs/sdk/README.md#updatebucket) - Update a specific Bucket.
* [UpdateChallenge](docs/sdk/README.md#updatechallenge) - Verify a specific Challenge.
* [UpdateFactor](docs/sdk/README.md#updatefactor) - Update a specific Factor. This endpoint can be used to Verify a Factor if passed an `AuthPayload` param.
* [UpdateMessagingConfiguration](docs/sdk/README.md#updatemessagingconfiguration) - Update a specific MessagingConfiguration
* [UpdateRateLimit](docs/sdk/README.md#updateratelimit) - Update a specific Rate Limit.
* [UpdateService](docs/sdk/README.md#updateservice) - Update a specific Verification Service.
* [UpdateVerification](docs/sdk/README.md#updateverification) - Update a Verification status
* [UpdateWebhook](docs/sdk/README.md#updatewebhook)
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
