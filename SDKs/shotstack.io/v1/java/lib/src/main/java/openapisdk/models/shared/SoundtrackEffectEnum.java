package openapisdk.models.shared;


public enum SoundtrackEffectEnum {
    FADE_IN("fadeIn"),
    FADE_OUT("fadeOut"),
    FADE_IN_FADE_OUT("fadeInFadeOut");

    public final String value;

    private SoundtrackEffectEnum(String value) {
        this.value = value;
    }
}
