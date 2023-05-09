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
import org.openapis.openapi.models.operations.AreasCountriesFormatEnum;
import org.openapis.openapi.models.operations.AreasCountriesRequest;
import org.openapis.openapi.models.operations.AreasCountriesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            AreasCountriesRequest req = new AreasCountriesRequest(AreasCountriesFormatEnum.JSON);            

            AreasCountriesResponse res = sdk.areasCountries(req);

            if (res.areas != null) {
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

* [areasCountries](docs/sdk/README.md#areascountries) - Areas (Countries)
* [competitionFixturesLeagueDetails](docs/sdk/README.md#competitionfixturesleaguedetails) - Competition Fixtures (League Details)
* [competitionsLeagues](docs/sdk/README.md#competitionsleagues) - Competitions (Leagues)
* [gamesByDate](docs/sdk/README.md#gamesbydate) - Games by Date
* [membershipsActive](docs/sdk/README.md#membershipsactive) - Memberships (Active)
* [membershipsByTeamActive](docs/sdk/README.md#membershipsbyteamactive) - Memberships by Team (Active)
* [membershipsByTeamHistorical](docs/sdk/README.md#membershipsbyteamhistorical) - Memberships by Team (Historical)
* [membershipsHistorical](docs/sdk/README.md#membershipshistorical) - Memberships (Historical)
* [player](docs/sdk/README.md#player) - Player
* [players](docs/sdk/README.md#players) - Players
* [playersByTeam](docs/sdk/README.md#playersbyteam) - Players by Team
* [schedule](docs/sdk/README.md#schedule) - Schedule
* [seasonTeams](docs/sdk/README.md#seasonteams) - Season Teams
* [standings](docs/sdk/README.md#standings) - Standings
* [teams](docs/sdk/README.md#teams) - Teams
* [venues](docs/sdk/README.md#venues) - Venues
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
