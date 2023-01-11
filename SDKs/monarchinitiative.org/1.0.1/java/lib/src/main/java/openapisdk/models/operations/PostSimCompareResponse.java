package openapisdk.models.operations;



public class PostSimCompareResponse {
    public String contentType;
    public PostSimCompareResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SimResult simResult;
    public PostSimCompareResponse withSimResult(openapisdk.models.shared.SimResult simResult) {
        this.simResult = simResult;
        return this;
    }
    public Long statusCode;
    public PostSimCompareResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}