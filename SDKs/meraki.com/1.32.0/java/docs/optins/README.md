# optIns

### Available Operations

* [createOrganizationEarlyAccessFeaturesOptIn](#createorganizationearlyaccessfeaturesoptin) - Create a new early access feature opt-in for an organization
* [deleteOrganizationEarlyAccessFeaturesOptIn](#deleteorganizationearlyaccessfeaturesoptin) - Delete an early access feature opt-in
* [getOrganizationEarlyAccessFeaturesOptIn](#getorganizationearlyaccessfeaturesoptin) - Show an early access feature opt-in for an organization
* [getOrganizationEarlyAccessFeaturesOptIns](#getorganizationearlyaccessfeaturesoptins) - List the early access feature opt-ins for an organization
* [updateOrganizationEarlyAccessFeaturesOptIn](#updateorganizationearlyaccessfeaturesoptin) - Update an early access feature opt-in for an organization

## createOrganizationEarlyAccessFeaturesOptIn

Create a new early access feature opt-in for an organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateOrganizationEarlyAccessFeaturesOptInRequest;
import org.openapis.openapi.models.operations.CreateOrganizationEarlyAccessFeaturesOptInRequestBody;
import org.openapis.openapi.models.operations.CreateOrganizationEarlyAccessFeaturesOptInResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ducimus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateOrganizationEarlyAccessFeaturesOptInRequest req = new CreateOrganizationEarlyAccessFeaturesOptInRequest(                new CreateOrganizationEarlyAccessFeaturesOptInRequestBody("accusantium") {{
                                limitScopeToNetworks = new String[]{{
                                    add("distinctio"),
                                    add("consectetur"),
                                    add("totam"),
                                }};
                            }};, "quo");            

            CreateOrganizationEarlyAccessFeaturesOptInResponse res = sdk.optIns.createOrganizationEarlyAccessFeaturesOptIn(req);

            if (res.createOrganizationEarlyAccessFeaturesOptIn200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteOrganizationEarlyAccessFeaturesOptIn

Delete an early access feature opt-in

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteOrganizationEarlyAccessFeaturesOptInRequest;
import org.openapis.openapi.models.operations.DeleteOrganizationEarlyAccessFeaturesOptInResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("harum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteOrganizationEarlyAccessFeaturesOptInRequest req = new DeleteOrganizationEarlyAccessFeaturesOptInRequest("corporis", "ducimus");            

            DeleteOrganizationEarlyAccessFeaturesOptInResponse res = sdk.optIns.deleteOrganizationEarlyAccessFeaturesOptIn(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationEarlyAccessFeaturesOptIn

Show an early access feature opt-in for an organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationEarlyAccessFeaturesOptInRequest;
import org.openapis.openapi.models.operations.GetOrganizationEarlyAccessFeaturesOptInResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fuga") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationEarlyAccessFeaturesOptInRequest req = new GetOrganizationEarlyAccessFeaturesOptInRequest("amet", "laudantium");            

            GetOrganizationEarlyAccessFeaturesOptInResponse res = sdk.optIns.getOrganizationEarlyAccessFeaturesOptIn(req);

            if (res.getOrganizationEarlyAccessFeaturesOptIn200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationEarlyAccessFeaturesOptIns

List the early access feature opt-ins for an organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationEarlyAccessFeaturesOptInsRequest;
import org.openapis.openapi.models.operations.GetOrganizationEarlyAccessFeaturesOptInsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("expedita") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationEarlyAccessFeaturesOptInsRequest req = new GetOrganizationEarlyAccessFeaturesOptInsRequest("quibusdam");            

            GetOrganizationEarlyAccessFeaturesOptInsResponse res = sdk.optIns.getOrganizationEarlyAccessFeaturesOptIns(req);

            if (res.getOrganizationEarlyAccessFeaturesOptIns200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateOrganizationEarlyAccessFeaturesOptIn

Update an early access feature opt-in for an organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateOrganizationEarlyAccessFeaturesOptInRequest;
import org.openapis.openapi.models.operations.UpdateOrganizationEarlyAccessFeaturesOptInRequestBody;
import org.openapis.openapi.models.operations.UpdateOrganizationEarlyAccessFeaturesOptInResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("adipisci") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateOrganizationEarlyAccessFeaturesOptInRequest req = new UpdateOrganizationEarlyAccessFeaturesOptInRequest("voluptatum", "dignissimos") {{
                requestBody = new UpdateOrganizationEarlyAccessFeaturesOptInRequestBody() {{
                    limitScopeToNetworks = new String[]{{
                        add("possimus"),
                        add("veniam"),
                        add("at"),
                        add("exercitationem"),
                    }};
                }};;
            }};            

            UpdateOrganizationEarlyAccessFeaturesOptInResponse res = sdk.optIns.updateOrganizationEarlyAccessFeaturesOptIn(req);

            if (res.updateOrganizationEarlyAccessFeaturesOptIn200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
