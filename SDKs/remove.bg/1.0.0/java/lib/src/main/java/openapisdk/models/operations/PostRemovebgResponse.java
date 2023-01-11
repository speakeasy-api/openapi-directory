package openapisdk.models.operations;



public class PostRemovebgResponse {
    public byte[] body;
    public PostRemovebgResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostRemovebgResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostRemovebgResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.RemoveBgJsonResponse removeBgJsonResponse;
    public PostRemovebgResponse withRemoveBgJsonResponse(openapisdk.models.shared.RemoveBgJsonResponse removeBgJsonResponse) {
        this.removeBgJsonResponse = removeBgJsonResponse;
        return this;
    }
    public Long statusCode;
    public PostRemovebgResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public byte[] postRemovebg200ImageWildcardBinaryString;
    public PostRemovebgResponse withPostRemovebg200ImageWildcardBinaryString(byte[] postRemovebg200ImageWildcardBinaryString) {
        this.postRemovebg200ImageWildcardBinaryString = postRemovebg200ImageWildcardBinaryString;
        return this;
    }
}