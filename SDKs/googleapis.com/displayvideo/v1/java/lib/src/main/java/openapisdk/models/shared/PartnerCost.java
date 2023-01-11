package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PartnerCost
 * Settings that control a partner cost. A partner cost is any type of expense involved in running a campaign, other than the costs of purchasing impressions (which is called the media cost) and using third-party audience segment data (data fee). Some examples of partner costs include the fees for using DV360, a third-party ad server, or a third-party ad serving verification service.
**/
public class PartnerCost {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("costType")
    public PartnerCostCostTypeEnum costType;
    public PartnerCost withCostType(PartnerCostCostTypeEnum costType) {
        this.costType = costType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("feeAmount")
    public String feeAmount;
    public PartnerCost withFeeAmount(String feeAmount) {
        this.feeAmount = feeAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("feePercentageMillis")
    public String feePercentageMillis;
    public PartnerCost withFeePercentageMillis(String feePercentageMillis) {
        this.feePercentageMillis = feePercentageMillis;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("feeType")
    public PartnerCostFeeTypeEnum feeType;
    public PartnerCost withFeeType(PartnerCostFeeTypeEnum feeType) {
        this.feeType = feeType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoiceType")
    public PartnerCostInvoiceTypeEnum invoiceType;
    public PartnerCost withInvoiceType(PartnerCostInvoiceTypeEnum invoiceType) {
        this.invoiceType = invoiceType;
        return this;
    }
}