# SDK

## Overview

RiteKit API is based on REST principles.

Authentication uses standard OAuth 2.0 process

##Getting started

1. Sign up for [RiteKit](https://ritekit.com/)

1. Go to [developer dashboard](https://ritekit.com/developer/dashboard/)

1. Click "Create a token" button to get your **Client ID** and **Client secret**

1. When you reach your free limit of calls per month, [upgrade to paid tiers](https://ritekit.com/developer/)

## Options for authorizing API Calls

#### Using Client ID directly

You can directly connect to our API using your **client ID** by sending it as a GET query parameter. This option is simple (no need for oAuth) but it should be used only in case the Client ID is not exposed publicly.

GET  https://api.ritekit.com/v1/stats/multiple-hashtags?tags=php&client_id=292c6912e7710c838347ae178b4a

### Available Operations

* [animateImage](#animateimage) - Animate Image
* [autoEmojify](#autoemojify) - Auto-Emojify
* [autoHashtag](#autohashtag) - Auto-Hashtag
* [companyLogo](#companylogo) - Company Logo
* [emojiSuggestions](#emojisuggestions) - Emoji Suggestions
* [hashtagHistory](#hashtaghistory) - Hashtag History
* [hashtagStats](#hashtagstats) - Hashtag Stats
* [hashtagSuggestions](#hashtagsuggestions) - Hashtag Suggestions
* [hashtagsCleaner](#hashtagscleaner) - Hashtags cleaner
* [listOfCTAs](#listofctas) - List of CTAs
* [shortenLink](#shortenlink) - Shorten Link
* [textToImage](#texttoimage) - Text to Image
* [trendingHashtags](#trendinghashtags) - Trending Hashtags

## animateImage

Returns URL of an animated GIF.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnimateImageRequest;
import org.openapis.openapi.models.operations.AnimateImageResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnimateImageRequest req = new AnimateImageRequest("distinctio", "quibusdam");            

            AnimateImageResponse res = sdk.sdk.animateImage(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## autoEmojify

Returns text of the post with emoji added

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AutoEmojifyRequest;
import org.openapis.openapi.models.operations.AutoEmojifyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AutoEmojifyRequest req = new AutoEmojifyRequest("unde");            

            AutoEmojifyResponse res = sdk.sdk.autoEmojify(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## autoHashtag

Returns auto-hashtagged text of the post.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AutoHashtagRequest;
import org.openapis.openapi.models.operations.AutoHashtagResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AutoHashtagRequest req = new AutoHashtagRequest("nulla") {{
                hashtagPosition = "corrupti";
                maxHashtags = 847252L;
            }};            

            AutoHashtagResponse res = sdk.sdk.autoHashtag(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## companyLogo

Returns a company logo based on website domain. If the logo is not in our database yet, it will be extracted from the site on the fly. White logo background is automatically removed to make the logo look better on color backgrounds.

Note: It is not possible to access our company logo API publicly without authentication. If you wish to do so, you have to create proxy on your own server that calls our API from the server side.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CompanyLogoRequest;
import org.openapis.openapi.models.operations.CompanyLogoResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CompanyLogoRequest req = new CompanyLogoRequest("vel");            

            CompanyLogoResponse res = sdk.sdk.companyLogo(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## emojiSuggestions

Returns list of emoji suggestions for a given text of the post

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EmojiSuggestionsRequest;
import org.openapis.openapi.models.operations.EmojiSuggestionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EmojiSuggestionsRequest req = new EmojiSuggestionsRequest("error");            

            EmojiSuggestionsResponse res = sdk.sdk.emojiSuggestions(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## hashtagHistory

Returns historical stats for a given hashtag from the last 30 days

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.HashtagHistoryRequest;
import org.openapis.openapi.models.operations.HashtagHistoryResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            HashtagHistoryRequest req = new HashtagHistoryRequest("deserunt");            

            HashtagHistoryResponse res = sdk.sdk.hashtagHistory(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## hashtagStats

Returns real-time stats for up to 100 hashtags (updated hourly).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.HashtagStatsRequest;
import org.openapis.openapi.models.operations.HashtagStatsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            HashtagStatsRequest req = new HashtagStatsRequest(                new Object[]{{
                                add("iure"),
                                add("magnam"),
                            }});            

            HashtagStatsResponse res = sdk.sdk.hashtagStats(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## hashtagSuggestions

Returns list of hashtag suggestions for a single-word topic or a shorter text up to 1000 characters. Takes into account both semantic relevancy and real-time hashtag popularity.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.HashtagSuggestionsRequest;
import org.openapis.openapi.models.operations.HashtagSuggestionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            HashtagSuggestionsRequest req = new HashtagSuggestionsRequest("debitis");            

            HashtagSuggestionsResponse res = sdk.sdk.hashtagSuggestions(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## hashtagsCleaner

Remove banned hashtags before posting to Instagram

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.HashtagsCleanerRequest;
import org.openapis.openapi.models.operations.HashtagsCleanerResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            HashtagsCleanerRequest req = new HashtagsCleanerRequest("ipsa");            

            HashtagsCleanerResponse res = sdk.sdk.hashtagsCleaner(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listOfCTAs

Returns list of available CTA for current user. Requires each user to authenticate with RiteKit

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListOfCTAsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListOfCTAsResponse res = sdk.sdk.listOfCTAs();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## shortenLink

Returns a shorten link with a given CTA.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ShortenLinkRequest;
import org.openapis.openapi.models.operations.ShortenLinkResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ShortenLinkRequest req = new ShortenLinkRequest(963663L, "tempora");            

            ShortenLinkResponse res = sdk.sdk.shortenLink(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## textToImage

Returns URL of an image created from text according to given style parameters

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TextToImageRequest;
import org.openapis.openapi.models.operations.TextToImageResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TextToImageRequest req = new TextToImageRequest("suscipit", "molestiae", "minus", "placeat", "voluptatum", "iusto", "excepturi", 392785L, 925597L, "temporibus", "ab", "quis", "veritatis", "deserunt", "perferendis", "ipsam") {{
                showQuoteMark = 832620L;
            }};            

            TextToImageResponse res = sdk.sdk.textToImage(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## trendingHashtags

Returns list of hashtags currently trending on Twitter

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TrendingHashtagsRequest;
import org.openapis.openapi.models.operations.TrendingHashtagsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TrendingHashtagsRequest req = new TrendingHashtagsRequest() {{
                green = false;
                latin = false;
            }};            

            TrendingHashtagsResponse res = sdk.sdk.trendingHashtags(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
