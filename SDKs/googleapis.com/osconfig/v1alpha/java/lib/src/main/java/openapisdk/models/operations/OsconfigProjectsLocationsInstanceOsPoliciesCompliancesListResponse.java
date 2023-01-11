package openapisdk.models.operations;



public class OsconfigProjectsLocationsInstanceOsPoliciesCompliancesListResponse {
    public String contentType;
    public OsconfigProjectsLocationsInstanceOsPoliciesCompliancesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListInstanceOsPoliciesCompliancesResponse listInstanceOSPoliciesCompliancesResponse;
    public OsconfigProjectsLocationsInstanceOsPoliciesCompliancesListResponse withListInstanceOsPoliciesCompliancesResponse(openapisdk.models.shared.ListInstanceOsPoliciesCompliancesResponse listInstanceOSPoliciesCompliancesResponse) {
        this.listInstanceOSPoliciesCompliancesResponse = listInstanceOSPoliciesCompliancesResponse;
        return this;
    }
    public Long statusCode;
    public OsconfigProjectsLocationsInstanceOsPoliciesCompliancesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}