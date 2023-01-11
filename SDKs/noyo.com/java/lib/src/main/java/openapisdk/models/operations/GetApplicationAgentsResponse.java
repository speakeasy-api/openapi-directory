package openapisdk.models.operations;



public class GetApplicationAgentsResponse {
    public String contentType;
    public GetApplicationAgentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PaginatedAgentResult paginatedAgentResult;
    public GetApplicationAgentsResponse withPaginatedAgentResult(openapisdk.models.shared.PaginatedAgentResult paginatedAgentResult) {
        this.paginatedAgentResult = paginatedAgentResult;
        return this;
    }
    public Long statusCode;
    public GetApplicationAgentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}