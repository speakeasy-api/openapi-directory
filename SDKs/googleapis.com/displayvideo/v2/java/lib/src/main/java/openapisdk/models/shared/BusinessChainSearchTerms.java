package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BusinessChainSearchTerms
 * Search terms for Business Chain targeting options. At least one of the field should be populated.
**/
public class BusinessChainSearchTerms {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("businessChainQuery")
    public String businessChainQuery;
    public BusinessChainSearchTerms withBusinessChainQuery(String businessChainQuery) {
        this.businessChainQuery = businessChainQuery;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regionQuery")
    public String regionQuery;
    public BusinessChainSearchTerms withRegionQuery(String regionQuery) {
        this.regionQuery = regionQuery;
        return this;
    }
}