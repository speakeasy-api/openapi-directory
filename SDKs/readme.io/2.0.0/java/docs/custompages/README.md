# customPages

### Available Operations

* [createCustomPage](#createcustompage) - Create custom page
* [deleteCustomPage](#deletecustompage) - Delete custom page
* [getCustomPage](#getcustompage) - Get custom page
* [getCustomPages](#getcustompages) - Get custom pages
* [updateCustomPage](#updatecustompage) - Update custom page

## createCustomPage

Create a new custom page inside of this project

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateCustomPageResponse;
import org.openapis.openapi.models.operations.CreateCustomPageSecurity;
import org.openapis.openapi.models.shared.CustomPage;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CustomPage req = new CustomPage("officia") {{
                body = "occaecati";
                hidden = false;
                html = "fugit";
                htmlmode = false;
            }};            

            CreateCustomPageResponse res = sdk.customPages.createCustomPage(req, new CreateCustomPageSecurity("deleniti", "hic") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
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

## deleteCustomPage

Delete the custom page with this slug

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCustomPageRequest;
import org.openapis.openapi.models.operations.DeleteCustomPageResponse;
import org.openapis.openapi.models.operations.DeleteCustomPageSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteCustomPageRequest req = new DeleteCustomPageRequest("optio");            

            DeleteCustomPageResponse res = sdk.customPages.deleteCustomPage(req, new DeleteCustomPageSecurity("totam", "beatae") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
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

## getCustomPage

Returns the custom page with this slug

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCustomPageRequest;
import org.openapis.openapi.models.operations.GetCustomPageResponse;
import org.openapis.openapi.models.operations.GetCustomPageSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCustomPageRequest req = new GetCustomPageRequest("commodi");            

            GetCustomPageResponse res = sdk.customPages.getCustomPage(req, new GetCustomPageSecurity("molestiae", "modi") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
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

## getCustomPages

Returns a list of custom pages associated with the project API key

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCustomPagesRequest;
import org.openapis.openapi.models.operations.GetCustomPagesResponse;
import org.openapis.openapi.models.operations.GetCustomPagesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCustomPagesRequest req = new GetCustomPagesRequest() {{
                page = 186332L;
                perPage = 774234L;
            }};            

            GetCustomPagesResponse res = sdk.customPages.getCustomPages(req, new GetCustomPagesSecurity("cum", "esse") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
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

## updateCustomPage

Update a custom page with this slug

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateCustomPageRequest;
import org.openapis.openapi.models.operations.UpdateCustomPageResponse;
import org.openapis.openapi.models.operations.UpdateCustomPageSecurity;
import org.openapis.openapi.models.shared.CustomPage;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateCustomPageRequest req = new UpdateCustomPageRequest(                new CustomPage("ipsum") {{
                                body = "excepturi";
                                hidden = false;
                                html = "aspernatur";
                                htmlmode = false;
                            }};, "perferendis");            

            UpdateCustomPageResponse res = sdk.customPages.updateCustomPage(req, new UpdateCustomPageSecurity("ad", "natus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
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
