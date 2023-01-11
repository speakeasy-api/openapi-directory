package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LiveChatMemberMilestoneChatDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memberLevelName")
    public String memberLevelName;
    public LiveChatMemberMilestoneChatDetails withMemberLevelName(String memberLevelName) {
        this.memberLevelName = memberLevelName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memberMonth")
    public Long memberMonth;
    public LiveChatMemberMilestoneChatDetails withMemberMonth(Long memberMonth) {
        this.memberMonth = memberMonth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userComment")
    public String userComment;
    public LiveChatMemberMilestoneChatDetails withUserComment(String userComment) {
        this.userComment = userComment;
        return this;
    }
}