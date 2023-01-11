package openapisdk.models.shared;


public enum SettingsPricingPlanEnum {
    SQL_PRICING_PLAN_UNSPECIFIED("SQL_PRICING_PLAN_UNSPECIFIED"),
    PACKAGE_("PACKAGE"),
    PER_USE("PER_USE");

    public final String value;

    private SettingsPricingPlanEnum(String value) {
        this.value = value;
    }
}
