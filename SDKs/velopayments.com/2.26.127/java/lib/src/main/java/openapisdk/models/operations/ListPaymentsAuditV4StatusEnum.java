package openapisdk.models.operations;


public enum ListPaymentsAuditV4StatusEnum {
    ACCEPTED("ACCEPTED"),
    AWAITING_FUNDS("AWAITING_FUNDS"),
    FUNDED("FUNDED"),
    UNFUNDED("UNFUNDED"),
    BANK_PAYMENT_REQUESTED("BANK_PAYMENT_REQUESTED"),
    REJECTED("REJECTED"),
    ACCEPTED_BY_RAILS("ACCEPTED_BY_RAILS"),
    CONFIRMED("CONFIRMED"),
    FAILED("FAILED"),
    RETURNED("RETURNED"),
    WITHDRAWN("WITHDRAWN");

    public final String value;

    private ListPaymentsAuditV4StatusEnum(String value) {
        this.value = value;
    }
}
