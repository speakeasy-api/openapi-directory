package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FormsFormsWatchesCreateRequest {
    public FormsFormsWatchesCreatePathParams pathParams;
    public FormsFormsWatchesCreateRequest withPathParams(FormsFormsWatchesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FormsFormsWatchesCreateQueryParams queryParams;
    public FormsFormsWatchesCreateRequest withQueryParams(FormsFormsWatchesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateWatchRequestInput request;
    public FormsFormsWatchesCreateRequest withRequest(openapisdk.models.shared.CreateWatchRequestInput request) {
        this.request = request;
        return this;
    }
    public FormsFormsWatchesCreateSecurity security;
    public FormsFormsWatchesCreateRequest withSecurity(FormsFormsWatchesCreateSecurity security) {
        this.security = security;
        return this;
    }
}