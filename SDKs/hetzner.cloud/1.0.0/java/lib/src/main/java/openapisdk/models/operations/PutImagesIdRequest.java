package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutImagesIdRequest {
    public PutImagesIdPathParams pathParams;
    public PutImagesIdRequest withPathParams(PutImagesIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PutImagesIdUpdateImageRequest request;
    public PutImagesIdRequest withRequest(PutImagesIdUpdateImageRequest request) {
        this.request = request;
        return this;
    }
}