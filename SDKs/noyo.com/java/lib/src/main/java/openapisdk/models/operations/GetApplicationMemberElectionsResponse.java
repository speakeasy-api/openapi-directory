package openapisdk.models.operations;



public class GetApplicationMemberElectionsResponse {
    public String contentType;
    public GetApplicationMemberElectionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PaginatedMemberElectionResult paginatedMemberElectionResult;
    public GetApplicationMemberElectionsResponse withPaginatedMemberElectionResult(openapisdk.models.shared.PaginatedMemberElectionResult paginatedMemberElectionResult) {
        this.paginatedMemberElectionResult = paginatedMemberElectionResult;
        return this;
    }
    public Long statusCode;
    public GetApplicationMemberElectionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}