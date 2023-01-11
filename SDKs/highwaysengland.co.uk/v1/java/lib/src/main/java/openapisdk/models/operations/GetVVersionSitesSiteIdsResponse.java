package openapisdk.models.operations;



public class GetVVersionSitesSiteIdsResponse {
    public String contentType;
    public GetVVersionSitesSiteIdsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SiteResponse siteResponse;
    public GetVVersionSitesSiteIdsResponse withSiteResponse(openapisdk.models.shared.SiteResponse siteResponse) {
        this.siteResponse = siteResponse;
        return this;
    }
    public Long statusCode;
    public GetVVersionSitesSiteIdsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}