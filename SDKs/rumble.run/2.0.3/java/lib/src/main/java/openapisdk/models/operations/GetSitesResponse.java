package openapisdk.models.operations;



public class GetSitesResponse {
    public String contentType;
    public GetSitesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Site[] sites;
    public GetSitesResponse withSites(openapisdk.models.shared.Site[] sites) {
        this.sites = sites;
        return this;
    }
    public Long statusCode;
    public GetSitesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}