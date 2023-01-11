package openapisdk.models.operations;



public class DoubleclicksearchConversionGetByCustomerIdResponse {
    public String contentType;
    public DoubleclicksearchConversionGetByCustomerIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ConversionList conversionList;
    public DoubleclicksearchConversionGetByCustomerIdResponse withConversionList(openapisdk.models.shared.ConversionList conversionList) {
        this.conversionList = conversionList;
        return this;
    }
    public Long statusCode;
    public DoubleclicksearchConversionGetByCustomerIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}