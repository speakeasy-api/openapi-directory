package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class HomegraphDevicesQueryRequest {
    public HomegraphDevicesQueryQueryParams queryParams;
    public HomegraphDevicesQueryRequest withQueryParams(HomegraphDevicesQueryQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.QueryRequest request;
    public HomegraphDevicesQueryRequest withRequest(openapisdk.models.shared.QueryRequest request) {
        this.request = request;
        return this;
    }
    public HomegraphDevicesQuerySecurity security;
    public HomegraphDevicesQueryRequest withSecurity(HomegraphDevicesQuerySecurity security) {
        this.security = security;
        return this;
    }
}