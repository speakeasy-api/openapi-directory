# features

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
                .setSecurity(new Security("repellat") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateOrganizationEarlyAccessFeaturesOptInRequest req = new CreateOrganizationEarlyAccessFeaturesOptInRequest(                new CreateOrganizationEarlyAccessFeaturesOptInRequestBody("esse") {{
                                limitScopeToNetworks = new String[]{{
                                    add("non"),
                                    add("quasi"),
                                    add("nisi"),
                                    add("vitae"),
                                }};
                            }};, "incidunt");            

            CreateOrganizationEarlyAccessFeaturesOptInResponse res = sdk.features.createOrganizationEarlyAccessFeaturesOptIn(req);

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
                .setSecurity(new Security("nemo") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteOrganizationEarlyAccessFeaturesOptInRequest req = new DeleteOrganizationEarlyAccessFeaturesOptInRequest("recusandae", "quidem");            

            DeleteOrganizationEarlyAccessFeaturesOptInResponse res = sdk.features.deleteOrganizationEarlyAccessFeaturesOptIn(req);

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
                .setSecurity(new Security("vero") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationEarlyAccessFeaturesRequest req = new GetOrganizationEarlyAccessFeaturesRequest("assumenda");            

            GetOrganizationEarlyAccessFeaturesResponse res = sdk.features.getOrganizationEarlyAccessFeatures(req);

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
                .setSecurity(new Security("praesentium") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationEarlyAccessFeaturesOptInRequest req = new GetOrganizationEarlyAccessFeaturesOptInRequest("eos", "ratione");            

            GetOrganizationEarlyAccessFeaturesOptInResponse res = sdk.features.getOrganizationEarlyAccessFeaturesOptIn(req);

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
                .setSecurity(new Security("error") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationEarlyAccessFeaturesOptInsRequest req = new GetOrganizationEarlyAccessFeaturesOptInsRequest("a");            

            GetOrganizationEarlyAccessFeaturesOptInsResponse res = sdk.features.getOrganizationEarlyAccessFeaturesOptIns(req);

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
                .setSecurity(new Security("consequuntur") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateOrganizationEarlyAccessFeaturesOptInRequest req = new UpdateOrganizationEarlyAccessFeaturesOptInRequest("optio", "vitae") {{
                requestBody = new UpdateOrganizationEarlyAccessFeaturesOptInRequestBody() {{
                    limitScopeToNetworks = new String[]{{
                        add("nihil"),
                        add("excepturi"),
                    }};
                }};;
            }};            

            UpdateOrganizationEarlyAccessFeaturesOptInResponse res = sdk.features.updateOrganizationEarlyAccessFeaturesOptIn(req);

            if (res.updateOrganizationEarlyAccessFeaturesOptIn200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
