package openapisdk.models.shared;


public enum ContentRatingCscfRatingEnum {
    CSCF_UNSPECIFIED("cscfUnspecified"),
    CSCF_AL("cscfAl"),
    CSCF_A("cscfA"),
    CSCF6("cscf6"),
    CSCF9("cscf9"),
    CSCF12("cscf12"),
    CSCF16("cscf16"),
    CSCF18("cscf18"),
    CSCF_UNRATED("cscfUnrated");

    public final String value;

    private ContentRatingCscfRatingEnum(String value) {
        this.value = value;
    }
}
