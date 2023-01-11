package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CompetitionFixturesLeagueDetailsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=competitionid")
    public String competitionid;
    public CompetitionFixturesLeagueDetailsPathParams withCompetitionid(String competitionid) {
        this.competitionid = competitionid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public CompetitionFixturesLeagueDetailsFormatEnum format;
    public CompetitionFixturesLeagueDetailsPathParams withFormat(CompetitionFixturesLeagueDetailsFormatEnum format) {
        this.format = format;
        return this;
    }
}