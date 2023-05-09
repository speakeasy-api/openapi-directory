# rootSaml

## Overview

SAML SSO Authentication.

### Available Operations

* [configRubrikSamlMetadata](#configrubriksamlmetadata) - Configure and generate Rubrik SAML metadata
* [getSamlSsoStatus](#getsamlssostatus) - Check SAML SSO Status
* [makeSamlAuthnRequest](#makesamlauthnrequest) - Make SAML authentication request

## configRubrikSamlMetadata

Configure and generate the SAML metadata for this Rubrik cluster. The call returns the download URL for the metadata.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConfigRubrikSamlMetadataResponse;
import org.openapis.openapi.models.shared.RubrikSamlMetadataInfo;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("at", "possimus") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            org.openapis.openapi.models.shared.RubrikSamlMetadataInfo req = new RubrikSamlMetadataInfo() {{
                hostAddress = "neque";
            }};            

            ConfigRubrikSamlMetadataResponse res = sdk.rootSaml.configRubrikSamlMetadata(req);

            if (res.rubrikSamlMetadataSummary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSamlSsoStatus

An object that contains two values. A Boolean value that determines whether or not SSO is enabled and an optional String value that indicates the name of the default IdP authentication domain for SSO login. When the boolean value is 'true,' SAML SSO is enabled. When the Boolean value is 'false,' SAML SSO is disabled.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSamlSsoStatusResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("pariatur", "vel") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetSamlSsoStatusResponse res = sdk.rootSaml.getSamlSsoStatus();

            if (res.samlSsoStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## makeSamlAuthnRequest

Make a SAML authentication request for a specified IdP Authentication Domain.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MakeSamlAuthnRequestRequest;
import org.openapis.openapi.models.operations.MakeSamlAuthnRequestResponse;
import org.openapis.openapi.models.shared.SamlSsoAuthnRequestInfo;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("sapiente", "mollitia") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            MakeSamlAuthnRequestRequest req = new MakeSamlAuthnRequestRequest("quae") {{
                samlSsoAuthnRequestInfo = new SamlSsoAuthnRequestInfo() {{
                    isForIdpTest = false;
                    redirectPath = "quos";
                }};;
            }};            

            MakeSamlAuthnRequestResponse res = sdk.rootSaml.makeSamlAuthnRequest(req);

            if (res.samlSsoAuthnRequestDetail != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
