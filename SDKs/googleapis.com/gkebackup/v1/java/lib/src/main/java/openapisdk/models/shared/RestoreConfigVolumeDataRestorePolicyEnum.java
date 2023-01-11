package openapisdk.models.shared;


public enum RestoreConfigVolumeDataRestorePolicyEnum {
    VOLUME_DATA_RESTORE_POLICY_UNSPECIFIED("VOLUME_DATA_RESTORE_POLICY_UNSPECIFIED"),
    RESTORE_VOLUME_DATA_FROM_BACKUP("RESTORE_VOLUME_DATA_FROM_BACKUP"),
    REUSE_VOLUME_HANDLE_FROM_BACKUP("REUSE_VOLUME_HANDLE_FROM_BACKUP"),
    NO_VOLUME_DATA_RESTORATION("NO_VOLUME_DATA_RESTORATION");

    public final String value;

    private RestoreConfigVolumeDataRestorePolicyEnum(String value) {
        this.value = value;
    }
}
