# sslCertificates

### Available Operations

* [computeSslCertificatesAggregatedList](#computesslcertificatesaggregatedlist) - Retrieves the list of all SslCertificate resources, regional and global, available to the specified project.
* [computeSslCertificatesDelete](#computesslcertificatesdelete) - Deletes the specified SslCertificate resource.
* [computeSslCertificatesGet](#computesslcertificatesget) - Returns the specified SslCertificate resource.
* [computeSslCertificatesInsert](#computesslcertificatesinsert) - Creates a SslCertificate resource in the specified project using the data included in the request.
* [computeSslCertificatesList](#computesslcertificateslist) - Retrieves the list of SslCertificate resources available to the specified project.
* [computeSslCertificatesTestIamPermissions](#computesslcertificatestestiampermissions) - Returns permissions that a caller has on the specified resource.

## computeSslCertificatesAggregatedList

Retrieves the list of all SslCertificate resources, regional and global, available to the specified project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeSslCertificatesAggregatedListRequest;
import org.openapis.openapi.models.operations.ComputeSslCertificatesAggregatedListResponse;
import org.openapis.openapi.models.operations.ComputeSslCertificatesAggregatedListSecurity;
import org.openapis.openapi.models.operations.ComputeSslCertificatesAggregatedListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeSslCertificatesAggregatedListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeSslCertificatesAggregatedListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeSslCertificatesAggregatedListRequest req = new ComputeSslCertificatesAggregatedListRequest("tempore") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "rem";
                alt = AltEnum.MEDIA;
                callback = "veritatis";
                fields = "dicta";
                filter = "cumque";
                includeAllScopes = false;
                key = "omnis";
                maxResults = 365729L;
                oauthToken = "modi";
                orderBy = "est";
                pageToken = "dolorum";
                prettyPrint = false;
                quotaUser = "deleniti";
                returnPartialSuccess = false;
                uploadType = "sed";
                uploadProtocol = "iste";
                userIp = "amet";
            }};            

            ComputeSslCertificatesAggregatedListResponse res = sdk.sslCertificates.computeSslCertificatesAggregatedList(req, new ComputeSslCertificatesAggregatedListSecurity() {{
                option1 = new ComputeSslCertificatesAggregatedListSecurityOption1("commodi", "at") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.sslCertificateAggregatedList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeSslCertificatesDelete

Deletes the specified SslCertificate resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeSslCertificatesDeleteRequest;
import org.openapis.openapi.models.operations.ComputeSslCertificatesDeleteResponse;
import org.openapis.openapi.models.operations.ComputeSslCertificatesDeleteSecurity;
import org.openapis.openapi.models.operations.ComputeSslCertificatesDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ComputeSslCertificatesDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeSslCertificatesDeleteRequest req = new ComputeSslCertificatesDeleteRequest("autem", "itaque") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "illum";
                alt = AltEnum.JSON;
                callback = "consequuntur";
                fields = "ullam";
                key = "aperiam";
                oauthToken = "optio";
                prettyPrint = false;
                quotaUser = "neque";
                requestId = "repellendus";
                uploadType = "commodi";
                uploadProtocol = "mollitia";
                userIp = "tenetur";
            }};            

            ComputeSslCertificatesDeleteResponse res = sdk.sslCertificates.computeSslCertificatesDelete(req, new ComputeSslCertificatesDeleteSecurity() {{
                option1 = new ComputeSslCertificatesDeleteSecurityOption1("veniam", "illum") {{
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

## computeSslCertificatesGet

Returns the specified SslCertificate resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeSslCertificatesGetRequest;
import org.openapis.openapi.models.operations.ComputeSslCertificatesGetResponse;
import org.openapis.openapi.models.operations.ComputeSslCertificatesGetSecurity;
import org.openapis.openapi.models.operations.ComputeSslCertificatesGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeSslCertificatesGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeSslCertificatesGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeSslCertificatesGetRequest req = new ComputeSslCertificatesGetRequest("voluptates", "facere") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "magnam";
                alt = AltEnum.PROTO;
                callback = "sequi";
                fields = "provident";
                key = "enim";
                oauthToken = "molestiae";
                prettyPrint = false;
                quotaUser = "distinctio";
                uploadType = "minus";
                uploadProtocol = "eveniet";
                userIp = "iusto";
            }};            

            ComputeSslCertificatesGetResponse res = sdk.sslCertificates.computeSslCertificatesGet(req, new ComputeSslCertificatesGetSecurity() {{
                option1 = new ComputeSslCertificatesGetSecurityOption1("sit", "cupiditate") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.sslCertificate != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeSslCertificatesInsert

Creates a SslCertificate resource in the specified project using the data included in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeSslCertificatesInsertRequest;
import org.openapis.openapi.models.operations.ComputeSslCertificatesInsertResponse;
import org.openapis.openapi.models.operations.ComputeSslCertificatesInsertSecurity;
import org.openapis.openapi.models.operations.ComputeSslCertificatesInsertSecurityOption1;
import org.openapis.openapi.models.operations.ComputeSslCertificatesInsertSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SslCertificate;
import org.openapis.openapi.models.shared.SslCertificateManagedSslCertificate;
import org.openapis.openapi.models.shared.SslCertificateManagedSslCertificateDomainStatusEnum;
import org.openapis.openapi.models.shared.SslCertificateManagedSslCertificateStatusEnum;
import org.openapis.openapi.models.shared.SslCertificateSelfManagedSslCertificate;
import org.openapis.openapi.models.shared.SslCertificateTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeSslCertificatesInsertRequest req = new ComputeSslCertificatesInsertRequest("reprehenderit") {{
                dollarXgafv = XgafvEnum.ONE;
                sslCertificate = new SslCertificate() {{
                    certificate = "nisi";
                    creationTimestamp = "minima";
                    description = "repellendus";
                    expireTime = "totam";
                    id = "fugiat";
                    kind = "qui";
                    managed = new SslCertificateManagedSslCertificate() {{
                        domainStatus = new java.util.HashMap<String, org.openapis.openapi.models.shared.SslCertificateManagedSslCertificateDomainStatusEnum>() {{
                            put("possimus", SslCertificateManagedSslCertificateDomainStatusEnum.FAILED_NOT_VISIBLE);
                            put("necessitatibus", SslCertificateManagedSslCertificateDomainStatusEnum.ACTIVE);
                            put("aliquam", SslCertificateManagedSslCertificateDomainStatusEnum.FAILED_CAA_CHECKING);
                        }};
                        domains = new String[]{{
                            add("incidunt"),
                            add("dicta"),
                            add("ea"),
                        }};
                        status = SslCertificateManagedSslCertificateStatusEnum.PROVISIONING_FAILED_PERMANENTLY;
                    }};;
                    name = "Boyd Mosciski";
                    privateKey = "earum";
                    region = "quis";
                    selfLink = "quod";
                    selfManaged = new SslCertificateSelfManagedSslCertificate() {{
                        certificate = "dolores";
                        privateKey = "atque";
                    }};;
                    subjectAlternativeNames = new String[]{{
                        add("dignissimos"),
                        add("sequi"),
                        add("ducimus"),
                        add("officia"),
                    }};
                    type = SslCertificateTypeEnum.MANAGED;
                }};;
                accessToken = "repudiandae";
                alt = AltEnum.PROTO;
                callback = "error";
                fields = "rerum";
                key = "quibusdam";
                oauthToken = "quae";
                prettyPrint = false;
                quotaUser = "sint";
                requestId = "pariatur";
                uploadType = "nobis";
                uploadProtocol = "beatae";
                userIp = "cupiditate";
            }};            

            ComputeSslCertificatesInsertResponse res = sdk.sslCertificates.computeSslCertificatesInsert(req, new ComputeSslCertificatesInsertSecurity() {{
                option1 = new ComputeSslCertificatesInsertSecurityOption1("placeat", "deleniti") {{
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

## computeSslCertificatesList

Retrieves the list of SslCertificate resources available to the specified project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeSslCertificatesListRequest;
import org.openapis.openapi.models.operations.ComputeSslCertificatesListResponse;
import org.openapis.openapi.models.operations.ComputeSslCertificatesListSecurity;
import org.openapis.openapi.models.operations.ComputeSslCertificatesListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeSslCertificatesListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeSslCertificatesListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeSslCertificatesListRequest req = new ComputeSslCertificatesListRequest("optio") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dolorem";
                alt = AltEnum.JSON;
                callback = "consequatur";
                fields = "magni";
                filter = "natus";
                key = "qui";
                maxResults = 37210L;
                oauthToken = "laboriosam";
                orderBy = "suscipit";
                pageToken = "optio";
                prettyPrint = false;
                quotaUser = "mollitia";
                returnPartialSuccess = false;
                uploadType = "molestias";
                uploadProtocol = "eaque";
                userIp = "nihil";
            }};            

            ComputeSslCertificatesListResponse res = sdk.sslCertificates.computeSslCertificatesList(req, new ComputeSslCertificatesListSecurity() {{
                option1 = new ComputeSslCertificatesListSecurityOption1("veniam", "atque") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.sslCertificateList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeSslCertificatesTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeSslCertificatesTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.ComputeSslCertificatesTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.ComputeSslCertificatesTestIamPermissionsSecurity;
import org.openapis.openapi.models.operations.ComputeSslCertificatesTestIamPermissionsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeSslCertificatesTestIamPermissionsSecurityOption2;
import org.openapis.openapi.models.operations.ComputeSslCertificatesTestIamPermissionsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeSslCertificatesTestIamPermissionsRequest req = new ComputeSslCertificatesTestIamPermissionsRequest("debitis", "quod") {{
                dollarXgafv = XgafvEnum.TWO;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("esse"),
                        add("modi"),
                    }};
                }};;
                accessToken = "sunt";
                alt = AltEnum.PROTO;
                callback = "excepturi";
                fields = "porro";
                key = "ad";
                oauthToken = "quibusdam";
                prettyPrint = false;
                quotaUser = "dolorum";
                uploadType = "quo";
                uploadProtocol = "blanditiis";
                userIp = "doloremque";
            }};            

            ComputeSslCertificatesTestIamPermissionsResponse res = sdk.sslCertificates.computeSslCertificatesTestIamPermissions(req, new ComputeSslCertificatesTestIamPermissionsSecurity() {{
                option1 = new ComputeSslCertificatesTestIamPermissionsSecurityOption1("reprehenderit", "repellendus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.testPermissionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
