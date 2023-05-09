# patientController

## Overview

Patient Controller

### Available Operations

* [getBasicPatientDetails](#getbasicpatientdetails) - Get Basic Patient Information

## getBasicPatientDetails

Given a User ID, get basic patient information for a user from clinical data stored in FHIR

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBasicPatientDetailsRequest;
import org.openapis.openapi.models.operations.GetBasicPatientDetailsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBasicPatientDetailsRequest req = new GetBasicPatientDetailsRequest(528895L);            

            GetBasicPatientDetailsResponse res = sdk.patientController.getBasicPatientDetails(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
