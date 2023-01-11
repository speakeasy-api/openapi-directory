package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUntaggedImageCountPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public String projectId;
    public GetUntaggedImageCountPathParams withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
}