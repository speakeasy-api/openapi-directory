package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTagPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public String projectId;
    public GetTagPathParams withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tagId")
    public String tagId;
    public GetTagPathParams withTagId(String tagId) {
        this.tagId = tagId;
        return this;
    }
}