package openapisdk.models.operations;



public class TpuProjectsLocationsNodesGetGuestAttributesResponse {
    public String contentType;
    public TpuProjectsLocationsNodesGetGuestAttributesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetGuestAttributesResponse getGuestAttributesResponse;
    public TpuProjectsLocationsNodesGetGuestAttributesResponse withGetGuestAttributesResponse(openapisdk.models.shared.GetGuestAttributesResponse getGuestAttributesResponse) {
        this.getGuestAttributesResponse = getGuestAttributesResponse;
        return this;
    }
    public Long statusCode;
    public TpuProjectsLocationsNodesGetGuestAttributesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}