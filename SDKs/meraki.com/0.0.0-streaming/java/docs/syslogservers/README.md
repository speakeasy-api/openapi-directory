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
                .setSecurity(new Security("quasi") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSyslogServersRequest req = new GetNetworkSyslogServersRequest("blanditiis");            

            GetNetworkSyslogServersResponse res = sdk.syslogServers.getNetworkSyslogServers(req);

            if (res.getNetworkSyslogServers200ApplicationJSONObjects != null) {
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
                .setSecurity(new Security("eius") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkSyslogServersRequest req = new UpdateNetworkSyslogServersRequest(                new UpdateNetworkSyslogServersRequestBody(                new org.openapis.openapi.models.operations.UpdateNetworkSyslogServersRequestBodyServers[]{{
                                                add(new UpdateNetworkSyslogServersRequestBodyServers("reprehenderit", 800799L,                 new String[]{{
                                                                    add("corrupti"),
                                                                    add("amet"),
                                                                    add("molestiae"),
                                                                }}) {{
                                                    host = "eos";
                                                    port = 748023L;
                                                    roles = new String[]{{
                                                        add("minus"),
                                                        add("quia"),
                                                        add("magnam"),
                                                    }};
                                                }}),
                                                add(new UpdateNetworkSyslogServersRequestBodyServers("architecto", 564627L,                 new String[]{{
                                                                    add("sunt"),
                                                                    add("maiores"),
                                                                }}) {{
                                                    host = "amet";
                                                    port = 675126L;
                                                    roles = new String[]{{
                                                        add("perferendis"),
                                                        add("necessitatibus"),
                                                    }};
                                                }}),
                                                add(new UpdateNetworkSyslogServersRequestBodyServers("veniam", 469994L,                 new String[]{{
                                                                    add("nisi"),
                                                                    add("tenetur"),
                                                                }}) {{
                                                    host = "neque";
                                                    port = 139745L;
                                                    roles = new String[]{{
                                                        add("veniam"),
                                                        add("ipsam"),
                                                        add("eaque"),
                                                        add("exercitationem"),
                                                    }};
                                                }}),
                                                add(new UpdateNetworkSyslogServersRequestBodyServers("sit", 694728L,                 new String[]{{
                                                                    add("perferendis"),
                                                                    add("id"),
                                                                    add("sapiente"),
                                                                    add("sed"),
                                                                }}) {{
                                                    host = "quis";
                                                    port = 845154L;
                                                    roles = new String[]{{
                                                        add("suscipit"),
                                                        add("pariatur"),
                                                    }};
                                                }}),
                                            }});, "possimus");            

            UpdateNetworkSyslogServersResponse res = sdk.syslogServers.updateNetworkSyslogServers(req);

            if (res.updateNetworkSyslogServers200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
