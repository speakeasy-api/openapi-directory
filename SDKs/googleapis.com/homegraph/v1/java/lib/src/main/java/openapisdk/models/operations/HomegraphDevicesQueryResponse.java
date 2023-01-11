package openapisdk.models.operations;



public class HomegraphDevicesQueryResponse {
    public String contentType;
    public HomegraphDevicesQueryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.QueryResponse queryResponse;
    public HomegraphDevicesQueryResponse withQueryResponse(openapisdk.models.shared.QueryResponse queryResponse) {
        this.queryResponse = queryResponse;
        return this;
    }
    public Long statusCode;
    public HomegraphDevicesQueryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}