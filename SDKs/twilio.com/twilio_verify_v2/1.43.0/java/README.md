# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAccessTokenCreateAccessTokenRequest;
import org.openapis.openapi.models.operations.CreateAccessTokenRequest;
import org.openapis.openapi.models.operations.CreateAccessTokenResponse;
import org.openapis.openapi.models.operations.CreateAccessTokenSecurity;
import org.openapis.openapi.models.shared.AccessTokenEnumFactorTypesEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateAccessTokenRequest req = new CreateAccessTokenRequest("corrupti") {{
                requestBody = new CreateAccessTokenCreateAccessTokenRequest(AccessTokenEnumFactorTypesEnum.PUSH, "provident") {{
                    factorFriendlyName = "distinctio";
                    ttl = 844266L;
                }};;
            }};            

            CreateAccessTokenResponse res = sdk.createAccessToken(req, new CreateAccessTokenSecurity("unde", "nulla") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.verifyV2ServiceAccessToken != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [createAccessToken](docs/sdk/README.md#createaccesstoken) - Create a new enrollment Access Token for the Entity
* [createBucket](docs/sdk/README.md#createbucket) - Create a new Bucket for a Rate Limit
* [createChallenge](docs/sdk/README.md#createchallenge) - Create a new Challenge for the Factor
* [createEntity](docs/sdk/README.md#createentity) - Create a new Entity for the Service
* [createMessagingConfiguration](docs/sdk/README.md#createmessagingconfiguration) - Create a new MessagingConfiguration for a service.
* [createNewFactor](docs/sdk/README.md#createnewfactor) - Create a new Factor for the Entity
* [createNotification](docs/sdk/README.md#createnotification) - Create a new Notification for the corresponding Challenge
* [createRateLimit](docs/sdk/README.md#createratelimit) - Create a new Rate Limit for a Service
* [createSafelist](docs/sdk/README.md#createsafelist) - Add a new phone number to SafeList.
* [createService](docs/sdk/README.md#createservice) - Create a new Verification Service.
* [createVerification](docs/sdk/README.md#createverification) - Create a new Verification using a Service
* [createVerificationCheck](docs/sdk/README.md#createverificationcheck) - challenge a specific Verification Check.
* [createWebhook](docs/sdk/README.md#createwebhook) - Create a new Webhook for the Service
* [deleteBucket](docs/sdk/README.md#deletebucket) - Delete a specific Bucket.
* [deleteEntity](docs/sdk/README.md#deleteentity) - Delete a specific Entity.
* [deleteFactor](docs/sdk/README.md#deletefactor) - Delete a specific Factor.
* [deleteMessagingConfiguration](docs/sdk/README.md#deletemessagingconfiguration) - Delete a specific MessagingConfiguration.
* [deleteRateLimit](docs/sdk/README.md#deleteratelimit) - Delete a specific Rate Limit.
* [deleteSafelist](docs/sdk/README.md#deletesafelist) - Remove a phone number from SafeList.
* [deleteService](docs/sdk/README.md#deleteservice) - Delete a specific Verification Service Instance.
* [deleteWebhook](docs/sdk/README.md#deletewebhook) - Delete a specific Webhook.
* [fetchAccessToken](docs/sdk/README.md#fetchaccesstoken) - Fetch an Access Token for the Entity
* [fetchBucket](docs/sdk/README.md#fetchbucket) - Fetch a specific Bucket.
* [fetchChallenge](docs/sdk/README.md#fetchchallenge) - Fetch a specific Challenge.
* [fetchEntity](docs/sdk/README.md#fetchentity) - Fetch a specific Entity.
* [fetchFactor](docs/sdk/README.md#fetchfactor) - Fetch a specific Factor.
* [fetchForm](docs/sdk/README.md#fetchform) - Fetch the forms for a specific Form Type.
* [fetchMessagingConfiguration](docs/sdk/README.md#fetchmessagingconfiguration) - Fetch a specific MessagingConfiguration.
* [fetchRateLimit](docs/sdk/README.md#fetchratelimit) - Fetch a specific Rate Limit.
* [fetchSafelist](docs/sdk/README.md#fetchsafelist) - Check if a phone number exists in SafeList.
* [fetchService](docs/sdk/README.md#fetchservice) - Fetch specific Verification Service Instance.
* [fetchVerification](docs/sdk/README.md#fetchverification) - Fetch a specific Verification
* [fetchVerificationAttempt](docs/sdk/README.md#fetchverificationattempt) - Fetch a specific verification attempt.
* [fetchVerificationAttemptsSummary](docs/sdk/README.md#fetchverificationattemptssummary) - Get a summary of how many attempts were made and how many were converted.
* [fetchWebhook](docs/sdk/README.md#fetchwebhook) - Fetch a specific Webhook.
* [listBucket](docs/sdk/README.md#listbucket) - Retrieve a list of all Buckets for a Rate Limit.
* [listChallenge](docs/sdk/README.md#listchallenge) - Retrieve a list of all Challenges for a Factor.
* [listEntity](docs/sdk/README.md#listentity) - Retrieve a list of all Entities for a Service.
* [listFactor](docs/sdk/README.md#listfactor) - Retrieve a list of all Factors for an Entity.
* [listMessagingConfiguration](docs/sdk/README.md#listmessagingconfiguration) - Retrieve a list of all Messaging Configurations for a Service.
* [listRateLimit](docs/sdk/README.md#listratelimit) - Retrieve a list of all Rate Limits for a service.
* [listService](docs/sdk/README.md#listservice) - Retrieve a list of all Verification Services for an account.
* [listVerificationAttempt](docs/sdk/README.md#listverificationattempt) - List all the verification attempts for a given Account.
* [listVerificationTemplate](docs/sdk/README.md#listverificationtemplate) - List all the available templates for a given Account.
* [listWebhook](docs/sdk/README.md#listwebhook) - Retrieve a list of all Webhooks for a Service.
* [updateBucket](docs/sdk/README.md#updatebucket) - Update a specific Bucket.
* [updateChallenge](docs/sdk/README.md#updatechallenge) - Verify a specific Challenge.
* [updateFactor](docs/sdk/README.md#updatefactor) - Update a specific Factor. This endpoint can be used to Verify a Factor if passed an `AuthPayload` param.
* [updateMessagingConfiguration](docs/sdk/README.md#updatemessagingconfiguration) - Update a specific MessagingConfiguration
* [updateRateLimit](docs/sdk/README.md#updateratelimit) - Update a specific Rate Limit.
* [updateService](docs/sdk/README.md#updateservice) - Update a specific Verification Service.
* [updateVerification](docs/sdk/README.md#updateverification) - Update a Verification status
* [updateWebhook](docs/sdk/README.md#updatewebhook)
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
