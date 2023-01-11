package openapisdk.models.operations;



public class AssuredworkloadsOrganizationsLocationsWorkloadsPatchResponse {
    public String contentType;
    public AssuredworkloadsOrganizationsLocationsWorkloadsPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudAssuredworkloadsV1Workload googleCloudAssuredworkloadsV1Workload;
    public AssuredworkloadsOrganizationsLocationsWorkloadsPatchResponse withGoogleCloudAssuredworkloadsV1Workload(openapisdk.models.shared.GoogleCloudAssuredworkloadsV1Workload googleCloudAssuredworkloadsV1Workload) {
        this.googleCloudAssuredworkloadsV1Workload = googleCloudAssuredworkloadsV1Workload;
        return this;
    }
    public Long statusCode;
    public AssuredworkloadsOrganizationsLocationsWorkloadsPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}