package openapisdk.models.shared;


public enum RoutingNetworkDataProviderEnum {
    OPENSTREETMAP("openstreetmap"),
    TOMTOM("tomtom");

    public final String value;

    private RoutingNetworkDataProviderEnum(String value) {
        this.value = value;
    }
}
