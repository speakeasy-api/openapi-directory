package openapisdk.models.shared;


public enum DiagnosticLevelEnum {
    UNKNOWN("UNKNOWN"),
    INFORMATION("INFORMATION"),
    WARNING("WARNING"),
    ERROR("ERROR");

    public final String value;

    private DiagnosticLevelEnum(String value) {
        this.value = value;
    }
}
