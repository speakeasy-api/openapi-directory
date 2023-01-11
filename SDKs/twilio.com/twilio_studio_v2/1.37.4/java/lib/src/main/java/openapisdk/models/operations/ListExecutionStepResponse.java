package openapisdk.models.operations;



public class ListExecutionStepResponse {
    public String contentType;
    public ListExecutionStepResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListExecutionStepListExecutionStepResponse listExecutionStepResponse;
    public ListExecutionStepResponse withListExecutionStepResponse(ListExecutionStepListExecutionStepResponse listExecutionStepResponse) {
        this.listExecutionStepResponse = listExecutionStepResponse;
        return this;
    }
    public Long statusCode;
    public ListExecutionStepResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}