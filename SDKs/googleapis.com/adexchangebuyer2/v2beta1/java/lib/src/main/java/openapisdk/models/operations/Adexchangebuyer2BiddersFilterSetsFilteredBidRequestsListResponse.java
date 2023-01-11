package openapisdk.models.operations;



public class Adexchangebuyer2BiddersFilterSetsFilteredBidRequestsListResponse {
    public String contentType;
    public Adexchangebuyer2BiddersFilterSetsFilteredBidRequestsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListFilteredBidRequestsResponse listFilteredBidRequestsResponse;
    public Adexchangebuyer2BiddersFilterSetsFilteredBidRequestsListResponse withListFilteredBidRequestsResponse(openapisdk.models.shared.ListFilteredBidRequestsResponse listFilteredBidRequestsResponse) {
        this.listFilteredBidRequestsResponse = listFilteredBidRequestsResponse;
        return this;
    }
    public Long statusCode;
    public Adexchangebuyer2BiddersFilterSetsFilteredBidRequestsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}