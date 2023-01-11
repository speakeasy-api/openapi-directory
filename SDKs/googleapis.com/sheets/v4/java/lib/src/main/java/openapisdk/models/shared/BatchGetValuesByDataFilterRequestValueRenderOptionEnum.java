package openapisdk.models.shared;


public enum BatchGetValuesByDataFilterRequestValueRenderOptionEnum {
    FORMATTED_VALUE("FORMATTED_VALUE"),
    UNFORMATTED_VALUE("UNFORMATTED_VALUE"),
    FORMULA("FORMULA");

    public final String value;

    private BatchGetValuesByDataFilterRequestValueRenderOptionEnum(String value) {
        this.value = value;
    }
}
