package openapisdk.models.shared;


public enum PaymentsEnumBankAccountTypeEnum {
    CONSUMER_CHECKING("consumer-checking"),
    CONSUMER_SAVINGS("consumer-savings"),
    COMMERCIAL_CHECKING("commercial-checking");

    public final String value;

    private PaymentsEnumBankAccountTypeEnum(String value) {
        this.value = value;
    }
}
