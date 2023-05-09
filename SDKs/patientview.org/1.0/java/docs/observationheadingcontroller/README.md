# observationHeadingController

## Overview

Observation Heading Controller

### Available Operations

* [getAvailableObservationHeadings](#getavailableobservationheadings) - Get Available Observations Types For a User
* [getPatientEnteredObservationHeadings](#getpatiententeredobservationheadings) - Get Available Patient Entered Observations Types For a User

## getAvailableObservationHeadings

Given a User ID retrieve a list of available observation types for that user (where they have observation data).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAvailableObservationHeadingsRequest;
import org.openapis.openapi.models.operations.GetAvailableObservationHeadingsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAvailableObservationHeadingsRequest req = new GetAvailableObservationHeadingsRequest(791725L);            

            GetAvailableObservationHeadingsResponse res = sdk.observationHeadingController.getAvailableObservationHeadings(req);

            if (res.observationHeadings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPatientEnteredObservationHeadings

Given a User ID retrieve a list of available observation types for that user (where they have patient entered observation data).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPatientEnteredObservationHeadingsRequest;
import org.openapis.openapi.models.operations.GetPatientEnteredObservationHeadingsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPatientEnteredObservationHeadingsRequest req = new GetPatientEnteredObservationHeadingsRequest(812169L);            

            GetPatientEnteredObservationHeadingsResponse res = sdk.observationHeadingController.getPatientEnteredObservationHeadings(req);

            if (res.observationHeadings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
