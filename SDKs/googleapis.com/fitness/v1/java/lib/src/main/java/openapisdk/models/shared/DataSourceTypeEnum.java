package openapisdk.models.shared;


public enum DataSourceTypeEnum {
    RAW("raw"),
    DERIVED("derived");

    public final String value;

    private DataSourceTypeEnum(String value) {
        this.value = value;
    }
}
