package openapisdk.models.shared;


public enum DataLabelTypeEnum {
    DATA_LABEL_TYPE_UNSPECIFIED("DATA_LABEL_TYPE_UNSPECIFIED"),
    NONE("NONE"),
    DATA("DATA"),
    CUSTOM("CUSTOM");

    public final String value;

    private DataLabelTypeEnum(String value) {
        this.value = value;
    }
}
