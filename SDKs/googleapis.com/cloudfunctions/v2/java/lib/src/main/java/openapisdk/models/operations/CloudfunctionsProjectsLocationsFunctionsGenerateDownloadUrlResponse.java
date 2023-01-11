package openapisdk.models.operations;



public class CloudfunctionsProjectsLocationsFunctionsGenerateDownloadUrlResponse {
    public String contentType;
    public CloudfunctionsProjectsLocationsFunctionsGenerateDownloadUrlResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GenerateDownloadUrlResponse generateDownloadUrlResponse;
    public CloudfunctionsProjectsLocationsFunctionsGenerateDownloadUrlResponse withGenerateDownloadUrlResponse(openapisdk.models.shared.GenerateDownloadUrlResponse generateDownloadUrlResponse) {
        this.generateDownloadUrlResponse = generateDownloadUrlResponse;
        return this;
    }
    public Long statusCode;
    public CloudfunctionsProjectsLocationsFunctionsGenerateDownloadUrlResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}