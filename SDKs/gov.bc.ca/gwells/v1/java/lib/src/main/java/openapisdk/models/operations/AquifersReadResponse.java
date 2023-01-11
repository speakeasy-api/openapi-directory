package openapisdk.models.operations;



public class AquifersReadResponse {
    public openapisdk.models.shared.Aquifer aquifer;
    public AquifersReadResponse withAquifer(openapisdk.models.shared.Aquifer aquifer) {
        this.aquifer = aquifer;
        return this;
    }
    public String contentType;
    public AquifersReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AquifersReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}