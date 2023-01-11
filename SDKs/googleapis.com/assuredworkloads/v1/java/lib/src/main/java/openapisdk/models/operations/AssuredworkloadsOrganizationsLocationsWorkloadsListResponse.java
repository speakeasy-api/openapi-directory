package openapisdk.models.operations;



public class AssuredworkloadsOrganizationsLocationsWorkloadsListResponse {
    public String contentType;
    public AssuredworkloadsOrganizationsLocationsWorkloadsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudAssuredworkloadsV1ListWorkloadsResponse googleCloudAssuredworkloadsV1ListWorkloadsResponse;
    public AssuredworkloadsOrganizationsLocationsWorkloadsListResponse withGoogleCloudAssuredworkloadsV1ListWorkloadsResponse(openapisdk.models.shared.GoogleCloudAssuredworkloadsV1ListWorkloadsResponse googleCloudAssuredworkloadsV1ListWorkloadsResponse) {
        this.googleCloudAssuredworkloadsV1ListWorkloadsResponse = googleCloudAssuredworkloadsV1ListWorkloadsResponse;
        return this;
    }
    public Long statusCode;
    public AssuredworkloadsOrganizationsLocationsWorkloadsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}