package openapisdk.models.operations;



public class OsconfigProjectsPatchDeploymentsCreateResponse {
    public String contentType;
    public OsconfigProjectsPatchDeploymentsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PatchDeployment patchDeployment;
    public OsconfigProjectsPatchDeploymentsCreateResponse withPatchDeployment(openapisdk.models.shared.PatchDeployment patchDeployment) {
        this.patchDeployment = patchDeployment;
        return this;
    }
    public Long statusCode;
    public OsconfigProjectsPatchDeploymentsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}