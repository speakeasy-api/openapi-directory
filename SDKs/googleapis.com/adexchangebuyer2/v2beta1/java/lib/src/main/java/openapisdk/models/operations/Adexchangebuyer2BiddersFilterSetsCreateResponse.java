package openapisdk.models.operations;



public class Adexchangebuyer2BiddersFilterSetsCreateResponse {
    public String contentType;
    public Adexchangebuyer2BiddersFilterSetsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FilterSet filterSet;
    public Adexchangebuyer2BiddersFilterSetsCreateResponse withFilterSet(openapisdk.models.shared.FilterSet filterSet) {
        this.filterSet = filterSet;
        return this;
    }
    public Long statusCode;
    public Adexchangebuyer2BiddersFilterSetsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}