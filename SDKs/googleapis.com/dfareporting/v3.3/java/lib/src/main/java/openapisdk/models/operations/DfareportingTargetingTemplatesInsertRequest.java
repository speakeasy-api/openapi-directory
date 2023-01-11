package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingTargetingTemplatesInsertRequest {
    public DfareportingTargetingTemplatesInsertPathParams pathParams;
    public DfareportingTargetingTemplatesInsertRequest withPathParams(DfareportingTargetingTemplatesInsertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingTargetingTemplatesInsertQueryParams queryParams;
    public DfareportingTargetingTemplatesInsertRequest withQueryParams(DfareportingTargetingTemplatesInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TargetingTemplate request;
    public DfareportingTargetingTemplatesInsertRequest withRequest(openapisdk.models.shared.TargetingTemplate request) {
        this.request = request;
        return this;
    }
    public DfareportingTargetingTemplatesInsertSecurity security;
    public DfareportingTargetingTemplatesInsertRequest withSecurity(DfareportingTargetingTemplatesInsertSecurity security) {
        this.security = security;
        return this;
    }
}