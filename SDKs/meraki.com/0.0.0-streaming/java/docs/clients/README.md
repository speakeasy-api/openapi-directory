# clients

### Available Operations

* [getDeviceClients](#getdeviceclients) - List the clients of a device, up to a maximum of a month ago
* [getNetworkClient](#getnetworkclient) - Return the client associated with the given identifier
* [getNetworkClientEvents](#getnetworkclientevents) - Return the events associated with this client
* [getNetworkClientLatencyHistory](#getnetworkclientlatencyhistory) - Return the latency history for a client
* [getNetworkClientPolicy](#getnetworkclientpolicy) - Return the policy assigned to a client on the network
* [getNetworkClientSplashAuthorizationStatus](#getnetworkclientsplashauthorizationstatus) - Return the splash authorization for a client, for each SSID they've associated with through splash
* [getNetworkClientUsageHistory](#getnetworkclientusagehistory) - Return the client's daily usage history
* [getNetworkClients](#getnetworkclients) - List the clients that have used this network in the timespan
* [provisionNetworkClients](#provisionnetworkclients) - Provisions a client with a name and policy
* [updateNetworkClientPolicy](#updatenetworkclientpolicy) - Update the policy assigned to a client on the network
* [updateNetworkClientSplashAuthorizationStatus](#updatenetworkclientsplashauthorizationstatus) - Update a client's splash authorization

## getDeviceClients

List the clients of a device, up to a maximum of a month ago. The usage of each client is returned in kilobytes. If the device is a switch, the switchport is returned; otherwise the switchport field is null.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceClientsRequest;
import org.openapis.openapi.models.operations.GetDeviceClientsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceClientsRequest req = new GetDeviceClientsRequest("laborum") {{
                t0 = "totam";
                timespan = 2768.94;
            }};            

            GetDeviceClientsResponse res = sdk.clients.getDeviceClients(req);

            if (res.getDeviceClients200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkClient

Return the client associated with the given identifier. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkClientRequest;
import org.openapis.openapi.models.operations.GetNetworkClientResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aspernatur") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkClientRequest req = new GetNetworkClientRequest("dolores", "distinctio");            

            GetNetworkClientResponse res = sdk.clients.getNetworkClient(req);

            if (res.getNetworkClient200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkClientEvents

Return the events associated with this client. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkClientEventsRequest;
import org.openapis.openapi.models.operations.GetNetworkClientEventsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkClientEventsRequest req = new GetNetworkClientEventsRequest("aliquid", "quam") {{
                endingBefore = "molestias";
                perPage = 840429L;
                startingAfter = "qui";
            }};            

            GetNetworkClientEventsResponse res = sdk.clients.getNetworkClientEvents(req);

            if (res.getNetworkClientEvents200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkClientLatencyHistory

Return the latency history for a client. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP. The latency data is from a sample of 2% of packets and is grouped into 4 traffic categories: background, best effort, video, voice. Within these categories the sampled packet counters are bucketed by latency in milliseconds.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkClientLatencyHistoryRequest;
import org.openapis.openapi.models.operations.GetNetworkClientLatencyHistoryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("neque") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkClientLatencyHistoryRequest req = new GetNetworkClientLatencyHistoryRequest("fugit", "magni") {{
                resolution = 488056L;
                t0 = "sunt";
                t1 = "ullam";
                timespan = 7220.81;
            }};            

            GetNetworkClientLatencyHistoryResponse res = sdk.clients.getNetworkClientLatencyHistory(req);

            if (res.getNetworkClientLatencyHistory200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkClientPolicy

Return the policy assigned to a client on the network. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkClientPolicyRequest;
import org.openapis.openapi.models.operations.GetNetworkClientPolicyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkClientPolicyRequest req = new GetNetworkClientPolicyRequest("voluptatem", "cumque");            

            GetNetworkClientPolicyResponse res = sdk.clients.getNetworkClientPolicy(req);

            if (res.getNetworkClientPolicy200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkClientSplashAuthorizationStatus

Return the splash authorization for a client, for each SSID they've associated with through splash. Only enabled SSIDs with Click-through splash enabled will be included. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkClientSplashAuthorizationStatusRequest;
import org.openapis.openapi.models.operations.GetNetworkClientSplashAuthorizationStatusResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("soluta") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkClientSplashAuthorizationStatusRequest req = new GetNetworkClientSplashAuthorizationStatusRequest("nobis", "et");            

            GetNetworkClientSplashAuthorizationStatusResponse res = sdk.clients.getNetworkClientSplashAuthorizationStatus(req);

            if (res.getNetworkClientSplashAuthorizationStatus200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkClientUsageHistory

Return the client's daily usage history. Usage data is in kilobytes. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkClientUsageHistoryRequest;
import org.openapis.openapi.models.operations.GetNetworkClientUsageHistoryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkClientUsageHistoryRequest req = new GetNetworkClientUsageHistoryRequest("ipsum", "veritatis");            

            GetNetworkClientUsageHistoryResponse res = sdk.clients.getNetworkClientUsageHistory(req);

            if (res.getNetworkClientUsageHistory200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkClients

List the clients that have used this network in the timespan

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkClientsRequest;
import org.openapis.openapi.models.operations.GetNetworkClientsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkClientsRequest req = new GetNetworkClientsRequest("quos") {{
                endingBefore = "tempore";
                perPage = 584476L;
                startingAfter = "aperiam";
                t0 = "delectus";
                timespan = 2091.57;
            }};            

            GetNetworkClientsResponse res = sdk.clients.getNetworkClients(req);

            if (res.getNetworkClients200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## provisionNetworkClients

Provisions a client with a name and policy. Clients can be provisioned before they associate to the network.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequest;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBody;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyDevicePolicyEnum;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySecurityAppliance;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySecurityApplianceDevicePolicyEnum;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid0;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid0DevicePolicyEnum;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid10;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid10DevicePolicyEnum;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid11;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid11DevicePolicyEnum;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid12;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid12DevicePolicyEnum;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid13;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid13DevicePolicyEnum;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid14;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid14DevicePolicyEnum;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid1;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid1DevicePolicyEnum;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid2;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid2DevicePolicyEnum;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid3;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid3DevicePolicyEnum;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid4;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid4DevicePolicyEnum;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid5;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid5DevicePolicyEnum;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid6;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid6DevicePolicyEnum;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid7;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid7DevicePolicyEnum;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid8;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid8DevicePolicyEnum;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid9;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid9DevicePolicyEnum;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolore") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ProvisionNetworkClientsRequest req = new ProvisionNetworkClientsRequest(                new ProvisionNetworkClientsRequestBody(ProvisionNetworkClientsRequestBodyDevicePolicyEnum.BLOCKED, "adipisci") {{
                                groupPolicyId = "dolorum";
                                name = "Amy Armstrong";
                                policiesBySecurityAppliance = new ProvisionNetworkClientsRequestBodyPoliciesBySecurityAppliance() {{
                                    devicePolicy = ProvisionNetworkClientsRequestBodyPoliciesBySecurityApplianceDevicePolicyEnum.BLOCKED;
                                }};;
                                policiesBySsid = new ProvisionNetworkClientsRequestBodyPoliciesBySsid() {{
                                    zero = new ProvisionNetworkClientsRequestBodyPoliciesBySsid0(ProvisionNetworkClientsRequestBodyPoliciesBySsid0DevicePolicyEnum.NORMAL) {{
                                        groupPolicyId = "repellendus";
                                    }};;
                                    one = new ProvisionNetworkClientsRequestBodyPoliciesBySsid1(ProvisionNetworkClientsRequestBodyPoliciesBySsid1DevicePolicyEnum.WHITELISTED) {{
                                        groupPolicyId = "doloribus";
                                    }};;
                                    ten = new ProvisionNetworkClientsRequestBodyPoliciesBySsid10(ProvisionNetworkClientsRequestBodyPoliciesBySsid10DevicePolicyEnum.GROUP_POLICY) {{
                                        groupPolicyId = "facilis";
                                    }};;
                                    eleven = new ProvisionNetworkClientsRequestBodyPoliciesBySsid11(ProvisionNetworkClientsRequestBodyPoliciesBySsid11DevicePolicyEnum.NORMAL) {{
                                        groupPolicyId = "qui";
                                    }};;
                                    twelve = new ProvisionNetworkClientsRequestBodyPoliciesBySsid12(ProvisionNetworkClientsRequestBodyPoliciesBySsid12DevicePolicyEnum.BLOCKED) {{
                                        groupPolicyId = "laudantium";
                                    }};;
                                    thirteen = new ProvisionNetworkClientsRequestBodyPoliciesBySsid13(ProvisionNetworkClientsRequestBodyPoliciesBySsid13DevicePolicyEnum.GROUP_POLICY) {{
                                        groupPolicyId = "occaecati";
                                    }};;
                                    fourteen = new ProvisionNetworkClientsRequestBodyPoliciesBySsid14(ProvisionNetworkClientsRequestBodyPoliciesBySsid14DevicePolicyEnum.WHITELISTED) {{
                                        groupPolicyId = "quisquam";
                                    }};;
                                    two = new ProvisionNetworkClientsRequestBodyPoliciesBySsid2(ProvisionNetworkClientsRequestBodyPoliciesBySsid2DevicePolicyEnum.WHITELISTED) {{
                                        groupPolicyId = "omnis";
                                    }};;
                                    three = new ProvisionNetworkClientsRequestBodyPoliciesBySsid3(ProvisionNetworkClientsRequestBodyPoliciesBySsid3DevicePolicyEnum.GROUP_POLICY) {{
                                        groupPolicyId = "ipsum";
                                    }};;
                                    four = new ProvisionNetworkClientsRequestBodyPoliciesBySsid4(ProvisionNetworkClientsRequestBodyPoliciesBySsid4DevicePolicyEnum.WHITELISTED) {{
                                        groupPolicyId = "voluptate";
                                    }};;
                                    five = new ProvisionNetworkClientsRequestBodyPoliciesBySsid5(ProvisionNetworkClientsRequestBodyPoliciesBySsid5DevicePolicyEnum.BLOCKED) {{
                                        groupPolicyId = "vero";
                                    }};;
                                    six = new ProvisionNetworkClientsRequestBodyPoliciesBySsid6(ProvisionNetworkClientsRequestBodyPoliciesBySsid6DevicePolicyEnum.WHITELISTED) {{
                                        groupPolicyId = "dignissimos";
                                    }};;
                                    seven = new ProvisionNetworkClientsRequestBodyPoliciesBySsid7(ProvisionNetworkClientsRequestBodyPoliciesBySsid7DevicePolicyEnum.WHITELISTED) {{
                                        groupPolicyId = "distinctio";
                                    }};;
                                    eight = new ProvisionNetworkClientsRequestBodyPoliciesBySsid8(ProvisionNetworkClientsRequestBodyPoliciesBySsid8DevicePolicyEnum.WHITELISTED) {{
                                        groupPolicyId = "odio";
                                    }};;
                                    nine = new ProvisionNetworkClientsRequestBodyPoliciesBySsid9(ProvisionNetworkClientsRequestBodyPoliciesBySsid9DevicePolicyEnum.NORMAL) {{
                                        groupPolicyId = "facilis";
                                    }};;
                                }};;
                            }};, "vero");            

            ProvisionNetworkClientsResponse res = sdk.clients.provisionNetworkClients(req);

            if (res.provisionNetworkClients201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkClientPolicy

Update the policy assigned to a client on the network. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkClientPolicyRequest;
import org.openapis.openapi.models.operations.UpdateNetworkClientPolicyRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkClientPolicyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ducimus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkClientPolicyRequest req = new UpdateNetworkClientPolicyRequest(                new UpdateNetworkClientPolicyRequestBody("dolore") {{
                                groupPolicyId = "quibusdam";
                            }};, "illum", "sequi");            

            UpdateNetworkClientPolicyResponse res = sdk.clients.updateNetworkClientPolicy(req);

            if (res.updateNetworkClientPolicy200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkClientSplashAuthorizationStatus

Update a client's splash authorization. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkClientSplashAuthorizationStatusRequest;
import org.openapis.openapi.models.operations.UpdateNetworkClientSplashAuthorizationStatusRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids0;
import org.openapis.openapi.models.operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids10;
import org.openapis.openapi.models.operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids11;
import org.openapis.openapi.models.operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids12;
import org.openapis.openapi.models.operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids13;
import org.openapis.openapi.models.operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids14;
import org.openapis.openapi.models.operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids1;
import org.openapis.openapi.models.operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids2;
import org.openapis.openapi.models.operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids3;
import org.openapis.openapi.models.operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids4;
import org.openapis.openapi.models.operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids5;
import org.openapis.openapi.models.operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids6;
import org.openapis.openapi.models.operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids7;
import org.openapis.openapi.models.operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids8;
import org.openapis.openapi.models.operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids9;
import org.openapis.openapi.models.operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids;
import org.openapis.openapi.models.operations.UpdateNetworkClientSplashAuthorizationStatusResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkClientSplashAuthorizationStatusRequest req = new UpdateNetworkClientSplashAuthorizationStatusRequest(                new UpdateNetworkClientSplashAuthorizationStatusRequestBody(                new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids() {{
                                                zero = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids0() {{
                                                    isAuthorized = false;
                                                }};;
                                                one = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids1() {{
                                                    isAuthorized = false;
                                                }};;
                                                ten = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids10() {{
                                                    isAuthorized = false;
                                                }};;
                                                eleven = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids11() {{
                                                    isAuthorized = false;
                                                }};;
                                                twelve = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids12() {{
                                                    isAuthorized = false;
                                                }};;
                                                thirteen = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids13() {{
                                                    isAuthorized = false;
                                                }};;
                                                fourteen = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids14() {{
                                                    isAuthorized = false;
                                                }};;
                                                two = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids2() {{
                                                    isAuthorized = false;
                                                }};;
                                                three = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids3() {{
                                                    isAuthorized = false;
                                                }};;
                                                four = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids4() {{
                                                    isAuthorized = false;
                                                }};;
                                                five = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids5() {{
                                                    isAuthorized = false;
                                                }};;
                                                six = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids6() {{
                                                    isAuthorized = false;
                                                }};;
                                                seven = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids7() {{
                                                    isAuthorized = false;
                                                }};;
                                                eight = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids8() {{
                                                    isAuthorized = false;
                                                }};;
                                                nine = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids9() {{
                                                    isAuthorized = false;
                                                }};;
                                            }};);, "impedit", "aut");            

            UpdateNetworkClientSplashAuthorizationStatusResponse res = sdk.clients.updateNetworkClientSplashAuthorizationStatus(req);

            if (res.updateNetworkClientSplashAuthorizationStatus200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
