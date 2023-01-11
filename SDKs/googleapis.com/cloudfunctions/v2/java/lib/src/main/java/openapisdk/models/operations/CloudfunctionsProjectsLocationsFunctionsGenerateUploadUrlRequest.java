package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudfunctionsProjectsLocationsFunctionsGenerateUploadUrlRequest {
    public CloudfunctionsProjectsLocationsFunctionsGenerateUploadUrlPathParams pathParams;
    public CloudfunctionsProjectsLocationsFunctionsGenerateUploadUrlRequest withPathParams(CloudfunctionsProjectsLocationsFunctionsGenerateUploadUrlPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudfunctionsProjectsLocationsFunctionsGenerateUploadUrlQueryParams queryParams;
    public CloudfunctionsProjectsLocationsFunctionsGenerateUploadUrlRequest withQueryParams(CloudfunctionsProjectsLocationsFunctionsGenerateUploadUrlQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public CloudfunctionsProjectsLocationsFunctionsGenerateUploadUrlRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public CloudfunctionsProjectsLocationsFunctionsGenerateUploadUrlSecurity security;
    public CloudfunctionsProjectsLocationsFunctionsGenerateUploadUrlRequest withSecurity(CloudfunctionsProjectsLocationsFunctionsGenerateUploadUrlSecurity security) {
        this.security = security;
        return this;
    }
}