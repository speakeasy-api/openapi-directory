/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class OrderCreateFields {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customer")
    public CustomerFieldsWithBillingAddressAndShippingAddressFields customer;

    public OrderCreateFields withCustomer(CustomerFieldsWithBillingAddressAndShippingAddressFields customer) {
        this.customer = customer;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("products")
    public OrderProductOrderCreate[] products;

    public OrderCreateFields withProducts(OrderProductOrderCreate[] products) {
        this.products = products;
        return this;
    }
    
    /**
     * Shipping method id
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shipping_method_id")
    public Integer shippingMethodId;

    public OrderCreateFields withShippingMethodId(Integer shippingMethodId) {
        this.shippingMethodId = shippingMethodId;
        return this;
    }
    
    /**
     * Shipping method name e.g. Royal Mail
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shipping_method_name")
    public String shippingMethodName;

    public OrderCreateFields withShippingMethodName(String shippingMethodName) {
        this.shippingMethodName = shippingMethodName;
        return this;
    }
    
    /**
     * Shipping method's price (applicable if shipping_method_name is provided instead of a shipping_method_id)
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shipping_price")
    public Float shippingPrice;

    public OrderCreateFields withShippingPrice(Float shippingPrice) {
        this.shippingPrice = shippingPrice;
        return this;
    }
    
    /**
     * Status of the Order
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public OrderCreateFieldsStatusEnum status;

    public OrderCreateFields withStatus(OrderCreateFieldsStatusEnum status) {
        this.status = status;
        return this;
    }
    
    public OrderCreateFields(){}
}
