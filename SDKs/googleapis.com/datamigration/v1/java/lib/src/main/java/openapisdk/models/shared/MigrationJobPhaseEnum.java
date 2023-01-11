package openapisdk.models.shared;


public enum MigrationJobPhaseEnum {
    PHASE_UNSPECIFIED("PHASE_UNSPECIFIED"),
    FULL_DUMP("FULL_DUMP"),
    CDC("CDC"),
    PROMOTE_IN_PROGRESS("PROMOTE_IN_PROGRESS"),
    WAITING_FOR_SOURCE_WRITES_TO_STOP("WAITING_FOR_SOURCE_WRITES_TO_STOP"),
    PREPARING_THE_DUMP("PREPARING_THE_DUMP");

    public final String value;

    private MigrationJobPhaseEnum(String value) {
        this.value = value;
    }
}
