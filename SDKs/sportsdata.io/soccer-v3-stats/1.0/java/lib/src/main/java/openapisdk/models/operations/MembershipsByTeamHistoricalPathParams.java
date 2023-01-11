package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MembershipsByTeamHistoricalPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public MembershipsByTeamHistoricalFormatEnum format;
    public MembershipsByTeamHistoricalPathParams withFormat(MembershipsByTeamHistoricalFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=teamid")
    public String teamid;
    public MembershipsByTeamHistoricalPathParams withTeamid(String teamid) {
        this.teamid = teamid;
        return this;
    }
}