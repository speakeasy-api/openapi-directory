package openapisdk.models.shared;


public enum ContentRatingNmcRatingEnum {
    NMC_UNSPECIFIED("nmcUnspecified"),
    NMC_G("nmcG"),
    NMC_PG("nmcPg"),
    NMC_PG13("nmcPg13"),
    NMC_PG15("nmcPg15"),
    NMC15PLUS("nmc15plus"),
    NMC18PLUS("nmc18plus"),
    NMC18TC("nmc18tc"),
    NMC_UNRATED("nmcUnrated");

    public final String value;

    private ContentRatingNmcRatingEnum(String value) {
        this.value = value;
    }
}
