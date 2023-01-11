package openapisdk.models.shared;


public enum JobStatusSubstateEnum {
    UNSPECIFIED("UNSPECIFIED"),
    SUBMITTED("SUBMITTED"),
    QUEUED("QUEUED"),
    STALE_STATUS("STALE_STATUS");

    public final String value;

    private JobStatusSubstateEnum(String value) {
        this.value = value;
    }
}
