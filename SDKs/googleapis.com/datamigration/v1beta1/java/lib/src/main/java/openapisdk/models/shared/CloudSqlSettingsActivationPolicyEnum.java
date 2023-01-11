package openapisdk.models.shared;


public enum CloudSqlSettingsActivationPolicyEnum {
    SQL_ACTIVATION_POLICY_UNSPECIFIED("SQL_ACTIVATION_POLICY_UNSPECIFIED"),
    ALWAYS("ALWAYS"),
    NEVER("NEVER");

    public final String value;

    private CloudSqlSettingsActivationPolicyEnum(String value) {
        this.value = value;
    }
}
