package openapisdk.models.operations;



public class SubmitGroupApplicationResponse {
    public openapisdk.models.shared.ApplicationValidationResult applicationValidationResult;
    public SubmitGroupApplicationResponse withApplicationValidationResult(openapisdk.models.shared.ApplicationValidationResult applicationValidationResult) {
        this.applicationValidationResult = applicationValidationResult;
        return this;
    }
    public String contentType;
    public SubmitGroupApplicationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GroupApplicationResult groupApplicationResult;
    public SubmitGroupApplicationResponse withGroupApplicationResult(openapisdk.models.shared.GroupApplicationResult groupApplicationResult) {
        this.groupApplicationResult = groupApplicationResult;
        return this;
    }
    public Long statusCode;
    public SubmitGroupApplicationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}