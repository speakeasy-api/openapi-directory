# customerCategories

### Available Operations

* [deleteCustomerCategoriesIdJson](#deletecustomercategoriesidjson) - Delete an existing CustomerCategory.
* [deleteCustomerCategoriesIdCustomersJson](#deletecustomercategoriesidcustomersjson) - Delete Customers from an existing CustomerCategory.
* [getCustomerCategoriesJson](#getcustomercategoriesjson) - Retrieve all Customer Categories.
* [getCustomerCategoriesIdJson](#getcustomercategoriesidjson) - Retrieve a single CustomerCategory.
* [getCustomerCategoriesIdCustomersJson](#getcustomercategoriesidcustomersjson) - Retrieves the customers in a CustomerCategory.
* [postCustomerCategoriesJson](#postcustomercategoriesjson) - Create a new CustomerCategory.
* [postCustomerCategoriesIdCustomersJson](#postcustomercategoriesidcustomersjson) - Adds Customers to a CustomerCategory.
* [putCustomerCategoriesIdJson](#putcustomercategoriesidjson) - Update a CustomerCategory.

## deleteCustomerCategoriesIdJson

Delete an existing CustomerCategory.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCustomerCategoriesIdJsonRequest;
import org.openapis.openapi.models.operations.DeleteCustomerCategoriesIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteCustomerCategoriesIdJsonRequest req = new DeleteCustomerCategoriesIdJsonRequest("maiores", 120196, "corporis");            

            DeleteCustomerCategoriesIdJsonResponse res = sdk.customerCategories.deleteCustomerCategoriesIdJson(req);

            if (res.deleteCustomerCategoriesIdJSON200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteCustomerCategoriesIdCustomersJson

Delete Customers from an existing CustomerCategory.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCustomerCategoriesIdCustomersJsonRequest;
import org.openapis.openapi.models.operations.DeleteCustomerCategoriesIdCustomersJsonResponse;
import org.openapis.openapi.models.shared.CustomerToCustomerCategory;
import org.openapis.openapi.models.shared.CustomersToCustomerCategory;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteCustomerCategoriesIdCustomersJsonRequest req = new DeleteCustomerCategoriesIdCustomersJsonRequest(                new CustomersToCustomerCategory() {{
                                customers = new org.openapis.openapi.models.shared.CustomerToCustomerCategory[]{{
                                    add(new CustomerToCustomerCategory() {{
                                        email = "Birdie88@yahoo.com";
                                        id = 414263;
                                    }}),
                                    add(new CustomerToCustomerCategory() {{
                                        email = "Anissa_Emmerich56@hotmail.com";
                                        id = 865103;
                                    }}),
                                }};
                            }};, "modi", 508969, "rem");            

            DeleteCustomerCategoriesIdCustomersJsonResponse res = sdk.customerCategories.deleteCustomerCategoriesIdCustomersJson(req);

            if (res.deleteCustomerCategoriesIdCustomersJSON200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCustomerCategoriesJson

Retrieve all Customer Categories.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCustomerCategoriesJsonRequest;
import org.openapis.openapi.models.operations.GetCustomerCategoriesJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCustomerCategoriesJsonRequest req = new GetCustomerCategoriesJsonRequest("voluptates", "quasi") {{
                limit = 921158L;
                page = 575947L;
            }};            

            GetCustomerCategoriesJsonResponse res = sdk.customerCategories.getCustomerCategoriesJson(req);

            if (res.customerCategories != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCustomerCategoriesIdJson

Retrieve a single CustomerCategory.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCustomerCategoriesIdJsonRequest;
import org.openapis.openapi.models.operations.GetCustomerCategoriesIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCustomerCategoriesIdJsonRequest req = new GetCustomerCategoriesIdJsonRequest("veritatis", 929297, "incidunt");            

            GetCustomerCategoriesIdJsonResponse res = sdk.customerCategories.getCustomerCategoriesIdJson(req);

            if (res.customerCategory != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCustomerCategoriesIdCustomersJson

Retrieves the customers in a CustomerCategory.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCustomerCategoriesIdCustomersJsonRequest;
import org.openapis.openapi.models.operations.GetCustomerCategoriesIdCustomersJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCustomerCategoriesIdCustomersJsonRequest req = new GetCustomerCategoriesIdCustomersJsonRequest("enim", 9356, "est");            

            GetCustomerCategoriesIdCustomersJsonResponse res = sdk.customerCategories.getCustomerCategoriesIdCustomersJson(req);

            if (res.customers != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCustomerCategoriesJson

Create a new CustomerCategory.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostCustomerCategoriesJsonRequest;
import org.openapis.openapi.models.operations.PostCustomerCategoriesJsonResponse;
import org.openapis.openapi.models.shared.CustomerCategoryEdit;
import org.openapis.openapi.models.shared.CustomerCategoryEditFields;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostCustomerCategoriesJsonRequest req = new PostCustomerCategoriesJsonRequest(                new CustomerCategoryEdit() {{
                                category = new CustomerCategoryEditFields() {{
                                    name = "Benjamin O'Connell";
                                }};;
                            }};, "labore", "modi");            

            PostCustomerCategoriesJsonResponse res = sdk.customerCategories.postCustomerCategoriesJson(req);

            if (res.customerCategory != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCustomerCategoriesIdCustomersJson

Adds Customers to a CustomerCategory.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostCustomerCategoriesIdCustomersJsonRequest;
import org.openapis.openapi.models.operations.PostCustomerCategoriesIdCustomersJsonResponse;
import org.openapis.openapi.models.shared.CustomerToCustomerCategory;
import org.openapis.openapi.models.shared.CustomersToCustomerCategory;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostCustomerCategoriesIdCustomersJsonRequest req = new PostCustomerCategoriesIdCustomersJsonRequest(                new CustomersToCustomerCategory() {{
                                customers = new org.openapis.openapi.models.shared.CustomerToCustomerCategory[]{{
                                    add(new CustomerToCustomerCategory() {{
                                        email = "Kyler16@yahoo.com";
                                        id = 828940;
                                    }}),
                                }};
                            }};, "ipsam", 4695, "fugit");            

            PostCustomerCategoriesIdCustomersJsonResponse res = sdk.customerCategories.postCustomerCategoriesIdCustomersJson(req);

            if (res.customers != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putCustomerCategoriesIdJson

Update a CustomerCategory.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutCustomerCategoriesIdJsonRequest;
import org.openapis.openapi.models.operations.PutCustomerCategoriesIdJsonResponse;
import org.openapis.openapi.models.shared.CustomerCategoryEdit;
import org.openapis.openapi.models.shared.CustomerCategoryEditFields;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutCustomerCategoriesIdJsonRequest req = new PutCustomerCategoriesIdJsonRequest(                new CustomerCategoryEdit() {{
                                category = new CustomerCategoryEditFields() {{
                                    name = "Marshall Glover";
                                }};;
                            }};, "labore", 962189, "eum");            

            PutCustomerCategoriesIdJsonResponse res = sdk.customerCategories.putCustomerCategoriesIdJson(req);

            if (res.customerCategory != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
