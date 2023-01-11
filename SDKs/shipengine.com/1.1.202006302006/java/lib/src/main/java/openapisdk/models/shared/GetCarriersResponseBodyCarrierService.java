package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetCarriersResponseBodyCarrierService
 * A service offered by the carrier
**/
public class GetCarriersResponseBodyCarrierService {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("carrier_code")
    public String carrierCode;
    public GetCarriersResponseBodyCarrierService withCarrierCode(String carrierCode) {
        this.carrierCode = carrierCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("carrier_id")
    public java.util.Map<String, Object> carrierId;
    public GetCarriersResponseBodyCarrierService withCarrierId(java.util.Map<String, Object> carrierId) {
        this.carrierId = carrierId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domestic")
    public Boolean domestic;
    public GetCarriersResponseBodyCarrierService withDomestic(Boolean domestic) {
        this.domestic = domestic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("international")
    public Boolean international;
    public GetCarriersResponseBodyCarrierService withInternational(Boolean international) {
        this.international = international;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_multi_package_supported")
    public Boolean isMultiPackageSupported;
    public GetCarriersResponseBodyCarrierService withIsMultiPackageSupported(Boolean isMultiPackageSupported) {
        this.isMultiPackageSupported = isMultiPackageSupported;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GetCarriersResponseBodyCarrierService withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("service_code")
    public String serviceCode;
    public GetCarriersResponseBodyCarrierService withServiceCode(String serviceCode) {
        this.serviceCode = serviceCode;
        return this;
    }
}