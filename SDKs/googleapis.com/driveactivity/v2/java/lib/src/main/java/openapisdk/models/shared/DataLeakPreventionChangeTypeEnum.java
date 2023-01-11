package openapisdk.models.shared;


public enum DataLeakPreventionChangeTypeEnum {
    TYPE_UNSPECIFIED("TYPE_UNSPECIFIED"),
    FLAGGED("FLAGGED"),
    CLEARED("CLEARED");

    public final String value;

    private DataLeakPreventionChangeTypeEnum(String value) {
        this.value = value;
    }
}
