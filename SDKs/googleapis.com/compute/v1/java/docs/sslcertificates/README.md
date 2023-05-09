# sslCertificates

### Available Operations

* [computeSslCertificatesAggregatedList](#computesslcertificatesaggregatedlist) - Retrieves the list of all SslCertificate resources, regional and global, available to the specified project.
* [computeSslCertificatesDelete](#computesslcertificatesdelete) - Deletes the specified SslCertificate resource.
* [computeSslCertificatesGet](#computesslcertificatesget) - Returns the specified SslCertificate resource.
* [computeSslCertificatesInsert](#computesslcertificatesinsert) - Creates a SslCertificate resource in the specified project using the data included in the request.
* [computeSslCertificatesList](#computesslcertificateslist) - Retrieves the list of SslCertificate resources available to the specified project.

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

            ComputeSslCertificatesAggregatedListRequest req = new ComputeSslCertificatesAggregatedListRequest("eum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "adipisci";
                alt = AltEnum.MEDIA;
                callback = "et";
                fields = "necessitatibus";
                filter = "tempora";
                includeAllScopes = false;
                key = "quo";
                maxResults = 160706L;
                oauthToken = "modi";
                orderBy = "quod";
                pageToken = "aliquam";
                prettyPrint = false;
                quotaUser = "optio";
                returnPartialSuccess = false;
                uploadType = "expedita";
                uploadProtocol = "iusto";
                userIp = "quos";
            }};            

            ComputeSslCertificatesAggregatedListResponse res = sdk.sslCertificates.computeSslCertificatesAggregatedList(req, new ComputeSslCertificatesAggregatedListSecurity() {{
                option1 = new ComputeSslCertificatesAggregatedListSecurityOption1("ut", "accusantium") {{
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

            ComputeSslCertificatesDeleteRequest req = new ComputeSslCertificatesDeleteRequest("nam", "eveniet") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "provident";
                alt = AltEnum.JSON;
                callback = "velit";
                fields = "voluptates";
                key = "soluta";
                oauthToken = "perspiciatis";
                prettyPrint = false;
                quotaUser = "accusamus";
                requestId = "dolor";
                uploadType = "vel";
                uploadProtocol = "voluptatibus";
                userIp = "eveniet";
            }};            

            ComputeSslCertificatesDeleteResponse res = sdk.sslCertificates.computeSslCertificatesDelete(req, new ComputeSslCertificatesDeleteSecurity() {{
                option1 = new ComputeSslCertificatesDeleteSecurityOption1("voluptatem", "vero") {{
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

            ComputeSslCertificatesGetRequest req = new ComputeSslCertificatesGetRequest("eligendi", "in") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "labore";
                alt = AltEnum.PROTO;
                callback = "eveniet";
                fields = "ad";
                key = "placeat";
                oauthToken = "odit";
                prettyPrint = false;
                quotaUser = "aut";
                uploadType = "eius";
                uploadProtocol = "est";
                userIp = "doloremque";
            }};            

            ComputeSslCertificatesGetResponse res = sdk.sslCertificates.computeSslCertificatesGet(req, new ComputeSslCertificatesGetSecurity() {{
                option1 = new ComputeSslCertificatesGetSecurityOption1("est", "velit") {{
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

            ComputeSslCertificatesInsertRequest req = new ComputeSslCertificatesInsertRequest("facilis") {{
                dollarXgafv = XgafvEnum.TWO;
                sslCertificate = new SslCertificate() {{
                    certificate = "vitae";
                    creationTimestamp = "labore";
                    description = "occaecati";
                    expireTime = "quos";
                    id = "quidem";
                    kind = "odio";
                    managed = new SslCertificateManagedSslCertificate() {{
                        domainStatus = new java.util.HashMap<String, org.openapis.openapi.models.shared.SslCertificateManagedSslCertificateDomainStatusEnum>() {{
                            put("cupiditate", SslCertificateManagedSslCertificateDomainStatusEnum.PROVISIONING);
                            put("illo", SslCertificateManagedSslCertificateDomainStatusEnum.FAILED_CAA_FORBIDDEN);
                            put("impedit", SslCertificateManagedSslCertificateDomainStatusEnum.FAILED_CAA_CHECKING);
                            put("ullam", SslCertificateManagedSslCertificateDomainStatusEnum.FAILED_CAA_CHECKING);
                        }};
                        domains = new String[]{{
                            add("aperiam"),
                            add("reiciendis"),
                        }};
                        status = SslCertificateManagedSslCertificateStatusEnum.PROVISIONING_FAILED_PERMANENTLY;
                    }};;
                    name = "Jaime Krajcik";
                    privateKey = "ipsa";
                    region = "atque";
                    selfLink = "consectetur";
                    selfManaged = new SslCertificateSelfManagedSslCertificate() {{
                        certificate = "sapiente";
                        privateKey = "voluptatum";
                    }};;
                    subjectAlternativeNames = new String[]{{
                        add("placeat"),
                        add("dolorem"),
                        add("praesentium"),
                    }};
                    type = SslCertificateTypeEnum.MANAGED;
                }};;
                accessToken = "quo";
                alt = AltEnum.JSON;
                callback = "voluptatibus";
                fields = "provident";
                key = "nesciunt";
                oauthToken = "quae";
                prettyPrint = false;
                quotaUser = "quia";
                requestId = "quam";
                uploadType = "assumenda";
                uploadProtocol = "illum";
                userIp = "maiores";
            }};            

            ComputeSslCertificatesInsertResponse res = sdk.sslCertificates.computeSslCertificatesInsert(req, new ComputeSslCertificatesInsertSecurity() {{
                option1 = new ComputeSslCertificatesInsertSecurityOption1("blanditiis", "iste") {{
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

            ComputeSslCertificatesListRequest req = new ComputeSslCertificatesListRequest("voluptates") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "itaque";
                alt = AltEnum.PROTO;
                callback = "dolores";
                fields = "libero";
                filter = "deleniti";
                key = "omnis";
                maxResults = 299313L;
                oauthToken = "qui";
                orderBy = "sed";
                pageToken = "dolores";
                prettyPrint = false;
                quotaUser = "occaecati";
                returnPartialSuccess = false;
                uploadType = "mollitia";
                uploadProtocol = "officiis";
                userIp = "nam";
            }};            

            ComputeSslCertificatesListResponse res = sdk.sslCertificates.computeSslCertificatesList(req, new ComputeSslCertificatesListSecurity() {{
                option1 = new ComputeSslCertificatesListSecurityOption1("animi", "vitae") {{
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
