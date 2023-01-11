package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SearchFreetextResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("searchType")
    public SearchFreetextResponseSearchTypeEnum searchType;
    public SearchFreetextResponse withSearchType(SearchFreetextResponseSearchTypeEnum searchType) {
        this.searchType = searchType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sortOrder")
    public Long sortOrder;
    public SearchFreetextResponse withSortOrder(Long sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
}