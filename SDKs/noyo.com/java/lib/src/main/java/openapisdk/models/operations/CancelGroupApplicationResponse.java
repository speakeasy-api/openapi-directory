package openapisdk.models.operations;



public class CancelGroupApplicationResponse {
    public String contentType;
    public CancelGroupApplicationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GroupApplicationResult groupApplicationResult;
    public CancelGroupApplicationResponse withGroupApplicationResult(openapisdk.models.shared.GroupApplicationResult groupApplicationResult) {
        this.groupApplicationResult = groupApplicationResult;
        return this;
    }
    public Long statusCode;
    public CancelGroupApplicationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}