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
import org.openapis.openapi.models.operations.DepthChartsFormatEnum;
import org.openapis.openapi.models.operations.DepthChartsRequest;
import org.openapis.openapi.models.operations.DepthChartsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            DepthChartsRequest req = new DepthChartsRequest(DepthChartsFormatEnum.JSON);            

            DepthChartsResponse res = sdk.depthCharts(req);

            if (res.teamDepthCharts != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [depthCharts](docs/sdk/README.md#depthcharts) - Depth Charts
* [dfsSlatesByDate](docs/sdk/README.md#dfsslatesbydate) - DFS Slates by Date
* [injuredPlayers](docs/sdk/README.md#injuredplayers) - Injured Players
* [projectedPlayerGameStatsByDateWInjuriesDfsSalaries](docs/sdk/README.md#projectedplayergamestatsbydatewinjuriesdfssalaries) - Projected Player Game Stats by Date (w/ Injuries, DFS Salaries)
* [projectedPlayerGameStatsByPlayerWInjuriesDfsSalaries](docs/sdk/README.md#projectedplayergamestatsbyplayerwinjuriesdfssalaries) - Projected Player Game Stats by Player (w/ Injuries, DFS Salaries)
* [projectedPlayerSeasonStats](docs/sdk/README.md#projectedplayerseasonstats) - Projected Player Season Stats
* [projectedPlayerSeasonStatsByPlayer](docs/sdk/README.md#projectedplayerseasonstatsbyplayer) - Projected Player Season Stats by Player
* [projectedPlayerSeasonStatsByTeam](docs/sdk/README.md#projectedplayerseasonstatsbyteam) - Projected Player Season Stats by Team
* [startingLineupsByDate](docs/sdk/README.md#startinglineupsbydate) - Starting Lineups by Date
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
