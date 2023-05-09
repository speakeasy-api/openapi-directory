# snmp

### Available Operations

* [getNetworkSnmp](#getnetworksnmp) - Return the SNMP settings for a network
* [getOrganizationSnmp](#getorganizationsnmp) - Return the SNMP settings for an organization
* [updateNetworkSnmp](#updatenetworksnmp) - Update the SNMP settings for a network
* [updateOrganizationSnmp](#updateorganizationsnmp) - Update the SNMP settings for an organization

## getNetworkSnmp

Return the SNMP settings for a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSnmpRequest;
import org.openapis.openapi.models.operations.GetNetworkSnmpResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sit") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSnmpRequest req = new GetNetworkSnmpRequest("rem");            

            GetNetworkSnmpResponse res = sdk.snmp.getNetworkSnmp(req);

            if (res.getNetworkSnmp200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationSnmp

Return the SNMP settings for an organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationSnmpRequest;
import org.openapis.openapi.models.operations.GetOrganizationSnmpResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("harum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationSnmpRequest req = new GetOrganizationSnmpRequest("cumque");            

            GetOrganizationSnmpResponse res = sdk.snmp.getOrganizationSnmp(req);

            if (res.getOrganizationSnmp200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkSnmp

Update the SNMP settings for a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkSnmpRequest;
import org.openapis.openapi.models.operations.UpdateNetworkSnmpRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkSnmpRequestBodyAccessEnum;
import org.openapis.openapi.models.operations.UpdateNetworkSnmpRequestBodyUsers;
import org.openapis.openapi.models.operations.UpdateNetworkSnmpResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkSnmpRequest req = new UpdateNetworkSnmpRequest("incidunt") {{
                requestBody = new UpdateNetworkSnmpRequestBody() {{
                    access = UpdateNetworkSnmpRequestBodyAccessEnum.COMMUNITY;
                    communityString = "quisquam";
                    users = new org.openapis.openapi.models.operations.UpdateNetworkSnmpRequestBodyUsers[]{{
                        add(new UpdateNetworkSnmpRequestBodyUsers("consequuntur", "nostrum") {{
                            passphrase = "ab";
                            username = "Marjory.Feest";
                        }}),
                        add(new UpdateNetworkSnmpRequestBodyUsers("assumenda", "illum") {{
                            passphrase = "soluta";
                            username = "Doyle.Roberts";
                        }}),
                        add(new UpdateNetworkSnmpRequestBodyUsers("commodi", "repudiandae") {{
                            passphrase = "qui";
                            username = "Eda_Kessler33";
                        }}),
                    }};
                }};;
            }};            

            UpdateNetworkSnmpResponse res = sdk.snmp.updateNetworkSnmp(req);

            if (res.updateNetworkSnmp200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateOrganizationSnmp

Update the SNMP settings for an organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateOrganizationSnmpRequest;
import org.openapis.openapi.models.operations.UpdateOrganizationSnmpRequestBody;
import org.openapis.openapi.models.operations.UpdateOrganizationSnmpRequestBodyV3AuthModeEnum;
import org.openapis.openapi.models.operations.UpdateOrganizationSnmpRequestBodyV3PrivModeEnum;
import org.openapis.openapi.models.operations.UpdateOrganizationSnmpResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateOrganizationSnmpRequest req = new UpdateOrganizationSnmpRequest("sed") {{
                requestBody = new UpdateOrganizationSnmpRequestBody() {{
                    peerIps = new String[]{{
                        add("cupiditate"),
                    }};
                    v2cEnabled = false;
                    v3AuthMode = UpdateOrganizationSnmpRequestBodyV3AuthModeEnum.MD5;
                    v3AuthPass = "assumenda";
                    v3Enabled = false;
                    v3PrivMode = UpdateOrganizationSnmpRequestBodyV3PrivModeEnum.DES;
                    v3PrivPass = "ducimus";
                }};;
            }};            

            UpdateOrganizationSnmpResponse res = sdk.snmp.updateOrganizationSnmp(req);

            if (res.updateOrganizationSnmp200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
