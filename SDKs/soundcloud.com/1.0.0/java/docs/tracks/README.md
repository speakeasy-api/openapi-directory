# tracks

## Overview

Tracks Endpoints.

### Available Operations

* [deleteTracksTrackId](#deletetrackstrackid) - Deletes a track.
* [getTracksTrackId](#gettrackstrackid) - Returns a track.
* [getTracksTrackIdComments](#gettrackstrackidcomments) - Returns the comments posted on the track(track_id).
* [getTracksTrackIdFavoriters](#gettrackstrackidfavoriters) - Returns a list of users who have favorited or liked the track.
* [getTracksTrackIdRelated](#gettrackstrackidrelated) - Returns all related tracks of track on SoundCloud.
* [getTracksTrackIdReposters](#gettrackstrackidreposters) - Returns a collection of track's reposters.
* [getTracksTrackIdStreams](#gettrackstrackidstreams) - Returns a track's streamable URLs
* [postTracks](#posttracks) - Uploads a new track.
* [postTracksTrackIdComments](#posttrackstrackidcomments) - Returns the newly created comment on success
* [putTracksTrackIdJson](#puttrackstrackidjson) - Updates a track's information.
* [putTracksTrackIdMultipart](#puttrackstrackidmultipart) - Updates a track's information.

## deleteTracksTrackId

Deletes a track.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteTracksTrackIdRequest;
import org.openapis.openapi.models.operations.DeleteTracksTrackIdResponse;
import org.openapis.openapi.models.operations.DeleteTracksTrackIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteTracksTrackIdRequest req = new DeleteTracksTrackIdRequest(166847L);            

            DeleteTracksTrackIdResponse res = sdk.tracks.deleteTracksTrackId(req, new DeleteTracksTrackIdSecurity("sunt") {{
                authHeader = "YOUR_API_KEY_HERE";
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

## getTracksTrackId

Returns a track.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTracksTrackIdRequest;
import org.openapis.openapi.models.operations.GetTracksTrackIdResponse;
import org.openapis.openapi.models.operations.GetTracksTrackIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTracksTrackIdRequest req = new GetTracksTrackIdRequest(779051L) {{
                secretToken = "illum";
            }};            

            GetTracksTrackIdResponse res = sdk.tracks.getTracksTrackId(req, new GetTracksTrackIdSecurity("pariatur") {{
                clientId = "YOUR_API_KEY_HERE";
            }});

            if (res.track != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTracksTrackIdComments

Returns the comments posted on the track(track_id).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTracksTrackIdCommentsRequest;
import org.openapis.openapi.models.operations.GetTracksTrackIdCommentsResponse;
import org.openapis.openapi.models.operations.GetTracksTrackIdCommentsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTracksTrackIdCommentsRequest req = new GetTracksTrackIdCommentsRequest(807319L) {{
                limit = 411397L;
                linkedPartitioning = false;
                offset = 569101L;
            }};            

            GetTracksTrackIdCommentsResponse res = sdk.tracks.getTracksTrackIdComments(req, new GetTracksTrackIdCommentsSecurity("odit") {{
                clientId = "YOUR_API_KEY_HERE";
            }});

            if (res.getTracksTrackIdComments200ApplicationJSONOneOf != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTracksTrackIdFavoriters

Returns a list of users who have favorited or liked the track.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTracksTrackIdFavoritersRequest;
import org.openapis.openapi.models.operations.GetTracksTrackIdFavoritersResponse;
import org.openapis.openapi.models.operations.GetTracksTrackIdFavoritersSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTracksTrackIdFavoritersRequest req = new GetTracksTrackIdFavoritersRequest(407183L) {{
                limit = 33222L;
                offset = 69167L;
            }};            

            GetTracksTrackIdFavoritersResponse res = sdk.tracks.getTracksTrackIdFavoriters(req, new GetTracksTrackIdFavoritersSecurity("maiores") {{
                clientId = "YOUR_API_KEY_HERE";
            }});

            if (res.usersList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTracksTrackIdRelated

Returns all related tracks of track on SoundCloud.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTracksTrackIdRelatedRequest;
import org.openapis.openapi.models.operations.GetTracksTrackIdRelatedResponse;
import org.openapis.openapi.models.operations.GetTracksTrackIdRelatedSecurity;
import org.openapis.openapi.models.shared.AccessEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTracksTrackIdRelatedRequest req = new GetTracksTrackIdRelatedRequest(697429L) {{
                access = new org.openapis.openapi.models.shared.AccessEnum[]{{
                    add(AccessEnum.PREVIEW),
                    add(AccessEnum.PREVIEW),
                }};
                limit = 722056L;
                linkedPartitioning = false;
                offset = 50588L;
            }};            

            GetTracksTrackIdRelatedResponse res = sdk.tracks.getTracksTrackIdRelated(req, new GetTracksTrackIdRelatedSecurity("pariatur") {{
                clientId = "YOUR_API_KEY_HERE";
            }});

            if (res.getTracksTrackIdRelated200ApplicationJSONOneOf != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTracksTrackIdReposters

Returns a collection of track's reposters.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTracksTrackIdRepostersRequest;
import org.openapis.openapi.models.operations.GetTracksTrackIdRepostersResponse;
import org.openapis.openapi.models.operations.GetTracksTrackIdRepostersSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTracksTrackIdRepostersRequest req = new GetTracksTrackIdRepostersRequest(365496L) {{
                limit = 975522L;
            }};            

            GetTracksTrackIdRepostersResponse res = sdk.tracks.getTracksTrackIdReposters(req, new GetTracksTrackIdRepostersSecurity("perferendis") {{
                clientId = "YOUR_API_KEY_HERE";
            }});

            if (res.metaUsers != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTracksTrackIdStreams

Returns a track's streamable URLs

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTracksTrackIdStreamsRequest;
import org.openapis.openapi.models.operations.GetTracksTrackIdStreamsResponse;
import org.openapis.openapi.models.operations.GetTracksTrackIdStreamsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTracksTrackIdStreamsRequest req = new GetTracksTrackIdStreamsRequest(855804L) {{
                secretToken = "amet";
            }};            

            GetTracksTrackIdStreamsResponse res = sdk.tracks.getTracksTrackIdStreams(req, new GetTracksTrackIdStreamsSecurity("aut") {{
                clientId = "YOUR_API_KEY_HERE";
            }});

            if (res.streams != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postTracks

Uploads a new track.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostTracksResponse;
import org.openapis.openapi.models.operations.PostTracksSecurity;
import org.openapis.openapi.models.shared.TrackDataRequest;
import org.openapis.openapi.models.shared.TrackDataRequestOnlyForUploading;
import org.openapis.openapi.models.shared.TrackDataRequestOnlyForUploadingForPROUsers;
import org.openapis.openapi.models.shared.TrackDataRequestTrackEmbeddableByEnum;
import org.openapis.openapi.models.shared.TrackDataRequestTrackLicenseEnum;
import org.openapis.openapi.models.shared.TrackDataRequestTrackSharingEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.TrackDataRequest req = new TrackDataRequest() {{
                trackArtworkData = new TrackDataRequestOnlyForUploadingForPROUsers("cumque", "corporis".getBytes());;
                trackAssetData = new TrackDataRequestOnlyForUploading("hic", "libero".getBytes());;
                trackCommentable = false;
                trackDescription = "nobis";
                trackDownloadable = false;
                trackEmbeddableBy = TrackDataRequestTrackEmbeddableByEnum.ALL;
                trackGenre = "quis";
                trackIsrc = "totam";
                trackLabelName = "dignissimos";
                trackLicense = TrackDataRequestTrackLicenseEnum.NO_RIGHTS_RESERVED;
                trackPermalink = "quis";
                trackPurchaseUrl = "nesciunt";
                trackRelease = "eos";
                trackReleaseDate = "perferendis";
                trackSharing = TrackDataRequestTrackSharingEnum.PUBLIC_;
                trackStreamable = false;
                trackTagList = "minus";
                trackTitle = "quam";
            }};            

            PostTracksResponse res = sdk.tracks.postTracks(req, new PostTracksSecurity("dolor", "vero") {{
                authHeader = "YOUR_API_KEY_HERE";
                clientId = "YOUR_API_KEY_HERE";
            }});

            if (res.track != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postTracksTrackIdComments

Returns the newly created comment on success

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostTracksTrackIdCommentsRequest;
import org.openapis.openapi.models.operations.PostTracksTrackIdCommentsRequestBody;
import org.openapis.openapi.models.operations.PostTracksTrackIdCommentsRequestBodyComment;
import org.openapis.openapi.models.operations.PostTracksTrackIdCommentsResponse;
import org.openapis.openapi.models.operations.PostTracksTrackIdCommentsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostTracksTrackIdCommentsRequest req = new PostTracksTrackIdCommentsRequest(                new PostTracksTrackIdCommentsRequestBody() {{
                                comment = new PostTracksTrackIdCommentsRequestBodyComment("test comment") {{
                                    timestamp = "hic";
                                }};;
                            }};, 928082L);            

            PostTracksTrackIdCommentsResponse res = sdk.tracks.postTracksTrackIdComments(req, new PostTracksTrackIdCommentsSecurity("omnis", "facilis") {{
                authHeader = "YOUR_API_KEY_HERE";
                clientId = "YOUR_API_KEY_HERE";
            }});

            if (res.comment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putTracksTrackIdJson

Updates a track's information.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutTracksTrackIdJsonRequest;
import org.openapis.openapi.models.operations.PutTracksTrackIdJsonResponse;
import org.openapis.openapi.models.operations.PutTracksTrackIdJsonSecurity;
import org.openapis.openapi.models.shared.TrackMetadataRequest;
import org.openapis.openapi.models.shared.TrackMetadataRequestTrack;
import org.openapis.openapi.models.shared.TrackMetadataRequestTrackEmbeddableByEnum;
import org.openapis.openapi.models.shared.TrackMetadataRequestTrackLicenseEnum;
import org.openapis.openapi.models.shared.TrackMetadataRequestTrackSharingEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutTracksTrackIdJsonRequest req = new PutTracksTrackIdJsonRequest(596656L) {{
                trackMetadataRequest = new TrackMetadataRequest() {{
                    track = new TrackMetadataRequestTrack() {{
                        commentable = false;
                        description = "voluptatem";
                        downloadable = false;
                        embeddableBy = TrackMetadataRequestTrackEmbeddableByEnum.NONE;
                        genre = "consequuntur";
                        isrc = "blanditiis";
                        labelName = "error";
                        license = TrackMetadataRequestTrackLicenseEnum.NO_RIGHTS_RESERVED;
                        permalink = "occaecati";
                        purchaseUrl = "rerum";
                        release = "adipisci";
                        releaseDate = "asperiores";
                        sharing = TrackMetadataRequestTrackSharingEnum.PRIVATE_;
                        streamable = false;
                        tagList = "modi";
                        title = "Miss";
                    }};;
                }};;
            }};            

            PutTracksTrackIdJsonResponse res = sdk.tracks.putTracksTrackIdJson(req, new PutTracksTrackIdJsonSecurity("dolorum") {{
                authHeader = "YOUR_API_KEY_HERE";
            }});

            if (res.track != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putTracksTrackIdMultipart

Updates a track's information.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutTracksTrackIdMultipartRequest;
import org.openapis.openapi.models.operations.PutTracksTrackIdMultipartResponse;
import org.openapis.openapi.models.operations.PutTracksTrackIdMultipartSecurity;
import org.openapis.openapi.models.shared.TrackDataRequest;
import org.openapis.openapi.models.shared.TrackDataRequestOnlyForUploading;
import org.openapis.openapi.models.shared.TrackDataRequestOnlyForUploadingForPROUsers;
import org.openapis.openapi.models.shared.TrackDataRequestTrackEmbeddableByEnum;
import org.openapis.openapi.models.shared.TrackDataRequestTrackLicenseEnum;
import org.openapis.openapi.models.shared.TrackDataRequestTrackSharingEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutTracksTrackIdMultipartRequest req = new PutTracksTrackIdMultipartRequest(535633L) {{
                trackDataRequest = new TrackDataRequest() {{
                    trackArtworkData = new TrackDataRequestOnlyForUploadingForPROUsers("pariatur", "provident".getBytes());;
                    trackAssetData = new TrackDataRequestOnlyForUploading("nobis", "libero".getBytes());;
                    trackCommentable = false;
                    trackDescription = "delectus";
                    trackDownloadable = false;
                    trackEmbeddableBy = TrackDataRequestTrackEmbeddableByEnum.ALL;
                    trackGenre = "quos";
                    trackIsrc = "aliquid";
                    trackLabelName = "dolorem";
                    trackLicense = TrackDataRequestTrackLicenseEnum.ALL_RIGHTS_RESERVED;
                    trackPermalink = "dolor";
                    trackPurchaseUrl = "qui";
                    trackRelease = "ipsum";
                    trackReleaseDate = "hic";
                    trackSharing = TrackDataRequestTrackSharingEnum.PRIVATE_;
                    trackStreamable = false;
                    trackTagList = "cum";
                    trackTitle = "voluptate";
                }};;
            }};            

            PutTracksTrackIdMultipartResponse res = sdk.tracks.putTracksTrackIdMultipart(req, new PutTracksTrackIdMultipartSecurity("dignissimos") {{
                authHeader = "YOUR_API_KEY_HERE";
            }});

            if (res.track != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
