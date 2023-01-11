package openapisdk.models.shared;


public enum PaymentV3StatusEnum {
    SUBMITTED("SUBMITTED"),
    ACCEPTED("ACCEPTED"),
    REJECTED("REJECTED"),
    WITHDRAWN("WITHDRAWN"),
    RETURNED("RETURNED"),
    AWAITING_FUNDS("AWAITING_FUNDS"),
    FUNDED("FUNDED"),
    UNFUNDED("UNFUNDED"),
    CANCELLED("CANCELLED"),
    REQUESTED("REQUESTED");

    public final String value;

    private PaymentV3StatusEnum(String value) {
        this.value = value;
    }
}
