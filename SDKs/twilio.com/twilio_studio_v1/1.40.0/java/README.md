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

import org.openapis.openapi.models.operations.CreateEngagementSecurity;
import org.openapis.openapi.models.operations.CreateEngagementPathParams;
import org.openapis.openapi.models.operations.CreateEngagementCreateEngagementRequest;
import org.openapis.openapi.models.operations.CreateEngagementRequest;
import org.openapis.openapi.models.operations.CreateEngagementResponse;
import org.openapis.openapi.models.shared.SchemeAccountSidAuthToken;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateEngagementRequest req = new CreateEngagementRequest() {{
                security = new CreateEngagementSecurity() {{
                    accountSidAuthToken = new SchemeAccountSidAuthToken() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }};
                pathParams = new CreateEngagementPathParams() {{
                    flowSid = "corrupti";
                }};
                request = new CreateEngagementCreateEngagementRequest() {{
                    from = "provident";
                    parameters = "distinctio";
                    to = "quibusdam";
                }};
            }};            

            CreateEngagementResponse res = sdk.createEngagement(req);

            if (res.studioV1FlowEngagement.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `createEngagement` - Triggers a new Engagement for the Flow
* `createExecution` - Triggers a new Execution for the Flow
* `deleteEngagement` - Delete this Engagement and all Steps relating to it.
* `deleteExecution` - Delete the Execution and all Steps relating to it.
* `deleteFlow` - Delete a specific Flow.
* `fetchEngagement` - Retrieve an Engagement
* `fetchEngagementContext` - Retrieve the most recent context for an Engagement.
* `fetchExecution` - Retrieve an Execution
* `fetchExecutionContext` - Retrieve the most recent context for an Execution.
* `fetchExecutionStep` - Retrieve a Step.
* `fetchExecutionStepContext` - Retrieve the context for an Execution Step.
* `fetchFlow` - Retrieve a specific Flow.
* `fetchStep` - Retrieve a Step.
* `fetchStepContext` - Retrieve the context for an Engagement Step.
* `listEngagement` - Retrieve a list of all Engagements for the Flow.
* `listExecution` - Retrieve a list of all Executions for the Flow.
* `listExecutionStep` - Retrieve a list of all Steps for an Execution.
* `listFlow` - Retrieve a list of all Flows.
* `listStep` - Retrieve a list of all Steps for an Engagement.
* `updateExecution` - Update the status of an Execution to `ended`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
