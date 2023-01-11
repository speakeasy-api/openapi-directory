package openapisdk.models.operations;


public enum GetPaymentsForPayoutV3StatusEnum {
    ACCEPTED("ACCEPTED"),
    REJECTED("REJECTED"),
    WITHDRAWN("WITHDRAWN"),
    WITHDRAWABLE("WITHDRAWABLE");

    public final String value;

    private GetPaymentsForPayoutV3StatusEnum(String value) {
        this.value = value;
    }
}
