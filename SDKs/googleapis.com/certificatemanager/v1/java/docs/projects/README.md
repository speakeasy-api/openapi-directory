# projects

### Available Operations

* [certificatemanagerProjectsLocationsCertificateIssuanceConfigsCreate](#certificatemanagerprojectslocationscertificateissuanceconfigscreate) - Creates a new CertificateIssuanceConfig in a given project and location.
* [certificatemanagerProjectsLocationsCertificateIssuanceConfigsList](#certificatemanagerprojectslocationscertificateissuanceconfigslist) - Lists CertificateIssuanceConfigs in a given project and location.
* [certificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesCreate](#certificatemanagerprojectslocationscertificatemapscertificatemapentriescreate) - Creates a new CertificateMapEntry in a given project and location.
* [certificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesList](#certificatemanagerprojectslocationscertificatemapscertificatemapentrieslist) - Lists CertificateMapEntries in a given project and location.
* [certificatemanagerProjectsLocationsCertificateMapsCreate](#certificatemanagerprojectslocationscertificatemapscreate) - Creates a new CertificateMap in a given project and location.
* [certificatemanagerProjectsLocationsCertificateMapsList](#certificatemanagerprojectslocationscertificatemapslist) - Lists CertificateMaps in a given project and location.
* [certificatemanagerProjectsLocationsCertificatesCreate](#certificatemanagerprojectslocationscertificatescreate) - Creates a new Certificate in a given project and location.
* [certificatemanagerProjectsLocationsCertificatesList](#certificatemanagerprojectslocationscertificateslist) - Lists Certificates in a given project and location.
* [certificatemanagerProjectsLocationsDnsAuthorizationsCreate](#certificatemanagerprojectslocationsdnsauthorizationscreate) - Creates a new DnsAuthorization in a given project and location.
* [certificatemanagerProjectsLocationsDnsAuthorizationsList](#certificatemanagerprojectslocationsdnsauthorizationslist) - Lists DnsAuthorizations in a given project and location.
* [certificatemanagerProjectsLocationsList](#certificatemanagerprojectslocationslist) - Lists information about the supported locations for this service.
* [certificatemanagerProjectsLocationsOperationsCancel](#certificatemanagerprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [certificatemanagerProjectsLocationsOperationsList](#certificatemanagerprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [certificatemanagerProjectsLocationsTrustConfigsCreate](#certificatemanagerprojectslocationstrustconfigscreate) - Creates a new TrustConfig in a given project and location.
* [certificatemanagerProjectsLocationsTrustConfigsDelete](#certificatemanagerprojectslocationstrustconfigsdelete) - Deletes a single TrustConfig.
* [certificatemanagerProjectsLocationsTrustConfigsGet](#certificatemanagerprojectslocationstrustconfigsget) - Gets details of a single TrustConfig.
* [certificatemanagerProjectsLocationsTrustConfigsList](#certificatemanagerprojectslocationstrustconfigslist) - Lists TrustConfigs in a given project and location.
* [certificatemanagerProjectsLocationsTrustConfigsPatch](#certificatemanagerprojectslocationstrustconfigspatch) - Updates a TrustConfig.

## certificatemanagerProjectsLocationsCertificateIssuanceConfigsCreate

Creates a new CertificateIssuanceConfig in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateRequest;
import org.openapis.openapi.models.operations.CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateResponse;
import org.openapis.openapi.models.operations.CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CertificateAuthorityConfig;
import org.openapis.openapi.models.shared.CertificateAuthorityServiceConfig;
import org.openapis.openapi.models.shared.CertificateIssuanceConfigInput;
import org.openapis.openapi.models.shared.CertificateIssuanceConfigKeyAlgorithmEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateRequest req = new CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateRequest("ipsam") {{
                dollarXgafv = XgafvEnum.TWO;
                certificateIssuanceConfigInput = new CertificateIssuanceConfigInput() {{
                    certificateAuthorityConfig = new CertificateAuthorityConfig() {{
                        certificateAuthorityServiceConfig = new CertificateAuthorityServiceConfig() {{
                            caPool = "sapiente";
                        }};;
                    }};;
                    description = "quo";
                    keyAlgorithm = CertificateIssuanceConfigKeyAlgorithmEnum.KEY_ALGORITHM_UNSPECIFIED;
                    labels = new java.util.HashMap<String, String>() {{
                        put("at", "maiores");
                        put("molestiae", "quod");
                        put("quod", "esse");
                        put("totam", "porro");
                    }};
                    lifetime = "dolorum";
                    name = "Antoinette Nikolaus";
                    rotationWindowPercentage = 537373;
                }};;
                accessToken = "hic";
                alt = AltEnum.PROTO;
                callback = "totam";
                certificateIssuanceConfigId = "beatae";
                fields = "commodi";
                key = "molestiae";
                oauthToken = "modi";
                prettyPrint = false;
                quotaUser = "qui";
                uploadType = "impedit";
                uploadProtocol = "cum";
            }};            

            CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateResponse res = sdk.projects.certificatemanagerProjectsLocationsCertificateIssuanceConfigsCreate(req, new CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateSecurity("esse", "ipsum") {{
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

## certificatemanagerProjectsLocationsCertificateIssuanceConfigsList

Lists CertificateIssuanceConfigs in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CertificatemanagerProjectsLocationsCertificateIssuanceConfigsListRequest;
import org.openapis.openapi.models.operations.CertificatemanagerProjectsLocationsCertificateIssuanceConfigsListResponse;
import org.openapis.openapi.models.operations.CertificatemanagerProjectsLocationsCertificateIssuanceConfigsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CertificatemanagerProjectsLocationsCertificateIssuanceConfigsListRequest req = new CertificatemanagerProjectsLocationsCertificateIssuanceConfigsListRequest("excepturi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "perferendis";
                alt = AltEnum.JSON;
                callback = "natus";
                fields = "sed";
                filter = "iste";
                key = "dolor";
                oauthToken = "natus";
                orderBy = "laboriosam";
                pageSize = 943749L;
                pageToken = "saepe";
                prettyPrint = false;
                quotaUser = "fuga";
                uploadType = "in";
                uploadProtocol = "corporis";
            }};            

            CertificatemanagerProjectsLocationsCertificateIssuanceConfigsListResponse res = sdk.projects.certificatemanagerProjectsLocationsCertificateIssuanceConfigsList(req, new CertificatemanagerProjectsLocationsCertificateIssuanceConfigsListSecurity("iste", "iure") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listCertificateIssuanceConfigsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## certificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesCreate

Creates a new CertificateMapEntry in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesCreateRequest;
import org.openapis.openapi.models.operations.CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesCreateResponse;
import org.openapis.openapi.models.operations.CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CertificateMapEntryInput;
import org.openapis.openapi.models.shared.CertificateMapEntryMatcherEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesCreateRequest req = new CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesCreateRequest("saepe") {{
                dollarXgafv = XgafvEnum.TWO;
                certificateMapEntryInput = new CertificateMapEntryInput() {{
                    certificates = new String[]{{
                        add("ipsa"),
                    }};
                    description = "reiciendis";
                    hostname = "qualified-pew.net";
                    labels = new java.util.HashMap<String, String>() {{
                        put("dolorem", "corporis");
                    }};
                    matcher = CertificateMapEntryMatcherEnum.MATCHER_UNSPECIFIED;
                    name = "Ronnie Mohr";
                }};;
                accessToken = "excepturi";
                alt = AltEnum.JSON;
                callback = "iure";
                certificateMapEntryId = "culpa";
                fields = "doloribus";
                key = "sapiente";
                oauthToken = "architecto";
                prettyPrint = false;
                quotaUser = "mollitia";
                uploadType = "dolorem";
                uploadProtocol = "culpa";
            }};            

            CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesCreateResponse res = sdk.projects.certificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesCreate(req, new CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesCreateSecurity("consequuntur", "repellat") {{
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

## certificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesList

Lists CertificateMapEntries in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesListRequest;
import org.openapis.openapi.models.operations.CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesListResponse;
import org.openapis.openapi.models.operations.CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesListRequest req = new CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesListRequest("mollitia") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "numquam";
                alt = AltEnum.MEDIA;
                callback = "quam";
                fields = "molestiae";
                filter = "velit";
                key = "error";
                oauthToken = "quia";
                orderBy = "quis";
                pageSize = 110375L;
                pageToken = "laborum";
                prettyPrint = false;
                quotaUser = "animi";
                uploadType = "enim";
                uploadProtocol = "odit";
            }};            

            CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesListResponse res = sdk.projects.certificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesList(req, new CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesListSecurity("quo", "sequi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listCertificateMapEntriesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## certificatemanagerProjectsLocationsCertificateMapsCreate

Creates a new CertificateMap in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CertificatemanagerProjectsLocationsCertificateMapsCreateRequest;
import org.openapis.openapi.models.operations.CertificatemanagerProjectsLocationsCertificateMapsCreateResponse;
import org.openapis.openapi.models.operations.CertificatemanagerProjectsLocationsCertificateMapsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CertificateMapInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CertificatemanagerProjectsLocationsCertificateMapsCreateRequest req = new CertificatemanagerProjectsLocationsCertificateMapsCreateRequest("tenetur") {{
                dollarXgafv = XgafvEnum.ONE;
                certificateMapInput = new CertificateMapInput() {{
                    description = "id";
                    labels = new java.util.HashMap<String, String>() {{
                        put("aut", "quasi");
                        put("error", "temporibus");
                        put("laborum", "quasi");
                        put("reiciendis", "voluptatibus");
                    }};
                    name = "Jessie Langosh V";
                }};;
                accessToken = "voluptate";
                alt = AltEnum.PROTO;
                callback = "perferendis";
                certificateMapId = "doloremque";
                fields = "reprehenderit";
                key = "ut";
                oauthToken = "maiores";
                prettyPrint = false;
                quotaUser = "dicta";
                uploadType = "corporis";
                uploadProtocol = "dolore";
            }};            

            CertificatemanagerProjectsLocationsCertificateMapsCreateResponse res = sdk.projects.certificatemanagerProjectsLocationsCertificateMapsCreate(req, new CertificatemanagerProjectsLocationsCertificateMapsCreateSecurity("iusto", "dicta") {{
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

## certificatemanagerProjectsLocationsCertificateMapsList

Lists CertificateMaps in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CertificatemanagerProjectsLocationsCertificateMapsListRequest;
import org.openapis.openapi.models.operations.CertificatemanagerProjectsLocationsCertificateMapsListResponse;
import org.openapis.openapi.models.operations.CertificatemanagerProjectsLocationsCertificateMapsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CertificatemanagerProjectsLocationsCertificateMapsListRequest req = new CertificatemanagerProjectsLocationsCertificateMapsListRequest("harum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "accusamus";
                alt = AltEnum.MEDIA;
                callback = "repudiandae";
                fields = "quae";
                filter = "ipsum";
                key = "quidem";
                oauthToken = "molestias";
                orderBy = "excepturi";
                pageSize = 865103L;
                pageToken = "modi";
                prettyPrint = false;
                quotaUser = "praesentium";
                uploadType = "rem";
                uploadProtocol = "voluptates";
            }};            

            CertificatemanagerProjectsLocationsCertificateMapsListResponse res = sdk.projects.certificatemanagerProjectsLocationsCertificateMapsList(req, new CertificatemanagerProjectsLocationsCertificateMapsListSecurity("quasi", "repudiandae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listCertificateMapsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## certificatemanagerProjectsLocationsCertificatesCreate

Creates a new Certificate in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CertificatemanagerProjectsLocationsCertificatesCreateRequest;
import org.openapis.openapi.models.operations.CertificatemanagerProjectsLocationsCertificatesCreateResponse;
import org.openapis.openapi.models.operations.CertificatemanagerProjectsLocationsCertificatesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CertificateInput;
import org.openapis.openapi.models.shared.CertificateScopeEnum;
import org.openapis.openapi.models.shared.ManagedCertificateInput;
import org.openapis.openapi.models.shared.SelfManagedCertificate;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CertificatemanagerProjectsLocationsCertificatesCreateRequest req = new CertificatemanagerProjectsLocationsCertificatesCreateRequest("sint") {{
                dollarXgafv = XgafvEnum.ONE;
                certificateInput = new CertificateInput() {{
                    description = "itaque";
                    labels = new java.util.HashMap<String, String>() {{
                        put("enim", "consequatur");
                        put("est", "quibusdam");
                    }};
                    managed = new ManagedCertificateInput() {{
                        dnsAuthorizations = new String[]{{
                            add("deserunt"),
                        }};
                        domains = new String[]{{
                            add("quibusdam"),
                            add("labore"),
                            add("modi"),
                        }};
                        issuanceConfig = "qui";
                    }};;
                    name = "Mr. Shelly Lueilwitz";
                    scope = CertificateScopeEnum.DEFAULT_;
                    selfManaged = new SelfManagedCertificate() {{
                        pemCertificate = "alias";
                        pemPrivateKey = "fugit";
                    }};;
                }};;
                accessToken = "dolorum";
                alt = AltEnum.MEDIA;
                callback = "tempora";
                certificateId = "facilis";
                fields = "tempore";
                key = "labore";
                oauthToken = "delectus";
                prettyPrint = false;
                quotaUser = "eum";
                uploadType = "non";
                uploadProtocol = "eligendi";
            }};            

            CertificatemanagerProjectsLocationsCertificatesCreateResponse res = sdk.projects.certificatemanagerProjectsLocationsCertificatesCreate(req, new CertificatemanagerProjectsLocationsCertificatesCreateSecurity("sint", "aliquid") {{
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

## certificatemanagerProjectsLocationsCertificatesList

Lists Certificates in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CertificatemanagerProjectsLocationsCertificatesListRequest;
import org.openapis.openapi.models.operations.CertificatemanagerProjectsLocationsCertificatesListResponse;
import org.openapis.openapi.models.operations.CertificatemanagerProjectsLocationsCertificatesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CertificatemanagerProjectsLocationsCertificatesListRequest req = new CertificatemanagerProjectsLocationsCertificatesListRequest("provident") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "sint";
                alt = AltEnum.MEDIA;
                callback = "dolor";
                fields = "debitis";
                filter = "a";
                key = "dolorum";
                oauthToken = "in";
                orderBy = "in";
                pageSize = 846409L;
                pageToken = "maiores";
                prettyPrint = false;
                quotaUser = "rerum";
                uploadType = "dicta";
                uploadProtocol = "magnam";
            }};            

            CertificatemanagerProjectsLocationsCertificatesListResponse res = sdk.projects.certificatemanagerProjectsLocationsCertificatesList(req, new CertificatemanagerProjectsLocationsCertificatesListSecurity("cumque", "facere") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listCertificatesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## certificatemanagerProjectsLocationsDnsAuthorizationsCreate

Creates a new DnsAuthorization in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CertificatemanagerProjectsLocationsDnsAuthorizationsCreateRequest;
import org.openapis.openapi.models.operations.CertificatemanagerProjectsLocationsDnsAuthorizationsCreateResponse;
import org.openapis.openapi.models.operations.CertificatemanagerProjectsLocationsDnsAuthorizationsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DnsAuthorizationInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CertificatemanagerProjectsLocationsDnsAuthorizationsCreateRequest req = new CertificatemanagerProjectsLocationsDnsAuthorizationsCreateRequest("ea") {{
                dollarXgafv = XgafvEnum.ONE;
                dnsAuthorizationInput = new DnsAuthorizationInput() {{
                    description = "laborum";
                    domain = "accusamus";
                    labels = new java.util.HashMap<String, String>() {{
                        put("occaecati", "enim");
                    }};
                    name = "Toby Pouros";
                }};;
                accessToken = "id";
                alt = AltEnum.MEDIA;
                callback = "deleniti";
                dnsAuthorizationId = "sapiente";
                fields = "amet";
                key = "deserunt";
                oauthToken = "nisi";
                prettyPrint = false;
                quotaUser = "vel";
                uploadType = "natus";
                uploadProtocol = "omnis";
            }};            

            CertificatemanagerProjectsLocationsDnsAuthorizationsCreateResponse res = sdk.projects.certificatemanagerProjectsLocationsDnsAuthorizationsCreate(req, new CertificatemanagerProjectsLocationsDnsAuthorizationsCreateSecurity("molestiae", "perferendis") {{
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

## certificatemanagerProjectsLocationsDnsAuthorizationsList

Lists DnsAuthorizations in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CertificatemanagerProjectsLocationsDnsAuthorizationsListRequest;
import org.openapis.openapi.models.operations.CertificatemanagerProjectsLocationsDnsAuthorizationsListResponse;
import org.openapis.openapi.models.operations.CertificatemanagerProjectsLocationsDnsAuthorizationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CertificatemanagerProjectsLocationsDnsAuthorizationsListRequest req = new CertificatemanagerProjectsLocationsDnsAuthorizationsListRequest("nihil") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "distinctio";
                alt = AltEnum.MEDIA;
                callback = "labore";
                fields = "labore";
                filter = "suscipit";
                key = "natus";
                oauthToken = "nobis";
                orderBy = "eum";
                pageSize = 878453L;
                pageToken = "aspernatur";
                prettyPrint = false;
                quotaUser = "architecto";
                uploadType = "magnam";
                uploadProtocol = "et";
            }};            

            CertificatemanagerProjectsLocationsDnsAuthorizationsListResponse res = sdk.projects.certificatemanagerProjectsLocationsDnsAuthorizationsList(req, new CertificatemanagerProjectsLocationsDnsAuthorizationsListSecurity("excepturi", "ullam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listDnsAuthorizationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## certificatemanagerProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CertificatemanagerProjectsLocationsListRequest;
import org.openapis.openapi.models.operations.CertificatemanagerProjectsLocationsListResponse;
import org.openapis.openapi.models.operations.CertificatemanagerProjectsLocationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CertificatemanagerProjectsLocationsListRequest req = new CertificatemanagerProjectsLocationsListRequest("provident") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "sint";
                alt = AltEnum.JSON;
                callback = "mollitia";
                fields = "reiciendis";
                filter = "mollitia";
                key = "ad";
                oauthToken = "eum";
                pageSize = 221262L;
                pageToken = "necessitatibus";
                prettyPrint = false;
                quotaUser = "odit";
                uploadType = "nemo";
                uploadProtocol = "quasi";
            }};            

            CertificatemanagerProjectsLocationsListResponse res = sdk.projects.certificatemanagerProjectsLocationsList(req, new CertificatemanagerProjectsLocationsListSecurity("iure", "doloribus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listLocationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## certificatemanagerProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CertificatemanagerProjectsLocationsOperationsCancelRequest;
import org.openapis.openapi.models.operations.CertificatemanagerProjectsLocationsOperationsCancelResponse;
import org.openapis.openapi.models.operations.CertificatemanagerProjectsLocationsOperationsCancelSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CertificatemanagerProjectsLocationsOperationsCancelRequest req = new CertificatemanagerProjectsLocationsOperationsCancelRequest("debitis") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("deleniti", "facilis");
                    put("in", "architecto");
                    put("architecto", "repudiandae");
                    put("ullam", "expedita");
                }};
                accessToken = "nihil";
                alt = AltEnum.PROTO;
                callback = "quibusdam";
                fields = "sed";
                key = "saepe";
                oauthToken = "pariatur";
                prettyPrint = false;
                quotaUser = "accusantium";
                uploadType = "consequuntur";
                uploadProtocol = "praesentium";
            }};            

            CertificatemanagerProjectsLocationsOperationsCancelResponse res = sdk.projects.certificatemanagerProjectsLocationsOperationsCancel(req, new CertificatemanagerProjectsLocationsOperationsCancelSecurity("natus", "magni") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## certificatemanagerProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CertificatemanagerProjectsLocationsOperationsListRequest;
import org.openapis.openapi.models.operations.CertificatemanagerProjectsLocationsOperationsListResponse;
import org.openapis.openapi.models.operations.CertificatemanagerProjectsLocationsOperationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CertificatemanagerProjectsLocationsOperationsListRequest req = new CertificatemanagerProjectsLocationsOperationsListRequest("sunt") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "illum";
                alt = AltEnum.PROTO;
                callback = "maxime";
                fields = "ea";
                filter = "excepturi";
                key = "odit";
                oauthToken = "ea";
                pageSize = 33222L;
                pageToken = "ab";
                prettyPrint = false;
                quotaUser = "maiores";
                uploadType = "quidem";
                uploadProtocol = "ipsam";
            }};            

            CertificatemanagerProjectsLocationsOperationsListResponse res = sdk.projects.certificatemanagerProjectsLocationsOperationsList(req, new CertificatemanagerProjectsLocationsOperationsListSecurity("voluptate", "autem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listOperationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## certificatemanagerProjectsLocationsTrustConfigsCreate

Creates a new TrustConfig in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CertificatemanagerProjectsLocationsTrustConfigsCreateRequest;
import org.openapis.openapi.models.operations.CertificatemanagerProjectsLocationsTrustConfigsCreateResponse;
import org.openapis.openapi.models.operations.CertificatemanagerProjectsLocationsTrustConfigsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.IntermediateCA;
import org.openapis.openapi.models.shared.TrustAnchor;
import org.openapis.openapi.models.shared.TrustConfigInput;
import org.openapis.openapi.models.shared.TrustStore;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CertificatemanagerProjectsLocationsTrustConfigsCreateRequest req = new CertificatemanagerProjectsLocationsTrustConfigsCreateRequest("nam") {{
                dollarXgafv = XgafvEnum.ONE;
                trustConfigInput = new TrustConfigInput() {{
                    description = "pariatur";
                    etag = "nemo";
                    labels = new java.util.HashMap<String, String>() {{
                        put("perferendis", "fugiat");
                        put("amet", "aut");
                        put("cumque", "corporis");
                        put("hic", "libero");
                    }};
                    name = "Ernest Hayes";
                    trustStores = new org.openapis.openapi.models.shared.TrustStore[]{{
                        add(new TrustStore() {{
                            intermediateCas = new org.openapis.openapi.models.shared.IntermediateCA[]{{
                                add(new IntermediateCA() {{
                                    pemCertificate = "nesciunt";
                                }}),
                                add(new IntermediateCA() {{
                                    pemCertificate = "eos";
                                }}),
                            }};
                            trustAnchors = new org.openapis.openapi.models.shared.TrustAnchor[]{{
                                add(new TrustAnchor() {{
                                    pemCertificate = "dolores";
                                }}),
                            }};
                        }}),
                    }};
                }};;
                accessToken = "minus";
                alt = AltEnum.MEDIA;
                callback = "dolor";
                fields = "vero";
                key = "nostrum";
                oauthToken = "hic";
                prettyPrint = false;
                quotaUser = "recusandae";
                trustConfigId = "omnis";
                uploadType = "facilis";
                uploadProtocol = "perspiciatis";
            }};            

            CertificatemanagerProjectsLocationsTrustConfigsCreateResponse res = sdk.projects.certificatemanagerProjectsLocationsTrustConfigsCreate(req, new CertificatemanagerProjectsLocationsTrustConfigsCreateSecurity("voluptatem", "porro") {{
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

## certificatemanagerProjectsLocationsTrustConfigsDelete

Deletes a single TrustConfig.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CertificatemanagerProjectsLocationsTrustConfigsDeleteRequest;
import org.openapis.openapi.models.operations.CertificatemanagerProjectsLocationsTrustConfigsDeleteResponse;
import org.openapis.openapi.models.operations.CertificatemanagerProjectsLocationsTrustConfigsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CertificatemanagerProjectsLocationsTrustConfigsDeleteRequest req = new CertificatemanagerProjectsLocationsTrustConfigsDeleteRequest("consequuntur") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "error";
                alt = AltEnum.JSON;
                callback = "occaecati";
                etag = "rerum";
                fields = "adipisci";
                key = "asperiores";
                oauthToken = "earum";
                prettyPrint = false;
                quotaUser = "modi";
                uploadType = "iste";
                uploadProtocol = "dolorum";
            }};            

            CertificatemanagerProjectsLocationsTrustConfigsDeleteResponse res = sdk.projects.certificatemanagerProjectsLocationsTrustConfigsDelete(req, new CertificatemanagerProjectsLocationsTrustConfigsDeleteSecurity("deleniti", "pariatur") {{
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

## certificatemanagerProjectsLocationsTrustConfigsGet

Gets details of a single TrustConfig.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CertificatemanagerProjectsLocationsTrustConfigsGetRequest;
import org.openapis.openapi.models.operations.CertificatemanagerProjectsLocationsTrustConfigsGetResponse;
import org.openapis.openapi.models.operations.CertificatemanagerProjectsLocationsTrustConfigsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CertificatemanagerProjectsLocationsTrustConfigsGetRequest req = new CertificatemanagerProjectsLocationsTrustConfigsGetRequest("provident") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "libero";
                alt = AltEnum.PROTO;
                callback = "quaerat";
                fields = "quos";
                key = "aliquid";
                oauthToken = "dolorem";
                prettyPrint = false;
                quotaUser = "dolorem";
                uploadType = "dolor";
                uploadProtocol = "qui";
            }};            

            CertificatemanagerProjectsLocationsTrustConfigsGetResponse res = sdk.projects.certificatemanagerProjectsLocationsTrustConfigsGet(req, new CertificatemanagerProjectsLocationsTrustConfigsGetSecurity("ipsum", "hic") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.trustConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## certificatemanagerProjectsLocationsTrustConfigsList

Lists TrustConfigs in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CertificatemanagerProjectsLocationsTrustConfigsListRequest;
import org.openapis.openapi.models.operations.CertificatemanagerProjectsLocationsTrustConfigsListResponse;
import org.openapis.openapi.models.operations.CertificatemanagerProjectsLocationsTrustConfigsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CertificatemanagerProjectsLocationsTrustConfigsListRequest req = new CertificatemanagerProjectsLocationsTrustConfigsListRequest("excepturi") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "voluptate";
                alt = AltEnum.MEDIA;
                callback = "reiciendis";
                fields = "amet";
                filter = "dolorum";
                key = "numquam";
                oauthToken = "veritatis";
                orderBy = "ipsa";
                pageSize = 56418L;
                pageToken = "iure";
                prettyPrint = false;
                quotaUser = "odio";
                uploadType = "quaerat";
                uploadProtocol = "accusamus";
            }};            

            CertificatemanagerProjectsLocationsTrustConfigsListResponse res = sdk.projects.certificatemanagerProjectsLocationsTrustConfigsList(req, new CertificatemanagerProjectsLocationsTrustConfigsListSecurity("quidem", "voluptatibus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listTrustConfigsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## certificatemanagerProjectsLocationsTrustConfigsPatch

Updates a TrustConfig.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CertificatemanagerProjectsLocationsTrustConfigsPatchRequest;
import org.openapis.openapi.models.operations.CertificatemanagerProjectsLocationsTrustConfigsPatchResponse;
import org.openapis.openapi.models.operations.CertificatemanagerProjectsLocationsTrustConfigsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.IntermediateCA;
import org.openapis.openapi.models.shared.TrustAnchor;
import org.openapis.openapi.models.shared.TrustConfigInput;
import org.openapis.openapi.models.shared.TrustStore;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CertificatemanagerProjectsLocationsTrustConfigsPatchRequest req = new CertificatemanagerProjectsLocationsTrustConfigsPatchRequest("voluptas") {{
                dollarXgafv = XgafvEnum.TWO;
                trustConfigInput = new TrustConfigInput() {{
                    description = "eos";
                    etag = "atque";
                    labels = new java.util.HashMap<String, String>() {{
                        put("fugiat", "ab");
                    }};
                    name = "Omar Kris";
                    trustStores = new org.openapis.openapi.models.shared.TrustStore[]{{
                        add(new TrustStore() {{
                            intermediateCas = new org.openapis.openapi.models.shared.IntermediateCA[]{{
                                add(new IntermediateCA() {{
                                    pemCertificate = "necessitatibus";
                                }}),
                                add(new IntermediateCA() {{
                                    pemCertificate = "distinctio";
                                }}),
                                add(new IntermediateCA() {{
                                    pemCertificate = "asperiores";
                                }}),
                            }};
                            trustAnchors = new org.openapis.openapi.models.shared.TrustAnchor[]{{
                                add(new TrustAnchor() {{
                                    pemCertificate = "ipsum";
                                }}),
                                add(new TrustAnchor() {{
                                    pemCertificate = "voluptate";
                                }}),
                            }};
                        }}),
                        add(new TrustStore() {{
                            intermediateCas = new org.openapis.openapi.models.shared.IntermediateCA[]{{
                                add(new IntermediateCA() {{
                                    pemCertificate = "saepe";
                                }}),
                                add(new IntermediateCA() {{
                                    pemCertificate = "eius";
                                }}),
                                add(new IntermediateCA() {{
                                    pemCertificate = "aspernatur";
                                }}),
                            }};
                            trustAnchors = new org.openapis.openapi.models.shared.TrustAnchor[]{{
                                add(new TrustAnchor() {{
                                    pemCertificate = "amet";
                                }}),
                            }};
                        }}),
                        add(new TrustStore() {{
                            intermediateCas = new org.openapis.openapi.models.shared.IntermediateCA[]{{
                                add(new IntermediateCA() {{
                                    pemCertificate = "accusamus";
                                }}),
                                add(new IntermediateCA() {{
                                    pemCertificate = "ad";
                                }}),
                                add(new IntermediateCA() {{
                                    pemCertificate = "saepe";
                                }}),
                                add(new IntermediateCA() {{
                                    pemCertificate = "suscipit";
                                }}),
                            }};
                            trustAnchors = new org.openapis.openapi.models.shared.TrustAnchor[]{{
                                add(new TrustAnchor() {{
                                    pemCertificate = "provident";
                                }}),
                                add(new TrustAnchor() {{
                                    pemCertificate = "minima";
                                }}),
                                add(new TrustAnchor() {{
                                    pemCertificate = "repellendus";
                                }}),
                            }};
                        }}),
                    }};
                }};;
                accessToken = "totam";
                alt = AltEnum.MEDIA;
                callback = "alias";
                fields = "at";
                key = "quaerat";
                oauthToken = "tempora";
                prettyPrint = false;
                quotaUser = "vel";
                updateMask = "quod";
                uploadType = "officiis";
                uploadProtocol = "qui";
            }};            

            CertificatemanagerProjectsLocationsTrustConfigsPatchResponse res = sdk.projects.certificatemanagerProjectsLocationsTrustConfigsPatch(req, new CertificatemanagerProjectsLocationsTrustConfigsPatchSecurity("dolorum", "a") {{
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
