package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ChatV1ServiceUserUserChannel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public ChatV1ServiceUserUserChannel withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channel_sid")
    public String channelSid;
    public ChatV1ServiceUserUserChannel withChannelSid(String channelSid) {
        this.channelSid = channelSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_consumed_message_index")
    public Long lastConsumedMessageIndex;
    public ChatV1ServiceUserUserChannel withLastConsumedMessageIndex(Long lastConsumedMessageIndex) {
        this.lastConsumedMessageIndex = lastConsumedMessageIndex;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public java.util.Map<String, Object> links;
    public ChatV1ServiceUserUserChannel withLinks(java.util.Map<String, Object> links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("member_sid")
    public String memberSid;
    public ChatV1ServiceUserUserChannel withMemberSid(String memberSid) {
        this.memberSid = memberSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("service_sid")
    public String serviceSid;
    public ChatV1ServiceUserUserChannel withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public UserChannelEnumChannelStatusEnum status;
    public ChatV1ServiceUserUserChannel withStatus(UserChannelEnumChannelStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unread_messages_count")
    public Long unreadMessagesCount;
    public ChatV1ServiceUserUserChannel withUnreadMessagesCount(Long unreadMessagesCount) {
        this.unreadMessagesCount = unreadMessagesCount;
        return this;
    }
}