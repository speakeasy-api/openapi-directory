package openapisdk.models.operations;



public class CloudfunctionsProjectsLocationsFunctionsGenerateUploadUrlResponse {
    public String contentType;
    public CloudfunctionsProjectsLocationsFunctionsGenerateUploadUrlResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GenerateUploadUrlResponse generateUploadUrlResponse;
    public CloudfunctionsProjectsLocationsFunctionsGenerateUploadUrlResponse withGenerateUploadUrlResponse(openapisdk.models.shared.GenerateUploadUrlResponse generateUploadUrlResponse) {
        this.generateUploadUrlResponse = generateUploadUrlResponse;
        return this;
    }
    public Long statusCode;
    public CloudfunctionsProjectsLocationsFunctionsGenerateUploadUrlResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}