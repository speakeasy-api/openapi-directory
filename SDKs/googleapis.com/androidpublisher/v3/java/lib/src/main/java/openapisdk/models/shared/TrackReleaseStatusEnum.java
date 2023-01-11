package openapisdk.models.shared;


public enum TrackReleaseStatusEnum {
    STATUS_UNSPECIFIED("statusUnspecified"),
    DRAFT("draft"),
    IN_PROGRESS("inProgress"),
    HALTED("halted"),
    COMPLETED("completed");

    public final String value;

    private TrackReleaseStatusEnum(String value) {
        this.value = value;
    }
}
