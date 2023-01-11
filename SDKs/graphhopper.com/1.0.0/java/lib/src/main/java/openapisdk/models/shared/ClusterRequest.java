package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ClusterRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configuration")
    public ClusterConfiguration configuration;
    public ClusterRequest withConfiguration(ClusterConfiguration configuration) {
        this.configuration = configuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customers")
    public ClusterCustomer[] customers;
    public ClusterRequest withCustomers(ClusterCustomer[] customers) {
        this.customers = customers;
        return this;
    }
}