package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LeagueHierarchyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public LeagueHierarchyFormatEnum format;
    public LeagueHierarchyPathParams withFormat(LeagueHierarchyFormatEnum format) {
        this.format = format;
        return this;
    }
}