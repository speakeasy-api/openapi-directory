# recordingSettings

## Overview

Recording Settings Information

### Available Operations

* [getV2PhoneNumbersRecordingSettingsIdJson](#getv2phonenumbersrecordingsettingsidjson) - Fetch recording setting

## getV2PhoneNumbersRecordingSettingsIdJson

Fetches the recording status for a given phone number, based on Do Not Record and Recording Governance for your team.
Phone number should be in E.164 format.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV2PhoneNumbersRecordingSettingsIdJsonRequest;
import org.openapis.openapi.models.operations.GetV2PhoneNumbersRecordingSettingsIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2PhoneNumbersRecordingSettingsIdJsonRequest req = new GetV2PhoneNumbersRecordingSettingsIdJsonRequest("aliquam");            

            GetV2PhoneNumbersRecordingSettingsIdJsonResponse res = sdk.recordingSettings.getV2PhoneNumbersRecordingSettingsIdJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
