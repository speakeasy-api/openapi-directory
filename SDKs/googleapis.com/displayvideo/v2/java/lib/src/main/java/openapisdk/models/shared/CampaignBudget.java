package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CampaignBudget
 * Settings that control how the campaign budget is allocated.
**/
public class CampaignBudget {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("budgetAmountMicros")
    public String budgetAmountMicros;
    public CampaignBudget withBudgetAmountMicros(String budgetAmountMicros) {
        this.budgetAmountMicros = budgetAmountMicros;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("budgetId")
    public String budgetId;
    public CampaignBudget withBudgetId(String budgetId) {
        this.budgetId = budgetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("budgetUnit")
    public CampaignBudgetBudgetUnitEnum budgetUnit;
    public CampaignBudget withBudgetUnit(CampaignBudgetBudgetUnitEnum budgetUnit) {
        this.budgetUnit = budgetUnit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dateRange")
    public DateRange dateRange;
    public CampaignBudget withDateRange(DateRange dateRange) {
        this.dateRange = dateRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public CampaignBudget withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("externalBudgetId")
    public String externalBudgetId;
    public CampaignBudget withExternalBudgetId(String externalBudgetId) {
        this.externalBudgetId = externalBudgetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("externalBudgetSource")
    public CampaignBudgetExternalBudgetSourceEnum externalBudgetSource;
    public CampaignBudget withExternalBudgetSource(CampaignBudgetExternalBudgetSourceEnum externalBudgetSource) {
        this.externalBudgetSource = externalBudgetSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoiceGroupingId")
    public String invoiceGroupingId;
    public CampaignBudget withInvoiceGroupingId(String invoiceGroupingId) {
        this.invoiceGroupingId = invoiceGroupingId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prismaConfig")
    public PrismaConfig prismaConfig;
    public CampaignBudget withPrismaConfig(PrismaConfig prismaConfig) {
        this.prismaConfig = prismaConfig;
        return this;
    }
}