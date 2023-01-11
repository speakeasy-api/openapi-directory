package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateCredentialCreateCredentialRequest {
    @SpeakeasyMetadata("form:name=ApiKey")
    public String apiKey;
    public CreateCredentialCreateCredentialRequest withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("form:name=Certificate")
    public String certificate;
    public CreateCredentialCreateCredentialRequest withCertificate(String certificate) {
        this.certificate = certificate;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public CreateCredentialCreateCredentialRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=PrivateKey")
    public String privateKey;
    public CreateCredentialCreateCredentialRequest withPrivateKey(String privateKey) {
        this.privateKey = privateKey;
        return this;
    }
    @SpeakeasyMetadata("form:name=Sandbox")
    public Boolean sandbox;
    public CreateCredentialCreateCredentialRequest withSandbox(Boolean sandbox) {
        this.sandbox = sandbox;
        return this;
    }
    @SpeakeasyMetadata("form:name=Secret")
    public String secret;
    public CreateCredentialCreateCredentialRequest withSecret(String secret) {
        this.secret = secret;
        return this;
    }
    @SpeakeasyMetadata("form:name=Type")
    public openapisdk.models.shared.CredentialEnumPushTypeEnum type;
    public CreateCredentialCreateCredentialRequest withType(openapisdk.models.shared.CredentialEnumPushTypeEnum type) {
        this.type = type;
        return this;
    }
}