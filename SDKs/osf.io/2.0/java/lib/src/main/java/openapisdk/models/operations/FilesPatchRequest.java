package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FilesPatchRequest {
    public FilesPatchPathParams pathParams;
    public FilesPatchRequest withPathParams(FilesPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public FilesPatchRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}