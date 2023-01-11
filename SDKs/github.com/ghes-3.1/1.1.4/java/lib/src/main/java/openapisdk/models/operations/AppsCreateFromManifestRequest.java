package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppsCreateFromManifestRequest {
    public AppsCreateFromManifestPathParams pathParams;
    public AppsCreateFromManifestRequest withPathParams(AppsCreateFromManifestPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public AppsCreateFromManifestRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}