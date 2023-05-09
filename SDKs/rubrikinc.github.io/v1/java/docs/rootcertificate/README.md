# rootCertificate

## Overview

Certificates.

### Available Operations

* [deleteCertificate](#deletecertificate) - Delete imported certificate object
* [exportCertificate](#exportcertificate) - Get a certificate summary to export
* [importCertificate](#importcertificate) - Import a certificate
* [queryCertificates](#querycertificates) - Get all certificates
* [updateCertificate](#updatecertificate) - Update a certificate entry

## deleteCertificate

Deletes an imported certificate.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCertificateRequest;
import org.openapis.openapi.models.operations.DeleteCertificateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("esse", "ipsum") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            DeleteCertificateRequest req = new DeleteCertificateRequest("excepturi");            

            DeleteCertificateResponse res = sdk.rootCertificate.deleteCertificate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## exportCertificate

Get a certificate summary.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ExportCertificateRequest;
import org.openapis.openapi.models.operations.ExportCertificateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("aspernatur", "perferendis") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            ExportCertificateRequest req = new ExportCertificateRequest("ad");            

            ExportCertificateResponse res = sdk.rootCertificate.exportCertificate(req);

            if (res.certificateSummary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## importCertificate

Import a certificate.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ImportCertificateResponse;
import org.openapis.openapi.models.shared.CertificateImportRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("natus", "sed") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            org.openapis.openapi.models.shared.CertificateImportRequest req = new CertificateImportRequest("iste", "dolor") {{
                csrId = "natus";
                description = "laboriosam";
                privateKey = "hic";
            }};            

            ImportCertificateResponse res = sdk.rootCertificate.importCertificate(req);

            if (res.certificateSummary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## queryCertificates

Get all certificates.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QueryCertificatesRequest;
import org.openapis.openapi.models.operations.QueryCertificatesResponse;
import org.openapis.openapi.models.operations.QueryCertificatesSortByEnum;
import org.openapis.openapi.models.operations.QueryCertificatesSortOrderEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("saepe", "fuga") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            QueryCertificatesRequest req = new QueryCertificatesRequest() {{
                description = "in";
                expiration = "corporis";
                hasKey = false;
                includeExpired = false;
                name = "Brad Turcotte Jr.";
                sortBy = QueryCertificatesSortByEnum.EXPIRATION;
                sortOrder = QueryCertificatesSortOrderEnum.DESC;
            }};            

            QueryCertificatesResponse res = sdk.rootCertificate.queryCertificates(req);

            if (res.certificateSummaryListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateCertificate

Provide updated information for a certificate object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateCertificateRequest;
import org.openapis.openapi.models.operations.UpdateCertificateResponse;
import org.openapis.openapi.models.shared.CertificatePatchRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("mollitia", "laborum") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            UpdateCertificateRequest req = new UpdateCertificateRequest(                new CertificatePatchRequest() {{
                                description = "dolores";
                                name = "Stacy Champlin";
                                pemFile = "omnis";
                            }};, "nemo");            

            UpdateCertificateResponse res = sdk.rootCertificate.updateCertificate(req);

            if (res.certificateSummary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
