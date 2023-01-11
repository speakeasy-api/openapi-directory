package openapisdk.models.operations;



public class CloudiotProjectsLocationsRegistriesGroupsGetIamPolicyResponse {
    public String contentType;
    public CloudiotProjectsLocationsRegistriesGroupsGetIamPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Policy policy;
    public CloudiotProjectsLocationsRegistriesGroupsGetIamPolicyResponse withPolicy(openapisdk.models.shared.Policy policy) {
        this.policy = policy;
        return this;
    }
    public Long statusCode;
    public CloudiotProjectsLocationsRegistriesGroupsGetIamPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}