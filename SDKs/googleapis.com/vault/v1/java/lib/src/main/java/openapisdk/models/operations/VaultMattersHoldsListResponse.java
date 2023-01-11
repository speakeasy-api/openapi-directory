package openapisdk.models.operations;



public class VaultMattersHoldsListResponse {
    public String contentType;
    public VaultMattersHoldsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListHoldsResponse listHoldsResponse;
    public VaultMattersHoldsListResponse withListHoldsResponse(openapisdk.models.shared.ListHoldsResponse listHoldsResponse) {
        this.listHoldsResponse = listHoldsResponse;
        return this;
    }
    public Long statusCode;
    public VaultMattersHoldsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}