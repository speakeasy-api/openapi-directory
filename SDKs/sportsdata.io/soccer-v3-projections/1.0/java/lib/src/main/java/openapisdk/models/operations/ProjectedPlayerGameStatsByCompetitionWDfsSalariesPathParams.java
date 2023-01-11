package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProjectedPlayerGameStatsByCompetitionWDfsSalariesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=competition")
    public String competition;
    public ProjectedPlayerGameStatsByCompetitionWDfsSalariesPathParams withCompetition(String competition) {
        this.competition = competition;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=date")
    public String date;
    public ProjectedPlayerGameStatsByCompetitionWDfsSalariesPathParams withDate(String date) {
        this.date = date;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public ProjectedPlayerGameStatsByCompetitionWDfsSalariesFormatEnum format;
    public ProjectedPlayerGameStatsByCompetitionWDfsSalariesPathParams withFormat(ProjectedPlayerGameStatsByCompetitionWDfsSalariesFormatEnum format) {
        this.format = format;
        return this;
    }
}