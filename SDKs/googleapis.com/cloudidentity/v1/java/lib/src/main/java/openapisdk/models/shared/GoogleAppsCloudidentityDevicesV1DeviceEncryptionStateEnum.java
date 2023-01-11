package openapisdk.models.shared;


public enum GoogleAppsCloudidentityDevicesV1DeviceEncryptionStateEnum {
    ENCRYPTION_STATE_UNSPECIFIED("ENCRYPTION_STATE_UNSPECIFIED"),
    UNSUPPORTED_BY_DEVICE("UNSUPPORTED_BY_DEVICE"),
    ENCRYPTED("ENCRYPTED"),
    NOT_ENCRYPTED("NOT_ENCRYPTED");

    public final String value;

    private GoogleAppsCloudidentityDevicesV1DeviceEncryptionStateEnum(String value) {
        this.value = value;
    }
}
