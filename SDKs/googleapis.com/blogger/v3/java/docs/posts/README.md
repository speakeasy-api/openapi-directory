# posts

### Available Operations

* [bloggerPostsDelete](#bloggerpostsdelete) - Deletes a post by blog id and post id.
* [bloggerPostsGet](#bloggerpostsget) - Gets a post by blog id and post id
* [bloggerPostsGetByPath](#bloggerpostsgetbypath) - Gets a post by path.
* [bloggerPostsInsert](#bloggerpostsinsert) - Inserts a post.
* [bloggerPostsList](#bloggerpostslist) - Lists posts.
* [bloggerPostsPatch](#bloggerpostspatch) - Patches a post.
* [bloggerPostsPublish](#bloggerpostspublish) - Publishes a post.
* [bloggerPostsRevert](#bloggerpostsrevert) - Reverts a published or scheduled post to draft state.
* [bloggerPostsSearch](#bloggerpostssearch) - Searches for posts matching given query terms in the specified blog.
* [bloggerPostsUpdate](#bloggerpostsupdate) - Updates a post by blog id and post id.

## bloggerPostsDelete

Deletes a post by blog id and post id.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BloggerPostsDeleteRequest;
import org.openapis.openapi.models.operations.BloggerPostsDeleteResponse;
import org.openapis.openapi.models.operations.BloggerPostsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BloggerPostsDeleteRequest req = new BloggerPostsDeleteRequest("dignissimos", "inventore") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "totam";
                alt = AltEnum.PROTO;
                callback = "aliquam";
                fields = "odio";
                key = "occaecati";
                oauthToken = "commodi";
                prettyPrint = false;
                quotaUser = "sapiente";
                uploadType = "dolores";
                uploadProtocol = "deserunt";
                useTrash = false;
            }};            

            BloggerPostsDeleteResponse res = sdk.posts.bloggerPostsDelete(req, new BloggerPostsDeleteSecurity("molestiae", "accusantium") {{
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

## bloggerPostsGet

Gets a post by blog id and post id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BloggerPostsGetRequest;
import org.openapis.openapi.models.operations.BloggerPostsGetResponse;
import org.openapis.openapi.models.operations.BloggerPostsGetSecurity;
import org.openapis.openapi.models.operations.BloggerPostsGetSecurityOption1;
import org.openapis.openapi.models.operations.BloggerPostsGetSecurityOption2;
import org.openapis.openapi.models.operations.BloggerPostsGetViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BloggerPostsGetRequest req = new BloggerPostsGetRequest("porro", "eum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "praesentium";
                alt = AltEnum.JSON;
                callback = "deleniti";
                fetchBody = false;
                fetchImages = false;
                fields = "fugit";
                key = "fuga";
                maxComments = 649463L;
                oauthToken = "incidunt";
                prettyPrint = false;
                quotaUser = "atque";
                uploadType = "explicabo";
                uploadProtocol = "minima";
                view = BloggerPostsGetViewEnum.READER;
            }};            

            BloggerPostsGetResponse res = sdk.posts.bloggerPostsGet(req, new BloggerPostsGetSecurity() {{
                option1 = new BloggerPostsGetSecurityOption1("fugit", "sapiente") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.post != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bloggerPostsGetByPath

Gets a post by path.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BloggerPostsGetByPathRequest;
import org.openapis.openapi.models.operations.BloggerPostsGetByPathResponse;
import org.openapis.openapi.models.operations.BloggerPostsGetByPathSecurity;
import org.openapis.openapi.models.operations.BloggerPostsGetByPathSecurityOption1;
import org.openapis.openapi.models.operations.BloggerPostsGetByPathSecurityOption2;
import org.openapis.openapi.models.operations.BloggerPostsGetByPathViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BloggerPostsGetByPathRequest req = new BloggerPostsGetByPathRequest("consequuntur", "ratione") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "saepe";
                alt = AltEnum.MEDIA;
                callback = "atque";
                fields = "et";
                key = "esse";
                maxComments = 910545L;
                oauthToken = "accusamus";
                prettyPrint = false;
                quotaUser = "veritatis";
                uploadType = "esse";
                uploadProtocol = "quod";
                view = BloggerPostsGetByPathViewEnum.AUTHOR;
            }};            

            BloggerPostsGetByPathResponse res = sdk.posts.bloggerPostsGetByPath(req, new BloggerPostsGetByPathSecurity() {{
                option1 = new BloggerPostsGetByPathSecurityOption1("vero", "aliquid") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.post != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bloggerPostsInsert

Inserts a post.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BloggerPostsInsertRequest;
import org.openapis.openapi.models.operations.BloggerPostsInsertResponse;
import org.openapis.openapi.models.operations.BloggerPostsInsertSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Comment;
import org.openapis.openapi.models.shared.CommentAuthor;
import org.openapis.openapi.models.shared.CommentAuthorImage;
import org.openapis.openapi.models.shared.CommentBlog;
import org.openapis.openapi.models.shared.CommentInReplyTo;
import org.openapis.openapi.models.shared.CommentPost;
import org.openapis.openapi.models.shared.CommentStatusEnum;
import org.openapis.openapi.models.shared.Post;
import org.openapis.openapi.models.shared.PostAuthor;
import org.openapis.openapi.models.shared.PostAuthorImage;
import org.openapis.openapi.models.shared.PostBlog;
import org.openapis.openapi.models.shared.PostImages;
import org.openapis.openapi.models.shared.PostLocation;
import org.openapis.openapi.models.shared.PostReaderCommentsEnum;
import org.openapis.openapi.models.shared.PostReplies;
import org.openapis.openapi.models.shared.PostStatusEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BloggerPostsInsertRequest req = new BloggerPostsInsertRequest("quasi") {{
                dollarXgafv = XgafvEnum.TWO;
                post = new Post() {{
                    author = new PostAuthor() {{
                        displayName = "vel";
                        id = "b7b95bc0-ab3c-420c-8f37-89fd871f99dd";
                        image = new PostAuthorImage() {{
                            url = "quia";
                        }};;
                        url = "eveniet";
                    }};;
                    blog = new PostBlog() {{
                        id = "fd121aa6-f1e6-474b-9b04-f15756082d68";
                    }};;
                    content = "itaque";
                    customMetaData = "dolorum";
                    etag = "architecto";
                    id = "9f1d1705-1339-4d08-886a-1840394c2607";
                    images = new org.openapis.openapi.models.shared.PostImages[]{{
                        add(new PostImages() {{
                            url = "maiores";
                        }}),
                    }};
                    kind = "natus";
                    labels = new String[]{{
                        add("voluptatibus"),
                    }};
                    location = new PostLocation() {{
                        lat = 3743.23;
                        lng = 9903.45;
                        name = "Eileen Hagenes";
                        span = "officia";
                    }};;
                    published = "maxime";
                    readerComments = PostReaderCommentsEnum.DONT_ALLOW_SHOW_EXISTING;
                    replies = new PostReplies() {{
                        items = new org.openapis.openapi.models.shared.Comment[]{{
                            add(new Comment() {{
                                author = new CommentAuthor() {{
                                    displayName = "asperiores";
                                    id = "515cc413-aa63-4aae-8d67-864dbb675fd5";
                                    image = new CommentAuthorImage() {{
                                        url = "recusandae";
                                    }};
                                    url = "aliquid";
                                }};
                                blog = new CommentBlog() {{
                                    id = "0b375ed4-f6fb-4ee4-9f33-317fe35b60eb";
                                }};
                                content = "vitae";
                                id = "ea426555-ba3c-4287-84ed-53b88f3a8d8f";
                                inReplyTo = new CommentInReplyTo() {{
                                    id = "5c0b2f2f-b7b1-494a-a76b-26916fe1f08f";
                                }};
                                kind = "incidunt";
                                post = new CommentPost() {{
                                    id = "294e3698-f447-4f60-be8b-445e80ca55ef";
                                }};
                                published = "nulla";
                                selfLink = "magni";
                                status = CommentStatusEnum.LIVE;
                                updated = "saepe";
                            }}),
                            add(new Comment() {{
                                author = new CommentAuthor() {{
                                    displayName = "numquam";
                                    id = "57e1858b-6a89-4fbe-ba5a-a8e4824d0ab4";
                                    image = new CommentAuthorImage() {{
                                        url = "consequatur";
                                    }};
                                    url = "esse";
                                }};
                                blog = new CommentBlog() {{
                                    id = "5088e518-6206-45e9-84f3-b1194b8abf60";
                                }};
                                content = "amet";
                                id = "a79f9dfe-0ab7-4da8-a50c-e187f86bc173";
                                inReplyTo = new CommentInReplyTo() {{
                                    id = "d689eee9-526f-48d9-86e8-81ead4f0e101";
                                }};
                                kind = "dolores";
                                post = new CommentPost() {{
                                    id = "563f94e2-9e97-43e9-a2a5-7a15be3e0608";
                                }};
                                published = "quae";
                                selfLink = "molestiae";
                                status = CommentStatusEnum.SPAM;
                                updated = "qui";
                            }}),
                            add(new Comment() {{
                                author = new CommentAuthor() {{
                                    displayName = "cum";
                                    id = "6e3ab884-5f05-497a-a0ff-2a54a31e9476";
                                    image = new CommentAuthorImage() {{
                                        url = "ut";
                                    }};
                                    url = "culpa";
                                }};
                                blog = new CommentBlog() {{
                                    id = "3e865e79-56f9-4251-a5a9-da660ff57bfa";
                                }};
                                content = "laborum";
                                id = "d4f9efc1-b451-42c1-8326-48dc2f615199";
                                inReplyTo = new CommentInReplyTo() {{
                                    id = "ebfd0e9f-e6c6-432c-a3ae-d0117996312f";
                                }};
                                kind = "nulla";
                                post = new CommentPost() {{
                                    id = "e0477177-8ff6-41d0-9747-6360a15db6a6";
                                }};
                                published = "aliquid";
                                selfLink = "perferendis";
                                status = CommentStatusEnum.EMPTIED;
                                updated = "voluptas";
                            }}),
                        }};
                        selfLink = "iste";
                        totalItems = "id";
                    }};;
                    selfLink = "ab";
                    status = PostStatusEnum.SCHEDULED;
                    title = "Dr.";
                    titleLink = "voluptates";
                    trashed = "mollitia";
                    updated = "laborum";
                    url = "libero";
                }};;
                accessToken = "ad";
                alt = AltEnum.MEDIA;
                callback = "enim";
                fetchBody = false;
                fetchImages = false;
                fields = "vitae";
                isDraft = false;
                key = "repellendus";
                oauthToken = "ex";
                prettyPrint = false;
                quotaUser = "quo";
                uploadType = "ex";
                uploadProtocol = "ut";
            }};            

            BloggerPostsInsertResponse res = sdk.posts.bloggerPostsInsert(req, new BloggerPostsInsertSecurity("ad", "expedita") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.post != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bloggerPostsList

Lists posts.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BloggerPostsListOrderByEnum;
import org.openapis.openapi.models.operations.BloggerPostsListRequest;
import org.openapis.openapi.models.operations.BloggerPostsListResponse;
import org.openapis.openapi.models.operations.BloggerPostsListSecurity;
import org.openapis.openapi.models.operations.BloggerPostsListSecurityOption1;
import org.openapis.openapi.models.operations.BloggerPostsListSecurityOption2;
import org.openapis.openapi.models.operations.BloggerPostsListSortOptionEnum;
import org.openapis.openapi.models.operations.BloggerPostsListStatusEnum;
import org.openapis.openapi.models.operations.BloggerPostsListViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BloggerPostsListRequest req = new BloggerPostsListRequest("voluptatem") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "cum";
                alt = AltEnum.MEDIA;
                callback = "beatae";
                endDate = "voluptatum";
                fetchBodies = false;
                fetchImages = false;
                fields = "omnis";
                key = "veritatis";
                labels = "rerum";
                maxResults = 665678L;
                oauthToken = "culpa";
                orderBy = BloggerPostsListOrderByEnum.ORDER_BY_UNSPECIFIED;
                pageToken = "sapiente";
                prettyPrint = false;
                quotaUser = "officiis";
                sortOption = BloggerPostsListSortOptionEnum.SORT_OPTION_UNSPECIFIED;
                startDate = "fuga";
                status = new org.openapis.openapi.models.operations.BloggerPostsListStatusEnum[]{{
                    add(BloggerPostsListStatusEnum.SOFT_TRASHED),
                    add(BloggerPostsListStatusEnum.LIVE),
                    add(BloggerPostsListStatusEnum.LIVE),
                    add(BloggerPostsListStatusEnum.SCHEDULED),
                }};
                uploadType = "earum";
                uploadProtocol = "ex";
                view = BloggerPostsListViewEnum.ADMIN;
            }};            

            BloggerPostsListResponse res = sdk.posts.bloggerPostsList(req, new BloggerPostsListSecurity() {{
                option1 = new BloggerPostsListSecurityOption1("rem", "minus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.postList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bloggerPostsPatch

Patches a post.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BloggerPostsPatchRequest;
import org.openapis.openapi.models.operations.BloggerPostsPatchResponse;
import org.openapis.openapi.models.operations.BloggerPostsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Comment;
import org.openapis.openapi.models.shared.CommentAuthor;
import org.openapis.openapi.models.shared.CommentAuthorImage;
import org.openapis.openapi.models.shared.CommentBlog;
import org.openapis.openapi.models.shared.CommentInReplyTo;
import org.openapis.openapi.models.shared.CommentPost;
import org.openapis.openapi.models.shared.CommentStatusEnum;
import org.openapis.openapi.models.shared.Post;
import org.openapis.openapi.models.shared.PostAuthor;
import org.openapis.openapi.models.shared.PostAuthorImage;
import org.openapis.openapi.models.shared.PostBlog;
import org.openapis.openapi.models.shared.PostImages;
import org.openapis.openapi.models.shared.PostLocation;
import org.openapis.openapi.models.shared.PostReaderCommentsEnum;
import org.openapis.openapi.models.shared.PostReplies;
import org.openapis.openapi.models.shared.PostStatusEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BloggerPostsPatchRequest req = new BloggerPostsPatchRequest("nemo", "asperiores") {{
                dollarXgafv = XgafvEnum.ONE;
                post = new Post() {{
                    author = new PostAuthor() {{
                        displayName = "ullam";
                        id = "0d8cdb5a-3418-4143-8104-21813d5208ec";
                        image = new PostAuthorImage() {{
                            url = "officiis";
                        }};;
                        url = "esse";
                    }};;
                    blog = new PostBlog() {{
                        id = "e253b668-451c-46c6-a205-e16deab3fec9";
                    }};;
                    content = "nemo";
                    customMetaData = "voluptate";
                    etag = "blanditiis";
                    id = "a6458427-3a84-418d-9623-09fb0929921a";
                    images = new org.openapis.openapi.models.shared.PostImages[]{{
                        add(new PostImages() {{
                            url = "voluptatibus";
                        }}),
                        add(new PostImages() {{
                            url = "distinctio";
                        }}),
                        add(new PostImages() {{
                            url = "omnis";
                        }}),
                        add(new PostImages() {{
                            url = "delectus";
                        }}),
                    }};
                    kind = "minima";
                    labels = new String[]{{
                        add("maxime"),
                        add("magnam"),
                        add("temporibus"),
                    }};
                    location = new PostLocation() {{
                        lat = 5495.01;
                        lng = 4152.8;
                        name = "Leslie Lebsack";
                        span = "nam";
                    }};;
                    published = "vero";
                    readerComments = PostReaderCommentsEnum.ALLOW;
                    replies = new PostReplies() {{
                        items = new org.openapis.openapi.models.shared.Comment[]{{
                            add(new Comment() {{
                                author = new CommentAuthor() {{
                                    displayName = "vel";
                                    id = "013f59da-757a-459e-8fef-66ef1caa3383";
                                    image = new CommentAuthorImage() {{
                                        url = "impedit";
                                    }};
                                    url = "magni";
                                }};
                                blog = new CommentBlog() {{
                                    id = "beb47737-3c8d-472f-a4d1-db1f2c431066";
                                }};
                                content = "beatae";
                                id = "e96349e1-cf9e-406e-ba43-7000ae6b6bc9";
                                inReplyTo = new CommentInReplyTo() {{
                                    id = "b8f759ea-c55a-4974-9d31-1352965bb8a7";
                                }};
                                kind = "fugit";
                                post = new CommentPost() {{
                                    id = "02611435-e139-4dbc-a259-b1abda8c070e";
                                }};
                                published = "inventore";
                                selfLink = "aperiam";
                                status = CommentStatusEnum.PENDING;
                                updated = "dolore";
                            }}),
                            add(new Comment() {{
                                author = new CommentAuthor() {{
                                    displayName = "eligendi";
                                    id = "b0672d1a-d879-4eeb-9665-b85efbd02bae";
                                    image = new CommentAuthorImage() {{
                                        url = "accusantium";
                                    }};
                                    url = "expedita";
                                }};
                                blog = new CommentBlog() {{
                                    id = "e2d78225-9e3e-4a4b-9197-f92443da7ce5";
                                }};
                                content = "qui";
                                id = "b895c537-c645-44ef-b0b3-4896c3ca5acf";
                                inReplyTo = new CommentInReplyTo() {{
                                    id = "be2fd570-7577-4929-977d-eac646ecb573";
                                }};
                                kind = "modi";
                                post = new CommentPost() {{
                                    id = "09e3eb1e-5a2b-412e-b07f-116db99545fc";
                                }};
                                published = "sint";
                                selfLink = "enim";
                                status = CommentStatusEnum.SPAM;
                                updated = "animi";
                            }}),
                        }};
                        selfLink = "quas";
                        totalItems = "totam";
                    }};;
                    selfLink = "molestias";
                    status = PostStatusEnum.DRAFT;
                    title = "Mr.";
                    titleLink = "saepe";
                    trashed = "architecto";
                    updated = "quos";
                    url = "iste";
                }};;
                accessToken = "assumenda";
                alt = AltEnum.PROTO;
                callback = "libero";
                fetchBody = false;
                fetchImages = false;
                fields = "velit";
                key = "doloremque";
                maxComments = 963976L;
                oauthToken = "impedit";
                prettyPrint = false;
                publish = false;
                quotaUser = "cum";
                revert = false;
                uploadType = "ipsum";
                uploadProtocol = "adipisci";
            }};            

            BloggerPostsPatchResponse res = sdk.posts.bloggerPostsPatch(req, new BloggerPostsPatchSecurity("saepe", "deserunt") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.post != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bloggerPostsPublish

Publishes a post.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BloggerPostsPublishRequest;
import org.openapis.openapi.models.operations.BloggerPostsPublishResponse;
import org.openapis.openapi.models.operations.BloggerPostsPublishSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BloggerPostsPublishRequest req = new BloggerPostsPublishRequest("doloremque", "quis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "libero";
                alt = AltEnum.JSON;
                callback = "cupiditate";
                fields = "molestiae";
                key = "eligendi";
                oauthToken = "possimus";
                prettyPrint = false;
                publishDate = "non";
                quotaUser = "magnam";
                uploadType = "itaque";
                uploadProtocol = "sed";
            }};            

            BloggerPostsPublishResponse res = sdk.posts.bloggerPostsPublish(req, new BloggerPostsPublishSecurity("asperiores", "veniam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.post != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bloggerPostsRevert

Reverts a published or scheduled post to draft state.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BloggerPostsRevertRequest;
import org.openapis.openapi.models.operations.BloggerPostsRevertResponse;
import org.openapis.openapi.models.operations.BloggerPostsRevertSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BloggerPostsRevertRequest req = new BloggerPostsRevertRequest("consequuntur", "facere") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "odit";
                alt = AltEnum.PROTO;
                callback = "amet";
                fields = "exercitationem";
                key = "ab";
                oauthToken = "velit";
                prettyPrint = false;
                quotaUser = "facilis";
                uploadType = "tempore";
                uploadProtocol = "nisi";
            }};            

            BloggerPostsRevertResponse res = sdk.posts.bloggerPostsRevert(req, new BloggerPostsRevertSecurity("voluptatibus", "quaerat") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.post != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bloggerPostsSearch

Searches for posts matching given query terms in the specified blog.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BloggerPostsSearchOrderByEnum;
import org.openapis.openapi.models.operations.BloggerPostsSearchRequest;
import org.openapis.openapi.models.operations.BloggerPostsSearchResponse;
import org.openapis.openapi.models.operations.BloggerPostsSearchSecurity;
import org.openapis.openapi.models.operations.BloggerPostsSearchSecurityOption1;
import org.openapis.openapi.models.operations.BloggerPostsSearchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BloggerPostsSearchRequest req = new BloggerPostsSearchRequest("blanditiis", "distinctio") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quis";
                alt = AltEnum.MEDIA;
                callback = "libero";
                fetchBodies = false;
                fields = "minus";
                key = "facere";
                oauthToken = "facilis";
                orderBy = BloggerPostsSearchOrderByEnum.ORDER_BY_UNSPECIFIED;
                prettyPrint = false;
                quotaUser = "ad";
                uploadType = "voluptatibus";
                uploadProtocol = "voluptatibus";
            }};            

            BloggerPostsSearchResponse res = sdk.posts.bloggerPostsSearch(req, new BloggerPostsSearchSecurity() {{
                option1 = new BloggerPostsSearchSecurityOption1("consequuntur", "debitis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.postList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bloggerPostsUpdate

Updates a post by blog id and post id.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BloggerPostsUpdateRequest;
import org.openapis.openapi.models.operations.BloggerPostsUpdateResponse;
import org.openapis.openapi.models.operations.BloggerPostsUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Comment;
import org.openapis.openapi.models.shared.CommentAuthor;
import org.openapis.openapi.models.shared.CommentAuthorImage;
import org.openapis.openapi.models.shared.CommentBlog;
import org.openapis.openapi.models.shared.CommentInReplyTo;
import org.openapis.openapi.models.shared.CommentPost;
import org.openapis.openapi.models.shared.CommentStatusEnum;
import org.openapis.openapi.models.shared.Post;
import org.openapis.openapi.models.shared.PostAuthor;
import org.openapis.openapi.models.shared.PostAuthorImage;
import org.openapis.openapi.models.shared.PostBlog;
import org.openapis.openapi.models.shared.PostImages;
import org.openapis.openapi.models.shared.PostLocation;
import org.openapis.openapi.models.shared.PostReaderCommentsEnum;
import org.openapis.openapi.models.shared.PostReplies;
import org.openapis.openapi.models.shared.PostStatusEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BloggerPostsUpdateRequest req = new BloggerPostsUpdateRequest("labore", "rerum") {{
                dollarXgafv = XgafvEnum.ONE;
                post = new Post() {{
                    author = new PostAuthor() {{
                        displayName = "reprehenderit";
                        id = "537a8cd9-e731-49c1-b7d5-25f77b114eeb";
                        image = new PostAuthorImage() {{
                            url = "veniam";
                        }};;
                        url = "eos";
                    }};;
                    blog = new PostBlog() {{
                        id = "ff785fc3-7814-4d4c-98e0-c2bb89eb75da";
                    }};;
                    content = "repellendus";
                    customMetaData = "iure";
                    etag = "dolorem";
                    id = "6c600503-d8bb-4311-80f7-39ae9e057eb8";
                    images = new org.openapis.openapi.models.shared.PostImages[]{{
                        add(new PostImages() {{
                            url = "sint";
                        }}),
                    }};
                    kind = "accusamus";
                    labels = new String[]{{
                        add("totam"),
                    }};
                    location = new PostLocation() {{
                        lat = 1158.61;
                        lng = 306.61;
                        name = "Cindy Casper";
                        span = "occaecati";
                    }};;
                    published = "atque";
                    readerComments = PostReaderCommentsEnum.ALLOW;
                    replies = new PostReplies() {{
                        items = new org.openapis.openapi.models.shared.Comment[]{{
                            add(new Comment() {{
                                author = new CommentAuthor() {{
                                    displayName = "labore";
                                    id = "c700b607-f3c9-43c7-bb9d-a3f2ceda7e23";
                                    image = new CommentAuthorImage() {{
                                        url = "repellat";
                                    }};
                                    url = "explicabo";
                                }};
                                blog = new CommentBlog() {{
                                    id = "257411fa-f4b7-4544-a472-e802857a5b40";
                                }};
                                content = "modi";
                                id = "63a7d575-f140-40e7-a4ad-7334ec1b781b";
                                inReplyTo = new CommentInReplyTo() {{
                                    id = "36a08088-d100-4efa-9a20-0ef0422eb216";
                                }};
                                kind = "modi";
                                post = new CommentPost() {{
                                    id = "cf9ab836-6c72-43ff-9a9e-06bee4825c1f";
                                }};
                                published = "eligendi";
                                selfLink = "quae";
                                status = CommentStatusEnum.SPAM;
                                updated = "architecto";
                            }}),
                            add(new Comment() {{
                                author = new CommentAuthor() {{
                                    displayName = "architecto";
                                    id = "5c80bff9-1854-44ec-82de-fcce8f197777";
                                    image = new CommentAuthorImage() {{
                                        url = "nesciunt";
                                    }};
                                    url = "debitis";
                                }};
                                blog = new CommentBlog() {{
                                    id = "63562a7b-408f-405e-bd48-fdaf313a1f5f";
                                }};
                                content = "possimus";
                                id = "94259c0b-36f2-45ea-944f-3b756c11f6c3";
                                inReplyTo = new CommentInReplyTo() {{
                                    id = "7a512624-3835-4bbc-85a2-3a45cefc5fde";
                                }};
                                kind = "architecto";
                                post = new CommentPost() {{
                                    id = "0a0ce216-9e51-4001-9c6d-c5e34762799b";
                                }};
                                published = "doloribus";
                                selfLink = "facilis";
                                status = CommentStatusEnum.PENDING;
                                updated = "itaque";
                            }}),
                            add(new Comment() {{
                                author = new CommentAuthor() {{
                                    displayName = "laboriosam";
                                    id = "949fb2bb-4eca-4e6c-bd5d-b3adebd5daea";
                                    image = new CommentAuthorImage() {{
                                        url = "incidunt";
                                    }};
                                    url = "maxime";
                                }};
                                blog = new CommentBlog() {{
                                    id = "506a8aa9-4c02-4644-8f5e-9d9a4578adc1";
                                }};
                                content = "deserunt";
                                id = "c600dec0-01ac-4802-a2ec-09ff8f0f816f";
                                inReplyTo = new CommentInReplyTo() {{
                                    id = "f3477c13-e902-4c14-925b-0960a668151a";
                                }};
                                kind = "incidunt";
                                post = new CommentPost() {{
                                    id = "72af923c-5949-4f83-b350-cf876ffb901c";
                                }};
                                published = "commodi";
                                selfLink = "eveniet";
                                status = CommentStatusEnum.SPAM;
                                updated = "tempore";
                            }}),
                            add(new Comment() {{
                                author = new CommentAuthor() {{
                                    displayName = "quidem";
                                    id = "4e243cf7-89ff-4afe-9a53-e5ae6e0ac184";
                                    image = new CommentAuthorImage() {{
                                        url = "quisquam";
                                    }};
                                    url = "eos";
                                }};
                                blog = new CommentBlog() {{
                                    id = "b9c247c8-8373-4a40-a194-2f32e5505575";
                                }};
                                content = "nisi";
                                id = "f5d56d0b-d0af-42df-a13d-b4f62cba3f89";
                                inReplyTo = new CommentInReplyTo() {{
                                    id = "41aebc0b-80a6-4924-93b2-ecfcc8f89501";
                                }};
                                kind = "aut";
                                post = new CommentPost() {{
                                    id = "f5dd3d6f-a180-44e5-8c82-f168a363c887";
                                }};
                                published = "adipisci";
                                selfLink = "recusandae";
                                status = CommentStatusEnum.EMPTIED;
                                updated = "blanditiis";
                            }}),
                        }};
                        selfLink = "numquam";
                        totalItems = "sequi";
                    }};;
                    selfLink = "voluptatum";
                    status = PostStatusEnum.LIVE;
                    title = "Miss";
                    titleLink = "veritatis";
                    trashed = "tenetur";
                    updated = "autem";
                    url = "quidem";
                }};;
                accessToken = "totam";
                alt = AltEnum.PROTO;
                callback = "deserunt";
                fetchBody = false;
                fetchImages = false;
                fields = "magni";
                key = "nihil";
                maxComments = 374062L;
                oauthToken = "animi";
                prettyPrint = false;
                publish = false;
                quotaUser = "commodi";
                revert = false;
                uploadType = "alias";
                uploadProtocol = "fuga";
            }};            

            BloggerPostsUpdateResponse res = sdk.posts.bloggerPostsUpdate(req, new BloggerPostsUpdateSecurity("aut", "dolore") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.post != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
