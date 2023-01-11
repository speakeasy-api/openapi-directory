package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsProvisioningCreateAccountTreeRequest {
    public AnalyticsProvisioningCreateAccountTreeQueryParams queryParams;
    public AnalyticsProvisioningCreateAccountTreeRequest withQueryParams(AnalyticsProvisioningCreateAccountTreeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AccountTreeRequest request;
    public AnalyticsProvisioningCreateAccountTreeRequest withRequest(openapisdk.models.shared.AccountTreeRequest request) {
        this.request = request;
        return this;
    }
    public AnalyticsProvisioningCreateAccountTreeSecurity security;
    public AnalyticsProvisioningCreateAccountTreeRequest withSecurity(AnalyticsProvisioningCreateAccountTreeSecurity security) {
        this.security = security;
        return this;
    }
}