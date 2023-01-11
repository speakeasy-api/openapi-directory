package openapisdk.models.operations;



public class UpdateTrunksResponse {
    public String contentType;
    public UpdateTrunksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateTrunksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.RoutesV2Trunks routesV2Trunks;
    public UpdateTrunksResponse withRoutesV2Trunks(openapisdk.models.shared.RoutesV2Trunks routesV2Trunks) {
        this.routesV2Trunks = routesV2Trunks;
        return this;
    }
}