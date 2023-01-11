package openapisdk.models.operations;



public class FetchSimResponse {
    public String contentType;
    public FetchSimResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchSimResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.WirelessV1Sim wirelessV1Sim;
    public FetchSimResponse withWirelessV1Sim(openapisdk.models.shared.WirelessV1Sim wirelessV1Sim) {
        this.wirelessV1Sim = wirelessV1Sim;
        return this;
    }
}