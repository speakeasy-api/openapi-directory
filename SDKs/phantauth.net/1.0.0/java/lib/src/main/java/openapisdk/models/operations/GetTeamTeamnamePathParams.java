package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTeamTeamnamePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=teamname")
    public String teamname;
    public GetTeamTeamnamePathParams withTeamname(String teamname) {
        this.teamname = teamname;
        return this;
    }
}