package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTaggedImageCountPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public String projectId;
    public GetTaggedImageCountPathParams withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
}