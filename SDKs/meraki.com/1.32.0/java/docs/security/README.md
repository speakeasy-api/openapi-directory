# security

### Available Operations

* [getNetworkApplianceClientSecurityEvents](#getnetworkapplianceclientsecurityevents) - List the security events for a client
* [getNetworkApplianceSecurityEvents](#getnetworkappliancesecurityevents) - List the security events for a network
* [getNetworkApplianceSecurityIntrusion](#getnetworkappliancesecurityintrusion) - Returns all supported intrusion settings for an MX network
* [getNetworkApplianceSecurityMalware](#getnetworkappliancesecuritymalware) - Returns all supported malware settings for an MX network
* [getOrganizationApplianceSecurityEvents](#getorganizationappliancesecurityevents) - List the security events for an organization
* [getOrganizationApplianceSecurityIntrusion](#getorganizationappliancesecurityintrusion) - Returns all supported intrusion settings for an organization
* [updateNetworkApplianceSecurityIntrusion](#updatenetworkappliancesecurityintrusion) - Set the supported intrusion settings for an MX network
* [updateNetworkApplianceSecurityMalware](#updatenetworkappliancesecuritymalware) - Set the supported malware settings for an MX network
* [updateOrganizationApplianceSecurityIntrusion](#updateorganizationappliancesecurityintrusion) - Sets supported intrusion settings for an organization

## getNetworkApplianceClientSecurityEvents

List the security events for a client. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceClientSecurityEventsRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceClientSecurityEventsResponse;
import org.openapis.openapi.models.operations.GetNetworkApplianceClientSecurityEventsSortOrderEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceClientSecurityEventsRequest req = new GetNetworkApplianceClientSecurityEventsRequest("inventore", "necessitatibus") {{
                endingBefore = "autem";
                perPage = 369935L;
                sortOrder = GetNetworkApplianceClientSecurityEventsSortOrderEnum.ASCENDING;
                startingAfter = "nihil";
                t0 = "qui";
                t1 = "nesciunt";
                timespan = 1815.67;
            }};            

            GetNetworkApplianceClientSecurityEventsResponse res = sdk.security.getNetworkApplianceClientSecurityEvents(req);

            if (res.getNetworkApplianceClientSecurityEvents200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkApplianceSecurityEvents

List the security events for a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceSecurityEventsRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceSecurityEventsResponse;
import org.openapis.openapi.models.operations.GetNetworkApplianceSecurityEventsSortOrderEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("incidunt") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceSecurityEventsRequest req = new GetNetworkApplianceSecurityEventsRequest("minima") {{
                endingBefore = "cupiditate";
                perPage = 517643L;
                sortOrder = GetNetworkApplianceSecurityEventsSortOrderEnum.DESCENDING;
                startingAfter = "iste";
                t0 = "consectetur";
                t1 = "facilis";
                timespan = 6134.45;
            }};            

            GetNetworkApplianceSecurityEventsResponse res = sdk.security.getNetworkApplianceSecurityEvents(req);

            if (res.getNetworkApplianceSecurityEvents200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkApplianceSecurityIntrusion

Returns all supported intrusion settings for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceSecurityIntrusionRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceSecurityIntrusionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("placeat") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceSecurityIntrusionRequest req = new GetNetworkApplianceSecurityIntrusionRequest("vel");            

            GetNetworkApplianceSecurityIntrusionResponse res = sdk.security.getNetworkApplianceSecurityIntrusion(req);

            if (res.getNetworkApplianceSecurityIntrusion200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkApplianceSecurityMalware

Returns all supported malware settings for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceSecurityMalwareRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceSecurityMalwareResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ex") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceSecurityMalwareRequest req = new GetNetworkApplianceSecurityMalwareRequest("nostrum");            

            GetNetworkApplianceSecurityMalwareResponse res = sdk.security.getNetworkApplianceSecurityMalware(req);

            if (res.getNetworkApplianceSecurityMalware200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationApplianceSecurityEvents

List the security events for an organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationApplianceSecurityEventsRequest;
import org.openapis.openapi.models.operations.GetOrganizationApplianceSecurityEventsResponse;
import org.openapis.openapi.models.operations.GetOrganizationApplianceSecurityEventsSortOrderEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("commodi") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationApplianceSecurityEventsRequest req = new GetOrganizationApplianceSecurityEventsRequest("veniam") {{
                endingBefore = "quas";
                perPage = 224371L;
                sortOrder = GetOrganizationApplianceSecurityEventsSortOrderEnum.DESCENDING;
                startingAfter = "assumenda";
                t0 = "sint";
                t1 = "vel";
                timespan = 1553.41;
            }};            

            GetOrganizationApplianceSecurityEventsResponse res = sdk.security.getOrganizationApplianceSecurityEvents(req);

            if (res.getOrganizationApplianceSecurityEvents200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationApplianceSecurityIntrusion

Returns all supported intrusion settings for an organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationApplianceSecurityIntrusionRequest;
import org.openapis.openapi.models.operations.GetOrganizationApplianceSecurityIntrusionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ut") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationApplianceSecurityIntrusionRequest req = new GetOrganizationApplianceSecurityIntrusionRequest("odit");            

            GetOrganizationApplianceSecurityIntrusionResponse res = sdk.security.getOrganizationApplianceSecurityIntrusion(req);

            if (res.getOrganizationApplianceSecurityIntrusion200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkApplianceSecurityIntrusion

Set the supported intrusion settings for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceSecurityIntrusionRequest;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceSecurityIntrusionRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceSecurityIntrusionRequestBodyIdsRulesetsEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceSecurityIntrusionRequestBodyModeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceSecurityIntrusionRequestBodyProtectedNetworks;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceSecurityIntrusionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkApplianceSecurityIntrusionRequest req = new UpdateNetworkApplianceSecurityIntrusionRequest("inventore") {{
                requestBody = new UpdateNetworkApplianceSecurityIntrusionRequestBody() {{
                    idsRulesets = UpdateNetworkApplianceSecurityIntrusionRequestBodyIdsRulesetsEnum.CONNECTIVITY;
                    mode = UpdateNetworkApplianceSecurityIntrusionRequestBodyModeEnum.DETECTION;
                    protectedNetworks = new UpdateNetworkApplianceSecurityIntrusionRequestBodyProtectedNetworks() {{
                        excludedCidr = new String[]{{
                            add("nobis"),
                            add("quasi"),
                        }};
                        includedCidr = new String[]{{
                            add("asperiores"),
                        }};
                        useDefault = false;
                    }};;
                }};;
            }};            

            UpdateNetworkApplianceSecurityIntrusionResponse res = sdk.security.updateNetworkApplianceSecurityIntrusion(req);

            if (res.updateNetworkApplianceSecurityIntrusion200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkApplianceSecurityMalware

Set the supported malware settings for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceSecurityMalwareRequest;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceSecurityMalwareRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceSecurityMalwareRequestBodyAllowedFiles;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceSecurityMalwareRequestBodyAllowedUrls;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceSecurityMalwareRequestBodyModeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceSecurityMalwareResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eaque") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkApplianceSecurityMalwareRequest req = new UpdateNetworkApplianceSecurityMalwareRequest(                new UpdateNetworkApplianceSecurityMalwareRequestBody(UpdateNetworkApplianceSecurityMalwareRequestBodyModeEnum.ENABLED) {{
                                allowedFiles = new org.openapis.openapi.models.operations.UpdateNetworkApplianceSecurityMalwareRequestBodyAllowedFiles[]{{
                                    add(new UpdateNetworkApplianceSecurityMalwareRequestBodyAllowedFiles("deleniti", "quo") {{
                                        comment = "optio";
                                        sha256 = "ea";
                                    }}),
                                    add(new UpdateNetworkApplianceSecurityMalwareRequestBodyAllowedFiles("velit", "vel") {{
                                        comment = "veniam";
                                        sha256 = "animi";
                                    }}),
                                    add(new UpdateNetworkApplianceSecurityMalwareRequestBodyAllowedFiles("odit", "quasi") {{
                                        comment = "deleniti";
                                        sha256 = "doloribus";
                                    }}),
                                }};
                                allowedUrls = new org.openapis.openapi.models.operations.UpdateNetworkApplianceSecurityMalwareRequestBodyAllowedUrls[]{{
                                    add(new UpdateNetworkApplianceSecurityMalwareRequestBodyAllowedUrls("veniam", "dolorem") {{
                                        comment = "aperiam";
                                        url = "molestias";
                                    }}),
                                }};
                            }};, "delectus");            

            UpdateNetworkApplianceSecurityMalwareResponse res = sdk.security.updateNetworkApplianceSecurityMalware(req);

            if (res.updateNetworkApplianceSecurityMalware200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateOrganizationApplianceSecurityIntrusion

Sets supported intrusion settings for an organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateOrganizationApplianceSecurityIntrusionRequest;
import org.openapis.openapi.models.operations.UpdateOrganizationApplianceSecurityIntrusionRequestBody;
import org.openapis.openapi.models.operations.UpdateOrganizationApplianceSecurityIntrusionRequestBodyAllowedRules;
import org.openapis.openapi.models.operations.UpdateOrganizationApplianceSecurityIntrusionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("asperiores") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateOrganizationApplianceSecurityIntrusionRequest req = new UpdateOrganizationApplianceSecurityIntrusionRequest(                new UpdateOrganizationApplianceSecurityIntrusionRequestBody(                new org.openapis.openapi.models.operations.UpdateOrganizationApplianceSecurityIntrusionRequestBodyAllowedRules[]{{
                                                add(new UpdateOrganizationApplianceSecurityIntrusionRequestBodyAllowedRules("accusantium") {{
                                                    message = "maxime";
                                                    ruleId = "ipsa";
                                                }}),
                                            }});, "necessitatibus");            

            UpdateOrganizationApplianceSecurityIntrusionResponse res = sdk.security.updateOrganizationApplianceSecurityIntrusion(req);

            if (res.updateOrganizationApplianceSecurityIntrusion200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
