package openapisdk.models.operations;



public class CloudkmsProjectsLocationsKeyRingsImportJobsListResponse {
    public String contentType;
    public CloudkmsProjectsLocationsKeyRingsImportJobsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListImportJobsResponse listImportJobsResponse;
    public CloudkmsProjectsLocationsKeyRingsImportJobsListResponse withListImportJobsResponse(openapisdk.models.shared.ListImportJobsResponse listImportJobsResponse) {
        this.listImportJobsResponse = listImportJobsResponse;
        return this;
    }
    public Long statusCode;
    public CloudkmsProjectsLocationsKeyRingsImportJobsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}