# catalogue

### Available Operations

* [getCatalogue](#getcatalogue) - Catalogue Detail
* [getCatalogueAsset](#getcatalogueasset) - Catalogue Asset Collection
* [getCatalogueAssetDetail](#getcatalogueassetdetail) - Catalogue Asset Detail
* [listCatalogues](#listcatalogues) - Catalogue Collection

## getCatalogue

Return the content of the selected catalogue.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCatalogueRequest;
import org.openapis.openapi.models.operations.GetCatalogueResponse;
import org.openapis.openapi.models.operations.GetCatalogueSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCatalogueRequest req = new GetCatalogueRequest("error");            

            GetCatalogueResponse res = sdk.catalogue.getCatalogue(req, new GetCatalogueSecurity("deserunt") {{
                apikey = "YOUR_API_KEY_HERE";
            }});

            if (res.getCatalogue200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCatalogueAsset

Return the content of the selected catalogue.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCatalogueAssetRequest;
import org.openapis.openapi.models.operations.GetCatalogueAssetResponse;
import org.openapis.openapi.models.operations.GetCatalogueAssetSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCatalogueAssetRequest req = new GetCatalogueAssetRequest("suscipit") {{
                aliases = false;
                end = "iure";
                limit = 2975.34;
                start = "debitis";
                title = "Mr.";
                updatedAfter = "delectus";
            }};            

            GetCatalogueAssetResponse res = sdk.catalogue.getCatalogueAsset(req, new GetCatalogueAssetSecurity("tempora") {{
                apikey = "YOUR_API_KEY_HERE";
            }});

            if (res.getCatalogueAsset200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCatalogueAssetDetail

Return the content of the selected catalogue asset.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCatalogueAssetDetailRequest;
import org.openapis.openapi.models.operations.GetCatalogueAssetDetailResponse;
import org.openapis.openapi.models.operations.GetCatalogueAssetDetailSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCatalogueAssetDetailRequest req = new GetCatalogueAssetDetailRequest("suscipit", "molestiae");            

            GetCatalogueAssetDetailResponse res = sdk.catalogue.getCatalogueAssetDetail(req, new GetCatalogueAssetDetailSecurity("minus") {{
                apikey = "YOUR_API_KEY_HERE";
            }});

            if (res.getCatalogueAssetDetail200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listCatalogues

Return a collection of Catalogues.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListCataloguesResponse;
import org.openapis.openapi.models.operations.ListCataloguesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListCataloguesResponse res = sdk.catalogue.listCatalogues(new ListCataloguesSecurity("placeat") {{
                apikey = "YOUR_API_KEY_HERE";
            }});

            if (res.listCatalogues200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
