package openapisdk.models.shared;


public enum LicenseAudioLicenseEnum {
    AUDIO_PLATFORM("audio_platform"),
    PREMIER_MUSIC_BASIC("premier_music_basic"),
    PREMIER_MUSIC_EXTENDED("premier_music_extended"),
    PREMIER_MUSIC_PRO("premier_music_pro"),
    PREMIER_MUSIC_COMP("premier_music_comp");

    public final String value;

    private LicenseAudioLicenseEnum(String value) {
        this.value = value;
    }
}
