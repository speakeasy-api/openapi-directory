package openapisdk.models.operations;



public class SiteTypesIndexResponse {
    public String contentType;
    public SiteTypesIndexResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SiteTypeResponse siteTypeResponse;
    public SiteTypesIndexResponse withSiteTypeResponse(openapisdk.models.shared.SiteTypeResponse siteTypeResponse) {
        this.siteTypeResponse = siteTypeResponse;
        return this;
    }
    public Long statusCode;
    public SiteTypesIndexResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}