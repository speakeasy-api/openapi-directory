package openapisdk.models.shared;


public enum PaymentServiceEnum {
    PAYMENTS("payments"),
    BULK_PAYMENTS("bulk-payments"),
    PERIODIC_PAYMENTS("periodic-payments");

    public final String value;

    private PaymentServiceEnum(String value) {
        this.value = value;
    }
}
