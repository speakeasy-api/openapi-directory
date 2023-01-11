package openapisdk.models.operations;



public class CloudassetAnalyzeIamPolicyResponse {
    public openapisdk.models.shared.AnalyzeIamPolicyResponse analyzeIamPolicyResponse;
    public CloudassetAnalyzeIamPolicyResponse withAnalyzeIamPolicyResponse(openapisdk.models.shared.AnalyzeIamPolicyResponse analyzeIamPolicyResponse) {
        this.analyzeIamPolicyResponse = analyzeIamPolicyResponse;
        return this;
    }
    public String contentType;
    public CloudassetAnalyzeIamPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CloudassetAnalyzeIamPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}