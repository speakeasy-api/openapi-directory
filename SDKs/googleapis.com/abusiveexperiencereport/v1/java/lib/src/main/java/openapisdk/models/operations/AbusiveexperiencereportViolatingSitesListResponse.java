package openapisdk.models.operations;



public class AbusiveexperiencereportViolatingSitesListResponse {
    public String contentType;
    public AbusiveexperiencereportViolatingSitesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AbusiveexperiencereportViolatingSitesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ViolatingSitesResponse violatingSitesResponse;
    public AbusiveexperiencereportViolatingSitesListResponse withViolatingSitesResponse(openapisdk.models.shared.ViolatingSitesResponse violatingSitesResponse) {
        this.violatingSitesResponse = violatingSitesResponse;
        return this;
    }
}