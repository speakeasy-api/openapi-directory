package openapisdk.models.operations;



public class Adexchangebuyer2BiddersFilterSetsFilteredBidsCreativesListResponse {
    public String contentType;
    public Adexchangebuyer2BiddersFilterSetsFilteredBidsCreativesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListCreativeStatusBreakdownByCreativeResponse listCreativeStatusBreakdownByCreativeResponse;
    public Adexchangebuyer2BiddersFilterSetsFilteredBidsCreativesListResponse withListCreativeStatusBreakdownByCreativeResponse(openapisdk.models.shared.ListCreativeStatusBreakdownByCreativeResponse listCreativeStatusBreakdownByCreativeResponse) {
        this.listCreativeStatusBreakdownByCreativeResponse = listCreativeStatusBreakdownByCreativeResponse;
        return this;
    }
    public Long statusCode;
    public Adexchangebuyer2BiddersFilterSetsFilteredBidsCreativesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}