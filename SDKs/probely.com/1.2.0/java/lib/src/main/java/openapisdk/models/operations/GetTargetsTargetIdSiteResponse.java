package openapisdk.models.operations;



public class GetTargetsTargetIdSiteResponse {
    public String contentType;
    public GetTargetsTargetIdSiteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Site site;
    public GetTargetsTargetIdSiteResponse withSite(openapisdk.models.shared.Site site) {
        this.site = site;
        return this;
    }
    public Long statusCode;
    public GetTargetsTargetIdSiteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetTargetsTargetIdSite401ApplicationJson getTargetsTargetIdSite401ApplicationJSONObject;
    public GetTargetsTargetIdSiteResponse withGetTargetsTargetIdSite401ApplicationJsonObject(GetTargetsTargetIdSite401ApplicationJson getTargetsTargetIdSite401ApplicationJSONObject) {
        this.getTargetsTargetIdSite401ApplicationJSONObject = getTargetsTargetIdSite401ApplicationJSONObject;
        return this;
    }
    public GetTargetsTargetIdSite404ApplicationJson getTargetsTargetIdSite404ApplicationJSONObject;
    public GetTargetsTargetIdSiteResponse withGetTargetsTargetIdSite404ApplicationJsonObject(GetTargetsTargetIdSite404ApplicationJson getTargetsTargetIdSite404ApplicationJSONObject) {
        this.getTargetsTargetIdSite404ApplicationJSONObject = getTargetsTargetIdSite404ApplicationJSONObject;
        return this;
    }
}