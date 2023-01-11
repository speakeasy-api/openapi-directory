package openapisdk.models.operations;



public class GetCoveragePlanMemberElectionsResponse {
    public String contentType;
    public GetCoveragePlanMemberElectionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PaginatedMemberElectionResult paginatedMemberElectionResult;
    public GetCoveragePlanMemberElectionsResponse withPaginatedMemberElectionResult(openapisdk.models.shared.PaginatedMemberElectionResult paginatedMemberElectionResult) {
        this.paginatedMemberElectionResult = paginatedMemberElectionResult;
        return this;
    }
    public Long statusCode;
    public GetCoveragePlanMemberElectionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}