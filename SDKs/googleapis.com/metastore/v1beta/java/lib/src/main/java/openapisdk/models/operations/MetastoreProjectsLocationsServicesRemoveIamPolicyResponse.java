package openapisdk.models.operations;



public class MetastoreProjectsLocationsServicesRemoveIamPolicyResponse {
    public String contentType;
    public MetastoreProjectsLocationsServicesRemoveIamPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.RemoveIamPolicyResponse removeIamPolicyResponse;
    public MetastoreProjectsLocationsServicesRemoveIamPolicyResponse withRemoveIamPolicyResponse(openapisdk.models.shared.RemoveIamPolicyResponse removeIamPolicyResponse) {
        this.removeIamPolicyResponse = removeIamPolicyResponse;
        return this;
    }
    public Long statusCode;
    public MetastoreProjectsLocationsServicesRemoveIamPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}