package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsadminAccountsProvisionAccountTicketRequest {
    public AnalyticsadminAccountsProvisionAccountTicketQueryParams queryParams;
    public AnalyticsadminAccountsProvisionAccountTicketRequest withQueryParams(AnalyticsadminAccountsProvisionAccountTicketQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleAnalyticsAdminV1betaProvisionAccountTicketRequestInput request;
    public AnalyticsadminAccountsProvisionAccountTicketRequest withRequest(openapisdk.models.shared.GoogleAnalyticsAdminV1betaProvisionAccountTicketRequestInput request) {
        this.request = request;
        return this;
    }
    public AnalyticsadminAccountsProvisionAccountTicketSecurity security;
    public AnalyticsadminAccountsProvisionAccountTicketRequest withSecurity(AnalyticsadminAccountsProvisionAccountTicketSecurity security) {
        this.security = security;
        return this;
    }
}