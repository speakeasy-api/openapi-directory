package openapisdk.models.shared;


public enum TravelModeEnum {
    CAR("car"),
    TRUCK("truck"),
    TAXI("taxi"),
    BUS("bus"),
    VAN("van"),
    MOTORCYCLE("motorcycle"),
    BICYCLE("bicycle"),
    PEDESTRIAN("pedestrian");

    public final String value;

    private TravelModeEnum(String value) {
        this.value = value;
    }
}
