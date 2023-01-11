package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetCarrierByIdResponseBodyService
 * A service offered by the carrier
**/
public class GetCarrierByIdResponseBodyService {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("carrier_code")
    public String carrierCode;
    public GetCarrierByIdResponseBodyService withCarrierCode(String carrierCode) {
        this.carrierCode = carrierCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("carrier_id")
    public java.util.Map<String, Object> carrierId;
    public GetCarrierByIdResponseBodyService withCarrierId(java.util.Map<String, Object> carrierId) {
        this.carrierId = carrierId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domestic")
    public Boolean domestic;
    public GetCarrierByIdResponseBodyService withDomestic(Boolean domestic) {
        this.domestic = domestic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("international")
    public Boolean international;
    public GetCarrierByIdResponseBodyService withInternational(Boolean international) {
        this.international = international;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_multi_package_supported")
    public Boolean isMultiPackageSupported;
    public GetCarrierByIdResponseBodyService withIsMultiPackageSupported(Boolean isMultiPackageSupported) {
        this.isMultiPackageSupported = isMultiPackageSupported;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GetCarrierByIdResponseBodyService withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("service_code")
    public String serviceCode;
    public GetCarrierByIdResponseBodyService withServiceCode(String serviceCode) {
        this.serviceCode = serviceCode;
        return this;
    }
}