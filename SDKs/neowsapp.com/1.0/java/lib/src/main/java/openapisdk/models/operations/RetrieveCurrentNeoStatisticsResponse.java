package openapisdk.models.operations;



public class RetrieveCurrentNeoStatisticsResponse {
    public String contentType;
    public RetrieveCurrentNeoStatisticsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Statistics statistics;
    public RetrieveCurrentNeoStatisticsResponse withStatistics(openapisdk.models.shared.Statistics statistics) {
        this.statistics = statistics;
        return this;
    }
    public Long statusCode;
    public RetrieveCurrentNeoStatisticsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}