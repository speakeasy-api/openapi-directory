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

            ComputeSslCertificatesAggregatedListRequest req = new ComputeSslCertificatesAggregatedListRequest("illo") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "facere";
                alt = AltEnum.MEDIA;
                callback = "facere";
                fields = "accusantium";
                filter = "ullam";
                includeAllScopes = false;
                key = "non";
                maxResults = 302433L;
                oauthToken = "necessitatibus";
                orderBy = "eligendi";
                pageToken = "itaque";
                prettyPrint = false;
                quotaUser = "reprehenderit";
                returnPartialSuccess = false;
                uploadType = "odio";
                uploadProtocol = "recusandae";
                userIp = "iure";
            }};            

            ComputeSslCertificatesAggregatedListResponse res = sdk.sslCertificates.computeSslCertificatesAggregatedList(req, new ComputeSslCertificatesAggregatedListSecurity() {{
                option1 = new ComputeSslCertificatesAggregatedListSecurityOption1("unde", "accusamus") {{
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

            ComputeSslCertificatesDeleteRequest req = new ComputeSslCertificatesDeleteRequest("recusandae", "nesciunt") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "labore";
                alt = AltEnum.MEDIA;
                callback = "quam";
                fields = "officia";
                key = "nesciunt";
                oauthToken = "esse";
                prettyPrint = false;
                quotaUser = "doloremque";
                requestId = "harum";
                uploadType = "ipsam";
                uploadProtocol = "nisi";
                userIp = "facilis";
            }};            

            ComputeSslCertificatesDeleteResponse res = sdk.sslCertificates.computeSslCertificatesDelete(req, new ComputeSslCertificatesDeleteSecurity() {{
                option1 = new ComputeSslCertificatesDeleteSecurityOption1("laudantium", "labore") {{
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

            ComputeSslCertificatesGetRequest req = new ComputeSslCertificatesGetRequest("quidem", "doloremque") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "delectus";
                alt = AltEnum.JSON;
                callback = "earum";
                fields = "totam";
                key = "natus";
                oauthToken = "perferendis";
                prettyPrint = false;
                quotaUser = "maiores";
                uploadType = "temporibus";
                uploadProtocol = "fugiat";
                userIp = "atque";
            }};            

            ComputeSslCertificatesGetResponse res = sdk.sslCertificates.computeSslCertificatesGet(req, new ComputeSslCertificatesGetSecurity() {{
                option1 = new ComputeSslCertificatesGetSecurityOption1("sit", "voluptatibus") {{
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

            ComputeSslCertificatesInsertRequest req = new ComputeSslCertificatesInsertRequest("dolorum") {{
                dollarXgafv = XgafvEnum.ONE;
                sslCertificate = new SslCertificate() {{
                    certificate = "provident";
                    creationTimestamp = "neque";
                    description = "neque";
                    expireTime = "debitis";
                    id = "fugiat";
                    kind = "voluptatibus";
                    managed = new SslCertificateManagedSslCertificate() {{
                        domainStatus = new java.util.HashMap<String, org.openapis.openapi.models.shared.SslCertificateManagedSslCertificateDomainStatusEnum>() {{
                            put("necessitatibus", SslCertificateManagedSslCertificateDomainStatusEnum.FAILED_CAA_CHECKING);
                        }};
                        domains = new String[]{{
                            add("ea"),
                            add("repudiandae"),
                            add("quo"),
                        }};
                        status = SslCertificateManagedSslCertificateStatusEnum.ACTIVE;
                    }};;
                    name = "Luz Reichert IV";
                    privateKey = "explicabo";
                    region = "eius";
                    selfLink = "facere";
                    selfLinkWithId = "magnam";
                    selfManaged = new SslCertificateSelfManagedSslCertificate() {{
                        certificate = "et";
                        privateKey = "possimus";
                    }};;
                    subjectAlternativeNames = new String[]{{
                        add("iure"),
                        add("quia"),
                    }};
                    type = SslCertificateTypeEnum.SELF_MANAGED;
                }};;
                accessToken = "animi";
                alt = AltEnum.MEDIA;
                callback = "eaque";
                fields = "accusamus";
                key = "odit";
                oauthToken = "atque";
                prettyPrint = false;
                quotaUser = "a";
                requestId = "minus";
                uploadType = "odio";
                uploadProtocol = "nulla";
                userIp = "culpa";
            }};            

            ComputeSslCertificatesInsertResponse res = sdk.sslCertificates.computeSslCertificatesInsert(req, new ComputeSslCertificatesInsertSecurity() {{
                option1 = new ComputeSslCertificatesInsertSecurityOption1("nesciunt", "doloremque") {{
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

            ComputeSslCertificatesListRequest req = new ComputeSslCertificatesListRequest("distinctio") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "id";
                alt = AltEnum.PROTO;
                callback = "adipisci";
                fields = "occaecati";
                filter = "tempora";
                key = "eum";
                maxResults = 882511L;
                oauthToken = "sit";
                orderBy = "quaerat";
                pageToken = "modi";
                prettyPrint = false;
                quotaUser = "consequuntur";
                returnPartialSuccess = false;
                uploadType = "enim";
                uploadProtocol = "dolore";
                userIp = "eius";
            }};            

            ComputeSslCertificatesListResponse res = sdk.sslCertificates.computeSslCertificatesList(req, new ComputeSslCertificatesListSecurity() {{
                option1 = new ComputeSslCertificatesListSecurityOption1("occaecati", "dolore") {{
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

            ComputeSslCertificatesTestIamPermissionsRequest req = new ComputeSslCertificatesTestIamPermissionsRequest("nihil", "totam") {{
                dollarXgafv = XgafvEnum.ONE;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("quia"),
                    }};
                }};;
                accessToken = "ab";
                alt = AltEnum.PROTO;
                callback = "qui";
                fields = "perferendis";
                key = "architecto";
                oauthToken = "fuga";
                prettyPrint = false;
                quotaUser = "repudiandae";
                uploadType = "impedit";
                uploadProtocol = "rem";
                userIp = "odit";
            }};            

            ComputeSslCertificatesTestIamPermissionsResponse res = sdk.sslCertificates.computeSslCertificatesTestIamPermissions(req, new ComputeSslCertificatesTestIamPermissionsSecurity() {{
                option1 = new ComputeSslCertificatesTestIamPermissionsSecurityOption1("minus", "sint") {{
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
