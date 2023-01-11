package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListCarrierServicesResponseBodyService
 * A service offered by the carrier
**/
public class ListCarrierServicesResponseBodyService {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("carrier_code")
    public String carrierCode;
    public ListCarrierServicesResponseBodyService withCarrierCode(String carrierCode) {
        this.carrierCode = carrierCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("carrier_id")
    public java.util.Map<String, Object> carrierId;
    public ListCarrierServicesResponseBodyService withCarrierId(java.util.Map<String, Object> carrierId) {
        this.carrierId = carrierId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domestic")
    public Boolean domestic;
    public ListCarrierServicesResponseBodyService withDomestic(Boolean domestic) {
        this.domestic = domestic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("international")
    public Boolean international;
    public ListCarrierServicesResponseBodyService withInternational(Boolean international) {
        this.international = international;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_multi_package_supported")
    public Boolean isMultiPackageSupported;
    public ListCarrierServicesResponseBodyService withIsMultiPackageSupported(Boolean isMultiPackageSupported) {
        this.isMultiPackageSupported = isMultiPackageSupported;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ListCarrierServicesResponseBodyService withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("service_code")
    public String serviceCode;
    public ListCarrierServicesResponseBodyService withServiceCode(String serviceCode) {
        this.serviceCode = serviceCode;
        return this;
    }
}