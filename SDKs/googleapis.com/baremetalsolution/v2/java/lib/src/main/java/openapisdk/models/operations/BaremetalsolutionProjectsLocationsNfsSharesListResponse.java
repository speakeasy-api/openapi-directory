package openapisdk.models.operations;



public class BaremetalsolutionProjectsLocationsNfsSharesListResponse {
    public String contentType;
    public BaremetalsolutionProjectsLocationsNfsSharesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListNfsSharesResponse listNfsSharesResponse;
    public BaremetalsolutionProjectsLocationsNfsSharesListResponse withListNfsSharesResponse(openapisdk.models.shared.ListNfsSharesResponse listNfsSharesResponse) {
        this.listNfsSharesResponse = listNfsSharesResponse;
        return this;
    }
    public Long statusCode;
    public BaremetalsolutionProjectsLocationsNfsSharesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}