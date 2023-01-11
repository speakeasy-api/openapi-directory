package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MybusinessAccountsLocationsMediaStartUploadRequest {
    public MybusinessAccountsLocationsMediaStartUploadPathParams pathParams;
    public MybusinessAccountsLocationsMediaStartUploadRequest withPathParams(MybusinessAccountsLocationsMediaStartUploadPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MybusinessAccountsLocationsMediaStartUploadQueryParams queryParams;
    public MybusinessAccountsLocationsMediaStartUploadRequest withQueryParams(MybusinessAccountsLocationsMediaStartUploadQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public MybusinessAccountsLocationsMediaStartUploadRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}