import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Invoice level for this billing profile. Used to group fees into separate invoices by account, advertiser, or campaign.
 */
export declare enum BillingProfileInvoiceLevelEnum {
    AccountLevel = "ACCOUNT_LEVEL",
    AdvertiserLevel = "ADVERTISER_LEVEL",
    CampaignLevel = "CAMPAIGN_LEVEL"
}
/**
 * Status of this billing profile.This is a read-only field.
 */
export declare enum BillingProfileStatusEnum {
    UnderReview = "UNDER_REVIEW",
    Active = "ACTIVE",
    Archived = "ARCHIVED"
}
/**
 * Contains properties of a Campaign Manager Billing Profile.
 */
export declare class BillingProfile extends SpeakeasyBase {
    /**
     * Consolidated invoice option for this billing profile. Used to get a single, consolidated invoice across the chosen invoice level.
     */
    consolidatedInvoice?: boolean;
    /**
     * Country code of this billing profile.This is a read-only field.
     */
    countryCode?: string;
    /**
     * Billing currency code in ISO 4217 format.This is a read-only field.
     */
    currencyCode?: string;
    /**
     * ID of this billing profile. This is a read-only, auto-generated field.
     */
    id?: string;
    /**
     * Invoice level for this billing profile. Used to group fees into separate invoices by account, advertiser, or campaign.
     */
    invoiceLevel?: BillingProfileInvoiceLevelEnum;
    /**
     * True if the billing profile is the account default profile. This is a read-only field.
     */
    isDefault?: boolean;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#billingProfile".
     */
    kind?: string;
    /**
     * Name of this billing profile. This is a required field and must be less than 256 characters long and must be unique among billing profile in the same account.
     */
    name?: string;
    /**
     * The ID of the payment account the billing profile belongs to. This is a read-only field.
     */
    paymentsAccountId?: string;
    /**
     * The ID of the payment customer the billing profile belongs to. This is a read-only field.
     */
    paymentsCustomerId?: string;
    /**
     * Purchase order (PO) for this billing profile. This PO number is used in the invoices for all of the advertisers in this billing profile.
     */
    purchaseOrder?: string;
    /**
     * The ID of the secondary payment customer the billing profile belongs to. This is a read-only field.
     */
    secondaryPaymentsCustomerId?: string;
    /**
     * Status of this billing profile.This is a read-only field.
     */
    status?: BillingProfileStatusEnum;
}
