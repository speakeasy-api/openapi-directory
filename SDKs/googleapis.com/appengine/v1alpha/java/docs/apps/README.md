# apps

### Available Operations

* [appengineAppsAuthorizedCertificatesCreate](#appengineappsauthorizedcertificatescreate) - Uploads the specified SSL certificate.
* [appengineAppsAuthorizedCertificatesDelete](#appengineappsauthorizedcertificatesdelete) - Deletes the specified SSL certificate.
* [appengineAppsAuthorizedCertificatesGet](#appengineappsauthorizedcertificatesget) - Gets the specified SSL certificate.
* [appengineAppsAuthorizedCertificatesList](#appengineappsauthorizedcertificateslist) - Lists all SSL certificates the user is authorized to administer.
* [appengineAppsAuthorizedCertificatesPatch](#appengineappsauthorizedcertificatespatch) - Updates the specified SSL certificate. To renew a certificate and maintain its existing domain mappings, update certificate_data with a new certificate. The new certificate must be applicable to the same domains as the original certificate. The certificate display_name may also be updated.
* [appengineAppsAuthorizedDomainsList](#appengineappsauthorizeddomainslist) - Lists all domains the user is authorized to administer.
* [appengineAppsDomainMappingsCreate](#appengineappsdomainmappingscreate) - Maps a domain to an application. A user must be authorized to administer a domain in order to map it to an application. For a list of available authorized domains, see AuthorizedDomains.ListAuthorizedDomains.
* [appengineAppsDomainMappingsDelete](#appengineappsdomainmappingsdelete) - Deletes the specified domain mapping. A user must be authorized to administer the associated domain in order to delete a DomainMapping resource.
* [appengineAppsDomainMappingsGet](#appengineappsdomainmappingsget) - Gets the specified domain mapping.
* [appengineAppsDomainMappingsList](#appengineappsdomainmappingslist) - Lists the domain mappings on an application.
* [appengineAppsDomainMappingsPatch](#appengineappsdomainmappingspatch) - Updates the specified domain mapping. To map an SSL certificate to a domain mapping, update certificate_id to point to an AuthorizedCertificate resource. A user must be authorized to administer the associated domain in order to update a DomainMapping resource.
* [appengineAppsLocationsGet](#appengineappslocationsget) - Gets information about a location.
* [appengineAppsLocationsList](#appengineappslocationslist) - Lists information about the supported locations for this service.
* [appengineAppsOperationsGet](#appengineappsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [appengineAppsOperationsList](#appengineappsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.

## appengineAppsAuthorizedCertificatesCreate

Uploads the specified SSL certificate.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppengineAppsAuthorizedCertificatesCreateRequest;
import org.openapis.openapi.models.operations.AppengineAppsAuthorizedCertificatesCreateResponse;
import org.openapis.openapi.models.operations.AppengineAppsAuthorizedCertificatesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AuthorizedCertificate;
import org.openapis.openapi.models.shared.CertificateRawData;
import org.openapis.openapi.models.shared.ManagedCertificate;
import org.openapis.openapi.models.shared.ManagedCertificateStatusEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppengineAppsAuthorizedCertificatesCreateRequest req = new AppengineAppsAuthorizedCertificatesCreateRequest("ipsum") {{
                dollarXgafv = XgafvEnum.TWO;
                authorizedCertificate = new AuthorizedCertificate() {{
                    certificateRawData = new CertificateRawData() {{
                        privateKey = "aspernatur";
                        publicCertificate = "perferendis";
                    }};;
                    displayName = "ad";
                    domainMappingsCount = 617636;
                    domainNames = new String[]{{
                        add("iste"),
                    }};
                    expireTime = "dolor";
                    id = "96fea759-6eb1-40fa-aa23-52c5955907af";
                    managedCertificate = new ManagedCertificate() {{
                        lastRenewalTime = "sapiente";
                        status = ManagedCertificateStatusEnum.UNSPECIFIED_STATUS;
                    }};;
                    name = "Mike Nicolas";
                    visibleDomainMappings = new String[]{{
                        add("occaecati"),
                        add("numquam"),
                        add("commodi"),
                    }};
                }};;
                accessToken = "quam";
                alt = AltEnum.MEDIA;
                callback = "velit";
                fields = "error";
                key = "quia";
                oauthToken = "quis";
                prettyPrint = false;
                quotaUser = "vitae";
                uploadType = "laborum";
                uploadProtocol = "animi";
            }};            

            AppengineAppsAuthorizedCertificatesCreateResponse res = sdk.apps.appengineAppsAuthorizedCertificatesCreate(req, new AppengineAppsAuthorizedCertificatesCreateSecurity("enim", "odit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.authorizedCertificate != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appengineAppsAuthorizedCertificatesDelete

Deletes the specified SSL certificate.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppengineAppsAuthorizedCertificatesDeleteRequest;
import org.openapis.openapi.models.operations.AppengineAppsAuthorizedCertificatesDeleteResponse;
import org.openapis.openapi.models.operations.AppengineAppsAuthorizedCertificatesDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppengineAppsAuthorizedCertificatesDeleteRequest req = new AppengineAppsAuthorizedCertificatesDeleteRequest("quo", "sequi") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ipsam";
                alt = AltEnum.MEDIA;
                callback = "possimus";
                fields = "aut";
                key = "quasi";
                oauthToken = "error";
                prettyPrint = false;
                quotaUser = "temporibus";
                uploadType = "laborum";
                uploadProtocol = "quasi";
            }};            

            AppengineAppsAuthorizedCertificatesDeleteResponse res = sdk.apps.appengineAppsAuthorizedCertificatesDelete(req, new AppengineAppsAuthorizedCertificatesDeleteSecurity("reiciendis", "voluptatibus") {{
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

## appengineAppsAuthorizedCertificatesGet

Gets the specified SSL certificate.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppengineAppsAuthorizedCertificatesGetRequest;
import org.openapis.openapi.models.operations.AppengineAppsAuthorizedCertificatesGetResponse;
import org.openapis.openapi.models.operations.AppengineAppsAuthorizedCertificatesGetSecurity;
import org.openapis.openapi.models.operations.AppengineAppsAuthorizedCertificatesGetSecurityOption1;
import org.openapis.openapi.models.operations.AppengineAppsAuthorizedCertificatesGetSecurityOption2;
import org.openapis.openapi.models.operations.AppengineAppsAuthorizedCertificatesGetSecurityOption3;
import org.openapis.openapi.models.operations.AppengineAppsAuthorizedCertificatesGetViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppengineAppsAuthorizedCertificatesGetRequest req = new AppengineAppsAuthorizedCertificatesGetRequest("vero", "nihil") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "voluptatibus";
                alt = AltEnum.JSON;
                callback = "omnis";
                fields = "voluptate";
                key = "cum";
                oauthToken = "perferendis";
                prettyPrint = false;
                quotaUser = "doloremque";
                uploadType = "reprehenderit";
                uploadProtocol = "ut";
                view = AppengineAppsAuthorizedCertificatesGetViewEnum.FULL_CERTIFICATE;
            }};            

            AppengineAppsAuthorizedCertificatesGetResponse res = sdk.apps.appengineAppsAuthorizedCertificatesGet(req, new AppengineAppsAuthorizedCertificatesGetSecurity() {{
                option1 = new AppengineAppsAuthorizedCertificatesGetSecurityOption1("dicta", "corporis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.authorizedCertificate != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appengineAppsAuthorizedCertificatesList

Lists all SSL certificates the user is authorized to administer.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppengineAppsAuthorizedCertificatesListRequest;
import org.openapis.openapi.models.operations.AppengineAppsAuthorizedCertificatesListResponse;
import org.openapis.openapi.models.operations.AppengineAppsAuthorizedCertificatesListSecurity;
import org.openapis.openapi.models.operations.AppengineAppsAuthorizedCertificatesListSecurityOption1;
import org.openapis.openapi.models.operations.AppengineAppsAuthorizedCertificatesListSecurityOption2;
import org.openapis.openapi.models.operations.AppengineAppsAuthorizedCertificatesListSecurityOption3;
import org.openapis.openapi.models.operations.AppengineAppsAuthorizedCertificatesListViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppengineAppsAuthorizedCertificatesListRequest req = new AppengineAppsAuthorizedCertificatesListRequest("dolore") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "dicta";
                alt = AltEnum.PROTO;
                callback = "enim";
                fields = "accusamus";
                key = "commodi";
                oauthToken = "repudiandae";
                pageSize = 64147L;
                pageToken = "ipsum";
                prettyPrint = false;
                quotaUser = "quidem";
                uploadType = "molestias";
                uploadProtocol = "excepturi";
                view = AppengineAppsAuthorizedCertificatesListViewEnum.FULL_CERTIFICATE;
            }};            

            AppengineAppsAuthorizedCertificatesListResponse res = sdk.apps.appengineAppsAuthorizedCertificatesList(req, new AppengineAppsAuthorizedCertificatesListSecurity() {{
                option1 = new AppengineAppsAuthorizedCertificatesListSecurityOption1("modi", "praesentium") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listAuthorizedCertificatesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appengineAppsAuthorizedCertificatesPatch

Updates the specified SSL certificate. To renew a certificate and maintain its existing domain mappings, update certificate_data with a new certificate. The new certificate must be applicable to the same domains as the original certificate. The certificate display_name may also be updated.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppengineAppsAuthorizedCertificatesPatchRequest;
import org.openapis.openapi.models.operations.AppengineAppsAuthorizedCertificatesPatchResponse;
import org.openapis.openapi.models.operations.AppengineAppsAuthorizedCertificatesPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AuthorizedCertificate;
import org.openapis.openapi.models.shared.CertificateRawData;
import org.openapis.openapi.models.shared.ManagedCertificate;
import org.openapis.openapi.models.shared.ManagedCertificateStatusEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppengineAppsAuthorizedCertificatesPatchRequest req = new AppengineAppsAuthorizedCertificatesPatchRequest("rem", "voluptates") {{
                dollarXgafv = XgafvEnum.ONE;
                authorizedCertificate = new AuthorizedCertificate() {{
                    certificateRawData = new CertificateRawData() {{
                        privateKey = "repudiandae";
                        publicCertificate = "sint";
                    }};;
                    displayName = "veritatis";
                    domainMappingsCount = 929297;
                    domainNames = new String[]{{
                        add("enim"),
                        add("consequatur"),
                    }};
                    expireTime = "est";
                    id = "d2abd442-6980-42d5-82a9-4bb4f63c969e";
                    managedCertificate = new ManagedCertificate() {{
                        lastRenewalTime = "sint";
                        status = ManagedCertificateStatusEnum.FAILED_PERMANENTLY_NOT_VISIBLE;
                    }};;
                    name = "Raquel Wilderman";
                    visibleDomainMappings = new String[]{{
                        add("illum"),
                        add("maiores"),
                    }};
                }};;
                accessToken = "rerum";
                alt = AltEnum.JSON;
                callback = "magnam";
                fields = "cumque";
                key = "facere";
                oauthToken = "ea";
                prettyPrint = false;
                quotaUser = "aliquid";
                updateMask = "laborum";
                uploadType = "accusamus";
                uploadProtocol = "non";
            }};            

            AppengineAppsAuthorizedCertificatesPatchResponse res = sdk.apps.appengineAppsAuthorizedCertificatesPatch(req, new AppengineAppsAuthorizedCertificatesPatchSecurity("occaecati", "enim") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.authorizedCertificate != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appengineAppsAuthorizedDomainsList

Lists all domains the user is authorized to administer.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppengineAppsAuthorizedDomainsListRequest;
import org.openapis.openapi.models.operations.AppengineAppsAuthorizedDomainsListResponse;
import org.openapis.openapi.models.operations.AppengineAppsAuthorizedDomainsListSecurity;
import org.openapis.openapi.models.operations.AppengineAppsAuthorizedDomainsListSecurityOption1;
import org.openapis.openapi.models.operations.AppengineAppsAuthorizedDomainsListSecurityOption2;
import org.openapis.openapi.models.operations.AppengineAppsAuthorizedDomainsListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppengineAppsAuthorizedDomainsListRequest req = new AppengineAppsAuthorizedDomainsListRequest("accusamus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quidem";
                alt = AltEnum.MEDIA;
                callback = "nam";
                fields = "id";
                key = "blanditiis";
                oauthToken = "deleniti";
                pageSize = 956084L;
                pageToken = "amet";
                prettyPrint = false;
                quotaUser = "deserunt";
                uploadType = "nisi";
                uploadProtocol = "vel";
            }};            

            AppengineAppsAuthorizedDomainsListResponse res = sdk.apps.appengineAppsAuthorizedDomainsList(req, new AppengineAppsAuthorizedDomainsListSecurity() {{
                option1 = new AppengineAppsAuthorizedDomainsListSecurityOption1("natus", "omnis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listAuthorizedDomainsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appengineAppsDomainMappingsCreate

Maps a domain to an application. A user must be authorized to administer a domain in order to map it to an application. For a list of available authorized domains, see AuthorizedDomains.ListAuthorizedDomains.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppengineAppsDomainMappingsCreateOverrideStrategyEnum;
import org.openapis.openapi.models.operations.AppengineAppsDomainMappingsCreateRequest;
import org.openapis.openapi.models.operations.AppengineAppsDomainMappingsCreateResponse;
import org.openapis.openapi.models.operations.AppengineAppsDomainMappingsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DomainMapping;
import org.openapis.openapi.models.shared.ResourceRecord;
import org.openapis.openapi.models.shared.ResourceRecordTypeEnum;
import org.openapis.openapi.models.shared.SslSettings;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppengineAppsDomainMappingsCreateRequest req = new AppengineAppsDomainMappingsCreateRequest("molestiae") {{
                dollarXgafv = XgafvEnum.ONE;
                domainMapping = new DomainMapping() {{
                    id = "74ba4469-b6e2-4141-9598-90afa563e251";
                    name = "Melba Toy";
                    resourceRecords = new org.openapis.openapi.models.shared.ResourceRecord[]{{
                        add(new ResourceRecord() {{
                            name = "Dr. Arnold Bradtke";
                            rrdata = "expedita";
                            type = ResourceRecordTypeEnum.AAAA;
                        }}),
                        add(new ResourceRecord() {{
                            name = "Marty Cormier";
                            rrdata = "accusantium";
                            type = ResourceRecordTypeEnum.A;
                        }}),
                        add(new ResourceRecord() {{
                            name = "Miss Nick Cummerata";
                            rrdata = "pariatur";
                            type = ResourceRecordTypeEnum.CNAME;
                        }}),
                    }};
                    sslSettings = new SslSettings() {{
                        certificateId = "ea";
                        isManagedCertificate = false;
                    }};;
                }};;
                accessToken = "excepturi";
                alt = AltEnum.JSON;
                callback = "ea";
                fields = "accusantium";
                key = "ab";
                noManagedCertificate = false;
                oauthToken = "maiores";
                overrideStrategy = AppengineAppsDomainMappingsCreateOverrideStrategyEnum.OVERRIDE;
                prettyPrint = false;
                quotaUser = "ipsam";
                uploadType = "voluptate";
                uploadProtocol = "autem";
            }};            

            AppengineAppsDomainMappingsCreateResponse res = sdk.apps.appengineAppsDomainMappingsCreate(req, new AppengineAppsDomainMappingsCreateSecurity("nam", "eaque") {{
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

## appengineAppsDomainMappingsDelete

Deletes the specified domain mapping. A user must be authorized to administer the associated domain in order to delete a DomainMapping resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppengineAppsDomainMappingsDeleteRequest;
import org.openapis.openapi.models.operations.AppengineAppsDomainMappingsDeleteResponse;
import org.openapis.openapi.models.operations.AppengineAppsDomainMappingsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppengineAppsDomainMappingsDeleteRequest req = new AppengineAppsDomainMappingsDeleteRequest("pariatur", "nemo") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "perferendis";
                alt = AltEnum.PROTO;
                callback = "amet";
                fields = "aut";
                key = "cumque";
                oauthToken = "corporis";
                prettyPrint = false;
                quotaUser = "hic";
                uploadType = "libero";
                uploadProtocol = "nobis";
            }};            

            AppengineAppsDomainMappingsDeleteResponse res = sdk.apps.appengineAppsDomainMappingsDelete(req, new AppengineAppsDomainMappingsDeleteSecurity("dolores", "quis") {{
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

## appengineAppsDomainMappingsGet

Gets the specified domain mapping.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppengineAppsDomainMappingsGetRequest;
import org.openapis.openapi.models.operations.AppengineAppsDomainMappingsGetResponse;
import org.openapis.openapi.models.operations.AppengineAppsDomainMappingsGetSecurity;
import org.openapis.openapi.models.operations.AppengineAppsDomainMappingsGetSecurityOption1;
import org.openapis.openapi.models.operations.AppengineAppsDomainMappingsGetSecurityOption2;
import org.openapis.openapi.models.operations.AppengineAppsDomainMappingsGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppengineAppsDomainMappingsGetRequest req = new AppengineAppsDomainMappingsGetRequest("totam", "dignissimos") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quis";
                alt = AltEnum.JSON;
                callback = "eos";
                fields = "perferendis";
                key = "dolores";
                oauthToken = "minus";
                prettyPrint = false;
                quotaUser = "quam";
                uploadType = "dolor";
                uploadProtocol = "vero";
            }};            

            AppengineAppsDomainMappingsGetResponse res = sdk.apps.appengineAppsDomainMappingsGet(req, new AppengineAppsDomainMappingsGetSecurity() {{
                option1 = new AppengineAppsDomainMappingsGetSecurityOption1("nostrum", "hic") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.domainMapping != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appengineAppsDomainMappingsList

Lists the domain mappings on an application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppengineAppsDomainMappingsListRequest;
import org.openapis.openapi.models.operations.AppengineAppsDomainMappingsListResponse;
import org.openapis.openapi.models.operations.AppengineAppsDomainMappingsListSecurity;
import org.openapis.openapi.models.operations.AppengineAppsDomainMappingsListSecurityOption1;
import org.openapis.openapi.models.operations.AppengineAppsDomainMappingsListSecurityOption2;
import org.openapis.openapi.models.operations.AppengineAppsDomainMappingsListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppengineAppsDomainMappingsListRequest req = new AppengineAppsDomainMappingsListRequest("recusandae") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "facilis";
                alt = AltEnum.MEDIA;
                callback = "voluptatem";
                fields = "porro";
                key = "consequuntur";
                oauthToken = "blanditiis";
                pageSize = 621479L;
                pageToken = "eaque";
                prettyPrint = false;
                quotaUser = "occaecati";
                uploadType = "rerum";
                uploadProtocol = "adipisci";
            }};            

            AppengineAppsDomainMappingsListResponse res = sdk.apps.appengineAppsDomainMappingsList(req, new AppengineAppsDomainMappingsListSecurity() {{
                option1 = new AppengineAppsDomainMappingsListSecurityOption1("asperiores", "earum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listDomainMappingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appengineAppsDomainMappingsPatch

Updates the specified domain mapping. To map an SSL certificate to a domain mapping, update certificate_id to point to an AuthorizedCertificate resource. A user must be authorized to administer the associated domain in order to update a DomainMapping resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppengineAppsDomainMappingsPatchRequest;
import org.openapis.openapi.models.operations.AppengineAppsDomainMappingsPatchResponse;
import org.openapis.openapi.models.operations.AppengineAppsDomainMappingsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DomainMapping;
import org.openapis.openapi.models.shared.ResourceRecord;
import org.openapis.openapi.models.shared.ResourceRecordTypeEnum;
import org.openapis.openapi.models.shared.SslSettings;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppengineAppsDomainMappingsPatchRequest req = new AppengineAppsDomainMappingsPatchRequest("modi", "iste") {{
                dollarXgafv = XgafvEnum.TWO;
                domainMapping = new DomainMapping() {{
                    id = "8d9cbf48-6333-423f-9b77-f3a4100674eb";
                    name = "Hector Mosciski";
                    resourceRecords = new org.openapis.openapi.models.shared.ResourceRecord[]{{
                        add(new ResourceRecord() {{
                            name = "Stephen Roberts";
                            rrdata = "voluptate";
                            type = ResourceRecordTypeEnum.CNAME;
                        }}),
                    }};
                    sslSettings = new SslSettings() {{
                        certificateId = "deleniti";
                        isManagedCertificate = false;
                    }};;
                }};;
                accessToken = "omnis";
                alt = AltEnum.PROTO;
                callback = "distinctio";
                fields = "asperiores";
                key = "nihil";
                noManagedCertificate = false;
                oauthToken = "ipsum";
                prettyPrint = false;
                quotaUser = "voluptate";
                updateMask = "id";
                uploadType = "saepe";
                uploadProtocol = "eius";
            }};            

            AppengineAppsDomainMappingsPatchResponse res = sdk.apps.appengineAppsDomainMappingsPatch(req, new AppengineAppsDomainMappingsPatchSecurity("aspernatur", "perferendis") {{
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

## appengineAppsLocationsGet

Gets information about a location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppengineAppsLocationsGetRequest;
import org.openapis.openapi.models.operations.AppengineAppsLocationsGetResponse;
import org.openapis.openapi.models.operations.AppengineAppsLocationsGetSecurity;
import org.openapis.openapi.models.operations.AppengineAppsLocationsGetSecurityOption1;
import org.openapis.openapi.models.operations.AppengineAppsLocationsGetSecurityOption2;
import org.openapis.openapi.models.operations.AppengineAppsLocationsGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppengineAppsLocationsGetRequest req = new AppengineAppsLocationsGetRequest("amet", "optio") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ad";
                alt = AltEnum.PROTO;
                callback = "suscipit";
                fields = "deserunt";
                key = "provident";
                oauthToken = "minima";
                prettyPrint = false;
                quotaUser = "repellendus";
                uploadType = "totam";
                uploadProtocol = "similique";
            }};            

            AppengineAppsLocationsGetResponse res = sdk.apps.appengineAppsLocationsGet(req, new AppengineAppsLocationsGetSecurity() {{
                option1 = new AppengineAppsLocationsGetSecurityOption1("alias", "at") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.location != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appengineAppsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppengineAppsLocationsListRequest;
import org.openapis.openapi.models.operations.AppengineAppsLocationsListResponse;
import org.openapis.openapi.models.operations.AppengineAppsLocationsListSecurity;
import org.openapis.openapi.models.operations.AppengineAppsLocationsListSecurityOption1;
import org.openapis.openapi.models.operations.AppengineAppsLocationsListSecurityOption2;
import org.openapis.openapi.models.operations.AppengineAppsLocationsListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppengineAppsLocationsListRequest req = new AppengineAppsLocationsListRequest("quaerat") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "vel";
                alt = AltEnum.PROTO;
                callback = "officiis";
                fields = "qui";
                filter = "dolorum";
                key = "a";
                oauthToken = "esse";
                pageSize = 687488L;
                pageToken = "iusto";
                prettyPrint = false;
                quotaUser = "ipsum";
                uploadType = "quisquam";
                uploadProtocol = "tenetur";
            }};            

            AppengineAppsLocationsListResponse res = sdk.apps.appengineAppsLocationsList(req, new AppengineAppsLocationsListSecurity() {{
                option1 = new AppengineAppsLocationsListSecurityOption1("amet", "tempore") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## appengineAppsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppengineAppsOperationsGetRequest;
import org.openapis.openapi.models.operations.AppengineAppsOperationsGetResponse;
import org.openapis.openapi.models.operations.AppengineAppsOperationsGetSecurity;
import org.openapis.openapi.models.operations.AppengineAppsOperationsGetSecurityOption1;
import org.openapis.openapi.models.operations.AppengineAppsOperationsGetSecurityOption2;
import org.openapis.openapi.models.operations.AppengineAppsOperationsGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppengineAppsOperationsGetRequest req = new AppengineAppsOperationsGetRequest("accusamus", "numquam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "dolorem";
                alt = AltEnum.PROTO;
                callback = "totam";
                fields = "nihil";
                key = "sit";
                oauthToken = "expedita";
                prettyPrint = false;
                quotaUser = "neque";
                uploadType = "sed";
                uploadProtocol = "vel";
            }};            

            AppengineAppsOperationsGetResponse res = sdk.apps.appengineAppsOperationsGet(req, new AppengineAppsOperationsGetSecurity() {{
                option1 = new AppengineAppsOperationsGetSecurityOption1("libero", "voluptas") {{
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

## appengineAppsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppengineAppsOperationsListRequest;
import org.openapis.openapi.models.operations.AppengineAppsOperationsListResponse;
import org.openapis.openapi.models.operations.AppengineAppsOperationsListSecurity;
import org.openapis.openapi.models.operations.AppengineAppsOperationsListSecurityOption1;
import org.openapis.openapi.models.operations.AppengineAppsOperationsListSecurityOption2;
import org.openapis.openapi.models.operations.AppengineAppsOperationsListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppengineAppsOperationsListRequest req = new AppengineAppsOperationsListRequest("deserunt") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ipsum";
                alt = AltEnum.JSON;
                callback = "qui";
                fields = "cupiditate";
                filter = "maxime";
                key = "pariatur";
                oauthToken = "soluta";
                pageSize = 117531L;
                pageToken = "laborum";
                prettyPrint = false;
                quotaUser = "totam";
                uploadType = "incidunt";
                uploadProtocol = "aspernatur";
            }};            

            AppengineAppsOperationsListResponse res = sdk.apps.appengineAppsOperationsList(req, new AppengineAppsOperationsListSecurity() {{
                option1 = new AppengineAppsOperationsListSecurityOption1("dolores", "distinctio") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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
