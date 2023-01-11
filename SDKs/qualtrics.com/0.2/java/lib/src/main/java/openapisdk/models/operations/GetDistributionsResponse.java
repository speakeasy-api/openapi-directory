package openapisdk.models.operations;



public class GetDistributionsResponse {
    public String contentType;
    public GetDistributionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DistributionsResponse distributionsResponse;
    public GetDistributionsResponse withDistributionsResponse(openapisdk.models.shared.DistributionsResponse distributionsResponse) {
        this.distributionsResponse = distributionsResponse;
        return this;
    }
    public Long statusCode;
    public GetDistributionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}