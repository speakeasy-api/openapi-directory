package openapisdk.models.operations;



public class RetrieveAllEuAsForAnEndUserResponse {
    public String contentType;
    public RetrieveAllEuAsForAnEndUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PaginatedEndUserAgreementList paginatedEndUserAgreementList;
    public RetrieveAllEuAsForAnEndUserResponse withPaginatedEndUserAgreementList(openapisdk.models.shared.PaginatedEndUserAgreementList paginatedEndUserAgreementList) {
        this.paginatedEndUserAgreementList = paginatedEndUserAgreementList;
        return this;
    }
    public Long statusCode;
    public RetrieveAllEuAsForAnEndUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}