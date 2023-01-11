package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingTargetingTemplatesPatchRequest {
    public DfareportingTargetingTemplatesPatchPathParams pathParams;
    public DfareportingTargetingTemplatesPatchRequest withPathParams(DfareportingTargetingTemplatesPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingTargetingTemplatesPatchQueryParams queryParams;
    public DfareportingTargetingTemplatesPatchRequest withQueryParams(DfareportingTargetingTemplatesPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TargetingTemplate request;
    public DfareportingTargetingTemplatesPatchRequest withRequest(openapisdk.models.shared.TargetingTemplate request) {
        this.request = request;
        return this;
    }
    public DfareportingTargetingTemplatesPatchSecurity security;
    public DfareportingTargetingTemplatesPatchRequest withSecurity(DfareportingTargetingTemplatesPatchSecurity security) {
        this.security = security;
        return this;
    }
}