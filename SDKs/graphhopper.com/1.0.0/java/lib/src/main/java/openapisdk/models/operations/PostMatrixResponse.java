package openapisdk.models.operations;



public class PostMatrixResponse {
    public String contentType;
    public PostMatrixResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GhError ghError;
    public PostMatrixResponse withGhError(openapisdk.models.shared.GhError ghError) {
        this.ghError = ghError;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostMatrixResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.MatrixResponse matrixResponse;
    public PostMatrixResponse withMatrixResponse(openapisdk.models.shared.MatrixResponse matrixResponse) {
        this.matrixResponse = matrixResponse;
        return this;
    }
    public Long statusCode;
    public PostMatrixResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}