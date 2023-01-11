package openapisdk.models.operations;



public class SpeechProjectsLocationsPhraseSetsGetRequest {
    public SpeechProjectsLocationsPhraseSetsGetPathParams pathParams;
    public SpeechProjectsLocationsPhraseSetsGetRequest withPathParams(SpeechProjectsLocationsPhraseSetsGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SpeechProjectsLocationsPhraseSetsGetQueryParams queryParams;
    public SpeechProjectsLocationsPhraseSetsGetRequest withQueryParams(SpeechProjectsLocationsPhraseSetsGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public SpeechProjectsLocationsPhraseSetsGetSecurity security;
    public SpeechProjectsLocationsPhraseSetsGetRequest withSecurity(SpeechProjectsLocationsPhraseSetsGetSecurity security) {
        this.security = security;
        return this;
    }
}