package openapisdk.models.operations;



public class ApplicationGetResponse {
    public openapisdk.models.shared.ApplicationGetResponse applicationGetResponse;
    public ApplicationGetResponse withApplicationGetResponse(openapisdk.models.shared.ApplicationGetResponse applicationGetResponse) {
        this.applicationGetResponse = applicationGetResponse;
        return this;
    }
    public String contentType;
    public ApplicationGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> error;
    public ApplicationGetResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public ApplicationGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}