package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PlayerDetailsByTeamPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public PlayerDetailsByTeamFormatEnum format;
    public PlayerDetailsByTeamPathParams withFormat(PlayerDetailsByTeamFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=team")
    public String team;
    public PlayerDetailsByTeamPathParams withTeam(String team) {
        this.team = team;
        return this;
    }
}