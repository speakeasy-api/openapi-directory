package openapisdk.models.shared;


public enum InstanceGroupConfigPreemptibilityEnum {
    PREEMPTIBILITY_UNSPECIFIED("PREEMPTIBILITY_UNSPECIFIED"),
    NON_PREEMPTIBLE("NON_PREEMPTIBLE"),
    PREEMPTIBLE("PREEMPTIBLE"),
    SPOT("SPOT");

    public final String value;

    private InstanceGroupConfigPreemptibilityEnum(String value) {
        this.value = value;
    }
}
