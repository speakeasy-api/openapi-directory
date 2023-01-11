package openapisdk.models.shared;


public enum InsertionOrderBillableOutcomeEnum {
    BILLABLE_OUTCOME_UNSPECIFIED("BILLABLE_OUTCOME_UNSPECIFIED"),
    BILLABLE_OUTCOME_PAY_PER_IMPRESSION("BILLABLE_OUTCOME_PAY_PER_IMPRESSION"),
    BILLABLE_OUTCOME_PAY_PER_CLICK("BILLABLE_OUTCOME_PAY_PER_CLICK"),
    BILLABLE_OUTCOME_PAY_PER_VIEWABLE_IMPRESSION("BILLABLE_OUTCOME_PAY_PER_VIEWABLE_IMPRESSION");

    public final String value;

    private InsertionOrderBillableOutcomeEnum(String value) {
        this.value = value;
    }
}
