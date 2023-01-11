package openapisdk.models.shared;


public enum PaymentsEnumCaptureEnum {
    PAYMENT_CARD_NUMBER("payment-card-number"),
    EXPIRATION_DATE("expiration-date"),
    SECURITY_CODE("security-code"),
    POSTAL_CODE("postal-code"),
    BANK_ROUTING_NUMBER("bank-routing-number"),
    BANK_ACCOUNT_NUMBER("bank-account-number");

    public final String value;

    private PaymentsEnumCaptureEnum(String value) {
        this.value = value;
    }
}
