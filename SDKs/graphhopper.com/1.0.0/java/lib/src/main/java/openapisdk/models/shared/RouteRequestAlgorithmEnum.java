package openapisdk.models.shared;


public enum RouteRequestAlgorithmEnum {
    ROUND_TRIP("round_trip"),
    ALTERNATIVE_ROUTE("alternative_route");

    public final String value;

    private RouteRequestAlgorithmEnum(String value) {
        this.value = value;
    }
}
