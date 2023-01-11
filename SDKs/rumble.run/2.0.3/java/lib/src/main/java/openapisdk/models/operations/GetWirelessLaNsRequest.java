package openapisdk.models.operations;



public class GetWirelessLaNsRequest {
    public GetWirelessLaNsQueryParams queryParams;
    public GetWirelessLaNsRequest withQueryParams(GetWirelessLaNsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetWirelessLaNsSecurity security;
    public GetWirelessLaNsRequest withSecurity(GetWirelessLaNsSecurity security) {
        this.security = security;
        return this;
    }
}