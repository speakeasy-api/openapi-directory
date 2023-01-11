package openapisdk.models.operations;



public class Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListResponse {
    public String contentType;
    public Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListBidResponseErrorsResponse listBidResponseErrorsResponse;
    public Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListResponse withListBidResponseErrorsResponse(openapisdk.models.shared.ListBidResponseErrorsResponse listBidResponseErrorsResponse) {
        this.listBidResponseErrorsResponse = listBidResponseErrorsResponse;
        return this;
    }
    public Long statusCode;
    public Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}