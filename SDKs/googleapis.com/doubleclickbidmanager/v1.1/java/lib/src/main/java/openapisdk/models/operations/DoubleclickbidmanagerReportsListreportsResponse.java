package openapisdk.models.operations;



public class DoubleclickbidmanagerReportsListreportsResponse {
    public String contentType;
    public DoubleclickbidmanagerReportsListreportsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListReportsResponse listReportsResponse;
    public DoubleclickbidmanagerReportsListreportsResponse withListReportsResponse(openapisdk.models.shared.ListReportsResponse listReportsResponse) {
        this.listReportsResponse = listReportsResponse;
        return this;
    }
    public Long statusCode;
    public DoubleclickbidmanagerReportsListreportsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}