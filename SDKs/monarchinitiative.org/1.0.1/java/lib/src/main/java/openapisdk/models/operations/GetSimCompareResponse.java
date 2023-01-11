package openapisdk.models.operations;



public class GetSimCompareResponse {
    public String contentType;
    public GetSimCompareResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SimResult simResult;
    public GetSimCompareResponse withSimResult(openapisdk.models.shared.SimResult simResult) {
        this.simResult = simResult;
        return this;
    }
    public Long statusCode;
    public GetSimCompareResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}