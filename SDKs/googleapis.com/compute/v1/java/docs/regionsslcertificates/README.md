# regionSslCertificates

### Available Operations

* [computeRegionSslCertificatesDelete](#computeregionsslcertificatesdelete) - Deletes the specified SslCertificate resource in the region.
* [computeRegionSslCertificatesGet](#computeregionsslcertificatesget) - Returns the specified SslCertificate resource in the specified region. Get a list of available SSL certificates by making a list() request.
* [computeRegionSslCertificatesInsert](#computeregionsslcertificatesinsert) - Creates a SslCertificate resource in the specified project and region using the data included in the request
* [computeRegionSslCertificatesList](#computeregionsslcertificateslist) - Retrieves the list of SslCertificate resources available to the specified project in the specified region.

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

            ComputeRegionSslCertificatesDeleteRequest req = new ComputeRegionSslCertificatesDeleteRequest("commodi", "vero", "fugit") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "sed";
                alt = AltEnum.PROTO;
                callback = "delectus";
                fields = "sequi";
                key = "debitis";
                oauthToken = "est";
                prettyPrint = false;
                quotaUser = "sapiente";
                requestId = "dignissimos";
                uploadType = "atque";
                uploadProtocol = "eius";
                userIp = "doloribus";
            }};            

            ComputeRegionSslCertificatesDeleteResponse res = sdk.regionSslCertificates.computeRegionSslCertificatesDelete(req, new ComputeRegionSslCertificatesDeleteSecurity() {{
                option1 = new ComputeRegionSslCertificatesDeleteSecurityOption1("deserunt", "quidem") {{
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

            ComputeRegionSslCertificatesGetRequest req = new ComputeRegionSslCertificatesGetRequest("iste", "expedita", "fugit") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "optio";
                alt = AltEnum.PROTO;
                callback = "eveniet";
                fields = "cum";
                key = "quaerat";
                oauthToken = "ab";
                prettyPrint = false;
                quotaUser = "architecto";
                uploadType = "placeat";
                uploadProtocol = "nemo";
                userIp = "dolor";
            }};            

            ComputeRegionSslCertificatesGetResponse res = sdk.regionSslCertificates.computeRegionSslCertificatesGet(req, new ComputeRegionSslCertificatesGetSecurity() {{
                option1 = new ComputeRegionSslCertificatesGetSecurityOption1("illum", "laborum") {{
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

            ComputeRegionSslCertificatesInsertRequest req = new ComputeRegionSslCertificatesInsertRequest("quam", "delectus") {{
                dollarXgafv = XgafvEnum.TWO;
                sslCertificate = new SslCertificate() {{
                    certificate = "tempore";
                    creationTimestamp = "cupiditate";
                    description = "iste";
                    expireTime = "voluptatibus";
                    id = "sed";
                    kind = "quas";
                    managed = new SslCertificateManagedSslCertificate() {{
                        domainStatus = new java.util.HashMap<String, org.openapis.openapi.models.shared.SslCertificateManagedSslCertificateDomainStatusEnum>() {{
                            put("porro", SslCertificateManagedSslCertificateDomainStatusEnum.FAILED_RATE_LIMITED);
                            put("laboriosam", SslCertificateManagedSslCertificateDomainStatusEnum.PROVISIONING);
                        }};
                        domains = new String[]{{
                            add("labore"),
                            add("tempora"),
                        }};
                        status = SslCertificateManagedSslCertificateStatusEnum.PROVISIONING;
                    }};;
                    name = "Priscilla Lueilwitz";
                    privateKey = "deserunt";
                    region = "accusantium";
                    selfLink = "quia";
                    selfManaged = new SslCertificateSelfManagedSslCertificate() {{
                        certificate = "doloremque";
                        privateKey = "sequi";
                    }};;
                    subjectAlternativeNames = new String[]{{
                        add("optio"),
                    }};
                    type = SslCertificateTypeEnum.SELF_MANAGED;
                }};;
                accessToken = "quia";
                alt = AltEnum.MEDIA;
                callback = "dignissimos";
                fields = "corrupti";
                key = "quibusdam";
                oauthToken = "odio";
                prettyPrint = false;
                quotaUser = "in";
                requestId = "molestias";
                uploadType = "sit";
                uploadProtocol = "magnam";
                userIp = "odit";
            }};            

            ComputeRegionSslCertificatesInsertResponse res = sdk.regionSslCertificates.computeRegionSslCertificatesInsert(req, new ComputeRegionSslCertificatesInsertSecurity() {{
                option1 = new ComputeRegionSslCertificatesInsertSecurityOption1("voluptates", "quaerat") {{
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

            ComputeRegionSslCertificatesListRequest req = new ComputeRegionSslCertificatesListRequest("illum", "autem") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "sit";
                alt = AltEnum.MEDIA;
                callback = "repellat";
                fields = "omnis";
                filter = "vero";
                key = "adipisci";
                maxResults = 273677L;
                oauthToken = "consequuntur";
                orderBy = "enim";
                pageToken = "officiis";
                prettyPrint = false;
                quotaUser = "voluptatibus";
                returnPartialSuccess = false;
                uploadType = "nisi";
                uploadProtocol = "dolorem";
                userIp = "eveniet";
            }};            

            ComputeRegionSslCertificatesListResponse res = sdk.regionSslCertificates.computeRegionSslCertificatesList(req, new ComputeRegionSslCertificatesListSecurity() {{
                option1 = new ComputeRegionSslCertificatesListSecurityOption1("nam", "quidem") {{
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
