package openapisdk.models.shared;


public enum ObWriteInternationalResponse5DataStatusEnum {
    ACCEPTED_CREDIT_SETTLEMENT_COMPLETED("AcceptedCreditSettlementCompleted"),
    ACCEPTED_SETTLEMENT_COMPLETED("AcceptedSettlementCompleted"),
    ACCEPTED_SETTLEMENT_IN_PROCESS("AcceptedSettlementInProcess"),
    ACCEPTED_WITHOUT_POSTING("AcceptedWithoutPosting"),
    PENDING("Pending"),
    REJECTED("Rejected");

    public final String value;

    private ObWriteInternationalResponse5DataStatusEnum(String value) {
        this.value = value;
    }
}
