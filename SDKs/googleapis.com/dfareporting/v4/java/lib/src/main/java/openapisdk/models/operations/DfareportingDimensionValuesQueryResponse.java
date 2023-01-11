package openapisdk.models.operations;



public class DfareportingDimensionValuesQueryResponse {
    public String contentType;
    public DfareportingDimensionValuesQueryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DimensionValueList dimensionValueList;
    public DfareportingDimensionValuesQueryResponse withDimensionValueList(openapisdk.models.shared.DimensionValueList dimensionValueList) {
        this.dimensionValueList = dimensionValueList;
        return this;
    }
    public Long statusCode;
    public DfareportingDimensionValuesQueryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}