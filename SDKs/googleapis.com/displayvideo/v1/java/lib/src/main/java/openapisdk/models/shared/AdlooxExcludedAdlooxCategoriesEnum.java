package openapisdk.models.shared;


public enum AdlooxExcludedAdlooxCategoriesEnum {
    ADLOOX_UNSPECIFIED("ADLOOX_UNSPECIFIED"),
    ADULT_CONTENT_HARD("ADULT_CONTENT_HARD"),
    ADULT_CONTENT_SOFT("ADULT_CONTENT_SOFT"),
    ILLEGAL_CONTENT("ILLEGAL_CONTENT"),
    BORDERLINE_CONTENT("BORDERLINE_CONTENT"),
    DISCRIMINATORY_CONTENT("DISCRIMINATORY_CONTENT"),
    VIOLENT_CONTENT_WEAPONS("VIOLENT_CONTENT_WEAPONS"),
    LOW_VIEWABILITY_DOMAINS("LOW_VIEWABILITY_DOMAINS"),
    FRAUD("FRAUD");

    public final String value;

    private AdlooxExcludedAdlooxCategoriesEnum(String value) {
        this.value = value;
    }
}
