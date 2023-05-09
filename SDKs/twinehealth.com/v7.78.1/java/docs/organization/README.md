# organization

## Overview

An organization is a Fitbit Plus customer. No data is accessible across organizations.

### Available Operations

* [fetchOrganization](#fetchorganization) - Get an organization

## fetchOrganization

Get an organization record by id.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchOrganizationRequest;
import org.openapis.openapi.models.operations.FetchOrganizationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchOrganizationRequest req = new FetchOrganizationRequest("maxime");            

            FetchOrganizationResponse res = sdk.organization.fetchOrganization(req);

            if (res.fetchOrganizationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
