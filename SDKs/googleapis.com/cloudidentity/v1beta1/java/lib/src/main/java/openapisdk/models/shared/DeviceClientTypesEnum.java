package openapisdk.models.shared;


public enum DeviceClientTypesEnum {
    CLIENT_TYPE_UNSPECIFIED("CLIENT_TYPE_UNSPECIFIED"),
    DRIVE_FS("DRIVE_FS"),
    FUNDAMENTAL("FUNDAMENTAL"),
    ENDPOINT_VERIFICATION("ENDPOINT_VERIFICATION"),
    WINDOWS_ADVANCED("WINDOWS_ADVANCED"),
    GOOGLE_CREDENTIALS_PROVIDER_FOR_WINDOWS("GOOGLE_CREDENTIALS_PROVIDER_FOR_WINDOWS");

    public final String value;

    private DeviceClientTypesEnum(String value) {
        this.value = value;
    }
}
