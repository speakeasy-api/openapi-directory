package openapisdk.models.operations;



public class CreateIpAccessControlListResponse {
    public String contentType;
    public CreateIpAccessControlListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateIpAccessControlListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TrunkingV1TrunkIpAccessControlList trunkingV1TrunkIpAccessControlList;
    public CreateIpAccessControlListResponse withTrunkingV1TrunkIpAccessControlList(openapisdk.models.shared.TrunkingV1TrunkIpAccessControlList trunkingV1TrunkIpAccessControlList) {
        this.trunkingV1TrunkIpAccessControlList = trunkingV1TrunkIpAccessControlList;
        return this;
    }
}