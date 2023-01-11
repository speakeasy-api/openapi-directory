package openapisdk.models.operations;



public class GetStatusResponse {
    public String contentType;
    public GetStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getStatusResponse;
    public GetStatusResponse withGetStatusResponse(java.util.Map<String, Object> getStatusResponse) {
        this.getStatusResponse = getStatusResponse;
        return this;
    }
}