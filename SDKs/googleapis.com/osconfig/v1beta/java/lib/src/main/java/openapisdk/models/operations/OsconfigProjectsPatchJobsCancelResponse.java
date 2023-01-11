package openapisdk.models.operations;



public class OsconfigProjectsPatchJobsCancelResponse {
    public String contentType;
    public OsconfigProjectsPatchJobsCancelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PatchJob patchJob;
    public OsconfigProjectsPatchJobsCancelResponse withPatchJob(openapisdk.models.shared.PatchJob patchJob) {
        this.patchJob = patchJob;
        return this;
    }
    public Long statusCode;
    public OsconfigProjectsPatchJobsCancelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}