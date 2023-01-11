package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDiscoveryengineV1alphaSearchInfo
 * Detailed search information.
**/
public class GoogleCloudDiscoveryengineV1alphaSearchInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offset")
    public Integer offset;
    public GoogleCloudDiscoveryengineV1alphaSearchInfo withOffset(Integer offset) {
        this.offset = offset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderBy")
    public String orderBy;
    public GoogleCloudDiscoveryengineV1alphaSearchInfo withOrderBy(String orderBy) {
        this.orderBy = orderBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("searchQuery")
    public String searchQuery;
    public GoogleCloudDiscoveryengineV1alphaSearchInfo withSearchQuery(String searchQuery) {
        this.searchQuery = searchQuery;
        return this;
    }
}