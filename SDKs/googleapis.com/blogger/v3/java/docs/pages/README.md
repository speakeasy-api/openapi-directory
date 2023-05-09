# pages

### Available Operations

* [bloggerPagesDelete](#bloggerpagesdelete) - Deletes a page by blog id and page id.
* [bloggerPagesGet](#bloggerpagesget) - Gets a page by blog id and page id.
* [bloggerPagesInsert](#bloggerpagesinsert) - Inserts a page.
* [bloggerPagesList](#bloggerpageslist) - Lists pages.
* [bloggerPagesPatch](#bloggerpagespatch) - Patches a page.
* [bloggerPagesPublish](#bloggerpagespublish) - Publishes a page.
* [bloggerPagesRevert](#bloggerpagesrevert) - Reverts a published or scheduled page to draft state.
* [bloggerPagesUpdate](#bloggerpagesupdate) - Updates a page by blog id and page id.

## bloggerPagesDelete

Deletes a page by blog id and page id.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BloggerPagesDeleteRequest;
import org.openapis.openapi.models.operations.BloggerPagesDeleteResponse;
import org.openapis.openapi.models.operations.BloggerPagesDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BloggerPagesDeleteRequest req = new BloggerPagesDeleteRequest("aliquid", "provident") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "sint";
                alt = AltEnum.MEDIA;
                callback = "dolor";
                fields = "debitis";
                key = "a";
                oauthToken = "dolorum";
                prettyPrint = false;
                quotaUser = "in";
                uploadType = "in";
                uploadProtocol = "illum";
                useTrash = false;
            }};            

            BloggerPagesDeleteResponse res = sdk.pages.bloggerPagesDelete(req, new BloggerPagesDeleteSecurity("maiores", "rerum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## bloggerPagesGet

Gets a page by blog id and page id.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BloggerPagesGetRequest;
import org.openapis.openapi.models.operations.BloggerPagesGetResponse;
import org.openapis.openapi.models.operations.BloggerPagesGetSecurity;
import org.openapis.openapi.models.operations.BloggerPagesGetSecurityOption1;
import org.openapis.openapi.models.operations.BloggerPagesGetSecurityOption2;
import org.openapis.openapi.models.operations.BloggerPagesGetViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BloggerPagesGetRequest req = new BloggerPagesGetRequest("dicta", "magnam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "facere";
                alt = AltEnum.MEDIA;
                callback = "aliquid";
                fields = "laborum";
                key = "accusamus";
                oauthToken = "non";
                prettyPrint = false;
                quotaUser = "occaecati";
                uploadType = "enim";
                uploadProtocol = "accusamus";
                view = BloggerPagesGetViewEnum.ADMIN;
            }};            

            BloggerPagesGetResponse res = sdk.pages.bloggerPagesGet(req, new BloggerPagesGetSecurity() {{
                option1 = new BloggerPagesGetSecurityOption1("quidem", "provident") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.page != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bloggerPagesInsert

Inserts a page.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BloggerPagesInsertRequest;
import org.openapis.openapi.models.operations.BloggerPagesInsertResponse;
import org.openapis.openapi.models.operations.BloggerPagesInsertSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Page;
import org.openapis.openapi.models.shared.PageAuthor;
import org.openapis.openapi.models.shared.PageAuthorImage;
import org.openapis.openapi.models.shared.PageBlog;
import org.openapis.openapi.models.shared.PageStatusEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BloggerPagesInsertRequest req = new BloggerPagesInsertRequest("nam") {{
                dollarXgafv = XgafvEnum.TWO;
                page = new Page() {{
                    author = new PageAuthor() {{
                        displayName = "blanditiis";
                        id = "8f3a6699-7074-4ba4-869b-6e2141959890";
                        image = new PageAuthorImage() {{
                            url = "mollitia";
                        }};;
                        url = "reiciendis";
                    }};;
                    blog = new PageBlog() {{
                        id = "a563e251-6fe4-4c8b-b11e-5b7fd2ed0289";
                    }};;
                    content = "magni";
                    etag = "sunt";
                    id = "cddc6926-01fb-4576-b0d5-f0d30c5fbb25";
                    kind = "totam";
                    published = "dignissimos";
                    selfLink = "eaque";
                    status = PageStatusEnum.DRAFT;
                    title = "Mr.";
                    trashed = "eos";
                    updated = "perferendis";
                    url = "dolores";
                }};;
                accessToken = "minus";
                alt = AltEnum.MEDIA;
                callback = "dolor";
                fields = "vero";
                isDraft = false;
                key = "nostrum";
                oauthToken = "hic";
                prettyPrint = false;
                quotaUser = "recusandae";
                uploadType = "omnis";
                uploadProtocol = "facilis";
            }};            

            BloggerPagesInsertResponse res = sdk.pages.bloggerPagesInsert(req, new BloggerPagesInsertSecurity("perspiciatis", "voluptatem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.page != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bloggerPagesList

Lists pages.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BloggerPagesListRequest;
import org.openapis.openapi.models.operations.BloggerPagesListResponse;
import org.openapis.openapi.models.operations.BloggerPagesListSecurity;
import org.openapis.openapi.models.operations.BloggerPagesListSecurityOption1;
import org.openapis.openapi.models.operations.BloggerPagesListSecurityOption2;
import org.openapis.openapi.models.operations.BloggerPagesListStatusEnum;
import org.openapis.openapi.models.operations.BloggerPagesListViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BloggerPagesListRequest req = new BloggerPagesListRequest("porro") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "blanditiis";
                alt = AltEnum.MEDIA;
                callback = "eaque";
                fetchBodies = false;
                fields = "occaecati";
                key = "rerum";
                maxResults = 237893L;
                oauthToken = "asperiores";
                pageToken = "earum";
                prettyPrint = false;
                quotaUser = "modi";
                status = new org.openapis.openapi.models.operations.BloggerPagesListStatusEnum[]{{
                    add(BloggerPagesListStatusEnum.SOFT_TRASHED),
                    add(BloggerPagesListStatusEnum.DRAFT),
                    add(BloggerPagesListStatusEnum.SOFT_TRASHED),
                }};
                uploadType = "provident";
                uploadProtocol = "nobis";
                view = BloggerPagesListViewEnum.AUTHOR;
            }};            

            BloggerPagesListResponse res = sdk.pages.bloggerPagesList(req, new BloggerPagesListSecurity() {{
                option1 = new BloggerPagesListSecurityOption1("delectus", "quaerat") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.pageList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bloggerPagesPatch

Patches a page.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BloggerPagesPatchRequest;
import org.openapis.openapi.models.operations.BloggerPagesPatchResponse;
import org.openapis.openapi.models.operations.BloggerPagesPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Page;
import org.openapis.openapi.models.shared.PageAuthor;
import org.openapis.openapi.models.shared.PageAuthorImage;
import org.openapis.openapi.models.shared.PageBlog;
import org.openapis.openapi.models.shared.PageStatusEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BloggerPagesPatchRequest req = new BloggerPagesPatchRequest("quos", "aliquid") {{
                dollarXgafv = XgafvEnum.ONE;
                page = new Page() {{
                    author = new PageAuthor() {{
                        displayName = "dolorem";
                        id = "323f9b77-f3a4-4100-a74e-bf69280d1ba7";
                        image = new PageAuthorImage() {{
                            url = "voluptate";
                        }};;
                        url = "dolorum";
                    }};;
                    blog = new PageBlog() {{
                        id = "89ebf737-ae42-403c-a5e6-a95d8a0d446c";
                    }};;
                    content = "officiis";
                    etag = "qui";
                    id = "af7a73cf-3be4-453f-870b-326b5a73429c";
                    kind = "pariatur";
                    published = "soluta";
                    selfLink = "dicta";
                    status = PageStatusEnum.SOFT_TRASHED;
                    title = "Ms.";
                    trashed = "incidunt";
                    updated = "aspernatur";
                    url = "dolores";
                }};;
                accessToken = "distinctio";
                alt = AltEnum.PROTO;
                callback = "aliquid";
                fields = "quam";
                key = "molestias";
                oauthToken = "temporibus";
                prettyPrint = false;
                publish = false;
                quotaUser = "qui";
                revert = false;
                uploadType = "neque";
                uploadProtocol = "fugit";
            }};            

            BloggerPagesPatchResponse res = sdk.pages.bloggerPagesPatch(req, new BloggerPagesPatchSecurity("magni", "odio") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.page != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bloggerPagesPublish

Publishes a page.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BloggerPagesPublishRequest;
import org.openapis.openapi.models.operations.BloggerPagesPublishResponse;
import org.openapis.openapi.models.operations.BloggerPagesPublishSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BloggerPagesPublishRequest req = new BloggerPagesPublishRequest("sunt", "ullam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "hic";
                alt = AltEnum.JSON;
                callback = "cumque";
                fields = "soluta";
                key = "nobis";
                oauthToken = "et";
                prettyPrint = false;
                quotaUser = "saepe";
                uploadType = "ipsum";
                uploadProtocol = "veritatis";
            }};            

            BloggerPagesPublishResponse res = sdk.pages.bloggerPagesPublish(req, new BloggerPagesPublishSecurity("nobis", "quos") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.page != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bloggerPagesRevert

Reverts a published or scheduled page to draft state.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BloggerPagesRevertRequest;
import org.openapis.openapi.models.operations.BloggerPagesRevertResponse;
import org.openapis.openapi.models.operations.BloggerPagesRevertSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BloggerPagesRevertRequest req = new BloggerPagesRevertRequest("tempore", "cupiditate") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "delectus";
                alt = AltEnum.JSON;
                callback = "dolore";
                fields = "labore";
                key = "adipisci";
                oauthToken = "dolorum";
                prettyPrint = false;
                quotaUser = "architecto";
                uploadType = "quae";
                uploadProtocol = "aut";
            }};            

            BloggerPagesRevertResponse res = sdk.pages.bloggerPagesRevert(req, new BloggerPagesRevertSecurity("quas", "itaque") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.page != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bloggerPagesUpdate

Updates a page by blog id and page id.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BloggerPagesUpdateRequest;
import org.openapis.openapi.models.operations.BloggerPagesUpdateResponse;
import org.openapis.openapi.models.operations.BloggerPagesUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Page;
import org.openapis.openapi.models.shared.PageAuthor;
import org.openapis.openapi.models.shared.PageAuthorImage;
import org.openapis.openapi.models.shared.PageBlog;
import org.openapis.openapi.models.shared.PageStatusEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BloggerPagesUpdateRequest req = new BloggerPagesUpdateRequest("consequatur", "est") {{
                dollarXgafv = XgafvEnum.TWO;
                page = new Page() {{
                    author = new PageAuthor() {{
                        displayName = "porro";
                        id = "f4b92187-9fce-4953-b73e-f7fbc7abd74d";
                        image = new PageAuthorImage() {{
                            url = "illum";
                        }};;
                        url = "sequi";
                    }};;
                    blog = new PageBlog() {{
                        id = "9c0f5d2c-ff7c-470a-8562-6d436813f16d";
                    }};;
                    content = "excepturi";
                    etag = "voluptatibus";
                    id = "5fce6c55-6146-4c3e-a50f-b008c42e141a";
                    kind = "laborum";
                    published = "placeat";
                    selfLink = "velit";
                    status = PageStatusEnum.DRAFT;
                    title = "Ms.";
                    trashed = "nobis";
                    updated = "quas";
                    url = "assumenda";
                }};;
                accessToken = "nulla";
                alt = AltEnum.MEDIA;
                callback = "libero";
                fields = "quasi";
                key = "tempora";
                oauthToken = "numquam";
                prettyPrint = false;
                publish = false;
                quotaUser = "explicabo";
                revert = false;
                uploadType = "provident";
                uploadProtocol = "ipsa";
            }};            

            BloggerPagesUpdateResponse res = sdk.pages.bloggerPagesUpdate(req, new BloggerPagesUpdateSecurity("molestiae", "magnam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.page != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
