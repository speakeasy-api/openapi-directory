package openapisdk.models.shared;


public enum LandlordPhotoModelPhotoTypeEnum {
    PHOTO("Photo"),
    MAP("Map"),
    FLOOR_PLAN("FloorPlan"),
    SITE_MAP("SiteMap"),
    AERIAL_PHOTO("AerialPhoto");

    public final String value;

    private LandlordPhotoModelPhotoTypeEnum(String value) {
        this.value = value;
    }
}
