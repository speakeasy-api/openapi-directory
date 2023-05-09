# rootOrganization

## Overview

Organization.

### Available Operations

* [bulkCreateEnvoys](#bulkcreateenvoys) - Create a list of Rubrik Envoy objects
* [bulkDeleteEnvoys](#bulkdeleteenvoys) - Remove a list of Rubrik Envoy objects
* [bulkUpdateEnvoys](#bulkupdateenvoys) - Update a list of Rubrik Envoy objects

## bulkCreateEnvoys

Create a list of Rubrik Envoy objects for a specified organization and specify the properties to assign to the Rubrik Envoy objects.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BulkCreateEnvoysRequest;
import org.openapis.openapi.models.operations.BulkCreateEnvoysResponse;
import org.openapis.openapi.models.shared.EnvoyCreate;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("corporis", "rerum") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            BulkCreateEnvoysRequest req = new BulkCreateEnvoysRequest(                new org.openapis.openapi.models.shared.EnvoyCreate[]{{
                                add(new EnvoyCreate("accusantium", 664197) {{
                                    ipAddress = "error";
                                    port = 424854;
                                }}),
                            }}, "laboriosam");            

            BulkCreateEnvoysResponse res = sdk.rootOrganization.bulkCreateEnvoys(req);

            if (res.envoyDetailList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bulkDeleteEnvoys

Remove a list of Rubrik Envoy objects from an organization and delete the objects from the Rubrik cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BulkDeleteEnvoysRequest;
import org.openapis.openapi.models.operations.BulkDeleteEnvoysResponse;
import org.openapis.openapi.models.shared.EnvoyIdList;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("ex", "quas") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            BulkDeleteEnvoysRequest req = new BulkDeleteEnvoysRequest(                new EnvoyIdList(                new String[]{{
                                                add("ullam"),
                                            }});, "quae");            

            BulkDeleteEnvoysResponse res = sdk.rootOrganization.bulkDeleteEnvoys(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bulkUpdateEnvoys

Change one or more of the properties of a list of Rubrik Envoy objects.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BulkUpdateEnvoysRequest;
import org.openapis.openapi.models.operations.BulkUpdateEnvoysResponse;
import org.openapis.openapi.models.shared.EnvoyBulkUpdate;
import org.openapis.openapi.models.shared.EnvoyUpdate;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("similique", "incidunt") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            BulkUpdateEnvoysRequest req = new BulkUpdateEnvoysRequest(                new org.openapis.openapi.models.shared.EnvoyBulkUpdate[]{{
                                add(new EnvoyBulkUpdate("tempore",                 new EnvoyUpdate() {{
                                                    ipAddress = "quidem";
                                                    port = 265930;
                                                }};) {{
                                    id = "2af923c5-949f-483f-b50c-f876ffb901c6";
                                    updateProperties = new EnvoyUpdate() {{
                                        ipAddress = "eveniet";
                                        port = 781582;
                                    }};
                                }}),
                                add(new EnvoyBulkUpdate("natus",                 new EnvoyUpdate() {{
                                                    ipAddress = "minus";
                                                    port = 154389;
                                                }};) {{
                                    id = "e243cf78-9ffa-4fed-a53e-5ae6e0ac184c";
                                    updateProperties = new EnvoyUpdate() {{
                                        ipAddress = "eos";
                                        port = 748023;
                                    }};
                                }}),
                            }}, "magnam");            

            BulkUpdateEnvoysResponse res = sdk.rootOrganization.bulkUpdateEnvoys(req);

            if (res.envoyDetailList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
