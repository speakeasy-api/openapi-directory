package openapisdk.models.shared;


public enum ObExternalAccountSubType1CodeEnum {
    CHARGE_CARD("ChargeCard"),
    CREDIT_CARD("CreditCard"),
    CURRENT_ACCOUNT("CurrentAccount"),
    E_MONEY("EMoney"),
    LOAN("Loan"),
    MORTGAGE("Mortgage"),
    PRE_PAID_CARD("PrePaidCard"),
    SAVINGS("Savings");

    public final String value;

    private ObExternalAccountSubType1CodeEnum(String value) {
        this.value = value;
    }
}
