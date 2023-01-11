package openapisdk.models.operations;



public class RetrieveNeoFeedTodayResponse {
    public String contentType;
    public RetrieveNeoFeedTodayResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.NearEarthObjectList nearEarthObjectList;
    public RetrieveNeoFeedTodayResponse withNearEarthObjectList(openapisdk.models.shared.NearEarthObjectList nearEarthObjectList) {
        this.nearEarthObjectList = nearEarthObjectList;
        return this;
    }
    public Long statusCode;
    public RetrieveNeoFeedTodayResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}