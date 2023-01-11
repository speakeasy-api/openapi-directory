package openapisdk.models.shared;


public enum MaintenanceWindowUpdateTrackEnum {
    SQL_UPDATE_TRACK_UNSPECIFIED("SQL_UPDATE_TRACK_UNSPECIFIED"),
    CANARY("canary"),
    STABLE("stable");

    public final String value;

    private MaintenanceWindowUpdateTrackEnum(String value) {
        this.value = value;
    }
}
