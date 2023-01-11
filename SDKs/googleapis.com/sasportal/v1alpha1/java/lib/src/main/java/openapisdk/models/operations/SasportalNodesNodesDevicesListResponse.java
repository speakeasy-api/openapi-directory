package openapisdk.models.operations;



public class SasportalNodesNodesDevicesListResponse {
    public String contentType;
    public SasportalNodesNodesDevicesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SasPortalListDevicesResponse sasPortalListDevicesResponse;
    public SasportalNodesNodesDevicesListResponse withSasPortalListDevicesResponse(openapisdk.models.shared.SasPortalListDevicesResponse sasPortalListDevicesResponse) {
        this.sasPortalListDevicesResponse = sasPortalListDevicesResponse;
        return this;
    }
    public Long statusCode;
    public SasportalNodesNodesDevicesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}