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

import org.openapis.openapi.models.operations.CreateApplicationRequestBodyTypeEnum;
import org.openapis.openapi.models.operations.CreateApplicationRequestBody;
import org.openapis.openapi.models.operations.CreateApplicationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateApplicationRequestBody req = new CreateApplicationRequestBody() {{
                answerMethod = "GET";
                answerUrl = "https://example.com/webhooks/answer";
                apiKey = "ap1k3y";
                apiSecret = "230e6cf0709417176df1b4fc1e083adc";
                eventMethod = "POST";
                eventUrl = "https://example.com/webhooks/event";
                inboundMethod = "POST";
                inboundUrl = "https://example.com/webhooks/inbound";
                name = "My Application";
                statusMethod = "POST";
                statusUrl = "https://example.com/webhooks/status";
                type = "voice";
            }}            

            CreateApplicationResponse res = sdk.createApplication(req);

            if (res.applicationCreated.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `createApplication` - Create Application
* `deleteApplication` - Destroy Application
* `retrieveApplication` - Retrieve Application
* `retrieveApplications` - Retrieve all Applications
* `updateApplication` - Update Application
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
