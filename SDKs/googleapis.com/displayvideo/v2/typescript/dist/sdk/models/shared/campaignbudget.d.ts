import { SpeakeasyBase } from "../../../internal/utils";
import { DateRange } from "./daterange";
import { PrismaConfig } from "./prismaconfig";
/**
 * Required. Immutable. Specifies whether the budget is measured in currency or impressions.
 */
export declare enum CampaignBudgetBudgetUnitEnum {
    BudgetUnitUnspecified = "BUDGET_UNIT_UNSPECIFIED",
    BudgetUnitCurrency = "BUDGET_UNIT_CURRENCY",
    BudgetUnitImpressions = "BUDGET_UNIT_IMPRESSIONS"
}
/**
 * Required. The external source of the budget.
 */
export declare enum CampaignBudgetExternalBudgetSourceEnum {
    ExternalBudgetSourceUnspecified = "EXTERNAL_BUDGET_SOURCE_UNSPECIFIED",
    ExternalBudgetSourceNone = "EXTERNAL_BUDGET_SOURCE_NONE",
    ExternalBudgetSourceMediaOcean = "EXTERNAL_BUDGET_SOURCE_MEDIA_OCEAN"
}
/**
 * Settings that control how the campaign budget is allocated.
 */
export declare class CampaignBudget extends SpeakeasyBase {
    /**
     * Required. The total amount the linked insertion order segments can budget. The amount is in micros. Must be greater than 0. For example, 500000000 represents 500 standard units of the currency.
     */
    budgetAmountMicros?: string;
    /**
     * The unique ID of the campaign budget. Assigned by the system. Do not set for new budgets. Must be included when updating or adding budgets to campaign_budgets. Otherwise, a new ID will be generated and assigned.
     */
    budgetId?: string;
    /**
     * Required. Immutable. Specifies whether the budget is measured in currency or impressions.
     */
    budgetUnit?: CampaignBudgetBudgetUnitEnum;
    /**
     * A date range.
     */
    dateRange?: DateRange;
    /**
     * Required. The display name of the budget. Must be UTF-8 encoded with a maximum size of 240 bytes.
     */
    displayName?: string;
    /**
     * Immutable. The ID identifying this budget to the external source. If this field is set and the invoice detail level of the corresponding billing profile is set to "Budget level PO", all impressions served against this budget will include this ID on the invoice. Must be unique under the campaign.
     */
    externalBudgetId?: string;
    /**
     * Required. The external source of the budget.
     */
    externalBudgetSource?: CampaignBudgetExternalBudgetSourceEnum;
    /**
     * Immutable. The ID used to group budgets to be included the same invoice. If this field is set and the invoice level of the corresponding billing profile is set to "Budget invoice grouping ID", all external_budget_id sharing the same invoice_grouping_id will be grouped in the same invoice.
     */
    invoiceGroupingId?: string;
    /**
     * Settings specific to the Mediaocean Prisma tool.
     */
    prismaConfig?: PrismaConfig;
}
