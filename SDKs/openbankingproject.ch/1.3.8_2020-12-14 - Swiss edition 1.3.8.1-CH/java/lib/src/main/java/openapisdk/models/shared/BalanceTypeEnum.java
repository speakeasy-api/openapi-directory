package openapisdk.models.shared;


public enum BalanceTypeEnum {
    CLOSING_BOOKED("closingBooked"),
    EXPECTED("expected"),
    OPENING_BOOKED("openingBooked"),
    INTERIM_AVAILABLE("interimAvailable"),
    INTERIM_BOOKED("interimBooked"),
    FORWARD_AVAILABLE("forwardAvailable"),
    NON_INVOICED("nonInvoiced");

    public final String value;

    private BalanceTypeEnum(String value) {
        this.value = value;
    }
}
