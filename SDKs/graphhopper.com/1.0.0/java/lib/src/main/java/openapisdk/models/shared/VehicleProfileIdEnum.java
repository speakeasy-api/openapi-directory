package openapisdk.models.shared;


public enum VehicleProfileIdEnum {
    CAR("car"),
    BIKE("bike"),
    FOOT("foot"),
    HIKE("hike"),
    MTB("mtb"),
    RACINGBIKE("racingbike"),
    SCOOTER("scooter"),
    TRUCK("truck"),
    SMALL_TRUCK("small_truck");

    public final String value;

    private VehicleProfileIdEnum(String value) {
        this.value = value;
    }
}
