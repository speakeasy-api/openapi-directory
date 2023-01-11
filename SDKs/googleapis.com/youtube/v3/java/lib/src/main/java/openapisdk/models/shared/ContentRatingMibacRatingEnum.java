package openapisdk.models.shared;


public enum ContentRatingMibacRatingEnum {
    MIBAC_UNSPECIFIED("mibacUnspecified"),
    MIBAC_T("mibacT"),
    MIBAC_VAP("mibacVap"),
    MIBAC_VM6("mibacVm6"),
    MIBAC_VM12("mibacVm12"),
    MIBAC_VM14("mibacVm14"),
    MIBAC_VM16("mibacVm16"),
    MIBAC_VM18("mibacVm18"),
    MIBAC_UNRATED("mibacUnrated");

    public final String value;

    private ContentRatingMibacRatingEnum(String value) {
        this.value = value;
    }
}
