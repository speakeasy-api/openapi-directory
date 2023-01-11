package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ObRisk1
 * The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Payments.
**/
public class ObRisk1 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeliveryAddress")
    public ObRisk1DeliveryAddress deliveryAddress;
    public ObRisk1 withDeliveryAddress(ObRisk1DeliveryAddress deliveryAddress) {
        this.deliveryAddress = deliveryAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MerchantCategoryCode")
    public String merchantCategoryCode;
    public ObRisk1 withMerchantCategoryCode(String merchantCategoryCode) {
        this.merchantCategoryCode = merchantCategoryCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MerchantCustomerIdentification")
    public String merchantCustomerIdentification;
    public ObRisk1 withMerchantCustomerIdentification(String merchantCustomerIdentification) {
        this.merchantCustomerIdentification = merchantCustomerIdentification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PaymentContextCode")
    public ObRisk1PaymentContextCodeEnum paymentContextCode;
    public ObRisk1 withPaymentContextCode(ObRisk1PaymentContextCodeEnum paymentContextCode) {
        this.paymentContextCode = paymentContextCode;
        return this;
    }
}