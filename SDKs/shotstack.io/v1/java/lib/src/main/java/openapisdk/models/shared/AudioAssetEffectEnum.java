package openapisdk.models.shared;


public enum AudioAssetEffectEnum {
    FADE_IN("fadeIn"),
    FADE_OUT("fadeOut"),
    FADE_IN_FADE_OUT("fadeInFadeOut");

    public final String value;

    private AudioAssetEffectEnum(String value) {
        this.value = value;
    }
}
