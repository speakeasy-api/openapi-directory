# categories

### Available Operations

* [mybusinessbusinessinformationCategoriesBatchGet](#mybusinessbusinessinformationcategoriesbatchget) - Returns a list of business categories for the provided language and GConcept ids.
* [mybusinessbusinessinformationCategoriesList](#mybusinessbusinessinformationcategorieslist) - Returns a list of business categories. Search will match the category name but not the category ID. Search only matches the front of a category name (that is, 'food' may return 'Food Court' but not 'Fast Food Restaurant').

## mybusinessbusinessinformationCategoriesBatchGet

Returns a list of business categories for the provided language and GConcept ids.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinessbusinessinformationCategoriesBatchGetRequest;
import org.openapis.openapi.models.operations.MybusinessbusinessinformationCategoriesBatchGetResponse;
import org.openapis.openapi.models.operations.MybusinessbusinessinformationCategoriesBatchGetViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessbusinessinformationCategoriesBatchGetRequest req = new MybusinessbusinessinformationCategoriesBatchGetRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "similique";
                alt = AltEnum.PROTO;
                callback = "vero";
                fields = "ducimus";
                key = "dolore";
                languageCode = "quibusdam";
                names = new String[]{{
                    add("sequi"),
                    add("natus"),
                    add("impedit"),
                    add("aut"),
                }};
                oauthToken = "voluptatibus";
                prettyPrint = false;
                quotaUser = "exercitationem";
                regionCode = "nulla";
                uploadType = "fugit";
                uploadProtocol = "porro";
                view = MybusinessbusinessinformationCategoriesBatchGetViewEnum.FULL;
            }};            

            MybusinessbusinessinformationCategoriesBatchGetResponse res = sdk.categories.mybusinessbusinessinformationCategoriesBatchGet(req);

            if (res.batchGetCategoriesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mybusinessbusinessinformationCategoriesList

Returns a list of business categories. Search will match the category name but not the category ID. Search only matches the front of a category name (that is, 'food' may return 'Food Court' but not 'Fast Food Restaurant').

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinessbusinessinformationCategoriesListRequest;
import org.openapis.openapi.models.operations.MybusinessbusinessinformationCategoriesListResponse;
import org.openapis.openapi.models.operations.MybusinessbusinessinformationCategoriesListViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessbusinessinformationCategoriesListRequest req = new MybusinessbusinessinformationCategoriesListRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "iusto";
                alt = AltEnum.PROTO;
                callback = "ducimus";
                fields = "alias";
                filter = "officia";
                key = "tempora";
                languageCode = "ipsam";
                oauthToken = "ea";
                pageSize = 136900L;
                pageToken = "vel";
                prettyPrint = false;
                quotaUser = "possimus";
                regionCode = "magnam";
                uploadType = "ratione";
                uploadProtocol = "ex";
                view = MybusinessbusinessinformationCategoriesListViewEnum.BASIC;
            }};            

            MybusinessbusinessinformationCategoriesListResponse res = sdk.categories.mybusinessbusinessinformationCategoriesList(req);

            if (res.listCategoriesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
