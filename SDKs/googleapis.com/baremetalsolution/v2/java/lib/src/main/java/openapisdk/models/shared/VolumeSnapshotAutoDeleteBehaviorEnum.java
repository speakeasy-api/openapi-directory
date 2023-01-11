package openapisdk.models.shared;


public enum VolumeSnapshotAutoDeleteBehaviorEnum {
    SNAPSHOT_AUTO_DELETE_BEHAVIOR_UNSPECIFIED("SNAPSHOT_AUTO_DELETE_BEHAVIOR_UNSPECIFIED"),
    DISABLED("DISABLED"),
    OLDEST_FIRST("OLDEST_FIRST"),
    NEWEST_FIRST("NEWEST_FIRST");

    public final String value;

    private VolumeSnapshotAutoDeleteBehaviorEnum(String value) {
        this.value = value;
    }
}
