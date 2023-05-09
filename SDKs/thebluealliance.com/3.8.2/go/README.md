# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/thebluealliance.com/3.8.2/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Tba.GetStatus(ctx, operations.GetStatusRequest{
        IfNoneMatch: sdk.String("corrupti"),
    }, operations.GetStatusSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIStatus != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Tba](docs/tba/README.md)

* [GetStatus](docs/tba/README.md#getstatus) - Returns API status, and TBA status information.

### [District](docs/district/README.md)

* [GetDistrictEvents](docs/district/README.md#getdistrictevents) - Gets a list of events in the given district.
* [GetDistrictEventsKeys](docs/district/README.md#getdistricteventskeys) - Gets a list of event keys for events in the given district.
* [GetDistrictEventsSimple](docs/district/README.md#getdistricteventssimple) - Gets a short-form list of events in the given district.
* [GetDistrictRankings](docs/district/README.md#getdistrictrankings) - Gets a list of team district rankings for the given district.
* [GetDistrictTeams](docs/district/README.md#getdistrictteams) - Gets a list of `Team` objects that competed in events in the given district.
* [GetDistrictTeamsKeys](docs/district/README.md#getdistrictteamskeys) - Gets a list of `Team` objects that competed in events in the given district.
* [GetDistrictTeamsSimple](docs/district/README.md#getdistrictteamssimple) - Gets a short-form list of `Team` objects that competed in events in the given district.
* [GetDistrictsByYear](docs/district/README.md#getdistrictsbyyear) - Gets a list of districts and their corresponding district key, for the given year.
* [GetEventDistrictPoints](docs/district/README.md#geteventdistrictpoints) - Gets a list of team rankings for the Event.
* [GetTeamDistricts](docs/district/README.md#getteamdistricts) - Gets an array of districts representing each year the team was in a district. Will return an empty array if the team was never in a district.

### [Event](docs/event/README.md)

* [GetDistrictEvents](docs/event/README.md#getdistrictevents) - Gets a list of events in the given district.
* [GetDistrictEventsKeys](docs/event/README.md#getdistricteventskeys) - Gets a list of event keys for events in the given district.
* [GetDistrictEventsSimple](docs/event/README.md#getdistricteventssimple) - Gets a short-form list of events in the given district.
* [GetEvent](docs/event/README.md#getevent) - Gets an Event.
* [GetEventAlliances](docs/event/README.md#geteventalliances) - Gets a list of Elimination Alliances for the given Event.
* [GetEventAwards](docs/event/README.md#geteventawards) - Gets a list of awards from the given event.
* [GetEventDistrictPoints](docs/event/README.md#geteventdistrictpoints) - Gets a list of team rankings for the Event.
* [GetEventInsights](docs/event/README.md#geteventinsights) - Gets a set of Event-specific insights for the given Event.
* [GetEventMatchTimeseries](docs/event/README.md#geteventmatchtimeseries) - Gets an array of Match Keys for the given event key that have timeseries data. Returns an empty array if no matches have timeseries data.
*WARNING:* This is *not* official data, and is subject to a significant possibility of error, or missing data. Do not rely on this data for any purpose. In fact, pretend we made it up.
*WARNING:* This endpoint and corresponding data models are under *active development* and may change at any time, including in breaking ways.
* [GetEventMatches](docs/event/README.md#geteventmatches) - Gets a list of matches for the given event.
* [GetEventMatchesKeys](docs/event/README.md#geteventmatcheskeys) - Gets a list of match keys for the given event.
* [GetEventMatchesSimple](docs/event/README.md#geteventmatchessimple) - Gets a short-form list of matches for the given event.
* [GetEventOPRs](docs/event/README.md#geteventoprs) - Gets a set of Event OPRs (including OPR, DPR, and CCWM) for the given Event.
* [GetEventPredictions](docs/event/README.md#geteventpredictions) - Gets information on TBA-generated predictions for the given Event. Contains year-specific information. *WARNING* This endpoint is currently under development and may change at any time.
* [GetEventRankings](docs/event/README.md#geteventrankings) - Gets a list of team rankings for the Event.
* [GetEventSimple](docs/event/README.md#geteventsimple) - Gets a short-form Event.
* [GetEventTeams](docs/event/README.md#geteventteams) - Gets a list of `Team` objects that competed in the given event.
* [GetEventTeamsKeys](docs/event/README.md#geteventteamskeys) - Gets a list of `Team` keys that competed in the given event.
* [GetEventTeamsSimple](docs/event/README.md#geteventteamssimple) - Gets a short-form list of `Team` objects that competed in the given event.
* [GetEventTeamsStatuses](docs/event/README.md#geteventteamsstatuses) - Gets a key-value list of the event statuses for teams competing at the given event.
* [GetEventsByYear](docs/event/README.md#geteventsbyyear) - Gets a list of events in the given year.
* [GetEventsByYearKeys](docs/event/README.md#geteventsbyyearkeys) - Gets a list of event keys in the given year.
* [GetEventsByYearSimple](docs/event/README.md#geteventsbyyearsimple) - Gets a short-form list of events in the given year.
* [GetTeamEventAwards](docs/event/README.md#getteameventawards) - Gets a list of awards the given team won at the given event.
* [GetTeamEventMatches](docs/event/README.md#getteameventmatches) - Gets a list of matches for the given team and event.
* [GetTeamEventMatchesKeys](docs/event/README.md#getteameventmatcheskeys) - Gets a list of match keys for matches for the given team and event.
* [GetTeamEventMatchesSimple](docs/event/README.md#getteameventmatchessimple) - Gets a short-form list of matches for the given team and event.
* [GetTeamEventStatus](docs/event/README.md#getteameventstatus) - Gets the competition rank and status of the team at the given event.
* [GetTeamEvents](docs/event/README.md#getteamevents) - Gets a list of all events this team has competed at.
* [GetTeamEventsByYear](docs/event/README.md#getteameventsbyyear) - Gets a list of events this team has competed at in the given year.
* [GetTeamEventsByYearKeys](docs/event/README.md#getteameventsbyyearkeys) - Gets a list of the event keys for events this team has competed at in the given year.
* [GetTeamEventsByYearSimple](docs/event/README.md#getteameventsbyyearsimple) - Gets a short-form list of events this team has competed at in the given year.
* [GetTeamEventsKeys](docs/event/README.md#getteameventskeys) - Gets a list of the event keys for all events this team has competed at.
* [GetTeamEventsSimple](docs/event/README.md#getteameventssimple) - Gets a short-form list of all events this team has competed at.
* [GetTeamEventsStatusesByYear](docs/event/README.md#getteameventsstatusesbyyear) - Gets a key-value list of the event statuses for events this team has competed at in the given year.

### [List](docs/list/README.md)

* [GetDistrictEvents](docs/list/README.md#getdistrictevents) - Gets a list of events in the given district.
* [GetDistrictEventsKeys](docs/list/README.md#getdistricteventskeys) - Gets a list of event keys for events in the given district.
* [GetDistrictEventsSimple](docs/list/README.md#getdistricteventssimple) - Gets a short-form list of events in the given district.
* [GetDistrictRankings](docs/list/README.md#getdistrictrankings) - Gets a list of team district rankings for the given district.
* [GetDistrictTeams](docs/list/README.md#getdistrictteams) - Gets a list of `Team` objects that competed in events in the given district.
* [GetDistrictTeamsKeys](docs/list/README.md#getdistrictteamskeys) - Gets a list of `Team` objects that competed in events in the given district.
* [GetDistrictTeamsSimple](docs/list/README.md#getdistrictteamssimple) - Gets a short-form list of `Team` objects that competed in events in the given district.
* [GetEventTeams](docs/list/README.md#geteventteams) - Gets a list of `Team` objects that competed in the given event.
* [GetEventTeamsKeys](docs/list/README.md#geteventteamskeys) - Gets a list of `Team` keys that competed in the given event.
* [GetEventTeamsSimple](docs/list/README.md#geteventteamssimple) - Gets a short-form list of `Team` objects that competed in the given event.
* [GetEventTeamsStatuses](docs/list/README.md#geteventteamsstatuses) - Gets a key-value list of the event statuses for teams competing at the given event.
* [GetEventsByYear](docs/list/README.md#geteventsbyyear) - Gets a list of events in the given year.
* [GetEventsByYearKeys](docs/list/README.md#geteventsbyyearkeys) - Gets a list of event keys in the given year.
* [GetEventsByYearSimple](docs/list/README.md#geteventsbyyearsimple) - Gets a short-form list of events in the given year.
* [GetTeamEventsStatusesByYear](docs/list/README.md#getteameventsstatusesbyyear) - Gets a key-value list of the event statuses for events this team has competed at in the given year.
* [GetTeams](docs/list/README.md#getteams) - Gets a list of `Team` objects, paginated in groups of 500.
* [GetTeamsByYear](docs/list/README.md#getteamsbyyear) - Gets a list of `Team` objects that competed in the given year, paginated in groups of 500.
* [GetTeamsByYearKeys](docs/list/README.md#getteamsbyyearkeys) - Gets a list Team Keys that competed in the given year, paginated in groups of 500.
* [GetTeamsByYearSimple](docs/list/README.md#getteamsbyyearsimple) - Gets a list of short form `Team_Simple` objects that competed in the given year, paginated in groups of 500.
* [GetTeamsKeys](docs/list/README.md#getteamskeys) - Gets a list of Team keys, paginated in groups of 500. (Note, each page will not have 500 teams, but will include the teams within that range of 500.)
* [GetTeamsSimple](docs/list/README.md#getteamssimple) - Gets a list of short form `Team_Simple` objects, paginated in groups of 500.

### [Match](docs/match/README.md)

* [GetEventMatchTimeseries](docs/match/README.md#geteventmatchtimeseries) - Gets an array of Match Keys for the given event key that have timeseries data. Returns an empty array if no matches have timeseries data.
*WARNING:* This is *not* official data, and is subject to a significant possibility of error, or missing data. Do not rely on this data for any purpose. In fact, pretend we made it up.
*WARNING:* This endpoint and corresponding data models are under *active development* and may change at any time, including in breaking ways.
* [GetEventMatches](docs/match/README.md#geteventmatches) - Gets a list of matches for the given event.
* [GetEventMatchesKeys](docs/match/README.md#geteventmatcheskeys) - Gets a list of match keys for the given event.
* [GetEventMatchesSimple](docs/match/README.md#geteventmatchessimple) - Gets a short-form list of matches for the given event.
* [GetMatch](docs/match/README.md#getmatch) - Gets a `Match` object for the given match key.
* [GetMatchSimple](docs/match/README.md#getmatchsimple) - Gets a short-form `Match` object for the given match key.
* [GetMatchTimeseries](docs/match/README.md#getmatchtimeseries) - Gets an array of game-specific Match Timeseries objects for the given match key or an empty array if not available.
*WARNING:* This is *not* official data, and is subject to a significant possibility of error, or missing data. Do not rely on this data for any purpose. In fact, pretend we made it up.
*WARNING:* This endpoint and corresponding data models are under *active development* and may change at any time, including in breaking ways.
* [GetMatchZebra](docs/match/README.md#getmatchzebra) - Gets Zebra MotionWorks data for a Match for the given match key.
* [GetTeamEventMatches](docs/match/README.md#getteameventmatches) - Gets a list of matches for the given team and event.
* [GetTeamEventMatchesKeys](docs/match/README.md#getteameventmatcheskeys) - Gets a list of match keys for matches for the given team and event.
* [GetTeamEventMatchesSimple](docs/match/README.md#getteameventmatchessimple) - Gets a short-form list of matches for the given team and event.
* [GetTeamMatchesByYear](docs/match/README.md#getteammatchesbyyear) - Gets a list of matches for the given team and year.
* [GetTeamMatchesByYearKeys](docs/match/README.md#getteammatchesbyyearkeys) - Gets a list of match keys for matches for the given team and year.
* [GetTeamMatchesByYearSimple](docs/match/README.md#getteammatchesbyyearsimple) - Gets a short-form list of matches for the given team and year.

### [Team](docs/team/README.md)

* [GetDistrictRankings](docs/team/README.md#getdistrictrankings) - Gets a list of team district rankings for the given district.
* [GetDistrictTeams](docs/team/README.md#getdistrictteams) - Gets a list of `Team` objects that competed in events in the given district.
* [GetDistrictTeamsKeys](docs/team/README.md#getdistrictteamskeys) - Gets a list of `Team` objects that competed in events in the given district.
* [GetDistrictTeamsSimple](docs/team/README.md#getdistrictteamssimple) - Gets a short-form list of `Team` objects that competed in events in the given district.
* [GetEventTeams](docs/team/README.md#geteventteams) - Gets a list of `Team` objects that competed in the given event.
* [GetEventTeamsKeys](docs/team/README.md#geteventteamskeys) - Gets a list of `Team` keys that competed in the given event.
* [GetEventTeamsSimple](docs/team/README.md#geteventteamssimple) - Gets a short-form list of `Team` objects that competed in the given event.
* [GetEventTeamsStatuses](docs/team/README.md#geteventteamsstatuses) - Gets a key-value list of the event statuses for teams competing at the given event.
* [GetTeam](docs/team/README.md#getteam) - Gets a `Team` object for the team referenced by the given key.
* [GetTeamAwards](docs/team/README.md#getteamawards) - Gets a list of awards the given team has won.
* [GetTeamAwardsByYear](docs/team/README.md#getteamawardsbyyear) - Gets a list of awards the given team has won in a given year.
* [GetTeamDistricts](docs/team/README.md#getteamdistricts) - Gets an array of districts representing each year the team was in a district. Will return an empty array if the team was never in a district.
* [GetTeamEventAwards](docs/team/README.md#getteameventawards) - Gets a list of awards the given team won at the given event.
* [GetTeamEventMatches](docs/team/README.md#getteameventmatches) - Gets a list of matches for the given team and event.
* [GetTeamEventMatchesKeys](docs/team/README.md#getteameventmatcheskeys) - Gets a list of match keys for matches for the given team and event.
* [GetTeamEventMatchesSimple](docs/team/README.md#getteameventmatchessimple) - Gets a short-form list of matches for the given team and event.
* [GetTeamEventStatus](docs/team/README.md#getteameventstatus) - Gets the competition rank and status of the team at the given event.
* [GetTeamEvents](docs/team/README.md#getteamevents) - Gets a list of all events this team has competed at.
* [GetTeamEventsByYear](docs/team/README.md#getteameventsbyyear) - Gets a list of events this team has competed at in the given year.
* [GetTeamEventsByYearKeys](docs/team/README.md#getteameventsbyyearkeys) - Gets a list of the event keys for events this team has competed at in the given year.
* [GetTeamEventsByYearSimple](docs/team/README.md#getteameventsbyyearsimple) - Gets a short-form list of events this team has competed at in the given year.
* [GetTeamEventsKeys](docs/team/README.md#getteameventskeys) - Gets a list of the event keys for all events this team has competed at.
* [GetTeamEventsSimple](docs/team/README.md#getteameventssimple) - Gets a short-form list of all events this team has competed at.
* [GetTeamEventsStatusesByYear](docs/team/README.md#getteameventsstatusesbyyear) - Gets a key-value list of the event statuses for events this team has competed at in the given year.
* [GetTeamMatchesByYear](docs/team/README.md#getteammatchesbyyear) - Gets a list of matches for the given team and year.
* [GetTeamMatchesByYearKeys](docs/team/README.md#getteammatchesbyyearkeys) - Gets a list of match keys for matches for the given team and year.
* [GetTeamMatchesByYearSimple](docs/team/README.md#getteammatchesbyyearsimple) - Gets a short-form list of matches for the given team and year.
* [GetTeamMediaByTag](docs/team/README.md#getteammediabytag) - Gets a list of Media (videos / pictures) for the given team and tag.
* [GetTeamMediaByTagYear](docs/team/README.md#getteammediabytagyear) - Gets a list of Media (videos / pictures) for the given team, tag and year.
* [GetTeamMediaByYear](docs/team/README.md#getteammediabyyear) - Gets a list of Media (videos / pictures) for the given team and year.
* [GetTeamRobots](docs/team/README.md#getteamrobots) - Gets a list of year and robot name pairs for each year that a robot name was provided. Will return an empty array if the team has never named a robot.
* [GetTeamSimple](docs/team/README.md#getteamsimple) - Gets a `Team_Simple` object for the team referenced by the given key.
* [GetTeamSocialMedia](docs/team/README.md#getteamsocialmedia) - Gets a list of Media (social media) for the given team.
* [GetTeamYearsParticipated](docs/team/README.md#getteamyearsparticipated) - Gets a list of years in which the team participated in at least one competition.
* [GetTeams](docs/team/README.md#getteams) - Gets a list of `Team` objects, paginated in groups of 500.
* [GetTeamsByYear](docs/team/README.md#getteamsbyyear) - Gets a list of `Team` objects that competed in the given year, paginated in groups of 500.
* [GetTeamsByYearKeys](docs/team/README.md#getteamsbyyearkeys) - Gets a list Team Keys that competed in the given year, paginated in groups of 500.
* [GetTeamsByYearSimple](docs/team/README.md#getteamsbyyearsimple) - Gets a list of short form `Team_Simple` objects that competed in the given year, paginated in groups of 500.
* [GetTeamsKeys](docs/team/README.md#getteamskeys) - Gets a list of Team keys, paginated in groups of 500. (Note, each page will not have 500 teams, but will include the teams within that range of 500.)
* [GetTeamsSimple](docs/team/README.md#getteamssimple) - Gets a list of short form `Team_Simple` objects, paginated in groups of 500.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
