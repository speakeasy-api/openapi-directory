package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PickupCarrierService {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("carrierName")
    public String carrierName;
    public PickupCarrierService withCarrierName(String carrierName) {
        this.carrierName = carrierName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceName")
    public String serviceName;
    public PickupCarrierService withServiceName(String serviceName) {
        this.serviceName = serviceName;
        return this;
    }
}