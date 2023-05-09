# audio

### Available Operations

* [addTrackCollectionItems](#addtrackcollectionitems) - Add audio tracks to collections
* [createTrackCollection](#createtrackcollection) - Create audio collections
* [deleteTrackCollection](#deletetrackcollection) - Delete audio collections
* [deleteTrackCollectionItems](#deletetrackcollectionitems) - Remove audio tracks from collections
* [downloadTracks](#downloadtracks) - Download audio tracks
* [getTrack](#gettrack) - Get details about audio tracks
* [getTrackCollection](#gettrackcollection) - Get the details of audio collections
* [getTrackCollectionItems](#gettrackcollectionitems) - Get the contents of audio collections
* [getTrackCollectionList](#gettrackcollectionlist) - List audio collections
* [getTrackLicenseList](#gettracklicenselist) - List audio licenses
* [getTrackList](#gettracklist) - List audio tracks
* [licenseTrack](#licensetrack) - License audio tracks
* [listGenres](#listgenres) - List audio genres
* [listInstruments](#listinstruments) - List audio instruments
* [listMoods](#listmoods) - List audio moods
* [renameTrackCollection](#renametrackcollection) - Rename audio collections
* [searchTracks](#searchtracks) - Search for tracks

## addTrackCollectionItems

This endpoint adds one or more tracks to a collection by track IDs.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddTrackCollectionItemsRequest;
import org.openapis.openapi.models.operations.AddTrackCollectionItemsResponse;
import org.openapis.openapi.models.operations.AddTrackCollectionItemsSecurity;
import org.openapis.openapi.models.shared.CollectionItem;
import org.openapis.openapi.models.shared.CollectionItemRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AddTrackCollectionItemsRequest req = new AddTrackCollectionItemsRequest(                new CollectionItemRequest(                new org.openapis.openapi.models.shared.CollectionItem[]{{
                                                add(new CollectionItem("praesentium") {{
                                                    addedTime = OffsetDateTime.parse("2022-09-05T05:51:25.673Z");
                                                    id = "fa946773-9251-4aa5-ac3f-5ad019da1ffe";
                                                    mediaType = "nihil";
                                                }}),
                                            }});, "voluptatibus");            

            AddTrackCollectionItemsResponse res = sdk.audio.addTrackCollectionItems(req, new AddTrackCollectionItemsSecurity("ipsa") {{
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

## createTrackCollection

This endpoint creates one or more collections (soundboxes). To add tracks, use `POST /v2/audio/collections/{id}/items`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateTrackCollectionResponse;
import org.openapis.openapi.models.operations.CreateTrackCollectionSecurity;
import org.openapis.openapi.models.shared.CollectionCreateRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CollectionCreateRequest req = new CollectionCreateRequest("omnis");            

            CreateTrackCollectionResponse res = sdk.audio.createTrackCollection(req, new CreateTrackCollectionSecurity("voluptate") {{
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

## deleteTrackCollection

This endpoint deletes a collection.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteTrackCollectionRequest;
import org.openapis.openapi.models.operations.DeleteTrackCollectionResponse;
import org.openapis.openapi.models.operations.DeleteTrackCollectionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteTrackCollectionRequest req = new DeleteTrackCollectionRequest("cum");            

            DeleteTrackCollectionResponse res = sdk.audio.deleteTrackCollection(req, new DeleteTrackCollectionSecurity("perferendis") {{
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

## deleteTrackCollectionItems

This endpoint removes one or more tracks from a collection.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteTrackCollectionItemsRequest;
import org.openapis.openapi.models.operations.DeleteTrackCollectionItemsResponse;
import org.openapis.openapi.models.operations.DeleteTrackCollectionItemsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteTrackCollectionItemsRequest req = new DeleteTrackCollectionItemsRequest("doloremque") {{
                itemId = new String[]{{
                    add("ut"),
                    add("maiores"),
                }};
            }};            

            DeleteTrackCollectionItemsResponse res = sdk.audio.deleteTrackCollectionItems(req, new DeleteTrackCollectionItemsSecurity("dicta") {{
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

## downloadTracks

This endpoint redownloads tracks that you have already received a license for. The download links in the response are valid for 8 hours.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DownloadTracksRequest;
import org.openapis.openapi.models.operations.DownloadTracksResponse;
import org.openapis.openapi.models.operations.DownloadTracksSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DownloadTracksRequest req = new DownloadTracksRequest("corporis");            

            DownloadTracksResponse res = sdk.audio.downloadTracks(req, new DownloadTracksSecurity("dolore") {{
                customerAccessCode = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.audioUrl != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTrack

This endpoint shows information about a track, including its genres, instruments, and other attributes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTrackRequest;
import org.openapis.openapi.models.operations.GetTrackResponse;
import org.openapis.openapi.models.operations.GetTrackSecurity;
import org.openapis.openapi.models.operations.GetTrackViewEnum;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTrackRequest req = new GetTrackRequest(480894L) {{
                searchId = "dicta";
                view = GetTrackViewEnum.FULL;
            }};            

            GetTrackResponse res = sdk.audio.getTrack(req, new GetTrackSecurity() {{
                basic = new SchemeBasic("enim", "accusamus") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }};
            }});

            if (res.audio != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTrackCollection

This endpoint gets more detailed information about a collection, including the number of items in it and when it was last updated. To get the tracks in collections, use `GET /v2/audio/collections/{id}/items`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTrackCollectionEmbedEnum;
import org.openapis.openapi.models.operations.GetTrackCollectionRequest;
import org.openapis.openapi.models.operations.GetTrackCollectionResponse;
import org.openapis.openapi.models.operations.GetTrackCollectionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTrackCollectionRequest req = new GetTrackCollectionRequest("commodi") {{
                embed = new org.openapis.openapi.models.operations.GetTrackCollectionEmbedEnum[]{{
                    add(GetTrackCollectionEmbedEnum.SHARE_CODE),
                    add(GetTrackCollectionEmbedEnum.SHARE_CODE),
                    add(GetTrackCollectionEmbedEnum.SHARE_URL),
                    add(GetTrackCollectionEmbedEnum.SHARE_URL),
                }};
                shareCode = "excepturi";
            }};            

            GetTrackCollectionResponse res = sdk.audio.getTrackCollection(req, new GetTrackCollectionSecurity("pariatur") {{
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

## getTrackCollectionItems

This endpoint lists the IDs of tracks in a collection and the date that each was added.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTrackCollectionItemsRequest;
import org.openapis.openapi.models.operations.GetTrackCollectionItemsResponse;
import org.openapis.openapi.models.operations.GetTrackCollectionItemsSecurity;
import org.openapis.openapi.models.operations.GetTrackCollectionItemsSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTrackCollectionItemsRequest req = new GetTrackCollectionItemsRequest("modi") {{
                page = 508969L;
                perPage = 523248L;
                shareCode = "voluptates";
                sort = GetTrackCollectionItemsSortEnum.NEWEST;
            }};            

            GetTrackCollectionItemsResponse res = sdk.audio.getTrackCollectionItems(req, new GetTrackCollectionItemsSecurity("repudiandae") {{
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

## getTrackCollectionList

This endpoint lists your collections of audio tracks and their basic attributes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTrackCollectionListEmbedEnum;
import org.openapis.openapi.models.operations.GetTrackCollectionListRequest;
import org.openapis.openapi.models.operations.GetTrackCollectionListResponse;
import org.openapis.openapi.models.operations.GetTrackCollectionListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTrackCollectionListRequest req = new GetTrackCollectionListRequest() {{
                embed = new org.openapis.openapi.models.operations.GetTrackCollectionListEmbedEnum[]{{
                    add(GetTrackCollectionListEmbedEnum.SHARE_CODE),
                    add(GetTrackCollectionListEmbedEnum.SHARE_URL),
                    add(GetTrackCollectionListEmbedEnum.SHARE_CODE),
                }};
                page = 318569L;
                perPage = 9356L;
            }};            

            GetTrackCollectionListResponse res = sdk.audio.getTrackCollectionList(req, new GetTrackCollectionListSecurity("est") {{
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

## getTrackLicenseList

This endpoint lists existing licenses. You can filter the results according to the track ID to see if you have an existing license for a specific track.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTrackLicenseListDownloadAvailabilityEnum;
import org.openapis.openapi.models.operations.GetTrackLicenseListRequest;
import org.openapis.openapi.models.operations.GetTrackLicenseListResponse;
import org.openapis.openapi.models.operations.GetTrackLicenseListSecurity;
import org.openapis.openapi.models.operations.GetTrackLicenseListSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTrackLicenseListRequest req = new GetTrackLicenseListRequest() {{
                audioId = "quibusdam";
                downloadAvailability = GetTrackLicenseListDownloadAvailabilityEnum.ALL;
                endDate = OffsetDateTime.parse("2021-07-27T01:56:50.693Z");
                license = "quibusdam";
                page = 289406L;
                perPage = 264730L;
                sort = GetTrackLicenseListSortEnum.NEWEST;
                startDate = OffsetDateTime.parse("2022-05-31T22:08:47.731Z");
                teamHistory = false;
                username = "Kavon82";
            }};            

            GetTrackLicenseListResponse res = sdk.audio.getTrackLicenseList(req, new GetTrackLicenseListSecurity("ipsam") {{
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

## getTrackList

This endpoint lists information about one or more audio tracks, including the description and publication date.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTrackListRequest;
import org.openapis.openapi.models.operations.GetTrackListResponse;
import org.openapis.openapi.models.operations.GetTrackListSecurity;
import org.openapis.openapi.models.operations.GetTrackListViewEnum;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTrackListRequest req = new GetTrackListRequest(                new String[]{{
                                add("fugit"),
                            }}) {{
                searchId = "dolorum";
                view = GetTrackListViewEnum.FULL;
            }};            

            GetTrackListResponse res = sdk.audio.getTrackList(req, new GetTrackListSecurity() {{
                basic = new SchemeBasic("tempora", "facilis") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }};
            }});

            if (res.audioDataList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## licenseTrack

This endpoint gets licenses for one or more tracks. The download links in the response are valid for 8 hours.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LicenseTrackLicenseEnum;
import org.openapis.openapi.models.operations.LicenseTrackRequest;
import org.openapis.openapi.models.operations.LicenseTrackResponse;
import org.openapis.openapi.models.operations.LicenseTrackSecurity;
import org.openapis.openapi.models.shared.LicenseAudio;
import org.openapis.openapi.models.shared.LicenseAudioLicenseEnum;
import org.openapis.openapi.models.shared.LicenseAudioRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LicenseTrackRequest req = new LicenseTrackRequest(                new LicenseAudioRequest(                new org.openapis.openapi.models.shared.LicenseAudio[]{{
                                                add(new LicenseAudio("non") {{
                                                    audioId = "labore";
                                                    license = LicenseAudioLicenseEnum.ASSET_ALL_MUSIC;
                                                    searchId = "eum";
                                                }}),
                                                add(new LicenseAudio("provident") {{
                                                    audioId = "eligendi";
                                                    license = LicenseAudioLicenseEnum.PREMIER_MUSIC_PRO;
                                                    searchId = "aliquid";
                                                }}),
                                                add(new LicenseAudio("dolor") {{
                                                    audioId = "necessitatibus";
                                                    license = LicenseAudioLicenseEnum.PREMIER_MUSIC_PRO;
                                                    searchId = "officia";
                                                }}),
                                            }});) {{
                license = LicenseTrackLicenseEnum.ASSET_ALL_MUSIC;
                searchId = "a";
            }};            

            LicenseTrackResponse res = sdk.audio.licenseTrack(req, new LicenseTrackSecurity("dolorum") {{
                customerAccessCode = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.licenseAudioResultDataList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listGenres

This endpoint returns a list of all audio genres.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListGenresRequest;
import org.openapis.openapi.models.operations.ListGenresResponse;
import org.openapis.openapi.models.operations.ListGenresSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListGenresRequest req = new ListGenresRequest() {{
                language = "in";
            }};            

            ListGenresResponse res = sdk.audio.listGenres(req, new ListGenresSecurity() {{
                basic = new SchemeBasic("in", "illum") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }};
            }});

            if (res.genreList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listInstruments

This endpoint returns a list of all audio instruments.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListInstrumentsRequest;
import org.openapis.openapi.models.operations.ListInstrumentsResponse;
import org.openapis.openapi.models.operations.ListInstrumentsSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListInstrumentsRequest req = new ListInstrumentsRequest() {{
                language = "maiores";
            }};            

            ListInstrumentsResponse res = sdk.audio.listInstruments(req, new ListInstrumentsSecurity() {{
                basic = new SchemeBasic("rerum", "dicta") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }};
            }});

            if (res.instrumentList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listMoods

This endpoint returns a list of all audio moods.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListMoodsRequest;
import org.openapis.openapi.models.operations.ListMoodsResponse;
import org.openapis.openapi.models.operations.ListMoodsSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListMoodsRequest req = new ListMoodsRequest() {{
                language = "magnam";
            }};            

            ListMoodsResponse res = sdk.audio.listMoods(req, new ListMoodsSecurity() {{
                basic = new SchemeBasic("cumque", "facere") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }};
            }});

            if (res.moodList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## renameTrackCollection

This endpoint sets a new name for a collection.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RenameTrackCollectionRequest;
import org.openapis.openapi.models.operations.RenameTrackCollectionResponse;
import org.openapis.openapi.models.operations.RenameTrackCollectionSecurity;
import org.openapis.openapi.models.shared.CollectionUpdateRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RenameTrackCollectionRequest req = new RenameTrackCollectionRequest(                new CollectionUpdateRequest("ea");, "aliquid");            

            RenameTrackCollectionResponse res = sdk.audio.renameTrackCollection(req, new RenameTrackCollectionSecurity("laborum") {{
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

## searchTracks

This endpoint searches for tracks. If you specify more than one search parameter, the API uses an AND condition. Array parameters can be specified multiple times; in this case, the API uses an AND or an OR condition with those values, depending on the parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTracksLibraryEnum;
import org.openapis.openapi.models.operations.SearchTracksRequest;
import org.openapis.openapi.models.operations.SearchTracksResponse;
import org.openapis.openapi.models.operations.SearchTracksSecurity;
import org.openapis.openapi.models.operations.SearchTracksSortEnum;
import org.openapis.openapi.models.operations.SearchTracksSortOrderEnum;
import org.openapis.openapi.models.operations.SearchTracksViewEnum;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTracksRequest req = new SearchTracksRequest() {{
                artists = new String[]{{
                    add("non"),
                    add("occaecati"),
                    add("enim"),
                    add("accusamus"),
                }};
                bpm = 965417L;
                bpmFrom = 692532L;
                bpmTo = 588465L;
                duration = 725255L;
                durationFrom = 659669L;
                durationTo = 501324L;
                fields = "deleniti";
                genre = new String[]{{
                    add("amet"),
                    add("deserunt"),
                    add("nisi"),
                    add("vel"),
                }};
                instruments = new String[]{{
                    add("omnis"),
                    add("molestiae"),
                    add("perferendis"),
                }};
                isInstrumental = false;
                language = "nihil";
                library = SearchTracksLibraryEnum.SHUTTERSTOCK;
                moods = new String[]{{
                    add("id"),
                    add("labore"),
                    add("labore"),
                }};
                page = 383462L;
                perPage = 618016L;
                query = "nobis";
                sort = SearchTracksSortEnum.TITLE;
                sortOrder = SearchTracksSortOrderEnum.DESC;
                view = SearchTracksViewEnum.MINIMAL;
                vocalDescription = "architecto";
            }};            

            SearchTracksResponse res = sdk.audio.searchTracks(req, new SearchTracksSecurity() {{
                basic = new SchemeBasic("magnam", "et") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }};
            }});

            if (res.audioSearchResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
