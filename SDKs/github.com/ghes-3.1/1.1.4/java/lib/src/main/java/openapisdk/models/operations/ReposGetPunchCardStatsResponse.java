package openapisdk.models.operations;



public class ReposGetPunchCardStatsResponse {
    public String contentType;
    public ReposGetPunchCardStatsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReposGetPunchCardStatsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Long[][] codeFrequencyStats;
    public ReposGetPunchCardStatsResponse withCodeFrequencyStats(Long[][] codeFrequencyStats) {
        this.codeFrequencyStats = codeFrequencyStats;
        return this;
    }
}