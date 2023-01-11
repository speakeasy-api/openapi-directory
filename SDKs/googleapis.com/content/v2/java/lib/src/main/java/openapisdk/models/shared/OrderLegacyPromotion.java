package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OrderLegacyPromotion {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("benefits")
    public OrderLegacyPromotionBenefit[] benefits;
    public OrderLegacyPromotion withBenefits(OrderLegacyPromotionBenefit[] benefits) {
        this.benefits = benefits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("effectiveDates")
    public String effectiveDates;
    public OrderLegacyPromotion withEffectiveDates(String effectiveDates) {
        this.effectiveDates = effectiveDates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("genericRedemptionCode")
    public String genericRedemptionCode;
    public OrderLegacyPromotion withGenericRedemptionCode(String genericRedemptionCode) {
        this.genericRedemptionCode = genericRedemptionCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public OrderLegacyPromotion withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("longTitle")
    public String longTitle;
    public OrderLegacyPromotion withLongTitle(String longTitle) {
        this.longTitle = longTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productApplicability")
    public String productApplicability;
    public OrderLegacyPromotion withProductApplicability(String productApplicability) {
        this.productApplicability = productApplicability;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("redemptionChannel")
    public String redemptionChannel;
    public OrderLegacyPromotion withRedemptionChannel(String redemptionChannel) {
        this.redemptionChannel = redemptionChannel;
        return this;
    }
}