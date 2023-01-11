package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DownloadImageRequest {
    public DownloadImagePathParams pathParams;
    public DownloadImageRequest withPathParams(DownloadImagePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RedownloadImage request;
    public DownloadImageRequest withRequest(openapisdk.models.shared.RedownloadImage request) {
        this.request = request;
        return this;
    }
    public DownloadImageSecurity security;
    public DownloadImageRequest withSecurity(DownloadImageSecurity security) {
        this.security = security;
        return this;
    }
}