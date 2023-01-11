package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostVolumesRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostVolumesCreateVolumeRequest request;
    public PostVolumesRequest withRequest(PostVolumesCreateVolumeRequest request) {
        this.request = request;
        return this;
    }
}