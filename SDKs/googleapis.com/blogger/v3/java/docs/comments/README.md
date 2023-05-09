# comments

### Available Operations

* [bloggerCommentsApprove](#bloggercommentsapprove) - Marks a comment as not spam by blog id, post id and comment id.
* [bloggerCommentsDelete](#bloggercommentsdelete) - Deletes a comment by blog id, post id and comment id.
* [bloggerCommentsGet](#bloggercommentsget) - Gets a comment by id.
* [bloggerCommentsList](#bloggercommentslist) - Lists comments.
* [bloggerCommentsListByBlog](#bloggercommentslistbyblog) - Lists comments by blog.
* [bloggerCommentsMarkAsSpam](#bloggercommentsmarkasspam) - Marks a comment as spam by blog id, post id and comment id.
* [bloggerCommentsRemoveContent](#bloggercommentsremovecontent) - Removes the content of a comment by blog id, post id and comment id.

## bloggerCommentsApprove

Marks a comment as not spam by blog id, post id and comment id.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BloggerCommentsApproveRequest;
import org.openapis.openapi.models.operations.BloggerCommentsApproveResponse;
import org.openapis.openapi.models.operations.BloggerCommentsApproveSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BloggerCommentsApproveRequest req = new BloggerCommentsApproveRequest("in", "corporis", "iste") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "saepe";
                alt = AltEnum.PROTO;
                callback = "architecto";
                fields = "ipsa";
                key = "reiciendis";
                oauthToken = "est";
                prettyPrint = false;
                quotaUser = "mollitia";
                uploadType = "laborum";
                uploadProtocol = "dolores";
            }};            

            BloggerCommentsApproveResponse res = sdk.comments.bloggerCommentsApprove(req, new BloggerCommentsApproveSecurity("dolorem", "corporis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.comment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bloggerCommentsDelete

Deletes a comment by blog id, post id and comment id.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BloggerCommentsDeleteRequest;
import org.openapis.openapi.models.operations.BloggerCommentsDeleteResponse;
import org.openapis.openapi.models.operations.BloggerCommentsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BloggerCommentsDeleteRequest req = new BloggerCommentsDeleteRequest("explicabo", "nobis", "enim") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "nemo";
                alt = AltEnum.JSON;
                callback = "excepturi";
                fields = "accusantium";
                key = "iure";
                oauthToken = "culpa";
                prettyPrint = false;
                quotaUser = "doloribus";
                uploadType = "sapiente";
                uploadProtocol = "architecto";
            }};            

            BloggerCommentsDeleteResponse res = sdk.comments.bloggerCommentsDelete(req, new BloggerCommentsDeleteSecurity("mollitia", "dolorem") {{
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

## bloggerCommentsGet

Gets a comment by id.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BloggerCommentsGetRequest;
import org.openapis.openapi.models.operations.BloggerCommentsGetResponse;
import org.openapis.openapi.models.operations.BloggerCommentsGetSecurity;
import org.openapis.openapi.models.operations.BloggerCommentsGetSecurityOption1;
import org.openapis.openapi.models.operations.BloggerCommentsGetSecurityOption2;
import org.openapis.openapi.models.operations.BloggerCommentsGetViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BloggerCommentsGetRequest req = new BloggerCommentsGetRequest("culpa", "consequuntur", "repellat") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "occaecati";
                alt = AltEnum.JSON;
                callback = "commodi";
                fields = "quam";
                key = "molestiae";
                oauthToken = "velit";
                prettyPrint = false;
                quotaUser = "error";
                uploadType = "quia";
                uploadProtocol = "quis";
                view = BloggerCommentsGetViewEnum.VIEW_TYPE_UNSPECIFIED;
            }};            

            BloggerCommentsGetResponse res = sdk.comments.bloggerCommentsGet(req, new BloggerCommentsGetSecurity() {{
                option1 = new BloggerCommentsGetSecurityOption1("laborum", "animi") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.comment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bloggerCommentsList

Lists comments.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BloggerCommentsListRequest;
import org.openapis.openapi.models.operations.BloggerCommentsListResponse;
import org.openapis.openapi.models.operations.BloggerCommentsListSecurity;
import org.openapis.openapi.models.operations.BloggerCommentsListSecurityOption1;
import org.openapis.openapi.models.operations.BloggerCommentsListSecurityOption2;
import org.openapis.openapi.models.operations.BloggerCommentsListStatusEnum;
import org.openapis.openapi.models.operations.BloggerCommentsListViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BloggerCommentsListRequest req = new BloggerCommentsListRequest("enim", "odit") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "sequi";
                alt = AltEnum.PROTO;
                callback = "ipsam";
                endDate = "id";
                fetchBodies = false;
                fields = "possimus";
                key = "aut";
                maxResults = 97101L;
                oauthToken = "error";
                pageToken = "temporibus";
                prettyPrint = false;
                quotaUser = "laborum";
                startDate = "quasi";
                status = BloggerCommentsListStatusEnum.SPAM;
                uploadType = "voluptatibus";
                uploadProtocol = "vero";
                view = BloggerCommentsListViewEnum.READER;
            }};            

            BloggerCommentsListResponse res = sdk.comments.bloggerCommentsList(req, new BloggerCommentsListSecurity() {{
                option1 = new BloggerCommentsListSecurityOption1("praesentium", "voluptatibus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.commentList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bloggerCommentsListByBlog

Lists comments by blog.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BloggerCommentsListByBlogRequest;
import org.openapis.openapi.models.operations.BloggerCommentsListByBlogResponse;
import org.openapis.openapi.models.operations.BloggerCommentsListByBlogSecurity;
import org.openapis.openapi.models.operations.BloggerCommentsListByBlogSecurityOption1;
import org.openapis.openapi.models.operations.BloggerCommentsListByBlogSecurityOption2;
import org.openapis.openapi.models.operations.BloggerCommentsListByBlogStatusEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BloggerCommentsListByBlogRequest req = new BloggerCommentsListByBlogRequest("ipsa") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "voluptate";
                alt = AltEnum.PROTO;
                callback = "perferendis";
                endDate = "doloremque";
                fetchBodies = false;
                fields = "reprehenderit";
                key = "ut";
                maxResults = 979587L;
                oauthToken = "dicta";
                pageToken = "corporis";
                prettyPrint = false;
                quotaUser = "dolore";
                startDate = "iusto";
                status = new org.openapis.openapi.models.operations.BloggerCommentsListByBlogStatusEnum[]{{
                    add(BloggerCommentsListByBlogStatusEnum.PENDING),
                }};
                uploadType = "enim";
                uploadProtocol = "accusamus";
            }};            

            BloggerCommentsListByBlogResponse res = sdk.comments.bloggerCommentsListByBlog(req, new BloggerCommentsListByBlogSecurity() {{
                option1 = new BloggerCommentsListByBlogSecurityOption1("commodi", "repudiandae") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.commentList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bloggerCommentsMarkAsSpam

Marks a comment as spam by blog id, post id and comment id.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BloggerCommentsMarkAsSpamRequest;
import org.openapis.openapi.models.operations.BloggerCommentsMarkAsSpamResponse;
import org.openapis.openapi.models.operations.BloggerCommentsMarkAsSpamSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BloggerCommentsMarkAsSpamRequest req = new BloggerCommentsMarkAsSpamRequest("quae", "ipsum", "quidem") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "excepturi";
                alt = AltEnum.PROTO;
                callback = "modi";
                fields = "praesentium";
                key = "rem";
                oauthToken = "voluptates";
                prettyPrint = false;
                quotaUser = "quasi";
                uploadType = "repudiandae";
                uploadProtocol = "sint";
            }};            

            BloggerCommentsMarkAsSpamResponse res = sdk.comments.bloggerCommentsMarkAsSpam(req, new BloggerCommentsMarkAsSpamSecurity("veritatis", "itaque") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.comment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bloggerCommentsRemoveContent

Removes the content of a comment by blog id, post id and comment id.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BloggerCommentsRemoveContentRequest;
import org.openapis.openapi.models.operations.BloggerCommentsRemoveContentResponse;
import org.openapis.openapi.models.operations.BloggerCommentsRemoveContentSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BloggerCommentsRemoveContentRequest req = new BloggerCommentsRemoveContentRequest("incidunt", "enim", "consequatur") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quibusdam";
                alt = AltEnum.JSON;
                callback = "deserunt";
                fields = "distinctio";
                key = "quibusdam";
                oauthToken = "labore";
                prettyPrint = false;
                quotaUser = "modi";
                uploadType = "qui";
                uploadProtocol = "aliquid";
            }};            

            BloggerCommentsRemoveContentResponse res = sdk.comments.bloggerCommentsRemoveContent(req, new BloggerCommentsRemoveContentSecurity("cupiditate", "quos") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.comment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
