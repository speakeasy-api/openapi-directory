# datacenters

## Overview

Each Datacenter represents a *virtual* Datacenter which is made up of possible many physical Datacenters where Servers are hosted.

Datacenter names are composed from their Location and virtual Datacenter number, for example `fsn1-dc14` means virtual Datacenter `14` in Location `fsn1`.

Right now there is only one Datacenter for each Location. The Datacenter numbers for `fsn`, `nbg` and `hel` are arbitrarily set to `14`, `3` and `2` for historic reasons and do not represent real physical Hetzner datacenters.


### Available Operations

* [getDatacenters](#getdatacenters) - Get all Datacenters
* [getDatacentersId](#getdatacentersid) - Get a Datacenter

## getDatacenters

Returns all Datacenter objects.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDatacentersRequest;
import org.openapis.openapi.models.operations.GetDatacentersResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDatacentersRequest req = new GetDatacentersRequest() {{
                name = "Miss Lowell Parisian";
            }};            

            GetDatacentersResponse res = sdk.datacenters.getDatacenters(req);

            if (res.getDatacenters200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDatacentersId

Returns a specific Datacenter object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDatacentersIdRequest;
import org.openapis.openapi.models.operations.GetDatacentersIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDatacentersIdRequest req = new GetDatacentersIdRequest(582020L);            

            GetDatacentersIdResponse res = sdk.datacenters.getDatacentersId(req);

            if (res.getDatacentersId200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
