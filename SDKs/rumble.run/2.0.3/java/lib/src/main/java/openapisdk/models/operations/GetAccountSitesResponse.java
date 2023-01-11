package openapisdk.models.operations;



public class GetAccountSitesResponse {
    public String contentType;
    public GetAccountSitesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Site[] sites;
    public GetAccountSitesResponse withSites(openapisdk.models.shared.Site[] sites) {
        this.sites = sites;
        return this;
    }
    public Long statusCode;
    public GetAccountSitesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}