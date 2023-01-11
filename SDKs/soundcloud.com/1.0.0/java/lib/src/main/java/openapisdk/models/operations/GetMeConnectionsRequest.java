package openapisdk.models.operations;



public class GetMeConnectionsRequest {
    public GetMeConnectionsQueryParams queryParams;
    public GetMeConnectionsRequest withQueryParams(GetMeConnectionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetMeConnectionsSecurity security;
    public GetMeConnectionsRequest withSecurity(GetMeConnectionsSecurity security) {
        this.security = security;
        return this;
    }
}