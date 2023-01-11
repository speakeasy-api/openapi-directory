package openapisdk.models.shared;


public enum SchedulingNodeAffinityOperatorEnum {
    OPERATOR_UNSPECIFIED("OPERATOR_UNSPECIFIED"),
    IN("IN"),
    NOT_IN("NOT_IN");

    public final String value;

    private SchedulingNodeAffinityOperatorEnum(String value) {
        this.value = value;
    }
}
