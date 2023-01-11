package openapisdk.models.shared;


public enum VehicleTypeNetworkDataProviderEnum {
    OPENSTREETMAP("openstreetmap"),
    TOMTOM("tomtom");

    public final String value;

    private VehicleTypeNetworkDataProviderEnum(String value) {
        this.value = value;
    }
}
