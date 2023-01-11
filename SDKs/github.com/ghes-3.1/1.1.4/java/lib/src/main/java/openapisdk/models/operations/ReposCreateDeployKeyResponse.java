package openapisdk.models.operations;



public class ReposCreateDeployKeyResponse {
    public String contentType;
    public ReposCreateDeployKeyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ReposCreateDeployKeyResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ReposCreateDeployKeyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.DeployKey deployKey;
    public ReposCreateDeployKeyResponse withDeployKey(openapisdk.models.shared.DeployKey deployKey) {
        this.deployKey = deployKey;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public ReposCreateDeployKeyResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}