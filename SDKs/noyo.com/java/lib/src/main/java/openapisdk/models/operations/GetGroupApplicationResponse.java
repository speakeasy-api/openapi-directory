package openapisdk.models.operations;



public class GetGroupApplicationResponse {
    public String contentType;
    public GetGroupApplicationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GroupApplicationResult groupApplicationResult;
    public GetGroupApplicationResponse withGroupApplicationResult(openapisdk.models.shared.GroupApplicationResult groupApplicationResult) {
        this.groupApplicationResult = groupApplicationResult;
        return this;
    }
    public Long statusCode;
    public GetGroupApplicationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}