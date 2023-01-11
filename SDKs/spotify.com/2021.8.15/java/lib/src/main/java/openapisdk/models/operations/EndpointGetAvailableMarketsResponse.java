package openapisdk.models.operations;



public class EndpointGetAvailableMarketsResponse {
    public String contentType;
    public EndpointGetAvailableMarketsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseObject errorResponseObject;
    public EndpointGetAvailableMarketsResponse withErrorResponseObject(openapisdk.models.shared.ErrorResponseObject errorResponseObject) {
        this.errorResponseObject = errorResponseObject;
        return this;
    }
    public openapisdk.models.shared.MarketsObject marketsObject;
    public EndpointGetAvailableMarketsResponse withMarketsObject(openapisdk.models.shared.MarketsObject marketsObject) {
        this.marketsObject = marketsObject;
        return this;
    }
    public Long statusCode;
    public EndpointGetAvailableMarketsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}