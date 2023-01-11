package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddressSearchResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hits")
    public Address[] hits;
    public AddressSearchResult withHits(Address[] hits) {
        this.hits = hits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("limit")
    public Integer limit;
    public AddressSearchResult withLimit(Integer limit) {
        this.limit = limit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page")
    public Integer page;
    public AddressSearchResult withPage(Integer page) {
        this.page = page;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total")
    public Integer total;
    public AddressSearchResult withTotal(Integer total) {
        this.total = total;
        return this;
    }
}