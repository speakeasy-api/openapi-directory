package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class UpdateUserConversationUpdateUserConversationRequest {
    @SpeakeasyMetadata("form:name=LastReadMessageIndex")
    public Long lastReadMessageIndex;
    public UpdateUserConversationUpdateUserConversationRequest withLastReadMessageIndex(Long lastReadMessageIndex) {
        this.lastReadMessageIndex = lastReadMessageIndex;
        return this;
    }
    @SpeakeasyMetadata("form:name=LastReadTimestamp")
    public OffsetDateTime lastReadTimestamp;
    public UpdateUserConversationUpdateUserConversationRequest withLastReadTimestamp(OffsetDateTime lastReadTimestamp) {
        this.lastReadTimestamp = lastReadTimestamp;
        return this;
    }
    @SpeakeasyMetadata("form:name=NotificationLevel")
    public openapisdk.models.shared.UserConversationEnumNotificationLevelEnum notificationLevel;
    public UpdateUserConversationUpdateUserConversationRequest withNotificationLevel(openapisdk.models.shared.UserConversationEnumNotificationLevelEnum notificationLevel) {
        this.notificationLevel = notificationLevel;
        return this;
    }
}