package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateCredentialUpdateCredentialRequest {
    @SpeakeasyMetadata("form:name=ApiKey")
    public String apiKey;
    public UpdateCredentialUpdateCredentialRequest withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("form:name=Certificate")
    public String certificate;
    public UpdateCredentialUpdateCredentialRequest withCertificate(String certificate) {
        this.certificate = certificate;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public UpdateCredentialUpdateCredentialRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=PrivateKey")
    public String privateKey;
    public UpdateCredentialUpdateCredentialRequest withPrivateKey(String privateKey) {
        this.privateKey = privateKey;
        return this;
    }
    @SpeakeasyMetadata("form:name=Sandbox")
    public Boolean sandbox;
    public UpdateCredentialUpdateCredentialRequest withSandbox(Boolean sandbox) {
        this.sandbox = sandbox;
        return this;
    }
    @SpeakeasyMetadata("form:name=Secret")
    public String secret;
    public UpdateCredentialUpdateCredentialRequest withSecret(String secret) {
        this.secret = secret;
        return this;
    }
    @SpeakeasyMetadata("form:name=Type")
    public openapisdk.models.shared.CredentialEnumPushTypeEnum type;
    public UpdateCredentialUpdateCredentialRequest withType(openapisdk.models.shared.CredentialEnumPushTypeEnum type) {
        this.type = type;
        return this;
    }
}