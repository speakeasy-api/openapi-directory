package openapisdk.models.operations;



public class SpeechProjectsLocationsOperationsListRequest {
    public SpeechProjectsLocationsOperationsListPathParams pathParams;
    public SpeechProjectsLocationsOperationsListRequest withPathParams(SpeechProjectsLocationsOperationsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SpeechProjectsLocationsOperationsListQueryParams queryParams;
    public SpeechProjectsLocationsOperationsListRequest withQueryParams(SpeechProjectsLocationsOperationsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public SpeechProjectsLocationsOperationsListSecurity security;
    public SpeechProjectsLocationsOperationsListRequest withSecurity(SpeechProjectsLocationsOperationsListSecurity security) {
        this.security = security;
        return this;
    }
}