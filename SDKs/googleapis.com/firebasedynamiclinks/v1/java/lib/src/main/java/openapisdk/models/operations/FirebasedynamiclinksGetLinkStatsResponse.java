package openapisdk.models.operations;



public class FirebasedynamiclinksGetLinkStatsResponse {
    public String contentType;
    public FirebasedynamiclinksGetLinkStatsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DynamicLinkStats dynamicLinkStats;
    public FirebasedynamiclinksGetLinkStatsResponse withDynamicLinkStats(openapisdk.models.shared.DynamicLinkStats dynamicLinkStats) {
        this.dynamicLinkStats = dynamicLinkStats;
        return this;
    }
    public Long statusCode;
    public FirebasedynamiclinksGetLinkStatsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}