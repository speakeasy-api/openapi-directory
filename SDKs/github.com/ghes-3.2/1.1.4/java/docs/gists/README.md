# gists

## Overview

View, modify your gists.

### Available Operations

* [gistsCheckIsStarred](#gistscheckisstarred) - Check if a gist is starred
* [gistsCreate](#gistscreate) - Create a gist
* [gistsCreateComment](#gistscreatecomment) - Create a gist comment
* [gistsDelete](#gistsdelete) - Delete a gist
* [gistsDeleteComment](#gistsdeletecomment) - Delete a gist comment
* [gistsFork](#gistsfork) - Fork a gist
* [gistsGet](#gistsget) - Get a gist
* [gistsGetComment](#gistsgetcomment) - Get a gist comment
* [gistsGetRevision](#gistsgetrevision) - Get a gist revision
* [gistsList](#gistslist) - List gists for the authenticated user
* [gistsListComments](#gistslistcomments) - List gist comments
* [gistsListCommits](#gistslistcommits) - List gist commits
* [gistsListForUser](#gistslistforuser) - List gists for a user
* [gistsListForks](#gistslistforks) - List gist forks
* [gistsListPublic](#gistslistpublic) - List public gists
* [gistsListStarred](#gistsliststarred) - List starred gists
* [gistsStar](#gistsstar) - Star a gist
* [gistsUnstar](#gistsunstar) - Unstar a gist
* [gistsUpdate](#gistsupdate) - Update a gist
* [gistsUpdateComment](#gistsupdatecomment) - Update a gist comment

## gistsCheckIsStarred

Check if a gist is starred

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/gists#check-if-a-gist-is-starred>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GistsCheckIsStarredRequest;
import org.openapis.openapi.models.operations.GistsCheckIsStarredResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GistsCheckIsStarredRequest req = new GistsCheckIsStarredRequest("labore");            

            GistsCheckIsStarredResponse res = sdk.gists.gistsCheckIsStarred(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gistsCreate

Allows you to add a new gist with one or more files.

**Note:** Don't name your files "gistfile" with a numerical suffix. This is the format of the automatic naming scheme that Gist uses internally.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/gists#create-a-gist>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GistsCreateRequestBody;
import org.openapis.openapi.models.operations.GistsCreateRequestBodyFiles;
import org.openapis.openapi.models.operations.GistsCreateRequestBodyPublic2Enum;
import org.openapis.openapi.models.operations.GistsCreateResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GistsCreateRequestBody req = new GistsCreateRequestBody(                new java.util.HashMap<String, org.openapis.openapi.models.operations.GistsCreateRequestBodyFiles>() {{
                                put("facilis", new GistsCreateRequestBodyFiles("commodi") {{
                                    content = "cum";
                                }});
                                put("in", new GistsCreateRequestBodyFiles("reiciendis") {{
                                    content = "corporis";
                                }});
                                put("assumenda", new GistsCreateRequestBodyFiles("recusandae") {{
                                    content = "nemo";
                                }});
                                put("aliquid", new GistsCreateRequestBodyFiles("cum") {{
                                    content = "aperiam";
                                }});
                            }}) {{
                description = "Example Ruby script";
                public_ = true;
            }};            

            GistsCreateResponse res = sdk.gists.gistsCreate(req);

            if (res.gistSimple != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gistsCreateComment

Create a gist comment

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/gists#create-a-gist-comment>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GistsCreateCommentRequest;
import org.openapis.openapi.models.operations.GistsCreateCommentRequestBody;
import org.openapis.openapi.models.operations.GistsCreateCommentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GistsCreateCommentRequest req = new GistsCreateCommentRequest(                new GistsCreateCommentRequestBody("Body of the attachment");, "in");            

            GistsCreateCommentResponse res = sdk.gists.gistsCreateComment(req);

            if (res.gistComment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gistsDelete

Delete a gist

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/gists#delete-a-gist>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GistsDeleteRequest;
import org.openapis.openapi.models.operations.GistsDeleteResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GistsDeleteRequest req = new GistsDeleteRequest("exercitationem");            

            GistsDeleteResponse res = sdk.gists.gistsDelete(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gistsDeleteComment

Delete a gist comment

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/gists#delete-a-gist-comment>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GistsDeleteCommentRequest;
import org.openapis.openapi.models.operations.GistsDeleteCommentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GistsDeleteCommentRequest req = new GistsDeleteCommentRequest(937285L, "facere");            

            GistsDeleteCommentResponse res = sdk.gists.gistsDeleteComment(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gistsFork

Fork a gist

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/gists#fork-a-gist>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GistsForkRequest;
import org.openapis.openapi.models.operations.GistsForkResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GistsForkRequest req = new GistsForkRequest("numquam");            

            GistsForkResponse res = sdk.gists.gistsFork(req);

            if (res.baseGist != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gistsGet

Get a gist

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/gists#get-a-gist>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GistsGetRequest;
import org.openapis.openapi.models.operations.GistsGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GistsGetRequest req = new GistsGetRequest("doloribus");            

            GistsGetResponse res = sdk.gists.gistsGet(req);

            if (res.gistSimple != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gistsGetComment

Get a gist comment

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/gists#get-a-gist-comment>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GistsGetCommentRequest;
import org.openapis.openapi.models.operations.GistsGetCommentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GistsGetCommentRequest req = new GistsGetCommentRequest(381760L, "reiciendis");            

            GistsGetCommentResponse res = sdk.gists.gistsGetComment(req);

            if (res.gistComment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gistsGetRevision

Get a gist revision

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/gists#get-a-gist-revision>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GistsGetRevisionRequest;
import org.openapis.openapi.models.operations.GistsGetRevisionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GistsGetRevisionRequest req = new GistsGetRevisionRequest("quidem", "saepe");            

            GistsGetRevisionResponse res = sdk.gists.gistsGetRevision(req);

            if (res.gistSimple != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gistsList

Lists the authenticated user's gists or if called anonymously, this endpoint returns all public gists:

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/gists#list-gists-for-the-authenticated-user>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GistsListRequest;
import org.openapis.openapi.models.operations.GistsListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GistsListRequest req = new GistsListRequest() {{
                page = 897071L;
                perPage = 296556L;
                since = OffsetDateTime.parse("2022-01-03T21:58:53.395Z");
            }};            

            GistsListResponse res = sdk.gists.gistsList(req);

            if (res.baseGists != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gistsListComments

List gist comments

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/gists#list-gist-comments>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GistsListCommentsRequest;
import org.openapis.openapi.models.operations.GistsListCommentsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GistsListCommentsRequest req = new GistsListCommentsRequest("adipisci") {{
                page = 249420L;
                perPage = 228263L;
            }};            

            GistsListCommentsResponse res = sdk.gists.gistsListComments(req);

            if (res.gistComments != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gistsListCommits

List gist commits

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/gists#list-gist-commits>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GistsListCommitsRequest;
import org.openapis.openapi.models.operations.GistsListCommitsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GistsListCommitsRequest req = new GistsListCommitsRequest("beatae") {{
                page = 489509L;
                perPage = 950953L;
            }};            

            GistsListCommitsResponse res = sdk.gists.gistsListCommits(req);

            if (res.gistCommits != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gistsListForUser

Lists public gists for the specified user:

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/gists#list-gists-for-a-user>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GistsListForUserRequest;
import org.openapis.openapi.models.operations.GistsListForUserResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GistsListForUserRequest req = new GistsListForUserRequest("debitis") {{
                page = 233420L;
                perPage = 358107L;
                since = OffsetDateTime.parse("2022-03-25T18:38:24.627Z");
            }};            

            GistsListForUserResponse res = sdk.gists.gistsListForUser(req);

            if (res.baseGists != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gistsListForks

List gist forks

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/gists#list-gist-forks>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GistsListForksRequest;
import org.openapis.openapi.models.operations.GistsListForksResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GistsListForksRequest req = new GistsListForksRequest("ipsa") {{
                page = 916727L;
                perPage = 730709L;
            }};            

            GistsListForksResponse res = sdk.gists.gistsListForks(req);

            if (res.gistSimples != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gistsListPublic

List public gists sorted by most recently updated to least recently updated.

Note: With [pagination](https://docs.github.com/enterprise-server@3.2/rest/overview/resources-in-the-rest-api#pagination), you can fetch up to 3000 gists. For example, you can fetch 100 pages with 30 gists per page or 30 pages with 100 gists per page.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/gists#list-public-gists>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GistsListPublicRequest;
import org.openapis.openapi.models.operations.GistsListPublicResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GistsListPublicRequest req = new GistsListPublicRequest() {{
                page = 113816L;
                perPage = 881721L;
                since = OffsetDateTime.parse("2022-06-16T02:54:19.259Z");
            }};            

            GistsListPublicResponse res = sdk.gists.gistsListPublic(req);

            if (res.baseGists != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gistsListStarred

List the authenticated user's starred gists:

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/gists#list-starred-gists>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GistsListStarredRequest;
import org.openapis.openapi.models.operations.GistsListStarredResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GistsListStarredRequest req = new GistsListStarredRequest() {{
                page = 132815L;
                perPage = 379057L;
                since = OffsetDateTime.parse("2022-08-17T09:09:54.947Z");
            }};            

            GistsListStarredResponse res = sdk.gists.gistsListStarred(req);

            if (res.baseGists != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gistsStar

Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@3.2/rest/overview/resources-in-the-rest-api#http-verbs)."

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/gists#star-a-gist>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GistsStarRequest;
import org.openapis.openapi.models.operations.GistsStarResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GistsStarRequest req = new GistsStarRequest("minima");            

            GistsStarResponse res = sdk.gists.gistsStar(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gistsUnstar

Unstar a gist

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/gists#unstar-a-gist>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GistsUnstarRequest;
import org.openapis.openapi.models.operations.GistsUnstarResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GistsUnstarRequest req = new GistsUnstarRequest("nobis");            

            GistsUnstarResponse res = sdk.gists.gistsUnstar(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gistsUpdate

Allows you to update a gist's description and to update, delete, or rename gist files. Files from the previous version of the gist that aren't explicitly changed during an edit are unchanged.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/gists/#update-a-gist>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GistsUpdateRequest;
import org.openapis.openapi.models.operations.GistsUpdateRequestBody1;
import org.openapis.openapi.models.operations.GistsUpdateRequestBody1Files1;
import org.openapis.openapi.models.operations.GistsUpdateRequestBody1Files2;
import org.openapis.openapi.models.operations.GistsUpdateRequestBody1Files3;
import org.openapis.openapi.models.operations.GistsUpdateRequestBody2;
import org.openapis.openapi.models.operations.GistsUpdateRequestBody2Files1;
import org.openapis.openapi.models.operations.GistsUpdateRequestBody2Files2;
import org.openapis.openapi.models.operations.GistsUpdateRequestBody2Files3;
import org.openapis.openapi.models.operations.GistsUpdateResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GistsUpdateRequest req = new GistsUpdateRequest(                new GistsUpdateRequestBody2(                new java.util.HashMap<String, Object>() {{
                                                put("officiis", new GistsUpdateRequestBody2Files3() {{
                                                    content = "ullam";
                                                    filename = "adipisci";
                                                }});
                                                put("cum", new GistsUpdateRequestBody2Files2("nesciunt") {{
                                                    content = "quas";
                                                    filename = "hic";
                                                }});
                                            }}) {{
                                description = "Example Ruby script";
                                files = new java.util.HashMap<String, Object>() {{
                                    put("minus", new GistsUpdateRequestBody2Files1("dolore") {{
                                        content = "blanditiis";
                                        filename = "in";
                                    }});
                                }};
                            }}, "culpa");            

            GistsUpdateResponse res = sdk.gists.gistsUpdate(req);

            if (res.gistSimple != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gistsUpdateComment

Update a gist comment

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/gists#update-a-gist-comment>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GistsUpdateCommentRequest;
import org.openapis.openapi.models.operations.GistsUpdateCommentRequestBody;
import org.openapis.openapi.models.operations.GistsUpdateCommentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GistsUpdateCommentRequest req = new GistsUpdateCommentRequest(                new GistsUpdateCommentRequestBody("Body of the attachment");, 548519L, "pariatur");            

            GistsUpdateCommentResponse res = sdk.gists.gistsUpdateComment(req);

            if (res.gistComment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
