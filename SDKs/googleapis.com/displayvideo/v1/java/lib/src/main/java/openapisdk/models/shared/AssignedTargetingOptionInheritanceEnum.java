package openapisdk.models.shared;


public enum AssignedTargetingOptionInheritanceEnum {
    INHERITANCE_UNSPECIFIED("INHERITANCE_UNSPECIFIED"),
    NOT_INHERITED("NOT_INHERITED"),
    INHERITED_FROM_PARTNER("INHERITED_FROM_PARTNER"),
    INHERITED_FROM_ADVERTISER("INHERITED_FROM_ADVERTISER");

    public final String value;

    private AssignedTargetingOptionInheritanceEnum(String value) {
        this.value = value;
    }
}
