package openapisdk.models.operations;



public class GetSimSearchResponse {
    public String contentType;
    public GetSimSearchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SimResult simResult;
    public GetSimSearchResponse withSimResult(openapisdk.models.shared.SimResult simResult) {
        this.simResult = simResult;
        return this;
    }
    public Long statusCode;
    public GetSimSearchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}