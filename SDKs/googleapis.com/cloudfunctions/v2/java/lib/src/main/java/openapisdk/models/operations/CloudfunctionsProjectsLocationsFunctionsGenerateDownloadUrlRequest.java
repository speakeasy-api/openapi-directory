package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudfunctionsProjectsLocationsFunctionsGenerateDownloadUrlRequest {
    public CloudfunctionsProjectsLocationsFunctionsGenerateDownloadUrlPathParams pathParams;
    public CloudfunctionsProjectsLocationsFunctionsGenerateDownloadUrlRequest withPathParams(CloudfunctionsProjectsLocationsFunctionsGenerateDownloadUrlPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudfunctionsProjectsLocationsFunctionsGenerateDownloadUrlQueryParams queryParams;
    public CloudfunctionsProjectsLocationsFunctionsGenerateDownloadUrlRequest withQueryParams(CloudfunctionsProjectsLocationsFunctionsGenerateDownloadUrlQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public CloudfunctionsProjectsLocationsFunctionsGenerateDownloadUrlRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public CloudfunctionsProjectsLocationsFunctionsGenerateDownloadUrlSecurity security;
    public CloudfunctionsProjectsLocationsFunctionsGenerateDownloadUrlRequest withSecurity(CloudfunctionsProjectsLocationsFunctionsGenerateDownloadUrlSecurity security) {
        this.security = security;
        return this;
    }
}