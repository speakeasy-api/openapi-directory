package openapisdk.models.operations;



public class DoubleclicksearchConversionUpdateResponse {
    public String contentType;
    public DoubleclicksearchConversionUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ConversionList conversionList;
    public DoubleclicksearchConversionUpdateResponse withConversionList(openapisdk.models.shared.ConversionList conversionList) {
        this.conversionList = conversionList;
        return this;
    }
    public Long statusCode;
    public DoubleclicksearchConversionUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}