package openapisdk.models.operations;



public class PolicyanalyzerProjectsLocationsActivityTypesActivitiesQueryResponse {
    public String contentType;
    public PolicyanalyzerProjectsLocationsActivityTypesActivitiesQueryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudPolicyanalyzerV1QueryActivityResponse googleCloudPolicyanalyzerV1QueryActivityResponse;
    public PolicyanalyzerProjectsLocationsActivityTypesActivitiesQueryResponse withGoogleCloudPolicyanalyzerV1QueryActivityResponse(openapisdk.models.shared.GoogleCloudPolicyanalyzerV1QueryActivityResponse googleCloudPolicyanalyzerV1QueryActivityResponse) {
        this.googleCloudPolicyanalyzerV1QueryActivityResponse = googleCloudPolicyanalyzerV1QueryActivityResponse;
        return this;
    }
    public Long statusCode;
    public PolicyanalyzerProjectsLocationsActivityTypesActivitiesQueryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}