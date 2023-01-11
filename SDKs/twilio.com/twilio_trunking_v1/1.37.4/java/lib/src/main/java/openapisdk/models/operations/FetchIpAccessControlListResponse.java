package openapisdk.models.operations;



public class FetchIpAccessControlListResponse {
    public String contentType;
    public FetchIpAccessControlListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchIpAccessControlListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TrunkingV1TrunkIpAccessControlList trunkingV1TrunkIpAccessControlList;
    public FetchIpAccessControlListResponse withTrunkingV1TrunkIpAccessControlList(openapisdk.models.shared.TrunkingV1TrunkIpAccessControlList trunkingV1TrunkIpAccessControlList) {
        this.trunkingV1TrunkIpAccessControlList = trunkingV1TrunkIpAccessControlList;
        return this;
    }
}