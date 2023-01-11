package openapisdk.models.shared;


public enum ProbingDetailsResultEnum {
    PROBING_RESULT_UNSPECIFIED("PROBING_RESULT_UNSPECIFIED"),
    REACHABLE("REACHABLE"),
    UNREACHABLE("UNREACHABLE"),
    REACHABILITY_INCONSISTENT("REACHABILITY_INCONSISTENT"),
    UNDETERMINED("UNDETERMINED");

    public final String value;

    private ProbingDetailsResultEnum(String value) {
        this.value = value;
    }
}
