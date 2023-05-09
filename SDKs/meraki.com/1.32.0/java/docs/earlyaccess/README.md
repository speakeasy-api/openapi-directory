# earlyAccess

### Available Operations

* [createOrganizationEarlyAccessFeaturesOptIn](#createorganizationearlyaccessfeaturesoptin) - Create a new early access feature opt-in for an organization
* [deleteOrganizationEarlyAccessFeaturesOptIn](#deleteorganizationearlyaccessfeaturesoptin) - Delete an early access feature opt-in
* [getOrganizationEarlyAccessFeatures](#getorganizationearlyaccessfeatures) - List the available early access features for organization
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
                .setSecurity(new Security("ullam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateOrganizationEarlyAccessFeaturesOptInRequest req = new CreateOrganizationEarlyAccessFeaturesOptInRequest(                new CreateOrganizationEarlyAccessFeaturesOptInRequestBody("consequuntur") {{
                                limitScopeToNetworks = new String[]{{
                                    add("necessitatibus"),
                                }};
                            }};, "consectetur");            

            CreateOrganizationEarlyAccessFeaturesOptInResponse res = sdk.earlyAccess.createOrganizationEarlyAccessFeaturesOptIn(req);

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
                .setSecurity(new Security("odio") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteOrganizationEarlyAccessFeaturesOptInRequest req = new DeleteOrganizationEarlyAccessFeaturesOptInRequest("beatae", "sequi");            

            DeleteOrganizationEarlyAccessFeaturesOptInResponse res = sdk.earlyAccess.deleteOrganizationEarlyAccessFeaturesOptIn(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationEarlyAccessFeatures

List the available early access features for organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationEarlyAccessFeaturesRequest;
import org.openapis.openapi.models.operations.GetOrganizationEarlyAccessFeaturesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("autem") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationEarlyAccessFeaturesRequest req = new GetOrganizationEarlyAccessFeaturesRequest("quaerat");            

            GetOrganizationEarlyAccessFeaturesResponse res = sdk.earlyAccess.getOrganizationEarlyAccessFeatures(req);

            if (res.getOrganizationEarlyAccessFeatures200ApplicationJSONObjects != null) {
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
                .setSecurity(new Security("aspernatur") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationEarlyAccessFeaturesOptInRequest req = new GetOrganizationEarlyAccessFeaturesOptInRequest("illo", "reprehenderit");            

            GetOrganizationEarlyAccessFeaturesOptInResponse res = sdk.earlyAccess.getOrganizationEarlyAccessFeaturesOptIn(req);

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
                .setSecurity(new Security("culpa") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationEarlyAccessFeaturesOptInsRequest req = new GetOrganizationEarlyAccessFeaturesOptInsRequest("laboriosam");            

            GetOrganizationEarlyAccessFeaturesOptInsResponse res = sdk.earlyAccess.getOrganizationEarlyAccessFeaturesOptIns(req);

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
                .setSecurity(new Security("repudiandae") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateOrganizationEarlyAccessFeaturesOptInRequest req = new UpdateOrganizationEarlyAccessFeaturesOptInRequest("ad", "excepturi") {{
                requestBody = new UpdateOrganizationEarlyAccessFeaturesOptInRequestBody() {{
                    limitScopeToNetworks = new String[]{{
                        add("officia"),
                        add("laborum"),
                    }};
                }};;
            }};            

            UpdateOrganizationEarlyAccessFeaturesOptInResponse res = sdk.earlyAccess.updateOrganizationEarlyAccessFeaturesOptIn(req);

            if (res.updateOrganizationEarlyAccessFeaturesOptIn200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
