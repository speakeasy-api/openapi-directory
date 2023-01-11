package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CollectionResponseWithTotalDomainForwardPaging {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paging")
    public ForwardPaging paging;
    public CollectionResponseWithTotalDomainForwardPaging withPaging(ForwardPaging paging) {
        this.paging = paging;
        return this;
    }
    @JsonProperty("results")
    public Domain[] results;
    public CollectionResponseWithTotalDomainForwardPaging withResults(Domain[] results) {
        this.results = results;
        return this;
    }
    @JsonProperty("total")
    public Integer total;
    public CollectionResponseWithTotalDomainForwardPaging withTotal(Integer total) {
        this.total = total;
        return this;
    }
}