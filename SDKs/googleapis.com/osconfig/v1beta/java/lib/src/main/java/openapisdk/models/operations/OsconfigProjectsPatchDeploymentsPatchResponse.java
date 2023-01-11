package openapisdk.models.operations;



public class OsconfigProjectsPatchDeploymentsPatchResponse {
    public String contentType;
    public OsconfigProjectsPatchDeploymentsPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PatchDeployment patchDeployment;
    public OsconfigProjectsPatchDeploymentsPatchResponse withPatchDeployment(openapisdk.models.shared.PatchDeployment patchDeployment) {
        this.patchDeployment = patchDeployment;
        return this;
    }
    public Long statusCode;
    public OsconfigProjectsPatchDeploymentsPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}