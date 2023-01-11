package openapisdk.models.operations;



public class SpeechOperationsListRequest {
    public SpeechOperationsListQueryParams queryParams;
    public SpeechOperationsListRequest withQueryParams(SpeechOperationsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public SpeechOperationsListSecurity security;
    public SpeechOperationsListRequest withSecurity(SpeechOperationsListSecurity security) {
        this.security = security;
        return this;
    }
}