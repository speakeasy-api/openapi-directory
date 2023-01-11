package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PlayersByTeamPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public PlayersByTeamFormatEnum format;
    public PlayersByTeamPathParams withFormat(PlayersByTeamFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=team")
    public String team;
    public PlayersByTeamPathParams withTeam(String team) {
        this.team = team;
        return this;
    }
}