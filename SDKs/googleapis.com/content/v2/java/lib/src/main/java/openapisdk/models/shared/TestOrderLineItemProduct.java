package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TestOrderLineItemProduct {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("brand")
    public String brand;
    public TestOrderLineItemProduct withBrand(String brand) {
        this.brand = brand;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channel")
    public String channel;
    public TestOrderLineItemProduct withChannel(String channel) {
        this.channel = channel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("condition")
    public String condition;
    public TestOrderLineItemProduct withCondition(String condition) {
        this.condition = condition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentLanguage")
    public String contentLanguage;
    public TestOrderLineItemProduct withContentLanguage(String contentLanguage) {
        this.contentLanguage = contentLanguage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fees")
    public OrderLineItemProductFee[] fees;
    public TestOrderLineItemProduct withFees(OrderLineItemProductFee[] fees) {
        this.fees = fees;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gtin")
    public String gtin;
    public TestOrderLineItemProduct withGtin(String gtin) {
        this.gtin = gtin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageLink")
    public String imageLink;
    public TestOrderLineItemProduct withImageLink(String imageLink) {
        this.imageLink = imageLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemGroupId")
    public String itemGroupId;
    public TestOrderLineItemProduct withItemGroupId(String itemGroupId) {
        this.itemGroupId = itemGroupId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mpn")
    public String mpn;
    public TestOrderLineItemProduct withMpn(String mpn) {
        this.mpn = mpn;
        return this;
    }
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
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetCountry")
    public String targetCountry;
    public TestOrderLineItemProduct withTargetCountry(String targetCountry) {
        this.targetCountry = targetCountry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public TestOrderLineItemProduct withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("variantAttributes")
    public OrderLineItemProductVariantAttribute[] variantAttributes;
    public TestOrderLineItemProduct withVariantAttributes(OrderLineItemProductVariantAttribute[] variantAttributes) {
        this.variantAttributes = variantAttributes;
        return this;
    }
}