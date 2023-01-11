package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SecuritycenterProjectsFindingsBulkMuteRequest {
    public SecuritycenterProjectsFindingsBulkMutePathParams pathParams;
    public SecuritycenterProjectsFindingsBulkMuteRequest withPathParams(SecuritycenterProjectsFindingsBulkMutePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SecuritycenterProjectsFindingsBulkMuteQueryParams queryParams;
    public SecuritycenterProjectsFindingsBulkMuteRequest withQueryParams(SecuritycenterProjectsFindingsBulkMuteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BulkMuteFindingsRequest request;
    public SecuritycenterProjectsFindingsBulkMuteRequest withRequest(openapisdk.models.shared.BulkMuteFindingsRequest request) {
        this.request = request;
        return this;
    }
    public SecuritycenterProjectsFindingsBulkMuteSecurity security;
    public SecuritycenterProjectsFindingsBulkMuteRequest withSecurity(SecuritycenterProjectsFindingsBulkMuteSecurity security) {
        this.security = security;
        return this;
    }
}