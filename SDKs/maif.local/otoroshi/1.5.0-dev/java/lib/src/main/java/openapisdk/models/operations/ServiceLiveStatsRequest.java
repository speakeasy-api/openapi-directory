package openapisdk.models.operations;



public class ServiceLiveStatsRequest {
    public ServiceLiveStatsPathParams pathParams;
    public ServiceLiveStatsRequest withPathParams(ServiceLiveStatsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ServiceLiveStatsSecurity security;
    public ServiceLiveStatsRequest withSecurity(ServiceLiveStatsSecurity security) {
        this.security = security;
        return this;
    }
}