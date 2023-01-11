package openapisdk.models.shared;


public enum ImportJobStateEnum {
    IMPORT_JOB_STATE_UNSPECIFIED("IMPORT_JOB_STATE_UNSPECIFIED"),
    PENDING_GENERATION("PENDING_GENERATION"),
    ACTIVE("ACTIVE"),
    EXPIRED("EXPIRED");

    public final String value;

    private ImportJobStateEnum(String value) {
        this.value = value;
    }
}
