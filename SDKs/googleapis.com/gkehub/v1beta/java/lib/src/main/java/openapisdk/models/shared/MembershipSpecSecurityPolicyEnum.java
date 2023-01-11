package openapisdk.models.shared;


public enum MembershipSpecSecurityPolicyEnum {
    SECURITY_POLICY_UNSPECIFIED("SECURITY_POLICY_UNSPECIFIED"),
    NON_PRIVILEGED("NON_PRIVILEGED"),
    PRIVILEGED("PRIVILEGED");

    public final String value;

    private MembershipSpecSecurityPolicyEnum(String value) {
        this.value = value;
    }
}
