# editorialVideo

### Available Operations

* [getEditorialVideo](#geteditorialvideo) - Get editorial video content details
* [getEditorialVideoLicenseList](#geteditorialvideolicenselist) - List editorial video licenses
* [licenseEditorialVideo](#licenseeditorialvideo) - License editorial video content
* [listEditorialVideoCategories](#listeditorialvideocategories) - List editorial video categories
* [searchEditorialVideos](#searcheditorialvideos) - Search editorial video content

## getEditorialVideo

This endpoint shows information about an editorial image, including a URL to a preview image and the sizes that it is available in.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEditorialVideoRequest;
import org.openapis.openapi.models.operations.GetEditorialVideoResponse;
import org.openapis.openapi.models.operations.GetEditorialVideoSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEditorialVideoRequest req = new GetEditorialVideoRequest("exercitationem", "quam") {{
                searchId = "dolorem";
            }};            

            GetEditorialVideoResponse res = sdk.editorialVideo.getEditorialVideo(req, new GetEditorialVideoSecurity() {{
                basic = new SchemeBasic("modi", "ipsa") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }};
            }});

            if (res.editorialVideoContent != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEditorialVideoLicenseList

This endpoint lists existing editorial video licenses.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEditorialVideoLicenseListDownloadAvailabilityEnum;
import org.openapis.openapi.models.operations.GetEditorialVideoLicenseListRequest;
import org.openapis.openapi.models.operations.GetEditorialVideoLicenseListResponse;
import org.openapis.openapi.models.operations.GetEditorialVideoLicenseListSecurity;
import org.openapis.openapi.models.operations.GetEditorialVideoLicenseListSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEditorialVideoLicenseListRequest req = new GetEditorialVideoLicenseListRequest() {{
                downloadAvailability = GetEditorialVideoLicenseListDownloadAvailabilityEnum.DOWNLOADABLE;
                endDate = OffsetDateTime.parse("2022-06-01T14:00:05.540Z");
                license = "repudiandae";
                page = 741232L;
                perPage = 120120L;
                sort = GetEditorialVideoLicenseListSortEnum.OLDEST;
                startDate = OffsetDateTime.parse("2022-05-05T08:48:48.155Z");
                teamHistory = false;
                username = "Chanel16";
                videoId = "necessitatibus";
            }};            

            GetEditorialVideoLicenseListResponse res = sdk.editorialVideo.getEditorialVideoLicenseList(req, new GetEditorialVideoLicenseListSecurity("nobis") {{
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

## licenseEditorialVideo

This endpoint gets licenses for one or more editorial videos. You must specify the country and one or more editorial videos to license. The download links in the response are valid for 8 hours.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LicenseEditorialVideoResponse;
import org.openapis.openapi.models.operations.LicenseEditorialVideoSecurity;
import org.openapis.openapi.models.shared.LicenseEditorialVideoContent;
import org.openapis.openapi.models.shared.LicenseEditorialVideoContentLicenseEnum;
import org.openapis.openapi.models.shared.LicenseEditorialVideoContentRequest;
import org.openapis.openapi.models.shared.LicenseEditorialVideoContentRequestCountry1Enum;
import org.openapis.openapi.models.shared.LicenseEditorialVideoContentRequestCountry2Enum;
import org.openapis.openapi.models.shared.LicenseEditorialVideoContentSizeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.LicenseEditorialVideoContentRequest req = new LicenseEditorialVideoContentRequest(LicenseEditorialVideoContentRequestCountry1Enum.USA,                 new org.openapis.openapi.models.shared.LicenseEditorialVideoContent[]{{
                                add(new LicenseEditorialVideoContent("libero", LicenseEditorialVideoContentLicenseEnum.PREMIER_EDITORIAL_VIDEO_ALL_MEDIA_SINGLE_TERRITORY) {{
                                    editorialId = "maiores";
                                    license = LicenseEditorialVideoContentLicenseEnum.PREMIER_EDITORIAL_VIDEO_DIGITAL_ONLY;
                                    metadata = new java.util.HashMap<String, Object>() {{
                                        put("laboriosam", "pariatur");
                                    }};
                                    size = LicenseEditorialVideoContentSizeEnum.ORIGINAL;
                                }}),
                                add(new LicenseEditorialVideoContent("enim", LicenseEditorialVideoContentLicenseEnum.PREMIER_EDITORIAL_VIDEO_COMP) {{
                                    editorialId = "occaecati";
                                    license = LicenseEditorialVideoContentLicenseEnum.PREMIER_EDITORIAL_VIDEO_ALL_MEDIA;
                                    metadata = new java.util.HashMap<String, Object>() {{
                                        put("nostrum", "doloribus");
                                        put("eligendi", "sint");
                                    }};
                                    size = LicenseEditorialVideoContentSizeEnum.ORIGINAL;
                                }}),
                            }});            

            LicenseEditorialVideoResponse res = sdk.editorialVideo.licenseEditorialVideo(req, new LicenseEditorialVideoSecurity("animi") {{
                customerAccessCode = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.licenseEditorialContentResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listEditorialVideoCategories

This endpoint lists the categories that editorial videos can belong to, which are separate from the categories that other types of assets can belong to.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListEditorialVideoCategoriesResponse;
import org.openapis.openapi.models.operations.ListEditorialVideoCategoriesSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListEditorialVideoCategoriesResponse res = sdk.editorialVideo.listEditorialVideoCategories(new ListEditorialVideoCategoriesSecurity() {{
                basic = new SchemeBasic("quas", "totam") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }};
            }});

            if (res.editorialVideoCategoryResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## searchEditorialVideos

This endpoint searches for editorial videos. If you specify more than one search parameter, the API uses an AND condition. For example, if you set the `category` parameter to "Alone,Performing" and also specify a `query` parameter, the results include only videos that match the query and are in both the Alone and Performing categories.  You can also filter search terms out in the `query` parameter by prefixing the term with NOT.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchEditorialVideosRequest;
import org.openapis.openapi.models.operations.SearchEditorialVideosResolutionEnum;
import org.openapis.openapi.models.operations.SearchEditorialVideosResponse;
import org.openapis.openapi.models.operations.SearchEditorialVideosSecurity;
import org.openapis.openapi.models.operations.SearchEditorialVideosSortEnum;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchEditorialVideosRequest req = new SearchEditorialVideosRequest("molestias") {{
                category = "odio";
                cursor = "eaque";
                dateEnd = LocalDate.parse("2022-09-09");
                dateStart = LocalDate.parse("2021-10-09");
                fps = 8268.62;
                perPage = 731634L;
                query = "libero";
                resolution = SearchEditorialVideosResolutionEnum.FOURK;
                sort = SearchEditorialVideosSortEnum.RELEVANT;
                supplierCode = new String[]{{
                    add("impedit"),
                    add("cum"),
                    add("ipsum"),
                    add("adipisci"),
                }};
            }};            

            SearchEditorialVideosResponse res = sdk.editorialVideo.searchEditorialVideos(req, new SearchEditorialVideosSecurity() {{
                basic = new SchemeBasic("saepe", "deserunt") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }};
            }});

            if (res.editorialVideoSearchResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
