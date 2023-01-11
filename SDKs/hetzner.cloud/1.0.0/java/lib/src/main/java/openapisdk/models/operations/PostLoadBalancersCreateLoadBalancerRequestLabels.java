package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PostLoadBalancersCreateLoadBalancerRequestLabels
 * User-defined labels (key-value pairs)
**/
public class PostLoadBalancersCreateLoadBalancerRequestLabels {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labelkey")
    public String labelkey;
    public PostLoadBalancersCreateLoadBalancerRequestLabels withLabelkey(String labelkey) {
        this.labelkey = labelkey;
        return this;
    }
}