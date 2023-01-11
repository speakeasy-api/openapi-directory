package openapisdk.models.operations;



public class GetEventDistrictPointsRequest {
    public GetEventDistrictPointsPathParams pathParams;
    public GetEventDistrictPointsRequest withPathParams(GetEventDistrictPointsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetEventDistrictPointsHeaders headers;
    public GetEventDistrictPointsRequest withHeaders(GetEventDistrictPointsHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetEventDistrictPointsSecurity security;
    public GetEventDistrictPointsRequest withSecurity(GetEventDistrictPointsSecurity security) {
        this.security = security;
        return this;
    }
}