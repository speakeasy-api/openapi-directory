package openapisdk.models.operations;



public class TexttospeechVoicesListResponse {
    public String contentType;
    public TexttospeechVoicesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListVoicesResponse listVoicesResponse;
    public TexttospeechVoicesListResponse withListVoicesResponse(openapisdk.models.shared.ListVoicesResponse listVoicesResponse) {
        this.listVoicesResponse = listVoicesResponse;
        return this;
    }
    public Long statusCode;
    public TexttospeechVoicesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}