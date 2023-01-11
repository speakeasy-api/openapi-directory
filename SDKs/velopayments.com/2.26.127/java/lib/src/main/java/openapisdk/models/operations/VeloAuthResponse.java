package openapisdk.models.operations;



public class VeloAuthResponse {
    public openapisdk.models.shared.AuthResponse authResponse;
    public VeloAuthResponse withAuthResponse(openapisdk.models.shared.AuthResponse authResponse) {
        this.authResponse = authResponse;
        return this;
    }
    public String contentType;
    public VeloAuthResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public VeloAuthResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public VeloAuthResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}