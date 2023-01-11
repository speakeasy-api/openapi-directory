package openapisdk.models.shared;


public enum LocationAssociationCategoryEnum {
    CATEGORY_UNSPECIFIED("CATEGORY_UNSPECIFIED"),
    COVER("COVER"),
    PROFILE("PROFILE"),
    LOGO("LOGO"),
    EXTERIOR("EXTERIOR"),
    INTERIOR("INTERIOR"),
    PRODUCT("PRODUCT"),
    AT_WORK("AT_WORK"),
    FOOD_AND_DRINK("FOOD_AND_DRINK"),
    MENU("MENU"),
    COMMON_AREA("COMMON_AREA"),
    ROOMS("ROOMS"),
    TEAMS("TEAMS"),
    ADDITIONAL("ADDITIONAL");

    public final String value;

    private LocationAssociationCategoryEnum(String value) {
        this.value = value;
    }
}
