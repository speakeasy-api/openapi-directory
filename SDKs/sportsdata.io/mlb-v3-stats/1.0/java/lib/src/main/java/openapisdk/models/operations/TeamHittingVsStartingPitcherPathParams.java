package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamHittingVsStartingPitcherPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public TeamHittingVsStartingPitcherFormatEnum format;
    public TeamHittingVsStartingPitcherPathParams withFormat(TeamHittingVsStartingPitcherFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=gameid")
    public String gameid;
    public TeamHittingVsStartingPitcherPathParams withGameid(String gameid) {
        this.gameid = gameid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=team")
    public String team;
    public TeamHittingVsStartingPitcherPathParams withTeam(String team) {
        this.team = team;
        return this;
    }
}