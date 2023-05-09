# statics

### Available Operations

* [createNetworkAppliancePrefixesDelegatedStatic](#createnetworkapplianceprefixesdelegatedstatic) - Add a static delegated prefix from a network
* [deleteNetworkAppliancePrefixesDelegatedStatic](#deletenetworkapplianceprefixesdelegatedstatic) - Delete a static delegated prefix from a network
* [getNetworkAppliancePrefixesDelegatedStatic](#getnetworkapplianceprefixesdelegatedstatic) - Return a static delegated prefix from a network
* [getNetworkAppliancePrefixesDelegatedStatics](#getnetworkapplianceprefixesdelegatedstatics) - List static delegated prefixes for a network
* [updateNetworkAppliancePrefixesDelegatedStatic](#updatenetworkapplianceprefixesdelegatedstatic) - Update a static delegated prefix from a network

## createNetworkAppliancePrefixesDelegatedStatic

Add a static delegated prefix from a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateNetworkAppliancePrefixesDelegatedStaticRequest;
import org.openapis.openapi.models.operations.CreateNetworkAppliancePrefixesDelegatedStaticRequestBody;
import org.openapis.openapi.models.operations.CreateNetworkAppliancePrefixesDelegatedStaticRequestBodyOrigin;
import org.openapis.openapi.models.operations.CreateNetworkAppliancePrefixesDelegatedStaticRequestBodyOriginTypeEnum;
import org.openapis.openapi.models.operations.CreateNetworkAppliancePrefixesDelegatedStaticResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkAppliancePrefixesDelegatedStaticRequest req = new CreateNetworkAppliancePrefixesDelegatedStaticRequest(                new CreateNetworkAppliancePrefixesDelegatedStaticRequestBody(                new CreateNetworkAppliancePrefixesDelegatedStaticRequestBodyOrigin() {{
                                                interfaces = new String[]{{
                                                    add("exercitationem"),
                                                }};
                                                type = CreateNetworkAppliancePrefixesDelegatedStaticRequestBodyOriginTypeEnum.INDEPENDENT;
                                            }};, "ipsum") {{
                                description = "eveniet";
                            }};, "cum");            

            CreateNetworkAppliancePrefixesDelegatedStaticResponse res = sdk.statics.createNetworkAppliancePrefixesDelegatedStatic(req);

            if (res.createNetworkAppliancePrefixesDelegatedStatic201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteNetworkAppliancePrefixesDelegatedStatic

Delete a static delegated prefix from a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteNetworkAppliancePrefixesDelegatedStaticRequest;
import org.openapis.openapi.models.operations.DeleteNetworkAppliancePrefixesDelegatedStaticResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequuntur") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNetworkAppliancePrefixesDelegatedStaticRequest req = new DeleteNetworkAppliancePrefixesDelegatedStaticRequest("eligendi", "aut");            

            DeleteNetworkAppliancePrefixesDelegatedStaticResponse res = sdk.statics.deleteNetworkAppliancePrefixesDelegatedStatic(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkAppliancePrefixesDelegatedStatic

Return a static delegated prefix from a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkAppliancePrefixesDelegatedStaticRequest;
import org.openapis.openapi.models.operations.GetNetworkAppliancePrefixesDelegatedStaticResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odio") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkAppliancePrefixesDelegatedStaticRequest req = new GetNetworkAppliancePrefixesDelegatedStaticRequest("adipisci", "maxime");            

            GetNetworkAppliancePrefixesDelegatedStaticResponse res = sdk.statics.getNetworkAppliancePrefixesDelegatedStatic(req);

            if (res.getNetworkAppliancePrefixesDelegatedStatic200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkAppliancePrefixesDelegatedStatics

List static delegated prefixes for a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkAppliancePrefixesDelegatedStaticsRequest;
import org.openapis.openapi.models.operations.GetNetworkAppliancePrefixesDelegatedStaticsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eaque") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkAppliancePrefixesDelegatedStaticsRequest req = new GetNetworkAppliancePrefixesDelegatedStaticsRequest("dolore");            

            GetNetworkAppliancePrefixesDelegatedStaticsResponse res = sdk.statics.getNetworkAppliancePrefixesDelegatedStatics(req);

            if (res.getNetworkAppliancePrefixesDelegatedStatics200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkAppliancePrefixesDelegatedStatic

Update a static delegated prefix from a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkAppliancePrefixesDelegatedStaticRequest;
import org.openapis.openapi.models.operations.UpdateNetworkAppliancePrefixesDelegatedStaticRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkAppliancePrefixesDelegatedStaticRequestBodyOrigin;
import org.openapis.openapi.models.operations.UpdateNetworkAppliancePrefixesDelegatedStaticRequestBodyOriginTypeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkAppliancePrefixesDelegatedStaticResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("et") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkAppliancePrefixesDelegatedStaticRequest req = new UpdateNetworkAppliancePrefixesDelegatedStaticRequest("quos", "ipsum") {{
                requestBody = new UpdateNetworkAppliancePrefixesDelegatedStaticRequestBody() {{
                    description = "culpa";
                    origin = new UpdateNetworkAppliancePrefixesDelegatedStaticRequestBodyOrigin() {{
                        interfaces = new String[]{{
                            add("aut"),
                            add("architecto"),
                        }};
                        type = UpdateNetworkAppliancePrefixesDelegatedStaticRequestBodyOriginTypeEnum.INDEPENDENT;
                    }};;
                    prefix = "similique";
                }};;
            }};            

            UpdateNetworkAppliancePrefixesDelegatedStaticResponse res = sdk.statics.updateNetworkAppliancePrefixesDelegatedStatic(req);

            if (res.updateNetworkAppliancePrefixesDelegatedStatic200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
