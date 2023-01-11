package openapisdk.models.shared;


public enum ContentRatingFcbmRatingEnum {
    FCBM_UNSPECIFIED("fcbmUnspecified"),
    FCBM_U("fcbmU"),
    FCBM_PG13("fcbmPg13"),
    FCBM_P13("fcbmP13"),
    FCBM18("fcbm18"),
    FCBM18SX("fcbm18sx"),
    FCBM18PA("fcbm18pa"),
    FCBM18SG("fcbm18sg"),
    FCBM18PL("fcbm18pl"),
    FCBM_UNRATED("fcbmUnrated");

    public final String value;

    private ContentRatingFcbmRatingEnum(String value) {
        this.value = value;
    }
}
