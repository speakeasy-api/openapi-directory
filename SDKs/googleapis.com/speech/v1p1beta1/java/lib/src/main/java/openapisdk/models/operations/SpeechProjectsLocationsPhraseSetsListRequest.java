package openapisdk.models.operations;



public class SpeechProjectsLocationsPhraseSetsListRequest {
    public SpeechProjectsLocationsPhraseSetsListPathParams pathParams;
    public SpeechProjectsLocationsPhraseSetsListRequest withPathParams(SpeechProjectsLocationsPhraseSetsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SpeechProjectsLocationsPhraseSetsListQueryParams queryParams;
    public SpeechProjectsLocationsPhraseSetsListRequest withQueryParams(SpeechProjectsLocationsPhraseSetsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public SpeechProjectsLocationsPhraseSetsListSecurity security;
    public SpeechProjectsLocationsPhraseSetsListRequest withSecurity(SpeechProjectsLocationsPhraseSetsListSecurity security) {
        this.security = security;
        return this;
    }
}