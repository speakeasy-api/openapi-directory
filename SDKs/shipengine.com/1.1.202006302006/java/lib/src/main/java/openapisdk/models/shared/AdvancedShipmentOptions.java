package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AdvancedShipmentOptions
 * Advanced shipment options
**/
public class AdvancedShipmentOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bill_to_account")
    public String billToAccount;
    public AdvancedShipmentOptions withBillToAccount(String billToAccount) {
        this.billToAccount = billToAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bill_to_country_code")
    public java.util.Map<String, Object> billToCountryCode;
    public AdvancedShipmentOptions withBillToCountryCode(java.util.Map<String, Object> billToCountryCode) {
        this.billToCountryCode = billToCountryCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bill_to_party")
    public java.util.Map<String, Object> billToParty;
    public AdvancedShipmentOptions withBillToParty(java.util.Map<String, Object> billToParty) {
        this.billToParty = billToParty;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bill_to_postal_code")
    public String billToPostalCode;
    public AdvancedShipmentOptions withBillToPostalCode(String billToPostalCode) {
        this.billToPostalCode = billToPostalCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collect_on_delivery")
    public CollectOnDelivery collectOnDelivery;
    public AdvancedShipmentOptions withCollectOnDelivery(CollectOnDelivery collectOnDelivery) {
        this.collectOnDelivery = collectOnDelivery;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contains_alcohol")
    public Boolean containsAlcohol;
    public AdvancedShipmentOptions withContainsAlcohol(Boolean containsAlcohol) {
        this.containsAlcohol = containsAlcohol;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_field1")
    public String customField1;
    public AdvancedShipmentOptions withCustomField1(String customField1) {
        this.customField1 = customField1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_field2")
    public String customField2;
    public AdvancedShipmentOptions withCustomField2(String customField2) {
        this.customField2 = customField2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_field3")
    public String customField3;
    public AdvancedShipmentOptions withCustomField3(String customField3) {
        this.customField3 = customField3;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("delivered_duty_paid")
    public Boolean deliveredDutyPaid;
    public AdvancedShipmentOptions withDeliveredDutyPaid(Boolean deliveredDutyPaid) {
        this.deliveredDutyPaid = deliveredDutyPaid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dry_ice")
    public Boolean dryIce;
    public AdvancedShipmentOptions withDryIce(Boolean dryIce) {
        this.dryIce = dryIce;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dry_ice_weight")
    public AdvancedShipmentOptionsWeight dryIceWeight;
    public AdvancedShipmentOptions withDryIceWeight(AdvancedShipmentOptionsWeight dryIceWeight) {
        this.dryIceWeight = dryIceWeight;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("freight_class")
    public String freightClass;
    public AdvancedShipmentOptions withFreightClass(String freightClass) {
        this.freightClass = freightClass;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("non_machinable")
    public Boolean nonMachinable;
    public AdvancedShipmentOptions withNonMachinable(Boolean nonMachinable) {
        this.nonMachinable = nonMachinable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("saturday_delivery")
    public Boolean saturdayDelivery;
    public AdvancedShipmentOptions withSaturdayDelivery(Boolean saturdayDelivery) {
        this.saturdayDelivery = saturdayDelivery;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("use_ups_ground_freight_pricing")
    public Boolean useUpsGroundFreightPricing;
    public AdvancedShipmentOptions withUseUpsGroundFreightPricing(Boolean useUpsGroundFreightPricing) {
        this.useUpsGroundFreightPricing = useUpsGroundFreightPricing;
        return this;
    }
}