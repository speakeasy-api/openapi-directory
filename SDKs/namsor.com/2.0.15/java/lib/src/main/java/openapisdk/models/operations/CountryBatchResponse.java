package openapisdk.models.operations;



public class CountryBatchResponse {
    public openapisdk.models.shared.BatchPersonalNameGeoOut batchPersonalNameGeoOut;
    public CountryBatchResponse withBatchPersonalNameGeoOut(openapisdk.models.shared.BatchPersonalNameGeoOut batchPersonalNameGeoOut) {
        this.batchPersonalNameGeoOut = batchPersonalNameGeoOut;
        return this;
    }
    public String contentType;
    public CountryBatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CountryBatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}