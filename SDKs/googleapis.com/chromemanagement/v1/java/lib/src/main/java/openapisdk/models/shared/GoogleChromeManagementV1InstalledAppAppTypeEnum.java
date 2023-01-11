package openapisdk.models.shared;


public enum GoogleChromeManagementV1InstalledAppAppTypeEnum {
    APP_TYPE_UNSPECIFIED("APP_TYPE_UNSPECIFIED"),
    EXTENSION("EXTENSION"),
    APP("APP"),
    THEME("THEME"),
    HOSTED_APP("HOSTED_APP"),
    ANDROID_APP("ANDROID_APP");

    public final String value;

    private GoogleChromeManagementV1InstalledAppAppTypeEnum(String value) {
        this.value = value;
    }
}
