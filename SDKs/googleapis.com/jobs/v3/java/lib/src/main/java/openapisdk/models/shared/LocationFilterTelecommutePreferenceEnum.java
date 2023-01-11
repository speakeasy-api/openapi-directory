package openapisdk.models.shared;


public enum LocationFilterTelecommutePreferenceEnum {
    TELECOMMUTE_PREFERENCE_UNSPECIFIED("TELECOMMUTE_PREFERENCE_UNSPECIFIED"),
    TELECOMMUTE_EXCLUDED("TELECOMMUTE_EXCLUDED"),
    TELECOMMUTE_ALLOWED("TELECOMMUTE_ALLOWED"),
    TELECOMMUTE_JOBS_EXCLUDED("TELECOMMUTE_JOBS_EXCLUDED");

    public final String value;

    private LocationFilterTelecommutePreferenceEnum(String value) {
        this.value = value;
    }
}
