package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BoxScoresDeltaByDateByCompetitionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=competition")
    public String competition;
    public BoxScoresDeltaByDateByCompetitionPathParams withCompetition(String competition) {
        this.competition = competition;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=date")
    public String date;
    public BoxScoresDeltaByDateByCompetitionPathParams withDate(String date) {
        this.date = date;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public BoxScoresDeltaByDateByCompetitionFormatEnum format;
    public BoxScoresDeltaByDateByCompetitionPathParams withFormat(BoxScoresDeltaByDateByCompetitionFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=minutes")
    public String minutes;
    public BoxScoresDeltaByDateByCompetitionPathParams withMinutes(String minutes) {
        this.minutes = minutes;
        return this;
    }
}