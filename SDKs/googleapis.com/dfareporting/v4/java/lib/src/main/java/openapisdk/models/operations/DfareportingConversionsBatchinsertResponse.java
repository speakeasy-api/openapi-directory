package openapisdk.models.operations;



public class DfareportingConversionsBatchinsertResponse {
    public String contentType;
    public DfareportingConversionsBatchinsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ConversionsBatchInsertResponse conversionsBatchInsertResponse;
    public DfareportingConversionsBatchinsertResponse withConversionsBatchInsertResponse(openapisdk.models.shared.ConversionsBatchInsertResponse conversionsBatchInsertResponse) {
        this.conversionsBatchInsertResponse = conversionsBatchInsertResponse;
        return this;
    }
    public Long statusCode;
    public DfareportingConversionsBatchinsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}