package openapisdk.models.shared;


public enum InstanceWorkloadProfileEnum {
    WORKLOAD_PROFILE_UNSPECIFIED("WORKLOAD_PROFILE_UNSPECIFIED"),
    WORKLOAD_PROFILE_GENERIC("WORKLOAD_PROFILE_GENERIC"),
    WORKLOAD_PROFILE_HANA("WORKLOAD_PROFILE_HANA");

    public final String value;

    private InstanceWorkloadProfileEnum(String value) {
        this.value = value;
    }
}
