package openapisdk.models.operations;



public class QualityGetOverallDataQualityForSitesResponse {
    public String contentType;
    public QualityGetOverallDataQualityForSitesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.OverallQualityResponse overallQualityResponse;
    public QualityGetOverallDataQualityForSitesResponse withOverallQualityResponse(openapisdk.models.shared.OverallQualityResponse overallQualityResponse) {
        this.overallQualityResponse = overallQualityResponse;
        return this;
    }
    public Long statusCode;
    public QualityGetOverallDataQualityForSitesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}