package openapisdk.models.operations;



public class CloudkmsProjectsLocationsKeyRingsImportJobsGetResponse {
    public String contentType;
    public CloudkmsProjectsLocationsKeyRingsImportJobsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ImportJob importJob;
    public CloudkmsProjectsLocationsKeyRingsImportJobsGetResponse withImportJob(openapisdk.models.shared.ImportJob importJob) {
        this.importJob = importJob;
        return this;
    }
    public Long statusCode;
    public CloudkmsProjectsLocationsKeyRingsImportJobsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}