# playlists

## Overview

Playlists Endpoints.

### Available Operations

* [deletePlaylistsPlaylistId](#deleteplaylistsplaylistid) - Deletes a playlist.
* [getPlaylistsPlaylistId](#getplaylistsplaylistid) - Returns a playlist.
* [getPlaylistsPlaylistIdReposters](#getplaylistsplaylistidreposters) - Returns a collection of playlist's reposters.
* [getPlaylistsPlaylistIdTracks](#getplaylistsplaylistidtracks) - Returns tracks under a playlist.
* [postPlaylists](#postplaylists) - Creates a playlist.
* [putPlaylistsPlaylistId](#putplaylistsplaylistid) - Updates a playlist.

## deletePlaylistsPlaylistId

Deletes a playlist.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletePlaylistsPlaylistIdRequest;
import org.openapis.openapi.models.operations.DeletePlaylistsPlaylistIdResponse;
import org.openapis.openapi.models.operations.DeletePlaylistsPlaylistIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeletePlaylistsPlaylistIdRequest req = new DeletePlaylistsPlaylistIdRequest(359508L);            

            DeletePlaylistsPlaylistIdResponse res = sdk.playlists.deletePlaylistsPlaylistId(req, new DeletePlaylistsPlaylistIdSecurity("iste", "iure") {{
                authHeader = "YOUR_API_KEY_HERE";
                clientId = "YOUR_API_KEY_HERE";
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

## getPlaylistsPlaylistId

Returns a playlist.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPlaylistsPlaylistIdRequest;
import org.openapis.openapi.models.operations.GetPlaylistsPlaylistIdResponse;
import org.openapis.openapi.models.operations.GetPlaylistsPlaylistIdSecurity;
import org.openapis.openapi.models.shared.AccessEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPlaylistsPlaylistIdRequest req = new GetPlaylistsPlaylistIdRequest(902349L) {{
                access = new org.openapis.openapi.models.shared.AccessEnum[]{{
                    add(AccessEnum.PLAYABLE),
                    add(AccessEnum.PLAYABLE),
                    add(AccessEnum.BLOCKED),
                }};
                secretToken = "est";
            }};            

            GetPlaylistsPlaylistIdResponse res = sdk.playlists.getPlaylistsPlaylistId(req, new GetPlaylistsPlaylistIdSecurity("mollitia", "laborum") {{
                authHeader = "YOUR_API_KEY_HERE";
                clientId = "YOUR_API_KEY_HERE";
            }});

            if (res.playlist != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPlaylistsPlaylistIdReposters

Returns a collection of playlist's reposters.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPlaylistsPlaylistIdRepostersRequest;
import org.openapis.openapi.models.operations.GetPlaylistsPlaylistIdRepostersResponse;
import org.openapis.openapi.models.operations.GetPlaylistsPlaylistIdRepostersSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPlaylistsPlaylistIdRepostersRequest req = new GetPlaylistsPlaylistIdRepostersRequest(170909L) {{
                limit = 210382L;
            }};            

            GetPlaylistsPlaylistIdRepostersResponse res = sdk.playlists.getPlaylistsPlaylistIdReposters(req, new GetPlaylistsPlaylistIdRepostersSecurity("corporis") {{
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

## getPlaylistsPlaylistIdTracks

Returns tracks under a playlist.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPlaylistsPlaylistIdTracksRequest;
import org.openapis.openapi.models.operations.GetPlaylistsPlaylistIdTracksResponse;
import org.openapis.openapi.models.operations.GetPlaylistsPlaylistIdTracksSecurity;
import org.openapis.openapi.models.shared.AccessEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPlaylistsPlaylistIdTracksRequest req = new GetPlaylistsPlaylistIdTracksRequest(128926L) {{
                access = new org.openapis.openapi.models.shared.AccessEnum[]{{
                    add(AccessEnum.PLAYABLE),
                    add(AccessEnum.PREVIEW),
                    add(AccessEnum.PREVIEW),
                    add(AccessEnum.PLAYABLE),
                }};
                linkedPartitioning = false;
                secretToken = "excepturi";
            }};            

            GetPlaylistsPlaylistIdTracksResponse res = sdk.playlists.getPlaylistsPlaylistIdTracks(req, new GetPlaylistsPlaylistIdTracksSecurity("accusantium", "iure") {{
                authHeader = "YOUR_API_KEY_HERE";
                clientId = "YOUR_API_KEY_HERE";
            }});

            if (res.getPlaylistsPlaylistIdTracks200ApplicationJSONOneOf != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPlaylists

Creates a playlist.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostPlaylistsResponse;
import org.openapis.openapi.models.operations.PostPlaylistsSecurity;
import org.openapis.openapi.models.shared.CreateUpdatePlaylistRequest;
import org.openapis.openapi.models.shared.CreateUpdatePlaylistRequestPlaylist;
import org.openapis.openapi.models.shared.CreateUpdatePlaylistRequestPlaylistSharingEnum;
import org.openapis.openapi.models.shared.CreateUpdatePlaylistRequestPlaylistTracks;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CreateUpdatePlaylistRequest req = new CreateUpdatePlaylistRequest() {{
                playlist = new CreateUpdatePlaylistRequestPlaylist() {{
                    description = "culpa";
                    sharing = CreateUpdatePlaylistRequestPlaylistSharingEnum.PRIVATE_;
                    title = "Dr.";
                    tracks = new org.openapis.openapi.models.shared.CreateUpdatePlaylistRequestPlaylistTracks[]{{
                        add(new CreateUpdatePlaylistRequestPlaylistTracks("quasi") {{
                            id = "a3a2fa94-6773-4925-9aa5-2c3f5ad019da";
                        }}),
                    }};
                }};;
            }};            

            PostPlaylistsResponse res = sdk.playlists.postPlaylists(req, new PostPlaylistsSecurity("reiciendis") {{
                authHeader = "YOUR_API_KEY_HERE";
            }});

            if (res.postPlaylists201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putPlaylistsPlaylistId

Updates a playlist.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutPlaylistsPlaylistIdRequest;
import org.openapis.openapi.models.operations.PutPlaylistsPlaylistIdResponse;
import org.openapis.openapi.models.operations.PutPlaylistsPlaylistIdSecurity;
import org.openapis.openapi.models.shared.CreateUpdatePlaylistRequest;
import org.openapis.openapi.models.shared.CreateUpdatePlaylistRequestPlaylist;
import org.openapis.openapi.models.shared.CreateUpdatePlaylistRequestPlaylistSharingEnum;
import org.openapis.openapi.models.shared.CreateUpdatePlaylistRequestPlaylistTracks;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutPlaylistsPlaylistIdRequest req = new PutPlaylistsPlaylistIdRequest(976460L) {{
                createUpdatePlaylistRequest = new CreateUpdatePlaylistRequest() {{
                    playlist = new CreateUpdatePlaylistRequestPlaylist() {{
                        description = "vero";
                        sharing = CreateUpdatePlaylistRequestPlaylistSharingEnum.PUBLIC_;
                        title = "Ms.";
                        tracks = new org.openapis.openapi.models.shared.CreateUpdatePlaylistRequestPlaylistTracks[]{{
                            add(new CreateUpdatePlaylistRequestPlaylistTracks("sint") {{
                                id = "097b0074-f154-471b-9e6e-13b99d488e1e";
                            }}),
                            add(new CreateUpdatePlaylistRequestPlaylistTracks("non") {{
                                id = "1e450ad2-abd4-4426-9802-d502a94bb4f6";
                            }}),
                            add(new CreateUpdatePlaylistRequestPlaylistTracks("nam") {{
                                id = "c969e9a3-efa7-47df-b14c-d66ae395efb9";
                            }}),
                            add(new CreateUpdatePlaylistRequestPlaylistTracks("sint") {{
                                id = "a88f3a66-9970-474b-a446-9b6e21419598";
                            }}),
                        }};
                    }};;
                }};;
            }};            

            PutPlaylistsPlaylistIdResponse res = sdk.playlists.putPlaylistsPlaylistId(req, new PutPlaylistsPlaylistIdSecurity("accusantium") {{
                authHeader = "YOUR_API_KEY_HERE";
            }});

            if (res.putPlaylistsPlaylistId200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
