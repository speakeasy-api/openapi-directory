package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LiveChatNewSponsorDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isUpgrade")
    public Boolean isUpgrade;
    public LiveChatNewSponsorDetails withIsUpgrade(Boolean isUpgrade) {
        this.isUpgrade = isUpgrade;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memberLevelName")
    public String memberLevelName;
    public LiveChatNewSponsorDetails withMemberLevelName(String memberLevelName) {
        this.memberLevelName = memberLevelName;
        return this;
    }
}