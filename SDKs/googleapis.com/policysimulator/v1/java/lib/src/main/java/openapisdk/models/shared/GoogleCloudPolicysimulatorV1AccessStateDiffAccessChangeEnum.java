package openapisdk.models.shared;


public enum GoogleCloudPolicysimulatorV1AccessStateDiffAccessChangeEnum {
    ACCESS_CHANGE_TYPE_UNSPECIFIED("ACCESS_CHANGE_TYPE_UNSPECIFIED"),
    NO_CHANGE("NO_CHANGE"),
    UNKNOWN_CHANGE("UNKNOWN_CHANGE"),
    ACCESS_REVOKED("ACCESS_REVOKED"),
    ACCESS_GAINED("ACCESS_GAINED"),
    ACCESS_MAYBE_REVOKED("ACCESS_MAYBE_REVOKED"),
    ACCESS_MAYBE_GAINED("ACCESS_MAYBE_GAINED");

    public final String value;

    private GoogleCloudPolicysimulatorV1AccessStateDiffAccessChangeEnum(String value) {
        this.value = value;
    }
}
