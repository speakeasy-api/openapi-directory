package openapisdk.models.operations;



public class OsconfigProjectsPatchJobsGetResponse {
    public String contentType;
    public OsconfigProjectsPatchJobsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PatchJob patchJob;
    public OsconfigProjectsPatchJobsGetResponse withPatchJob(openapisdk.models.shared.PatchJob patchJob) {
        this.patchJob = patchJob;
        return this;
    }
    public Long statusCode;
    public OsconfigProjectsPatchJobsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}