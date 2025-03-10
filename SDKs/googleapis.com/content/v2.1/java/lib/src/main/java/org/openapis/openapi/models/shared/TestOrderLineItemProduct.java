/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class TestOrderLineItemProduct {
    /**
     * Required. Brand of the item.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("brand")
    public String brand;

    public TestOrderLineItemProduct withBrand(String brand) {
        this.brand = brand;
        return this;
    }
    
    /**
     * Required. Condition or state of the item. Acceptable values are: - "`new`" 
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("condition")
    public String condition;

    public TestOrderLineItemProduct withCondition(String condition) {
        this.condition = condition;
        return this;
    }
    
    /**
     * Required. The two-letter ISO 639-1 language code for the item. Acceptable values are: - "`en`" - "`fr`" 
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentLanguage")
    public String contentLanguage;

    public TestOrderLineItemProduct withContentLanguage(String contentLanguage) {
        this.contentLanguage = contentLanguage;
        return this;
    }
    
    /**
     * Fees for the item. Optional.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fees")
    public OrderLineItemProductFee[] fees;

    public TestOrderLineItemProduct withFees(OrderLineItemProductFee[] fees) {
        this.fees = fees;
        return this;
    }
    
    /**
     * Global Trade Item Number (GTIN) of the item. Optional.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gtin")
    public String gtin;

    public TestOrderLineItemProduct withGtin(String gtin) {
        this.gtin = gtin;
        return this;
    }
    
    /**
     * Required. URL of an image of the item.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageLink")
    public String imageLink;

    public TestOrderLineItemProduct withImageLink(String imageLink) {
        this.imageLink = imageLink;
        return this;
    }
    
    /**
     * Shared identifier for all variants of the same product. Optional.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemGroupId")
    public String itemGroupId;

    public TestOrderLineItemProduct withItemGroupId(String itemGroupId) {
        this.itemGroupId = itemGroupId;
        return this;
    }
    
    /**
     * Manufacturer Part Number (MPN) of the item. Optional.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mpn")
    public String mpn;

    public TestOrderLineItemProduct withMpn(String mpn) {
        this.mpn = mpn;
        return this;
    }
    
    /**
     * Required. An identifier of the item.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offerId")
    public String offerId;

    public TestOrderLineItemProduct withOfferId(String offerId) {
        this.offerId = offerId;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price")
    public Price price;

    public TestOrderLineItemProduct withPrice(Price price) {
        this.price = price;
        return this;
    }
    
    /**
     * Required. The CLDR territory code of the target country of the product.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetCountry")
    public String targetCountry;

    public TestOrderLineItemProduct withTargetCountry(String targetCountry) {
        this.targetCountry = targetCountry;
        return this;
    }
    
    /**
     * Required. The title of the product.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;

    public TestOrderLineItemProduct withTitle(String title) {
        this.title = title;
        return this;
    }
    
    /**
     * Variant attributes for the item. Optional.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("variantAttributes")
    public OrderLineItemProductVariantAttribute[] variantAttributes;

    public TestOrderLineItemProduct withVariantAttributes(OrderLineItemProductVariantAttribute[] variantAttributes) {
        this.variantAttributes = variantAttributes;
        return this;
    }
    
    public TestOrderLineItemProduct(){}
}
