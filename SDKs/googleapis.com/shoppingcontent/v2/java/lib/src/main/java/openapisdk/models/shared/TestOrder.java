package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TestOrder {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customer")
    public TestOrderCustomer customer;
    public TestOrder withCustomer(TestOrderCustomer customer) {
        this.customer = customer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableOrderinvoices")
    public Boolean enableOrderinvoices;
    public TestOrder withEnableOrderinvoices(Boolean enableOrderinvoices) {
        this.enableOrderinvoices = enableOrderinvoices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public TestOrder withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lineItems")
    public TestOrderLineItem[] lineItems;
    public TestOrder withLineItems(TestOrderLineItem[] lineItems) {
        this.lineItems = lineItems;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notificationMode")
    public String notificationMode;
    public TestOrder withNotificationMode(String notificationMode) {
        this.notificationMode = notificationMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentMethod")
    public TestOrderPaymentMethod paymentMethod;
    public TestOrder withPaymentMethod(TestOrderPaymentMethod paymentMethod) {
        this.paymentMethod = paymentMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("predefinedDeliveryAddress")
    public String predefinedDeliveryAddress;
    public TestOrder withPredefinedDeliveryAddress(String predefinedDeliveryAddress) {
        this.predefinedDeliveryAddress = predefinedDeliveryAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("predefinedPickupDetails")
    public String predefinedPickupDetails;
    public TestOrder withPredefinedPickupDetails(String predefinedPickupDetails) {
        this.predefinedPickupDetails = predefinedPickupDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("promotions")
    public OrderLegacyPromotion[] promotions;
    public TestOrder withPromotions(OrderLegacyPromotion[] promotions) {
        this.promotions = promotions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shippingCost")
    public Price shippingCost;
    public TestOrder withShippingCost(Price shippingCost) {
        this.shippingCost = shippingCost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shippingCostTax")
    public Price shippingCostTax;
    public TestOrder withShippingCostTax(Price shippingCostTax) {
        this.shippingCostTax = shippingCostTax;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shippingOption")
    public String shippingOption;
    public TestOrder withShippingOption(String shippingOption) {
        this.shippingOption = shippingOption;
        return this;
    }
}