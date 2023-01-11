package openapisdk.models.operations;



public class GetSourceAccountsResponse {
    public String contentType;
    public GetSourceAccountsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListSourceAccountResponse listSourceAccountResponse;
    public GetSourceAccountsResponse withListSourceAccountResponse(openapisdk.models.shared.ListSourceAccountResponse listSourceAccountResponse) {
        this.listSourceAccountResponse = listSourceAccountResponse;
        return this;
    }
    public Long statusCode;
    public GetSourceAccountsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object inlineResponse401;
    public GetSourceAccountsResponse withInlineResponse401(Object inlineResponse401) {
        this.inlineResponse401 = inlineResponse401;
        return this;
    }
}