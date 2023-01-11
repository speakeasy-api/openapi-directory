package openapisdk.models.shared;


public enum PaymentAuditCurrencyEnum {
    USD("USD"),
    GBP("GBP"),
    EUR("EUR");

    public final String value;

    private PaymentAuditCurrencyEnum(String value) {
        this.value = value;
    }
}
