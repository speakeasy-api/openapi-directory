# categories

### Available Operations

* [createCategories](#createcategories) - Create a new category
* [deleteCategory](#deletecategory) - Delete a category
* [getProductTypes](#getproducttypes) - Retrieve all categories
* [renameCategory](#renamecategory) - Rename a category

## createCategories

Create a new category

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateCategoriesRequest;
import org.openapis.openapi.models.operations.CreateCategoriesResponse;
import org.openapis.openapi.models.operations.CreateCategoriesSecurity;
import org.openapis.openapi.models.shared.CategoryDTO;
import org.openapis.openapi.models.shared.CreateCategoriesRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateCategoriesRequest req = new CreateCategoriesRequest(                new CreateCategoriesRequest(                new org.openapis.openapi.models.shared.CategoryDTO[]{{
                                                add(new CategoryDTO("mollitia", "fa563e25-16fe-44c8-b711-e5b7fd2ed028") {{
                                                    name = "Rene Reinger";
                                                    uuid = "8f3a6699-7074-4ba4-869b-6e2141959890";
                                                }}),
                                                add(new CategoryDTO("eaque", "53202c73-d5fe-49b9-8c28-909b3fe49a8d") {{
                                                    name = "Victor Casper";
                                                    uuid = "dc692601-fb57-46b0-95f0-d30c5fbb2587";
                                                }}),
                                                add(new CategoryDTO("ab", "ba77a89e-bf73-47ae-8203-ce5e6a95d8a0") {{
                                                    name = "Loren Renner";
                                                    uuid = "8633323f-9b77-4f3a-8100-674ebf69280d";
                                                }}),
                                                add(new CategoryDTO("cupiditate", "cdb1a842-2bb6-479d-a322-715bf0cbb1e3") {{
                                                    name = "Alex Goodwin";
                                                    uuid = "e2af7a73-cf3b-4e45-bf87-0b326b5a7342";
                                                }}),
                                            }});, "1b8b90f3-443a-4110-8e0a-dcf4b921879f");            

            CreateCategoriesResponse res = sdk.categories.createCategories(req, new CreateCategoriesSecurity("quisquam") {{
                zettleOauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## deleteCategory

Delete a category

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCategoryRequest;
import org.openapis.openapi.models.operations.DeleteCategoryResponse;
import org.openapis.openapi.models.operations.DeleteCategorySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteCategoryRequest req = new DeleteCategoryRequest("e953f73e-f7fb-4c7a-bd74-dd39c0f5d2cf", "f7c70a45-626d-4436-813f-16d9f5fce6c5");            

            DeleteCategoryResponse res = sdk.categories.deleteCategory(req, new DeleteCategorySecurity("veniam") {{
                zettleOauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## getProductTypes

Retrieve all categories

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProductTypesRequest;
import org.openapis.openapi.models.operations.GetProductTypesResponse;
import org.openapis.openapi.models.operations.GetProductTypesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetProductTypesRequest req = new GetProductTypesRequest("6146c3e2-50fb-4008-842e-141aac366c8d");            

            GetProductTypesResponse res = sdk.categories.getProductTypes(req, new GetProductTypesSecurity("nulla") {{
                zettleOauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.categoryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## renameCategory

Rename a category

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RenameCategoryRequest;
import org.openapis.openapi.models.operations.RenameCategoryResponse;
import org.openapis.openapi.models.operations.RenameCategorySecurity;
import org.openapis.openapi.models.shared.RenameCategoryRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RenameCategoryRequest req = new RenameCategoryRequest(                new RenameCategoryRequest("voluptas");, "b1442907-4747-478a-bbd4-66d28c10ab3c", "dca42519-04e5-423c-be0b-c7178e4796f2");            

            RenameCategoryResponse res = sdk.categories.renameCategory(req, new RenameCategorySecurity("deserunt") {{
                zettleOauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
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
