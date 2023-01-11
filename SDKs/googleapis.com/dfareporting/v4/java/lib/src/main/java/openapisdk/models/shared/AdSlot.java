package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AdSlot
 * Ad Slot
**/
public class AdSlot {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comment")
    public String comment;
    public AdSlot withComment(String comment) {
        this.comment = comment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("compatibility")
    public AdSlotCompatibilityEnum compatibility;
    public AdSlot withCompatibility(AdSlotCompatibilityEnum compatibility) {
        this.compatibility = compatibility;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("height")
    public String height;
    public AdSlot withHeight(String height) {
        this.height = height;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("linkedPlacementId")
    public String linkedPlacementId;
    public AdSlot withLinkedPlacementId(String linkedPlacementId) {
        this.linkedPlacementId = linkedPlacementId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public AdSlot withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentSourceType")
    public AdSlotPaymentSourceTypeEnum paymentSourceType;
    public AdSlot withPaymentSourceType(AdSlotPaymentSourceTypeEnum paymentSourceType) {
        this.paymentSourceType = paymentSourceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primary")
    public Boolean primary;
    public AdSlot withPrimary(Boolean primary) {
        this.primary = primary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("width")
    public String width;
    public AdSlot withWidth(String width) {
        this.width = width;
        return this;
    }
}