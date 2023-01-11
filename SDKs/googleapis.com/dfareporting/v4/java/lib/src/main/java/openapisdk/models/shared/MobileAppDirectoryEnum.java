package openapisdk.models.shared;


public enum MobileAppDirectoryEnum {
    UNKNOWN("UNKNOWN"),
    APPLE_APP_STORE("APPLE_APP_STORE"),
    GOOGLE_PLAY_STORE("GOOGLE_PLAY_STORE"),
    ROKU_APP_STORE("ROKU_APP_STORE"),
    AMAZON_FIRETV_APP_STORE("AMAZON_FIRETV_APP_STORE"),
    PLAYSTATION_APP_STORE("PLAYSTATION_APP_STORE"),
    APPLE_TV_APP_STORE("APPLE_TV_APP_STORE"),
    XBOX_APP_STORE("XBOX_APP_STORE"),
    SAMSUNG_TV_APP_STORE("SAMSUNG_TV_APP_STORE"),
    ANDROID_TV_APP_STORE("ANDROID_TV_APP_STORE"),
    GENERIC_CTV_APP_STORE("GENERIC_CTV_APP_STORE");

    public final String value;

    private MobileAppDirectoryEnum(String value) {
        this.value = value;
    }
}
