package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConferenceHierarchyWithTeamsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public ConferenceHierarchyWithTeamsFormatEnum format;
    public ConferenceHierarchyWithTeamsPathParams withFormat(ConferenceHierarchyWithTeamsFormatEnum format) {
        this.format = format;
        return this;
    }
}