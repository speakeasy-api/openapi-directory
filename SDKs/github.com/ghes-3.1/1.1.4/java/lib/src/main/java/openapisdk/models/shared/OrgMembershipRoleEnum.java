package openapisdk.models.shared;


public enum OrgMembershipRoleEnum {
    ADMIN("admin"),
    MEMBER("member"),
    BILLING_MANAGER("billing_manager");

    public final String value;

    private OrgMembershipRoleEnum(String value) {
        this.value = value;
    }
}
