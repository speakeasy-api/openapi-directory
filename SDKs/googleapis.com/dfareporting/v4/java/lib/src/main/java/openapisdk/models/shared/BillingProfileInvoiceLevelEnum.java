package openapisdk.models.shared;


public enum BillingProfileInvoiceLevelEnum {
    ACCOUNT_LEVEL("ACCOUNT_LEVEL"),
    ADVERTISER_LEVEL("ADVERTISER_LEVEL"),
    CAMPAIGN_LEVEL("CAMPAIGN_LEVEL");

    public final String value;

    private BillingProfileInvoiceLevelEnum(String value) {
        this.value = value;
    }
}
