package openapisdk.models.shared;


public enum GoogleCloudBillingBudgetsV1ThresholdRuleSpendBasisEnum {
    BASIS_UNSPECIFIED("BASIS_UNSPECIFIED"),
    CURRENT_SPEND("CURRENT_SPEND"),
    FORECASTED_SPEND("FORECASTED_SPEND");

    public final String value;

    private GoogleCloudBillingBudgetsV1ThresholdRuleSpendBasisEnum(String value) {
        this.value = value;
    }
}
