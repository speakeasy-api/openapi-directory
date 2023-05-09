# activity

### Available Operations

* [getActivities](#getactivities) - Monitor project activities
* [getActivity](#getactivity) - View an activity
* [getActivityComments](#getactivitycomments) - View activity comments
* [getComments](#getcomments) - View all project comments
* [getSalesActivities](#getsalesactivities) - Get sales activities for a project
* [insertSalesActivity](#insertsalesactivity) - Insert sales activity for a project
* [submitCommentJson](#submitcommentjson) - Submit comment to an activity
* [submitCommentMultipart](#submitcommentmultipart) - Submit comment to an activity

## getActivities

Get a list of real-time activities in the project, such as translation suggestion and translation approval.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetActivitiesRequest;
import org.openapis.openapi.models.operations.GetActivitiesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("unde") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetActivitiesRequest req = new GetActivitiesRequest(857946L) {{
                page = 544883L;
                perPage = 847252L;
            }};            

            GetActivitiesResponse res = sdk.activity.getActivities(req);

            if (res.activityList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getActivity

View the details of an activity in the project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetActivityRequest;
import org.openapis.openapi.models.operations.GetActivityResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vel") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetActivityRequest req = new GetActivityRequest(623564L, 645894L);            

            GetActivityResponse res = sdk.activity.getActivity(req);

            if (res.activity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getActivityComments

View a list of comments added to this activity.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetActivityCommentsRequest;
import org.openapis.openapi.models.operations.GetActivityCommentsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetActivityCommentsRequest req = new GetActivityCommentsRequest(437587L, 297534L);            

            GetActivityCommentsResponse res = sdk.activity.getActivityComments(req);

            if (res.commentList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getComments

View a list of activity comments in the project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCommentsRequest;
import org.openapis.openapi.models.operations.GetCommentsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("debitis") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetCommentsRequest req = new GetCommentsRequest(56713L) {{
                page = 963663L;
                perPage = 272656L;
            }};            

            GetCommentsResponse res = sdk.activity.getComments(req);

            if (res.commentList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSalesActivities

Get sales activities for a project

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSalesActivitiesRequest;
import org.openapis.openapi.models.operations.GetSalesActivitiesResponse;
import org.openapis.openapi.models.shared.SalesActivityTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetSalesActivitiesRequest req = new GetSalesActivitiesRequest(477665L) {{
                excludeOwner = "minus";
                type = SalesActivityTypeEnum.TASK;
            }};            

            GetSalesActivitiesResponse res = sdk.activity.getSalesActivities(req);

            if (res.salesActivities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## insertSalesActivity

Insert sales activity for a project

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InsertSalesActivityRequest;
import org.openapis.openapi.models.operations.InsertSalesActivityResponse;
import org.openapis.openapi.models.shared.NewSalesActivity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatum") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            InsertSalesActivityRequest req = new InsertSalesActivityRequest(479977L) {{
                newSalesActivity = new NewSalesActivity() {{
                    subject = "excepturi";
                    timestamp = 392785L;
                    type = "recusandae";
                }};;
            }};            

            InsertSalesActivityResponse res = sdk.activity.insertSalesActivity(req);

            if (res.operationStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## submitCommentJson

Submit a comment to an activity in the project, such as translation or editing.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SubmitCommentJsonRequest;
import org.openapis.openapi.models.operations.SubmitCommentJsonResponse;
import org.openapis.openapi.models.shared.Comment;
import org.openapis.openapi.models.shared.CommentLinks;
import org.openapis.openapi.models.shared.Href;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("temporibus") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            SubmitCommentJsonRequest req = new SubmitCommentJsonRequest(71036L, 337396L) {{
                comment = new Comment("veritatis") {{
                    commentedAt = 648172L;
                    id = 20218L;
                    links = new CommentLinks() {{
                        activity = new Href() {{
                            href = "ipsam";
                        }};;
                        project = new Href() {{
                            href = "repellendus";
                        }};;
                        self = new Href() {{
                            href = "sapiente";
                        }};;
                    }};;
                }};;
            }};            

            SubmitCommentJsonResponse res = sdk.activity.submitCommentJson(req);

            if (res.comment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## submitCommentMultipart

Submit a comment to an activity in the project, such as translation or editing.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SubmitCommentMultipartRequest;
import org.openapis.openapi.models.operations.SubmitCommentMultipartResponse;
import org.openapis.openapi.models.shared.Comment1;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            SubmitCommentMultipartRequest req = new SubmitCommentMultipartRequest(140350L, 870013L) {{
                comment1 = new Comment1("at") {{
                    commentedAt = 978619L;
                    id = 473608L;
                    links = "quod";
                }};;
            }};            

            SubmitCommentMultipartResponse res = sdk.activity.submitCommentMultipart(req);

            if (res.comment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
