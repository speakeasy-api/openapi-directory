package openapisdk.models.operations;



public class Adexchangebuyer2AccountsCreativesListResponse {
    public String contentType;
    public Adexchangebuyer2AccountsCreativesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListCreativesResponse listCreativesResponse;
    public Adexchangebuyer2AccountsCreativesListResponse withListCreativesResponse(openapisdk.models.shared.ListCreativesResponse listCreativesResponse) {
        this.listCreativesResponse = listCreativesResponse;
        return this;
    }
    public Long statusCode;
    public Adexchangebuyer2AccountsCreativesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}