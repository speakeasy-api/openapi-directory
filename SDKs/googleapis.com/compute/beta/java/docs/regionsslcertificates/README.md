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

            ComputeRegionSslCertificatesDeleteRequest req = new ComputeRegionSslCertificatesDeleteRequest("dignissimos", "alias", "aliquam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quasi";
                alt = AltEnum.JSON;
                callback = "asperiores";
                fields = "eaque";
                key = "quo";
                oauthToken = "rerum";
                prettyPrint = false;
                quotaUser = "optio";
                requestId = "ea";
                uploadType = "deleniti";
                uploadProtocol = "quo";
                userIp = "veniam";
            }};            

            ComputeRegionSslCertificatesDeleteResponse res = sdk.regionSslCertificates.computeRegionSslCertificatesDelete(req, new ComputeRegionSslCertificatesDeleteSecurity() {{
                option1 = new ComputeRegionSslCertificatesDeleteSecurityOption1("animi", "velit") {{
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

            ComputeRegionSslCertificatesGetRequest req = new ComputeRegionSslCertificatesGetRequest("vel", "deleniti", "doloribus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quasi";
                alt = AltEnum.JSON;
                callback = "aperiam";
                fields = "molestias";
                key = "veniam";
                oauthToken = "dolorem";
                prettyPrint = false;
                quotaUser = "delectus";
                uploadType = "asperiores";
                uploadProtocol = "aut";
                userIp = "maxime";
            }};            

            ComputeRegionSslCertificatesGetResponse res = sdk.regionSslCertificates.computeRegionSslCertificatesGet(req, new ComputeRegionSslCertificatesGetSecurity() {{
                option1 = new ComputeRegionSslCertificatesGetSecurityOption1("ipsa", "accusantium") {{
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

            ComputeRegionSslCertificatesInsertRequest req = new ComputeRegionSslCertificatesInsertRequest("necessitatibus", "expedita") {{
                dollarXgafv = XgafvEnum.TWO;
                sslCertificate = new SslCertificate() {{
                    certificate = "quas";
                    creationTimestamp = "assumenda";
                    description = "nisi";
                    expireTime = "fuga";
                    id = "aperiam";
                    kind = "recusandae";
                    managed = new SslCertificateManagedSslCertificate() {{
                        domainStatus = new java.util.HashMap<String, org.openapis.openapi.models.shared.SslCertificateManagedSslCertificateDomainStatusEnum>() {{
                            put("mollitia", SslCertificateManagedSslCertificateDomainStatusEnum.DOMAIN_STATUS_UNSPECIFIED);
                            put("veniam", SslCertificateManagedSslCertificateDomainStatusEnum.FAILED_CAA_CHECKING);
                            put("recusandae", SslCertificateManagedSslCertificateDomainStatusEnum.PROVISIONING);
                            put("aspernatur", SslCertificateManagedSslCertificateDomainStatusEnum.DOMAIN_STATUS_UNSPECIFIED);
                        }};
                        domains = new String[]{{
                            add("nesciunt"),
                            add("aut"),
                            add("porro"),
                            add("ipsam"),
                        }};
                        status = SslCertificateManagedSslCertificateStatusEnum.PROVISIONING_FAILED;
                    }};;
                    name = "Antonio Buckridge";
                    privateKey = "distinctio";
                    region = "necessitatibus";
                    selfLink = "nostrum";
                    selfManaged = new SslCertificateSelfManagedSslCertificate() {{
                        certificate = "non";
                        privateKey = "sequi";
                    }};;
                    subjectAlternativeNames = new String[]{{
                        add("laboriosam"),
                    }};
                    type = SslCertificateTypeEnum.TYPE_UNSPECIFIED;
                }};;
                accessToken = "voluptatum";
                alt = AltEnum.JSON;
                callback = "temporibus";
                fields = "at";
                key = "voluptate";
                oauthToken = "deserunt";
                prettyPrint = false;
                quotaUser = "labore";
                requestId = "at";
                uploadType = "veniam";
                uploadProtocol = "maiores";
                userIp = "quisquam";
            }};            

            ComputeRegionSslCertificatesInsertResponse res = sdk.regionSslCertificates.computeRegionSslCertificatesInsert(req, new ComputeRegionSslCertificatesInsertSecurity() {{
                option1 = new ComputeRegionSslCertificatesInsertSecurityOption1("est", "consequuntur") {{
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

            ComputeRegionSslCertificatesListRequest req = new ComputeRegionSslCertificatesListRequest("debitis", "fugiat") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "eveniet";
                alt = AltEnum.JSON;
                callback = "dolores";
                fields = "quae";
                filter = "iste";
                key = "sequi";
                maxResults = 870029L;
                oauthToken = "cupiditate";
                orderBy = "natus";
                pageToken = "molestiae";
                prettyPrint = false;
                quotaUser = "voluptas";
                returnPartialSuccess = false;
                uploadType = "id";
                uploadProtocol = "iste";
                userIp = "quaerat";
            }};            

            ComputeRegionSslCertificatesListResponse res = sdk.regionSslCertificates.computeRegionSslCertificatesList(req, new ComputeRegionSslCertificatesListSecurity() {{
                option1 = new ComputeRegionSslCertificatesListSecurityOption1("modi", "doloremque") {{
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

            ComputeRegionSslCertificatesTestIamPermissionsRequest req = new ComputeRegionSslCertificatesTestIamPermissionsRequest("nostrum", "nisi", "dolores") {{
                dollarXgafv = XgafvEnum.ONE;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("exercitationem"),
                        add("corrupti"),
                        add("tenetur"),
                        add("repellendus"),
                    }};
                }};;
                accessToken = "earum";
                alt = AltEnum.PROTO;
                callback = "quaerat";
                fields = "magni";
                key = "labore";
                oauthToken = "fuga";
                prettyPrint = false;
                quotaUser = "qui";
                uploadType = "corporis";
                uploadProtocol = "itaque";
                userIp = "voluptatum";
            }};            

            ComputeRegionSslCertificatesTestIamPermissionsResponse res = sdk.regionSslCertificates.computeRegionSslCertificatesTestIamPermissions(req, new ComputeRegionSslCertificatesTestIamPermissionsSecurity() {{
                option1 = new ComputeRegionSslCertificatesTestIamPermissionsSecurityOption1("consectetur", "soluta") {{
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
