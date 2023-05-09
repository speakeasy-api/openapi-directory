# licenseAssignments

### Available Operations

* [licensingLicenseAssignmentsDelete](#licensinglicenseassignmentsdelete) - Revoke a license.
* [licensingLicenseAssignmentsGet](#licensinglicenseassignmentsget) - Get a specific user's license by product SKU.
* [licensingLicenseAssignmentsInsert](#licensinglicenseassignmentsinsert) - Assign a license.
* [licensingLicenseAssignmentsListForProduct](#licensinglicenseassignmentslistforproduct) - List all users assigned licenses for a specific product SKU.
* [licensingLicenseAssignmentsListForProductAndSku](#licensinglicenseassignmentslistforproductandsku) - List all users assigned licenses for a specific product SKU.
* [licensingLicenseAssignmentsPatch](#licensinglicenseassignmentspatch) - Reassign a user's product SKU with a different SKU in the same product. This method supports patch semantics.
* [licensingLicenseAssignmentsUpdate](#licensinglicenseassignmentsupdate) - Reassign a user's product SKU with a different SKU in the same product.

## licensingLicenseAssignmentsDelete

Revoke a license.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LicensingLicenseAssignmentsDeleteRequest;
import org.openapis.openapi.models.operations.LicensingLicenseAssignmentsDeleteResponse;
import org.openapis.openapi.models.operations.LicensingLicenseAssignmentsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LicensingLicenseAssignmentsDeleteRequest req = new LicensingLicenseAssignmentsDeleteRequest("ipsa", "delectus", "tempora") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "molestiae";
                alt = AltEnum.PROTO;
                callback = "placeat";
                fields = "voluptatum";
                key = "iusto";
                oauthToken = "excepturi";
                prettyPrint = false;
                quotaUser = "nisi";
                uploadType = "recusandae";
                uploadProtocol = "temporibus";
            }};            

            LicensingLicenseAssignmentsDeleteResponse res = sdk.licenseAssignments.licensingLicenseAssignmentsDelete(req, new LicensingLicenseAssignmentsDeleteSecurity("ab", "quis") {{
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

## licensingLicenseAssignmentsGet

Get a specific user's license by product SKU.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LicensingLicenseAssignmentsGetRequest;
import org.openapis.openapi.models.operations.LicensingLicenseAssignmentsGetResponse;
import org.openapis.openapi.models.operations.LicensingLicenseAssignmentsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LicensingLicenseAssignmentsGetRequest req = new LicensingLicenseAssignmentsGetRequest("veritatis", "deserunt", "perferendis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "repellendus";
                alt = AltEnum.PROTO;
                callback = "quo";
                fields = "odit";
                key = "at";
                oauthToken = "at";
                prettyPrint = false;
                quotaUser = "maiores";
                uploadType = "molestiae";
                uploadProtocol = "quod";
            }};            

            LicensingLicenseAssignmentsGetResponse res = sdk.licenseAssignments.licensingLicenseAssignmentsGet(req, new LicensingLicenseAssignmentsGetSecurity("quod", "esse") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.licenseAssignment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## licensingLicenseAssignmentsInsert

Assign a license.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LicensingLicenseAssignmentsInsertRequest;
import org.openapis.openapi.models.operations.LicensingLicenseAssignmentsInsertResponse;
import org.openapis.openapi.models.operations.LicensingLicenseAssignmentsInsertSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.LicenseAssignmentInsert;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LicensingLicenseAssignmentsInsertRequest req = new LicensingLicenseAssignmentsInsertRequest("totam", "porro") {{
                dollarXgafv = XgafvEnum.TWO;
                licenseAssignmentInsert = new LicenseAssignmentInsert() {{
                    userId = "dicta";
                }};;
                accessToken = "nam";
                alt = AltEnum.MEDIA;
                callback = "occaecati";
                fields = "fugit";
                key = "deleniti";
                oauthToken = "hic";
                prettyPrint = false;
                quotaUser = "optio";
                uploadType = "totam";
                uploadProtocol = "beatae";
            }};            

            LicensingLicenseAssignmentsInsertResponse res = sdk.licenseAssignments.licensingLicenseAssignmentsInsert(req, new LicensingLicenseAssignmentsInsertSecurity("commodi", "molestiae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.licenseAssignment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## licensingLicenseAssignmentsListForProduct

List all users assigned licenses for a specific product SKU.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LicensingLicenseAssignmentsListForProductRequest;
import org.openapis.openapi.models.operations.LicensingLicenseAssignmentsListForProductResponse;
import org.openapis.openapi.models.operations.LicensingLicenseAssignmentsListForProductSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LicensingLicenseAssignmentsListForProductRequest req = new LicensingLicenseAssignmentsListForProductRequest("modi", "qui") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "cum";
                alt = AltEnum.MEDIA;
                callback = "ipsum";
                fields = "excepturi";
                key = "aspernatur";
                maxResults = 18789L;
                oauthToken = "ad";
                pageToken = "natus";
                prettyPrint = false;
                quotaUser = "sed";
                uploadType = "iste";
                uploadProtocol = "dolor";
            }};            

            LicensingLicenseAssignmentsListForProductResponse res = sdk.licenseAssignments.licensingLicenseAssignmentsListForProduct(req, new LicensingLicenseAssignmentsListForProductSecurity("natus", "laboriosam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.licenseAssignmentList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## licensingLicenseAssignmentsListForProductAndSku

List all users assigned licenses for a specific product SKU.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LicensingLicenseAssignmentsListForProductAndSkuRequest;
import org.openapis.openapi.models.operations.LicensingLicenseAssignmentsListForProductAndSkuResponse;
import org.openapis.openapi.models.operations.LicensingLicenseAssignmentsListForProductAndSkuSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LicensingLicenseAssignmentsListForProductAndSkuRequest req = new LicensingLicenseAssignmentsListForProductAndSkuRequest("hic", "saepe", "fuga") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "corporis";
                alt = AltEnum.MEDIA;
                callback = "iure";
                fields = "saepe";
                key = "quidem";
                maxResults = 99280L;
                oauthToken = "ipsa";
                pageToken = "reiciendis";
                prettyPrint = false;
                quotaUser = "est";
                uploadType = "mollitia";
                uploadProtocol = "laborum";
            }};            

            LicensingLicenseAssignmentsListForProductAndSkuResponse res = sdk.licenseAssignments.licensingLicenseAssignmentsListForProductAndSku(req, new LicensingLicenseAssignmentsListForProductAndSkuSecurity("dolores", "dolorem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.licenseAssignmentList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## licensingLicenseAssignmentsPatch

Reassign a user's product SKU with a different SKU in the same product. This method supports patch semantics.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LicensingLicenseAssignmentsPatchRequest;
import org.openapis.openapi.models.operations.LicensingLicenseAssignmentsPatchResponse;
import org.openapis.openapi.models.operations.LicensingLicenseAssignmentsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.LicenseAssignment;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LicensingLicenseAssignmentsPatchRequest req = new LicensingLicenseAssignmentsPatchRequest("corporis", "explicabo", "nobis") {{
                dollarXgafv = XgafvEnum.ONE;
                licenseAssignment = new LicenseAssignment() {{
                    etags = "omnis";
                    kind = "nemo";
                    productId = "minima";
                    productName = "excepturi";
                    selfLink = "accusantium";
                    skuId = "iure";
                    skuName = "culpa";
                    userId = "doloribus";
                }};;
                accessToken = "sapiente";
                alt = AltEnum.JSON;
                callback = "mollitia";
                fields = "dolorem";
                key = "culpa";
                oauthToken = "consequuntur";
                prettyPrint = false;
                quotaUser = "repellat";
                uploadType = "mollitia";
                uploadProtocol = "occaecati";
            }};            

            LicensingLicenseAssignmentsPatchResponse res = sdk.licenseAssignments.licensingLicenseAssignmentsPatch(req, new LicensingLicenseAssignmentsPatchSecurity("numquam", "commodi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.licenseAssignment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## licensingLicenseAssignmentsUpdate

Reassign a user's product SKU with a different SKU in the same product.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LicensingLicenseAssignmentsUpdateRequest;
import org.openapis.openapi.models.operations.LicensingLicenseAssignmentsUpdateResponse;
import org.openapis.openapi.models.operations.LicensingLicenseAssignmentsUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.LicenseAssignment;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LicensingLicenseAssignmentsUpdateRequest req = new LicensingLicenseAssignmentsUpdateRequest("quam", "molestiae", "velit") {{
                dollarXgafv = XgafvEnum.TWO;
                licenseAssignment = new LicenseAssignment() {{
                    etags = "quia";
                    kind = "quis";
                    productId = "vitae";
                    productName = "laborum";
                    selfLink = "animi";
                    skuId = "enim";
                    skuName = "odit";
                    userId = "quo";
                }};;
                accessToken = "sequi";
                alt = AltEnum.PROTO;
                callback = "ipsam";
                fields = "id";
                key = "possimus";
                oauthToken = "aut";
                prettyPrint = false;
                quotaUser = "quasi";
                uploadType = "error";
                uploadProtocol = "temporibus";
            }};            

            LicensingLicenseAssignmentsUpdateResponse res = sdk.licenseAssignments.licensingLicenseAssignmentsUpdate(req, new LicensingLicenseAssignmentsUpdateSecurity("laborum", "quasi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.licenseAssignment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
