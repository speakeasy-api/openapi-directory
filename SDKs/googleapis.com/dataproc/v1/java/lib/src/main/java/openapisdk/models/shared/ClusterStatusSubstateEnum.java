package openapisdk.models.shared;


public enum ClusterStatusSubstateEnum {
    UNSPECIFIED("UNSPECIFIED"),
    UNHEALTHY("UNHEALTHY"),
    STALE_STATUS("STALE_STATUS");

    public final String value;

    private ClusterStatusSubstateEnum(String value) {
        this.value = value;
    }
}
