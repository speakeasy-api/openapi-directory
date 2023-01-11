package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BoxScoresByDateByCompetitionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=competition")
    public String competition;
    public BoxScoresByDateByCompetitionPathParams withCompetition(String competition) {
        this.competition = competition;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=date")
    public String date;
    public BoxScoresByDateByCompetitionPathParams withDate(String date) {
        this.date = date;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public BoxScoresByDateByCompetitionFormatEnum format;
    public BoxScoresByDateByCompetitionPathParams withFormat(BoxScoresByDateByCompetitionFormatEnum format) {
        this.format = format;
        return this;
    }
}