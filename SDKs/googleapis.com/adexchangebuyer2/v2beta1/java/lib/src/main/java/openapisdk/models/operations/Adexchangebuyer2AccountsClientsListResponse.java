package openapisdk.models.operations;



public class Adexchangebuyer2AccountsClientsListResponse {
    public String contentType;
    public Adexchangebuyer2AccountsClientsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListClientsResponse listClientsResponse;
    public Adexchangebuyer2AccountsClientsListResponse withListClientsResponse(openapisdk.models.shared.ListClientsResponse listClientsResponse) {
        this.listClientsResponse = listClientsResponse;
        return this;
    }
    public Long statusCode;
    public Adexchangebuyer2AccountsClientsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}