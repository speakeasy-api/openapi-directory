package openapisdk.models.operations;



public class GmailpostmastertoolsDomainsTrafficStatsGetResponse {
    public String contentType;
    public GmailpostmastertoolsDomainsTrafficStatsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GmailpostmastertoolsDomainsTrafficStatsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TrafficStats trafficStats;
    public GmailpostmastertoolsDomainsTrafficStatsGetResponse withTrafficStats(openapisdk.models.shared.TrafficStats trafficStats) {
        this.trafficStats = trafficStats;
        return this;
    }
}