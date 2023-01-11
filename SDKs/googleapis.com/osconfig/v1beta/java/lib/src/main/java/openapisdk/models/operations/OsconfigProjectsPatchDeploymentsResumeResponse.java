package openapisdk.models.operations;



public class OsconfigProjectsPatchDeploymentsResumeResponse {
    public String contentType;
    public OsconfigProjectsPatchDeploymentsResumeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PatchDeployment patchDeployment;
    public OsconfigProjectsPatchDeploymentsResumeResponse withPatchDeployment(openapisdk.models.shared.PatchDeployment patchDeployment) {
        this.patchDeployment = patchDeployment;
        return this;
    }
    public Long statusCode;
    public OsconfigProjectsPatchDeploymentsResumeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}