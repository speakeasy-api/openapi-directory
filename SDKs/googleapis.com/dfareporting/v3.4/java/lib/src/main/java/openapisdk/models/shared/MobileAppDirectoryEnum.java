package openapisdk.models.shared;


public enum MobileAppDirectoryEnum {
    UNKNOWN("UNKNOWN"),
    APPLE_APP_STORE("APPLE_APP_STORE"),
    GOOGLE_PLAY_STORE("GOOGLE_PLAY_STORE");

    public final String value;

    private MobileAppDirectoryEnum(String value) {
        this.value = value;
    }
}
