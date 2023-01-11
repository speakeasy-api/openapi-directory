package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ChannelAuditDetails
 * The auditDetails object encapsulates channel data that is relevant for YouTube Partners during the audit process.
**/
public class ChannelAuditDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("communityGuidelinesGoodStanding")
    public Boolean communityGuidelinesGoodStanding;
    public ChannelAuditDetails withCommunityGuidelinesGoodStanding(Boolean communityGuidelinesGoodStanding) {
        this.communityGuidelinesGoodStanding = communityGuidelinesGoodStanding;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentIdClaimsGoodStanding")
    public Boolean contentIdClaimsGoodStanding;
    public ChannelAuditDetails withContentIdClaimsGoodStanding(Boolean contentIdClaimsGoodStanding) {
        this.contentIdClaimsGoodStanding = contentIdClaimsGoodStanding;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("copyrightStrikesGoodStanding")
    public Boolean copyrightStrikesGoodStanding;
    public ChannelAuditDetails withCopyrightStrikesGoodStanding(Boolean copyrightStrikesGoodStanding) {
        this.copyrightStrikesGoodStanding = copyrightStrikesGoodStanding;
        return this;
    }
}