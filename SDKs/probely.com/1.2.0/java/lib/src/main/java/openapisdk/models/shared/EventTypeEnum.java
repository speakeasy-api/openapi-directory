package openapisdk.models.shared;


public enum EventTypeEnum {
    USER_CREATED("user_created"),
    USER_DELETED("user_deleted"),
    TARGET_CREATED("target_created"),
    TARGET_DELETED("target_deleted"),
    TARGET_VERIFIED("target_verified"),
    TARGET_VERIFICATION_FAILED("target_verification_failed"),
    SCAN_STARTED("scan_started"),
    SCAN_CANCELED("scan_canceled"),
    SCAN_COMPLETED("scan_completed"),
    SCAN_FAILED("scan_failed"),
    FINDING_DETECTED("finding_detected"),
    FINDING_FIXED("finding_fixed");

    public final String value;

    private EventTypeEnum(String value) {
        this.value = value;
    }
}
