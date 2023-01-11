package openapisdk.models.shared;


public enum LocationFeaturesEnum {
    LOCATION_FEATURE_UNSPECIFIED("LOCATION_FEATURE_UNSPECIFIED"),
    FIRESTORE("FIRESTORE"),
    DEFAULT_STORAGE("DEFAULT_STORAGE"),
    FUNCTIONS("FUNCTIONS");

    public final String value;

    private LocationFeaturesEnum(String value) {
        this.value = value;
    }
}
