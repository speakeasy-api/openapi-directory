package openapisdk.models.shared;


public enum GkeNodePoolTargetRolesEnum {
    ROLE_UNSPECIFIED("ROLE_UNSPECIFIED"),
    DEFAULT_("DEFAULT"),
    CONTROLLER("CONTROLLER"),
    SPARK_DRIVER("SPARK_DRIVER"),
    SPARK_EXECUTOR("SPARK_EXECUTOR");

    public final String value;

    private GkeNodePoolTargetRolesEnum(String value) {
        this.value = value;
    }
}
