package openapisdk.models.shared;


public enum BankTransferTypeEnum {
    DEBIT("debit"),
    CREDIT("credit");

    public final String value;

    private BankTransferTypeEnum(String value) {
        this.value = value;
    }
}
