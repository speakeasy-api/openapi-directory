package openapisdk.models.operations;



public class SpeechOperationsGetRequest {
    public SpeechOperationsGetPathParams pathParams;
    public SpeechOperationsGetRequest withPathParams(SpeechOperationsGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SpeechOperationsGetQueryParams queryParams;
    public SpeechOperationsGetRequest withQueryParams(SpeechOperationsGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public SpeechOperationsGetSecurity security;
    public SpeechOperationsGetRequest withSecurity(SpeechOperationsGetSecurity security) {
        this.security = security;
        return this;
    }
}