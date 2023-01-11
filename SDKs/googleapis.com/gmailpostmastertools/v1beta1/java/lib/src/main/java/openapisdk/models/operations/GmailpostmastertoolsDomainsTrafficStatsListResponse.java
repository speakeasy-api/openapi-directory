package openapisdk.models.operations;



public class GmailpostmastertoolsDomainsTrafficStatsListResponse {
    public String contentType;
    public GmailpostmastertoolsDomainsTrafficStatsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListTrafficStatsResponse listTrafficStatsResponse;
    public GmailpostmastertoolsDomainsTrafficStatsListResponse withListTrafficStatsResponse(openapisdk.models.shared.ListTrafficStatsResponse listTrafficStatsResponse) {
        this.listTrafficStatsResponse = listTrafficStatsResponse;
        return this;
    }
    public Long statusCode;
    public GmailpostmastertoolsDomainsTrafficStatsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}