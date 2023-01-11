package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BaremetalsolutionProjectsLocationsSshKeysCreateRequest {
    public BaremetalsolutionProjectsLocationsSshKeysCreatePathParams pathParams;
    public BaremetalsolutionProjectsLocationsSshKeysCreateRequest withPathParams(BaremetalsolutionProjectsLocationsSshKeysCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BaremetalsolutionProjectsLocationsSshKeysCreateQueryParams queryParams;
    public BaremetalsolutionProjectsLocationsSshKeysCreateRequest withQueryParams(BaremetalsolutionProjectsLocationsSshKeysCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SshKeyInput request;
    public BaremetalsolutionProjectsLocationsSshKeysCreateRequest withRequest(openapisdk.models.shared.SshKeyInput request) {
        this.request = request;
        return this;
    }
    public BaremetalsolutionProjectsLocationsSshKeysCreateSecurity security;
    public BaremetalsolutionProjectsLocationsSshKeysCreateRequest withSecurity(BaremetalsolutionProjectsLocationsSshKeysCreateSecurity security) {
        this.security = security;
        return this;
    }
}