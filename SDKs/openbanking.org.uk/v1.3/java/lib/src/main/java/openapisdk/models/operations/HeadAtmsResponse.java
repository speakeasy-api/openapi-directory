package openapisdk.models.operations;



public class HeadAtmsResponse {
    public String contentType;
    public HeadAtmsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> noResponse;
    public HeadAtmsResponse withNoResponse(java.util.Map<String, Object> noResponse) {
        this.noResponse = noResponse;
        return this;
    }
    public Long statusCode;
    public HeadAtmsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}