package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DownloadVideosRequest {
    public DownloadVideosPathParams pathParams;
    public DownloadVideosRequest withPathParams(DownloadVideosPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RedownloadVideo request;
    public DownloadVideosRequest withRequest(openapisdk.models.shared.RedownloadVideo request) {
        this.request = request;
        return this;
    }
    public DownloadVideosSecurity security;
    public DownloadVideosRequest withSecurity(DownloadVideosSecurity security) {
        this.security = security;
        return this;
    }
}