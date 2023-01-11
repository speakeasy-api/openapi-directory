package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class UpdateServiceUserConversationUpdateServiceUserConversationRequest {
    @SpeakeasyMetadata("form:name=LastReadMessageIndex")
    public Long lastReadMessageIndex;
    public UpdateServiceUserConversationUpdateServiceUserConversationRequest withLastReadMessageIndex(Long lastReadMessageIndex) {
        this.lastReadMessageIndex = lastReadMessageIndex;
        return this;
    }
    @SpeakeasyMetadata("form:name=LastReadTimestamp")
    public OffsetDateTime lastReadTimestamp;
    public UpdateServiceUserConversationUpdateServiceUserConversationRequest withLastReadTimestamp(OffsetDateTime lastReadTimestamp) {
        this.lastReadTimestamp = lastReadTimestamp;
        return this;
    }
    @SpeakeasyMetadata("form:name=NotificationLevel")
    public openapisdk.models.shared.ServiceUserConversationEnumNotificationLevelEnum notificationLevel;
    public UpdateServiceUserConversationUpdateServiceUserConversationRequest withNotificationLevel(openapisdk.models.shared.ServiceUserConversationEnumNotificationLevelEnum notificationLevel) {
        this.notificationLevel = notificationLevel;
        return this;
    }
}