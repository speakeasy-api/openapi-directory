# media

## Overview

Information about media

### Available Operations

* [getResourcesMediaJson](#getresourcesmediajson) - Get MediaItems
* [getResourcesMediaFeaturedJson](#getresourcesmediafeaturedjson) - Get the list of featured content in the syndication system
* [getResourcesMediaMostPopularMediaFormat](#getresourcesmediamostpopularmediaformat) - Get MediaItems by popularity
* [getResourcesMediaSearchResultsJson](#getresourcesmediasearchresultsjson) - Get MediaItems by search query
* [getResourcesMediaIdJson](#getresourcesmediaidjson) - Get MediaItem by ID
* [getResourcesMediaIdContent](#getresourcesmediaidcontent) - Get content for MediaItem
* [getResourcesMediaIdEmbedJson](#getresourcesmediaidembedjson) - Get embed code for MediaItem
* [getResourcesMediaIdPreviewJpg](#getresourcesmediaidpreviewjpg) - Get Tag by ID
* [getResourcesMediaIdRelatedMediaFormat](#getresourcesmediaidrelatedmediaformat) - Get related MediaItems by ID
* [getResourcesMediaIdSyndicateFormat](#getresourcesmediaidsyndicateformat) - Get syndicated content for MediaItem
* [getResourcesMediaIdThumbnailJpg](#getresourcesmediaidthumbnailjpg) - Get JPG thumbnail for MediaItem
* [getResourcesMediaIdYoutubeMetaDataJson](#getresourcesmediaidyoutubemetadatajson) - Get Youtube metadata for MediaItem

## getResourcesMediaJson

Media Items Listings

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetResourcesMediaJsonRequest;
import org.openapis.openapi.models.operations.GetResourcesMediaJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetResourcesMediaJsonRequest req = new GetResourcesMediaJsonRequest() {{
                collectionId = 383441;
                contentAuthoredBeforeDate = LocalDate.parse("2022-03-18");
                contentAuthoredInRange = "placeat";
                contentAuthoredSinceDate = LocalDate.parse("2022-01-15");
                contentPublishedBeforeDate = LocalDate.parse("2022-03-20");
                contentPublishedInRange = "recusandae";
                contentPublishedSinceDate = LocalDate.parse("2022-10-15");
                contentReviewedBeforeDate = LocalDate.parse("2022-11-30");
                contentReviewedInRange = "deserunt";
                contentReviewedSinceDate = LocalDate.parse("2022-08-19");
                contentUpdatedBeforeDate = LocalDate.parse("2020-02-17");
                contentUpdatedInRange = "quo";
                contentUpdatedSinceDate = LocalDate.parse("2022-02-17");
                createdBy = "at";
                customThumbnailUrl = "maiores";
                customThumbnailUrlContains = "molestiae";
                dateContentAuthored = LocalDate.parse("2020-08-07");
                dateContentPublished = LocalDate.parse("2022-06-25");
                dateContentReviewed = LocalDate.parse("2020-12-18");
                dateContentUpdated = LocalDate.parse("2022-04-12");
                dateSyndicationCaptured = LocalDate.parse("2021-11-02");
                dateSyndicationUpdated = LocalDate.parse("2022-06-18");
                descriptionContains = "hic";
                hash = "optio";
                hashContains = "totam";
                languageId = 105907L;
                languageIsoCode = "commodi";
                languageName = "molestiae";
                max = 264555;
                mediaTypes = "qui";
                name = "Jonathon Klocko";
                nameContains = "aspernatur";
                offset = 18789;
                order = "ad";
                restrictToSet = "natus";
                sort = "sed";
                sourceAcronym = "iste";
                sourceAcronymContains = "dolor";
                sourceId = 616934L;
                sourceName = "laboriosam";
                sourceNameContains = "hic";
                sourceUrl = "saepe";
                sourceUrlContains = "fuga";
                syndicationCapturedBeforeDate = LocalDate.parse("2022-08-22");
                syndicationCapturedInRange = "iste";
                syndicationCapturedSinceDate = LocalDate.parse("2022-02-05");
                syndicationUpdatedBeforeDate = LocalDate.parse("2022-10-20");
                syndicationUpdatedInRange = "ipsa";
                syndicationUpdatedSinceDate = LocalDate.parse("2020-12-31");
                syndicationVisibleBeforeDate = LocalDate.parse("2021-08-29");
                syndicationVisibleInRange = LocalDate.parse("2022-10-16");
                syndicationVisibleSinceDate = LocalDate.parse("2022-11-14");
                tagIds = "nobis";
            }};            

            GetResourcesMediaJsonResponse res = sdk.media.getResourcesMediaJson(req);

            if (res.mediaItemWrappeds != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getResourcesMediaFeaturedJson

Get the list of featured content in the syndication system

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetResourcesMediaFeaturedJsonRequest;
import org.openapis.openapi.models.operations.GetResourcesMediaFeaturedJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetResourcesMediaFeaturedJsonRequest req = new GetResourcesMediaFeaturedJsonRequest() {{
                max = 315428;
                offset = 607831;
                sort = "nemo";
            }};            

            GetResourcesMediaFeaturedJsonResponse res = sdk.media.getResourcesMediaFeaturedJson(req);

            if (res.mediaItems != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getResourcesMediaMostPopularMediaFormat

Get the media with the highest ratings.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetResourcesMediaMostPopularMediaFormatRequest;
import org.openapis.openapi.models.operations.GetResourcesMediaMostPopularMediaFormatResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetResourcesMediaMostPopularMediaFormatRequest req = new GetResourcesMediaMostPopularMediaFormatRequest("minima") {{
                max = 570197;
                offset = 38425;
            }};            

            GetResourcesMediaMostPopularMediaFormatResponse res = sdk.media.getResourcesMediaMostPopularMediaFormat(req);

            if (res.mediaItemWrappeds != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getResourcesMediaSearchResultsJson

Full search

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetResourcesMediaSearchResultsJsonRequest;
import org.openapis.openapi.models.operations.GetResourcesMediaSearchResultsJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetResourcesMediaSearchResultsJsonRequest req = new GetResourcesMediaSearchResultsJsonRequest("iure") {{
                max = 634274;
                offset = 988374;
            }};            

            GetResourcesMediaSearchResultsJsonResponse res = sdk.media.getResourcesMediaSearchResultsJson(req);

            if (res.mediaItemWrappeds != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getResourcesMediaIdJson

Information about a specific media item

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetResourcesMediaIdJsonRequest;
import org.openapis.openapi.models.operations.GetResourcesMediaIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetResourcesMediaIdJsonRequest req = new GetResourcesMediaIdJsonRequest(958950L);            

            GetResourcesMediaIdJsonResponse res = sdk.media.getResourcesMediaIdJson(req);

            if (res.mediaItemWrappeds != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getResourcesMediaIdContent

The actual media content (html, image, etc...)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetResourcesMediaIdContentRequest;
import org.openapis.openapi.models.operations.GetResourcesMediaIdContentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetResourcesMediaIdContentRequest req = new GetResourcesMediaIdContentRequest(102044L) {{
                calledByBuild = false;
            }};            

            GetResourcesMediaIdContentResponse res = sdk.media.getResourcesMediaIdContent(req);

            if (res.getResourcesMediaIdContent200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getResourcesMediaIdEmbedJson

Get the javascript or iframe embed code for this item (to embed it on a web page).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetResourcesMediaIdEmbedJsonRequest;
import org.openapis.openapi.models.operations.GetResourcesMediaIdEmbedJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetResourcesMediaIdEmbedJsonRequest req = new GetResourcesMediaIdEmbedJsonRequest(652790L) {{
                displayMethod = "dolorem";
                divId = "culpa";
                excludeDiv = false;
                excludeJquery = false;
                flavor = "consequuntur";
                height = 995300;
                iframeName = "mollitia";
                width = 581850;
            }};            

            GetResourcesMediaIdEmbedJsonResponse res = sdk.media.getResourcesMediaIdEmbedJson(req);

            if (res.getResourcesMediaIdEmbedJSON200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getResourcesMediaIdPreviewJpg

Get the jpg preview of the content item where applicable.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetResourcesMediaIdPreviewJpgRequest;
import org.openapis.openapi.models.operations.GetResourcesMediaIdPreviewJpgResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetResourcesMediaIdPreviewJpgRequest req = new GetResourcesMediaIdPreviewJpgRequest(253291L);            

            GetResourcesMediaIdPreviewJpgResponse res = sdk.media.getResourcesMediaIdPreviewJpg(req);

            if (res.getResourcesMediaIdPreviewJpg200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getResourcesMediaIdRelatedMediaFormat

Get the media related to the current media item.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetResourcesMediaIdRelatedMediaFormatRequest;
import org.openapis.openapi.models.operations.GetResourcesMediaIdRelatedMediaFormatResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetResourcesMediaIdRelatedMediaFormatRequest req = new GetResourcesMediaIdRelatedMediaFormatRequest("commodi", 466311L) {{
                max = 474697;
                offset = 244425;
                sort = "error";
            }};            

            GetResourcesMediaIdRelatedMediaFormatResponse res = sdk.media.getResourcesMediaIdRelatedMediaFormat(req);

            if (res.mediaItemWrappeds != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getResourcesMediaIdSyndicateFormat

Get syndicated content.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetResourcesMediaIdSyndicateFormatRequest;
import org.openapis.openapi.models.operations.GetResourcesMediaIdSyndicateFormatResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetResourcesMediaIdSyndicateFormatRequest req = new GetResourcesMediaIdSyndicateFormatRequest("quia", 338007L) {{
                autoplay = false;
                cssClass = "vitae";
                fontSize = 674752;
                imageFloat = "animi";
                imageMargin = "enim";
                rel = false;
                stripBreaks = false;
                stripClasses = false;
                stripImages = false;
                stripScripts = false;
                stripStyles = false;
            }};            

            GetResourcesMediaIdSyndicateFormatResponse res = sdk.media.getResourcesMediaIdSyndicateFormat(req);

            if (res.syndicateMarshallerWrapped != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getResourcesMediaIdThumbnailJpg

Get the jpg thumbnail of the content item where applicable.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetResourcesMediaIdThumbnailJpgRequest;
import org.openapis.openapi.models.operations.GetResourcesMediaIdThumbnailJpgResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetResourcesMediaIdThumbnailJpgRequest req = new GetResourcesMediaIdThumbnailJpgRequest(138183L);            

            GetResourcesMediaIdThumbnailJpgResponse res = sdk.media.getResourcesMediaIdThumbnailJpg(req);

            if (res.getResourcesMediaIdThumbnailJpg200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getResourcesMediaIdYoutubeMetaDataJson

Youtube meta-data for a video item.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetResourcesMediaIdYoutubeMetaDataJsonRequest;
import org.openapis.openapi.models.operations.GetResourcesMediaIdYoutubeMetaDataJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetResourcesMediaIdYoutubeMetaDataJsonRequest req = new GetResourcesMediaIdYoutubeMetaDataJsonRequest(778346L);            

            GetResourcesMediaIdYoutubeMetaDataJsonResponse res = sdk.media.getResourcesMediaIdYoutubeMetaDataJson(req);

            if (res.getResourcesMediaIdYoutubeMetaDataJSON200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
