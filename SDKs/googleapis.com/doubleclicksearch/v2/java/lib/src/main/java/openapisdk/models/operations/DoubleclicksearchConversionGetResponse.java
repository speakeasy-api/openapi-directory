package openapisdk.models.operations;



public class DoubleclicksearchConversionGetResponse {
    public String contentType;
    public DoubleclicksearchConversionGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ConversionList conversionList;
    public DoubleclicksearchConversionGetResponse withConversionList(openapisdk.models.shared.ConversionList conversionList) {
        this.conversionList = conversionList;
        return this;
    }
    public Long statusCode;
    public DoubleclicksearchConversionGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}