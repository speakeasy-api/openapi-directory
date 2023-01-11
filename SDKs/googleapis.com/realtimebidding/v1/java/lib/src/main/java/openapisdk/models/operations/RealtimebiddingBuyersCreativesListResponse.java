package openapisdk.models.operations;



public class RealtimebiddingBuyersCreativesListResponse {
    public String contentType;
    public RealtimebiddingBuyersCreativesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListCreativesResponse listCreativesResponse;
    public RealtimebiddingBuyersCreativesListResponse withListCreativesResponse(openapisdk.models.shared.ListCreativesResponse listCreativesResponse) {
        this.listCreativesResponse = listCreativesResponse;
        return this;
    }
    public Long statusCode;
    public RealtimebiddingBuyersCreativesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}