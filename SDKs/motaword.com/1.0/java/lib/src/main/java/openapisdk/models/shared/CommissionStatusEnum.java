package openapisdk.models.shared;


public enum CommissionStatusEnum {
    COMPLETED("completed"),
    UNCLAIMED("unclaimed"),
    FAILED("failed"),
    SENT("sent"),
    WAITING("waiting"),
    WAITING_INVOICE("waiting_invoice");

    public final String value;

    private CommissionStatusEnum(String value) {
        this.value = value;
    }
}
