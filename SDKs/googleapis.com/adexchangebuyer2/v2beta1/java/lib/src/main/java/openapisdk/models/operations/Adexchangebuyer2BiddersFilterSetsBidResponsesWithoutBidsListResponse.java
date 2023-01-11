package openapisdk.models.operations;



public class Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListResponse {
    public String contentType;
    public Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListBidResponsesWithoutBidsResponse listBidResponsesWithoutBidsResponse;
    public Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListResponse withListBidResponsesWithoutBidsResponse(openapisdk.models.shared.ListBidResponsesWithoutBidsResponse listBidResponsesWithoutBidsResponse) {
        this.listBidResponsesWithoutBidsResponse = listBidResponsesWithoutBidsResponse;
        return this;
    }
    public Long statusCode;
    public Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}