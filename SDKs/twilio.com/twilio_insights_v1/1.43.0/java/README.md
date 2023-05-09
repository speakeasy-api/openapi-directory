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
import org.openapis.openapi.models.operations.FetchAccountSettingsRequest;
import org.openapis.openapi.models.operations.FetchAccountSettingsResponse;
import org.openapis.openapi.models.operations.FetchAccountSettingsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchAccountSettingsRequest req = new FetchAccountSettingsRequest() {{
                subaccountSid = "corrupti";
            }};            

            FetchAccountSettingsResponse res = sdk.fetchAccountSettings(req, new FetchAccountSettingsSecurity("provident", "distinctio") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.insightsV1AccountSettings != null) {
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

* [fetchAccountSettings](docs/sdk/README.md#fetchaccountsettings)
* [fetchAnnotation](docs/sdk/README.md#fetchannotation) - Fetch a specific Annotation.
* [fetchCall](docs/sdk/README.md#fetchcall)
* [fetchConference](docs/sdk/README.md#fetchconference) - Fetch a specific Conference.
* [fetchConferenceParticipant](docs/sdk/README.md#fetchconferenceparticipant) - Fetch a specific Conference Participant Summary.
* [fetchSummary](docs/sdk/README.md#fetchsummary)
* [fetchVideoParticipantSummary](docs/sdk/README.md#fetchvideoparticipantsummary) - Get Video Log Analyzer data for a Room Participant.
* [fetchVideoRoomSummary](docs/sdk/README.md#fetchvideoroomsummary) - Get Video Log Analyzer data for a Room.
* [listCallSummaries](docs/sdk/README.md#listcallsummaries)
* [listConference](docs/sdk/README.md#listconference) - Retrieve a list of Conferences.
* [listConferenceParticipant](docs/sdk/README.md#listconferenceparticipant) - List Conference Participants.
* [listEvent](docs/sdk/README.md#listevent)
* [listMetric](docs/sdk/README.md#listmetric)
* [listVideoParticipantSummary](docs/sdk/README.md#listvideoparticipantsummary) - Get a list of room participants.
* [listVideoRoomSummary](docs/sdk/README.md#listvideoroomsummary) - Get a list of Programmable Video Rooms.
* [updateAccountSettings](docs/sdk/README.md#updateaccountsettings)
* [updateAnnotation](docs/sdk/README.md#updateannotation) - Create/Update the annotation for the call
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
