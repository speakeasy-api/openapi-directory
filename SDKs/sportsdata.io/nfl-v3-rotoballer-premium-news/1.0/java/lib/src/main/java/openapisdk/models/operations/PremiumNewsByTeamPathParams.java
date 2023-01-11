package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PremiumNewsByTeamPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public PremiumNewsByTeamFormatEnum format;
    public PremiumNewsByTeamPathParams withFormat(PremiumNewsByTeamFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=team")
    public String team;
    public PremiumNewsByTeamPathParams withTeam(String team) {
        this.team = team;
        return this;
    }
}