package openapisdk.models.shared;


public enum AppliedLabelChangeDetailTypesEnum {
    TYPE_UNSPECIFIED("TYPE_UNSPECIFIED"),
    LABEL_ADDED("LABEL_ADDED"),
    LABEL_REMOVED("LABEL_REMOVED"),
    LABEL_FIELD_VALUE_CHANGED("LABEL_FIELD_VALUE_CHANGED"),
    LABEL_APPLIED_BY_ITEM_CREATE("LABEL_APPLIED_BY_ITEM_CREATE");

    public final String value;

    private AppliedLabelChangeDetailTypesEnum(String value) {
        this.value = value;
    }
}
