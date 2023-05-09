# rootReplication

## Overview

Replication.

### Available Operations

* [disablePerLocationPause](#disableperlocationpause) - Resume replication from specified source clusters
* [enablePerLocationPause](#enableperlocationpause) - Pause replication from specified source clusters

## disablePerLocationPause

A single Rubrik cluster can be the replication target for multiple source Rubrik clusters. For each source cluster specified, this resumes replication from that source cluster to the target cluster. This call must be made on the target cluster.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisablePerLocationPauseResponse;
import org.openapis.openapi.models.shared.DisablePerLocationPause;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("id", "sapiente") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            org.openapis.openapi.models.shared.DisablePerLocationPause req = new DisablePerLocationPause(false,                 new String[]{{
                                add("possimus"),
                            }});            

            DisablePerLocationPauseResponse res = sdk.rootReplication.disablePerLocationPause(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enablePerLocationPause

A single Rubrik cluster can be the replication target for multiple source Rubrik clusters. For each source cluster specified, this pauses replication from that source cluster to the target cluster. This call must be made on the target cluster.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnablePerLocationPauseResponse;
import org.openapis.openapi.models.shared.EnablePerLocationPause;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("repellat", "repudiandae") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            org.openapis.openapi.models.shared.EnablePerLocationPause req = new EnablePerLocationPause(false,                 new String[]{{
                                add("adipisci"),
                            }});            

            EnablePerLocationPauseResponse res = sdk.rootReplication.enablePerLocationPause(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
