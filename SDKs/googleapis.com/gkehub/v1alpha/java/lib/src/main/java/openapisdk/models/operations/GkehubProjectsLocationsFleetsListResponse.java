package openapisdk.models.operations;



public class GkehubProjectsLocationsFleetsListResponse {
    public String contentType;
    public GkehubProjectsLocationsFleetsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListFleetsResponse listFleetsResponse;
    public GkehubProjectsLocationsFleetsListResponse withListFleetsResponse(openapisdk.models.shared.ListFleetsResponse listFleetsResponse) {
        this.listFleetsResponse = listFleetsResponse;
        return this;
    }
    public Long statusCode;
    public GkehubProjectsLocationsFleetsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}