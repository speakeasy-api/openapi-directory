package openapisdk.models.shared;


public enum PayoutTypeEnum {
    STANDARD("STANDARD"),
    AS("AS"),
    ON_BEHALF_OF("ON_BEHALF_OF");

    public final String value;

    private PayoutTypeEnum(String value) {
        this.value = value;
    }
}
