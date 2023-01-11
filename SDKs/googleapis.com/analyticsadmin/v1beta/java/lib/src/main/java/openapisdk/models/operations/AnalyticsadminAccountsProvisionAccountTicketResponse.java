package openapisdk.models.operations;



public class AnalyticsadminAccountsProvisionAccountTicketResponse {
    public String contentType;
    public AnalyticsadminAccountsProvisionAccountTicketResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleAnalyticsAdminV1betaProvisionAccountTicketResponse googleAnalyticsAdminV1betaProvisionAccountTicketResponse;
    public AnalyticsadminAccountsProvisionAccountTicketResponse withGoogleAnalyticsAdminV1betaProvisionAccountTicketResponse(openapisdk.models.shared.GoogleAnalyticsAdminV1betaProvisionAccountTicketResponse googleAnalyticsAdminV1betaProvisionAccountTicketResponse) {
        this.googleAnalyticsAdminV1betaProvisionAccountTicketResponse = googleAnalyticsAdminV1betaProvisionAccountTicketResponse;
        return this;
    }
    public Long statusCode;
    public AnalyticsadminAccountsProvisionAccountTicketResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}