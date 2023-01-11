package openapisdk.models.operations;



public class InitiateApiKeyRequest {
    public InitiateApiKeySecurity security;
    public InitiateApiKeyRequest withSecurity(InitiateApiKeySecurity security) {
        this.security = security;
        return this;
    }
}