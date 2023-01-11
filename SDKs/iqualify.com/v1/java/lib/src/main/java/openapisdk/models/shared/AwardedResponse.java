package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AwardedResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("awarded")
    public Boolean awarded;
    public AwardedResponse withAwarded(Boolean awarded) {
        this.awarded = awarded;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("badgeId")
    public String badgeId;
    public AwardedResponse withBadgeId(String badgeId) {
        this.badgeId = badgeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("badgeUrl")
    public String badgeUrl;
    public AwardedResponse withBadgeUrl(String badgeUrl) {
        this.badgeUrl = badgeUrl;
        return this;
    }
}