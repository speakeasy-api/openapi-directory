package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetImageRegionProposalsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=imageId")
    public String imageId;
    public GetImageRegionProposalsPathParams withImageId(String imageId) {
        this.imageId = imageId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public String projectId;
    public GetImageRegionProposalsPathParams withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
}