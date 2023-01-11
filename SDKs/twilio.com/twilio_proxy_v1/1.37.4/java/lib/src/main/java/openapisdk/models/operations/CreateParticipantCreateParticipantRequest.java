package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateParticipantCreateParticipantRequest {
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public CreateParticipantCreateParticipantRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=Identifier")
    public String identifier;
    public CreateParticipantCreateParticipantRequest withIdentifier(String identifier) {
        this.identifier = identifier;
        return this;
    }
    @SpeakeasyMetadata("form:name=ProxyIdentifier")
    public String proxyIdentifier;
    public CreateParticipantCreateParticipantRequest withProxyIdentifier(String proxyIdentifier) {
        this.proxyIdentifier = proxyIdentifier;
        return this;
    }
    @SpeakeasyMetadata("form:name=ProxyIdentifierSid")
    public String proxyIdentifierSid;
    public CreateParticipantCreateParticipantRequest withProxyIdentifierSid(String proxyIdentifierSid) {
        this.proxyIdentifierSid = proxyIdentifierSid;
        return this;
    }
}