package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NewsByTeamPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public String format;
    public NewsByTeamPathParams withFormat(String format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=team")
    public String team;
    public NewsByTeamPathParams withTeam(String team) {
        this.team = team;
        return this;
    }
}