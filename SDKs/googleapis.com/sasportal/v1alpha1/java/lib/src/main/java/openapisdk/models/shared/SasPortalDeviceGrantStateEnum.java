package openapisdk.models.shared;


public enum SasPortalDeviceGrantStateEnum {
    GRANT_STATE_UNSPECIFIED("GRANT_STATE_UNSPECIFIED"),
    GRANT_STATE_GRANTED("GRANT_STATE_GRANTED"),
    GRANT_STATE_TERMINATED("GRANT_STATE_TERMINATED"),
    GRANT_STATE_SUSPENDED("GRANT_STATE_SUSPENDED"),
    GRANT_STATE_AUTHORIZED("GRANT_STATE_AUTHORIZED"),
    GRANT_STATE_EXPIRED("GRANT_STATE_EXPIRED");

    public final String value;

    private SasPortalDeviceGrantStateEnum(String value) {
        this.value = value;
    }
}
