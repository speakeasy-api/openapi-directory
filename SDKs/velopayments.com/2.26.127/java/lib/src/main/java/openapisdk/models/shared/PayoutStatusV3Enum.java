package openapisdk.models.shared;


public enum PayoutStatusV3Enum {
    ACCEPTED("ACCEPTED"),
    REJECTED("REJECTED"),
    SUBMITTED("SUBMITTED"),
    QUOTED("QUOTED"),
    INSTRUCTED("INSTRUCTED"),
    COMPLETED("COMPLETED"),
    INCOMPLETE("INCOMPLETE"),
    CONFIRMED("CONFIRMED"),
    WITHDRAWN("WITHDRAWN");

    public final String value;

    private PayoutStatusV3Enum(String value) {
        this.value = value;
    }
}
