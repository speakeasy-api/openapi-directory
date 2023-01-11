package openapisdk.models.shared;


public enum SecurityContextSecuritiesEnum {
    INSECURE("INSECURE"),
    SSL("SSL");

    public final String value;

    private SecurityContextSecuritiesEnum(String value) {
        this.value = value;
    }
}
