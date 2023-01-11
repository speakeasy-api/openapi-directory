package openapisdk.models.operations;



public class CloudassetExportIamPolicyAnalysisResponse {
    public String contentType;
    public CloudassetExportIamPolicyAnalysisResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Operation operation;
    public CloudassetExportIamPolicyAnalysisResponse withOperation(openapisdk.models.shared.Operation operation) {
        this.operation = operation;
        return this;
    }
    public Long statusCode;
    public CloudassetExportIamPolicyAnalysisResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}