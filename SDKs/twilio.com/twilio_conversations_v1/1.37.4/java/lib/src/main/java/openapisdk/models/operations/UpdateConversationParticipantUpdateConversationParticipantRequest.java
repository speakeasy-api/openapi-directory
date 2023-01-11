package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class UpdateConversationParticipantUpdateConversationParticipantRequest {
    @SpeakeasyMetadata("form:name=Attributes")
    public String attributes;
    public UpdateConversationParticipantUpdateConversationParticipantRequest withAttributes(String attributes) {
        this.attributes = attributes;
        return this;
    }
    @SpeakeasyMetadata("form:name=DateCreated")
    public OffsetDateTime dateCreated;
    public UpdateConversationParticipantUpdateConversationParticipantRequest withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @SpeakeasyMetadata("form:name=DateUpdated")
    public OffsetDateTime dateUpdated;
    public UpdateConversationParticipantUpdateConversationParticipantRequest withDateUpdated(OffsetDateTime dateUpdated) {
        this.dateUpdated = dateUpdated;
        return this;
    }
    @SpeakeasyMetadata("form:name=Identity")
    public String identity;
    public UpdateConversationParticipantUpdateConversationParticipantRequest withIdentity(String identity) {
        this.identity = identity;
        return this;
    }
    @SpeakeasyMetadata("form:name=LastReadMessageIndex")
    public Long lastReadMessageIndex;
    public UpdateConversationParticipantUpdateConversationParticipantRequest withLastReadMessageIndex(Long lastReadMessageIndex) {
        this.lastReadMessageIndex = lastReadMessageIndex;
        return this;
    }
    @SpeakeasyMetadata("form:name=LastReadTimestamp")
    public String lastReadTimestamp;
    public UpdateConversationParticipantUpdateConversationParticipantRequest withLastReadTimestamp(String lastReadTimestamp) {
        this.lastReadTimestamp = lastReadTimestamp;
        return this;
    }
    @SpeakeasyMetadata("form:name=MessagingBinding.ProjectedAddress")
    public String messagingBindingProjectedAddress;
    public UpdateConversationParticipantUpdateConversationParticipantRequest withMessagingBindingProjectedAddress(String messagingBindingProjectedAddress) {
        this.messagingBindingProjectedAddress = messagingBindingProjectedAddress;
        return this;
    }
    @SpeakeasyMetadata("form:name=MessagingBinding.ProxyAddress")
    public String messagingBindingProxyAddress;
    public UpdateConversationParticipantUpdateConversationParticipantRequest withMessagingBindingProxyAddress(String messagingBindingProxyAddress) {
        this.messagingBindingProxyAddress = messagingBindingProxyAddress;
        return this;
    }
    @SpeakeasyMetadata("form:name=RoleSid")
    public String roleSid;
    public UpdateConversationParticipantUpdateConversationParticipantRequest withRoleSid(String roleSid) {
        this.roleSid = roleSid;
        return this;
    }
}