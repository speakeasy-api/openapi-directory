package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteVodRegionsRequest {
    public DeleteVodRegionsPathParams pathParams;
    public DeleteVodRegionsRequest withPathParams(DeleteVodRegionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/vnd.vimeo.ondemand.region+json")
    public DeleteVodRegionsRequestBody request;
    public DeleteVodRegionsRequest withRequest(DeleteVodRegionsRequestBody request) {
        this.request = request;
        return this;
    }
    public DeleteVodRegionsSecurity security;
    public DeleteVodRegionsRequest withSecurity(DeleteVodRegionsSecurity security) {
        this.security = security;
        return this;
    }
}