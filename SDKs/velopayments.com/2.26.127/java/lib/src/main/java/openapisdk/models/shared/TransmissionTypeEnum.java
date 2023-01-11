package openapisdk.models.shared;


public enum TransmissionTypeEnum {
    SAME_DAY_ACH("SAME_DAY_ACH"),
    WIRE("WIRE"),
    ACH("ACH");

    public final String value;

    private TransmissionTypeEnum(String value) {
        this.value = value;
    }
}
