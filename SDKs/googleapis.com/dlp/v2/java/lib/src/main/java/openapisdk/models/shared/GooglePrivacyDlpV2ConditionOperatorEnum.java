package openapisdk.models.shared;


public enum GooglePrivacyDlpV2ConditionOperatorEnum {
    RELATIONAL_OPERATOR_UNSPECIFIED("RELATIONAL_OPERATOR_UNSPECIFIED"),
    EQUAL_TO("EQUAL_TO"),
    NOT_EQUAL_TO("NOT_EQUAL_TO"),
    GREATER_THAN("GREATER_THAN"),
    LESS_THAN("LESS_THAN"),
    GREATER_THAN_OR_EQUALS("GREATER_THAN_OR_EQUALS"),
    LESS_THAN_OR_EQUALS("LESS_THAN_OR_EQUALS"),
    EXISTS("EXISTS");

    public final String value;

    private GooglePrivacyDlpV2ConditionOperatorEnum(String value) {
        this.value = value;
    }
}
