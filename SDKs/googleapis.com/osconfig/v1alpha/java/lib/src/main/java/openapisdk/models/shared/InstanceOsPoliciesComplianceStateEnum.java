package openapisdk.models.shared;


public enum InstanceOsPoliciesComplianceStateEnum {
    OS_POLICY_COMPLIANCE_STATE_UNSPECIFIED("OS_POLICY_COMPLIANCE_STATE_UNSPECIFIED"),
    COMPLIANT("COMPLIANT"),
    NON_COMPLIANT("NON_COMPLIANT"),
    UNKNOWN("UNKNOWN"),
    NO_OS_POLICIES_APPLICABLE("NO_OS_POLICIES_APPLICABLE");

    public final String value;

    private InstanceOsPoliciesComplianceStateEnum(String value) {
        this.value = value;
    }
}
