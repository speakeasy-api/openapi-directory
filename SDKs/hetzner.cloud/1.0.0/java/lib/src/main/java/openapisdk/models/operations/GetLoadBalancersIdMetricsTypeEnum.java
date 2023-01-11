package openapisdk.models.operations;


public enum GetLoadBalancersIdMetricsTypeEnum {
    OPEN_CONNECTIONS("open_connections"),
    CONNECTIONS_PER_SECOND("connections_per_second"),
    REQUESTS_PER_SECOND("requests_per_second"),
    BANDWIDTH("bandwidth");

    public final String value;

    private GetLoadBalancersIdMetricsTypeEnum(String value) {
        this.value = value;
    }
}
