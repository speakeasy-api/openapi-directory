package openapisdk.models.shared;


public enum MediationReportSpecMetricsEnum {
    METRIC_UNSPECIFIED("METRIC_UNSPECIFIED"),
    AD_REQUESTS("AD_REQUESTS"),
    CLICKS("CLICKS"),
    ESTIMATED_EARNINGS("ESTIMATED_EARNINGS"),
    IMPRESSIONS("IMPRESSIONS"),
    IMPRESSION_CTR("IMPRESSION_CTR"),
    MATCHED_REQUESTS("MATCHED_REQUESTS"),
    MATCH_RATE("MATCH_RATE"),
    OBSERVED_ECPM("OBSERVED_ECPM");

    public final String value;

    private MediationReportSpecMetricsEnum(String value) {
        this.value = value;
    }
}
