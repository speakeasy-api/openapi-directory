package openapisdk.models.shared;


public enum NetworkReportSpecSortConditionMetricEnum {
    METRIC_UNSPECIFIED("METRIC_UNSPECIFIED"),
    AD_REQUESTS("AD_REQUESTS"),
    CLICKS("CLICKS"),
    ESTIMATED_EARNINGS("ESTIMATED_EARNINGS"),
    IMPRESSIONS("IMPRESSIONS"),
    IMPRESSION_CTR("IMPRESSION_CTR"),
    IMPRESSION_RPM("IMPRESSION_RPM"),
    MATCHED_REQUESTS("MATCHED_REQUESTS"),
    MATCH_RATE("MATCH_RATE"),
    SHOW_RATE("SHOW_RATE");

    public final String value;

    private NetworkReportSpecSortConditionMetricEnum(String value) {
        this.value = value;
    }
}
