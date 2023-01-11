package openapisdk.models.operations;



public class ApiUsageResponse {
    public openapisdk.models.shared.ApiPeriodUsageOut apiPeriodUsageOut;
    public ApiUsageResponse withApiPeriodUsageOut(openapisdk.models.shared.ApiPeriodUsageOut apiPeriodUsageOut) {
        this.apiPeriodUsageOut = apiPeriodUsageOut;
        return this;
    }
    public String contentType;
    public ApiUsageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ApiUsageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}