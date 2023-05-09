# manifests

## Overview

manifests


### Available Operations

* [createManifest](#createmanifest) - Create Manifest
* [getManifestById](#getmanifestbyid) - Get Manifest By Id
* [getManifestRequestById](#getmanifestrequestbyid) - Get Manifest Request By Id
* [listManifests](#listmanifests) - List Manifests

## createManifest

Each ShipEngine manifest is created for a specific warehouse, so you'll need to provide the warehouse_id
rather than the ship_from address. You can create a warehouse for each location that you want to create manifests for.


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateManifestResponse;
import org.openapis.openapi.models.shared.CreateManifestByObjectRequestBody;
import org.openapis.openapi.models.shared.CreateManifestLabelIdsRequestBody;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequuntur") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.. req = new CreateManifestLabelIdsRequestBody(                new String[]{{
                                add("se-28529731"),
                            }}) {{
                labelIds = new String[]{{
                    add("se-28529731"),
                    add("se-28529731"),
                    add("se-28529731"),
                }};
            }}            

            CreateManifestResponse res = sdk.manifests.createManifest(req);

            if (res.createManifestResponseBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getManifestById

Get Manifest By Id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetManifestByIdRequest;
import org.openapis.openapi.models.operations.GetManifestByIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sunt") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetManifestByIdRequest req = new GetManifestByIdRequest("se-28529731");            

            GetManifestByIdResponse res = sdk.manifests.getManifestById(req);

            if (res.getManifestByIdResponseBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getManifestRequestById

Get Manifest Request By Id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetManifestRequestByIdRequest;
import org.openapis.openapi.models.operations.GetManifestRequestByIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetManifestRequestByIdRequest req = new GetManifestRequestByIdRequest("se-28529731");            

            GetManifestRequestByIdResponse res = sdk.manifests.getManifestRequestById(req);

            if (res.createManifestResponseBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listManifests

Similar to querying shipments, we allow you to query manifests since there will likely be a large number over a long period of time.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListManifestsRequest;
import org.openapis.openapi.models.operations.ListManifestsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illum") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListManifestsRequest req = new ListManifestsRequest() {{
                carrierId = "se-28529731";
                createdAtEnd = OffsetDateTime.parse("2020-07-30T23:39:27.609Z");
                createdAtStart = OffsetDateTime.parse("2022-06-07T06:40:38.496Z");
                labelIds = new String[]{{
                    add("se-28529731"),
                }};
                page = 407183;
                pageSize = 33222;
                shipDateEnd = OffsetDateTime.parse("2022-01-07T08:38:36.147Z");
                shipDateStart = OffsetDateTime.parse("2022-04-03T11:56:45.015Z");
                warehouseId = "se-28529731";
            }};            

            ListManifestsResponse res = sdk.manifests.listManifests(req);

            if (res.listManifestsResponseBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
