package openapisdk.models.shared;


public enum DynamicGroupStatusStatusEnum {
    STATUS_UNSPECIFIED("STATUS_UNSPECIFIED"),
    UP_TO_DATE("UP_TO_DATE"),
    UPDATING_MEMBERSHIPS("UPDATING_MEMBERSHIPS"),
    INVALID_QUERY("INVALID_QUERY");

    public final String value;

    private DynamicGroupStatusStatusEnum(String value) {
        this.value = value;
    }
}
