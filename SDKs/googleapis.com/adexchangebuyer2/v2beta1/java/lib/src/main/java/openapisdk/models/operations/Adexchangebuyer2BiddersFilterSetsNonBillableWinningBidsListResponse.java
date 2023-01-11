package openapisdk.models.operations;



public class Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListResponse {
    public String contentType;
    public Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListNonBillableWinningBidsResponse listNonBillableWinningBidsResponse;
    public Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListResponse withListNonBillableWinningBidsResponse(openapisdk.models.shared.ListNonBillableWinningBidsResponse listNonBillableWinningBidsResponse) {
        this.listNonBillableWinningBidsResponse = listNonBillableWinningBidsResponse;
        return this;
    }
    public Long statusCode;
    public Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}