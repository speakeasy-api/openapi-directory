# categories

### Available Operations

* [deleteCategoriesId](#deletecategoriesid) - Delete category
* [getCategoriesId](#getcategoriesid) - Get category
* [getUsersIdCategories](#getusersidcategories) - List categories in user
* [postUsersIdCategories](#postusersidcategories) - Create category in user
* [putCategoriesId](#putcategoriesid) - Update category

## deleteCategoriesId

Deletes a particular category by its ID. This will delete all budgets within the category, and uncategorize all transactions assigned to the category.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCategoriesIdRequest;
import org.openapis.openapi.models.operations.DeleteCategoriesIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    developerKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteCategoriesIdRequest req = new DeleteCategoriesIdRequest(607831L);            

            DeleteCategoriesIdResponse res = sdk.categories.deleteCategoriesId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCategoriesId

Gets a particular category by its ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCategoriesIdRequest;
import org.openapis.openapi.models.operations.GetCategoriesIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nemo") {{
                    developerKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCategoriesIdRequest req = new GetCategoriesIdRequest(325047L);            

            GetCategoriesIdResponse res = sdk.categories.getCategoriesId(req);

            if (res.category != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsersIdCategories

Lists all categories belonging to a user by their ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersIdCategoriesRequest;
import org.openapis.openapi.models.operations.GetUsersIdCategoriesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    developerKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetUsersIdCategoriesRequest req = new GetUsersIdCategoriesRequest(38425L);            

            GetUsersIdCategoriesResponse res = sdk.categories.getUsersIdCategories(req);

            if (res.categories != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUsersIdCategories

Creates a category belonging to the user by their ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostUsersIdCategoriesRequest;
import org.openapis.openapi.models.operations.PostUsersIdCategoriesRequestBody;
import org.openapis.openapi.models.operations.PostUsersIdCategoriesRequestBodyRefundBehaviourEnum;
import org.openapis.openapi.models.operations.PostUsersIdCategoriesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    developerKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostUsersIdCategoriesRequest req = new PostUsersIdCategoriesRequest(634274L) {{
                requestBody = new PostUsersIdCategoriesRequestBody("Food") {{
                    colour = "#e0e7ff";
                    isBill = true;
                    isTransfer = false;
                    parentId = 42L;
                    refundBehaviour = PostUsersIdCategoriesRequestBodyRefundBehaviourEnum.CREDITS_ARE_REFUNDS;
                    rollUp = false;
                }};;
            }};            

            PostUsersIdCategoriesResponse res = sdk.categories.postUsersIdCategories(req);

            if (res.category != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putCategoriesId

Updates a category by its ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutCategoriesIdRequest;
import org.openapis.openapi.models.operations.PutCategoriesIdRequestBody;
import org.openapis.openapi.models.operations.PutCategoriesIdRequestBodyRefundBehaviourEnum;
import org.openapis.openapi.models.operations.PutCategoriesIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloribus") {{
                    developerKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutCategoriesIdRequest req = new PutCategoriesIdRequest(958950L) {{
                requestBody = new PutCategoriesIdRequestBody() {{
                    colour = "#e0e7ff";
                    isBill = true;
                    isTransfer = false;
                    parentId = 42L;
                    refundBehaviour = PutCategoriesIdRequestBodyRefundBehaviourEnum.CREDITS_ARE_REFUNDS;
                    rollUp = false;
                    title = "Food";
                }};;
            }};            

            PutCategoriesIdResponse res = sdk.categories.putCategoriesId(req);

            if (res.category != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
