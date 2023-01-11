package openapisdk.models.operations;



public class GetIsochroneResponse {
    public String contentType;
    public GetIsochroneResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GhError ghError;
    public GetIsochroneResponse withGhError(openapisdk.models.shared.GhError ghError) {
        this.ghError = ghError;
        return this;
    }
    public openapisdk.models.shared.IsochroneResponse isochroneResponse;
    public GetIsochroneResponse withIsochroneResponse(openapisdk.models.shared.IsochroneResponse isochroneResponse) {
        this.isochroneResponse = isochroneResponse;
        return this;
    }
    public Long statusCode;
    public GetIsochroneResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}