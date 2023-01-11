package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AccessapprovalProjectsUpdateAccessApprovalSettingsRequest {
    public AccessapprovalProjectsUpdateAccessApprovalSettingsPathParams pathParams;
    public AccessapprovalProjectsUpdateAccessApprovalSettingsRequest withPathParams(AccessapprovalProjectsUpdateAccessApprovalSettingsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AccessapprovalProjectsUpdateAccessApprovalSettingsQueryParams queryParams;
    public AccessapprovalProjectsUpdateAccessApprovalSettingsRequest withQueryParams(AccessapprovalProjectsUpdateAccessApprovalSettingsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AccessApprovalSettingsInput request;
    public AccessapprovalProjectsUpdateAccessApprovalSettingsRequest withRequest(openapisdk.models.shared.AccessApprovalSettingsInput request) {
        this.request = request;
        return this;
    }
    public AccessapprovalProjectsUpdateAccessApprovalSettingsSecurity security;
    public AccessapprovalProjectsUpdateAccessApprovalSettingsRequest withSecurity(AccessapprovalProjectsUpdateAccessApprovalSettingsSecurity security) {
        this.security = security;
        return this;
    }
}