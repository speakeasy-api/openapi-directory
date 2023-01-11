package openapisdk.models.operations;



public class ResultsReadResponse {
    public String contentType;
    public ResultsReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ResultResponse resultResponse;
    public ResultsReadResponse withResultResponse(openapisdk.models.shared.ResultResponse resultResponse) {
        this.resultResponse = resultResponse;
        return this;
    }
    public Long statusCode;
    public ResultsReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}