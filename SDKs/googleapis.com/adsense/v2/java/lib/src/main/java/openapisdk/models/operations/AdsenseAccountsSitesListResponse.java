package openapisdk.models.operations;



public class AdsenseAccountsSitesListResponse {
    public String contentType;
    public AdsenseAccountsSitesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListSitesResponse listSitesResponse;
    public AdsenseAccountsSitesListResponse withListSitesResponse(openapisdk.models.shared.ListSitesResponse listSitesResponse) {
        this.listSitesResponse = listSitesResponse;
        return this;
    }
    public Long statusCode;
    public AdsenseAccountsSitesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}