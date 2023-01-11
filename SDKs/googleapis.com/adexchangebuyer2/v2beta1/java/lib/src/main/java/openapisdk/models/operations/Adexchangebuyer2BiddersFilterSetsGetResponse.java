package openapisdk.models.operations;



public class Adexchangebuyer2BiddersFilterSetsGetResponse {
    public String contentType;
    public Adexchangebuyer2BiddersFilterSetsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FilterSet filterSet;
    public Adexchangebuyer2BiddersFilterSetsGetResponse withFilterSet(openapisdk.models.shared.FilterSet filterSet) {
        this.filterSet = filterSet;
        return this;
    }
    public Long statusCode;
    public Adexchangebuyer2BiddersFilterSetsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}