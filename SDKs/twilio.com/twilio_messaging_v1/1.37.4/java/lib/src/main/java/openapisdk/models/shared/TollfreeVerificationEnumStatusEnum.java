package openapisdk.models.shared;


public enum TollfreeVerificationEnumStatusEnum {
    PENDING_REVIEW("PENDING_REVIEW"),
    IN_REVIEW("IN_REVIEW"),
    TWILIO_APPROVED("TWILIO_APPROVED"),
    TWILIO_REJECTED("TWILIO_REJECTED");

    public final String value;

    private TollfreeVerificationEnumStatusEnum(String value) {
        this.value = value;
    }
}
