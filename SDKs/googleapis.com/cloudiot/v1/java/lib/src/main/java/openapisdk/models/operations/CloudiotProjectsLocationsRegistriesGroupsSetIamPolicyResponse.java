package openapisdk.models.operations;



public class CloudiotProjectsLocationsRegistriesGroupsSetIamPolicyResponse {
    public String contentType;
    public CloudiotProjectsLocationsRegistriesGroupsSetIamPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Policy policy;
    public CloudiotProjectsLocationsRegistriesGroupsSetIamPolicyResponse withPolicy(openapisdk.models.shared.Policy policy) {
        this.policy = policy;
        return this;
    }
    public Long statusCode;
    public CloudiotProjectsLocationsRegistriesGroupsSetIamPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}