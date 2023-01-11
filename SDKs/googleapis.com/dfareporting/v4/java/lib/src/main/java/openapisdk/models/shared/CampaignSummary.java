package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CampaignSummary
 * Represents a summarized campaign information associated with this invoice.
**/
public class CampaignSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billingInvoiceCode")
    public String billingInvoiceCode;
    public CampaignSummary withBillingInvoiceCode(String billingInvoiceCode) {
        this.billingInvoiceCode = billingInvoiceCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("campaignId")
    public String campaignId;
    public CampaignSummary withCampaignId(String campaignId) {
        this.campaignId = campaignId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preTaxAmountMicros")
    public String preTaxAmountMicros;
    public CampaignSummary withPreTaxAmountMicros(String preTaxAmountMicros) {
        this.preTaxAmountMicros = preTaxAmountMicros;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxAmountMicros")
    public String taxAmountMicros;
    public CampaignSummary withTaxAmountMicros(String taxAmountMicros) {
        this.taxAmountMicros = taxAmountMicros;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalAmountMicros")
    public String totalAmountMicros;
    public CampaignSummary withTotalAmountMicros(String totalAmountMicros) {
        this.totalAmountMicros = totalAmountMicros;
        return this;
    }
}