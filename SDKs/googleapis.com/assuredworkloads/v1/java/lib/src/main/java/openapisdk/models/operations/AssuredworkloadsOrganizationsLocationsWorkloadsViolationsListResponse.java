package openapisdk.models.operations;



public class AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListResponse {
    public String contentType;
    public AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudAssuredworkloadsV1ListViolationsResponse googleCloudAssuredworkloadsV1ListViolationsResponse;
    public AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListResponse withGoogleCloudAssuredworkloadsV1ListViolationsResponse(openapisdk.models.shared.GoogleCloudAssuredworkloadsV1ListViolationsResponse googleCloudAssuredworkloadsV1ListViolationsResponse) {
        this.googleCloudAssuredworkloadsV1ListViolationsResponse = googleCloudAssuredworkloadsV1ListViolationsResponse;
        return this;
    }
    public Long statusCode;
    public AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}