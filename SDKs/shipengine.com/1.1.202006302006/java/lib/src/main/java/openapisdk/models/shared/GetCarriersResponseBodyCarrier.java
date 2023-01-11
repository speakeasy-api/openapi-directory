package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetCarriersResponseBodyCarrier
 * A carrier object that represents a provider such as UPS, USPS, DHL, etc
 * that has been tied to the current account.
 * 
**/
public class GetCarriersResponseBodyCarrier {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_number")
    public String accountNumber;
    public GetCarriersResponseBodyCarrier withAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("balance")
    public Double balance;
    public GetCarriersResponseBodyCarrier withBalance(Double balance) {
        this.balance = balance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("carrier_code")
    public String carrierCode;
    public GetCarriersResponseBodyCarrier withCarrierCode(String carrierCode) {
        this.carrierCode = carrierCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("carrier_id")
    public java.util.Map<String, Object> carrierId;
    public GetCarriersResponseBodyCarrier withCarrierId(java.util.Map<String, Object> carrierId) {
        this.carrierId = carrierId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("friendly_name")
    public String friendlyName;
    public GetCarriersResponseBodyCarrier withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("has_multi_package_supporting_services")
    public Boolean hasMultiPackageSupportingServices;
    public GetCarriersResponseBodyCarrier withHasMultiPackageSupportingServices(Boolean hasMultiPackageSupportingServices) {
        this.hasMultiPackageSupportingServices = hasMultiPackageSupportingServices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nickname")
    public String nickname;
    public GetCarriersResponseBodyCarrier withNickname(String nickname) {
        this.nickname = nickname;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("options")
    public GetCarriersResponseBodyCarrierCarrierAdvancedOption[] options;
    public GetCarriersResponseBodyCarrier withOptions(GetCarriersResponseBodyCarrierCarrierAdvancedOption[] options) {
        this.options = options;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("packages")
    public GetCarriersResponseBodyCarrierPackageType[] packages;
    public GetCarriersResponseBodyCarrier withPackages(GetCarriersResponseBodyCarrierPackageType[] packages) {
        this.packages = packages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primary")
    public Boolean primary;
    public GetCarriersResponseBodyCarrier withPrimary(Boolean primary) {
        this.primary = primary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requires_funded_amount")
    public Boolean requiresFundedAmount;
    public GetCarriersResponseBodyCarrier withRequiresFundedAmount(Boolean requiresFundedAmount) {
        this.requiresFundedAmount = requiresFundedAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("services")
    public GetCarriersResponseBodyCarrierService[] services;
    public GetCarriersResponseBodyCarrier withServices(GetCarriersResponseBodyCarrierService[] services) {
        this.services = services;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supports_label_messages")
    public Boolean supportsLabelMessages;
    public GetCarriersResponseBodyCarrier withSupportsLabelMessages(Boolean supportsLabelMessages) {
        this.supportsLabelMessages = supportsLabelMessages;
        return this;
    }
}