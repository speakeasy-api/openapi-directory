package openapisdk.models.shared;


public enum BundleEnumStatusEnum {
    DRAFT("draft"),
    PENDING_REVIEW("pending-review"),
    IN_REVIEW("in-review"),
    TWILIO_REJECTED("twilio-rejected"),
    TWILIO_APPROVED("twilio-approved"),
    PROVISIONALLY_APPROVED("provisionally-approved");

    public final String value;

    private BundleEnumStatusEnum(String value) {
        this.value = value;
    }
}
