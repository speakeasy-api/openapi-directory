package openapisdk.models.operations;



public class Adexchangebuyer2BiddersFilterSetsLosingBidsListResponse {
    public String contentType;
    public Adexchangebuyer2BiddersFilterSetsLosingBidsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListLosingBidsResponse listLosingBidsResponse;
    public Adexchangebuyer2BiddersFilterSetsLosingBidsListResponse withListLosingBidsResponse(openapisdk.models.shared.ListLosingBidsResponse listLosingBidsResponse) {
        this.listLosingBidsResponse = listLosingBidsResponse;
        return this;
    }
    public Long statusCode;
    public Adexchangebuyer2BiddersFilterSetsLosingBidsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}