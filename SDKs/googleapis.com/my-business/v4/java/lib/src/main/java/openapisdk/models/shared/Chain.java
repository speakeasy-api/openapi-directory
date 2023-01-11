package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Chain
 * A chain is a brand that your business's locations can be affiliated with.
**/
public class Chain {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chainNames")
    public ChainName[] chainNames;
    public Chain withChainNames(ChainName[] chainNames) {
        this.chainNames = chainNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locationCount")
    public Integer locationCount;
    public Chain withLocationCount(Integer locationCount) {
        this.locationCount = locationCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Chain withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("websites")
    public ChainUrl[] websites;
    public Chain withWebsites(ChainUrl[] websites) {
        this.websites = websites;
        return this;
    }
}