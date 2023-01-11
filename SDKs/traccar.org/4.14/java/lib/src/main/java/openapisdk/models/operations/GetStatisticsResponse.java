package openapisdk.models.operations;



public class GetStatisticsResponse {
    public String contentType;
    public GetStatisticsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Statistics[] statistics;
    public GetStatisticsResponse withStatistics(openapisdk.models.shared.Statistics[] statistics) {
        this.statistics = statistics;
        return this;
    }
    public Long statusCode;
    public GetStatisticsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}