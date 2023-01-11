package openapisdk.models.shared;


public enum AudioRenderTimelineSpanRegionKeyTonicQualityEnum {
    MAJOR("major"),
    NATURAL_MINOR("natural_minor"),
    HARMONIC_MINOR("harmonic_minor"),
    MELODIC_MINOR("melodic_minor"),
    IONIAN("ionian"),
    DORIAN("dorian"),
    PHRYGIAN("phrygian"),
    LYDIAN("lydian"),
    MIXOLYDIAN("mixolydian"),
    AEOLIAN("aeolian"),
    LOCRIAN("locrian");

    public final String value;

    private AudioRenderTimelineSpanRegionKeyTonicQualityEnum(String value) {
        this.value = value;
    }
}
