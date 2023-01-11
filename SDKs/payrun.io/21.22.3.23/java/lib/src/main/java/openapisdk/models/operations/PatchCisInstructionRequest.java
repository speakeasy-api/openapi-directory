package openapisdk.models.operations;



public class PatchCisInstructionRequest {
    public PatchCisInstructionPathParams pathParams;
    public PatchCisInstructionRequest withPathParams(PatchCisInstructionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PatchCisInstructionHeaders headers;
    public PatchCisInstructionRequest withHeaders(PatchCisInstructionHeaders headers) {
        this.headers = headers;
        return this;
    }
}