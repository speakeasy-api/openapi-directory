package openapisdk.models.operations;



public class DataprocProjectsLocationsBatchesListResponse {
    public String contentType;
    public DataprocProjectsLocationsBatchesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListBatchesResponse listBatchesResponse;
    public DataprocProjectsLocationsBatchesListResponse withListBatchesResponse(openapisdk.models.shared.ListBatchesResponse listBatchesResponse) {
        this.listBatchesResponse = listBatchesResponse;
        return this;
    }
    public Long statusCode;
    public DataprocProjectsLocationsBatchesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}