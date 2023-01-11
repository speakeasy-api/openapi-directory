package openapisdk.models.operations;



public class CreateCredentialListResponse {
    public String contentType;
    public CreateCredentialListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateCredentialListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TrunkingV1TrunkCredentialList trunkingV1TrunkCredentialList;
    public CreateCredentialListResponse withTrunkingV1TrunkCredentialList(openapisdk.models.shared.TrunkingV1TrunkCredentialList trunkingV1TrunkCredentialList) {
        this.trunkingV1TrunkCredentialList = trunkingV1TrunkCredentialList;
        return this;
    }
}