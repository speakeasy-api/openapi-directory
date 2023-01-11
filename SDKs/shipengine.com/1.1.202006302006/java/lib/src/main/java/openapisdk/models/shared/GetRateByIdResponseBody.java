package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * GetRateByIdResponseBody
 * A rate
**/
public class GetRateByIdResponseBody {
    @JsonProperty("carrier_code")
    public String carrierCode;
    public GetRateByIdResponseBody withCarrierCode(String carrierCode) {
        this.carrierCode = carrierCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("carrier_delivery_days")
    public String carrierDeliveryDays;
    public GetRateByIdResponseBody withCarrierDeliveryDays(String carrierDeliveryDays) {
        this.carrierDeliveryDays = carrierDeliveryDays;
        return this;
    }
    @JsonProperty("carrier_friendly_name")
    public String carrierFriendlyName;
    public GetRateByIdResponseBody withCarrierFriendlyName(String carrierFriendlyName) {
        this.carrierFriendlyName = carrierFriendlyName;
        return this;
    }
    @JsonProperty("carrier_id")
    public java.util.Map<String, Object> carrierId;
    public GetRateByIdResponseBody withCarrierId(java.util.Map<String, Object> carrierId) {
        this.carrierId = carrierId;
        return this;
    }
    @JsonProperty("carrier_nickname")
    public String carrierNickname;
    public GetRateByIdResponseBody withCarrierNickname(String carrierNickname) {
        this.carrierNickname = carrierNickname;
        return this;
    }
    @JsonProperty("confirmation_amount")
    public GetRateByIdResponseBodyMonetaryValue confirmationAmount;
    public GetRateByIdResponseBody withConfirmationAmount(GetRateByIdResponseBodyMonetaryValue confirmationAmount) {
        this.confirmationAmount = confirmationAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("delivery_days")
    public Integer deliveryDays;
    public GetRateByIdResponseBody withDeliveryDays(Integer deliveryDays) {
        this.deliveryDays = deliveryDays;
        return this;
    }
    @JsonProperty("error_messages")
    public String[] errorMessages;
    public GetRateByIdResponseBody withErrorMessages(String[] errorMessages) {
        this.errorMessages = errorMessages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("estimated_delivery_date")
    public java.util.Map<String, Object> estimatedDeliveryDate;
    public GetRateByIdResponseBody withEstimatedDeliveryDate(java.util.Map<String, Object> estimatedDeliveryDate) {
        this.estimatedDeliveryDate = estimatedDeliveryDate;
        return this;
    }
    @JsonProperty("guaranteed_service")
    public Boolean guaranteedService;
    public GetRateByIdResponseBody withGuaranteedService(Boolean guaranteedService) {
        this.guaranteedService = guaranteedService;
        return this;
    }
    @JsonProperty("insurance_amount")
    public GetRateByIdResponseBodyMonetaryValue insuranceAmount;
    public GetRateByIdResponseBody withInsuranceAmount(GetRateByIdResponseBodyMonetaryValue insuranceAmount) {
        this.insuranceAmount = insuranceAmount;
        return this;
    }
    @JsonProperty("negotiated_rate")
    public Boolean negotiatedRate;
    public GetRateByIdResponseBody withNegotiatedRate(Boolean negotiatedRate) {
        this.negotiatedRate = negotiatedRate;
        return this;
    }
    @JsonProperty("other_amount")
    public GetRateByIdResponseBodyMonetaryValue otherAmount;
    public GetRateByIdResponseBody withOtherAmount(GetRateByIdResponseBodyMonetaryValue otherAmount) {
        this.otherAmount = otherAmount;
        return this;
    }
    @JsonProperty("package_type")
    public String packageType;
    public GetRateByIdResponseBody withPackageType(String packageType) {
        this.packageType = packageType;
        return this;
    }
    @JsonProperty("rate_id")
    public java.util.Map<String, Object> rateId;
    public GetRateByIdResponseBody withRateId(java.util.Map<String, Object> rateId) {
        this.rateId = rateId;
        return this;
    }
    @JsonProperty("rate_type")
    public java.util.Map<String, Object> rateType;
    public GetRateByIdResponseBody withRateType(java.util.Map<String, Object> rateType) {
        this.rateType = rateType;
        return this;
    }
    @JsonProperty("service_code")
    public String serviceCode;
    public GetRateByIdResponseBody withServiceCode(String serviceCode) {
        this.serviceCode = serviceCode;
        return this;
    }
    @JsonProperty("service_type")
    public String serviceType;
    public GetRateByIdResponseBody withServiceType(String serviceType) {
        this.serviceType = serviceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("ship_date")
    public OffsetDateTime shipDate;
    public GetRateByIdResponseBody withShipDate(OffsetDateTime shipDate) {
        this.shipDate = shipDate;
        return this;
    }
    @JsonProperty("shipping_amount")
    public GetRateByIdResponseBodyMonetaryValue shippingAmount;
    public GetRateByIdResponseBody withShippingAmount(GetRateByIdResponseBodyMonetaryValue shippingAmount) {
        this.shippingAmount = shippingAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tax_amount")
    public GetRateByIdResponseBodyMonetaryValue taxAmount;
    public GetRateByIdResponseBody withTaxAmount(GetRateByIdResponseBodyMonetaryValue taxAmount) {
        this.taxAmount = taxAmount;
        return this;
    }
    @JsonProperty("trackable")
    public Boolean trackable;
    public GetRateByIdResponseBody withTrackable(Boolean trackable) {
        this.trackable = trackable;
        return this;
    }
    @JsonProperty("validation_status")
    public java.util.Map<String, Object> validationStatus;
    public GetRateByIdResponseBody withValidationStatus(java.util.Map<String, Object> validationStatus) {
        this.validationStatus = validationStatus;
        return this;
    }
    @JsonProperty("warning_messages")
    public String[] warningMessages;
    public GetRateByIdResponseBody withWarningMessages(String[] warningMessages) {
        this.warningMessages = warningMessages;
        return this;
    }
    @JsonProperty("zone")
    public Integer zone;
    public GetRateByIdResponseBody withZone(Integer zone) {
        this.zone = zone;
        return this;
    }
}