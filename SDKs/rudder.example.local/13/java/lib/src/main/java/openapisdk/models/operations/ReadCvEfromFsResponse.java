package openapisdk.models.operations;



public class ReadCvEfromFsResponse {
    public String contentType;
    public ReadCvEfromFsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReadCvEfromFsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ReadCvEfromFs200ApplicationJson readCVEfromFS200ApplicationJSONObject;
    public ReadCvEfromFsResponse withReadCvEfromFs200ApplicationJsonObject(ReadCvEfromFs200ApplicationJson readCVEfromFS200ApplicationJSONObject) {
        this.readCVEfromFS200ApplicationJSONObject = readCVEfromFS200ApplicationJSONObject;
        return this;
    }
}