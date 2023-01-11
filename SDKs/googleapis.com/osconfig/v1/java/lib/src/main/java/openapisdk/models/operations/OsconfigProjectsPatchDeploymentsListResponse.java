package openapisdk.models.operations;



public class OsconfigProjectsPatchDeploymentsListResponse {
    public String contentType;
    public OsconfigProjectsPatchDeploymentsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListPatchDeploymentsResponse listPatchDeploymentsResponse;
    public OsconfigProjectsPatchDeploymentsListResponse withListPatchDeploymentsResponse(openapisdk.models.shared.ListPatchDeploymentsResponse listPatchDeploymentsResponse) {
        this.listPatchDeploymentsResponse = listPatchDeploymentsResponse;
        return this;
    }
    public Long statusCode;
    public OsconfigProjectsPatchDeploymentsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}