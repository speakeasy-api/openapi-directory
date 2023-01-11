package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListMetricsScopesByMonitoredProjectResponse
 * Response for the ListMetricsScopesByMonitoredProject method.
**/
public class ListMetricsScopesByMonitoredProjectResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metricsScopes")
    public MetricsScope[] metricsScopes;
    public ListMetricsScopesByMonitoredProjectResponse withMetricsScopes(MetricsScope[] metricsScopes) {
        this.metricsScopes = metricsScopes;
        return this;
    }
}