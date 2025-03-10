/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class TestOrder {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deliveryDetails")
    public TestOrderDeliveryDetails deliveryDetails;

    public TestOrder withDeliveryDetails(TestOrderDeliveryDetails deliveryDetails) {
        this.deliveryDetails = deliveryDetails;
        return this;
    }
    
    /**
     * Whether the orderinvoices service should support this order.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableOrderinvoices")
    public Boolean enableOrderinvoices;

    public TestOrder withEnableOrderinvoices(Boolean enableOrderinvoices) {
        this.enableOrderinvoices = enableOrderinvoices;
        return this;
    }
    
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#testOrder`"
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;

    public TestOrder withKind(String kind) {
        this.kind = kind;
        return this;
    }
    
    /**
     * Required. Line items that are ordered. At least one line item must be provided.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lineItems")
    public TestOrderLineItem[] lineItems;

    public TestOrder withLineItems(TestOrderLineItem[] lineItems) {
        this.lineItems = lineItems;
        return this;
    }
    
    /**
     * Restricted. Do not use.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notificationMode")
    public String notificationMode;

    public TestOrder withNotificationMode(String notificationMode) {
        this.notificationMode = notificationMode;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pickupDetails")
    public TestOrderPickupDetails pickupDetails;

    public TestOrder withPickupDetails(TestOrderPickupDetails pickupDetails) {
        this.pickupDetails = pickupDetails;
        return this;
    }
    
    /**
     * Required. The billing address. Acceptable values are: - "`dwight`" - "`jim`" - "`pam`" 
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("predefinedBillingAddress")
    public String predefinedBillingAddress;

    public TestOrder withPredefinedBillingAddress(String predefinedBillingAddress) {
        this.predefinedBillingAddress = predefinedBillingAddress;
        return this;
    }
    
    /**
     * Required. Identifier of one of the predefined delivery addresses for the delivery. Acceptable values are: - "`dwight`" - "`jim`" - "`pam`" 
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("predefinedDeliveryAddress")
    public String predefinedDeliveryAddress;

    public TestOrder withPredefinedDeliveryAddress(String predefinedDeliveryAddress) {
        this.predefinedDeliveryAddress = predefinedDeliveryAddress;
        return this;
    }
    
    /**
     * Required. Email address of the customer. Acceptable values are: - "`pog.dwight.schrute@gmail.com`" - "`pog.jim.halpert@gmail.com`" - "`penpog.pam.beesly@gmail.comding`" 
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("predefinedEmail")
    public String predefinedEmail;

    public TestOrder withPredefinedEmail(String predefinedEmail) {
        this.predefinedEmail = predefinedEmail;
        return this;
    }
    
    /**
     * Identifier of one of the predefined pickup details. Required for orders containing line items with shipping type `pickup`. Acceptable values are: - "`dwight`" - "`jim`" - "`pam`" 
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("predefinedPickupDetails")
    public String predefinedPickupDetails;

    public TestOrder withPredefinedPickupDetails(String predefinedPickupDetails) {
        this.predefinedPickupDetails = predefinedPickupDetails;
        return this;
    }
    
    /**
     * Promotions associated with the order.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("promotions")
    public OrderPromotion[] promotions;

    public TestOrder withPromotions(OrderPromotion[] promotions) {
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
    
    /**
     * Required. The requested shipping option. Acceptable values are: - "`economy`" - "`expedited`" - "`oneDay`" - "`sameDay`" - "`standard`" - "`twoDay`" 
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shippingOption")
    public String shippingOption;

    public TestOrder withShippingOption(String shippingOption) {
        this.shippingOption = shippingOption;
        return this;
    }
    
    public TestOrder(){}
}
