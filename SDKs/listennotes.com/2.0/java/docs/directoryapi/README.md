# directoryAPI

## Overview

Endpoints to fetch podcasts data

### Available Operations

* [getBestPodcasts](#getbestpodcasts) - Fetch a list of best podcasts by genre
* [getCuratedPodcastById](#getcuratedpodcastbyid) - Fetch a curated list of podcasts by id
* [getCuratedPodcasts](#getcuratedpodcasts) - Fetch curated lists of podcasts
* [getEpisodeById](#getepisodebyid) - Fetch detailed meta data for an episode by id
* [getEpisodeRecommendations](#getepisoderecommendations) - Fetch recommendations for an episode
* [getEpisodesInBatch](#getepisodesinbatch) - Batch fetch basic meta data for episodes
* [getGenres](#getgenres) - Fetch a list of podcast genres
* [getLanguages](#getlanguages) - Fetch a list of supported languages for podcasts
* [getPodcastById](#getpodcastbyid) - Fetch detailed meta data and episodes for a podcast by id
* [getPodcastRecommendations](#getpodcastrecommendations) - Fetch recommendations for a podcast
* [getPodcastsInBatch](#getpodcastsinbatch) - Batch fetch basic meta data for podcasts
* [getRegions](#getregions) - Fetch a list of supported countries/regions for best podcasts
* [justListen](#justlisten) - Fetch a random podcast episode

## getBestPodcasts

Get a list of curated best podcasts by genre,
which are curated by Listen Notes staffs based on various signals from the Internet, e.g.,
top charts on other podcast platforms, recommendations from mainstream media,
user activities on listennotes.com...
You can get the genre ids from `GET /genres` endpoint.
This endpoint returns same data as https://www.listennotes.com/best-podcasts/


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBestPodcastsRequest;
import org.openapis.openapi.models.operations.GetBestPodcastsResponse;
import org.openapis.openapi.models.operations.GetBestPodcastsSortEnum;
import org.openapis.openapi.models.shared.SafeModeParamEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBestPodcastsRequest req = new GetBestPodcastsRequest("vel") {{
                genreId = "error";
                language = "deserunt";
                page = 384382L;
                publisherRegion = "iure";
                region = "magnam";
                safeMode = SafeModeParamEnum.ONE;
                sort = GetBestPodcastsSortEnum.RECENT_ADDED_FIRST;
            }};            

            GetBestPodcastsResponse res = sdk.directoryAPI.getBestPodcasts(req);

            if (res.bestPodcastsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCuratedPodcastById

Get detailed meta data of all podcasts in a specific curated list.
This endpoint returns same data as https://www.listennotes.com/curated-podcasts/


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCuratedPodcastByIdRequest;
import org.openapis.openapi.models.operations.GetCuratedPodcastByIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCuratedPodcastByIdRequest req = new GetCuratedPodcastByIdRequest("delectus", "tempora");            

            GetCuratedPodcastByIdResponse res = sdk.directoryAPI.getCuratedPodcastById(req);

            if (res.curatedListFull != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCuratedPodcasts

A bunch of curated lists from online media. For each list, you'll get basic info of up to 5 podcasts. To get detailed meta data of all podcasts in a specific list, you need to use `GET /curated_podcasts/{id}`. We add new curated lists to the database on a daily basis.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCuratedPodcastsRequest;
import org.openapis.openapi.models.operations.GetCuratedPodcastsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCuratedPodcastsRequest req = new GetCuratedPodcastsRequest("suscipit") {{
                page = 477665L;
            }};            

            GetCuratedPodcastsResponse res = sdk.directoryAPI.getCuratedPodcasts(req);

            if (res.getCuratedPodcastsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEpisodeById

Fetch detailed meta data for a specific episode.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEpisodeByIdRequest;
import org.openapis.openapi.models.operations.GetEpisodeByIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEpisodeByIdRequest req = new GetEpisodeByIdRequest("minus", "placeat") {{
                showTranscript = 528895L;
            }};            

            GetEpisodeByIdResponse res = sdk.directoryAPI.getEpisodeById(req);

            if (res.episodeFull != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEpisodeRecommendations

Fetch up to 8 episode recommendations based on the given episode id.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEpisodeRecommendationsRequest;
import org.openapis.openapi.models.operations.GetEpisodeRecommendationsResponse;
import org.openapis.openapi.models.shared.SafeModeParamEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEpisodeRecommendationsRequest req = new GetEpisodeRecommendationsRequest("iusto", "excepturi") {{
                safeMode = SafeModeParamEnum.ZERO;
            }};            

            GetEpisodeRecommendationsResponse res = sdk.directoryAPI.getEpisodeRecommendations(req);

            if (res.getEpisodeRecommendationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEpisodesInBatch

Batch fetch basic meta data for up to 10 episodes. This endpoint could be used to implement custom playlists for individual episodes. For detailed meta data of an individual episode, you need to use `GET /episodes/{id}`. This endpoint is available only in the PRO/ENTERPRISE plan.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEpisodesInBatchRequest;
import org.openapis.openapi.models.operations.GetEpisodesInBatchResponse;
import org.openapis.openapi.models.shared.GetEpisodesInBatchForm;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEpisodesInBatchRequest req = new GetEpisodesInBatchRequest(                new GetEpisodesInBatchForm("recusandae");, "temporibus");            

            GetEpisodesInBatchResponse res = sdk.directoryAPI.getEpisodesInBatch(req);

            if (res.getEpisodesInBatchResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGenres

Get a list of podcast genres that are supported in Listen Notes.
The genre id can be passed to other endpoints as a parameter to get podcasts in a specific genre,
e.g., `GET /best_podcasts`, `GET /search`...
You may want to cache the list of genres on the client side.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGenresRequest;
import org.openapis.openapi.models.operations.GetGenresResponse;
import org.openapis.openapi.models.operations.GetGenresTopLevelOnlyEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetGenresRequest req = new GetGenresRequest("ab") {{
                topLevelOnly = GetGenresTopLevelOnlyEnum.ZERO;
            }};            

            GetGenresResponse res = sdk.directoryAPI.getGenres(req);

            if (res.getGenresResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLanguages

Get a list of languages that are supported in Listen Notes database. You can use the language string as query parameter in `GET /search`.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLanguagesRequest;
import org.openapis.openapi.models.operations.GetLanguagesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetLanguagesRequest req = new GetLanguagesRequest("veritatis");            

            GetLanguagesResponse res = sdk.directoryAPI.getLanguages(req);

            if (res.getLanguagesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPodcastById

Fetch detailed meta data and episodes for a specific podcast (up to 10 episodes each time).
You can use the **next_episode_pub_date** parameter to do pagination and fetch more episodes.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPodcastByIdRequest;
import org.openapis.openapi.models.operations.GetPodcastByIdResponse;
import org.openapis.openapi.models.operations.GetPodcastByIdSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPodcastByIdRequest req = new GetPodcastByIdRequest("deserunt", "perferendis") {{
                nextEpisodePubDate = 368241L;
                sort = GetPodcastByIdSortEnum.OLDEST_FIRST;
            }};            

            GetPodcastByIdResponse res = sdk.directoryAPI.getPodcastById(req);

            if (res.podcastFull != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPodcastRecommendations

Fetch up to 8 podcast recommendations based on the given podcast id.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPodcastRecommendationsRequest;
import org.openapis.openapi.models.operations.GetPodcastRecommendationsResponse;
import org.openapis.openapi.models.shared.SafeModeParamEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPodcastRecommendationsRequest req = new GetPodcastRecommendationsRequest("sapiente", "quo") {{
                safeMode = SafeModeParamEnum.ZERO;
            }};            

            GetPodcastRecommendationsResponse res = sdk.directoryAPI.getPodcastRecommendations(req);

            if (res.getPodcastRecommendationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPodcastsInBatch

Batch fetch basic meta data for up to 10 podcasts.
This endpoint could be used to build something like OPML import,
allowing users to import a bunch of podcasts via rss urls.
For detailed meta data (including episodes) of an individual podcast, you need to use `GET /podcasts/{id}`. This endpoint is available only in the PRO/ENTERPRISE plan.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPodcastsInBatchRequest;
import org.openapis.openapi.models.operations.GetPodcastsInBatchResponse;
import org.openapis.openapi.models.shared.GetPodcastsInBatchForm;
import org.openapis.openapi.models.shared.GetPodcastsInBatchFormShowLatestEpisodesEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPodcastsInBatchRequest req = new GetPodcastsInBatchRequest("at") {{
                getPodcastsInBatchForm = new GetPodcastsInBatchForm() {{
                    ids = "at";
                    itunesIds = "maiores";
                    nextEpisodePubDate = 473608L;
                    rsses = "quod";
                    showLatestEpisodes = GetPodcastsInBatchFormShowLatestEpisodesEnum.ONE;
                    spotifyIds = "esse";
                }};;
            }};            

            GetPodcastsInBatchResponse res = sdk.directoryAPI.getPodcastsInBatch(req);

            if (res.getPodcastsInBatchResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRegions

It returns a dictionary of country codes (e.g., us, gb...) & country names (United States, United Kingdom...). The country code is used in the query parameter **region** of `GET /best_podcasts`.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRegionsRequest;
import org.openapis.openapi.models.operations.GetRegionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRegionsRequest req = new GetRegionsRequest("totam");            

            GetRegionsResponse res = sdk.directoryAPI.getRegions(req);

            if (res.getRegionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## justListen

Recently published episodes are more likely to be fetched. Good luck!

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.JustListenRequest;
import org.openapis.openapi.models.operations.JustListenResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            JustListenRequest req = new JustListenRequest("porro");            

            JustListenResponse res = sdk.directoryAPI.justListen(req);

            if (res.episodeSimple != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
