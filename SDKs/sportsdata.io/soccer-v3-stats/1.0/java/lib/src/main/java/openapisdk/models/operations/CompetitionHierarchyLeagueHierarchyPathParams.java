package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CompetitionHierarchyLeagueHierarchyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public CompetitionHierarchyLeagueHierarchyFormatEnum format;
    public CompetitionHierarchyLeagueHierarchyPathParams withFormat(CompetitionHierarchyLeagueHierarchyFormatEnum format) {
        this.format = format;
        return this;
    }
}