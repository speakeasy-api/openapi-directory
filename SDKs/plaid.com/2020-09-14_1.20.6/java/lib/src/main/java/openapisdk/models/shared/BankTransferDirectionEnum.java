package openapisdk.models.shared;


public enum BankTransferDirectionEnum {
    OUTBOUND("outbound"),
    INBOUND("inbound"),
    NULL_("null");

    public final String value;

    private BankTransferDirectionEnum(String value) {
        this.value = value;
    }
}
