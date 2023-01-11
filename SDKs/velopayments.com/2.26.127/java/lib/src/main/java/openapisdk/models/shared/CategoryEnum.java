package openapisdk.models.shared;


public enum CategoryEnum {
    PAYMENT("payment"),
    PAYEE("payee"),
    DEBIT("debit");

    public final String value;

    private CategoryEnum(String value) {
        this.value = value;
    }
}
