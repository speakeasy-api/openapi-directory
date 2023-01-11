package openapisdk.models.operations;



public class CalculateMatrixResponse {
    public String contentType;
    public CalculateMatrixResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GhError ghError;
    public CalculateMatrixResponse withGhError(openapisdk.models.shared.GhError ghError) {
        this.ghError = ghError;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public CalculateMatrixResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.JobId jobId;
    public CalculateMatrixResponse withJobId(openapisdk.models.shared.JobId jobId) {
        this.jobId = jobId;
        return this;
    }
    public Long statusCode;
    public CalculateMatrixResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}