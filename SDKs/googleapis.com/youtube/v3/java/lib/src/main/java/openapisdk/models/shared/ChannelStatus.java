package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ChannelStatus
 * JSON template for the status part of a channel.
**/
public class ChannelStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isLinked")
    public Boolean isLinked;
    public ChannelStatus withIsLinked(Boolean isLinked) {
        this.isLinked = isLinked;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("longUploadsStatus")
    public ChannelStatusLongUploadsStatusEnum longUploadsStatus;
    public ChannelStatus withLongUploadsStatus(ChannelStatusLongUploadsStatusEnum longUploadsStatus) {
        this.longUploadsStatus = longUploadsStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("madeForKids")
    public Boolean madeForKids;
    public ChannelStatus withMadeForKids(Boolean madeForKids) {
        this.madeForKids = madeForKids;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privacyStatus")
    public ChannelStatusPrivacyStatusEnum privacyStatus;
    public ChannelStatus withPrivacyStatus(ChannelStatusPrivacyStatusEnum privacyStatus) {
        this.privacyStatus = privacyStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selfDeclaredMadeForKids")
    public Boolean selfDeclaredMadeForKids;
    public ChannelStatus withSelfDeclaredMadeForKids(Boolean selfDeclaredMadeForKids) {
        this.selfDeclaredMadeForKids = selfDeclaredMadeForKids;
        return this;
    }
}