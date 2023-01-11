package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NegativeKeywordList
 * A list of negative keywords used for targeting.
**/
public class NegativeKeywordList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("advertiserId")
    public String advertiserId;
    public NegativeKeywordList withAdvertiserId(String advertiserId) {
        this.advertiserId = advertiserId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public NegativeKeywordList withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public NegativeKeywordList withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("negativeKeywordListId")
    public String negativeKeywordListId;
    public NegativeKeywordList withNegativeKeywordListId(String negativeKeywordListId) {
        this.negativeKeywordListId = negativeKeywordListId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetedLineItemCount")
    public String targetedLineItemCount;
    public NegativeKeywordList withTargetedLineItemCount(String targetedLineItemCount) {
        this.targetedLineItemCount = targetedLineItemCount;
        return this;
    }
}