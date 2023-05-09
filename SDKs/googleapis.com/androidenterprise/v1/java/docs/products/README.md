# products

### Available Operations

* [androidenterpriseProductsApprove](#androidenterpriseproductsapprove) -  Approves the specified product and the relevant app permissions, if any. The maximum number of products that you can approve per enterprise customer is 1,000. To learn how to use managed Google Play to design and create a store layout to display approved products to your users, see Store Layout Design. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations. 
* [androidenterpriseProductsGenerateApprovalUrl](#androidenterpriseproductsgenerateapprovalurl) - Generates a URL that can be rendered in an iframe to display the permissions (if any) of a product. An enterprise admin must view these permissions and accept them on behalf of their organization in order to approve that product. Admins should accept the displayed permissions by interacting with a separate UI element in the EMM console, which in turn should trigger the use of this URL as the approvalUrlInfo.approvalUrl property in a Products.approve call to approve the product. This URL can only be used to display permissions for up to 1 day. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations. 
* [androidenterpriseProductsGet](#androidenterpriseproductsget) - Retrieves details of a product for display to an enterprise admin.
* [androidenterpriseProductsGetAppRestrictionsSchema](#androidenterpriseproductsgetapprestrictionsschema) - Retrieves the schema that defines the configurable properties for this product. All products have a schema, but this schema may be empty if no managed configurations have been defined. This schema can be used to populate a UI that allows an admin to configure the product. To apply a managed configuration based on the schema obtained using this API, see Managed Configurations through Play.
* [androidenterpriseProductsGetPermissions](#androidenterpriseproductsgetpermissions) - Retrieves the Android app permissions required by this app.
* [androidenterpriseProductsList](#androidenterpriseproductslist) - Finds approved products that match a query, or all approved products if there is no query. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations. 
* [androidenterpriseProductsUnapprove](#androidenterpriseproductsunapprove) - Unapproves the specified product (and the relevant app permissions, if any) **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.

## androidenterpriseProductsApprove

 Approves the specified product and the relevant app permissions, if any. The maximum number of products that you can approve per enterprise customer is 1,000. To learn how to use managed Google Play to design and create a store layout to display approved products to your users, see Store Layout Design. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidenterpriseProductsApproveRequest;
import org.openapis.openapi.models.operations.AndroidenterpriseProductsApproveResponse;
import org.openapis.openapi.models.operations.AndroidenterpriseProductsApproveSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ApprovalUrlInfo;
import org.openapis.openapi.models.shared.ProductsApproveRequest;
import org.openapis.openapi.models.shared.ProductsApproveRequestApprovedPermissionsEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidenterpriseProductsApproveRequest req = new AndroidenterpriseProductsApproveRequest("veniam", "voluptatem") {{
                dollarXgafv = XgafvEnum.TWO;
                productsApproveRequest = new ProductsApproveRequest() {{
                    approvalUrlInfo = new ApprovalUrlInfo() {{
                        approvalUrl = "repudiandae";
                    }};;
                    approvedPermissions = ProductsApproveRequestApprovedPermissionsEnum.CURRENT_PERMISSIONS_ONLY;
                }};;
                accessToken = "atque";
                alt = AltEnum.MEDIA;
                callback = "asperiores";
                fields = "totam";
                key = "suscipit";
                oauthToken = "quidem";
                prettyPrint = false;
                quotaUser = "maxime";
                uploadType = "et";
                uploadProtocol = "esse";
            }};            

            AndroidenterpriseProductsApproveResponse res = sdk.products.androidenterpriseProductsApprove(req, new AndroidenterpriseProductsApproveSecurity("amet", "assumenda") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidenterpriseProductsGenerateApprovalUrl

Generates a URL that can be rendered in an iframe to display the permissions (if any) of a product. An enterprise admin must view these permissions and accept them on behalf of their organization in order to approve that product. Admins should accept the displayed permissions by interacting with a separate UI element in the EMM console, which in turn should trigger the use of this URL as the approvalUrlInfo.approvalUrl property in a Products.approve call to approve the product. This URL can only be used to display permissions for up to 1 day. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidenterpriseProductsGenerateApprovalUrlRequest;
import org.openapis.openapi.models.operations.AndroidenterpriseProductsGenerateApprovalUrlResponse;
import org.openapis.openapi.models.operations.AndroidenterpriseProductsGenerateApprovalUrlSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidenterpriseProductsGenerateApprovalUrlRequest req = new AndroidenterpriseProductsGenerateApprovalUrlRequest("ea", "atque") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "officiis";
                alt = AltEnum.PROTO;
                callback = "accusamus";
                fields = "natus";
                key = "minima";
                languageCode = "aspernatur";
                oauthToken = "ex";
                prettyPrint = false;
                quotaUser = "maiores";
                uploadType = "corrupti";
                uploadProtocol = "at";
            }};            

            AndroidenterpriseProductsGenerateApprovalUrlResponse res = sdk.products.androidenterpriseProductsGenerateApprovalUrl(req, new AndroidenterpriseProductsGenerateApprovalUrlSecurity("error", "blanditiis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.productsGenerateApprovalUrlResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidenterpriseProductsGet

Retrieves details of a product for display to an enterprise admin.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidenterpriseProductsGetRequest;
import org.openapis.openapi.models.operations.AndroidenterpriseProductsGetResponse;
import org.openapis.openapi.models.operations.AndroidenterpriseProductsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidenterpriseProductsGetRequest req = new AndroidenterpriseProductsGetRequest("suscipit", "repudiandae") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "atque";
                alt = AltEnum.JSON;
                callback = "recusandae";
                fields = "dolorum";
                key = "repellendus";
                language = "labore";
                oauthToken = "reiciendis";
                prettyPrint = false;
                quotaUser = "doloremque";
                uploadType = "repudiandae";
                uploadProtocol = "dicta";
            }};            

            AndroidenterpriseProductsGetResponse res = sdk.products.androidenterpriseProductsGet(req, new AndroidenterpriseProductsGetSecurity("accusantium", "beatae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.product != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidenterpriseProductsGetAppRestrictionsSchema

Retrieves the schema that defines the configurable properties for this product. All products have a schema, but this schema may be empty if no managed configurations have been defined. This schema can be used to populate a UI that allows an admin to configure the product. To apply a managed configuration based on the schema obtained using this API, see Managed Configurations through Play.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidenterpriseProductsGetAppRestrictionsSchemaRequest;
import org.openapis.openapi.models.operations.AndroidenterpriseProductsGetAppRestrictionsSchemaResponse;
import org.openapis.openapi.models.operations.AndroidenterpriseProductsGetAppRestrictionsSchemaSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidenterpriseProductsGetAppRestrictionsSchemaRequest req = new AndroidenterpriseProductsGetAppRestrictionsSchemaRequest("dolores", "enim") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "velit";
                alt = AltEnum.PROTO;
                callback = "molestias";
                fields = "magnam";
                key = "saepe";
                language = "consequuntur";
                oauthToken = "occaecati";
                prettyPrint = false;
                quotaUser = "officiis";
                uploadType = "perspiciatis";
                uploadProtocol = "in";
            }};            

            AndroidenterpriseProductsGetAppRestrictionsSchemaResponse res = sdk.products.androidenterpriseProductsGetAppRestrictionsSchema(req, new AndroidenterpriseProductsGetAppRestrictionsSchemaSecurity("adipisci", "eveniet") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.appRestrictionsSchema != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidenterpriseProductsGetPermissions

Retrieves the Android app permissions required by this app.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidenterpriseProductsGetPermissionsRequest;
import org.openapis.openapi.models.operations.AndroidenterpriseProductsGetPermissionsResponse;
import org.openapis.openapi.models.operations.AndroidenterpriseProductsGetPermissionsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidenterpriseProductsGetPermissionsRequest req = new AndroidenterpriseProductsGetPermissionsRequest("occaecati", "consequuntur") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "id";
                alt = AltEnum.MEDIA;
                callback = "reprehenderit";
                fields = "error";
                key = "illo";
                oauthToken = "corporis";
                prettyPrint = false;
                quotaUser = "quidem";
                uploadType = "eveniet";
                uploadProtocol = "non";
            }};            

            AndroidenterpriseProductsGetPermissionsResponse res = sdk.products.androidenterpriseProductsGetPermissions(req, new AndroidenterpriseProductsGetPermissionsSecurity("vero", "doloremque") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.productPermissions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidenterpriseProductsList

Finds approved products that match a query, or all approved products if there is no query. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidenterpriseProductsListRequest;
import org.openapis.openapi.models.operations.AndroidenterpriseProductsListResponse;
import org.openapis.openapi.models.operations.AndroidenterpriseProductsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidenterpriseProductsListRequest req = new AndroidenterpriseProductsListRequest("iure") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "totam";
                alt = AltEnum.JSON;
                approved = false;
                callback = "molestiae";
                fields = "eveniet";
                key = "qui";
                language = "cum";
                maxResults = 434761L;
                oauthToken = "necessitatibus";
                prettyPrint = false;
                query = "ratione";
                quotaUser = "laborum";
                token = "distinctio";
                uploadType = "voluptatum";
                uploadProtocol = "rem";
            }};            

            AndroidenterpriseProductsListResponse res = sdk.products.androidenterpriseProductsList(req, new AndroidenterpriseProductsListSecurity("aliquam", "ad") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.productsListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidenterpriseProductsUnapprove

Unapproves the specified product (and the relevant app permissions, if any) **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidenterpriseProductsUnapproveRequest;
import org.openapis.openapi.models.operations.AndroidenterpriseProductsUnapproveResponse;
import org.openapis.openapi.models.operations.AndroidenterpriseProductsUnapproveSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidenterpriseProductsUnapproveRequest req = new AndroidenterpriseProductsUnapproveRequest("repellat", "alias") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "perspiciatis";
                alt = AltEnum.MEDIA;
                callback = "mollitia";
                fields = "voluptas";
                key = "alias";
                oauthToken = "maiores";
                prettyPrint = false;
                quotaUser = "reiciendis";
                uploadType = "dolores";
                uploadProtocol = "id";
            }};            

            AndroidenterpriseProductsUnapproveResponse res = sdk.products.androidenterpriseProductsUnapprove(req, new AndroidenterpriseProductsUnapproveSecurity("minima", "dolore") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
