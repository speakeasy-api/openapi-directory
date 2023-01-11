package openapisdk.models.operations;



public class GetAgentLocationsResponse {
    public String contentType;
    public GetAgentLocationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PaginatedAgentLocationResult paginatedAgentLocationResult;
    public GetAgentLocationsResponse withPaginatedAgentLocationResult(openapisdk.models.shared.PaginatedAgentLocationResult paginatedAgentLocationResult) {
        this.paginatedAgentLocationResult = paginatedAgentLocationResult;
        return this;
    }
    public Long statusCode;
    public GetAgentLocationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}