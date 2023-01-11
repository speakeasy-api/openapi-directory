package openapisdk.models.operations;



public class OsconfigProjectsPatchDeploymentsPauseResponse {
    public String contentType;
    public OsconfigProjectsPatchDeploymentsPauseResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PatchDeployment patchDeployment;
    public OsconfigProjectsPatchDeploymentsPauseResponse withPatchDeployment(openapisdk.models.shared.PatchDeployment patchDeployment) {
        this.patchDeployment = patchDeployment;
        return this;
    }
    public Long statusCode;
    public OsconfigProjectsPatchDeploymentsPauseResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}