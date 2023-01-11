package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingSitesPatchRequest {
    public DfareportingSitesPatchPathParams pathParams;
    public DfareportingSitesPatchRequest withPathParams(DfareportingSitesPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingSitesPatchQueryParams queryParams;
    public DfareportingSitesPatchRequest withQueryParams(DfareportingSitesPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Site request;
    public DfareportingSitesPatchRequest withRequest(openapisdk.models.shared.Site request) {
        this.request = request;
        return this;
    }
    public DfareportingSitesPatchSecurity security;
    public DfareportingSitesPatchRequest withSecurity(DfareportingSitesPatchSecurity security) {
        this.security = security;
        return this;
    }
}