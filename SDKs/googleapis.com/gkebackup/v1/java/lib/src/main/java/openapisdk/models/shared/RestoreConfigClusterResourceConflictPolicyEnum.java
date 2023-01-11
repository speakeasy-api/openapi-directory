package openapisdk.models.shared;


public enum RestoreConfigClusterResourceConflictPolicyEnum {
    CLUSTER_RESOURCE_CONFLICT_POLICY_UNSPECIFIED("CLUSTER_RESOURCE_CONFLICT_POLICY_UNSPECIFIED"),
    USE_EXISTING_VERSION("USE_EXISTING_VERSION"),
    USE_BACKUP_VERSION("USE_BACKUP_VERSION");

    public final String value;

    private RestoreConfigClusterResourceConflictPolicyEnum(String value) {
        this.value = value;
    }
}
