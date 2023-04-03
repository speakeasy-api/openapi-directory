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

import org.openapis.openapi.models.operations.PostV01BulkCallSecurity;
import org.openapis.openapi.models.operations.PostV01BulkCallResponse;
import org.openapis.openapi.models.shared.BulkCallParameters;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.BulkCallParameters req = new BulkCallParameters() {{
                answerUrl = "https://example.com/answer/";
                callerName = "Bulk Test";
                confirmKey = "1";
                confirmSound = "https://example.com/confirm_sound/";
                coreUUID = "2e8e6275-7cfe-4e3c-a8d6-25316b4519c7";
                delimiter = "<";
                extraDialString = "bridge_early_media=true,hangup_after_bridge=true";
                from = "15551234567";
                gatewayCodecs = "'PCMA,PCMU','G729,PCMU','PCMA,G729'";
                gatewayRetries = "3,1,2";
                gatewayTimeouts = "10,30,20";
                gateways = "user/,sofia/gateway/PSTNgateway1/,sofia/gateway/PSTNgateway2/";
                hangupOnRing = 90;
                hangupUrl = "https://example.com/hangup/";
                rejectCauses = "USER_BUSY,NO_ANSWER";
                ringUrl = "https://example.com/ring/";
                sendDigits = "1w2w3W#*@1500";
                sendOnPreanswer = false;
                timeLimit = 90;
                to = "15557654321";
            }}            

            PostV01BulkCallResponse res = sdk.call.postV01BulkCall(req, new PostV01BulkCallSecurity() {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.bulkCallResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### call

* `postV01BulkCall` - /v0.1/BulkCall/
* `postV01Call` - /v0.1/Call/
* `postV01CancelScheduledHangup` - /v0.1/CancelScheduledHangup/
* `postV01CancelScheduledPlay` - /v0.1/CancelScheduledPlay/
* `postV01GroupCall` - /v0.1/GroupCall/
* `postV01HangupAllCalls` - /v0.1/HangupAllCalls/
* `postV01HangupCall` - /v0.1/HangupCall/
* `postV01Play` - /v0.1/Play/
* `postV01PlayStop` - /v0.1/PlayStop/
* `postV01RecordStart` - /v0.1/RecordStart/
* `postV01RecordStop` - /v0.1/RecordStop/
* `postV01ScheduleHangup` - /v0.1/ScheduleHangup/
* `postV01SchedulePlay` - /v0.1/SchedulePlay/
* `postV01SendDigits` - /v0.1/SendDigits/
* `postV01SoundTouch` - /v0.1/SoundTouch/
* `postV01SoundTouchStop` - /v0.1/SoundTouchStop/
* `postV01TransferCall` - /v0.1/TransferCall/

### conference

* `postV01ConferenceDeaf` - /v0.1/ConferenceDeaf/
* `postV01ConferenceHangup` - /v0.1/ConferenceHangup/
* `postV01ConferenceKick` - /v0.1/ConferenceKick/
* `postV01ConferenceList` - /v0.1/ConferenceList/
* `postV01ConferenceListMembers` - /v0.1/ConferenceListMembers/
* `postV01ConferenceMute` - /v0.1/ConferenceMute/
* `postV01ConferencePlay` - /v0.1/ConferencePlay/
* `postV01ConferenceRecordStart` - /v0.1/ConferenceRecordStart/
* `postV01ConferenceRecordStop` - /v0.1/ConferenceRecordStop/
* `postV01ConferenceSpeak` - /v0.1/ConferenceSpeak/
* `postV01ConferenceUndeaf` - /v0.1/ConferenceUndeaf/
* `postV01ConferenceUnmute` - /v0.1/ConferenceUnmute/
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
