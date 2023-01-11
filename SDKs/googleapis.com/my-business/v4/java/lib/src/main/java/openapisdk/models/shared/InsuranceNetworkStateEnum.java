package openapisdk.models.shared;


public enum InsuranceNetworkStateEnum {
    NETWORK_STATE_UNSPECIFIED("NETWORK_STATE_UNSPECIFIED"),
    ACCEPTED("ACCEPTED"),
    PENDING_ADD("PENDING_ADD"),
    PENDING_DELETE("PENDING_DELETE"),
    NOT_ACCEPTED("NOT_ACCEPTED");

    public final String value;

    private InsuranceNetworkStateEnum(String value) {
        this.value = value;
    }
}
