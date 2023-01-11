package openapisdk.models.operations;



public class GetLanguagesResponse {
    public String contentType;
    public GetLanguagesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetLanguagesResponse getLanguagesResponse;
    public GetLanguagesResponse withGetLanguagesResponse(openapisdk.models.shared.GetLanguagesResponse getLanguagesResponse) {
        this.getLanguagesResponse = getLanguagesResponse;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetLanguagesResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetLanguagesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}