package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TournamentHierarchyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public TournamentHierarchyFormatEnum format;
    public TournamentHierarchyPathParams withFormat(TournamentHierarchyFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=season")
    public String season;
    public TournamentHierarchyPathParams withSeason(String season) {
        this.season = season;
        return this;
    }
}