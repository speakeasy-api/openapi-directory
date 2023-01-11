package openapisdk.models.operations;



public class CreateCallResponse {
    public String contentType;
    public CreateCallResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateCallResponse createCallResponse;
    public CreateCallResponse withCreateCallResponse(openapisdk.models.shared.CreateCallResponse createCallResponse) {
        this.createCallResponse = createCallResponse;
        return this;
    }
    public Long statusCode;
    public CreateCallResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}