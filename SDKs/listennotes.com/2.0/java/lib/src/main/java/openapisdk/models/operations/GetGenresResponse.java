package openapisdk.models.operations;



public class GetGenresResponse {
    public String contentType;
    public GetGenresResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetGenresResponse getGenresResponse;
    public GetGenresResponse withGetGenresResponse(openapisdk.models.shared.GetGenresResponse getGenresResponse) {
        this.getGenresResponse = getGenresResponse;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetGenresResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetGenresResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}