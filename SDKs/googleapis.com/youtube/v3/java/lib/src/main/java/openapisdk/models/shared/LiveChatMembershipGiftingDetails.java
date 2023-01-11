package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LiveChatMembershipGiftingDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("giftMembershipsCount")
    public Integer giftMembershipsCount;
    public LiveChatMembershipGiftingDetails withGiftMembershipsCount(Integer giftMembershipsCount) {
        this.giftMembershipsCount = giftMembershipsCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("giftMembershipsLevelName")
    public String giftMembershipsLevelName;
    public LiveChatMembershipGiftingDetails withGiftMembershipsLevelName(String giftMembershipsLevelName) {
        this.giftMembershipsLevelName = giftMembershipsLevelName;
        return this;
    }
}