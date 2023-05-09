# regionSslCertificates

### Available Operations

* [computeRegionSslCertificatesDelete](#computeregionsslcertificatesdelete) - Deletes the specified SslCertificate resource in the region.
* [computeRegionSslCertificatesGet](#computeregionsslcertificatesget) - Returns the specified SslCertificate resource in the specified region. Get a list of available SSL certificates by making a list() request.
* [computeRegionSslCertificatesInsert](#computeregionsslcertificatesinsert) - Creates a SslCertificate resource in the specified project and region using the data included in the request
* [computeRegionSslCertificatesList](#computeregionsslcertificateslist) - Retrieves the list of SslCertificate resources available to the specified project in the specified region.
* [computeRegionSslCertificatesTestIamPermissions](#computeregionsslcertificatestestiampermissions) - Returns permissions that a caller has on the specified resource and region.

## computeRegionSslCertificatesDelete

Deletes the specified SslCertificate resource in the region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionSslCertificatesDeleteRequest;
import org.openapis.openapi.models.operations.ComputeRegionSslCertificatesDeleteResponse;
import org.openapis.openapi.models.operations.ComputeRegionSslCertificatesDeleteSecurity;
import org.openapis.openapi.models.operations.ComputeRegionSslCertificatesDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionSslCertificatesDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionSslCertificatesDeleteRequest req = new ComputeRegionSslCertificatesDeleteRequest("accusamus", "facere", "assumenda") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "veniam";
                alt = AltEnum.MEDIA;
                callback = "incidunt";
                fields = "veniam";
                key = "sunt";
                oauthToken = "cupiditate";
                prettyPrint = false;
                quotaUser = "quas";
                requestId = "qui";
                uploadType = "blanditiis";
                uploadProtocol = "explicabo";
                userIp = "totam";
            }};            

            ComputeRegionSslCertificatesDeleteResponse res = sdk.regionSslCertificates.computeRegionSslCertificatesDelete(req, new ComputeRegionSslCertificatesDeleteSecurity() {{
                option1 = new ComputeRegionSslCertificatesDeleteSecurityOption1("occaecati", "facere") {{
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

## computeRegionSslCertificatesGet

Returns the specified SslCertificate resource in the specified region. Get a list of available SSL certificates by making a list() request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionSslCertificatesGetRequest;
import org.openapis.openapi.models.operations.ComputeRegionSslCertificatesGetResponse;
import org.openapis.openapi.models.operations.ComputeRegionSslCertificatesGetSecurity;
import org.openapis.openapi.models.operations.ComputeRegionSslCertificatesGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionSslCertificatesGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeRegionSslCertificatesGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionSslCertificatesGetRequest req = new ComputeRegionSslCertificatesGetRequest("deserunt", "impedit", "aliquam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "optio";
                alt = AltEnum.JSON;
                callback = "quisquam";
                fields = "commodi";
                key = "error";
                oauthToken = "quas";
                prettyPrint = false;
                quotaUser = "occaecati";
                uploadType = "blanditiis";
                uploadProtocol = "odio";
                userIp = "saepe";
            }};            

            ComputeRegionSslCertificatesGetResponse res = sdk.regionSslCertificates.computeRegionSslCertificatesGet(req, new ComputeRegionSslCertificatesGetSecurity() {{
                option1 = new ComputeRegionSslCertificatesGetSecurityOption1("incidunt", "quibusdam") {{
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

## computeRegionSslCertificatesInsert

Creates a SslCertificate resource in the specified project and region using the data included in the request

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionSslCertificatesInsertRequest;
import org.openapis.openapi.models.operations.ComputeRegionSslCertificatesInsertResponse;
import org.openapis.openapi.models.operations.ComputeRegionSslCertificatesInsertSecurity;
import org.openapis.openapi.models.operations.ComputeRegionSslCertificatesInsertSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionSslCertificatesInsertSecurityOption2;
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

            ComputeRegionSslCertificatesInsertRequest req = new ComputeRegionSslCertificatesInsertRequest("tenetur", "beatae") {{
                dollarXgafv = XgafvEnum.ONE;
                sslCertificate = new SslCertificate() {{
                    certificate = "maiores";
                    creationTimestamp = "doloribus";
                    description = "suscipit";
                    expireTime = "facere";
                    id = "accusamus";
                    kind = "sed";
                    managed = new SslCertificateManagedSslCertificate() {{
                        domainStatus = new java.util.HashMap<String, org.openapis.openapi.models.shared.SslCertificateManagedSslCertificateDomainStatusEnum>() {{
                            put("numquam", SslCertificateManagedSslCertificateDomainStatusEnum.FAILED_CAA_CHECKING);
                            put("vel", SslCertificateManagedSslCertificateDomainStatusEnum.FAILED_NOT_VISIBLE);
                        }};
                        domains = new String[]{{
                            add("nihil"),
                        }};
                        status = SslCertificateManagedSslCertificateStatusEnum.PROVISIONING_FAILED_PERMANENTLY;
                    }};;
                    name = "Jon Crooks";
                    privateKey = "facere";
                    region = "cumque";
                    selfLink = "odio";
                    selfLinkWithId = "labore";
                    selfManaged = new SslCertificateSelfManagedSslCertificate() {{
                        certificate = "quos";
                        privateKey = "vero";
                    }};;
                    subjectAlternativeNames = new String[]{{
                        add("maxime"),
                    }};
                    type = SslCertificateTypeEnum.MANAGED;
                }};;
                accessToken = "est";
                alt = AltEnum.PROTO;
                callback = "quia";
                fields = "ab";
                key = "doloribus";
                oauthToken = "eligendi";
                prettyPrint = false;
                quotaUser = "assumenda";
                requestId = "eos";
                uploadType = "blanditiis";
                uploadProtocol = "quibusdam";
                userIp = "delectus";
            }};            

            ComputeRegionSslCertificatesInsertResponse res = sdk.regionSslCertificates.computeRegionSslCertificatesInsert(req, new ComputeRegionSslCertificatesInsertSecurity() {{
                option1 = new ComputeRegionSslCertificatesInsertSecurityOption1("autem", "minima") {{
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

## computeRegionSslCertificatesList

Retrieves the list of SslCertificate resources available to the specified project in the specified region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionSslCertificatesListRequest;
import org.openapis.openapi.models.operations.ComputeRegionSslCertificatesListResponse;
import org.openapis.openapi.models.operations.ComputeRegionSslCertificatesListSecurity;
import org.openapis.openapi.models.operations.ComputeRegionSslCertificatesListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionSslCertificatesListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeRegionSslCertificatesListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionSslCertificatesListRequest req = new ComputeRegionSslCertificatesListRequest("quibusdam", "at") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "suscipit";
                alt = AltEnum.PROTO;
                callback = "provident";
                fields = "ea";
                filter = "inventore";
                key = "eveniet";
                maxResults = 234076L;
                oauthToken = "nesciunt";
                orderBy = "incidunt";
                pageToken = "consequuntur";
                prettyPrint = false;
                quotaUser = "accusamus";
                returnPartialSuccess = false;
                uploadType = "aspernatur";
                uploadProtocol = "quibusdam";
                userIp = "maxime";
            }};            

            ComputeRegionSslCertificatesListResponse res = sdk.regionSslCertificates.computeRegionSslCertificatesList(req, new ComputeRegionSslCertificatesListSecurity() {{
                option1 = new ComputeRegionSslCertificatesListSecurityOption1("hic", "quibusdam") {{
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

## computeRegionSslCertificatesTestIamPermissions

Returns permissions that a caller has on the specified resource and region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionSslCertificatesTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.ComputeRegionSslCertificatesTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.ComputeRegionSslCertificatesTestIamPermissionsSecurity;
import org.openapis.openapi.models.operations.ComputeRegionSslCertificatesTestIamPermissionsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionSslCertificatesTestIamPermissionsSecurityOption2;
import org.openapis.openapi.models.operations.ComputeRegionSslCertificatesTestIamPermissionsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionSslCertificatesTestIamPermissionsRequest req = new ComputeRegionSslCertificatesTestIamPermissionsRequest("provident", "nihil", "temporibus") {{
                dollarXgafv = XgafvEnum.ONE;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("quidem"),
                        add("harum"),
                        add("fugiat"),
                    }};
                }};;
                accessToken = "vitae";
                alt = AltEnum.MEDIA;
                callback = "dolorum";
                fields = "ad";
                key = "ipsa";
                oauthToken = "fugit";
                prettyPrint = false;
                quotaUser = "totam";
                uploadType = "reprehenderit";
                uploadProtocol = "consequatur";
                userIp = "est";
            }};            

            ComputeRegionSslCertificatesTestIamPermissionsResponse res = sdk.regionSslCertificates.computeRegionSslCertificatesTestIamPermissions(req, new ComputeRegionSslCertificatesTestIamPermissionsSecurity() {{
                option1 = new ComputeRegionSslCertificatesTestIamPermissionsSecurityOption1("consequuntur", "delectus") {{
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
