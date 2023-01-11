package openapisdk.models.operations;



public class CloudkmsProjectsLocationsKeyRingsImportJobsCreateResponse {
    public String contentType;
    public CloudkmsProjectsLocationsKeyRingsImportJobsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ImportJob importJob;
    public CloudkmsProjectsLocationsKeyRingsImportJobsCreateResponse withImportJob(openapisdk.models.shared.ImportJob importJob) {
        this.importJob = importJob;
        return this;
    }
    public Long statusCode;
    public CloudkmsProjectsLocationsKeyRingsImportJobsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}