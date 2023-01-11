package openapisdk.models.operations;



public class FetchCredentialListResponse {
    public String contentType;
    public FetchCredentialListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchCredentialListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TrunkingV1TrunkCredentialList trunkingV1TrunkCredentialList;
    public FetchCredentialListResponse withTrunkingV1TrunkCredentialList(openapisdk.models.shared.TrunkingV1TrunkCredentialList trunkingV1TrunkCredentialList) {
        this.trunkingV1TrunkCredentialList = trunkingV1TrunkCredentialList;
        return this;
    }
}