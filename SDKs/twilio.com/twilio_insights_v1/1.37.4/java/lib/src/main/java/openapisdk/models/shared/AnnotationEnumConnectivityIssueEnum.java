package openapisdk.models.shared;


public enum AnnotationEnumConnectivityIssueEnum {
    UNKNOWN_CONNECTIVITY_ISSUE("unknown_connectivity_issue"),
    NO_CONNECTIVITY_ISSUE("no_connectivity_issue"),
    INVALID_NUMBER("invalid_number"),
    CALLER_ID("caller_id"),
    DROPPED_CALL("dropped_call"),
    NUMBER_REACHABILITY("number_reachability");

    public final String value;

    private AnnotationEnumConnectivityIssueEnum(String value) {
        this.value = value;
    }
}
