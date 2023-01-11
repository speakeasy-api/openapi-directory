package openapisdk.models.operations;



public class DfareportingConversionsBatchupdateResponse {
    public String contentType;
    public DfareportingConversionsBatchupdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ConversionsBatchUpdateResponse conversionsBatchUpdateResponse;
    public DfareportingConversionsBatchupdateResponse withConversionsBatchUpdateResponse(openapisdk.models.shared.ConversionsBatchUpdateResponse conversionsBatchUpdateResponse) {
        this.conversionsBatchUpdateResponse = conversionsBatchUpdateResponse;
        return this;
    }
    public Long statusCode;
    public DfareportingConversionsBatchupdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}