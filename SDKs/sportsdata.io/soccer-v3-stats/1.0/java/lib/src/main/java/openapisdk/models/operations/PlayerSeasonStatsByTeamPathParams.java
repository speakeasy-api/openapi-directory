package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PlayerSeasonStatsByTeamPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public PlayerSeasonStatsByTeamFormatEnum format;
    public PlayerSeasonStatsByTeamPathParams withFormat(PlayerSeasonStatsByTeamFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=roundid")
    public String roundid;
    public PlayerSeasonStatsByTeamPathParams withRoundid(String roundid) {
        this.roundid = roundid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=team")
    public String team;
    public PlayerSeasonStatsByTeamPathParams withTeam(String team) {
        this.team = team;
        return this;
    }
}