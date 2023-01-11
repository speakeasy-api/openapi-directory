package openapisdk.models.shared;


public enum ReachabilityDetailsResultEnum {
    RESULT_UNSPECIFIED("RESULT_UNSPECIFIED"),
    REACHABLE("REACHABLE"),
    UNREACHABLE("UNREACHABLE"),
    AMBIGUOUS("AMBIGUOUS"),
    UNDETERMINED("UNDETERMINED");

    public final String value;

    private ReachabilityDetailsResultEnum(String value) {
        this.value = value;
    }
}
