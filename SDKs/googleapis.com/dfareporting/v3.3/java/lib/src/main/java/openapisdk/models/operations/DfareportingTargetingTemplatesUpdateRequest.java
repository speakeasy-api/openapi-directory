package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingTargetingTemplatesUpdateRequest {
    public DfareportingTargetingTemplatesUpdatePathParams pathParams;
    public DfareportingTargetingTemplatesUpdateRequest withPathParams(DfareportingTargetingTemplatesUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingTargetingTemplatesUpdateQueryParams queryParams;
    public DfareportingTargetingTemplatesUpdateRequest withQueryParams(DfareportingTargetingTemplatesUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TargetingTemplate request;
    public DfareportingTargetingTemplatesUpdateRequest withRequest(openapisdk.models.shared.TargetingTemplate request) {
        this.request = request;
        return this;
    }
    public DfareportingTargetingTemplatesUpdateSecurity security;
    public DfareportingTargetingTemplatesUpdateRequest withSecurity(DfareportingTargetingTemplatesUpdateSecurity security) {
        this.security = security;
        return this;
    }
}