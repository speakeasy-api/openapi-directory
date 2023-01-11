package openapisdk.models.shared;


public enum TransactionStatusSbsEnum {
    ACSC("ACSC"),
    ACTC("ACTC"),
    PATC("PATC"),
    RCVD("RCVD"),
    RJCT("RJCT"),
    CANC("CANC");

    public final String value;

    private TransactionStatusSbsEnum(String value) {
        this.value = value;
    }
}
