package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutVolumesIdRequest {
    public PutVolumesIdPathParams pathParams;
    public PutVolumesIdRequest withPathParams(PutVolumesIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PutVolumesIdUpdateVolumeRequest request;
    public PutVolumesIdRequest withRequest(PutVolumesIdUpdateVolumeRequest request) {
        this.request = request;
        return this;
    }
}