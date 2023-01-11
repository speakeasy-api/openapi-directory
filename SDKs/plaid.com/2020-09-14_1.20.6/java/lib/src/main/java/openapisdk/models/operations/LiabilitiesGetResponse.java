package openapisdk.models.operations;



public class LiabilitiesGetResponse {
    public String contentType;
    public LiabilitiesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> liabilitiesGetResponse;
    public LiabilitiesGetResponse withLiabilitiesGetResponse(java.util.Map<String, Object> liabilitiesGetResponse) {
        this.liabilitiesGetResponse = liabilitiesGetResponse;
        return this;
    }
    public Long statusCode;
    public LiabilitiesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}