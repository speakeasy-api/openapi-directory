package openapisdk.models.operations;



public class ArtifactregistryProjectsLocationsRepositoriesGetIamPolicyResponse {
    public String contentType;
    public ArtifactregistryProjectsLocationsRepositoriesGetIamPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Policy policy;
    public ArtifactregistryProjectsLocationsRepositoriesGetIamPolicyResponse withPolicy(openapisdk.models.shared.Policy policy) {
        this.policy = policy;
        return this;
    }
    public Long statusCode;
    public ArtifactregistryProjectsLocationsRepositoriesGetIamPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}