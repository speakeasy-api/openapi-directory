package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MembershipsByCompetitionHistoricalPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=competition")
    public String competition;
    public MembershipsByCompetitionHistoricalPathParams withCompetition(String competition) {
        this.competition = competition;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public MembershipsByCompetitionHistoricalFormatEnum format;
    public MembershipsByCompetitionHistoricalPathParams withFormat(MembershipsByCompetitionHistoricalFormatEnum format) {
        this.format = format;
        return this;
    }
}