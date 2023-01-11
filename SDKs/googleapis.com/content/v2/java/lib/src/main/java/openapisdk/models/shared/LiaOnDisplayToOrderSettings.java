package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LiaOnDisplayToOrderSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shippingCostPolicyUrl")
    public String shippingCostPolicyUrl;
    public LiaOnDisplayToOrderSettings withShippingCostPolicyUrl(String shippingCostPolicyUrl) {
        this.shippingCostPolicyUrl = shippingCostPolicyUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public LiaOnDisplayToOrderSettings withStatus(String status) {
        this.status = status;
        return this;
    }
}