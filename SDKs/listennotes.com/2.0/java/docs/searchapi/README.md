# searchAPI

## Overview

Endpoints to search podcasts

### Available Operations

* [getRelatedSearches](#getrelatedsearches) - Fetch related search terms
* [getTrendingSearches](#gettrendingsearches) - Fetch trending search terms
* [search](#search) - Full-text search
* [spellcheck](#spellcheck) - Spell check on a search term
* [typeahead](#typeahead) - Typeahead search

## getRelatedSearches

Suggest related search terms. The results are more comprehensive than from `GET /typeahead`. This endpoint is available only in the PRO/ENTERPRISE plan.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRelatedSearchesRequest;
import org.openapis.openapi.models.operations.GetRelatedSearchesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRelatedSearchesRequest req = new GetRelatedSearchesRequest("natus", "sed");            

            GetRelatedSearchesResponse res = sdk.searchAPI.getRelatedSearches(req);

            if (res.relatedSearchesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTrendingSearches

Fetch up to 10 most recent trending search terms on the Listen Notes platform.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTrendingSearchesRequest;
import org.openapis.openapi.models.operations.GetTrendingSearchesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTrendingSearchesRequest req = new GetTrendingSearchesRequest("iste");            

            GetTrendingSearchesResponse res = sdk.searchAPI.getTrendingSearches(req);

            if (res.trendingSearchesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## search

Full-text search on episodes, podcasts, or curated lists of podcasts.
Use the `offset` parameter to paginate through search results.
The FREE plan allows to see up to 30 search results (or `offset` < 30) per query.
The PRO plan allows to see up to 300 search results (or `offset` < 300) per query.
The ENTERPRISE plan allows to see up to 10,000 search results (or `offset` < 10000) per query.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchRequest;
import org.openapis.openapi.models.operations.SearchResponse;
import org.openapis.openapi.models.operations.SearchSafeModeEnum;
import org.openapis.openapi.models.operations.SearchSortByDateEnum;
import org.openapis.openapi.models.operations.SearchTypeEnum;
import org.openapis.openapi.models.operations.SearchUniquePodcastsEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchRequest req = new SearchRequest("dolor", "natus") {{
                episodeCountMax = 386489L;
                episodeCountMin = 943749L;
                genreIds = "saepe";
                language = "fuga";
                lenMax = 449950L;
                lenMin = 359508L;
                ncid = "iste";
                ocid = "iure";
                offset = 902349L;
                onlyIn = "quidem";
                pageSize = 99280L;
                publishedAfter = 60225L;
                publishedBefore = 969810L;
                region = "est";
                safeMode = SearchSafeModeEnum.ONE;
                sortByDate = SearchSortByDateEnum.ONE;
                type = SearchTypeEnum.EPISODE;
                uniquePodcasts = SearchUniquePodcastsEnum.ZERO;
                updateFreqMax = 358152L;
                updateFreqMin = 128926L;
            }};            

            SearchResponse res = sdk.searchAPI.search(req);

            if (res.searchResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## spellcheck

Suggest a list of words that correct the spelling errors of a search term. This endpoint is available only in the PRO/ENTERPRISE plan.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SpellcheckRequest;
import org.openapis.openapi.models.operations.SpellcheckResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SpellcheckRequest req = new SpellcheckRequest("nobis", "enim");            

            SpellcheckResponse res = sdk.searchAPI.spellcheck(req);

            if (res.spellCheckResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## typeahead

Suggest search terms, podcast genres, and podcasts.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TypeaheadRequest;
import org.openapis.openapi.models.operations.TypeaheadResponse;
import org.openapis.openapi.models.operations.TypeaheadSafeModeEnum;
import org.openapis.openapi.models.operations.TypeaheadShowGenresEnum;
import org.openapis.openapi.models.operations.TypeaheadShowPodcastsEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TypeaheadRequest req = new TypeaheadRequest("omnis", "nemo") {{
                safeMode = TypeaheadSafeModeEnum.ZERO;
                showGenres = TypeaheadShowGenresEnum.ONE;
                showPodcasts = TypeaheadShowPodcastsEnum.ZERO;
            }};            

            TypeaheadResponse res = sdk.searchAPI.typeahead(req);

            if (res.typeaheadResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
