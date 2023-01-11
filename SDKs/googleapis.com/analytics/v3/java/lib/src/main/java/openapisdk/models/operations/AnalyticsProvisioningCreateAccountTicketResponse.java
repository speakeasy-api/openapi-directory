package openapisdk.models.operations;



public class AnalyticsProvisioningCreateAccountTicketResponse {
    public openapisdk.models.shared.AccountTicket accountTicket;
    public AnalyticsProvisioningCreateAccountTicketResponse withAccountTicket(openapisdk.models.shared.AccountTicket accountTicket) {
        this.accountTicket = accountTicket;
        return this;
    }
    public String contentType;
    public AnalyticsProvisioningCreateAccountTicketResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AnalyticsProvisioningCreateAccountTicketResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}