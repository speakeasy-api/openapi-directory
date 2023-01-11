package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteStyleGuidePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public Long projectId;
    public DeleteStyleGuidePathParams withProjectId(Long projectId) {
        this.projectId = projectId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=styleGuideId")
    public Long styleGuideId;
    public DeleteStyleGuidePathParams withStyleGuideId(Long styleGuideId) {
        this.styleGuideId = styleGuideId;
        return this;
    }
}