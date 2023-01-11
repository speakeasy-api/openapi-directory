package openapisdk.models.shared;


public enum CustomerProfileEnumStatusEnum {
    DRAFT("draft"),
    PENDING_REVIEW("pending-review"),
    IN_REVIEW("in-review"),
    TWILIO_REJECTED("twilio-rejected"),
    TWILIO_APPROVED("twilio-approved");

    public final String value;

    private CustomerProfileEnumStatusEnum(String value) {
        this.value = value;
    }
}
