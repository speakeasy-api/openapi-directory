# pages

### Available Operations

* [deletePagesIdJson](#deletepagesidjson) - Delete an existing Page.
* [getPagesJson](#getpagesjson) - Retrieve all Pages.
* [getPagesCountJson](#getpagescountjson) - Count all Pages.
* [getPagesIdJson](#getpagesidjson) - Retrieve a single Page by id.
* [postPagesJson](#postpagesjson) - Create a new Page.
* [putPagesIdJson](#putpagesidjson) - Update a Page.

## deletePagesIdJson

Delete an existing Page.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletePagesIdJsonRequest;
import org.openapis.openapi.models.operations.DeletePagesIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeletePagesIdJsonRequest req = new DeletePagesIdJsonRequest("cumque", 746994, "nobis");            

            DeletePagesIdJsonResponse res = sdk.pages.deletePagesIdJson(req);

            if (res.deletePagesIdJSON200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPagesJson

Retrieve all Pages.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPagesJsonRequest;
import org.openapis.openapi.models.operations.GetPagesJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPagesJsonRequest req = new GetPagesJsonRequest("et", "saepe") {{
                limit = 217450L;
                page = 83422L;
            }};            

            GetPagesJsonResponse res = sdk.pages.getPagesJson(req);

            if (res.pages != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPagesCountJson

Count all Pages.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPagesCountJsonRequest;
import org.openapis.openapi.models.operations.GetPagesCountJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPagesCountJsonRequest req = new GetPagesCountJsonRequest("nobis", "quos");            

            GetPagesCountJsonResponse res = sdk.pages.getPagesCountJson(req);

            if (res.count != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPagesIdJson

Retrieve a single Page by id.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPagesIdJsonRequest;
import org.openapis.openapi.models.operations.GetPagesIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPagesIdJsonRequest req = new GetPagesIdJsonRequest("tempore", 584476, "aperiam");            

            GetPagesIdJsonResponse res = sdk.pages.getPagesIdJson(req);

            if (res.page != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPagesJson

Create a new Page.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostPagesJsonRequest;
import org.openapis.openapi.models.operations.PostPagesJsonResponse;
import org.openapis.openapi.models.shared.PageCategory;
import org.openapis.openapi.models.shared.PageModify;
import org.openapis.openapi.models.shared.PageModifyFields;
import org.openapis.openapi.models.shared.PageModifyFieldsImage;
import org.openapis.openapi.models.shared.PageModifyFieldsStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostPagesJsonRequest req = new PostPagesJsonRequest(                new PageModify() {{
                                page = new PageModifyFields() {{
                                    body = "delectus";
                                    categories = new org.openapis.openapi.models.shared.PageCategory[]{{
                                        add(new PageCategory() {{
                                            id = 292147L;
                                            name = "Mr. Josephine Pagac V";
                                            position = 929530L;
                                        }}),
                                    }};
                                    image = new PageModifyFieldsImage() {{
                                        id = 9240L;
                                        url = "est";
                                    }};;
                                    metaDescription = "repellendus";
                                    pageTitle = "porro";
                                    permalink = "doloribus";
                                    status = PageModifyFieldsStatusEnum.PUBLIC_;
                                    template = 703495L;
                                    title = "Ms.";
                                }};;
                            }};, "qui", "quae");            

            PostPagesJsonResponse res = sdk.pages.postPagesJson(req);

            if (res.page != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putPagesIdJson

Update a Page.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutPagesIdJsonRequest;
import org.openapis.openapi.models.operations.PutPagesIdJsonResponse;
import org.openapis.openapi.models.shared.PageCategory;
import org.openapis.openapi.models.shared.PageModify;
import org.openapis.openapi.models.shared.PageModifyFields;
import org.openapis.openapi.models.shared.PageModifyFieldsImage;
import org.openapis.openapi.models.shared.PageModifyFieldsStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutPagesIdJsonRequest req = new PutPagesIdJsonRequest(                new PageModify() {{
                                page = new PageModifyFields() {{
                                    body = "laudantium";
                                    categories = new org.openapis.openapi.models.shared.PageCategory[]{{
                                        add(new PageCategory() {{
                                            id = 580447L;
                                            name = "Wilson Terry";
                                            position = 218403L;
                                        }}),
                                        add(new PageCategory() {{
                                            id = 961571L;
                                            name = "Victoria Thiel";
                                            position = 941378L;
                                        }}),
                                    }};
                                    image = new PageModifyFieldsImage() {{
                                        id = 715561L;
                                        url = "quod";
                                    }};;
                                    metaDescription = "odio";
                                    pageTitle = "similique";
                                    permalink = "facilis";
                                    status = PageModifyFieldsStatusEnum.HIDDEN;
                                    template = 498140L;
                                    title = "Mrs.";
                                }};;
                            }};, "quibusdam", 848944, "sequi");            

            PutPagesIdJsonResponse res = sdk.pages.putPagesIdJson(req);

            if (res.page != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
