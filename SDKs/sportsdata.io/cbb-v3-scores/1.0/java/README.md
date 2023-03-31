# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AreGamesInProgressFormatEnum;
import org.openapis.openapi.models.operations.AreGamesInProgressPathParams;
import org.openapis.openapi.models.operations.AreGamesInProgressRequest;
import org.openapis.openapi.models.operations.AreGamesInProgressResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = new SchemeAPIKeyHeader() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            AreGamesInProgressRequest req = new AreGamesInProgressRequest() {{
                pathParams = new AreGamesInProgressPathParams() {{
                    format = "JSON";
                }};
            }};            

            AreGamesInProgressResponse res = sdk.areGamesInProgress(req);

            if (res.areGamesInProgress200ApplicationJSONBoolean.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `areGamesInProgress` - Are Games In Progress
* `currentSeason` - Current Season
* `gamesByDate` - Games by Date
* `injuredPlayers` - Injured Players
* `leagueHierarchy` - League Hierarchy
* `playerDetailsByActive` - Player Details by Active
* `playerDetailsByPlayer` - Player Details by Player
* `playerDetailsByTeam` - Player Details by Team
* `schedules` - Schedules
* `stadiums` - Stadiums
* `teamGameLogsBySeason` - Team Game Logs By Season
* `teamGameStatsByDate` - Team Game Stats by Date
* `teamSchedule` - Team Schedule
* `teamSeasonStats` - Team Season Stats
* `teams` - Teams
* `tournamentHierarchy` - Tournament Hierarchy
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
