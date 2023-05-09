# connect

### Available Operations

* [sqlConnectGenerateEphemeral](#sqlconnectgenerateephemeral) - Generates a short-lived X509 certificate containing the provided public key and signed by a private key specific to the target instance. Users may use the certificate to authenticate as themselves when connecting to the database.
* [sqlConnectGet](#sqlconnectget) - Retrieves connect settings about a Cloud SQL instance.

## sqlConnectGenerateEphemeral

Generates a short-lived X509 certificate containing the provided public key and signed by a private key specific to the target instance. Users may use the certificate to authenticate as themselves when connecting to the database.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SqlConnectGenerateEphemeralRequest;
import org.openapis.openapi.models.operations.SqlConnectGenerateEphemeralResponse;
import org.openapis.openapi.models.operations.SqlConnectGenerateEphemeralSecurity;
import org.openapis.openapi.models.operations.SqlConnectGenerateEphemeralSecurityOption1;
import org.openapis.openapi.models.operations.SqlConnectGenerateEphemeralSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GenerateEphemeralCertRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SqlConnectGenerateEphemeralRequest req = new SqlConnectGenerateEphemeralRequest("enim", "omnis") {{
                dollarXgafv = XgafvEnum.ONE;
                generateEphemeralCertRequest = new GenerateEphemeralCertRequest() {{
                    accessToken = "minima";
                    publicKey = "excepturi";
                    readTime = "accusantium";
                    validDuration = "iure";
                }};;
                accessToken = "culpa";
                alt = AltEnum.PROTO;
                callback = "sapiente";
                fields = "architecto";
                key = "mollitia";
                oauthToken = "dolorem";
                prettyPrint = false;
                quotaUser = "culpa";
                uploadType = "consequuntur";
                uploadProtocol = "repellat";
            }};            

            SqlConnectGenerateEphemeralResponse res = sdk.connect.sqlConnectGenerateEphemeral(req, new SqlConnectGenerateEphemeralSecurity() {{
                option1 = new SqlConnectGenerateEphemeralSecurityOption1("mollitia", "occaecati") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.generateEphemeralCertResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sqlConnectGet

Retrieves connect settings about a Cloud SQL instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SqlConnectGetRequest;
import org.openapis.openapi.models.operations.SqlConnectGetResponse;
import org.openapis.openapi.models.operations.SqlConnectGetSecurity;
import org.openapis.openapi.models.operations.SqlConnectGetSecurityOption1;
import org.openapis.openapi.models.operations.SqlConnectGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SqlConnectGetRequest req = new SqlConnectGetRequest("numquam", "commodi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "molestiae";
                alt = AltEnum.JSON;
                callback = "error";
                fields = "quia";
                key = "quis";
                oauthToken = "vitae";
                prettyPrint = false;
                quotaUser = "laborum";
                readTime = "animi";
                uploadType = "enim";
                uploadProtocol = "odit";
            }};            

            SqlConnectGetResponse res = sdk.connect.sqlConnectGet(req, new SqlConnectGetSecurity() {{
                option1 = new SqlConnectGetSecurityOption1("quo", "sequi") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.connectSettings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
