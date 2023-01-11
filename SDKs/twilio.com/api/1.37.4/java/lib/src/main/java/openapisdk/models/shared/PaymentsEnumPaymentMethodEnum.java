package openapisdk.models.shared;


public enum PaymentsEnumPaymentMethodEnum {
    CREDIT_CARD("credit-card"),
    ACH_DEBIT("ach-debit");

    public final String value;

    private PaymentsEnumPaymentMethodEnum(String value) {
        this.value = value;
    }
}
