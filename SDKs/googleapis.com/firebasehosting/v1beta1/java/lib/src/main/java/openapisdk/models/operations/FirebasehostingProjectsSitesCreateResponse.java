package openapisdk.models.operations;



public class FirebasehostingProjectsSitesCreateResponse {
    public String contentType;
    public FirebasehostingProjectsSitesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Site site;
    public FirebasehostingProjectsSitesCreateResponse withSite(openapisdk.models.shared.Site site) {
        this.site = site;
        return this;
    }
    public Long statusCode;
    public FirebasehostingProjectsSitesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}