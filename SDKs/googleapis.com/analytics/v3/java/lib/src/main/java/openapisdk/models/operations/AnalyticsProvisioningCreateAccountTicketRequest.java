package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsProvisioningCreateAccountTicketRequest {
    public AnalyticsProvisioningCreateAccountTicketQueryParams queryParams;
    public AnalyticsProvisioningCreateAccountTicketRequest withQueryParams(AnalyticsProvisioningCreateAccountTicketQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AccountTicketInput request;
    public AnalyticsProvisioningCreateAccountTicketRequest withRequest(openapisdk.models.shared.AccountTicketInput request) {
        this.request = request;
        return this;
    }
    public AnalyticsProvisioningCreateAccountTicketSecurity security;
    public AnalyticsProvisioningCreateAccountTicketRequest withSecurity(AnalyticsProvisioningCreateAccountTicketSecurity security) {
        this.security = security;
        return this;
    }
}