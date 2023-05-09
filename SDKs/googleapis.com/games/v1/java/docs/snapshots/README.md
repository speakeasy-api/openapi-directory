# snapshots

### Available Operations

* [gamesSnapshotsGet](#gamessnapshotsget) - Retrieves the metadata for a given snapshot ID.
* [gamesSnapshotsList](#gamessnapshotslist) - Retrieves a list of snapshots created by your application for the player corresponding to the player ID.

## gamesSnapshotsGet

Retrieves the metadata for a given snapshot ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GamesSnapshotsGetRequest;
import org.openapis.openapi.models.operations.GamesSnapshotsGetResponse;
import org.openapis.openapi.models.operations.GamesSnapshotsGetSecurity;
import org.openapis.openapi.models.operations.GamesSnapshotsGetSecurityOption1;
import org.openapis.openapi.models.operations.GamesSnapshotsGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GamesSnapshotsGetRequest req = new GamesSnapshotsGetRequest("quas") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "consequatur";
                alt = AltEnum.PROTO;
                callback = "repellendus";
                fields = "porro";
                key = "doloribus";
                language = "ut";
                oauthToken = "facilis";
                prettyPrint = false;
                quotaUser = "cupiditate";
                uploadType = "qui";
                uploadProtocol = "quae";
            }};            

            GamesSnapshotsGetResponse res = sdk.snapshots.gamesSnapshotsGet(req, new GamesSnapshotsGetSecurity() {{
                option1 = new GamesSnapshotsGetSecurityOption1("laudantium", "odio") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.snapshot != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gamesSnapshotsList

Retrieves a list of snapshots created by your application for the player corresponding to the player ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GamesSnapshotsListRequest;
import org.openapis.openapi.models.operations.GamesSnapshotsListResponse;
import org.openapis.openapi.models.operations.GamesSnapshotsListSecurity;
import org.openapis.openapi.models.operations.GamesSnapshotsListSecurityOption1;
import org.openapis.openapi.models.operations.GamesSnapshotsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GamesSnapshotsListRequest req = new GamesSnapshotsListRequest("occaecati") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quisquam";
                alt = AltEnum.PROTO;
                callback = "omnis";
                fields = "quis";
                key = "ipsum";
                language = "delectus";
                maxResults = 455169L;
                oauthToken = "consectetur";
                pageToken = "vero";
                prettyPrint = false;
                quotaUser = "tenetur";
                uploadType = "dignissimos";
                uploadProtocol = "hic";
            }};            

            GamesSnapshotsListResponse res = sdk.snapshots.gamesSnapshotsList(req, new GamesSnapshotsListSecurity() {{
                option1 = new GamesSnapshotsListSecurityOption1("distinctio", "quod") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.snapshotListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
