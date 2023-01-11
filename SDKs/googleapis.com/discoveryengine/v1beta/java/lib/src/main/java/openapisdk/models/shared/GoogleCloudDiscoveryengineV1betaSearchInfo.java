package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDiscoveryengineV1betaSearchInfo
 * Detailed search information.
**/
public class GoogleCloudDiscoveryengineV1betaSearchInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offset")
    public Integer offset;
    public GoogleCloudDiscoveryengineV1betaSearchInfo withOffset(Integer offset) {
        this.offset = offset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderBy")
    public String orderBy;
    public GoogleCloudDiscoveryengineV1betaSearchInfo withOrderBy(String orderBy) {
        this.orderBy = orderBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("searchQuery")
    public String searchQuery;
    public GoogleCloudDiscoveryengineV1betaSearchInfo withSearchQuery(String searchQuery) {
        this.searchQuery = searchQuery;
        return this;
    }
}