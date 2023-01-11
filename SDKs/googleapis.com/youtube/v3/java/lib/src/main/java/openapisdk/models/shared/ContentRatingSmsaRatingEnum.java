package openapisdk.models.shared;


public enum ContentRatingSmsaRatingEnum {
    SMSA_UNSPECIFIED("smsaUnspecified"),
    SMSA_A("smsaA"),
    SMSA7("smsa7"),
    SMSA11("smsa11"),
    SMSA15("smsa15"),
    SMSA_UNRATED("smsaUnrated");

    public final String value;

    private ContentRatingSmsaRatingEnum(String value) {
        this.value = value;
    }
}
