# catalogs

### Available Operations

* [cloudprivatecatalogproducerCatalogsAssociationsCreate](#cloudprivatecatalogproducercatalogsassociationscreate) - Creates an Association instance under a given Catalog.
* [cloudprivatecatalogproducerCatalogsAssociationsList](#cloudprivatecatalogproducercatalogsassociationslist) - Lists all Association resources under a catalog.
* [cloudprivatecatalogproducerCatalogsCreate](#cloudprivatecatalogproducercatalogscreate) - Creates a new Catalog resource.
* [cloudprivatecatalogproducerCatalogsGetIamPolicy](#cloudprivatecatalogproducercatalogsgetiampolicy) - Gets IAM policy for the specified Catalog.
* [cloudprivatecatalogproducerCatalogsList](#cloudprivatecatalogproducercatalogslist) - Lists Catalog resources that the producer has access to, within the
scope of the parent resource.
* [cloudprivatecatalogproducerCatalogsProductsCopy](#cloudprivatecatalogproducercatalogsproductscopy) - Copies a Product under another Catalog.
* [cloudprivatecatalogproducerCatalogsProductsCreate](#cloudprivatecatalogproducercatalogsproductscreate) - Creates a Product instance under a given Catalog.
* [cloudprivatecatalogproducerCatalogsProductsIconsUpload](#cloudprivatecatalogproducercatalogsproductsiconsupload) - Creates an Icon instance under a given Product.
If Product only has a default icon, a new Icon
instance is created and associated with the given Product.
If Product already has a non-default icon, the action creates
a new Icon instance, associates the newly created
Icon with the given Product and deletes the old icon.
* [cloudprivatecatalogproducerCatalogsProductsList](#cloudprivatecatalogproducercatalogsproductslist) - Lists Product resources that the producer has access to, within the
scope of the parent catalog.
* [cloudprivatecatalogproducerCatalogsProductsVersionsCreate](#cloudprivatecatalogproducercatalogsproductsversionscreate) - Creates a Version instance under a given Product.
* [cloudprivatecatalogproducerCatalogsProductsVersionsDelete](#cloudprivatecatalogproducercatalogsproductsversionsdelete) - Hard deletes a Version.
* [cloudprivatecatalogproducerCatalogsProductsVersionsGet](#cloudprivatecatalogproducercatalogsproductsversionsget) - Returns the requested Version resource.
* [cloudprivatecatalogproducerCatalogsProductsVersionsList](#cloudprivatecatalogproducercatalogsproductsversionslist) - Lists Version resources that the producer has access to, within the
scope of the parent Product.
* [cloudprivatecatalogproducerCatalogsProductsVersionsPatch](#cloudprivatecatalogproducercatalogsproductsversionspatch) - Updates a specific Version resource.
* [cloudprivatecatalogproducerCatalogsSetIamPolicy](#cloudprivatecatalogproducercatalogssetiampolicy) - Sets the IAM policy for the specified Catalog.
* [cloudprivatecatalogproducerCatalogsTestIamPermissions](#cloudprivatecatalogproducercatalogstestiampermissions) - Tests the IAM permissions for the specified Catalog.
* [cloudprivatecatalogproducerCatalogsUndelete](#cloudprivatecatalogproducercatalogsundelete) - Undeletes a deleted Catalog and all resources under it.

## cloudprivatecatalogproducerCatalogsAssociationsCreate

Creates an Association instance under a given Catalog.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudprivatecatalogproducerCatalogsAssociationsCreateRequest;
import org.openapis.openapi.models.operations.CloudprivatecatalogproducerCatalogsAssociationsCreateResponse;
import org.openapis.openapi.models.operations.CloudprivatecatalogproducerCatalogsAssociationsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudPrivatecatalogproducerV1beta1Association;
import org.openapis.openapi.models.shared.GoogleCloudPrivatecatalogproducerV1beta1CreateAssociationRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudprivatecatalogproducerCatalogsAssociationsCreateRequest req = new CloudprivatecatalogproducerCatalogsAssociationsCreateRequest("minus") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudPrivatecatalogproducerV1beta1CreateAssociationRequest = new GoogleCloudPrivatecatalogproducerV1beta1CreateAssociationRequest() {{
                    association = new GoogleCloudPrivatecatalogproducerV1beta1Association() {{
                        createTime = "voluptatum";
                        name = "Miriam Huel";
                        resource = "ab";
                    }};;
                }};;
                accessToken = "quis";
                alt = AltEnum.JSON;
                callback = "deserunt";
                fields = "perferendis";
                key = "ipsam";
                oauthToken = "repellendus";
                prettyPrint = false;
                quotaUser = "sapiente";
                uploadType = "quo";
                uploadProtocol = "odit";
            }};            

            CloudprivatecatalogproducerCatalogsAssociationsCreateResponse res = sdk.catalogs.cloudprivatecatalogproducerCatalogsAssociationsCreate(req, new CloudprivatecatalogproducerCatalogsAssociationsCreateSecurity("at", "at") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudprivatecatalogproducerCatalogsAssociationsList

Lists all Association resources under a catalog.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudprivatecatalogproducerCatalogsAssociationsListRequest;
import org.openapis.openapi.models.operations.CloudprivatecatalogproducerCatalogsAssociationsListResponse;
import org.openapis.openapi.models.operations.CloudprivatecatalogproducerCatalogsAssociationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudprivatecatalogproducerCatalogsAssociationsListRequest req = new CloudprivatecatalogproducerCatalogsAssociationsListRequest("maiores") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quod";
                alt = AltEnum.PROTO;
                callback = "esse";
                fields = "totam";
                key = "porro";
                oauthToken = "dolorum";
                pageSize = 118274L;
                pageToken = "nam";
                prettyPrint = false;
                quotaUser = "officia";
                uploadType = "occaecati";
                uploadProtocol = "fugit";
            }};            

            CloudprivatecatalogproducerCatalogsAssociationsListResponse res = sdk.catalogs.cloudprivatecatalogproducerCatalogsAssociationsList(req, new CloudprivatecatalogproducerCatalogsAssociationsListSecurity("deleniti", "hic") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudprivatecatalogproducerCatalogsCreate

Creates a new Catalog resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudprivatecatalogproducerCatalogsCreateRequest;
import org.openapis.openapi.models.operations.CloudprivatecatalogproducerCatalogsCreateResponse;
import org.openapis.openapi.models.operations.CloudprivatecatalogproducerCatalogsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudPrivatecatalogproducerV1beta1Catalog;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudprivatecatalogproducerCatalogsCreateRequest req = new CloudprivatecatalogproducerCatalogsCreateRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudPrivatecatalogproducerV1beta1Catalog = new GoogleCloudPrivatecatalogproducerV1beta1Catalog() {{
                    createTime = "totam";
                    description = "beatae";
                    displayName = "commodi";
                    name = "Pauline Dibbert";
                    parent = "esse";
                    updateTime = "ipsum";
                }};;
                accessToken = "excepturi";
                alt = AltEnum.JSON;
                callback = "perferendis";
                fields = "ad";
                key = "natus";
                oauthToken = "sed";
                prettyPrint = false;
                quotaUser = "iste";
                uploadType = "dolor";
                uploadProtocol = "natus";
            }};            

            CloudprivatecatalogproducerCatalogsCreateResponse res = sdk.catalogs.cloudprivatecatalogproducerCatalogsCreate(req, new CloudprivatecatalogproducerCatalogsCreateSecurity("laboriosam", "hic") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudprivatecatalogproducerCatalogsGetIamPolicy

Gets IAM policy for the specified Catalog.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudprivatecatalogproducerCatalogsGetIamPolicyRequest;
import org.openapis.openapi.models.operations.CloudprivatecatalogproducerCatalogsGetIamPolicyResponse;
import org.openapis.openapi.models.operations.CloudprivatecatalogproducerCatalogsGetIamPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudprivatecatalogproducerCatalogsGetIamPolicyRequest req = new CloudprivatecatalogproducerCatalogsGetIamPolicyRequest("saepe") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "in";
                alt = AltEnum.MEDIA;
                callback = "iste";
                fields = "iure";
                key = "saepe";
                oauthToken = "quidem";
                optionsRequestedPolicyVersion = 99280L;
                prettyPrint = false;
                quotaUser = "ipsa";
                uploadType = "reiciendis";
                uploadProtocol = "est";
            }};            

            CloudprivatecatalogproducerCatalogsGetIamPolicyResponse res = sdk.catalogs.cloudprivatecatalogproducerCatalogsGetIamPolicy(req, new CloudprivatecatalogproducerCatalogsGetIamPolicySecurity("mollitia", "laborum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudprivatecatalogproducerCatalogsList

Lists Catalog resources that the producer has access to, within the
scope of the parent resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudprivatecatalogproducerCatalogsListRequest;
import org.openapis.openapi.models.operations.CloudprivatecatalogproducerCatalogsListResponse;
import org.openapis.openapi.models.operations.CloudprivatecatalogproducerCatalogsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudprivatecatalogproducerCatalogsListRequest req = new CloudprivatecatalogproducerCatalogsListRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "dolorem";
                alt = AltEnum.MEDIA;
                callback = "explicabo";
                fields = "nobis";
                key = "enim";
                oauthToken = "omnis";
                pageSize = 363711L;
                pageToken = "minima";
                parent = "excepturi";
                prettyPrint = false;
                quotaUser = "accusantium";
                uploadType = "iure";
                uploadProtocol = "culpa";
            }};            

            CloudprivatecatalogproducerCatalogsListResponse res = sdk.catalogs.cloudprivatecatalogproducerCatalogsList(req, new CloudprivatecatalogproducerCatalogsListSecurity("doloribus", "sapiente") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudprivatecatalogproducerCatalogsProductsCopy

Copies a Product under another Catalog.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudprivatecatalogproducerCatalogsProductsCopyRequest;
import org.openapis.openapi.models.operations.CloudprivatecatalogproducerCatalogsProductsCopyResponse;
import org.openapis.openapi.models.operations.CloudprivatecatalogproducerCatalogsProductsCopySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudPrivatecatalogproducerV1beta1CopyProductRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudprivatecatalogproducerCatalogsProductsCopyRequest req = new CloudprivatecatalogproducerCatalogsProductsCopyRequest("architecto") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudPrivatecatalogproducerV1beta1CopyProductRequest = new GoogleCloudPrivatecatalogproducerV1beta1CopyProductRequest() {{
                    destinationProductName = "dolorem";
                }};;
                accessToken = "culpa";
                alt = AltEnum.JSON;
                callback = "repellat";
                fields = "mollitia";
                key = "occaecati";
                oauthToken = "numquam";
                prettyPrint = false;
                quotaUser = "commodi";
                uploadType = "quam";
                uploadProtocol = "molestiae";
            }};            

            CloudprivatecatalogproducerCatalogsProductsCopyResponse res = sdk.catalogs.cloudprivatecatalogproducerCatalogsProductsCopy(req, new CloudprivatecatalogproducerCatalogsProductsCopySecurity("velit", "error") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudprivatecatalogproducerCatalogsProductsCreate

Creates a Product instance under a given Catalog.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudprivatecatalogproducerCatalogsProductsCreateRequest;
import org.openapis.openapi.models.operations.CloudprivatecatalogproducerCatalogsProductsCreateResponse;
import org.openapis.openapi.models.operations.CloudprivatecatalogproducerCatalogsProductsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudPrivatecatalogproducerV1beta1Product;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudprivatecatalogproducerCatalogsProductsCreateRequest req = new CloudprivatecatalogproducerCatalogsProductsCreateRequest("quia") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudPrivatecatalogproducerV1beta1Product = new GoogleCloudPrivatecatalogproducerV1beta1Product() {{
                    assetType = "vitae";
                    createTime = "laborum";
                    displayMetadata = new java.util.HashMap<String, Object>() {{
                        put("enim", "odit");
                        put("quo", "sequi");
                        put("tenetur", "ipsam");
                    }};
                    iconUri = "id";
                    name = "Richard Boyer";
                    updateTime = "laborum";
                }};;
                accessToken = "quasi";
                alt = AltEnum.PROTO;
                callback = "voluptatibus";
                fields = "vero";
                key = "nihil";
                oauthToken = "praesentium";
                prettyPrint = false;
                quotaUser = "voluptatibus";
                uploadType = "ipsa";
                uploadProtocol = "omnis";
            }};            

            CloudprivatecatalogproducerCatalogsProductsCreateResponse res = sdk.catalogs.cloudprivatecatalogproducerCatalogsProductsCreate(req, new CloudprivatecatalogproducerCatalogsProductsCreateSecurity("voluptate", "cum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudprivatecatalogproducerCatalogsProductsIconsUpload

Creates an Icon instance under a given Product.
If Product only has a default icon, a new Icon
instance is created and associated with the given Product.
If Product already has a non-default icon, the action creates
a new Icon instance, associates the newly created
Icon with the given Product and deletes the old icon.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudprivatecatalogproducerCatalogsProductsIconsUploadRequest;
import org.openapis.openapi.models.operations.CloudprivatecatalogproducerCatalogsProductsIconsUploadResponse;
import org.openapis.openapi.models.operations.CloudprivatecatalogproducerCatalogsProductsIconsUploadSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudPrivatecatalogproducerV1beta1UploadIconRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudprivatecatalogproducerCatalogsProductsIconsUploadRequest req = new CloudprivatecatalogproducerCatalogsProductsIconsUploadRequest("perferendis") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudPrivatecatalogproducerV1beta1UploadIconRequest = new GoogleCloudPrivatecatalogproducerV1beta1UploadIconRequest() {{
                    icon = "reprehenderit";
                }};;
                accessToken = "ut";
                alt = AltEnum.PROTO;
                callback = "dicta";
                fields = "corporis";
                key = "dolore";
                oauthToken = "iusto";
                prettyPrint = false;
                quotaUser = "dicta";
                uploadType = "harum";
                uploadProtocol = "enim";
            }};            

            CloudprivatecatalogproducerCatalogsProductsIconsUploadResponse res = sdk.catalogs.cloudprivatecatalogproducerCatalogsProductsIconsUpload(req, new CloudprivatecatalogproducerCatalogsProductsIconsUploadSecurity("accusamus", "commodi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudprivatecatalogproducerCatalogsProductsList

Lists Product resources that the producer has access to, within the
scope of the parent catalog.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudprivatecatalogproducerCatalogsProductsListRequest;
import org.openapis.openapi.models.operations.CloudprivatecatalogproducerCatalogsProductsListResponse;
import org.openapis.openapi.models.operations.CloudprivatecatalogproducerCatalogsProductsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudprivatecatalogproducerCatalogsProductsListRequest req = new CloudprivatecatalogproducerCatalogsProductsListRequest("repudiandae") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ipsum";
                alt = AltEnum.PROTO;
                callback = "molestias";
                fields = "excepturi";
                filter = "pariatur";
                key = "modi";
                oauthToken = "praesentium";
                pageSize = 523248L;
                pageToken = "voluptates";
                prettyPrint = false;
                quotaUser = "quasi";
                uploadType = "repudiandae";
                uploadProtocol = "sint";
            }};            

            CloudprivatecatalogproducerCatalogsProductsListResponse res = sdk.catalogs.cloudprivatecatalogproducerCatalogsProductsList(req, new CloudprivatecatalogproducerCatalogsProductsListSecurity("veritatis", "itaque") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudprivatecatalogproducerCatalogsProductsVersionsCreate

Creates a Version instance under a given Product.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudprivatecatalogproducerCatalogsProductsVersionsCreateRequest;
import org.openapis.openapi.models.operations.CloudprivatecatalogproducerCatalogsProductsVersionsCreateResponse;
import org.openapis.openapi.models.operations.CloudprivatecatalogproducerCatalogsProductsVersionsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudPrivatecatalogproducerV1beta1Version;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudprivatecatalogproducerCatalogsProductsVersionsCreateRequest req = new CloudprivatecatalogproducerCatalogsProductsVersionsCreateRequest("incidunt") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudPrivatecatalogproducerV1beta1Version = new GoogleCloudPrivatecatalogproducerV1beta1Version() {{
                    asset = new java.util.HashMap<String, Object>() {{
                        put("est", "quibusdam");
                    }};
                    createTime = "explicabo";
                    description = "deserunt";
                    name = "Marty Green";
                    originalAsset = new java.util.HashMap<String, Object>() {{
                        put("cupiditate", "quos");
                        put("perferendis", "magni");
                    }};
                    updateTime = "assumenda";
                }};;
                accessToken = "ipsam";
                alt = AltEnum.JSON;
                callback = "fugit";
                fields = "dolorum";
                key = "excepturi";
                oauthToken = "tempora";
                prettyPrint = false;
                quotaUser = "facilis";
                uploadType = "tempore";
                uploadProtocol = "labore";
            }};            

            CloudprivatecatalogproducerCatalogsProductsVersionsCreateResponse res = sdk.catalogs.cloudprivatecatalogproducerCatalogsProductsVersionsCreate(req, new CloudprivatecatalogproducerCatalogsProductsVersionsCreateSecurity("delectus", "eum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudprivatecatalogproducerCatalogsProductsVersionsDelete

Hard deletes a Version.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudprivatecatalogproducerCatalogsProductsVersionsDeleteRequest;
import org.openapis.openapi.models.operations.CloudprivatecatalogproducerCatalogsProductsVersionsDeleteResponse;
import org.openapis.openapi.models.operations.CloudprivatecatalogproducerCatalogsProductsVersionsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudprivatecatalogproducerCatalogsProductsVersionsDeleteRequest req = new CloudprivatecatalogproducerCatalogsProductsVersionsDeleteRequest("non") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "sint";
                alt = AltEnum.MEDIA;
                callback = "provident";
                fields = "necessitatibus";
                force = false;
                key = "sint";
                oauthToken = "officia";
                prettyPrint = false;
                quotaUser = "dolor";
                uploadType = "debitis";
                uploadProtocol = "a";
            }};            

            CloudprivatecatalogproducerCatalogsProductsVersionsDeleteResponse res = sdk.catalogs.cloudprivatecatalogproducerCatalogsProductsVersionsDelete(req, new CloudprivatecatalogproducerCatalogsProductsVersionsDeleteSecurity("dolorum", "in") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudprivatecatalogproducerCatalogsProductsVersionsGet

Returns the requested Version resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudprivatecatalogproducerCatalogsProductsVersionsGetRequest;
import org.openapis.openapi.models.operations.CloudprivatecatalogproducerCatalogsProductsVersionsGetResponse;
import org.openapis.openapi.models.operations.CloudprivatecatalogproducerCatalogsProductsVersionsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudprivatecatalogproducerCatalogsProductsVersionsGetRequest req = new CloudprivatecatalogproducerCatalogsProductsVersionsGetRequest("in") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "maiores";
                alt = AltEnum.PROTO;
                callback = "dicta";
                fields = "magnam";
                key = "cumque";
                oauthToken = "facere";
                prettyPrint = false;
                quotaUser = "ea";
                uploadType = "aliquid";
                uploadProtocol = "laborum";
            }};            

            CloudprivatecatalogproducerCatalogsProductsVersionsGetResponse res = sdk.catalogs.cloudprivatecatalogproducerCatalogsProductsVersionsGet(req, new CloudprivatecatalogproducerCatalogsProductsVersionsGetSecurity("accusamus", "non") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudprivatecatalogproducerCatalogsProductsVersionsList

Lists Version resources that the producer has access to, within the
scope of the parent Product.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudprivatecatalogproducerCatalogsProductsVersionsListRequest;
import org.openapis.openapi.models.operations.CloudprivatecatalogproducerCatalogsProductsVersionsListResponse;
import org.openapis.openapi.models.operations.CloudprivatecatalogproducerCatalogsProductsVersionsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudprivatecatalogproducerCatalogsProductsVersionsListRequest req = new CloudprivatecatalogproducerCatalogsProductsVersionsListRequest("occaecati") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "accusamus";
                alt = AltEnum.PROTO;
                callback = "quidem";
                fields = "provident";
                key = "nam";
                oauthToken = "id";
                pageSize = 501324L;
                pageToken = "deleniti";
                prettyPrint = false;
                quotaUser = "sapiente";
                uploadType = "amet";
                uploadProtocol = "deserunt";
            }};            

            CloudprivatecatalogproducerCatalogsProductsVersionsListResponse res = sdk.catalogs.cloudprivatecatalogproducerCatalogsProductsVersionsList(req, new CloudprivatecatalogproducerCatalogsProductsVersionsListSecurity("nisi", "vel") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudprivatecatalogproducerCatalogsProductsVersionsPatch

Updates a specific Version resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudprivatecatalogproducerCatalogsProductsVersionsPatchRequest;
import org.openapis.openapi.models.operations.CloudprivatecatalogproducerCatalogsProductsVersionsPatchResponse;
import org.openapis.openapi.models.operations.CloudprivatecatalogproducerCatalogsProductsVersionsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudPrivatecatalogproducerV1beta1Version;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudprivatecatalogproducerCatalogsProductsVersionsPatchRequest req = new CloudprivatecatalogproducerCatalogsProductsVersionsPatchRequest("natus") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudPrivatecatalogproducerV1beta1Version = new GoogleCloudPrivatecatalogproducerV1beta1Version() {{
                    asset = new java.util.HashMap<String, Object>() {{
                        put("perferendis", "nihil");
                        put("magnam", "distinctio");
                    }};
                    createTime = "id";
                    description = "labore";
                    name = "Laurie Mosciski";
                    originalAsset = new java.util.HashMap<String, Object>() {{
                        put("aspernatur", "architecto");
                        put("magnam", "et");
                        put("excepturi", "ullam");
                        put("provident", "quos");
                    }};
                    updateTime = "sint";
                }};;
                accessToken = "accusantium";
                alt = AltEnum.MEDIA;
                callback = "reiciendis";
                fields = "mollitia";
                key = "ad";
                oauthToken = "eum";
                prettyPrint = false;
                quotaUser = "dolor";
                updateMask = "necessitatibus";
                uploadType = "odit";
                uploadProtocol = "nemo";
            }};            

            CloudprivatecatalogproducerCatalogsProductsVersionsPatchResponse res = sdk.catalogs.cloudprivatecatalogproducerCatalogsProductsVersionsPatch(req, new CloudprivatecatalogproducerCatalogsProductsVersionsPatchSecurity("quasi", "iure") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudprivatecatalogproducerCatalogsSetIamPolicy

Sets the IAM policy for the specified Catalog.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudprivatecatalogproducerCatalogsSetIamPolicyRequest;
import org.openapis.openapi.models.operations.CloudprivatecatalogproducerCatalogsSetIamPolicyResponse;
import org.openapis.openapi.models.operations.CloudprivatecatalogproducerCatalogsSetIamPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleIamV1AuditConfig;
import org.openapis.openapi.models.shared.GoogleIamV1AuditLogConfig;
import org.openapis.openapi.models.shared.GoogleIamV1AuditLogConfigLogTypeEnum;
import org.openapis.openapi.models.shared.GoogleIamV1Binding;
import org.openapis.openapi.models.shared.GoogleIamV1Policy;
import org.openapis.openapi.models.shared.GoogleIamV1SetIamPolicyRequest;
import org.openapis.openapi.models.shared.GoogleTypeExpr;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudprivatecatalogproducerCatalogsSetIamPolicyRequest req = new CloudprivatecatalogproducerCatalogsSetIamPolicyRequest("doloribus") {{
                dollarXgafv = XgafvEnum.TWO;
                googleIamV1SetIamPolicyRequest = new GoogleIamV1SetIamPolicyRequest() {{
                    policy = new GoogleIamV1Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.GoogleIamV1AuditConfig[]{{
                            add(new GoogleIamV1AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.GoogleIamV1AuditLogConfig[]{{
                                    add(new GoogleIamV1AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("facilis"),
                                            add("in"),
                                            add("architecto"),
                                        }};
                                        logType = GoogleIamV1AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new GoogleIamV1AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("ullam"),
                                            add("expedita"),
                                            add("nihil"),
                                            add("repellat"),
                                        }};
                                        logType = GoogleIamV1AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new GoogleIamV1AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("saepe"),
                                        }};
                                        logType = GoogleIamV1AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new GoogleIamV1AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("consequuntur"),
                                        }};
                                        logType = GoogleIamV1AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                }};
                                service = "natus";
                            }}),
                            add(new GoogleIamV1AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.GoogleIamV1AuditLogConfig[]{{
                                    add(new GoogleIamV1AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("quo"),
                                        }};
                                        logType = GoogleIamV1AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                }};
                                service = "pariatur";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.GoogleIamV1Binding[]{{
                            add(new GoogleIamV1Binding() {{
                                condition = new GoogleTypeExpr() {{
                                    description = "ea";
                                    expression = "excepturi";
                                    location = "odit";
                                    title = "Ms.";
                                }};
                                members = new String[]{{
                                    add("ab"),
                                }};
                                role = "maiores";
                            }}),
                            add(new GoogleIamV1Binding() {{
                                condition = new GoogleTypeExpr() {{
                                    description = "quidem";
                                    expression = "ipsam";
                                    location = "voluptate";
                                    title = "Ms.";
                                }};
                                members = new String[]{{
                                    add("eaque"),
                                    add("pariatur"),
                                    add("nemo"),
                                }};
                                role = "voluptatibus";
                            }}),
                            add(new GoogleIamV1Binding() {{
                                condition = new GoogleTypeExpr() {{
                                    description = "perferendis";
                                    expression = "fugiat";
                                    location = "amet";
                                    title = "Mr.";
                                }};
                                members = new String[]{{
                                    add("corporis"),
                                    add("hic"),
                                    add("libero"),
                                    add("nobis"),
                                }};
                                role = "dolores";
                            }}),
                            add(new GoogleIamV1Binding() {{
                                condition = new GoogleTypeExpr() {{
                                    description = "quis";
                                    expression = "totam";
                                    location = "dignissimos";
                                    title = "Mr.";
                                }};
                                members = new String[]{{
                                    add("nesciunt"),
                                    add("eos"),
                                }};
                                role = "perferendis";
                            }}),
                        }};
                        etag = "dolores";
                        version = 793698;
                    }};;
                    updateMask = "quam";
                }};;
                accessToken = "dolor";
                alt = AltEnum.PROTO;
                callback = "nostrum";
                fields = "hic";
                key = "recusandae";
                oauthToken = "omnis";
                prettyPrint = false;
                quotaUser = "facilis";
                uploadType = "perspiciatis";
                uploadProtocol = "voluptatem";
            }};            

            CloudprivatecatalogproducerCatalogsSetIamPolicyResponse res = sdk.catalogs.cloudprivatecatalogproducerCatalogsSetIamPolicy(req, new CloudprivatecatalogproducerCatalogsSetIamPolicySecurity("porro", "consequuntur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudprivatecatalogproducerCatalogsTestIamPermissions

Tests the IAM permissions for the specified Catalog.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudprivatecatalogproducerCatalogsTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.CloudprivatecatalogproducerCatalogsTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.CloudprivatecatalogproducerCatalogsTestIamPermissionsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleIamV1TestIamPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudprivatecatalogproducerCatalogsTestIamPermissionsRequest req = new CloudprivatecatalogproducerCatalogsTestIamPermissionsRequest("blanditiis") {{
                dollarXgafv = XgafvEnum.TWO;
                googleIamV1TestIamPermissionsRequest = new GoogleIamV1TestIamPermissionsRequest() {{
                    permissions = new String[]{{
                        add("occaecati"),
                    }};
                }};;
                accessToken = "rerum";
                alt = AltEnum.JSON;
                callback = "asperiores";
                fields = "earum";
                key = "modi";
                oauthToken = "iste";
                prettyPrint = false;
                quotaUser = "dolorum";
                uploadType = "deleniti";
                uploadProtocol = "pariatur";
            }};            

            CloudprivatecatalogproducerCatalogsTestIamPermissionsResponse res = sdk.catalogs.cloudprivatecatalogproducerCatalogsTestIamPermissions(req, new CloudprivatecatalogproducerCatalogsTestIamPermissionsSecurity("provident", "nobis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudprivatecatalogproducerCatalogsUndelete

Undeletes a deleted Catalog and all resources under it.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudprivatecatalogproducerCatalogsUndeleteRequest;
import org.openapis.openapi.models.operations.CloudprivatecatalogproducerCatalogsUndeleteResponse;
import org.openapis.openapi.models.operations.CloudprivatecatalogproducerCatalogsUndeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudprivatecatalogproducerCatalogsUndeleteRequest req = new CloudprivatecatalogproducerCatalogsUndeleteRequest("libero") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("quos", "aliquid");
                    put("dolorem", "dolorem");
                }};
                accessToken = "dolor";
                alt = AltEnum.JSON;
                callback = "ipsum";
                fields = "hic";
                key = "excepturi";
                oauthToken = "cum";
                prettyPrint = false;
                quotaUser = "voluptate";
                uploadType = "dignissimos";
                uploadProtocol = "reiciendis";
            }};            

            CloudprivatecatalogproducerCatalogsUndeleteResponse res = sdk.catalogs.cloudprivatecatalogproducerCatalogsUndelete(req, new CloudprivatecatalogproducerCatalogsUndeleteSecurity("amet", "dolorum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
