# saml

### Available Operations

* [createOrganizationSamlIdp](#createorganizationsamlidp) - Create a SAML IdP for your organization.
* [deleteOrganizationSamlIdp](#deleteorganizationsamlidp) - Remove a SAML IdP in your organization.
* [getOrganizationSaml](#getorganizationsaml) - Returns the SAML SSO enabled settings for an organization.
* [getOrganizationSamlIdp](#getorganizationsamlidp) - Get a SAML IdP from your organization.
* [getOrganizationSamlIdps](#getorganizationsamlidps) - List the SAML IdPs in your organization.
* [updateOrganizationSaml](#updateorganizationsaml) - Updates the SAML SSO enabled settings for an organization.
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
                .setSecurity(new Security("recusandae") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateOrganizationSamlIdpRequest req = new CreateOrganizationSamlIdpRequest(                new CreateOrganizationSamlIdpRequestBody("quia") {{
                                sloLogoutUrl = "cupiditate";
                            }};, "corporis");            

            CreateOrganizationSamlIdpResponse res = sdk.saml.createOrganizationSamlIdp(req);

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
                .setSecurity(new Security("unde") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteOrganizationSamlIdpRequest req = new DeleteOrganizationSamlIdpRequest("maxime", "modi");            

            DeleteOrganizationSamlIdpResponse res = sdk.saml.deleteOrganizationSamlIdp(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationSaml

Returns the SAML SSO enabled settings for an organization.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationSamlRequest;
import org.openapis.openapi.models.operations.GetOrganizationSamlResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationSamlRequest req = new GetOrganizationSamlRequest("voluptatem");            

            GetOrganizationSamlResponse res = sdk.saml.getOrganizationSaml(req);

            if (res.getOrganizationSaml200ApplicationJSONObject != null) {
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
                .setSecurity(new Security("deserunt") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationSamlIdpRequest req = new GetOrganizationSamlIdpRequest("laboriosam", "commodi");            

            GetOrganizationSamlIdpResponse res = sdk.saml.getOrganizationSamlIdp(req);

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
                .setSecurity(new Security("enim") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationSamlIdpsRequest req = new GetOrganizationSamlIdpsRequest("mollitia");            

            GetOrganizationSamlIdpsResponse res = sdk.saml.getOrganizationSamlIdps(req);

            if (res.getOrganizationSamlIdps200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateOrganizationSaml

Updates the SAML SSO enabled settings for an organization.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateOrganizationSamlRequest;
import org.openapis.openapi.models.operations.UpdateOrganizationSamlRequestBody;
import org.openapis.openapi.models.operations.UpdateOrganizationSamlResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eos") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateOrganizationSamlRequest req = new UpdateOrganizationSamlRequest("sequi") {{
                requestBody = new UpdateOrganizationSamlRequestBody() {{
                    enabled = false;
                }};;
            }};            

            UpdateOrganizationSamlResponse res = sdk.saml.updateOrganizationSaml(req);

            if (res.updateOrganizationSaml200ApplicationJSONObject != null) {
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
                .setSecurity(new Security("magni") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateOrganizationSamlIdpRequest req = new UpdateOrganizationSamlIdpRequest("quisquam", "necessitatibus") {{
                requestBody = new UpdateOrganizationSamlIdpRequestBody() {{
                    sloLogoutUrl = "reprehenderit";
                    x509certSha1Fingerprint = "doloremque";
                }};;
            }};            

            UpdateOrganizationSamlIdpResponse res = sdk.saml.updateOrganizationSamlIdp(req);

            if (res.updateOrganizationSamlIdp200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
