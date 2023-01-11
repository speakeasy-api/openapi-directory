package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateBindingCreateBindingRequest {
    @SpeakeasyMetadata("form:name=Address")
    public String address;
    public CreateBindingCreateBindingRequest withAddress(String address) {
        this.address = address;
        return this;
    }
    @SpeakeasyMetadata("form:name=BindingType")
    public openapisdk.models.shared.BindingEnumBindingTypeEnum bindingType;
    public CreateBindingCreateBindingRequest withBindingType(openapisdk.models.shared.BindingEnumBindingTypeEnum bindingType) {
        this.bindingType = bindingType;
        return this;
    }
    @SpeakeasyMetadata("form:name=CredentialSid")
    public String credentialSid;
    public CreateBindingCreateBindingRequest withCredentialSid(String credentialSid) {
        this.credentialSid = credentialSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=Endpoint")
    public String endpoint;
    public CreateBindingCreateBindingRequest withEndpoint(String endpoint) {
        this.endpoint = endpoint;
        return this;
    }
    @SpeakeasyMetadata("form:name=Identity")
    public String identity;
    public CreateBindingCreateBindingRequest withIdentity(String identity) {
        this.identity = identity;
        return this;
    }
    @SpeakeasyMetadata("form:name=NotificationProtocolVersion")
    public String notificationProtocolVersion;
    public CreateBindingCreateBindingRequest withNotificationProtocolVersion(String notificationProtocolVersion) {
        this.notificationProtocolVersion = notificationProtocolVersion;
        return this;
    }
    @SpeakeasyMetadata("form:name=Tag")
    public String[] tag;
    public CreateBindingCreateBindingRequest withTag(String[] tag) {
        this.tag = tag;
        return this;
    }
}