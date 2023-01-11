package openapisdk.models.operations;



public class RetrieveAllRequisitionsResponse {
    public String contentType;
    public RetrieveAllRequisitionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PaginatedRequisitionList paginatedRequisitionList;
    public RetrieveAllRequisitionsResponse withPaginatedRequisitionList(openapisdk.models.shared.PaginatedRequisitionList paginatedRequisitionList) {
        this.paginatedRequisitionList = paginatedRequisitionList;
        return this;
    }
    public Long statusCode;
    public RetrieveAllRequisitionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}