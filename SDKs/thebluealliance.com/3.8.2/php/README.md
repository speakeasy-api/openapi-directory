# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetStatusRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetStatusSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetStatusRequest();
    $request->ifNoneMatch = 'corrupti';

    $requestSecurity = new GetStatusSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->tba->getStatus($request, $requestSecurity);

    if ($response->apiStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [tba](docs/tba/README.md)

* [getStatus](docs/tba/README.md#getstatus) - Returns API status, and TBA status information.

### [district](docs/district/README.md)

* [getDistrictEvents](docs/district/README.md#getdistrictevents) - Gets a list of events in the given district.
* [getDistrictEventsKeys](docs/district/README.md#getdistricteventskeys) - Gets a list of event keys for events in the given district.
* [getDistrictEventsSimple](docs/district/README.md#getdistricteventssimple) - Gets a short-form list of events in the given district.
* [getDistrictRankings](docs/district/README.md#getdistrictrankings) - Gets a list of team district rankings for the given district.
* [getDistrictTeams](docs/district/README.md#getdistrictteams) - Gets a list of `Team` objects that competed in events in the given district.
* [getDistrictTeamsKeys](docs/district/README.md#getdistrictteamskeys) - Gets a list of `Team` objects that competed in events in the given district.
* [getDistrictTeamsSimple](docs/district/README.md#getdistrictteamssimple) - Gets a short-form list of `Team` objects that competed in events in the given district.
* [getDistrictsByYear](docs/district/README.md#getdistrictsbyyear) - Gets a list of districts and their corresponding district key, for the given year.
* [getEventDistrictPoints](docs/district/README.md#geteventdistrictpoints) - Gets a list of team rankings for the Event.
* [getTeamDistricts](docs/district/README.md#getteamdistricts) - Gets an array of districts representing each year the team was in a district. Will return an empty array if the team was never in a district.

### [event](docs/event/README.md)

* [getDistrictEvents](docs/event/README.md#getdistrictevents) - Gets a list of events in the given district.
* [getDistrictEventsKeys](docs/event/README.md#getdistricteventskeys) - Gets a list of event keys for events in the given district.
* [getDistrictEventsSimple](docs/event/README.md#getdistricteventssimple) - Gets a short-form list of events in the given district.
* [getEvent](docs/event/README.md#getevent) - Gets an Event.
* [getEventAlliances](docs/event/README.md#geteventalliances) - Gets a list of Elimination Alliances for the given Event.
* [getEventAwards](docs/event/README.md#geteventawards) - Gets a list of awards from the given event.
* [getEventDistrictPoints](docs/event/README.md#geteventdistrictpoints) - Gets a list of team rankings for the Event.
* [getEventInsights](docs/event/README.md#geteventinsights) - Gets a set of Event-specific insights for the given Event.
* [getEventMatchTimeseries](docs/event/README.md#geteventmatchtimeseries) - Gets an array of Match Keys for the given event key that have timeseries data. Returns an empty array if no matches have timeseries data.
*WARNING:* This is *not* official data, and is subject to a significant possibility of error, or missing data. Do not rely on this data for any purpose. In fact, pretend we made it up.
*WARNING:* This endpoint and corresponding data models are under *active development* and may change at any time, including in breaking ways.
* [getEventMatches](docs/event/README.md#geteventmatches) - Gets a list of matches for the given event.
* [getEventMatchesKeys](docs/event/README.md#geteventmatcheskeys) - Gets a list of match keys for the given event.
* [getEventMatchesSimple](docs/event/README.md#geteventmatchessimple) - Gets a short-form list of matches for the given event.
* [getEventOPRs](docs/event/README.md#geteventoprs) - Gets a set of Event OPRs (including OPR, DPR, and CCWM) for the given Event.
* [getEventPredictions](docs/event/README.md#geteventpredictions) - Gets information on TBA-generated predictions for the given Event. Contains year-specific information. *WARNING* This endpoint is currently under development and may change at any time.
* [getEventRankings](docs/event/README.md#geteventrankings) - Gets a list of team rankings for the Event.
* [getEventSimple](docs/event/README.md#geteventsimple) - Gets a short-form Event.
* [getEventTeams](docs/event/README.md#geteventteams) - Gets a list of `Team` objects that competed in the given event.
* [getEventTeamsKeys](docs/event/README.md#geteventteamskeys) - Gets a list of `Team` keys that competed in the given event.
* [getEventTeamsSimple](docs/event/README.md#geteventteamssimple) - Gets a short-form list of `Team` objects that competed in the given event.
* [getEventTeamsStatuses](docs/event/README.md#geteventteamsstatuses) - Gets a key-value list of the event statuses for teams competing at the given event.
* [getEventsByYear](docs/event/README.md#geteventsbyyear) - Gets a list of events in the given year.
* [getEventsByYearKeys](docs/event/README.md#geteventsbyyearkeys) - Gets a list of event keys in the given year.
* [getEventsByYearSimple](docs/event/README.md#geteventsbyyearsimple) - Gets a short-form list of events in the given year.
* [getTeamEventAwards](docs/event/README.md#getteameventawards) - Gets a list of awards the given team won at the given event.
* [getTeamEventMatches](docs/event/README.md#getteameventmatches) - Gets a list of matches for the given team and event.
* [getTeamEventMatchesKeys](docs/event/README.md#getteameventmatcheskeys) - Gets a list of match keys for matches for the given team and event.
* [getTeamEventMatchesSimple](docs/event/README.md#getteameventmatchessimple) - Gets a short-form list of matches for the given team and event.
* [getTeamEventStatus](docs/event/README.md#getteameventstatus) - Gets the competition rank and status of the team at the given event.
* [getTeamEvents](docs/event/README.md#getteamevents) - Gets a list of all events this team has competed at.
* [getTeamEventsByYear](docs/event/README.md#getteameventsbyyear) - Gets a list of events this team has competed at in the given year.
* [getTeamEventsByYearKeys](docs/event/README.md#getteameventsbyyearkeys) - Gets a list of the event keys for events this team has competed at in the given year.
* [getTeamEventsByYearSimple](docs/event/README.md#getteameventsbyyearsimple) - Gets a short-form list of events this team has competed at in the given year.
* [getTeamEventsKeys](docs/event/README.md#getteameventskeys) - Gets a list of the event keys for all events this team has competed at.
* [getTeamEventsSimple](docs/event/README.md#getteameventssimple) - Gets a short-form list of all events this team has competed at.
* [getTeamEventsStatusesByYear](docs/event/README.md#getteameventsstatusesbyyear) - Gets a key-value list of the event statuses for events this team has competed at in the given year.

### [list](docs/list/README.md)

* [getDistrictEvents](docs/list/README.md#getdistrictevents) - Gets a list of events in the given district.
* [getDistrictEventsKeys](docs/list/README.md#getdistricteventskeys) - Gets a list of event keys for events in the given district.
* [getDistrictEventsSimple](docs/list/README.md#getdistricteventssimple) - Gets a short-form list of events in the given district.
* [getDistrictRankings](docs/list/README.md#getdistrictrankings) - Gets a list of team district rankings for the given district.
* [getDistrictTeams](docs/list/README.md#getdistrictteams) - Gets a list of `Team` objects that competed in events in the given district.
* [getDistrictTeamsKeys](docs/list/README.md#getdistrictteamskeys) - Gets a list of `Team` objects that competed in events in the given district.
* [getDistrictTeamsSimple](docs/list/README.md#getdistrictteamssimple) - Gets a short-form list of `Team` objects that competed in events in the given district.
* [getEventTeams](docs/list/README.md#geteventteams) - Gets a list of `Team` objects that competed in the given event.
* [getEventTeamsKeys](docs/list/README.md#geteventteamskeys) - Gets a list of `Team` keys that competed in the given event.
* [getEventTeamsSimple](docs/list/README.md#geteventteamssimple) - Gets a short-form list of `Team` objects that competed in the given event.
* [getEventTeamsStatuses](docs/list/README.md#geteventteamsstatuses) - Gets a key-value list of the event statuses for teams competing at the given event.
* [getEventsByYear](docs/list/README.md#geteventsbyyear) - Gets a list of events in the given year.
* [getEventsByYearKeys](docs/list/README.md#geteventsbyyearkeys) - Gets a list of event keys in the given year.
* [getEventsByYearSimple](docs/list/README.md#geteventsbyyearsimple) - Gets a short-form list of events in the given year.
* [getTeamEventsStatusesByYear](docs/list/README.md#getteameventsstatusesbyyear) - Gets a key-value list of the event statuses for events this team has competed at in the given year.
* [getTeams](docs/list/README.md#getteams) - Gets a list of `Team` objects, paginated in groups of 500.
* [getTeamsByYear](docs/list/README.md#getteamsbyyear) - Gets a list of `Team` objects that competed in the given year, paginated in groups of 500.
* [getTeamsByYearKeys](docs/list/README.md#getteamsbyyearkeys) - Gets a list Team Keys that competed in the given year, paginated in groups of 500.
* [getTeamsByYearSimple](docs/list/README.md#getteamsbyyearsimple) - Gets a list of short form `Team_Simple` objects that competed in the given year, paginated in groups of 500.
* [getTeamsKeys](docs/list/README.md#getteamskeys) - Gets a list of Team keys, paginated in groups of 500. (Note, each page will not have 500 teams, but will include the teams within that range of 500.)
* [getTeamsSimple](docs/list/README.md#getteamssimple) - Gets a list of short form `Team_Simple` objects, paginated in groups of 500.

### [match](docs/match/README.md)

* [getEventMatchTimeseries](docs/match/README.md#geteventmatchtimeseries) - Gets an array of Match Keys for the given event key that have timeseries data. Returns an empty array if no matches have timeseries data.
*WARNING:* This is *not* official data, and is subject to a significant possibility of error, or missing data. Do not rely on this data for any purpose. In fact, pretend we made it up.
*WARNING:* This endpoint and corresponding data models are under *active development* and may change at any time, including in breaking ways.
* [getEventMatches](docs/match/README.md#geteventmatches) - Gets a list of matches for the given event.
* [getEventMatchesKeys](docs/match/README.md#geteventmatcheskeys) - Gets a list of match keys for the given event.
* [getEventMatchesSimple](docs/match/README.md#geteventmatchessimple) - Gets a short-form list of matches for the given event.
* [getMatch](docs/match/README.md#getmatch) - Gets a `Match` object for the given match key.
* [getMatchSimple](docs/match/README.md#getmatchsimple) - Gets a short-form `Match` object for the given match key.
* [getMatchTimeseries](docs/match/README.md#getmatchtimeseries) - Gets an array of game-specific Match Timeseries objects for the given match key or an empty array if not available.
*WARNING:* This is *not* official data, and is subject to a significant possibility of error, or missing data. Do not rely on this data for any purpose. In fact, pretend we made it up.
*WARNING:* This endpoint and corresponding data models are under *active development* and may change at any time, including in breaking ways.
* [getMatchZebra](docs/match/README.md#getmatchzebra) - Gets Zebra MotionWorks data for a Match for the given match key.
* [getTeamEventMatches](docs/match/README.md#getteameventmatches) - Gets a list of matches for the given team and event.
* [getTeamEventMatchesKeys](docs/match/README.md#getteameventmatcheskeys) - Gets a list of match keys for matches for the given team and event.
* [getTeamEventMatchesSimple](docs/match/README.md#getteameventmatchessimple) - Gets a short-form list of matches for the given team and event.
* [getTeamMatchesByYear](docs/match/README.md#getteammatchesbyyear) - Gets a list of matches for the given team and year.
* [getTeamMatchesByYearKeys](docs/match/README.md#getteammatchesbyyearkeys) - Gets a list of match keys for matches for the given team and year.
* [getTeamMatchesByYearSimple](docs/match/README.md#getteammatchesbyyearsimple) - Gets a short-form list of matches for the given team and year.

### [team](docs/team/README.md)

* [getDistrictRankings](docs/team/README.md#getdistrictrankings) - Gets a list of team district rankings for the given district.
* [getDistrictTeams](docs/team/README.md#getdistrictteams) - Gets a list of `Team` objects that competed in events in the given district.
* [getDistrictTeamsKeys](docs/team/README.md#getdistrictteamskeys) - Gets a list of `Team` objects that competed in events in the given district.
* [getDistrictTeamsSimple](docs/team/README.md#getdistrictteamssimple) - Gets a short-form list of `Team` objects that competed in events in the given district.
* [getEventTeams](docs/team/README.md#geteventteams) - Gets a list of `Team` objects that competed in the given event.
* [getEventTeamsKeys](docs/team/README.md#geteventteamskeys) - Gets a list of `Team` keys that competed in the given event.
* [getEventTeamsSimple](docs/team/README.md#geteventteamssimple) - Gets a short-form list of `Team` objects that competed in the given event.
* [getEventTeamsStatuses](docs/team/README.md#geteventteamsstatuses) - Gets a key-value list of the event statuses for teams competing at the given event.
* [getTeam](docs/team/README.md#getteam) - Gets a `Team` object for the team referenced by the given key.
* [getTeamAwards](docs/team/README.md#getteamawards) - Gets a list of awards the given team has won.
* [getTeamAwardsByYear](docs/team/README.md#getteamawardsbyyear) - Gets a list of awards the given team has won in a given year.
* [getTeamDistricts](docs/team/README.md#getteamdistricts) - Gets an array of districts representing each year the team was in a district. Will return an empty array if the team was never in a district.
* [getTeamEventAwards](docs/team/README.md#getteameventawards) - Gets a list of awards the given team won at the given event.
* [getTeamEventMatches](docs/team/README.md#getteameventmatches) - Gets a list of matches for the given team and event.
* [getTeamEventMatchesKeys](docs/team/README.md#getteameventmatcheskeys) - Gets a list of match keys for matches for the given team and event.
* [getTeamEventMatchesSimple](docs/team/README.md#getteameventmatchessimple) - Gets a short-form list of matches for the given team and event.
* [getTeamEventStatus](docs/team/README.md#getteameventstatus) - Gets the competition rank and status of the team at the given event.
* [getTeamEvents](docs/team/README.md#getteamevents) - Gets a list of all events this team has competed at.
* [getTeamEventsByYear](docs/team/README.md#getteameventsbyyear) - Gets a list of events this team has competed at in the given year.
* [getTeamEventsByYearKeys](docs/team/README.md#getteameventsbyyearkeys) - Gets a list of the event keys for events this team has competed at in the given year.
* [getTeamEventsByYearSimple](docs/team/README.md#getteameventsbyyearsimple) - Gets a short-form list of events this team has competed at in the given year.
* [getTeamEventsKeys](docs/team/README.md#getteameventskeys) - Gets a list of the event keys for all events this team has competed at.
* [getTeamEventsSimple](docs/team/README.md#getteameventssimple) - Gets a short-form list of all events this team has competed at.
* [getTeamEventsStatusesByYear](docs/team/README.md#getteameventsstatusesbyyear) - Gets a key-value list of the event statuses for events this team has competed at in the given year.
* [getTeamMatchesByYear](docs/team/README.md#getteammatchesbyyear) - Gets a list of matches for the given team and year.
* [getTeamMatchesByYearKeys](docs/team/README.md#getteammatchesbyyearkeys) - Gets a list of match keys for matches for the given team and year.
* [getTeamMatchesByYearSimple](docs/team/README.md#getteammatchesbyyearsimple) - Gets a short-form list of matches for the given team and year.
* [getTeamMediaByTag](docs/team/README.md#getteammediabytag) - Gets a list of Media (videos / pictures) for the given team and tag.
* [getTeamMediaByTagYear](docs/team/README.md#getteammediabytagyear) - Gets a list of Media (videos / pictures) for the given team, tag and year.
* [getTeamMediaByYear](docs/team/README.md#getteammediabyyear) - Gets a list of Media (videos / pictures) for the given team and year.
* [getTeamRobots](docs/team/README.md#getteamrobots) - Gets a list of year and robot name pairs for each year that a robot name was provided. Will return an empty array if the team has never named a robot.
* [getTeamSimple](docs/team/README.md#getteamsimple) - Gets a `Team_Simple` object for the team referenced by the given key.
* [getTeamSocialMedia](docs/team/README.md#getteamsocialmedia) - Gets a list of Media (social media) for the given team.
* [getTeamYearsParticipated](docs/team/README.md#getteamyearsparticipated) - Gets a list of years in which the team participated in at least one competition.
* [getTeams](docs/team/README.md#getteams) - Gets a list of `Team` objects, paginated in groups of 500.
* [getTeamsByYear](docs/team/README.md#getteamsbyyear) - Gets a list of `Team` objects that competed in the given year, paginated in groups of 500.
* [getTeamsByYearKeys](docs/team/README.md#getteamsbyyearkeys) - Gets a list Team Keys that competed in the given year, paginated in groups of 500.
* [getTeamsByYearSimple](docs/team/README.md#getteamsbyyearsimple) - Gets a list of short form `Team_Simple` objects that competed in the given year, paginated in groups of 500.
* [getTeamsKeys](docs/team/README.md#getteamskeys) - Gets a list of Team keys, paginated in groups of 500. (Note, each page will not have 500 teams, but will include the teams within that range of 500.)
* [getTeamsSimple](docs/team/README.md#getteamssimple) - Gets a list of short form `Team_Simple` objects, paginated in groups of 500.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
