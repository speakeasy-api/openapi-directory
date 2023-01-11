package openapisdk.models.operations;



public class GetMatrixSolutionResponse {
    public String contentType;
    public GetMatrixSolutionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GhError ghError;
    public GetMatrixSolutionResponse withGhError(openapisdk.models.shared.GhError ghError) {
        this.ghError = ghError;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetMatrixSolutionResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.MatrixResponse matrixResponse;
    public GetMatrixSolutionResponse withMatrixResponse(openapisdk.models.shared.MatrixResponse matrixResponse) {
        this.matrixResponse = matrixResponse;
        return this;
    }
    public Long statusCode;
    public GetMatrixSolutionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}