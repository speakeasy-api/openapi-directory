package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreativeServingRestrictionsContexts {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auctionType")
    public String[] auctionType;
    public CreativeServingRestrictionsContexts withAuctionType(String[] auctionType) {
        this.auctionType = auctionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contextType")
    public String contextType;
    public CreativeServingRestrictionsContexts withContextType(String contextType) {
        this.contextType = contextType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("geoCriteriaId")
    public Integer[] geoCriteriaId;
    public CreativeServingRestrictionsContexts withGeoCriteriaId(Integer[] geoCriteriaId) {
        this.geoCriteriaId = geoCriteriaId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("platform")
    public String[] platform;
    public CreativeServingRestrictionsContexts withPlatform(String[] platform) {
        this.platform = platform;
        return this;
    }
}