package openapisdk.models.operations;



public class GetFamilyDetailsResponse {
    public String contentType;
    public GetFamilyDetailsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetFamilyDetailsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetFamilyDetails200ApplicationJson getFamilyDetails200ApplicationJSONObject;
    public GetFamilyDetailsResponse withGetFamilyDetails200ApplicationJsonObject(GetFamilyDetails200ApplicationJson getFamilyDetails200ApplicationJSONObject) {
        this.getFamilyDetails200ApplicationJSONObject = getFamilyDetails200ApplicationJSONObject;
        return this;
    }
}