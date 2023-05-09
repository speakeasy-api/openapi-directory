# syslogServers

### Available Operations

* [getNetworkSyslogServers](#getnetworksyslogservers) - List the syslog servers for a network
* [updateNetworkSyslogServers](#updatenetworksyslogservers) - Update the syslog servers for a network

## getNetworkSyslogServers

List the syslog servers for a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSyslogServersRequest;
import org.openapis.openapi.models.operations.GetNetworkSyslogServersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSyslogServersRequest req = new GetNetworkSyslogServersRequest("itaque");            

            GetNetworkSyslogServersResponse res = sdk.syslogServers.getNetworkSyslogServers(req);

            if (res.getNetworkSyslogServers200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkSyslogServers

Update the syslog servers for a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkSyslogServersRequest;
import org.openapis.openapi.models.operations.UpdateNetworkSyslogServersRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkSyslogServersRequestBodyServers;
import org.openapis.openapi.models.operations.UpdateNetworkSyslogServersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("recusandae") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkSyslogServersRequest req = new UpdateNetworkSyslogServersRequest(                new UpdateNetworkSyslogServersRequestBody(                new org.openapis.openapi.models.operations.UpdateNetworkSyslogServersRequestBodyServers[]{{
                                                add(new UpdateNetworkSyslogServersRequestBodyServers("debitis", 237274L,                 new String[]{{
                                                                    add("dolore"),
                                                                    add("maxime"),
                                                                }}) {{
                                                    host = "explicabo";
                                                    port = 51353L;
                                                    roles = new String[]{{
                                                        add("eos"),
                                                        add("blanditiis"),
                                                        add("nemo"),
                                                    }};
                                                }}),
                                                add(new UpdateNetworkSyslogServersRequestBodyServers("voluptate", 499388L,                 new String[]{{
                                                                    add("vitae"),
                                                                }}) {{
                                                    host = "praesentium";
                                                    port = 311183L;
                                                    roles = new String[]{{
                                                        add("dignissimos"),
                                                        add("alias"),
                                                        add("ullam"),
                                                        add("deserunt"),
                                                    }};
                                                }}),
                                            }});, "repudiandae");            

            UpdateNetworkSyslogServersResponse res = sdk.syslogServers.updateNetworkSyslogServers(req);

            if (res.updateNetworkSyslogServers200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
