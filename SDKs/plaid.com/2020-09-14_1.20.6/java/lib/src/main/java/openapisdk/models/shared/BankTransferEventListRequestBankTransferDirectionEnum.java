package openapisdk.models.shared;


public enum BankTransferEventListRequestBankTransferDirectionEnum {
    INBOUND("inbound"),
    OUTBOUND("outbound"),
    NULL_("null");

    public final String value;

    private BankTransferEventListRequestBankTransferDirectionEnum(String value) {
        this.value = value;
    }
}
