package openapisdk.models.shared;


public enum OrderEnum {
    ASC_LOWER("asc"),
    DESC_LOWER("desc"),
    ASC_UPPER("ASC"),
    DESC_UPPER("DESC");

    public final String value;

    private OrderEnum(String value) {
        this.value = value;
    }
}
