package openapisdk.models.operations;



public class QualityGetDailyDataQualityForSiteResponse {
    public String contentType;
    public QualityGetDailyDataQualityForSiteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DailyQualityResponse dailyQualityResponse;
    public QualityGetDailyDataQualityForSiteResponse withDailyQualityResponse(openapisdk.models.shared.DailyQualityResponse dailyQualityResponse) {
        this.dailyQualityResponse = dailyQualityResponse;
        return this;
    }
    public Long statusCode;
    public QualityGetDailyDataQualityForSiteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}