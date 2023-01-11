package openapisdk.models.operations;



public class AdexperiencereportViolatingSitesListResponse {
    public String contentType;
    public AdexperiencereportViolatingSitesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AdexperiencereportViolatingSitesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ViolatingSitesResponse violatingSitesResponse;
    public AdexperiencereportViolatingSitesListResponse withViolatingSitesResponse(openapisdk.models.shared.ViolatingSitesResponse violatingSitesResponse) {
        this.violatingSitesResponse = violatingSitesResponse;
        return this;
    }
}