package openapisdk.models.operations;



public class TexttospeechVoicesListRequest {
    public TexttospeechVoicesListQueryParams queryParams;
    public TexttospeechVoicesListRequest withQueryParams(TexttospeechVoicesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public TexttospeechVoicesListSecurity security;
    public TexttospeechVoicesListRequest withSecurity(TexttospeechVoicesListSecurity security) {
        this.security = security;
        return this;
    }
}