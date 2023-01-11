package openapisdk.models.shared;


public enum BillingProfileStatusEnum {
    UNDER_REVIEW("UNDER_REVIEW"),
    ACTIVE("ACTIVE"),
    ARCHIVED("ARCHIVED");

    public final String value;

    private BillingProfileStatusEnum(String value) {
        this.value = value;
    }
}
