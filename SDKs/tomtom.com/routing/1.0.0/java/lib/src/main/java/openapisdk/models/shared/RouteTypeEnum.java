package openapisdk.models.shared;


public enum RouteTypeEnum {
    FASTEST("fastest"),
    SHORTEST("shortest"),
    ECO("eco"),
    THRILLING("thrilling");

    public final String value;

    private RouteTypeEnum(String value) {
        this.value = value;
    }
}
