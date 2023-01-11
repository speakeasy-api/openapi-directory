package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class UpdateUserChannelUpdateUserChannelRequest {
    @SpeakeasyMetadata("form:name=LastConsumedMessageIndex")
    public Long lastConsumedMessageIndex;
    public UpdateUserChannelUpdateUserChannelRequest withLastConsumedMessageIndex(Long lastConsumedMessageIndex) {
        this.lastConsumedMessageIndex = lastConsumedMessageIndex;
        return this;
    }
    @SpeakeasyMetadata("form:name=LastConsumptionTimestamp")
    public OffsetDateTime lastConsumptionTimestamp;
    public UpdateUserChannelUpdateUserChannelRequest withLastConsumptionTimestamp(OffsetDateTime lastConsumptionTimestamp) {
        this.lastConsumptionTimestamp = lastConsumptionTimestamp;
        return this;
    }
    @SpeakeasyMetadata("form:name=NotificationLevel")
    public openapisdk.models.shared.UserChannelEnumNotificationLevelEnum notificationLevel;
    public UpdateUserChannelUpdateUserChannelRequest withNotificationLevel(openapisdk.models.shared.UserChannelEnumNotificationLevelEnum notificationLevel) {
        this.notificationLevel = notificationLevel;
        return this;
    }
}