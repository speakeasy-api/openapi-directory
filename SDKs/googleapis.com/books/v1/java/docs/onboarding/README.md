# onboarding

### Available Operations

* [booksOnboardingListCategories](#booksonboardinglistcategories) - List categories for onboarding experience.
* [booksOnboardingListCategoryVolumes](#booksonboardinglistcategoryvolumes) - List available volumes under categories for onboarding experience.

## booksOnboardingListCategories

List categories for onboarding experience.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BooksOnboardingListCategoriesRequest;
import org.openapis.openapi.models.operations.BooksOnboardingListCategoriesResponse;
import org.openapis.openapi.models.operations.BooksOnboardingListCategoriesSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BooksOnboardingListCategoriesRequest req = new BooksOnboardingListCategoriesRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "accusantium";
                alt = AltEnum.JSON;
                callback = "sapiente";
                fields = "dicta";
                key = "ullam";
                locale = "reprehenderit";
                oauthToken = "ullam";
                prettyPrint = false;
                quotaUser = "nisi";
                uploadType = "aut";
                uploadProtocol = "voluptatum";
            }};            

            BooksOnboardingListCategoriesResponse res = sdk.onboarding.booksOnboardingListCategories(req, new BooksOnboardingListCategoriesSecurity("qui", "quibusdam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.category != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## booksOnboardingListCategoryVolumes

List available volumes under categories for onboarding experience.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BooksOnboardingListCategoryVolumesMaxAllowedMaturityRatingEnum;
import org.openapis.openapi.models.operations.BooksOnboardingListCategoryVolumesRequest;
import org.openapis.openapi.models.operations.BooksOnboardingListCategoryVolumesResponse;
import org.openapis.openapi.models.operations.BooksOnboardingListCategoryVolumesSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BooksOnboardingListCategoryVolumesRequest req = new BooksOnboardingListCategoryVolumesRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "deleniti";
                alt = AltEnum.PROTO;
                callback = "dolorum";
                categoryId = new String[]{{
                    add("omnis"),
                }};
                fields = "tenetur";
                key = "quasi";
                locale = "at";
                maxAllowedMaturityRating = BooksOnboardingListCategoryVolumesMaxAllowedMaturityRatingEnum.MAX_ALLOWED_MATURITY_RATING_UNDEFINED;
                oauthToken = "voluptate";
                pageSize = 55965L;
                pageToken = "minima";
                prettyPrint = false;
                quotaUser = "veritatis";
                uploadType = "consectetur";
                uploadProtocol = "adipisci";
            }};            

            BooksOnboardingListCategoryVolumesResponse res = sdk.onboarding.booksOnboardingListCategoryVolumes(req, new BooksOnboardingListCategoryVolumesSecurity("iste", "temporibus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.volume2 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
