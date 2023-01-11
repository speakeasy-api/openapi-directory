package openapisdk.models.operations;



public class UpdateGlobalGlossaryResponse {
    public String contentType;
    public UpdateGlobalGlossaryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public UpdateGlobalGlossaryResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.OperationStatus operationStatus;
    public UpdateGlobalGlossaryResponse withOperationStatus(openapisdk.models.shared.OperationStatus operationStatus) {
        this.operationStatus = operationStatus;
        return this;
    }
    public Long statusCode;
    public UpdateGlobalGlossaryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}