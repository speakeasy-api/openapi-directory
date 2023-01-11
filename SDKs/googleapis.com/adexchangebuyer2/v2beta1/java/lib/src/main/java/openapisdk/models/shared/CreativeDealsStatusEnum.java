package openapisdk.models.shared;


public enum CreativeDealsStatusEnum {
    STATUS_UNSPECIFIED("STATUS_UNSPECIFIED"),
    NOT_CHECKED("NOT_CHECKED"),
    CONDITIONALLY_APPROVED("CONDITIONALLY_APPROVED"),
    APPROVED("APPROVED"),
    DISAPPROVED("DISAPPROVED"),
    PENDING_REVIEW("PENDING_REVIEW"),
    STATUS_TYPE_UNSPECIFIED("STATUS_TYPE_UNSPECIFIED");

    public final String value;

    private CreativeDealsStatusEnum(String value) {
        this.value = value;
    }
}
