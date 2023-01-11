package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FormsFormsCreateRequest {
    public FormsFormsCreateQueryParams queryParams;
    public FormsFormsCreateRequest withQueryParams(FormsFormsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.FormInput request;
    public FormsFormsCreateRequest withRequest(openapisdk.models.shared.FormInput request) {
        this.request = request;
        return this;
    }
    public FormsFormsCreateSecurity security;
    public FormsFormsCreateRequest withSecurity(FormsFormsCreateSecurity security) {
        this.security = security;
        return this;
    }
}