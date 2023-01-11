package openapisdk.models.operations;



public class GetBrandingConfResponse {
    public String contentType;
    public GetBrandingConfResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetBrandingConfResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetBrandingConf200ApplicationJson getBrandingConf200ApplicationJSONObject;
    public GetBrandingConfResponse withGetBrandingConf200ApplicationJsonObject(GetBrandingConf200ApplicationJson getBrandingConf200ApplicationJSONObject) {
        this.getBrandingConf200ApplicationJSONObject = getBrandingConf200ApplicationJSONObject;
        return this;
    }
}