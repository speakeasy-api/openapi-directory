package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateTagPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public String projectId;
    public UpdateTagPathParams withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tagId")
    public String tagId;
    public UpdateTagPathParams withTagId(String tagId) {
        this.tagId = tagId;
        return this;
    }
}