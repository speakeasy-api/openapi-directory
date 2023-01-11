package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PlayersByTeamPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public PlayersByTeamFormatEnum format;
    public PlayersByTeamPathParams withFormat(PlayersByTeamFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=teamid")
    public String teamid;
    public PlayersByTeamPathParams withTeamid(String teamid) {
        this.teamid = teamid;
        return this;
    }
}