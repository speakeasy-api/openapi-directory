package openapisdk.models.operations;


public enum GetOntologyTermGraphGraphTypeEnum {
    TOPOLOGY_GRAPH("topology_graph"),
    REGULATES_TRANSITIVITY_GRAPH("regulates_transitivity_graph"),
    NEIGHBORHOOD_GRAPH("neighborhood_graph"),
    NEIGHBORHOOD_LIMITED_GRAPH("neighborhood_limited_graph");

    public final String value;

    private GetOntologyTermGraphGraphTypeEnum(String value) {
        this.value = value;
    }
}
