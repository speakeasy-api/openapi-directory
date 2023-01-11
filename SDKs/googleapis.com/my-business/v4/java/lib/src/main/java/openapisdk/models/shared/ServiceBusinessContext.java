package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ServiceBusinessContext
 * Additional data for service business verification.
**/
public class ServiceBusinessContext {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public PostalAddress address;
    public ServiceBusinessContext withAddress(PostalAddress address) {
        this.address = address;
        return this;
    }
}