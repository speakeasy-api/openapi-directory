package openapisdk.models.shared;


public enum RestoreConfigNamespacedResourceRestoreModeEnum {
    NAMESPACED_RESOURCE_RESTORE_MODE_UNSPECIFIED("NAMESPACED_RESOURCE_RESTORE_MODE_UNSPECIFIED"),
    DELETE_AND_RESTORE("DELETE_AND_RESTORE"),
    FAIL_ON_CONFLICT("FAIL_ON_CONFLICT");

    public final String value;

    private RestoreConfigNamespacedResourceRestoreModeEnum(String value) {
        this.value = value;
    }
}
