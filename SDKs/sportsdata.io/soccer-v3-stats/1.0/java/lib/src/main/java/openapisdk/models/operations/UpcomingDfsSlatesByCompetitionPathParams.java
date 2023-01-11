package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpcomingDfsSlatesByCompetitionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=competitionId")
    public String competitionId;
    public UpcomingDfsSlatesByCompetitionPathParams withCompetitionId(String competitionId) {
        this.competitionId = competitionId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public UpcomingDfsSlatesByCompetitionFormatEnum format;
    public UpcomingDfsSlatesByCompetitionPathParams withFormat(UpcomingDfsSlatesByCompetitionFormatEnum format) {
        this.format = format;
        return this;
    }
}