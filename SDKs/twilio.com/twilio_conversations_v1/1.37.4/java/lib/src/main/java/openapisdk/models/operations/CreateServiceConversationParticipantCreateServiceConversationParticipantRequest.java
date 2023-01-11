package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class CreateServiceConversationParticipantCreateServiceConversationParticipantRequest {
    @SpeakeasyMetadata("form:name=Attributes")
    public String attributes;
    public CreateServiceConversationParticipantCreateServiceConversationParticipantRequest withAttributes(String attributes) {
        this.attributes = attributes;
        return this;
    }
    @SpeakeasyMetadata("form:name=DateCreated")
    public OffsetDateTime dateCreated;
    public CreateServiceConversationParticipantCreateServiceConversationParticipantRequest withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @SpeakeasyMetadata("form:name=DateUpdated")
    public OffsetDateTime dateUpdated;
    public CreateServiceConversationParticipantCreateServiceConversationParticipantRequest withDateUpdated(OffsetDateTime dateUpdated) {
        this.dateUpdated = dateUpdated;
        return this;
    }
    @SpeakeasyMetadata("form:name=Identity")
    public String identity;
    public CreateServiceConversationParticipantCreateServiceConversationParticipantRequest withIdentity(String identity) {
        this.identity = identity;
        return this;
    }
    @SpeakeasyMetadata("form:name=MessagingBinding.Address")
    public String messagingBindingAddress;
    public CreateServiceConversationParticipantCreateServiceConversationParticipantRequest withMessagingBindingAddress(String messagingBindingAddress) {
        this.messagingBindingAddress = messagingBindingAddress;
        return this;
    }
    @SpeakeasyMetadata("form:name=MessagingBinding.ProjectedAddress")
    public String messagingBindingProjectedAddress;
    public CreateServiceConversationParticipantCreateServiceConversationParticipantRequest withMessagingBindingProjectedAddress(String messagingBindingProjectedAddress) {
        this.messagingBindingProjectedAddress = messagingBindingProjectedAddress;
        return this;
    }
    @SpeakeasyMetadata("form:name=MessagingBinding.ProxyAddress")
    public String messagingBindingProxyAddress;
    public CreateServiceConversationParticipantCreateServiceConversationParticipantRequest withMessagingBindingProxyAddress(String messagingBindingProxyAddress) {
        this.messagingBindingProxyAddress = messagingBindingProxyAddress;
        return this;
    }
    @SpeakeasyMetadata("form:name=RoleSid")
    public String roleSid;
    public CreateServiceConversationParticipantCreateServiceConversationParticipantRequest withRoleSid(String roleSid) {
        this.roleSid = roleSid;
        return this;
    }
}