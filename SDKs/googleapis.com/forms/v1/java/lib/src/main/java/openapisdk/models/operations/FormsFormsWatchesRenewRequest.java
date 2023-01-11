package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FormsFormsWatchesRenewRequest {
    public FormsFormsWatchesRenewPathParams pathParams;
    public FormsFormsWatchesRenewRequest withPathParams(FormsFormsWatchesRenewPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FormsFormsWatchesRenewQueryParams queryParams;
    public FormsFormsWatchesRenewRequest withQueryParams(FormsFormsWatchesRenewQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public FormsFormsWatchesRenewRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public FormsFormsWatchesRenewSecurity security;
    public FormsFormsWatchesRenewRequest withSecurity(FormsFormsWatchesRenewSecurity security) {
        this.security = security;
        return this;
    }
}