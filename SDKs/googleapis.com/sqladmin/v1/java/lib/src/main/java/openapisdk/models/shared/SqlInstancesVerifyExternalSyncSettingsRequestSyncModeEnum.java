package openapisdk.models.shared;


public enum SqlInstancesVerifyExternalSyncSettingsRequestSyncModeEnum {
    EXTERNAL_SYNC_MODE_UNSPECIFIED("EXTERNAL_SYNC_MODE_UNSPECIFIED"),
    ONLINE("ONLINE"),
    OFFLINE("OFFLINE");

    public final String value;

    private SqlInstancesVerifyExternalSyncSettingsRequestSyncModeEnum(String value) {
        this.value = value;
    }
}
