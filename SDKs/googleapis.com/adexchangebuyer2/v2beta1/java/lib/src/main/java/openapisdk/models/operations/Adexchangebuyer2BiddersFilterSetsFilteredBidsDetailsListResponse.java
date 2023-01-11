package openapisdk.models.operations;



public class Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListResponse {
    public String contentType;
    public Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListCreativeStatusBreakdownByDetailResponse listCreativeStatusBreakdownByDetailResponse;
    public Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListResponse withListCreativeStatusBreakdownByDetailResponse(openapisdk.models.shared.ListCreativeStatusBreakdownByDetailResponse listCreativeStatusBreakdownByDetailResponse) {
        this.listCreativeStatusBreakdownByDetailResponse = listCreativeStatusBreakdownByDetailResponse;
        return this;
    }
    public Long statusCode;
    public Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}