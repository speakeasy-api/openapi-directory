package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SuggestTagsAndRegionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public String projectId;
    public SuggestTagsAndRegionsPathParams withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
}