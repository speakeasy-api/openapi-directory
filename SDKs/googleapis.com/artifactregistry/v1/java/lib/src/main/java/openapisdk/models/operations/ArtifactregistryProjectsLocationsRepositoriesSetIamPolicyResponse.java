package openapisdk.models.operations;



public class ArtifactregistryProjectsLocationsRepositoriesSetIamPolicyResponse {
    public String contentType;
    public ArtifactregistryProjectsLocationsRepositoriesSetIamPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Policy policy;
    public ArtifactregistryProjectsLocationsRepositoriesSetIamPolicyResponse withPolicy(openapisdk.models.shared.Policy policy) {
        this.policy = policy;
        return this;
    }
    public Long statusCode;
    public ArtifactregistryProjectsLocationsRepositoriesSetIamPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}