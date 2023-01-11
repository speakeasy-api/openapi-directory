package openapisdk.models.shared;


public enum FieldTypeDefinitionFieldTypeEnum {
    BOOLEANCHECKBOX("booleancheckbox"),
    CHECKBOX("checkbox"),
    DATE("date"),
    FILE("file"),
    NUMBER("number"),
    PHONENUMBER("phonenumber"),
    RADIO("radio"),
    SELECT("select"),
    TEXT("text"),
    TEXTAREA("textarea"),
    CALCULATION_EQUATION("calculation_equation"),
    CALCULATION_ROLLUP("calculation_rollup"),
    CALCULATION_SCORE("calculation_score"),
    CALCULATION_READ_TIME("calculation_read_time"),
    UNKNOWN("unknown");

    public final String value;

    private FieldTypeDefinitionFieldTypeEnum(String value) {
        this.value = value;
    }
}
