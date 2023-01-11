package openapisdk.models.operations;



public class GetSnowMonkeyOutagesResponse {
    public String contentType;
    public GetSnowMonkeyOutagesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Outage[] outages;
    public GetSnowMonkeyOutagesResponse withOutages(openapisdk.models.shared.Outage[] outages) {
        this.outages = outages;
        return this;
    }
    public Long statusCode;
    public GetSnowMonkeyOutagesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}