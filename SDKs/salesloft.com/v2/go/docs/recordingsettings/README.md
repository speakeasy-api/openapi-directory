# RecordingSettings

## Overview

Recording Settings Information

### Available Operations

* [GetV2PhoneNumbersRecordingSettingsIDJSON](#getv2phonenumbersrecordingsettingsidjson) - Fetch recording setting

## GetV2PhoneNumbersRecordingSettingsIDJSON

Fetches the recording status for a given phone number, based on Do Not Record and Recording Governance for your team.
Phone number should be in E.164 format.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.RecordingSettings.GetV2PhoneNumbersRecordingSettingsIDJSON(ctx, operations.GetV2PhoneNumbersRecordingSettingsIDJSONRequest{
        ID: "506a8aa9-4c02-4644-8f5e-9d9a4578adc1",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
