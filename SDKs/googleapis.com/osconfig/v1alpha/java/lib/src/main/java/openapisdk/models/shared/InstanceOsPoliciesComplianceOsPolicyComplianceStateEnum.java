package openapisdk.models.shared;


public enum InstanceOsPoliciesComplianceOsPolicyComplianceStateEnum {
    OS_POLICY_COMPLIANCE_STATE_UNSPECIFIED("OS_POLICY_COMPLIANCE_STATE_UNSPECIFIED"),
    COMPLIANT("COMPLIANT"),
    NON_COMPLIANT("NON_COMPLIANT"),
    UNKNOWN("UNKNOWN"),
    NO_OS_POLICIES_APPLICABLE("NO_OS_POLICIES_APPLICABLE");

    public final String value;

    private InstanceOsPoliciesComplianceOsPolicyComplianceStateEnum(String value) {
        this.value = value;
    }
}
