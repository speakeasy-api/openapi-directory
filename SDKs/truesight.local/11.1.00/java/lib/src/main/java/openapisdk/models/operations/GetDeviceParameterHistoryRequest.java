package openapisdk.models.operations;



public class GetDeviceParameterHistoryRequest {
    public GetDeviceParameterHistoryPathParams pathParams;
    public GetDeviceParameterHistoryRequest withPathParams(GetDeviceParameterHistoryPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetDeviceParameterHistoryQueryParams queryParams;
    public GetDeviceParameterHistoryRequest withQueryParams(GetDeviceParameterHistoryQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}