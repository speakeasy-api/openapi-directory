package openapisdk.models.shared;


public enum AchClassEnum {
    ARC("arc"),
    CBR("cbr"),
    CCD("ccd"),
    CIE("cie"),
    COR("cor"),
    CTX("ctx"),
    IAT("iat"),
    MTE("mte"),
    PBR("pbr"),
    POP("pop"),
    POS("pos"),
    PPD("ppd"),
    RCK("rck"),
    TEL("tel"),
    WEB("web");

    public final String value;

    private AchClassEnum(String value) {
        this.value = value;
    }
}
