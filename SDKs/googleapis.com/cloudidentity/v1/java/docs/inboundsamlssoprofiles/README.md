# inboundSamlSsoProfiles

### Available Operations

* [cloudidentityInboundSamlSsoProfilesCreate](#cloudidentityinboundsamlssoprofilescreate) - Creates an InboundSamlSsoProfile for a customer.
* [cloudidentityInboundSamlSsoProfilesIdpCredentialsAdd](#cloudidentityinboundsamlssoprofilesidpcredentialsadd) - Adds an IdpCredential. Up to 2 credentials are allowed.
* [cloudidentityInboundSamlSsoProfilesIdpCredentialsList](#cloudidentityinboundsamlssoprofilesidpcredentialslist) - Returns a list of IdpCredentials in an InboundSamlSsoProfile.
* [cloudidentityInboundSamlSsoProfilesList](#cloudidentityinboundsamlssoprofileslist) - Lists InboundSamlSsoProfiles for a customer.

## cloudidentityInboundSamlSsoProfilesCreate

Creates an InboundSamlSsoProfile for a customer.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudidentityInboundSamlSsoProfilesCreateRequest;
import org.openapis.openapi.models.operations.CloudidentityInboundSamlSsoProfilesCreateResponse;
import org.openapis.openapi.models.operations.CloudidentityInboundSamlSsoProfilesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.InboundSamlSsoProfileInput;
import org.openapis.openapi.models.shared.SamlIdpConfig;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudidentityInboundSamlSsoProfilesCreateRequest req = new CloudidentityInboundSamlSsoProfilesCreateRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                inboundSamlSsoProfileInput = new InboundSamlSsoProfileInput() {{
                    customer = "possimus";
                    displayName = "magnam";
                    idpConfig = new SamlIdpConfig() {{
                        changePasswordUri = "ratione";
                        entityId = "ex";
                        logoutRedirectUri = "laudantium";
                        singleSignOnServiceUri = "dicta";
                    }};;
                }};;
                accessToken = "dolor";
                alt = AltEnum.PROTO;
                callback = "quasi";
                fields = "ex";
                key = "nulla";
                oauthToken = "excepturi";
                prettyPrint = false;
                quotaUser = "voluptatibus";
                uploadType = "nostrum";
                uploadProtocol = "sapiente";
            }};            

            CloudidentityInboundSamlSsoProfilesCreateResponse res = sdk.inboundSamlSsoProfiles.cloudidentityInboundSamlSsoProfilesCreate(req, new CloudidentityInboundSamlSsoProfilesCreateSecurity("quisquam", "saepe") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudidentityInboundSamlSsoProfilesIdpCredentialsAdd

Adds an IdpCredential. Up to 2 credentials are allowed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudidentityInboundSamlSsoProfilesIdpCredentialsAddRequest;
import org.openapis.openapi.models.operations.CloudidentityInboundSamlSsoProfilesIdpCredentialsAddResponse;
import org.openapis.openapi.models.operations.CloudidentityInboundSamlSsoProfilesIdpCredentialsAddSecurity;
import org.openapis.openapi.models.shared.AddIdpCredentialRequest;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudidentityInboundSamlSsoProfilesIdpCredentialsAddRequest req = new CloudidentityInboundSamlSsoProfilesIdpCredentialsAddRequest("ea") {{
                dollarXgafv = XgafvEnum.TWO;
                addIdpCredentialRequest = new AddIdpCredentialRequest() {{
                    pemData = "corporis";
                }};;
                accessToken = "veniam";
                alt = AltEnum.MEDIA;
                callback = "inventore";
                fields = "magnam";
                key = "ea";
                oauthToken = "quo";
                prettyPrint = false;
                quotaUser = "consectetur";
                uploadType = "recusandae";
                uploadProtocol = "aspernatur";
            }};            

            CloudidentityInboundSamlSsoProfilesIdpCredentialsAddResponse res = sdk.inboundSamlSsoProfiles.cloudidentityInboundSamlSsoProfilesIdpCredentialsAdd(req, new CloudidentityInboundSamlSsoProfilesIdpCredentialsAddSecurity("minima", "eaque") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudidentityInboundSamlSsoProfilesIdpCredentialsList

Returns a list of IdpCredentials in an InboundSamlSsoProfile.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudidentityInboundSamlSsoProfilesIdpCredentialsListRequest;
import org.openapis.openapi.models.operations.CloudidentityInboundSamlSsoProfilesIdpCredentialsListResponse;
import org.openapis.openapi.models.operations.CloudidentityInboundSamlSsoProfilesIdpCredentialsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudidentityInboundSamlSsoProfilesIdpCredentialsListRequest req = new CloudidentityInboundSamlSsoProfilesIdpCredentialsListRequest("a") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "aut";
                alt = AltEnum.JSON;
                callback = "deleniti";
                fields = "impedit";
                key = "aliquam";
                oauthToken = "fugit";
                pageSize = 882860L;
                pageToken = "inventore";
                prettyPrint = false;
                quotaUser = "non";
                uploadType = "et";
                uploadProtocol = "dolorum";
            }};            

            CloudidentityInboundSamlSsoProfilesIdpCredentialsListResponse res = sdk.inboundSamlSsoProfiles.cloudidentityInboundSamlSsoProfilesIdpCredentialsList(req, new CloudidentityInboundSamlSsoProfilesIdpCredentialsListSecurity("laborum", "placeat") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listIdpCredentialsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudidentityInboundSamlSsoProfilesList

Lists InboundSamlSsoProfiles for a customer.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudidentityInboundSamlSsoProfilesListRequest;
import org.openapis.openapi.models.operations.CloudidentityInboundSamlSsoProfilesListResponse;
import org.openapis.openapi.models.operations.CloudidentityInboundSamlSsoProfilesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudidentityInboundSamlSsoProfilesListRequest req = new CloudidentityInboundSamlSsoProfilesListRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "eum";
                alt = AltEnum.MEDIA;
                callback = "nobis";
                fields = "quas";
                filter = "assumenda";
                key = "nulla";
                oauthToken = "voluptas";
                pageSize = 727044L;
                pageToken = "quasi";
                prettyPrint = false;
                quotaUser = "tempora";
                uploadType = "numquam";
                uploadProtocol = "explicabo";
            }};            

            CloudidentityInboundSamlSsoProfilesListResponse res = sdk.inboundSamlSsoProfiles.cloudidentityInboundSamlSsoProfilesList(req, new CloudidentityInboundSamlSsoProfilesListSecurity("provident", "ipsa") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listInboundSamlSsoProfilesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
