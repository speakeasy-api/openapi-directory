package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingDynamicTargetingKeysInsertRequest {
    public DfareportingDynamicTargetingKeysInsertPathParams pathParams;
    public DfareportingDynamicTargetingKeysInsertRequest withPathParams(DfareportingDynamicTargetingKeysInsertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingDynamicTargetingKeysInsertQueryParams queryParams;
    public DfareportingDynamicTargetingKeysInsertRequest withQueryParams(DfareportingDynamicTargetingKeysInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DynamicTargetingKey request;
    public DfareportingDynamicTargetingKeysInsertRequest withRequest(openapisdk.models.shared.DynamicTargetingKey request) {
        this.request = request;
        return this;
    }
    public DfareportingDynamicTargetingKeysInsertSecurity security;
    public DfareportingDynamicTargetingKeysInsertRequest withSecurity(DfareportingDynamicTargetingKeysInsertSecurity security) {
        this.security = security;
        return this;
    }
}