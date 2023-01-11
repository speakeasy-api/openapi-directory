package openapisdk.models.operations;



public class RetrieveNearEarthObjectFeedResponse {
    public String contentType;
    public RetrieveNearEarthObjectFeedResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.NearEarthObjectList nearEarthObjectList;
    public RetrieveNearEarthObjectFeedResponse withNearEarthObjectList(openapisdk.models.shared.NearEarthObjectList nearEarthObjectList) {
        this.nearEarthObjectList = nearEarthObjectList;
        return this;
    }
    public Long statusCode;
    public RetrieveNearEarthObjectFeedResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}