package openapisdk.models.operations;



public class Adexchangebuyer2BiddersFilterSetsListResponse {
    public String contentType;
    public Adexchangebuyer2BiddersFilterSetsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListFilterSetsResponse listFilterSetsResponse;
    public Adexchangebuyer2BiddersFilterSetsListResponse withListFilterSetsResponse(openapisdk.models.shared.ListFilterSetsResponse listFilterSetsResponse) {
        this.listFilterSetsResponse = listFilterSetsResponse;
        return this;
    }
    public Long statusCode;
    public Adexchangebuyer2BiddersFilterSetsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}