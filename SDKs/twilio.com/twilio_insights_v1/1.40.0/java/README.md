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

import org.openapis.openapi.models.operations.FetchAccountSettingsSecurity;
import org.openapis.openapi.models.operations.FetchAccountSettingsQueryParams;
import org.openapis.openapi.models.operations.FetchAccountSettingsRequest;
import org.openapis.openapi.models.operations.FetchAccountSettingsResponse;
import org.openapis.openapi.models.shared.SchemeAccountSidAuthToken;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchAccountSettingsRequest req = new FetchAccountSettingsRequest() {{
                security = new FetchAccountSettingsSecurity() {{
                    accountSidAuthToken = new SchemeAccountSidAuthToken() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }};
                queryParams = new FetchAccountSettingsQueryParams() {{
                    subaccountSid = "corrupti";
                }};
            }};            

            FetchAccountSettingsResponse res = sdk.fetchAccountSettings(req);

            if (res.insightsV1AccountSettings.isPresent()) {
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

* `fetchAccountSettings`
* `fetchAnnotation` - Fetch a specific Annotation.
* `fetchCall`
* `fetchConference` - Fetch a specific Conference.
* `fetchConferenceParticipant` - Fetch a specific Conference Participant Summary.
* `fetchSummary`
* `fetchVideoParticipantSummary` - Get Video Log Analyzer data for a Room Participant.
* `fetchVideoRoomSummary` - Get Video Log Analyzer data for a Room.
* `listCallSummaries`
* `listConference` - Retrieve a list of Conferences.
* `listConferenceParticipant` - List Conference Participants.
* `listEvent`
* `listMetric`
* `listVideoParticipantSummary` - Get a list of room participants.
* `listVideoRoomSummary` - Get a list of Programmable Video Rooms.
* `updateAccountSettings`
* `updateAnnotation` - Create/Update the annotation for the call
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
