package openapisdk.models.operations;



public class PolicysimulatorProjectsLocationsReplaysResultsListResponse {
    public String contentType;
    public PolicysimulatorProjectsLocationsReplaysResultsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudPolicysimulatorV1ListReplayResultsResponse googleCloudPolicysimulatorV1ListReplayResultsResponse;
    public PolicysimulatorProjectsLocationsReplaysResultsListResponse withGoogleCloudPolicysimulatorV1ListReplayResultsResponse(openapisdk.models.shared.GoogleCloudPolicysimulatorV1ListReplayResultsResponse googleCloudPolicysimulatorV1ListReplayResultsResponse) {
        this.googleCloudPolicysimulatorV1ListReplayResultsResponse = googleCloudPolicysimulatorV1ListReplayResultsResponse;
        return this;
    }
    public Long statusCode;
    public PolicysimulatorProjectsLocationsReplaysResultsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}