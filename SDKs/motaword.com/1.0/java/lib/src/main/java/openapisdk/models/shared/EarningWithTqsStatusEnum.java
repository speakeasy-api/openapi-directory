package openapisdk.models.shared;


public enum EarningWithTqsStatusEnum {
    PAID("paid"),
    PENDING("pending"),
    FAILED("failed");

    public final String value;

    private EarningWithTqsStatusEnum(String value) {
        this.value = value;
    }
}
