package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Promotion {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("promotionAmount")
    public Amount promotionAmount;
    public Promotion withPromotionAmount(Amount promotionAmount) {
        this.promotionAmount = promotionAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("promotionId")
    public String promotionId;
    public Promotion withPromotionId(String promotionId) {
        this.promotionId = promotionId;
        return this;
    }
}