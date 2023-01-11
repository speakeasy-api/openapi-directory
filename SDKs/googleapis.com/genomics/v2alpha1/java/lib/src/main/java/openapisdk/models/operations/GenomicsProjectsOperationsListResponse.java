package openapisdk.models.operations;



public class GenomicsProjectsOperationsListResponse {
    public String contentType;
    public GenomicsProjectsOperationsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListOperationsResponse listOperationsResponse;
    public GenomicsProjectsOperationsListResponse withListOperationsResponse(openapisdk.models.shared.ListOperationsResponse listOperationsResponse) {
        this.listOperationsResponse = listOperationsResponse;
        return this;
    }
    public Long statusCode;
    public GenomicsProjectsOperationsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}