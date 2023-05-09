# categoryRules

### Available Operations

* [getUsersIdCategoryRules](#getusersidcategoryrules) - List category rules in user
* [postCategoriesIdCategoryRules](#postcategoriesidcategoryrules) - Create category rule in category

## getUsersIdCategoryRules

Lists all category rules belonging to a user by their ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersIdCategoryRulesRequest;
import org.openapis.openapi.models.operations.GetUsersIdCategoryRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    developerKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetUsersIdCategoryRulesRequest req = new GetUsersIdCategoryRulesRequest(652790L);            

            GetUsersIdCategoryRulesResponse res = sdk.categoryRules.getUsersIdCategoryRules(req);

            if (res.categoryRules != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCategoriesIdCategoryRules

Creates a rule to allocate a category to transactions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostCategoriesIdCategoryRulesRequest;
import org.openapis.openapi.models.operations.PostCategoriesIdCategoryRulesRequestBody;
import org.openapis.openapi.models.operations.PostCategoriesIdCategoryRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem") {{
                    developerKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostCategoriesIdCategoryRulesRequest req = new PostCategoriesIdCategoryRulesRequest(635059L) {{
                requestBody = new PostCategoriesIdCategoryRulesRequestBody("Countdown") {{
                    applyToAll = false;
                    applyToUncategorised = true;
                }};;
            }};            

            PostCategoriesIdCategoryRulesResponse res = sdk.categoryRules.postCategoriesIdCategoryRules(req);

            if (res.categoryRule != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
