package openapisdk.models.operations;



public class DoubleclickbidmanagerQueriesReportsListResponse {
    public String contentType;
    public DoubleclickbidmanagerQueriesReportsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListReportsResponse listReportsResponse;
    public DoubleclickbidmanagerQueriesReportsListResponse withListReportsResponse(openapisdk.models.shared.ListReportsResponse listReportsResponse) {
        this.listReportsResponse = listReportsResponse;
        return this;
    }
    public Long statusCode;
    public DoubleclickbidmanagerQueriesReportsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}