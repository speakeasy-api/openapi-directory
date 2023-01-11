package openapisdk.models.shared;


public enum ContentRatingBfvcRatingEnum {
    BFVC_UNSPECIFIED("bfvcUnspecified"),
    BFVC_G("bfvcG"),
    BFVC_E("bfvcE"),
    BFVC13("bfvc13"),
    BFVC15("bfvc15"),
    BFVC18("bfvc18"),
    BFVC20("bfvc20"),
    BFVC_B("bfvcB"),
    BFVC_UNRATED("bfvcUnrated");

    public final String value;

    private ContentRatingBfvcRatingEnum(String value) {
        this.value = value;
    }
}
