package openapisdk.models.operations;



public class OsconfigProjectsPatchJobsExecuteResponse {
    public String contentType;
    public OsconfigProjectsPatchJobsExecuteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PatchJob patchJob;
    public OsconfigProjectsPatchJobsExecuteResponse withPatchJob(openapisdk.models.shared.PatchJob patchJob) {
        this.patchJob = patchJob;
        return this;
    }
    public Long statusCode;
    public OsconfigProjectsPatchJobsExecuteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}