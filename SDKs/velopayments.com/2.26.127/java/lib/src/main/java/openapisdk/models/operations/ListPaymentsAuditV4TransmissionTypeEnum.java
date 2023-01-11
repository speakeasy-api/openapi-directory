package openapisdk.models.operations;


public enum ListPaymentsAuditV4TransmissionTypeEnum {
    ACH("ACH"),
    SAME_DAY_ACH("SAME_DAY_ACH"),
    WIRE("WIRE");

    public final String value;

    private ListPaymentsAuditV4TransmissionTypeEnum(String value) {
        this.value = value;
    }
}
