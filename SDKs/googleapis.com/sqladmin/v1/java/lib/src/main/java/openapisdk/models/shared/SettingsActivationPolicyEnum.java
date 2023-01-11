package openapisdk.models.shared;


public enum SettingsActivationPolicyEnum {
    SQL_ACTIVATION_POLICY_UNSPECIFIED("SQL_ACTIVATION_POLICY_UNSPECIFIED"),
    ALWAYS("ALWAYS"),
    NEVER("NEVER"),
    ON_DEMAND("ON_DEMAND");

    public final String value;

    private SettingsActivationPolicyEnum(String value) {
        this.value = value;
    }
}
