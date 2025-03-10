/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import java.time.OffsetDateTime;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class UpdateUserChannelUpdateUserChannelRequest {
    /**
     * The index of the last [Message](https://www.twilio.com/docs/chat/rest/message-resource) in the [Channel](https://www.twilio.com/docs/chat/channels) that the Member has read.
     */
    @SpeakeasyMetadata("form:name=LastConsumedMessageIndex")
    public Long lastConsumedMessageIndex;

    public UpdateUserChannelUpdateUserChannelRequest withLastConsumedMessageIndex(Long lastConsumedMessageIndex) {
        this.lastConsumedMessageIndex = lastConsumedMessageIndex;
        return this;
    }
    
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) timestamp of the last [Message](https://www.twilio.com/docs/chat/rest/message-resource) read event for the Member within the [Channel](https://www.twilio.com/docs/chat/channels).
     */
    @SpeakeasyMetadata("form:name=LastConsumptionTimestamp")
    public OffsetDateTime lastConsumptionTimestamp;

    public UpdateUserChannelUpdateUserChannelRequest withLastConsumptionTimestamp(OffsetDateTime lastConsumptionTimestamp) {
        this.lastConsumptionTimestamp = lastConsumptionTimestamp;
        return this;
    }
    
    @SpeakeasyMetadata("form:name=NotificationLevel")
    public org.openapis.openapi.models.shared.UserChannelEnumNotificationLevelEnum notificationLevel;

    public UpdateUserChannelUpdateUserChannelRequest withNotificationLevel(org.openapis.openapi.models.shared.UserChannelEnumNotificationLevelEnum notificationLevel) {
        this.notificationLevel = notificationLevel;
        return this;
    }
    
    public UpdateUserChannelUpdateUserChannelRequest(){}
}
