package openapisdk.models.operations;



public class FetchTrunksResponse {
    public String contentType;
    public FetchTrunksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchTrunksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.RoutesV2Trunks routesV2Trunks;
    public FetchTrunksResponse withRoutesV2Trunks(openapisdk.models.shared.RoutesV2Trunks routesV2Trunks) {
        this.routesV2Trunks = routesV2Trunks;
        return this;
    }
}