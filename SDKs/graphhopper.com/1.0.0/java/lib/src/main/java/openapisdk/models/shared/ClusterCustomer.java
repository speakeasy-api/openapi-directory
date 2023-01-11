package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ClusterCustomer {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public ClusterCustomerAddress address;
    public ClusterCustomer withAddress(ClusterCustomerAddress address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ClusterCustomer withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quantity")
    public Double quantity;
    public ClusterCustomer withQuantity(Double quantity) {
        this.quantity = quantity;
        return this;
    }
}