package openapisdk.models.operations;



public class ReposListDeployKeysResponse {
    public String contentType;
    public ReposListDeployKeysResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ReposListDeployKeysResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ReposListDeployKeysResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.DeployKey[] deployKeys;
    public ReposListDeployKeysResponse withDeployKeys(openapisdk.models.shared.DeployKey[] deployKeys) {
        this.deployKeys = deployKeys;
        return this;
    }
}