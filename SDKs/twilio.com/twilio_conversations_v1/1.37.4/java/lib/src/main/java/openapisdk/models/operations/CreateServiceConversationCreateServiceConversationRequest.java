package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class CreateServiceConversationCreateServiceConversationRequest {
    @SpeakeasyMetadata("form:name=Attributes")
    public String attributes;
    public CreateServiceConversationCreateServiceConversationRequest withAttributes(String attributes) {
        this.attributes = attributes;
        return this;
    }
    @SpeakeasyMetadata("form:name=DateCreated")
    public OffsetDateTime dateCreated;
    public CreateServiceConversationCreateServiceConversationRequest withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @SpeakeasyMetadata("form:name=DateUpdated")
    public OffsetDateTime dateUpdated;
    public CreateServiceConversationCreateServiceConversationRequest withDateUpdated(OffsetDateTime dateUpdated) {
        this.dateUpdated = dateUpdated;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public CreateServiceConversationCreateServiceConversationRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=MessagingServiceSid")
    public String messagingServiceSid;
    public CreateServiceConversationCreateServiceConversationRequest withMessagingServiceSid(String messagingServiceSid) {
        this.messagingServiceSid = messagingServiceSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=State")
    public openapisdk.models.shared.ServiceConversationEnumStateEnum state;
    public CreateServiceConversationCreateServiceConversationRequest withState(openapisdk.models.shared.ServiceConversationEnumStateEnum state) {
        this.state = state;
        return this;
    }
    @SpeakeasyMetadata("form:name=Timers.Closed")
    public String timersClosed;
    public CreateServiceConversationCreateServiceConversationRequest withTimersClosed(String timersClosed) {
        this.timersClosed = timersClosed;
        return this;
    }
    @SpeakeasyMetadata("form:name=Timers.Inactive")
    public String timersInactive;
    public CreateServiceConversationCreateServiceConversationRequest withTimersInactive(String timersInactive) {
        this.timersInactive = timersInactive;
        return this;
    }
    @SpeakeasyMetadata("form:name=UniqueName")
    public String uniqueName;
    public CreateServiceConversationCreateServiceConversationRequest withUniqueName(String uniqueName) {
        this.uniqueName = uniqueName;
        return this;
    }
}