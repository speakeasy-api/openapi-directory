package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateCredentialPublicKeyCreateCredentialPublicKeyRequest {
    @SpeakeasyMetadata("form:name=AccountSid")
    public String accountSid;
    public CreateCredentialPublicKeyCreateCredentialPublicKeyRequest withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public CreateCredentialPublicKeyCreateCredentialPublicKeyRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=PublicKey")
    public String publicKey;
    public CreateCredentialPublicKeyCreateCredentialPublicKeyRequest withPublicKey(String publicKey) {
        this.publicKey = publicKey;
        return this;
    }
}