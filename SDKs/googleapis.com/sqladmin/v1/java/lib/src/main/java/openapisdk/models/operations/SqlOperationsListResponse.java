package openapisdk.models.operations;



public class SqlOperationsListResponse {
    public String contentType;
    public SqlOperationsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.OperationsListResponse operationsListResponse;
    public SqlOperationsListResponse withOperationsListResponse(openapisdk.models.shared.OperationsListResponse operationsListResponse) {
        this.operationsListResponse = operationsListResponse;
        return this;
    }
    public Long statusCode;
    public SqlOperationsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}