package openapisdk.models.operations;


public enum GetPaymentsForPayoutV3TransmissionTypeEnum {
    ACH("ACH"),
    SAME_DAY_ACH("SAME_DAY_ACH"),
    WIRE("WIRE");

    public final String value;

    private GetPaymentsForPayoutV3TransmissionTypeEnum(String value) {
        this.value = value;
    }
}
