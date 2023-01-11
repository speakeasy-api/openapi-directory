package openapisdk.models.operations;



public class PolicyanalyzerProjectsLocationsActivityTypesActivitiesQueryResponse {
    public String contentType;
    public PolicyanalyzerProjectsLocationsActivityTypesActivitiesQueryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudPolicyanalyzerV1beta1QueryActivityResponse googleCloudPolicyanalyzerV1beta1QueryActivityResponse;
    public PolicyanalyzerProjectsLocationsActivityTypesActivitiesQueryResponse withGoogleCloudPolicyanalyzerV1beta1QueryActivityResponse(openapisdk.models.shared.GoogleCloudPolicyanalyzerV1beta1QueryActivityResponse googleCloudPolicyanalyzerV1beta1QueryActivityResponse) {
        this.googleCloudPolicyanalyzerV1beta1QueryActivityResponse = googleCloudPolicyanalyzerV1beta1QueryActivityResponse;
        return this;
    }
    public Long statusCode;
    public PolicyanalyzerProjectsLocationsActivityTypesActivitiesQueryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}