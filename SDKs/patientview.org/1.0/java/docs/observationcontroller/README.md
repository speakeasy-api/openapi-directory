# observationController

## Overview

Observation Controller

### Available Operations

* [getObservationsByCode](#getobservationsbycode) - Get Observations of a Certain Type For a User
* [getObservationsByCodes](#getobservationsbycodes) - Get Observations of Multiple Types For a User
* [getPatientEnteredObservationsByCode](#getpatiententeredobservationsbycode) - Get patient entered Observations of a Certain Type For a User

## getObservationsByCode

Given a User ID and observation code, retrieve all observations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetObservationsByCodeRequest;
import org.openapis.openapi.models.operations.GetObservationsByCodeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetObservationsByCodeRequest req = new GetObservationsByCodeRequest("error", 645894L);            

            GetObservationsByCodeResponse res = sdk.observationController.getObservationsByCode(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getObservationsByCodes

Given a User ID and search parameters, retrieve a page of observations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetObservationsByCodesRequest;
import org.openapis.openapi.models.operations.GetObservationsByCodesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetObservationsByCodesRequest req = new GetObservationsByCodesRequest(                new String[]{{
                                add("iure"),
                                add("magnam"),
                            }}, 891773L, 56713L, "delectus", 272656L);            

            GetObservationsByCodesResponse res = sdk.observationController.getObservationsByCodes(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPatientEnteredObservationsByCode

Given a User ID and observation code, retrieve patient entered observations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPatientEnteredObservationsByCodeRequest;
import org.openapis.openapi.models.operations.GetPatientEnteredObservationsByCodeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPatientEnteredObservationsByCodeRequest req = new GetPatientEnteredObservationsByCodeRequest("suscipit", 477665L);            

            GetPatientEnteredObservationsByCodeResponse res = sdk.observationController.getPatientEnteredObservationsByCode(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
