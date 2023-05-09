# categories

### Available Operations

* [mybusinessCategoriesBatchGet](#mybusinesscategoriesbatchget) - Returns a list of business categories for the provided language and GConcept ids.
* [mybusinessCategoriesList](#mybusinesscategorieslist) - Returns a list of business categories. Search will match the category name but not the category ID. *Note:* Search only matches the front of a category name (that is, 'food' may return 'Food Court' but not 'Fast Food Restaurant').

## mybusinessCategoriesBatchGet

Returns a list of business categories for the provided language and GConcept ids.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinessCategoriesBatchGetRequest;
import org.openapis.openapi.models.operations.MybusinessCategoriesBatchGetResponse;
import org.openapis.openapi.models.operations.MybusinessCategoriesBatchGetViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessCategoriesBatchGetRequest req = new MybusinessCategoriesBatchGetRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ex";
                alt = AltEnum.JSON;
                callback = "ad";
                categoryIds = new String[]{{
                    add("voluptatem"),
                    add("molestias"),
                    add("cum"),
                }};
                fields = "aliquid";
                key = "beatae";
                languageCode = "voluptatum";
                oauthToken = "omnis";
                prettyPrint = false;
                quotaUser = "veritatis";
                regionCode = "rerum";
                uploadType = "est";
                uploadProtocol = "culpa";
                view = MybusinessCategoriesBatchGetViewEnum.CATEGORY_VIEW_UNSPECIFIED;
            }};            

            MybusinessCategoriesBatchGetResponse res = sdk.categories.mybusinessCategoriesBatchGet(req);

            if (res.batchGetBusinessCategoriesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mybusinessCategoriesList

Returns a list of business categories. Search will match the category name but not the category ID. *Note:* Search only matches the front of a category name (that is, 'food' may return 'Food Court' but not 'Fast Food Restaurant').

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinessCategoriesListRequest;
import org.openapis.openapi.models.operations.MybusinessCategoriesListResponse;
import org.openapis.openapi.models.operations.MybusinessCategoriesListViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessCategoriesListRequest req = new MybusinessCategoriesListRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "officiis";
                alt = AltEnum.JSON;
                callback = "fuga";
                fields = "pariatur";
                key = "debitis";
                languageCode = "voluptatem";
                oauthToken = "alias";
                pageSize = 534917L;
                pageToken = "earum";
                prettyPrint = false;
                quotaUser = "ex";
                regionCode = "sapiente";
                searchTerm = "rem";
                uploadType = "minus";
                uploadProtocol = "nemo";
                view = MybusinessCategoriesListViewEnum.FULL;
            }};            

            MybusinessCategoriesListResponse res = sdk.categories.mybusinessCategoriesList(req);

            if (res.listBusinessCategoriesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
