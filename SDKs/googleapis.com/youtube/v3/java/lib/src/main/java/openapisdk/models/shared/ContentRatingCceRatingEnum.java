package openapisdk.models.shared;


public enum ContentRatingCceRatingEnum {
    CCE_UNSPECIFIED("cceUnspecified"),
    CCE_M4("cceM4"),
    CCE_M6("cceM6"),
    CCE_M12("cceM12"),
    CCE_M16("cceM16"),
    CCE_M18("cceM18"),
    CCE_UNRATED("cceUnrated"),
    CCE_M14("cceM14");

    public final String value;

    private ContentRatingCceRatingEnum(String value) {
        this.value = value;
    }
}
