package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OrderLineItemShippingDetailsMethod {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("carrier")
    public String carrier;
    public OrderLineItemShippingDetailsMethod withCarrier(String carrier) {
        this.carrier = carrier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxDaysInTransit")
    public Long maxDaysInTransit;
    public OrderLineItemShippingDetailsMethod withMaxDaysInTransit(Long maxDaysInTransit) {
        this.maxDaysInTransit = maxDaysInTransit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("methodName")
    public String methodName;
    public OrderLineItemShippingDetailsMethod withMethodName(String methodName) {
        this.methodName = methodName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minDaysInTransit")
    public Long minDaysInTransit;
    public OrderLineItemShippingDetailsMethod withMinDaysInTransit(Long minDaysInTransit) {
        this.minDaysInTransit = minDaysInTransit;
        return this;
    }
}