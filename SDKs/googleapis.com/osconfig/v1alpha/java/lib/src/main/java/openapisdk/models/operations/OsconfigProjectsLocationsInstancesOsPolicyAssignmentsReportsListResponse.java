package openapisdk.models.operations;



public class OsconfigProjectsLocationsInstancesOsPolicyAssignmentsReportsListResponse {
    public String contentType;
    public OsconfigProjectsLocationsInstancesOsPolicyAssignmentsReportsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListOsPolicyAssignmentReportsResponse listOSPolicyAssignmentReportsResponse;
    public OsconfigProjectsLocationsInstancesOsPolicyAssignmentsReportsListResponse withListOsPolicyAssignmentReportsResponse(openapisdk.models.shared.ListOsPolicyAssignmentReportsResponse listOSPolicyAssignmentReportsResponse) {
        this.listOSPolicyAssignmentReportsResponse = listOSPolicyAssignmentReportsResponse;
        return this;
    }
    public Long statusCode;
    public OsconfigProjectsLocationsInstancesOsPolicyAssignmentsReportsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}