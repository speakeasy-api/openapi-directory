package openapisdk.models.operations;


public enum GetPaymentsForPayoutV4TransmissionTypeEnum {
    ACH("ACH"),
    SAME_DAY_ACH("SAME_DAY_ACH"),
    WIRE("WIRE");

    public final String value;

    private GetPaymentsForPayoutV4TransmissionTypeEnum(String value) {
        this.value = value;
    }
}
