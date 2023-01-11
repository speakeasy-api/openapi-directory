package openapisdk.models.shared;


public enum OrderEnum {
    ASC("asc"),
    DESC("desc");

    public final String value;

    private OrderEnum(String value) {
        this.value = value;
    }
}
