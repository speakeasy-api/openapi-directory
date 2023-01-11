package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostVolumesIdActionsAttachRequest {
    public PostVolumesIdActionsAttachPathParams pathParams;
    public PostVolumesIdActionsAttachRequest withPathParams(PostVolumesIdActionsAttachPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostVolumesIdActionsAttachAttachVolumeRequest request;
    public PostVolumesIdActionsAttachRequest withRequest(PostVolumesIdActionsAttachAttachVolumeRequest request) {
        this.request = request;
        return this;
    }
}