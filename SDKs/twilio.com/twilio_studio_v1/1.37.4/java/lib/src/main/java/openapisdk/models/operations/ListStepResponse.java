package openapisdk.models.operations;



public class ListStepResponse {
    public String contentType;
    public ListStepResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListStepListStepResponse listStepResponse;
    public ListStepResponse withListStepResponse(ListStepListStepResponse listStepResponse) {
        this.listStepResponse = listStepResponse;
        return this;
    }
    public Long statusCode;
    public ListStepResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}