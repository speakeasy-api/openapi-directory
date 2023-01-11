package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CompetitionFixturesLeagueDetailsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=competition")
    public String competition;
    public CompetitionFixturesLeagueDetailsPathParams withCompetition(String competition) {
        this.competition = competition;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public CompetitionFixturesLeagueDetailsFormatEnum format;
    public CompetitionFixturesLeagueDetailsPathParams withFormat(CompetitionFixturesLeagueDetailsFormatEnum format) {
        this.format = format;
        return this;
    }
}