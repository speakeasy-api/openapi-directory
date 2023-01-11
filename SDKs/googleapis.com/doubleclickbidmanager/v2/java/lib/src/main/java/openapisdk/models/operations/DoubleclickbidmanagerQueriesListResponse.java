package openapisdk.models.operations;



public class DoubleclickbidmanagerQueriesListResponse {
    public String contentType;
    public DoubleclickbidmanagerQueriesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListQueriesResponse listQueriesResponse;
    public DoubleclickbidmanagerQueriesListResponse withListQueriesResponse(openapisdk.models.shared.ListQueriesResponse listQueriesResponse) {
        this.listQueriesResponse = listQueriesResponse;
        return this;
    }
    public Long statusCode;
    public DoubleclickbidmanagerQueriesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}