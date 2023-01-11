package openapisdk.models.shared;


public enum BankTransferNetworkEnum {
    ACH("ach"),
    SAME_DAY_ACH("same-day-ach"),
    WIRE("wire");

    public final String value;

    private BankTransferNetworkEnum(String value) {
        this.value = value;
    }
}
