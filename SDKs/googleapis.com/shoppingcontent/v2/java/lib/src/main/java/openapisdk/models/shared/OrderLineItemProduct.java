package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OrderLineItemProduct {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("brand")
    public String brand;
    public OrderLineItemProduct withBrand(String brand) {
        this.brand = brand;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channel")
    public String channel;
    public OrderLineItemProduct withChannel(String channel) {
        this.channel = channel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("condition")
    public String condition;
    public OrderLineItemProduct withCondition(String condition) {
        this.condition = condition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentLanguage")
    public String contentLanguage;
    public OrderLineItemProduct withContentLanguage(String contentLanguage) {
        this.contentLanguage = contentLanguage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fees")
    public OrderLineItemProductFee[] fees;
    public OrderLineItemProduct withFees(OrderLineItemProductFee[] fees) {
        this.fees = fees;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gtin")
    public String gtin;
    public OrderLineItemProduct withGtin(String gtin) {
        this.gtin = gtin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public OrderLineItemProduct withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageLink")
    public String imageLink;
    public OrderLineItemProduct withImageLink(String imageLink) {
        this.imageLink = imageLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemGroupId")
    public String itemGroupId;
    public OrderLineItemProduct withItemGroupId(String itemGroupId) {
        this.itemGroupId = itemGroupId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mpn")
    public String mpn;
    public OrderLineItemProduct withMpn(String mpn) {
        this.mpn = mpn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offerId")
    public String offerId;
    public OrderLineItemProduct withOfferId(String offerId) {
        this.offerId = offerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price")
    public Price price;
    public OrderLineItemProduct withPrice(Price price) {
        this.price = price;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shownImage")
    public String shownImage;
    public OrderLineItemProduct withShownImage(String shownImage) {
        this.shownImage = shownImage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetCountry")
    public String targetCountry;
    public OrderLineItemProduct withTargetCountry(String targetCountry) {
        this.targetCountry = targetCountry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public OrderLineItemProduct withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("variantAttributes")
    public OrderLineItemProductVariantAttribute[] variantAttributes;
    public OrderLineItemProduct withVariantAttributes(OrderLineItemProductVariantAttribute[] variantAttributes) {
        this.variantAttributes = variantAttributes;
        return this;
    }
}