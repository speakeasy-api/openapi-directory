package openapisdk.models.shared;


public enum PlaceActionTypeMetadataPlaceActionTypeEnum {
    PLACE_ACTION_TYPE_UNSPECIFIED("PLACE_ACTION_TYPE_UNSPECIFIED"),
    APPOINTMENT("APPOINTMENT"),
    ONLINE_APPOINTMENT("ONLINE_APPOINTMENT"),
    DINING_RESERVATION("DINING_RESERVATION"),
    FOOD_ORDERING("FOOD_ORDERING"),
    FOOD_DELIVERY("FOOD_DELIVERY"),
    FOOD_TAKEOUT("FOOD_TAKEOUT"),
    SHOP_ONLINE("SHOP_ONLINE");

    public final String value;

    private PlaceActionTypeMetadataPlaceActionTypeEnum(String value) {
        this.value = value;
    }
}
