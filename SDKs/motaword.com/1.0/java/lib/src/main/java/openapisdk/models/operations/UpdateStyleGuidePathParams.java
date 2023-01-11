package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateStyleGuidePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public Long projectId;
    public UpdateStyleGuidePathParams withProjectId(Long projectId) {
        this.projectId = projectId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=styleGuideId")
    public Long styleGuideId;
    public UpdateStyleGuidePathParams withStyleGuideId(Long styleGuideId) {
        this.styleGuideId = styleGuideId;
        return this;
    }
}