package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Order
 * Order. Production access (all methods) requires the order manager role. Sandbox access does not.
**/
public class Order {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("acknowledged")
    public Boolean acknowledged;
    public Order withAcknowledged(Boolean acknowledged) {
        this.acknowledged = acknowledged;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channelType")
    public String channelType;
    public Order withChannelType(String channelType) {
        this.channelType = channelType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customer")
    public OrderCustomer customer;
    public Order withCustomer(OrderCustomer customer) {
        this.customer = customer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deliveryDetails")
    public OrderDeliveryDetails deliveryDetails;
    public Order withDeliveryDetails(OrderDeliveryDetails deliveryDetails) {
        this.deliveryDetails = deliveryDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Order withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public Order withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lineItems")
    public OrderLineItem[] lineItems;
    public Order withLineItems(OrderLineItem[] lineItems) {
        this.lineItems = lineItems;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("merchantId")
    public String merchantId;
    public Order withMerchantId(String merchantId) {
        this.merchantId = merchantId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("merchantOrderId")
    public String merchantOrderId;
    public Order withMerchantOrderId(String merchantOrderId) {
        this.merchantOrderId = merchantOrderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("netAmount")
    public Price netAmount;
    public Order withNetAmount(Price netAmount) {
        this.netAmount = netAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentMethod")
    public OrderPaymentMethod paymentMethod;
    public Order withPaymentMethod(OrderPaymentMethod paymentMethod) {
        this.paymentMethod = paymentMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentStatus")
    public String paymentStatus;
    public Order withPaymentStatus(String paymentStatus) {
        this.paymentStatus = paymentStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pickupDetails")
    public OrderPickupDetails pickupDetails;
    public Order withPickupDetails(OrderPickupDetails pickupDetails) {
        this.pickupDetails = pickupDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("placedDate")
    public String placedDate;
    public Order withPlacedDate(String placedDate) {
        this.placedDate = placedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("promotions")
    public OrderLegacyPromotion[] promotions;
    public Order withPromotions(OrderLegacyPromotion[] promotions) {
        this.promotions = promotions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("refunds")
    public OrderRefund[] refunds;
    public Order withRefunds(OrderRefund[] refunds) {
        this.refunds = refunds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shipments")
    public OrderShipment[] shipments;
    public Order withShipments(OrderShipment[] shipments) {
        this.shipments = shipments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shippingCost")
    public Price shippingCost;
    public Order withShippingCost(Price shippingCost) {
        this.shippingCost = shippingCost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shippingCostTax")
    public Price shippingCostTax;
    public Order withShippingCostTax(Price shippingCostTax) {
        this.shippingCostTax = shippingCostTax;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shippingOption")
    public String shippingOption;
    public Order withShippingOption(String shippingOption) {
        this.shippingOption = shippingOption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public Order withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxCollector")
    public String taxCollector;
    public Order withTaxCollector(String taxCollector) {
        this.taxCollector = taxCollector;
        return this;
    }
}