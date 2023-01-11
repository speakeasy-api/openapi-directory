package openapisdk.models.operations;



public class Adexchangebuyer2AccountsClientsUpdateResponse {
    public openapisdk.models.shared.Client client;
    public Adexchangebuyer2AccountsClientsUpdateResponse withClient(openapisdk.models.shared.Client client) {
        this.client = client;
        return this;
    }
    public String contentType;
    public Adexchangebuyer2AccountsClientsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public Adexchangebuyer2AccountsClientsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}