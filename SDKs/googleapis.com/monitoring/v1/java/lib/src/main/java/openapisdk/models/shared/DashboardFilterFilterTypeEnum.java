package openapisdk.models.shared;


public enum DashboardFilterFilterTypeEnum {
    FILTER_TYPE_UNSPECIFIED("FILTER_TYPE_UNSPECIFIED"),
    RESOURCE_LABEL("RESOURCE_LABEL"),
    METRIC_LABEL("METRIC_LABEL"),
    USER_METADATA_LABEL("USER_METADATA_LABEL"),
    SYSTEM_METADATA_LABEL("SYSTEM_METADATA_LABEL"),
    GROUP("GROUP");

    public final String value;

    private DashboardFilterFilterTypeEnum(String value) {
        this.value = value;
    }
}
