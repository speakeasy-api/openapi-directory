package openapisdk.models.operations;



public class GetSectionFormatResponse {
    public String contentType;
    public GetSectionFormatResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetSectionFormatResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetSectionFormat200ApplicationJson getSectionFormat200ApplicationJSONObject;
    public GetSectionFormatResponse withGetSectionFormat200ApplicationJsonObject(GetSectionFormat200ApplicationJson getSectionFormat200ApplicationJSONObject) {
        this.getSectionFormat200ApplicationJSONObject = getSectionFormat200ApplicationJSONObject;
        return this;
    }
}