package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PickupServicesPickupService {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("carrierName")
    public String carrierName;
    public PickupServicesPickupService withCarrierName(String carrierName) {
        this.carrierName = carrierName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;
    public PickupServicesPickupService withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceName")
    public String serviceName;
    public PickupServicesPickupService withServiceName(String serviceName) {
        this.serviceName = serviceName;
        return this;
    }
}