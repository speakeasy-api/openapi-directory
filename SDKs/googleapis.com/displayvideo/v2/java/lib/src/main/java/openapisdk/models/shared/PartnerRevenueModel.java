package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PartnerRevenueModel
 * Settings that control how partner revenue is calculated.
**/
public class PartnerRevenueModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("markupAmount")
    public String markupAmount;
    public PartnerRevenueModel withMarkupAmount(String markupAmount) {
        this.markupAmount = markupAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("markupType")
    public PartnerRevenueModelMarkupTypeEnum markupType;
    public PartnerRevenueModel withMarkupType(PartnerRevenueModelMarkupTypeEnum markupType) {
        this.markupType = markupType;
        return this;
    }
}