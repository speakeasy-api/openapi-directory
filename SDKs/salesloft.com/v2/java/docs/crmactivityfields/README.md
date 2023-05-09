# crmActivityFields

## Overview

CRM Activity Fields

### Available Operations

* [getV2CrmActivityFieldsJson](#getv2crmactivityfieldsjson) - List crm activity fields

## getV2CrmActivityFieldsJson

Fetches multiple crm activity field records. The records can be filtered, paged, and sorted according to
the respective parameters.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV2CrmActivityFieldsJsonRequest;
import org.openapis.openapi.models.operations.GetV2CrmActivityFieldsJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2CrmActivityFieldsJsonRequest req = new GetV2CrmActivityFieldsJsonRequest() {{
                includePagingCounts = false;
                limitPagingCounts = false;
                page = 518201L;
                perPage = 471752L;
                sortBy = "sit";
                sortDirection = "expedita";
                source = "neque";
            }};            

            GetV2CrmActivityFieldsJsonResponse res = sdk.crmActivityFields.getV2CrmActivityFieldsJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
