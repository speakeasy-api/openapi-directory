package openapisdk.models.operations;



public class OsconfigProjectsLocationsOsPolicyAssignmentsListResponse {
    public String contentType;
    public OsconfigProjectsLocationsOsPolicyAssignmentsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListOsPolicyAssignmentsResponse listOSPolicyAssignmentsResponse;
    public OsconfigProjectsLocationsOsPolicyAssignmentsListResponse withListOsPolicyAssignmentsResponse(openapisdk.models.shared.ListOsPolicyAssignmentsResponse listOSPolicyAssignmentsResponse) {
        this.listOSPolicyAssignmentsResponse = listOSPolicyAssignmentsResponse;
        return this;
    }
    public Long statusCode;
    public OsconfigProjectsLocationsOsPolicyAssignmentsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}