package openapisdk.models.operations;



public class CreateGroupApplicationResponse {
    public String contentType;
    public CreateGroupApplicationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GroupApplicationResult groupApplicationResult;
    public CreateGroupApplicationResponse withGroupApplicationResult(openapisdk.models.shared.GroupApplicationResult groupApplicationResult) {
        this.groupApplicationResult = groupApplicationResult;
        return this;
    }
    public Long statusCode;
    public CreateGroupApplicationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}