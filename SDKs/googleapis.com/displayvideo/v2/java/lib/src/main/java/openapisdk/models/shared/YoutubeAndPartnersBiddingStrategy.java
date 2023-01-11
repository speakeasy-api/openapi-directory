package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * YoutubeAndPartnersBiddingStrategy
 * Settings that control the bid strategy for YouTube and Partners resources.
**/
public class YoutubeAndPartnersBiddingStrategy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public YoutubeAndPartnersBiddingStrategyTypeEnum type;
    public YoutubeAndPartnersBiddingStrategy withType(YoutubeAndPartnersBiddingStrategyTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public YoutubeAndPartnersBiddingStrategy withValue(String value) {
        this.value = value;
        return this;
    }
}