package openapisdk.models.operations;



public class UpdateSimResponse {
    public String contentType;
    public UpdateSimResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateSimResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.WirelessV1Sim wirelessV1Sim;
    public UpdateSimResponse withWirelessV1Sim(openapisdk.models.shared.WirelessV1Sim wirelessV1Sim) {
        this.wirelessV1Sim = wirelessV1Sim;
        return this;
    }
}