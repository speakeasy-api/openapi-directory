package openapisdk.models.operations;



public class AssuredworkloadsOrganizationsLocationsWorkloadsViolationsGetResponse {
    public String contentType;
    public AssuredworkloadsOrganizationsLocationsWorkloadsViolationsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudAssuredworkloadsV1Violation googleCloudAssuredworkloadsV1Violation;
    public AssuredworkloadsOrganizationsLocationsWorkloadsViolationsGetResponse withGoogleCloudAssuredworkloadsV1Violation(openapisdk.models.shared.GoogleCloudAssuredworkloadsV1Violation googleCloudAssuredworkloadsV1Violation) {
        this.googleCloudAssuredworkloadsV1Violation = googleCloudAssuredworkloadsV1Violation;
        return this;
    }
    public Long statusCode;
    public AssuredworkloadsOrganizationsLocationsWorkloadsViolationsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}