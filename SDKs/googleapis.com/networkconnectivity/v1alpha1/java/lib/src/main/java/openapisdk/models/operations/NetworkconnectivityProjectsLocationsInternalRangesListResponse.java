package openapisdk.models.operations;



public class NetworkconnectivityProjectsLocationsInternalRangesListResponse {
    public String contentType;
    public NetworkconnectivityProjectsLocationsInternalRangesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListInternalRangesResponse listInternalRangesResponse;
    public NetworkconnectivityProjectsLocationsInternalRangesListResponse withListInternalRangesResponse(openapisdk.models.shared.ListInternalRangesResponse listInternalRangesResponse) {
        this.listInternalRangesResponse = listInternalRangesResponse;
        return this;
    }
    public Long statusCode;
    public NetworkconnectivityProjectsLocationsInternalRangesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}