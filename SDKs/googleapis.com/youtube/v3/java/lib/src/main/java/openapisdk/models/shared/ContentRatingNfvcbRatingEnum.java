package openapisdk.models.shared;


public enum ContentRatingNfvcbRatingEnum {
    NFVCB_UNSPECIFIED("nfvcbUnspecified"),
    NFVCB_G("nfvcbG"),
    NFVCB_PG("nfvcbPg"),
    NFVCB12("nfvcb12"),
    NFVCB12A("nfvcb12a"),
    NFVCB15("nfvcb15"),
    NFVCB18("nfvcb18"),
    NFVCB_RE("nfvcbRe"),
    NFVCB_UNRATED("nfvcbUnrated");

    public final String value;

    private ContentRatingNfvcbRatingEnum(String value) {
        this.value = value;
    }
}
