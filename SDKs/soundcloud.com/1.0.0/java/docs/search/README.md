# search

## Overview

Search Endpoints.

### Available Operations

* [getPlaylists](#getplaylists) - Performs a playlist search based on a query
* [getTracks](#gettracks) - Performs a track search based on a query
* [getUsers](#getusers) - Performs a user search based on a query

## getPlaylists

Performs a playlist search based on a query

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPlaylistsRequest;
import org.openapis.openapi.models.operations.GetPlaylistsResponse;
import org.openapis.openapi.models.operations.GetPlaylistsSecurity;
import org.openapis.openapi.models.shared.AccessEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPlaylistsRequest req = new GetPlaylistsRequest("nemo") {{
                access = new org.openapis.openapi.models.shared.AccessEnum[]{{
                    add(AccessEnum.PREVIEW),
                }};
                limit = 984043L;
                linkedPartitioning = false;
                offset = 891924L;
            }};            

            GetPlaylistsResponse res = sdk.search.getPlaylists(req, new GetPlaylistsSecurity("eius", "maxime") {{
                authHeader = "YOUR_API_KEY_HERE";
                clientId = "YOUR_API_KEY_HERE";
            }});

            if (res.getPlaylists200ApplicationJSONOneOf != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTracks

Performs a track search based on a query

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTracksRequest;
import org.openapis.openapi.models.operations.GetTracksResponse;
import org.openapis.openapi.models.operations.GetTracksSecurity;
import org.openapis.openapi.models.shared.AccessEnum;
import org.openapis.openapi.models.shared.Bpm;
import org.openapis.openapi.models.shared.CreatedAt;
import org.openapis.openapi.models.shared.Duration;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTracksRequest req = new GetTracksRequest("deleniti") {{
                access = new org.openapis.openapi.models.shared.AccessEnum[]{{
                    add(AccessEnum.PREVIEW),
                    add(AccessEnum.PLAYABLE),
                    add(AccessEnum.PLAYABLE),
                }};
                bpm = new Bpm() {{
                    from = 123L;
                    to = 456L;
                }};;
                createdAt = new CreatedAt() {{
                    from = "2020-12-24T00:00:00.000Z";
                    to = "2020-12-26T00:00:00.000Z";
                }};;
                duration = new Duration() {{
                    from = 123456L;
                    to = 456789L;
                }};;
                genres = "repudiandae";
                ids = "ullam";
                limit = 714242L;
                linkedPartitioning = false;
                offset = 469249L;
                tags = "repellat";
            }};            

            GetTracksResponse res = sdk.search.getTracks(req, new GetTracksSecurity("quibusdam", "sed") {{
                authHeader = "YOUR_API_KEY_HERE";
                clientId = "YOUR_API_KEY_HERE";
            }});

            if (res.getTracks200ApplicationJSONOneOf != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsers

Performs a user search based on a query

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersRequest;
import org.openapis.openapi.models.operations.GetUsersResponse;
import org.openapis.openapi.models.operations.GetUsersSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersRequest req = new GetUsersRequest("saepe") {{
                ids = "pariatur";
                limit = 37559L;
                linkedPartitioning = false;
                offset = 162493L;
            }};            

            GetUsersResponse res = sdk.search.getUsers(req, new GetUsersSecurity("praesentium", "natus") {{
                authHeader = "YOUR_API_KEY_HERE";
                clientId = "YOUR_API_KEY_HERE";
            }});

            if (res.getUsers200ApplicationJSONOneOf != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
