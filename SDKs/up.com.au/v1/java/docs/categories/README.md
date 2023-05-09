# categories

## Overview

Categories enable understanding where your money goes by driving
powerful insights in Up. All categories in Up are pre-defined
and are automatically assigned to new purchases in most cases. A
parent-child relationship is used to represent categories,
however parent categories cannot be directly assigned to
transactions.


### Available Operations

* [getCategories](#getcategories) - List categories
* [getCategoriesId](#getcategoriesid) - Retrieve category
* [patchTransactionsTransactionIdRelationshipsCategory](#patchtransactionstransactionidrelationshipscategory) - Categorize transaction

## getCategories

Retrieve a list of all categories and their ancestry. The returned list
is not paginated.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCategoriesRequest;
import org.openapis.openapi.models.operations.GetCategoriesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            GetCategoriesRequest req = new GetCategoriesRequest() {{
                filterParent = "suscipit";
            }};            

            GetCategoriesResponse res = sdk.categories.getCategories(req);

            if (res.listCategoriesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCategoriesId

Retrieve a specific category by providing its unique identifier.


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
                .setSecurity(new Security("iure") {{
                    bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            GetCategoriesIdRequest req = new GetCategoriesIdRequest("magnam");            

            GetCategoriesIdResponse res = sdk.categories.getCategoriesId(req);

            if (res.getCategoryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchTransactionsTransactionIdRelationshipsCategory

Updates the category associated with a transaction. Only transactions
for which `isCategorizable` is set to true support this operation. The
`id` is taken from the list exposed on `/categories` and cannot be one of
the top-level (parent) categories. To de-categorize a transaction, set
the entire `data` key to `null`. An HTTP `204` is returned on success.
The associated category, along with its request URL is also exposed via
the `category` relationship on the transaction resource returned from
`/transactions/{id}`.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchTransactionsTransactionIdRelationshipsCategoryRequest;
import org.openapis.openapi.models.operations.PatchTransactionsTransactionIdRelationshipsCategoryResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateTransactionCategoryRequest;
import org.openapis.openapi.models.shared.UpdateTransactionCategoryRequestData;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("debitis") {{
                    bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            PatchTransactionsTransactionIdRelationshipsCategoryRequest req = new PatchTransactionsTransactionIdRelationshipsCategoryRequest("ipsa") {{
                updateTransactionCategoryRequest = new UpdateTransactionCategoryRequest(                new UpdateTransactionCategoryRequestData("delectus", "tempora"););;
            }};            

            PatchTransactionsTransactionIdRelationshipsCategoryResponse res = sdk.categories.patchTransactionsTransactionIdRelationshipsCategory(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
