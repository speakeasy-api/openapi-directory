# videos

### Available Operations

* [addVideoCollectionItems](#addvideocollectionitems) - Add videos to collections
* [createVideoCollection](#createvideocollection) - Create video collections
* [deleteVideoCollection](#deletevideocollection) - Delete video collections
* [deleteVideoCollectionItems](#deletevideocollectionitems) - Remove videos from collections
* [downloadVideos](#downloadvideos) - Download videos
* [findSimilarVideos](#findsimilarvideos) - List similar videos
* [getFeaturedVideoCollection](#getfeaturedvideocollection) - Get the details of featured video collections
* [getFeaturedVideoCollectionItems](#getfeaturedvideocollectionitems) - Get the contents of featured video collections
* [getFeaturedVideoCollectionList](#getfeaturedvideocollectionlist) - List featured video collections
* [getUpdatedVideos](#getupdatedvideos) - List updated videos
* [getVideo](#getvideo) - Get details about videos
* [getVideoCollection](#getvideocollection) - Get the details of video collections
* [getVideoCollectionItems](#getvideocollectionitems) - Get the contents of video collections
* [getVideoCollectionList](#getvideocollectionlist) - List video collections
* [getVideoLicenseList](#getvideolicenselist) - List video licenses
* [getVideoList](#getvideolist) - List videos
* [getVideoSuggestions](#getvideosuggestions) - Get suggestions for a search term
* [licenseVideos](#licensevideos) - License videos
* [listVideoCategories](#listvideocategories) - List video categories
* [renameVideoCollection](#renamevideocollection) - Rename video collections
* [searchVideos](#searchvideos) - Search for videos

## addVideoCollectionItems

This endpoint adds one or more videos to a collection by video IDs.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddVideoCollectionItemsRequest;
import org.openapis.openapi.models.operations.AddVideoCollectionItemsResponse;
import org.openapis.openapi.models.operations.AddVideoCollectionItemsSecurity;
import org.openapis.openapi.models.shared.CollectionItem;
import org.openapis.openapi.models.shared.CollectionItemRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AddVideoCollectionItemsRequest req = new AddVideoCollectionItemsRequest(                new CollectionItemRequest(                new org.openapis.openapi.models.shared.CollectionItem[]{{
                                                add(new CollectionItem("saepe") {{
                                                    addedTime = OffsetDateTime.parse("2022-05-30T10:28:19.125Z");
                                                    id = "c6dc5e34-7627-499b-bbbe-6949fb2bb4ec";
                                                    mediaType = "id";
                                                }}),
                                            }});, "autem");            

            AddVideoCollectionItemsResponse res = sdk.videos.addVideoCollectionItems(req, new AddVideoCollectionItemsSecurity("quo") {{
                customerAccessCode = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## createVideoCollection

This endpoint creates one or more collections (clipboxes). To add videos to collections, use `POST /v2/videos/collections/{id}/items`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateVideoCollectionResponse;
import org.openapis.openapi.models.operations.CreateVideoCollectionSecurity;
import org.openapis.openapi.models.shared.CollectionCreateRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CollectionCreateRequest req = new CollectionCreateRequest("nesciunt");            

            CreateVideoCollectionResponse res = sdk.videos.createVideoCollection(req, new CreateVideoCollectionSecurity("illum") {{
                customerAccessCode = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.collectionCreateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteVideoCollection

This endpoint deletes a collection.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteVideoCollectionRequest;
import org.openapis.openapi.models.operations.DeleteVideoCollectionResponse;
import org.openapis.openapi.models.operations.DeleteVideoCollectionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteVideoCollectionRequest req = new DeleteVideoCollectionRequest("nemo");            

            DeleteVideoCollectionResponse res = sdk.videos.deleteVideoCollection(req, new DeleteVideoCollectionSecurity("illum") {{
                customerAccessCode = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## deleteVideoCollectionItems

This endpoint removes one or more videos from a collection.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteVideoCollectionItemsRequest;
import org.openapis.openapi.models.operations.DeleteVideoCollectionItemsResponse;
import org.openapis.openapi.models.operations.DeleteVideoCollectionItemsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteVideoCollectionItemsRequest req = new DeleteVideoCollectionItemsRequest("facilis") {{
                itemId = new String[]{{
                    add("mollitia"),
                }};
            }};            

            DeleteVideoCollectionItemsResponse res = sdk.videos.deleteVideoCollectionItems(req, new DeleteVideoCollectionItemsSecurity("assumenda") {{
                customerAccessCode = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## downloadVideos

This endpoint redownloads videos that you have already received a license for.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DownloadVideosRequest;
import org.openapis.openapi.models.operations.DownloadVideosResponse;
import org.openapis.openapi.models.operations.DownloadVideosSecurity;
import org.openapis.openapi.models.shared.Cookie;
import org.openapis.openapi.models.shared.RedownloadVideo;
import org.openapis.openapi.models.shared.RedownloadVideoSizeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DownloadVideosRequest req = new DownloadVideosRequest(                new RedownloadVideo() {{
                                authCookie = new Cookie("recusandae", "distinctio");;
                                showModal = false;
                                size = RedownloadVideoSizeEnum.FOURK;
                                verificationCode = "ad";
                            }};, "facere");            

            DownloadVideosResponse res = sdk.videos.downloadVideos(req, new DownloadVideosSecurity("laborum") {{
                customerAccessCode = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.url != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## findSimilarVideos

This endpoint searches for videos that are similar to a video that you specify.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FindSimilarVideosRequest;
import org.openapis.openapi.models.operations.FindSimilarVideosResponse;
import org.openapis.openapi.models.operations.FindSimilarVideosSecurity;
import org.openapis.openapi.models.operations.FindSimilarVideosViewEnum;
import org.openapis.openapi.models.shared.LanguageEnum;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FindSimilarVideosRequest req = new FindSimilarVideosRequest("eveniet") {{
                language = LanguageEnum.CS;
                page = 673191L;
                perPage = 276337L;
                view = FindSimilarVideosViewEnum.FULL;
            }};            

            FindSimilarVideosResponse res = sdk.videos.findSimilarVideos(req, new FindSimilarVideosSecurity() {{
                basic = new SchemeBasic("ipsam", "alias") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }};
            }});

            if (res.videoSearchResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFeaturedVideoCollection

This endpoint gets more detailed information about a featured video collection, including its cover video and timestamps for its creation and most recent update. To get the videos, use `GET /v2/videos/collections/featured/{id}/items`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFeaturedVideoCollectionEmbedEnum;
import org.openapis.openapi.models.operations.GetFeaturedVideoCollectionRequest;
import org.openapis.openapi.models.operations.GetFeaturedVideoCollectionResponse;
import org.openapis.openapi.models.operations.GetFeaturedVideoCollectionSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFeaturedVideoCollectionRequest req = new GetFeaturedVideoCollectionRequest("suscipit") {{
                embed = GetFeaturedVideoCollectionEmbedEnum.SHARE_URL;
            }};            

            GetFeaturedVideoCollectionResponse res = sdk.videos.getFeaturedVideoCollection(req, new GetFeaturedVideoCollectionSecurity() {{
                basic = new SchemeBasic("deserunt", "molestias") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }};
            }});

            if (res.featuredCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFeaturedVideoCollectionItems

This endpoint lists the IDs of videos in a featured collection and the date that each was added.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFeaturedVideoCollectionItemsRequest;
import org.openapis.openapi.models.operations.GetFeaturedVideoCollectionItemsResponse;
import org.openapis.openapi.models.operations.GetFeaturedVideoCollectionItemsSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFeaturedVideoCollectionItemsRequest req = new GetFeaturedVideoCollectionItemsRequest("laborum") {{
                page = 668218L;
                perPage = 577413L;
            }};            

            GetFeaturedVideoCollectionItemsResponse res = sdk.videos.getFeaturedVideoCollectionItems(req, new GetFeaturedVideoCollectionItemsSecurity() {{
                basic = new SchemeBasic("labore", "quo") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }};
            }});

            if (res.videoCollectionItemDataList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFeaturedVideoCollectionList

This endpoint lists featured video collections and a name and cover video for each collection.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFeaturedVideoCollectionListEmbedEnum;
import org.openapis.openapi.models.operations.GetFeaturedVideoCollectionListRequest;
import org.openapis.openapi.models.operations.GetFeaturedVideoCollectionListResponse;
import org.openapis.openapi.models.operations.GetFeaturedVideoCollectionListSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFeaturedVideoCollectionListRequest req = new GetFeaturedVideoCollectionListRequest() {{
                embed = GetFeaturedVideoCollectionListEmbedEnum.SHARE_URL;
            }};            

            GetFeaturedVideoCollectionListResponse res = sdk.videos.getFeaturedVideoCollectionList(req, new GetFeaturedVideoCollectionListSecurity() {{
                basic = new SchemeBasic("perferendis", "fugit") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }};
            }});

            if (res.featuredCollectionDataList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUpdatedVideos

This endpoint lists videos that have been updated in the specified time period to update content management systems (CMS) or digital asset management (DAM) systems. In most cases, use the `interval` parameter to show videos that were updated recently, but you can also use the `start_date` and `end_date` parameters to specify a range of no more than three days. Do not use the `interval` parameter with either `start_date` or `end_date`.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUpdatedVideosRequest;
import org.openapis.openapi.models.operations.GetUpdatedVideosResponse;
import org.openapis.openapi.models.operations.GetUpdatedVideosSecurity;
import org.openapis.openapi.models.operations.GetUpdatedVideosSortEnum;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUpdatedVideosRequest req = new GetUpdatedVideosRequest() {{
                endDate = LocalDate.parse("2022-09-13");
                interval = "quaerat";
                page = 755868L;
                perPage = 942185L;
                sort = GetUpdatedVideosSortEnum.NEWEST;
                startDate = LocalDate.parse("2021-03-11");
            }};            

            GetUpdatedVideosResponse res = sdk.videos.getUpdatedVideos(req, new GetUpdatedVideosSecurity() {{
                basic = new SchemeBasic("nulla", "error") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }};
            }});

            if (res.updatedMediaDataList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVideo

This endpoint shows information about a video, including URLs to previews and the sizes that it is available in.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVideoRequest;
import org.openapis.openapi.models.operations.GetVideoResponse;
import org.openapis.openapi.models.operations.GetVideoSecurity;
import org.openapis.openapi.models.operations.GetVideoViewEnum;
import org.openapis.openapi.models.shared.LanguageEnum;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetVideoRequest req = new GetVideoRequest("mollitia") {{
                language = LanguageEnum.CS;
                searchId = "magnam";
                view = GetVideoViewEnum.MINIMAL;
            }};            

            GetVideoResponse res = sdk.videos.getVideo(req, new GetVideoSecurity() {{
                basic = new SchemeBasic("esse", "corrupti") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }};
            }});

            if (res.video != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVideoCollection

This endpoint gets more detailed information about a collection, including the timestamp for its creation and the number of videos in it. To get the videos in collections, use GET /v2/videos/collections/{id}/items.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVideoCollectionEmbedEnum;
import org.openapis.openapi.models.operations.GetVideoCollectionRequest;
import org.openapis.openapi.models.operations.GetVideoCollectionResponse;
import org.openapis.openapi.models.operations.GetVideoCollectionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetVideoCollectionRequest req = new GetVideoCollectionRequest("fuga") {{
                embed = new org.openapis.openapi.models.operations.GetVideoCollectionEmbedEnum[]{{
                    add(GetVideoCollectionEmbedEnum.SHARE_URL),
                    add(GetVideoCollectionEmbedEnum.SHARE_CODE),
                    add(GetVideoCollectionEmbedEnum.SHARE_URL),
                    add(GetVideoCollectionEmbedEnum.SHARE_URL),
                }};
                shareCode = "laboriosam";
            }};            

            GetVideoCollectionResponse res = sdk.videos.getVideoCollection(req, new GetVideoCollectionSecurity("doloremque") {{
                customerAccessCode = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.collection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVideoCollectionItems

This endpoint lists the IDs of videos in a collection and the date that each was added.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVideoCollectionItemsRequest;
import org.openapis.openapi.models.operations.GetVideoCollectionItemsResponse;
import org.openapis.openapi.models.operations.GetVideoCollectionItemsSecurity;
import org.openapis.openapi.models.operations.GetVideoCollectionItemsSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetVideoCollectionItemsRequest req = new GetVideoCollectionItemsRequest("voluptatem") {{
                page = 816421L;
                perPage = 901008L;
                shareCode = "maxime";
                sort = GetVideoCollectionItemsSortEnum.NEWEST;
            }};            

            GetVideoCollectionItemsResponse res = sdk.videos.getVideoCollectionItems(req, new GetVideoCollectionItemsSecurity("eaque") {{
                customerAccessCode = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.collectionItemDataList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVideoCollectionList

This endpoint lists your collections of videos and their basic attributes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVideoCollectionListEmbedEnum;
import org.openapis.openapi.models.operations.GetVideoCollectionListRequest;
import org.openapis.openapi.models.operations.GetVideoCollectionListResponse;
import org.openapis.openapi.models.operations.GetVideoCollectionListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetVideoCollectionListRequest req = new GetVideoCollectionListRequest() {{
                embed = new org.openapis.openapi.models.operations.GetVideoCollectionListEmbedEnum[]{{
                    add(GetVideoCollectionListEmbedEnum.SHARE_URL),
                }};
                page = 783274L;
                perPage = 502453L;
            }};            

            GetVideoCollectionListResponse res = sdk.videos.getVideoCollectionList(req, new GetVideoCollectionListSecurity("quae") {{
                customerAccessCode = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.collectionDataList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVideoLicenseList

This endpoint lists existing licenses.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVideoLicenseListDownloadAvailabilityEnum;
import org.openapis.openapi.models.operations.GetVideoLicenseListRequest;
import org.openapis.openapi.models.operations.GetVideoLicenseListResponse;
import org.openapis.openapi.models.operations.GetVideoLicenseListSecurity;
import org.openapis.openapi.models.operations.GetVideoLicenseListSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetVideoLicenseListRequest req = new GetVideoLicenseListRequest() {{
                downloadAvailability = GetVideoLicenseListDownloadAvailabilityEnum.ALL;
                endDate = OffsetDateTime.parse("2022-07-22T12:36:05.070Z");
                license = "necessitatibus";
                page = 773259L;
                perPage = 55981L;
                sort = GetVideoLicenseListSortEnum.OLDEST;
                startDate = OffsetDateTime.parse("2020-01-20T14:46:57.506Z");
                teamHistory = false;
                username = "Jordane99";
                videoId = "rem";
            }};            

            GetVideoLicenseListResponse res = sdk.videos.getVideoLicenseList(req, new GetVideoLicenseListSecurity("dicta") {{
                customerAccessCode = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.downloadHistoryDataList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVideoList

This endpoint lists information about one or more videos, including the aspect ratio and URLs to previews.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVideoListRequest;
import org.openapis.openapi.models.operations.GetVideoListResponse;
import org.openapis.openapi.models.operations.GetVideoListSecurity;
import org.openapis.openapi.models.operations.GetVideoListViewEnum;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetVideoListRequest req = new GetVideoListRequest(                new String[]{{
                                add("earum"),
                                add("doloribus"),
                            }}) {{
                searchId = "velit";
                view = GetVideoListViewEnum.MINIMAL;
            }};            

            GetVideoListResponse res = sdk.videos.getVideoList(req, new GetVideoListSecurity() {{
                basic = new SchemeBasic("esse", "in") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }};
            }});

            if (res.videoDataList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVideoSuggestions

This endpoint provides autocomplete suggestions for partial search terms.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVideoSuggestionsRequest;
import org.openapis.openapi.models.operations.GetVideoSuggestionsResponse;
import org.openapis.openapi.models.operations.GetVideoSuggestionsSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetVideoSuggestionsRequest req = new GetVideoSuggestionsRequest("eligendi") {{
                limit = 94697L;
            }};            

            GetVideoSuggestionsResponse res = sdk.videos.getVideoSuggestions(req, new GetVideoSuggestionsSecurity() {{
                basic = new SchemeBasic("neque", "vero") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }};
            }});

            if (res.suggestions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## licenseVideos

This endpoint gets licenses for one or more videos. You must specify the video IDs in the body parameter and the size and subscription ID either in the query parameter or with each video ID in the body parameter. Values in the body parameter override values in the query parameters. The download links in the response are valid for 8 hours.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LicenseVideosRequest;
import org.openapis.openapi.models.operations.LicenseVideosResponse;
import org.openapis.openapi.models.operations.LicenseVideosSecurity;
import org.openapis.openapi.models.operations.LicenseVideosSizeEnum;
import org.openapis.openapi.models.shared.Cookie;
import org.openapis.openapi.models.shared.LicenseVideo;
import org.openapis.openapi.models.shared.LicenseVideoRequest;
import org.openapis.openapi.models.shared.LicenseVideoSizeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LicenseVideosRequest req = new LicenseVideosRequest(                new LicenseVideoRequest(                new org.openapis.openapi.models.shared.LicenseVideo[]{{
                                                add(new LicenseVideo("quam") {{
                                                    authCookie = new Cookie("rerum", "alias") {{
                                                        name = "Mrs. Phyllis Russel Sr.";
                                                        value = "corporis";
                                                    }};
                                                    editorialAcknowledgement = false;
                                                    metadata = new java.util.HashMap<String, Object>() {{
                                                        put("vel", "accusantium");
                                                        put("id", "laboriosam");
                                                        put("ex", "quas");
                                                    }};
                                                    price = 857.94;
                                                    searchId = "ullam";
                                                    showModal = false;
                                                    size = LicenseVideoSizeEnum.WEB;
                                                    subscriptionId = "similique";
                                                    videoId = "incidunt";
                                                }}),
                                                add(new LicenseVideo("quas") {{
                                                    authCookie = new Cookie("maxime", "quis") {{
                                                        name = "Joanna Wintheiser";
                                                        value = "nesciunt";
                                                    }};
                                                    editorialAcknowledgement = false;
                                                    metadata = new java.util.HashMap<String, Object>() {{
                                                        put("aliquam", "excepturi");
                                                        put("maiores", "laudantium");
                                                        put("velit", "reiciendis");
                                                    }};
                                                    price = 2303.05;
                                                    searchId = "nemo";
                                                    showModal = false;
                                                    size = LicenseVideoSizeEnum.WEB;
                                                    subscriptionId = "quisquam";
                                                    videoId = "tenetur";
                                                }}),
                                                add(new LicenseVideo("blanditiis") {{
                                                    authCookie = new Cookie("accusantium", "dicta") {{
                                                        name = "Elsie Yundt";
                                                        value = "perspiciatis";
                                                    }};
                                                    editorialAcknowledgement = false;
                                                    metadata = new java.util.HashMap<String, Object>() {{
                                                        put("commodi", "eveniet");
                                                        put("porro", "tempore");
                                                        put("quidem", "modi");
                                                        put("voluptates", "fugit");
                                                    }};
                                                    price = 2593.77;
                                                    searchId = "sequi";
                                                    showModal = false;
                                                    size = LicenseVideoSizeEnum.FOURK;
                                                    subscriptionId = "asperiores";
                                                    videoId = "esse";
                                                }}),
                                            }});) {{
                searchId = "sint";
                size = LicenseVideosSizeEnum.FOURK;
                subscriptionId = "a";
            }};            

            LicenseVideosResponse res = sdk.videos.licenseVideos(req, new LicenseVideosSecurity("animi") {{
                customerAccessCode = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.licenseVideoResultDataList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listVideoCategories

This endpoint lists the categories (Shutterstock-assigned genres) that videos can belong to.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListVideoCategoriesRequest;
import org.openapis.openapi.models.operations.ListVideoCategoriesResponse;
import org.openapis.openapi.models.operations.ListVideoCategoriesSecurity;
import org.openapis.openapi.models.shared.LanguageEnum;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListVideoCategoriesRequest req = new ListVideoCategoriesRequest() {{
                language = LanguageEnum.CS;
            }};            

            ListVideoCategoriesResponse res = sdk.videos.listVideoCategories(req, new ListVideoCategoriesSecurity() {{
                basic = new SchemeBasic("maiores", "itaque") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }};
            }});

            if (res.categoryDataList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## renameVideoCollection

This endpoint sets a new name for a collection.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RenameVideoCollectionRequest;
import org.openapis.openapi.models.operations.RenameVideoCollectionResponse;
import org.openapis.openapi.models.operations.RenameVideoCollectionSecurity;
import org.openapis.openapi.models.shared.CollectionUpdateRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RenameVideoCollectionRequest req = new RenameVideoCollectionRequest(                new CollectionUpdateRequest("nulla");, "deserunt");            

            RenameVideoCollectionResponse res = sdk.videos.renameVideoCollection(req, new RenameVideoCollectionSecurity("corporis") {{
                customerAccessCode = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## searchVideos

This endpoint searches for videos. If you specify more than one search parameter, the API uses an AND condition. Array parameters can be specified multiple times; in this case, the API uses an AND or an OR condition with those values, depending on the parameter. You can also filter search terms out in the `query` parameter by prefixing the term with NOT.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchVideosAspectRatioEnum;
import org.openapis.openapi.models.operations.SearchVideosLicenseEnum;
import org.openapis.openapi.models.operations.SearchVideosPeopleAgeEnum;
import org.openapis.openapi.models.operations.SearchVideosPeopleEthnicityEnum;
import org.openapis.openapi.models.operations.SearchVideosPeopleGenderEnum;
import org.openapis.openapi.models.operations.SearchVideosRequest;
import org.openapis.openapi.models.operations.SearchVideosResolutionEnum;
import org.openapis.openapi.models.operations.SearchVideosResponse;
import org.openapis.openapi.models.operations.SearchVideosSecurity;
import org.openapis.openapi.models.operations.SearchVideosSortEnum;
import org.openapis.openapi.models.operations.SearchVideosViewEnum;
import org.openapis.openapi.models.shared.LanguageEnum;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchVideosRequest req = new SearchVideosRequest() {{
                addedDate = LocalDate.parse("2022-02-10");
                addedDateEnd = LocalDate.parse("2022-05-12");
                addedDateStart = LocalDate.parse("2021-09-17");
                aspectRatio = SearchVideosAspectRatioEnum.NONSTANDARD;
                category = "accusantium";
                contributor = new String[]{{
                    add("impedit"),
                    add("quasi"),
                    add("blanditiis"),
                }};
                contributorCountry = new String[]{{
                    add("quisquam"),
                    add("eos"),
                }};
                duration = 748023L;
                durationFrom = 620054L;
                durationTo = 793568L;
                fps = 1543.89;
                fpsFrom = 3006.51;
                fpsTo = 4408.47;
                keywordSafeSearch = false;
                language = LanguageEnum.CS;
                license = new org.openapis.openapi.models.operations.SearchVideosLicenseEnum[]{{
                    add(SearchVideosLicenseEnum.EDITORIAL),
                    add(SearchVideosLicenseEnum.EDITORIAL),
                    add(SearchVideosLicenseEnum.COMMERCIAL),
                    add(SearchVideosLicenseEnum.COMMERCIAL),
                }};
                model = new String[]{{
                    add("laborum"),
                }};
                page = 266946L;
                peopleAge = SearchVideosPeopleAgeEnum.INFANTS;
                peopleEthnicity = new org.openapis.openapi.models.operations.SearchVideosPeopleEthnicityEnum[]{{
                    add(SearchVideosPeopleEthnicityEnum.AFRICAN_AMERICAN),
                    add(SearchVideosPeopleEthnicityEnum.JAPANESE),
                    add(SearchVideosPeopleEthnicityEnum.CHINESE),
                    add(SearchVideosPeopleEthnicityEnum.AFRICAN_AMERICAN),
                }};
                peopleGender = SearchVideosPeopleGenderEnum.BOTH;
                peopleModelReleased = false;
                peopleNumber = 205011L;
                perPage = 139745L;
                query = "earum";
                resolution = SearchVideosResolutionEnum.FOURK;
                safe = false;
                sort = SearchVideosSortEnum.POPULAR;
                view = SearchVideosViewEnum.MINIMAL;
            }};            

            SearchVideosResponse res = sdk.videos.searchVideos(req, new SearchVideosSecurity() {{
                basic = new SchemeBasic("exercitationem", "veniam") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }};
            }});

            if (res.videoSearchResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
