package openapisdk.models.shared;


public enum VolumeWorkloadProfileEnum {
    WORKLOAD_PROFILE_UNSPECIFIED("WORKLOAD_PROFILE_UNSPECIFIED"),
    GENERIC("GENERIC"),
    HANA("HANA");

    public final String value;

    private VolumeWorkloadProfileEnum(String value) {
        this.value = value;
    }
}
