package openapisdk.models.shared;


public enum ProbingDetailsAbortCauseEnum {
    PROBING_ABORT_CAUSE_UNSPECIFIED("PROBING_ABORT_CAUSE_UNSPECIFIED"),
    PERMISSION_DENIED("PERMISSION_DENIED"),
    NO_SOURCE_LOCATION("NO_SOURCE_LOCATION");

    public final String value;

    private ProbingDetailsAbortCauseEnum(String value) {
        this.value = value;
    }
}
