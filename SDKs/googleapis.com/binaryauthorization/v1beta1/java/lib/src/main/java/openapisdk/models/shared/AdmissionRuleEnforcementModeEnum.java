package openapisdk.models.shared;


public enum AdmissionRuleEnforcementModeEnum {
    ENFORCEMENT_MODE_UNSPECIFIED("ENFORCEMENT_MODE_UNSPECIFIED"),
    ENFORCED_BLOCK_AND_AUDIT_LOG("ENFORCED_BLOCK_AND_AUDIT_LOG"),
    DRYRUN_AUDIT_LOG_ONLY("DRYRUN_AUDIT_LOG_ONLY");

    public final String value;

    private AdmissionRuleEnforcementModeEnum(String value) {
        this.value = value;
    }
}
