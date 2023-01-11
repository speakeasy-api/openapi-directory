package openapisdk.models.operations;



public class AnalyticsDataMcfGetResponse {
    public String contentType;
    public AnalyticsDataMcfGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.McfData mcfData;
    public AnalyticsDataMcfGetResponse withMcfData(openapisdk.models.shared.McfData mcfData) {
        this.mcfData = mcfData;
        return this;
    }
    public Long statusCode;
    public AnalyticsDataMcfGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}