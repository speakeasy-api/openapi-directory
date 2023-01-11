package openapisdk.models.shared;


public enum BankTransferEventListRequestBankTransferTypeEnum {
    DEBIT("debit"),
    CREDIT("credit"),
    NULL_("null");

    public final String value;

    private BankTransferEventListRequestBankTransferTypeEnum(String value) {
        this.value = value;
    }
}
