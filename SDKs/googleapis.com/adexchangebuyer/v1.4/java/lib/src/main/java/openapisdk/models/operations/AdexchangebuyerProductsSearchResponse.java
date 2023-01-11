package openapisdk.models.operations;



public class AdexchangebuyerProductsSearchResponse {
    public String contentType;
    public AdexchangebuyerProductsSearchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetOffersResponse getOffersResponse;
    public AdexchangebuyerProductsSearchResponse withGetOffersResponse(openapisdk.models.shared.GetOffersResponse getOffersResponse) {
        this.getOffersResponse = getOffersResponse;
        return this;
    }
    public Long statusCode;
    public AdexchangebuyerProductsSearchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}