package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class UpdateServiceConversationUpdateServiceConversationRequest {
    @SpeakeasyMetadata("form:name=Attributes")
    public String attributes;
    public UpdateServiceConversationUpdateServiceConversationRequest withAttributes(String attributes) {
        this.attributes = attributes;
        return this;
    }
    @SpeakeasyMetadata("form:name=DateCreated")
    public OffsetDateTime dateCreated;
    public UpdateServiceConversationUpdateServiceConversationRequest withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @SpeakeasyMetadata("form:name=DateUpdated")
    public OffsetDateTime dateUpdated;
    public UpdateServiceConversationUpdateServiceConversationRequest withDateUpdated(OffsetDateTime dateUpdated) {
        this.dateUpdated = dateUpdated;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public UpdateServiceConversationUpdateServiceConversationRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=MessagingServiceSid")
    public String messagingServiceSid;
    public UpdateServiceConversationUpdateServiceConversationRequest withMessagingServiceSid(String messagingServiceSid) {
        this.messagingServiceSid = messagingServiceSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=State")
    public openapisdk.models.shared.ServiceConversationEnumStateEnum state;
    public UpdateServiceConversationUpdateServiceConversationRequest withState(openapisdk.models.shared.ServiceConversationEnumStateEnum state) {
        this.state = state;
        return this;
    }
    @SpeakeasyMetadata("form:name=Timers.Closed")
    public String timersClosed;
    public UpdateServiceConversationUpdateServiceConversationRequest withTimersClosed(String timersClosed) {
        this.timersClosed = timersClosed;
        return this;
    }
    @SpeakeasyMetadata("form:name=Timers.Inactive")
    public String timersInactive;
    public UpdateServiceConversationUpdateServiceConversationRequest withTimersInactive(String timersInactive) {
        this.timersInactive = timersInactive;
        return this;
    }
    @SpeakeasyMetadata("form:name=UniqueName")
    public String uniqueName;
    public UpdateServiceConversationUpdateServiceConversationRequest withUniqueName(String uniqueName) {
        this.uniqueName = uniqueName;
        return this;
    }
}