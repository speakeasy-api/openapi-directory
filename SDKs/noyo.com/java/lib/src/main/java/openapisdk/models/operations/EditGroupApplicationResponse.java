package openapisdk.models.operations;



public class EditGroupApplicationResponse {
    public String contentType;
    public EditGroupApplicationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GroupApplicationResult groupApplicationResult;
    public EditGroupApplicationResponse withGroupApplicationResult(openapisdk.models.shared.GroupApplicationResult groupApplicationResult) {
        this.groupApplicationResult = groupApplicationResult;
        return this;
    }
    public Long statusCode;
    public EditGroupApplicationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}