package openapisdk.models.shared;


public enum SqlInstancesStartExternalSyncRequestSyncModeEnum {
    EXTERNAL_SYNC_MODE_UNSPECIFIED("EXTERNAL_SYNC_MODE_UNSPECIFIED"),
    ONLINE("ONLINE"),
    OFFLINE("OFFLINE");

    public final String value;

    private SqlInstancesStartExternalSyncRequestSyncModeEnum(String value) {
        this.value = value;
    }
}
