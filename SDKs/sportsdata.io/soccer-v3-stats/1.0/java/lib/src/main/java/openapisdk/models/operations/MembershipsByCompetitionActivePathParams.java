package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MembershipsByCompetitionActivePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=competition")
    public String competition;
    public MembershipsByCompetitionActivePathParams withCompetition(String competition) {
        this.competition = competition;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public MembershipsByCompetitionActiveFormatEnum format;
    public MembershipsByCompetitionActivePathParams withFormat(MembershipsByCompetitionActiveFormatEnum format) {
        this.format = format;
        return this;
    }
}