package openapisdk.models.operations;



public class GetMatrixResponse {
    public String contentType;
    public GetMatrixResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GhError ghError;
    public GetMatrixResponse withGhError(openapisdk.models.shared.GhError ghError) {
        this.ghError = ghError;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetMatrixResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.MatrixResponse matrixResponse;
    public GetMatrixResponse withMatrixResponse(openapisdk.models.shared.MatrixResponse matrixResponse) {
        this.matrixResponse = matrixResponse;
        return this;
    }
    public Long statusCode;
    public GetMatrixResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}