package openapisdk.models.shared;


public enum CollectdValueDataSourceTypeEnum {
    UNSPECIFIED_DATA_SOURCE_TYPE("UNSPECIFIED_DATA_SOURCE_TYPE"),
    GAUGE("GAUGE"),
    COUNTER("COUNTER"),
    DERIVE("DERIVE"),
    ABSOLUTE("ABSOLUTE");

    public final String value;

    private CollectdValueDataSourceTypeEnum(String value) {
        this.value = value;
    }
}
