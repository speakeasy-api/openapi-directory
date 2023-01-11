package openapisdk.models.operations;



public class DcimSitesListResponse {
    public String contentType;
    public DcimSitesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DcimSitesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DcimSitesList200ApplicationJson dcimSitesList200ApplicationJSONObject;
    public DcimSitesListResponse withDcimSitesList200ApplicationJsonObject(DcimSitesList200ApplicationJson dcimSitesList200ApplicationJSONObject) {
        this.dcimSitesList200ApplicationJSONObject = dcimSitesList200ApplicationJSONObject;
        return this;
    }
}