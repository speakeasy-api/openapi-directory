package openapisdk.models.operations;



public class Adexchangebuyer2BiddersFilterSetsFilteredBidsListResponse {
    public String contentType;
    public Adexchangebuyer2BiddersFilterSetsFilteredBidsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListFilteredBidsResponse listFilteredBidsResponse;
    public Adexchangebuyer2BiddersFilterSetsFilteredBidsListResponse withListFilteredBidsResponse(openapisdk.models.shared.ListFilteredBidsResponse listFilteredBidsResponse) {
        this.listFilteredBidsResponse = listFilteredBidsResponse;
        return this;
    }
    public Long statusCode;
    public Adexchangebuyer2BiddersFilterSetsFilteredBidsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}