package openapisdk.models.operations;


public enum GetRuleCompliance200ApplicationJsonDataRulesModeEnum {
    FULL_COMPLIANCE("full-compliance"),
    CHANGES_ONLY("changes-only"),
    REPORTS_DISABLED("reports-disabled");

    public final String value;

    private GetRuleCompliance200ApplicationJsonDataRulesModeEnum(String value) {
        this.value = value;
    }
}
