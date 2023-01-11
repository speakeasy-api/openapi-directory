package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ChatV2ServiceUserUserChannel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public ChatV2ServiceUserUserChannel withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channel_sid")
    public String channelSid;
    public ChatV2ServiceUserUserChannel withChannelSid(String channelSid) {
        this.channelSid = channelSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_consumed_message_index")
    public Long lastConsumedMessageIndex;
    public ChatV2ServiceUserUserChannel withLastConsumedMessageIndex(Long lastConsumedMessageIndex) {
        this.lastConsumedMessageIndex = lastConsumedMessageIndex;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public java.util.Map<String, Object> links;
    public ChatV2ServiceUserUserChannel withLinks(java.util.Map<String, Object> links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("member_sid")
    public String memberSid;
    public ChatV2ServiceUserUserChannel withMemberSid(String memberSid) {
        this.memberSid = memberSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notification_level")
    public UserChannelEnumNotificationLevelEnum notificationLevel;
    public ChatV2ServiceUserUserChannel withNotificationLevel(UserChannelEnumNotificationLevelEnum notificationLevel) {
        this.notificationLevel = notificationLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("service_sid")
    public String serviceSid;
    public ChatV2ServiceUserUserChannel withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public UserChannelEnumChannelStatusEnum status;
    public ChatV2ServiceUserUserChannel withStatus(UserChannelEnumChannelStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unread_messages_count")
    public Long unreadMessagesCount;
    public ChatV2ServiceUserUserChannel withUnreadMessagesCount(Long unreadMessagesCount) {
        this.unreadMessagesCount = unreadMessagesCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public ChatV2ServiceUserUserChannel withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_sid")
    public String userSid;
    public ChatV2ServiceUserUserChannel withUserSid(String userSid) {
        this.userSid = userSid;
        return this;
    }
}