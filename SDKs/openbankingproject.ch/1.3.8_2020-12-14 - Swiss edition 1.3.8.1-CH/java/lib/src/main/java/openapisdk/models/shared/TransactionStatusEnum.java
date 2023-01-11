package openapisdk.models.shared;


public enum TransactionStatusEnum {
    ACCC("ACCC"),
    ACCP("ACCP"),
    ACSC("ACSC"),
    ACSP("ACSP"),
    ACTC("ACTC"),
    ACWC("ACWC"),
    ACWP("ACWP"),
    RCVD("RCVD"),
    PDNG("PDNG"),
    RJCT("RJCT"),
    CANC("CANC"),
    ACFC("ACFC"),
    PATC("PATC"),
    PART("PART");

    public final String value;

    private TransactionStatusEnum(String value) {
        this.value = value;
    }
}
