package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MembershipsByTeamActivePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public MembershipsByTeamActiveFormatEnum format;
    public MembershipsByTeamActivePathParams withFormat(MembershipsByTeamActiveFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=teamid")
    public String teamid;
    public MembershipsByTeamActivePathParams withTeamid(String teamid) {
        this.teamid = teamid;
        return this;
    }
}