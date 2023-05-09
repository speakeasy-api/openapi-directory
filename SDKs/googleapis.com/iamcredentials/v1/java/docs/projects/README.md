# projects

### Available Operations

* [iamcredentialsProjectsServiceAccountsGenerateAccessToken](#iamcredentialsprojectsserviceaccountsgenerateaccesstoken) - Generates an OAuth 2.0 access token for a service account.
* [iamcredentialsProjectsServiceAccountsGenerateIdToken](#iamcredentialsprojectsserviceaccountsgenerateidtoken) - Generates an OpenID Connect ID token for a service account.
* [iamcredentialsProjectsServiceAccountsSignBlob](#iamcredentialsprojectsserviceaccountssignblob) - Signs a blob using a service account's system-managed private key.
* [iamcredentialsProjectsServiceAccountsSignJwt](#iamcredentialsprojectsserviceaccountssignjwt) - Signs a JWT using a service account's system-managed private key.

## iamcredentialsProjectsServiceAccountsGenerateAccessToken

Generates an OAuth 2.0 access token for a service account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IamcredentialsProjectsServiceAccountsGenerateAccessTokenRequest;
import org.openapis.openapi.models.operations.IamcredentialsProjectsServiceAccountsGenerateAccessTokenResponse;
import org.openapis.openapi.models.operations.IamcredentialsProjectsServiceAccountsGenerateAccessTokenSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GenerateAccessTokenRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IamcredentialsProjectsServiceAccountsGenerateAccessTokenRequest req = new IamcredentialsProjectsServiceAccountsGenerateAccessTokenRequest("iusto") {{
                dollarXgafv = XgafvEnum.TWO;
                generateAccessTokenRequest = new GenerateAccessTokenRequest() {{
                    delegates = new String[]{{
                        add("recusandae"),
                        add("temporibus"),
                    }};
                    lifetime = "ab";
                    scope = new String[]{{
                        add("veritatis"),
                        add("deserunt"),
                    }};
                }};;
                accessToken = "perferendis";
                alt = AltEnum.MEDIA;
                callback = "repellendus";
                fields = "sapiente";
                key = "quo";
                oauthToken = "odit";
                prettyPrint = false;
                quotaUser = "at";
                uploadType = "at";
                uploadProtocol = "maiores";
            }};            

            IamcredentialsProjectsServiceAccountsGenerateAccessTokenResponse res = sdk.projects.iamcredentialsProjectsServiceAccountsGenerateAccessToken(req, new IamcredentialsProjectsServiceAccountsGenerateAccessTokenSecurity("molestiae", "quod") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.generateAccessTokenResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## iamcredentialsProjectsServiceAccountsGenerateIdToken

Generates an OpenID Connect ID token for a service account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IamcredentialsProjectsServiceAccountsGenerateIdTokenRequest;
import org.openapis.openapi.models.operations.IamcredentialsProjectsServiceAccountsGenerateIdTokenResponse;
import org.openapis.openapi.models.operations.IamcredentialsProjectsServiceAccountsGenerateIdTokenSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GenerateIdTokenRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IamcredentialsProjectsServiceAccountsGenerateIdTokenRequest req = new IamcredentialsProjectsServiceAccountsGenerateIdTokenRequest("quod") {{
                dollarXgafv = XgafvEnum.ONE;
                generateIdTokenRequest = new GenerateIdTokenRequest() {{
                    audience = "totam";
                    delegates = new String[]{{
                        add("dolorum"),
                        add("dicta"),
                        add("nam"),
                        add("officia"),
                    }};
                    includeEmail = false;
                }};;
                accessToken = "occaecati";
                alt = AltEnum.JSON;
                callback = "deleniti";
                fields = "hic";
                key = "optio";
                oauthToken = "totam";
                prettyPrint = false;
                quotaUser = "beatae";
                uploadType = "commodi";
                uploadProtocol = "molestiae";
            }};            

            IamcredentialsProjectsServiceAccountsGenerateIdTokenResponse res = sdk.projects.iamcredentialsProjectsServiceAccountsGenerateIdToken(req, new IamcredentialsProjectsServiceAccountsGenerateIdTokenSecurity("modi", "qui") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.generateIdTokenResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## iamcredentialsProjectsServiceAccountsSignBlob

Signs a blob using a service account's system-managed private key.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IamcredentialsProjectsServiceAccountsSignBlobRequest;
import org.openapis.openapi.models.operations.IamcredentialsProjectsServiceAccountsSignBlobResponse;
import org.openapis.openapi.models.operations.IamcredentialsProjectsServiceAccountsSignBlobSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SignBlobRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IamcredentialsProjectsServiceAccountsSignBlobRequest req = new IamcredentialsProjectsServiceAccountsSignBlobRequest("impedit") {{
                dollarXgafv = XgafvEnum.TWO;
                signBlobRequest = new SignBlobRequest() {{
                    delegates = new String[]{{
                        add("ipsum"),
                        add("excepturi"),
                    }};
                    payload = "aspernatur";
                }};;
                accessToken = "perferendis";
                alt = AltEnum.JSON;
                callback = "natus";
                fields = "sed";
                key = "iste";
                oauthToken = "dolor";
                prettyPrint = false;
                quotaUser = "natus";
                uploadType = "laboriosam";
                uploadProtocol = "hic";
            }};            

            IamcredentialsProjectsServiceAccountsSignBlobResponse res = sdk.projects.iamcredentialsProjectsServiceAccountsSignBlob(req, new IamcredentialsProjectsServiceAccountsSignBlobSecurity("saepe", "fuga") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.signBlobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## iamcredentialsProjectsServiceAccountsSignJwt

Signs a JWT using a service account's system-managed private key.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IamcredentialsProjectsServiceAccountsSignJwtRequest;
import org.openapis.openapi.models.operations.IamcredentialsProjectsServiceAccountsSignJwtResponse;
import org.openapis.openapi.models.operations.IamcredentialsProjectsServiceAccountsSignJwtSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SignJwtRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IamcredentialsProjectsServiceAccountsSignJwtRequest req = new IamcredentialsProjectsServiceAccountsSignJwtRequest("in") {{
                dollarXgafv = XgafvEnum.ONE;
                signJwtRequest = new SignJwtRequest() {{
                    delegates = new String[]{{
                        add("iure"),
                        add("saepe"),
                        add("quidem"),
                    }};
                    payload = "architecto";
                }};;
                accessToken = "ipsa";
                alt = AltEnum.PROTO;
                callback = "est";
                fields = "mollitia";
                key = "laborum";
                oauthToken = "dolores";
                prettyPrint = false;
                quotaUser = "dolorem";
                uploadType = "corporis";
                uploadProtocol = "explicabo";
            }};            

            IamcredentialsProjectsServiceAccountsSignJwtResponse res = sdk.projects.iamcredentialsProjectsServiceAccountsSignJwt(req, new IamcredentialsProjectsServiceAccountsSignJwtSecurity("nobis", "enim") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.signJwtResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
