package openapisdk.models.operations;



public class AssuredworkloadsOrganizationsLocationsWorkloadsMutatePartnerPermissionsResponse {
    public String contentType;
    public AssuredworkloadsOrganizationsLocationsWorkloadsMutatePartnerPermissionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudAssuredworkloadsV1Workload googleCloudAssuredworkloadsV1Workload;
    public AssuredworkloadsOrganizationsLocationsWorkloadsMutatePartnerPermissionsResponse withGoogleCloudAssuredworkloadsV1Workload(openapisdk.models.shared.GoogleCloudAssuredworkloadsV1Workload googleCloudAssuredworkloadsV1Workload) {
        this.googleCloudAssuredworkloadsV1Workload = googleCloudAssuredworkloadsV1Workload;
        return this;
    }
    public Long statusCode;
    public AssuredworkloadsOrganizationsLocationsWorkloadsMutatePartnerPermissionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}