package openapisdk.models.shared;


public enum FundingAuditStatusEnum {
    PENDING("PENDING"),
    FAILED("FAILED"),
    CREDIT("CREDIT"),
    DEBIT("DEBIT");

    public final String value;

    private FundingAuditStatusEnum(String value) {
        this.value = value;
    }
}
