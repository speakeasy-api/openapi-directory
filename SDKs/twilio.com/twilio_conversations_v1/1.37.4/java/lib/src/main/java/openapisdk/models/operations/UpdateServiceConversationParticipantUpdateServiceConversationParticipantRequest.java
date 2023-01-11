package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class UpdateServiceConversationParticipantUpdateServiceConversationParticipantRequest {
    @SpeakeasyMetadata("form:name=Attributes")
    public String attributes;
    public UpdateServiceConversationParticipantUpdateServiceConversationParticipantRequest withAttributes(String attributes) {
        this.attributes = attributes;
        return this;
    }
    @SpeakeasyMetadata("form:name=DateCreated")
    public OffsetDateTime dateCreated;
    public UpdateServiceConversationParticipantUpdateServiceConversationParticipantRequest withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @SpeakeasyMetadata("form:name=DateUpdated")
    public OffsetDateTime dateUpdated;
    public UpdateServiceConversationParticipantUpdateServiceConversationParticipantRequest withDateUpdated(OffsetDateTime dateUpdated) {
        this.dateUpdated = dateUpdated;
        return this;
    }
    @SpeakeasyMetadata("form:name=Identity")
    public String identity;
    public UpdateServiceConversationParticipantUpdateServiceConversationParticipantRequest withIdentity(String identity) {
        this.identity = identity;
        return this;
    }
    @SpeakeasyMetadata("form:name=LastReadMessageIndex")
    public Long lastReadMessageIndex;
    public UpdateServiceConversationParticipantUpdateServiceConversationParticipantRequest withLastReadMessageIndex(Long lastReadMessageIndex) {
        this.lastReadMessageIndex = lastReadMessageIndex;
        return this;
    }
    @SpeakeasyMetadata("form:name=LastReadTimestamp")
    public String lastReadTimestamp;
    public UpdateServiceConversationParticipantUpdateServiceConversationParticipantRequest withLastReadTimestamp(String lastReadTimestamp) {
        this.lastReadTimestamp = lastReadTimestamp;
        return this;
    }
    @SpeakeasyMetadata("form:name=MessagingBinding.ProjectedAddress")
    public String messagingBindingProjectedAddress;
    public UpdateServiceConversationParticipantUpdateServiceConversationParticipantRequest withMessagingBindingProjectedAddress(String messagingBindingProjectedAddress) {
        this.messagingBindingProjectedAddress = messagingBindingProjectedAddress;
        return this;
    }
    @SpeakeasyMetadata("form:name=MessagingBinding.ProxyAddress")
    public String messagingBindingProxyAddress;
    public UpdateServiceConversationParticipantUpdateServiceConversationParticipantRequest withMessagingBindingProxyAddress(String messagingBindingProxyAddress) {
        this.messagingBindingProxyAddress = messagingBindingProxyAddress;
        return this;
    }
    @SpeakeasyMetadata("form:name=RoleSid")
    public String roleSid;
    public UpdateServiceConversationParticipantUpdateServiceConversationParticipantRequest withRoleSid(String roleSid) {
        this.roleSid = roleSid;
        return this;
    }
}