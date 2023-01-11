package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddVideoToVodRequest {
    public AddVideoToVodPathParams pathParams;
    public AddVideoToVodRequest withPathParams(AddVideoToVodPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/vnd.vimeo.ondemand.video+json")
    public AddVideoToVodRequestBody request;
    public AddVideoToVodRequest withRequest(AddVideoToVodRequestBody request) {
        this.request = request;
        return this;
    }
    public AddVideoToVodSecurity security;
    public AddVideoToVodRequest withSecurity(AddVideoToVodSecurity security) {
        this.security = security;
        return this;
    }
}