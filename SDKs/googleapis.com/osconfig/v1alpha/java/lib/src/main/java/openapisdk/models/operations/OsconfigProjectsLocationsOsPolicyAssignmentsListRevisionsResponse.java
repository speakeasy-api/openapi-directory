package openapisdk.models.operations;



public class OsconfigProjectsLocationsOsPolicyAssignmentsListRevisionsResponse {
    public String contentType;
    public OsconfigProjectsLocationsOsPolicyAssignmentsListRevisionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListOsPolicyAssignmentRevisionsResponse listOSPolicyAssignmentRevisionsResponse;
    public OsconfigProjectsLocationsOsPolicyAssignmentsListRevisionsResponse withListOsPolicyAssignmentRevisionsResponse(openapisdk.models.shared.ListOsPolicyAssignmentRevisionsResponse listOSPolicyAssignmentRevisionsResponse) {
        this.listOSPolicyAssignmentRevisionsResponse = listOSPolicyAssignmentRevisionsResponse;
        return this;
    }
    public Long statusCode;
    public OsconfigProjectsLocationsOsPolicyAssignmentsListRevisionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}