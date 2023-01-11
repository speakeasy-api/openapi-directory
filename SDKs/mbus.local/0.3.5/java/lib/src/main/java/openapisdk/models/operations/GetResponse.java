package openapisdk.models.operations;



public class GetResponse {
    public String contentType;
    public GetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String mbusData;
    public GetResponse withMbusData(String mbusData) {
        this.mbusData = mbusData;
        return this;
    }
    public String textError;
    public GetResponse withTextError(String textError) {
        this.textError = textError;
        return this;
    }
}