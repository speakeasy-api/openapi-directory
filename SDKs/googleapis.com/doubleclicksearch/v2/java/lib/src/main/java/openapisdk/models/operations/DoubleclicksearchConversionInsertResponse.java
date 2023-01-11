package openapisdk.models.operations;



public class DoubleclicksearchConversionInsertResponse {
    public String contentType;
    public DoubleclicksearchConversionInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ConversionList conversionList;
    public DoubleclicksearchConversionInsertResponse withConversionList(openapisdk.models.shared.ConversionList conversionList) {
        this.conversionList = conversionList;
        return this;
    }
    public Long statusCode;
    public DoubleclicksearchConversionInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}