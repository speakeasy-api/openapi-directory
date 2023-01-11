package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class CreateConversationCreateConversationRequest {
    @SpeakeasyMetadata("form:name=Attributes")
    public String attributes;
    public CreateConversationCreateConversationRequest withAttributes(String attributes) {
        this.attributes = attributes;
        return this;
    }
    @SpeakeasyMetadata("form:name=DateCreated")
    public OffsetDateTime dateCreated;
    public CreateConversationCreateConversationRequest withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @SpeakeasyMetadata("form:name=DateUpdated")
    public OffsetDateTime dateUpdated;
    public CreateConversationCreateConversationRequest withDateUpdated(OffsetDateTime dateUpdated) {
        this.dateUpdated = dateUpdated;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public CreateConversationCreateConversationRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=MessagingServiceSid")
    public String messagingServiceSid;
    public CreateConversationCreateConversationRequest withMessagingServiceSid(String messagingServiceSid) {
        this.messagingServiceSid = messagingServiceSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=State")
    public openapisdk.models.shared.ConversationEnumStateEnum state;
    public CreateConversationCreateConversationRequest withState(openapisdk.models.shared.ConversationEnumStateEnum state) {
        this.state = state;
        return this;
    }
    @SpeakeasyMetadata("form:name=Timers.Closed")
    public String timersClosed;
    public CreateConversationCreateConversationRequest withTimersClosed(String timersClosed) {
        this.timersClosed = timersClosed;
        return this;
    }
    @SpeakeasyMetadata("form:name=Timers.Inactive")
    public String timersInactive;
    public CreateConversationCreateConversationRequest withTimersInactive(String timersInactive) {
        this.timersInactive = timersInactive;
        return this;
    }
    @SpeakeasyMetadata("form:name=UniqueName")
    public String uniqueName;
    public CreateConversationCreateConversationRequest withUniqueName(String uniqueName) {
        this.uniqueName = uniqueName;
        return this;
    }
}