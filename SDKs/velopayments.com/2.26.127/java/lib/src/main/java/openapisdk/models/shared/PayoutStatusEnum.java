package openapisdk.models.shared;


public enum PayoutStatusEnum {
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

    private PayoutStatusEnum(String value) {
        this.value = value;
    }
}
