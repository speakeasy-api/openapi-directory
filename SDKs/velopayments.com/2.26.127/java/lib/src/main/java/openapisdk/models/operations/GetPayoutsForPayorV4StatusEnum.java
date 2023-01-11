package openapisdk.models.operations;


public enum GetPayoutsForPayorV4StatusEnum {
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

    private GetPayoutsForPayorV4StatusEnum(String value) {
        this.value = value;
    }
}
