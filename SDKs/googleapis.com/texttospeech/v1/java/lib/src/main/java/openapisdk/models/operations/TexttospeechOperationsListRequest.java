package openapisdk.models.operations;



public class TexttospeechOperationsListRequest {
    public TexttospeechOperationsListPathParams pathParams;
    public TexttospeechOperationsListRequest withPathParams(TexttospeechOperationsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public TexttospeechOperationsListQueryParams queryParams;
    public TexttospeechOperationsListRequest withQueryParams(TexttospeechOperationsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public TexttospeechOperationsListSecurity security;
    public TexttospeechOperationsListRequest withSecurity(TexttospeechOperationsListSecurity security) {
        this.security = security;
        return this;
    }
}