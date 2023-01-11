package openapisdk.models.shared;


public enum CloudBuildMembershipSpecSecurityPolicyEnum {
    SECURITY_POLICY_UNSPECIFIED("SECURITY_POLICY_UNSPECIFIED"),
    NON_PRIVILEGED("NON_PRIVILEGED"),
    PRIVILEGED("PRIVILEGED");

    public final String value;

    private CloudBuildMembershipSpecSecurityPolicyEnum(String value) {
        this.value = value;
    }
}
