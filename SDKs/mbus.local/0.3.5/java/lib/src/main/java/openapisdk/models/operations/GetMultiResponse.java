package openapisdk.models.operations;



public class GetMultiResponse {
    public String contentType;
    public GetMultiResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetMultiResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String mbusData;
    public GetMultiResponse withMbusData(String mbusData) {
        this.mbusData = mbusData;
        return this;
    }
    public String textError;
    public GetMultiResponse withTextError(String textError) {
        this.textError = textError;
        return this;
    }
}