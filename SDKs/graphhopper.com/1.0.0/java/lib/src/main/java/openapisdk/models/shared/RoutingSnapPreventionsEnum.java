package openapisdk.models.shared;


public enum RoutingSnapPreventionsEnum {
    MOTORWAY("motorway"),
    TRUNK("trunk"),
    BRIDGE("bridge"),
    FORD("ford"),
    TUNNEL("tunnel"),
    FERRY("ferry");

    public final String value;

    private RoutingSnapPreventionsEnum(String value) {
        this.value = value;
    }
}
