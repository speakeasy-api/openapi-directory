package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CustomerListConfigurationsResponse
 * Response message of customer's listing configuration.
**/
public class CustomerListConfigurationsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configurations")
    public Configuration[] configurations;
    public CustomerListConfigurationsResponse withConfigurations(Configuration[] configurations) {
        this.configurations = configurations;
        return this;
    }
}