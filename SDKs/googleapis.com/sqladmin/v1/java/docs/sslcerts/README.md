# sslCerts

### Available Operations

* [sqlSslCertsCreateEphemeral](#sqlsslcertscreateephemeral) - Generates a short-lived X509 certificate containing the provided public key and signed by a private key specific to the target instance. Users may use the certificate to authenticate as themselves when connecting to the database.
* [sqlSslCertsDelete](#sqlsslcertsdelete) - Deletes the SSL certificate. For First Generation instances, the certificate remains valid until the instance is restarted.
* [sqlSslCertsGet](#sqlsslcertsget) - Retrieves a particular SSL certificate. Does not include the private key (required for usage). The private key must be saved from the response to initial creation.
* [sqlSslCertsInsert](#sqlsslcertsinsert) - Creates an SSL certificate and returns it along with the private key and server certificate authority. The new certificate will not be usable until the instance is restarted.
* [sqlSslCertsList](#sqlsslcertslist) - Lists all of the current SSL certificates for the instance.

## sqlSslCertsCreateEphemeral

Generates a short-lived X509 certificate containing the provided public key and signed by a private key specific to the target instance. Users may use the certificate to authenticate as themselves when connecting to the database.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SqlSslCertsCreateEphemeralRequest;
import org.openapis.openapi.models.operations.SqlSslCertsCreateEphemeralResponse;
import org.openapis.openapi.models.operations.SqlSslCertsCreateEphemeralSecurity;
import org.openapis.openapi.models.operations.SqlSslCertsCreateEphemeralSecurityOption1;
import org.openapis.openapi.models.operations.SqlSslCertsCreateEphemeralSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SslCertsCreateEphemeralRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SqlSslCertsCreateEphemeralRequest req = new SqlSslCertsCreateEphemeralRequest("officia", "suscipit") {{
                dollarXgafv = XgafvEnum.ONE;
                sslCertsCreateEphemeralRequest = new SslCertsCreateEphemeralRequest() {{
                    accessToken = "perferendis";
                    publicKey = "eum";
                }};;
                accessToken = "voluptas";
                alt = AltEnum.MEDIA;
                callback = "id";
                fields = "ab";
                key = "error";
                oauthToken = "possimus";
                prettyPrint = false;
                quotaUser = "voluptates";
                uploadType = "mollitia";
                uploadProtocol = "laborum";
            }};            

            SqlSslCertsCreateEphemeralResponse res = sdk.sslCerts.sqlSslCertsCreateEphemeral(req, new SqlSslCertsCreateEphemeralSecurity() {{
                option1 = new SqlSslCertsCreateEphemeralSecurityOption1("libero", "ad") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.sslCert != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sqlSslCertsDelete

Deletes the SSL certificate. For First Generation instances, the certificate remains valid until the instance is restarted.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SqlSslCertsDeleteRequest;
import org.openapis.openapi.models.operations.SqlSslCertsDeleteResponse;
import org.openapis.openapi.models.operations.SqlSslCertsDeleteSecurity;
import org.openapis.openapi.models.operations.SqlSslCertsDeleteSecurityOption1;
import org.openapis.openapi.models.operations.SqlSslCertsDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SqlSslCertsDeleteRequest req = new SqlSslCertsDeleteRequest("deleniti", "enim", "vitae") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ex";
                alt = AltEnum.PROTO;
                callback = "ex";
                fields = "ut";
                key = "ad";
                oauthToken = "expedita";
                prettyPrint = false;
                quotaUser = "voluptatem";
                uploadType = "molestias";
                uploadProtocol = "cum";
            }};            

            SqlSslCertsDeleteResponse res = sdk.sslCerts.sqlSslCertsDelete(req, new SqlSslCertsDeleteSecurity() {{
                option1 = new SqlSslCertsDeleteSecurityOption1("aliquid", "beatae") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## sqlSslCertsGet

Retrieves a particular SSL certificate. Does not include the private key (required for usage). The private key must be saved from the response to initial creation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SqlSslCertsGetRequest;
import org.openapis.openapi.models.operations.SqlSslCertsGetResponse;
import org.openapis.openapi.models.operations.SqlSslCertsGetSecurity;
import org.openapis.openapi.models.operations.SqlSslCertsGetSecurityOption1;
import org.openapis.openapi.models.operations.SqlSslCertsGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SqlSslCertsGetRequest req = new SqlSslCertsGetRequest("voluptatum", "omnis", "veritatis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "est";
                alt = AltEnum.MEDIA;
                callback = "voluptatem";
                fields = "sapiente";
                key = "officiis";
                oauthToken = "architecto";
                prettyPrint = false;
                quotaUser = "fuga";
                uploadType = "pariatur";
                uploadProtocol = "debitis";
            }};            

            SqlSslCertsGetResponse res = sdk.sslCerts.sqlSslCertsGet(req, new SqlSslCertsGetSecurity() {{
                option1 = new SqlSslCertsGetSecurityOption1("voluptatem", "alias") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.sslCert != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sqlSslCertsInsert

Creates an SSL certificate and returns it along with the private key and server certificate authority. The new certificate will not be usable until the instance is restarted.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SqlSslCertsInsertRequest;
import org.openapis.openapi.models.operations.SqlSslCertsInsertResponse;
import org.openapis.openapi.models.operations.SqlSslCertsInsertSecurity;
import org.openapis.openapi.models.operations.SqlSslCertsInsertSecurityOption1;
import org.openapis.openapi.models.operations.SqlSslCertsInsertSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SslCertsInsertRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SqlSslCertsInsertRequest req = new SqlSslCertsInsertRequest("deleniti", "earum") {{
                dollarXgafv = XgafvEnum.ONE;
                sslCertsInsertRequest = new SslCertsInsertRequest() {{
                    commonName = "sapiente";
                }};;
                accessToken = "rem";
                alt = AltEnum.PROTO;
                callback = "nemo";
                fields = "asperiores";
                key = "ratione";
                oauthToken = "ullam";
                prettyPrint = false;
                quotaUser = "perferendis";
                uploadType = "illum";
                uploadProtocol = "totam";
            }};            

            SqlSslCertsInsertResponse res = sdk.sslCerts.sqlSslCertsInsert(req, new SqlSslCertsInsertSecurity() {{
                option1 = new SqlSslCertsInsertSecurityOption1("impedit", "quibusdam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.sslCertsInsertResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sqlSslCertsList

Lists all of the current SSL certificates for the instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SqlSslCertsListRequest;
import org.openapis.openapi.models.operations.SqlSslCertsListResponse;
import org.openapis.openapi.models.operations.SqlSslCertsListSecurity;
import org.openapis.openapi.models.operations.SqlSslCertsListSecurityOption1;
import org.openapis.openapi.models.operations.SqlSslCertsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SqlSslCertsListRequest req = new SqlSslCertsListRequest("nam", "ipsam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dolor";
                alt = AltEnum.JSON;
                callback = "inventore";
                fields = "deleniti";
                key = "veritatis";
                oauthToken = "tempora";
                prettyPrint = false;
                quotaUser = "dolor";
                uploadType = "consequatur";
                uploadProtocol = "architecto";
            }};            

            SqlSslCertsListResponse res = sdk.sslCerts.sqlSslCertsList(req, new SqlSslCertsListSecurity() {{
                option1 = new SqlSslCertsListSecurityOption1("sit", "modi") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.sslCertsListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
