# idps

### Available Operations

* [createOrganizationSamlIdp](#createorganizationsamlidp) - Create a SAML IdP for your organization.
* [deleteOrganizationSamlIdp](#deleteorganizationsamlidp) - Remove a SAML IdP in your organization.
* [getOrganizationSamlIdp](#getorganizationsamlidp) - Get a SAML IdP from your organization.
* [getOrganizationSamlIdps](#getorganizationsamlidps) - List the SAML IdPs in your organization.
* [updateOrganizationSamlIdp](#updateorganizationsamlidp) - Update a SAML IdP in your organization

## createOrganizationSamlIdp

Create a SAML IdP for your organization.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateOrganizationSamlIdpRequest;
import org.openapis.openapi.models.operations.CreateOrganizationSamlIdpRequestBody;
import org.openapis.openapi.models.operations.CreateOrganizationSamlIdpResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("animi") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateOrganizationSamlIdpRequest req = new CreateOrganizationSamlIdpRequest(                new CreateOrganizationSamlIdpRequestBody("enim") {{
                                sloLogoutUrl = "autem";
                            }};, "corporis");            

            CreateOrganizationSamlIdpResponse res = sdk.idps.createOrganizationSamlIdp(req);

            if (res.createOrganizationSamlIdp201ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteOrganizationSamlIdp

Remove a SAML IdP in your organization.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteOrganizationSamlIdpRequest;
import org.openapis.openapi.models.operations.DeleteOrganizationSamlIdpResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aperiam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteOrganizationSamlIdpRequest req = new DeleteOrganizationSamlIdpRequest("veniam", "ea");            

            DeleteOrganizationSamlIdpResponse res = sdk.idps.deleteOrganizationSamlIdp(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationSamlIdp

Get a SAML IdP from your organization.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationSamlIdpRequest;
import org.openapis.openapi.models.operations.GetOrganizationSamlIdpResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationSamlIdpRequest req = new GetOrganizationSamlIdpRequest("voluptatem", "omnis");            

            GetOrganizationSamlIdpResponse res = sdk.idps.getOrganizationSamlIdp(req);

            if (res.getOrganizationSamlIdp200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationSamlIdps

List the SAML IdPs in your organization.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationSamlIdpsRequest;
import org.openapis.openapi.models.operations.GetOrganizationSamlIdpsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("a") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationSamlIdpsRequest req = new GetOrganizationSamlIdpsRequest("sapiente");            

            GetOrganizationSamlIdpsResponse res = sdk.idps.getOrganizationSamlIdps(req);

            if (res.getOrganizationSamlIdps200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateOrganizationSamlIdp

Update a SAML IdP in your organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateOrganizationSamlIdpRequest;
import org.openapis.openapi.models.operations.UpdateOrganizationSamlIdpRequestBody;
import org.openapis.openapi.models.operations.UpdateOrganizationSamlIdpResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ea") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateOrganizationSamlIdpRequest req = new UpdateOrganizationSamlIdpRequest("quia", "occaecati") {{
                requestBody = new UpdateOrganizationSamlIdpRequestBody() {{
                    sloLogoutUrl = "eveniet";
                    x509certSha1Fingerprint = "hic";
                }};;
            }};            

            UpdateOrganizationSamlIdpResponse res = sdk.idps.updateOrganizationSamlIdp(req);

            if (res.updateOrganizationSamlIdp200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
